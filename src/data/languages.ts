export const languages = [
  { code: 'en', label: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  { code: 'zh', label: '中文', htmlLang: 'zh-CN', ogLocale: 'zh_CN' },
  { code: 'ja', label: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP' },
  { code: 'ko', label: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR' },
  { code: 'de', label: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
] as const;

export type Language = (typeof languages)[number]['code'];
export type LocalizedString = Record<Language, string>;
export const defaultLanguage: Language = 'zh';

// Keep existing Chinese URLs; translations get their own static, indexable URLs.
export function languageForPath(pathname: string): Language {
  return languages.find(({ code }) => pathname.split('/')[1] === code)?.code ?? defaultLanguage;
}

export function unlocalizedPath(pathname: string): string {
  const prefix = languages.find(({ code }) => pathname.split('/')[1] === code);
  return prefix ? pathname.slice(prefix.code.length + 1) || '/' : pathname;
}

export function localizedPath(pathname: string, language: Language): string {
  const path = unlocalizedPath(pathname);
  return language === defaultLanguage ? path : `/${language}${path}`;
}

export function serializeJson(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export const languageLabels = {
  en: 'Choose language',
  zh: '选择语言',
  ja: '言語を選択',
  ko: '언어 선택',
  de: 'Sprache wählen',
} satisfies LocalizedString;
