import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import Link from "next/link";

import { getCaseStudies } from "@/lib/get-case-studies";
import { type Locale, locales } from "@/lib/i18n-config";
import { useDict } from "@/components/I18nProvider";
import { Arrow } from "@/components/Arrow";
import { Accent } from "@/components/Accent";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const cs of getCaseStudies(lang)) {
      params.push({ lang, slug: cs.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }: { params: { lang: Locale; slug: string } }) {
  const csList = getCaseStudies(params.lang);
  const cs = csList.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.name} — Case Study — Mohammed Saber`,
    description: cs.summary
  };
}

export default function CaseStudyPage({ params }: { params: { lang: Locale; slug: string } }) {
  const csList = getCaseStudies(params.lang);
  const cs = csList.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const dict = {
    caseStudy: {
      breadcrumbHome: params.lang === "ar" ? "الرئيسية" : "Home",
      resultsHeading: params.lang === "ar" ? "ما تغيّر" : "What changed",
      briefHeading: params.lang === "ar" ? "ما كانوا يحتاجون" : "What they needed",
      approachHeading: params.lang === "ar" ? "كيف عملنا" : "How we did it",
      stackHeading: params.lang === "ar" ? "الأدوات المستخدمة" : "Stack used",
      ctaHeading: params.lang === "ar" ? "تريد نتائج مشابهة لـ" : "Want results like these for",
      ctaHeadingAccent: params.lang === "ar" ? "نشاطك؟" : "your business?"
    }
  };

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-sm text-text-muted">
              <Link href={`/${params.lang}`} className="hover:text-text-primary">
                {dict.caseStudy.breadcrumbHome}
              </Link>
              <span>/</span>
              <Link
                href={`/${params.lang}/work/${cs.industry}`}
                className="hover:text-text-primary"
              >
                {cs.industry}
              </Link>
              <span>/</span>
              <span className="text-text-primary">{cs.name}</span>
            </div>
            <span className="eyebrow">{cs.industry} · {cs.year}</span>
            <h1 className="display-lg mt-4 text-balance">{cs.name}</h1>
            <p className="mt-6 max-w-2xl text-xl text-text-secondary">
              {cs.summary}
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 grid grid-cols-2 gap-8 border-y border-border-subtle py-8 md:grid-cols-4">
              <div>
                <div className="eyebrow text-text-muted">
                  {params.lang === "ar" ? "العميل" : "Client"}
                </div>
                <div className="mt-2 text-text-primary">{cs.client}</div>
              </div>
              <div>
                <div className="eyebrow text-text-muted">
                  {params.lang === "ar" ? "المجال" : "Industry"}
                </div>
                <div className="mt-2 text-text-primary">{cs.industry}</div>
              </div>
              <div>
                <div className="eyebrow text-text-muted">
                  {params.lang === "ar" ? "الدور" : "Role"}
                </div>
                <div className="mt-2 text-text-primary">{cs.role}</div>
              </div>
              <div>
                <div className="eyebrow text-text-muted">
                  {params.lang === "ar" ? "الجدول الزمني" : "Timeline"}
                </div>
                <div className="mt-2 text-text-primary">{cs.timeline}</div>
              </div>
            </div>
            {cs.url && (
              <Reveal>
                <div className="mt-8 flex">
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors duration-base hover:bg-accent hover:text-bg-primary"
                    data-cursor="view"
                  >
                    {params.lang === "ar" ? "زر الموقع" : "Visit Website"}
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </Reveal>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-x">
          <Reveal>
            <div
              className={`relative aspect-[16/9] overflow-hidden rounded-card-lg border border-border-subtle ${cs.image ? "" : `bg-gradient-to-br ${cs.gradient}`}`}
            >
              {cs.image ? (
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 grid-lines opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[clamp(80px,15vw,200px)] font-medium text-white/10">
                      {cs.name.charAt(0)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <span className="eyebrow">
                  {params.lang === "ar" ? "الملخص" : "The brief"}
                </span>
                <h2 className="display-sm mt-3">{dict.caseStudy.briefHeading}</h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-8" delay={0.1}>
              <p className="text-xl text-text-secondary md:text-2xl">
                {cs.brief}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-y border-border-subtle bg-bg-secondary/30">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <span className="eyebrow">
                  {params.lang === "ar" ? "النهج" : "The approach"}
                </span>
                <h2 className="display-sm mt-3">{dict.caseStudy.approachHeading}</h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-8" delay={0.1}>
              <p className="text-xl text-text-secondary md:text-2xl">
                {cs.approach}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <span className="eyebrow">
                  {params.lang === "ar" ? "النتيجة" : "The result"}
                </span>
                <h2 className="display-sm mt-3">{dict.caseStudy.resultsHeading}</h2>
              </div>
            </Reveal>
            <Reveal className="md:col-span-8" delay={0.1}>
              <p className="text-xl text-text-secondary md:text-2xl">
                {cs.result}
              </p>
              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="card-elevated">
                    <div className="font-display text-4xl font-medium text-accent md:text-5xl">
                      {m.value}
                    </div>
                    <div className="mt-2 text-sm text-text-muted">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-x">
          <Reveal>
            <h3 className="eyebrow mb-6">{dict.caseStudy.stackHeading}</h3>
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border-subtle bg-bg-secondary px-4 py-2 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-border-subtle">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="display-md text-balance">
              {dict.caseStudy.ctaHeading}{" "}
              <Accent>{dict.caseStudy.ctaHeadingAccent}</Accent>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
              <MagneticButton
                href={`/${params.lang}/#contact`}
                className="btn-primary"
                data-cursor="view"
                data-cursor-label="HIRE"
              >
                {params.lang === "ar" ? "ابدأ مشروعك" : "Start your project"} <Arrow />
              </MagneticButton>
              <Link
                href={`/${params.lang}/work/${cs.industry}`}
                className="btn-ghost"
                data-cursor="view"
              >
                {params.lang === "ar" ? "شاهد المزيد" : "See more"} {cs.industry} <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
