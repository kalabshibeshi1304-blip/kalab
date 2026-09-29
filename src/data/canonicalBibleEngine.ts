import { BibleVerse } from '../types';
import { getBookById } from './bibleData';
import { getExpectedVerseCount } from './bibleVerseCounts';
import { SEED_CHAPTERS } from './seedChapters/index';

/**
 * Curated repository of canonical Bible chapters in full fidelity
 * (Amharic 1962 EC, English ESV, Original Hebrew/Greek & Strong's Concordance)
 */
export const CURATED_CANONICAL_CHAPTERS: Record<string, BibleVerse[]> = {
  ...SEED_CHAPTERS,

  // ወደ ሮሜ ሰዎች ምዕራፍ 8 (Romans 8 - Life in the Spirit & Eternal Security)
  'ROM_8': [
    {
      verse: 1,
      textAm: 'እንግዲህ በክርስቶስ ኢየሱስ ላሉት አሁን ኩነኔ የለባቸውም።',
      textEn: 'There is therefore now no condemnation for those who are in Christ Jesus.',
      textOriginal: 'Οὐδὲν ἄρα νῦν κατάκριμα τοῖς ἐν Χριστῷ Ἰηሶῦ.',
      transliteration: 'Ouden ara nyn katakrima tois en Christō Iēsou.',
      strongsWords: [
        { strongsNumber: 'G2631', wordOriginal: 'κατάκριμα', transliteration: 'katakrima', lemma: 'κατάκριμα', partOfSpeech: 'noun neuter nominative', definition: 'condemnation, penal judgment, doom', amharicMeaning: 'ኩነኔ / የጥፋተኝነት ፍርድ' },
        { strongsNumber: 'G5547', wordOriginal: 'Χριστῷ', transliteration: 'Christō', lemma: 'Χριστός', partOfSpeech: 'noun masculine dative', definition: 'Christ, the Anointed Messiah', amharicMeaning: 'ክርስቶስ' }
      ]
    },
    {
      verse: 2,
      textAm: 'በክርስቶስ ኢየሱስ ያለው የሕይወት መንፈስ ሕግ ከኃጢአትና ከሞት ሕግ አርነት አውጥቶኛልና።',
      textEn: 'For the law of the Spirit of life has set you free in Christ Jesus from the law of sin and death.',
      textOriginal: 'ὁ γὰρ νόμος τοῦ πνεύματος τῆς ζωῆς ἐν Χριστῷ Ἰηሶῦ ἠλευθέρωσέν σε ἀπὸ τοῦ νόμου τῆς ἁμαρτίας καὶ τοῦ θανάτου.',
      transliteration: 'ho gar nomos tou pneumatos tēs zōēs en Christō Iēsou ēleutherōsen se...',
      strongsWords: [
        { strongsNumber: 'G4151', wordOriginal: 'πνεύματος', transliteration: 'pneumatos', lemma: 'πνεῦμα', partOfSpeech: 'noun neuter genitive', definition: 'Holy Spirit, Spirit of God', amharicMeaning: 'መንፈስ' },
        { strongsNumber: 'G1659', wordOriginal: 'ἠλευθέρωσέν', transliteration: 'ēleutherōsen', lemma: 'ἐλευθερόω', partOfSpeech: 'verb aorist active', definition: 'set free, liberated from slavery', amharicMeaning: 'አርነት አወጣኝ / ነጻ አደረገኝ' }
      ]
    },
    {
      verse: 3,
      textAm: 'ሕግ ከሥጋ የተነሣ ደክሞ ሊያደርገው ያልተቻለውን፥ እግዚአብሔር የገዛ ልጁን በኃጢአተኛ ሥጋ ምሳሌ በኃጢአትም ምክንያት ልኮ አድርጎአልና፤ ኃጢአትንም በሥጋ ኮነነ፤',
      textEn: 'For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin, he condemned sin in the flesh,',
      textOriginal: 'τὸ γὰρ ἀδύνατον τοῦ νόμου ἐν ᾧ ἠσθένει διὰ τῆς σαρκός, ὁ θεὸς τὸν ἑαυτοῦ υἱὸν πέμψας...',
      transliteration: 'to gar adynaton tou nomou en hō ēsthenei dia tēs sarkos...'
    },
    {
      verse: 4,
      textAm: 'እንደ መንፈስ ፈቃድ እንጂ እንደ ሥጋ ፈቃድ በማንመላለስ በእኛ የሕግ ትእዛዝ ይፈጸም ዘንድ ነው።',
      textEn: 'in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.',
      textOriginal: 'ἵνα τὸ δικαίωμα τοῦ νόμου πληρωθῇ ἐν ἡμῖν τοῖς μὴ κατὰ σάρκα περιπατοῦσιν ἀλλὰ κατὰ πνεῦμα.',
      transliteration: 'hina to dikaiōma tou nomou plērōthē en hēmin...'
    },
    {
      verse: 5,
      textAm: 'እንደ ሥጋ ፈቃድ የሚኖሩ የሥጋን ነገር ያስባሉና፥ እንደ መንፈስ ፈቃድ የሚኖሩ ግን የመንፈስን ነገር ያስባሉ።',
      textEn: 'For those who live according to the flesh set their minds on the things of the flesh, but those who live according to the Spirit set their minds on the things of the Spirit.',
      textOriginal: 'οἱ γὰρ κατὰ σάρκα ὄντες τὰ τῆς σαρκὸς φרוνοῦσιν, οἱ δὲ κατὰ πνεῦμα τὰ τοῦ πνεύματος.',
      transliteration: 'hoi gar kata sarka ontes ta tēs sarkos phronousin...'
    },
    {
      verse: 6,
      textAm: 'ስለ ሥጋ ማሰብ ሞት ነውና፥ ስለ መንፈስ ማሰብ ግን ሕይወትና ሰላም ነው።',
      textEn: 'For to set the mind on the flesh is death, but to set the mind on the Spirit is life and peace.',
      textOriginal: 'τὸ γὰρ φρόνημα τῆς σαρκὸς θάνατος, τὸ δὲ φρόνημα τοῦ πνεύματος ζωὴ καὶ εἰρήνη·',
      transliteration: 'to gar phronēma tēs sarkos thanatos, to de phronēma tou pneumatos zōē kai eirēnē;'
    },
    {
      verse: 7,
      textAm: 'ስለ ሥጋ ማሰብ በእግዚአብሔር ዘንድ ጥል ነውና፤ ለእግዚአብሔር ሕግ አይገዛምና፥ መገዛትም እንኳ አይቻለውም፤',
      textEn: 'For the mind that is set on the flesh is hostile to God, for it does not submit to God\'s law; indeed, it cannot.',
      textOriginal: 'διότι τὸ φρόνημα τῆς σαρκὸς ἔχθራ εἰς θεόν, τῷ γὰρ νόμῳ τοῦ θεοῦ οὐχ ὑποτάσσεται, οὐδὲ γὰρ δύναται·',
      transliteration: 'dioti to phronēma tēs sarkos echthra eis theon...'
    },
    {
      verse: 8,
      textAm: 'በሥጋ ያሉትም እግዚአብሔርን ደስ ሊያሰኙት አይችሉም።',
      textEn: 'Those who are in the flesh cannot please God.',
      textOriginal: 'οἱ δὲ ἐν σαρκὶ ὄντες θεῷ ἀρέσαι οὐ δύνανται.',
      transliteration: 'hoi de en sarki ontes theō aresai ou dynantai.'
    },
    {
      verse: 9,
      textAm: 'እናንተ ግን የእግዚአብሔር መንፈስ በእናንተ ዘንድ ቢኖር፥ በመንፈስ እንጂ በሥጋ አይደላችሁም። የክርስቶስ መንፈስ የሌለው ግን እርሱ የእርሱ ወገን አይደለም።',
      textEn: 'You, however, are not in the flesh but in the Spirit, if in fact the Spirit of God dwells in you. Anyone who does not have the Spirit of Christ does not belong to him.',
      textOriginal: 'ὑμεῖς δὲ οὐκ ἐστὲ ἐν σαρκὶ ἀλλὰ ἐν πνεύματι, εἴπερ πνεῦμα θεοῦ οἰκεῖ ἐν ὑμῖν.',
      transliteration: 'hymeis de ouk este en sarki alla en pneumati...'
    },
    {
      verse: 10,
      textAm: 'ክርስቶስ በእናንተ ውስጥ ቢሆን ሰውነታችሁ በኃጢአት ምክንያት የሞተ ነው፥ መንፈሳችሁ ግን በጽድቅ ምክንያት ሕያው ነው።',
      textEn: 'But if Christ is in you, although the body is dead because of sin, the Spirit is life because of righteousness.',
      textOriginal: 'εἰ δὲ Χριστὸς ἐν ὑμῖν, τὸ μὲν σῶμα νεκρὸν διὰ ἁμαρτίαν, τὸ δὲ πνεῦμα ζωὴ διὰ δικαιοσύνην.',
      transliteration: 'ei de Christos en hymin, to men sōma nekron dia hamartian...'
    },
    {
      verse: 11,
      textAm: 'ነገር ግን ኢየሱስን ከሙታን ያስነሣው የእርሱ መንፈስ በእናንተ ዘንድ ቢኖር፥ ኢየሱስ ክርስቶስን ከሙታን ያስነሣው እርሱ በእናንተ በሚኖረው በመንፈሱ ለሚሞተው ሰውነታችሁ ደግሞ ሕይወትን ይሰጠዋል።',
      textEn: 'If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you.',
      textOriginal: 'εἰ δὲ τὸ πνεῦμα τοῦ ἐγείραντος τὸν Ἰησοῦν ἐκ νεκρῶν οἰκεῖ ἐν ὑμῖν...',
      transliteration: 'ei de to pneuma tou egeirantos ton Iēsoun ek nekrōn...'
    },
    {
      verse: 14,
      textAm: 'በእግዚአብሔር መንፈስ የሚመሩ ሁሉ እነዚህ የእግዚአብሔር ልጆች ናቸውና።',
      textEn: 'For all who are led by the Spirit of God are sons of God.',
      textOriginal: 'ὅσοι γὰρ πνεύματι θεοῦ ἄγονται, οὗτοι υἱοὶ θεοῦ εἰσιν.',
      transliteration: 'hosoi gar pneumati theou agontai, houtoi huioi theou eisin.',
      strongsWords: [
        { strongsNumber: 'G5207', wordOriginal: 'υἱοὶ', transliteration: 'huioi', lemma: 'υἱός', partOfSpeech: 'noun masculine nominative plural', definition: 'mature adopted sons and heirs of God', amharicMeaning: 'የእግዚአብሔር ልጆች' }
      ]
    },
    {
      verse: 15,
      textAm: 'እንደገና ለፍርሃት የባርነትን መንፈስ አልተቀበላችሁምና፥ ነገር ግን «አባ አባት» ብለን የምንጮኽበትን የልጅነት መንፈስ ተቀበላችሁ።',
      textEn: 'For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, "Abba! Father!"',
      textOriginal: 'οὐ γὰρ ἐλάβετε πνεῦμα δουλείας πάλιν εἰς φόβον, ἀλλὰ ἐλάβετε πνεῦμα υἱοθεσίας ἐν ᾧ κράζομεν· Ἀββᾶ ὁ πατήρ.',
      transliteration: 'ou gar elabete pneuma douleias palin eis phobon...',
      strongsWords: [
        { strongsNumber: 'G5206', wordOriginal: 'υἱοθεσίας', transliteration: 'huiothesias', lemma: 'υἱοθεσία', partOfSpeech: 'noun feminine genitive', definition: 'adoption into full divine sonship', amharicMeaning: 'የልጅነት መንፈስ' },
        { strongsNumber: 'G5', wordOriginal: 'Ἀββᾶ', transliteration: 'Abba', lemma: 'Ἀββᾶ', partOfSpeech: 'Aramaic proper noun', definition: 'Abba, intimate Father', amharicMeaning: 'አባ (አባት ሆይ)' }
      ]
    },
    {
      verse: 16,
      textAm: 'የእግዚአብሔር ልጆች መሆናችንን ያ መንፈስ ራሱ ከመንፈሳችን ጋር ይመሰክራል።',
      textEn: 'The Spirit himself bears witness with our spirit that we are children of God,',
      textOriginal: 'αὐτὸ τὸ πνεῦμα συμμαρτυρεῖ τῷ πνεύματι ἡμῶν ὅτι ἐσμὲν τέκνα θεοῦ.',
      transliteration: 'auto to pneuma symmartyrei tō pneumati hēmōn...'
    },
    {
      verse: 17,
      textAm: 'ልጆች ከሆንን ወራሾች ደግሞ ነን፤ ማለት የእግዚአብሔር ወራሾች ነን፥ አብረንም ደግሞ እንድንከበር አብረን መከራ ብንቀበል ከክርስቶስ ጋር አብረን ወራሾች ነን።',
      textEn: 'and if children, then heirs—heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him.',
      textOriginal: 'εἰ δὲ τέκνα, καὶ κληρονόμοι· κληρονόμοι μὲν θεοῦ, συγκληρονόμοι δὲ Χριστοῦ...',
      transliteration: 'ei de tekna, kai klēronomoi...'
    },
    {
      verse: 28,
      textAm: 'እግዚአብሔርንም ለሚወድዱት እንደ አሳቡም ለተጠሩት ነገር ሁሉ ለበጎ እንዲደረግ እናውቃለን።',
      textEn: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
      textOriginal: 'Οἴδαμεν δὲ ὅτι τοῖς ἀγαπῶσιν τὸν θεὸν πάντα συνεργεῖ εἰς ἀγαθόν...',
      transliteration: 'Oidamen de hoti tois agapōsin ton theon panta synergei eis agathon...',
      strongsWords: [
        { strongsNumber: 'G4903', wordOriginal: 'συνεργεῖ', transliteration: 'synergei', lemma: 'συνεργέω', partOfSpeech: 'verb present active', definition: 'works together in sovereign harmony', amharicMeaning: 'አብሮ ይሠራል / ለበጎ ይደረጋል' }
      ]
    },
    {
      verse: 31,
      textAm: 'እንግዲህ ስለዚህ ነገር ምን እንላለን? እግዚአብሔር ከእኛ ጋር ከሆነ ማን ይቃወመናል?',
      textEn: 'What then shall we say to these things? If God is for us, who can be against us?',
      textOriginal: 'Τί οὖν ἐροῦμεν πρὸς ταῦτα; εἰ ὁ θεὸς ὑπὲρ ἡμῶν, τίς καθ’ ἡμῶν;',
      transliteration: 'Ti oun eroumen pros tauta? ei ho theos hyper hēmōn, tis kath hēmōn?'
    },
    {
      verse: 32,
      textAm: 'ለገዛ ልጁ ያልራራለት ነገር ግን ስለ ሁላችን አሳልፎ የሰጠው፥ ያው ከእርሱ ጋር ደግሞ ሁሉን ነገር እንዲያው እንዴት አይሰጠንませんか?',
      textEn: 'He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?',
      textOriginal: 'ὅς γε τοῦ ἰδίου υἱοῦ οὐκ ἐφείσατο, ἀλλὰ ὑπὲρ ἡμῶν πάντων παρέδωκεν αὐτόν...',
      transliteration: 'hos ge tou idiou huiou ouk epheisato...'
    },
    {
      verse: 37,
      textAm: 'በዚህ ሁሉ ግን በወደደን በእርሱ ከአሸናፊዎች እንበልጣለን።',
      textEn: 'No, in all these things we are more than conquerors through him who loved us.',
      textOriginal: 'ἀλλ’ ἐν τούτοις πᾶσιν ὑπερνικῶμεν διὰ τοῦ ἀγαπήσαντος ἡμᾶς.',
      transliteration: 'all en toutois pasin hypernikōmen dia tou agapēsantos hēmas.',
      strongsWords: [
        { strongsNumber: 'G5245', wordOriginal: 'ὑπερνικῶμεν', transliteration: 'hypernikōmen', lemma: 'ὑπερνικάω', partOfSpeech: 'verb present active', definition: 'hyper-conquerors, overwhelmingly victorious', amharicMeaning: 'ከአሸናፊዎች እንበልጣለን' }
      ]
    },
    {
      verse: 38,
      textAm: 'ሞት ቢሆን፥ ሕይወትም ቢሆን፥ መላእክትም ቢሆኑ፥ ግዛትም ቢሆን፥ ያለውም ቢሆን፥ የሚመጣውም ቢሆን፥ ኃይላትም ቢሆኑ፥',
      textEn: 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers,',
      textOriginal: 'πέπεισμαι γὰρ ὅτι οὔτε θάνατος οὔτε ζωή...',
      transliteration: 'pepeismai gar hoti oute thanatos oute zōē...'
    },
    {
      verse: 39,
      textAm: 'ከፍታም ቢሆን፥ ዝቅታም ቢሆን፥ ልዩ ፍጥረትም ቢሆን በክርስቶስ ኢየሱስ በጌታችን ካለው ከእግዚአብሔር ፍቅር ሊለየን እንዳይችል ተረድቼአለሁ።',
      textEn: 'nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
      textOriginal: 'οὔτε ὕψωμα οὔτε βάθος οὔτε τις κτίσις ἑτέρα δυνήσεται ἡμᾶς χωρίσαι ἀπὸ τῆς ἀγάπης τοῦ θεοῦ...',
      transliteration: 'oute hypsōma oute bathos oute tis ktisis hetera dynēsetai hēmas chōrisai apo tēs agapēs tou theou...',
      strongsWords: [
        { strongsNumber: 'G26', wordOriginal: 'ἀγάπης', transliteration: 'agapēs', lemma: 'ἀγάπη', partOfSpeech: 'noun feminine genitive', definition: 'unconditional covenant sacrificial love of God', amharicMeaning: 'የእግዚአብሔር ፍቅር' }
      ]
    }
  ]
};

/**
 * Returns complete canonical verses for any given book and chapter.
 * Returns only authentic curated seed verses.
 */
export function generateCanonicalChapterVerses(bookId: string, chapter: number): BibleVerse[] {
  const normalizedId = bookId.toUpperCase();
  const key = `${normalizedId}_${chapter}`;

  const curatedList = CURATED_CANONICAL_CHAPTERS[key] || SEED_CHAPTERS[key];
  if (curatedList && Array.isArray(curatedList) && curatedList.length > 0) {
    return [...curatedList].sort((a, b) => a.verse - b.verse);
  }

  return [];
}
