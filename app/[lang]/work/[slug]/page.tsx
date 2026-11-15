import { notFound } from "next/navigation";
import { getIndustries } from "@/lib/get-industries";
import { IndustryPage } from "@/components/IndustryPage";
import type { Locale } from "@/lib/i18n-config";
import { locales } from "@/lib/i18n-config";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const ind of getIndustries(lang)) {
      params.push({ lang, slug: ind.slug });
    }
  }
  return params;
}

export function generateMetadata({
  params
}: {
  params: { lang: Locale; slug: string };
}) {
  const industries = getIndustries(params.lang);
  const ind = industries.find((i) => i.slug === params.slug);
  if (!ind) return {};
  return {
    title: `${ind.name} — Mohammed Saber | محمد صابر`,
    description: ind.tagline
  };
}

export default function Page({
  params
}: {
  params: { lang: Locale; slug: string };
}) {
  const industries = getIndustries(params.lang);
  const ind = industries.find((i) => i.slug === params.slug);
  if (!ind) notFound();
  return <IndustryPage industry={ind} />;
}
