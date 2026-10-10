export const languages = [
  { code: 'en', label: 'English', htmlLang: 'en' },
  { code: 'zh', label: '中文', htmlLang: 'zh-CN' },
  { code: 'ja', label: '日本語', htmlLang: 'ja' },
  { code: 'ko', label: '한국어', htmlLang: 'ko' },
  { code: 'de', label: 'Deutsch', htmlLang: 'de' },
] as const;

export type Language = (typeof languages)[number]['code'];
export type LocalizedString = Record<Language, string>;
export const defaultLanguage: Language = 'zh';
export const languageStorageKey = 'cliptate-language';

export const languageLabels = {
  en: 'Choose language',
  zh: '选择语言',
  ja: '言語を選択',
  ko: '언어 선택',
  de: 'Sprache wählen',
} satisfies LocalizedString;
