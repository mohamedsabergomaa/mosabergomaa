import { caseStudies as en } from "./case-studies.en";
import { caseStudies as ar } from "./case-studies.ar";
import type { Locale } from "./i18n-config";

export type CaseStudy = (typeof en)[number];

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return locale === "ar" ? ar : en;
}

export function getCaseStudyBySlug(
  locale: Locale,
  slug: string
): CaseStudy | undefined {
  return getCaseStudies(locale).find((c) => c.slug === slug);
}
