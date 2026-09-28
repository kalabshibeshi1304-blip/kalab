import { GoogleGenAI } from '@google/genai';
import { PROTESTANT_BOOKS, getBookById } from '../../src/data/bibleData';
import { getExpectedVerseCount } from '../../src/data/bibleVerseCounts';
import { generateCanonicalChapterVerses, CURATED_CANONICAL_CHAPTERS } from '../../src/data/canonicalBibleEngine';

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (apiKey) {
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return new GoogleGenAI({
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const bookParam = req.query.book || req.body?.book;
  const chapterParam = req.query.chapter || req.body?.chapter;

  if (!bookParam || !chapterParam) {
    return res.status(400).json({ error: 'Book and chapter are required' });
  }

  const chapterNum = Number(chapterParam);
  const matchedBook = PROTESTANT_BOOKS.find(
    (b) =>
      b.nameAm === bookParam ||
      b.nameEn.toLowerCase() === String(bookParam).toLowerCase() ||
      b.id.toUpperCase() === String(bookParam).toUpperCase()
  ) || PROTESTANT_BOOKS[0];

  const bookId = matchedBook.id;
  const key = `${bookId.toUpperCase()}_${chapterNum}`;

  // 1. If curated authentic chapter exists in precompiled storage, deliver instantly
  if (CURATED_CANONICAL_CHAPTERS[key] && CURATED_CANONICAL_CHAPTERS[key].length > 0) {
    return res.status(200).json({
      book: matchedBook.nameAm,
      chapter: chapterNum,
      verses: CURATED_CANONICAL_CHAPTERS[key],
    });
  }

  // 2. Generate canonical verses from canonical Bible Engine
  const canonicalVerses = generateCanonicalChapterVerses(bookId, chapterNum);
  const expectedCount = getExpectedVerseCount(matchedBook.id, chapterNum);

  // 3. Deliver canonical verses
  return res.status(200).json({
    book: matchedBook.nameAm,
    chapter: chapterNum,
    verses: canonicalVerses,
  });
}
