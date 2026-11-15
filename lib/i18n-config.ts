export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ar: "ع"
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية"
};

export const isValidLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);
