import { BibleVerse } from '../types';
import { SEED_CHAPTERS } from '../data/bibleData';
import { getExpectedVerseCount } from '../data/bibleVerseCounts';
import { CURATED_CANONICAL_CHAPTERS } from '../data/canonicalBibleEngine';

const OFFLINE_CHAPTERS_KEY = 'kal_offline_chapters_v4';
const OFFLINE_STATS_KEY = 'kal_offline_stats_v4';

// Old keys to automatically purge
const OBSOLETE_KEYS = [
  'kal_offline_chapters_v1',
  'kal_offline_chapters_v2',
  'kal_offline_chapters_v3',
  'kal_offline_stats_v1',
  'kal_offline_stats_v2',
  'kal_offline_stats_v3'
];

export interface StoredChapterData {
  bookId: string;
  bookNameAm: string;
  bookNameEn: string;
  chapter: number;
  verses: BibleVerse[];
  cachedAt: number;
}

export interface OfflineCacheStats {
  totalChaptersCached: number;
  lastCachedTimestamp: number | null;
  cachedKeys: string[];
}

/**
 * Checks if a verse is genuine and not a synthetic placeholder
 */
export function isAuthenticVerse(verse: BibleVerse): boolean {
  if (!verse || !verse.textAm) return false;
  const text = verse.textAm.trim();
  // Filter out any generated placeholders
  if (text.includes('የእግዚአብሔር ቃል ለሕይወታችን መብራት ለመንገዳችንም ብርሃን ነው')) return false;
  if (text.includes('የወንጌላዊ ቀኖና ትምህርትና')) return false;
  return text.length > 5;
}

/**
 * Checks if an entire chapter is authentic and contains no placeholder junk
 */
export function isAuthenticChapter(verses: BibleVerse[]): boolean {
  if (!verses || verses.length === 0) return false;
  return verses.every(isAuthenticVerse);
}

/**
 * Automatically purge obsolete and corrupted caches
 */
export function purgeObsoleteCaches(): void {
  try {
    for (const key of OBSOLETE_KEYS) {
      localStorage.removeItem(key);
    }
  } catch (_e) {
    // ignore
  }
}

// Run cleanup immediately on load
purgeObsoleteCaches();

// Read raw stored map of chapters
function getStoredChaptersMap(): Record<string, StoredChapterData> {
  try {
    const raw = localStorage.getItem(OFFLINE_CHAPTERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('Failed to read offline chapters map:', e);
    return {};
  }
}

// Save raw map of chapters
function saveStoredChaptersMap(map: Record<string, StoredChapterData>) {
  try {
    localStorage.setItem(OFFLINE_CHAPTERS_KEY, JSON.stringify(map));
  } catch (e) {
    console.warn('LocalStorage full or quota reached when saving chapter:', e);
  }
}

/**
 * Saves a chapter to the local offline cache only if genuine
 */
export function saveOfflineChapter(
  bookId: string,
  chapter: number,
  bookNameAm: string,
  bookNameEn: string,
  verses: BibleVerse[]
): void {
  if (!verses || verses.length === 0) return;
  if (!isAuthenticChapter(verses)) return; // Never save synthetic verses

  const key = `${bookId.toUpperCase()}_${chapter}`;
  const map = getStoredChaptersMap();
  map[key] = {
    bookId: bookId.toUpperCase(),
    bookNameAm,
    bookNameEn,
    chapter,
    verses: [...verses].sort((a, b) => a.verse - b.verse),
    cachedAt: Date.now(),
  };

  saveStoredChaptersMap(map);
}

/**
 * Retrieves a chapter from offline storage only if verified authentic
 */
export function getOfflineChapter(bookId: string, chapter: number, _generateIfMissing: boolean = false): BibleVerse[] | null {
  const key = `${bookId.toUpperCase()}_${chapter}`;
  const expectedCount = getExpectedVerseCount(bookId, chapter);

  // 1. Check curated seed chapters first
  const curated = CURATED_CANONICAL_CHAPTERS[key] || SEED_CHAPTERS[key];
  if (curated && curated.length >= expectedCount && isAuthenticChapter(curated)) {
    return [...curated].sort((a, b) => a.verse - b.verse);
  }

  // 2. Check user local persistent cache if it contains authentic complete chapter
  const map = getStoredChaptersMap();
  if (map[key] && map[key].verses && map[key].verses.length >= expectedCount) {
    const verses = map[key].verses;
    if (isAuthenticChapter(verses)) {
      return [...verses].sort((a, b) => a.verse - b.verse);
    }
  }

  return null;
}

/**
 * Checks if a specific chapter is available offline
 */
export function isChapterAvailableOffline(bookId: string, chapter: number): boolean {
  const key = `${bookId.toUpperCase()}_${chapter}`;
  if (CURATED_CANONICAL_CHAPTERS[key] || SEED_CHAPTERS[key]) return true;
  const map = getStoredChaptersMap();
  return Boolean(map[key] && map[key].verses && isAuthenticChapter(map[key].verses));
}

/**
 * Get stats of currently cached offline chapters
 */
export function getOfflineCacheStats(): OfflineCacheStats {
  const map = getStoredChaptersMap();
  const keys = Object.keys(map).filter(k => map[k] && isAuthenticChapter(map[k].verses));
  let lastTimestamp: number | null = null;

  for (const k of keys) {
    const item = map[k];
    if (item && item.cachedAt) {
      if (lastTimestamp === null || item.cachedAt > lastTimestamp) {
        lastTimestamp = item.cachedAt;
      }
    }
  }

  return {
    totalChaptersCached: keys.length,
    lastCachedTimestamp: lastTimestamp,
    cachedKeys: keys,
  };
}

/**
 * Clear all offline stored chapters
 */
export function clearAllOfflineChapters(): void {
  try {
    localStorage.removeItem(OFFLINE_CHAPTERS_KEY);
    localStorage.removeItem(OFFLINE_STATS_KEY);
    purgeObsoleteCaches();
  } catch (e) {
    console.warn('Failed to clear offline storage:', e);
  }
}

/**
 * Pre-populate initial authentic chapters into offline storage
 */
export function initializeSeedChaptersInOfflineStorage(): void {
  purgeObsoleteCaches();
  try {
    const existing = getStoredChaptersMap();
    let hasUpdates = false;

    for (const [key, verses] of Object.entries(CURATED_CANONICAL_CHAPTERS)) {
      if (!existing[key] && verses && verses.length > 0 && isAuthenticChapter(verses)) {
        const parts = key.split('_');
        const bookId = parts[0];
        const chapter = parseInt(parts[1], 10) || 1;
        existing[key] = {
          bookId,
          bookNameAm: '',
          bookNameEn: '',
          chapter,
          verses: [...verses].sort((a, b) => a.verse - b.verse),
          cachedAt: Date.now(),
        };
        hasUpdates = true;
      }
    }

    if (hasUpdates) {
      saveStoredChaptersMap(existing);
    }
  } catch (e) {
    console.warn('Seed initialization error:', e);
  }
}
