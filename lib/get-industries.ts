import { industries as en } from "./industries.en";
import { industries as ar } from "./industries.ar";
import type { Locale } from "./i18n-config";

export type Industry = (typeof en)[number];

export function getIndustries(locale: Locale): Industry[] {
  return locale === "ar" ? ar : en;
}

export function getIndustryBySlug(
  locale: Locale,
  slug: string
): Industry | undefined {
  return getIndustries(locale).find((i) => i.slug === slug);
}
