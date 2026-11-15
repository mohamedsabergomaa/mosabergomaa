"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { useState } from "react";
import type { Industry } from "@/lib/industries.en";
import { useDict, useLocale } from "./I18nProvider";
import { Arrow } from "./Arrow";
import { Accent } from "./Accent";

type Dict = {
  industryPage: {
    backToAll: string;
    backToWork: string;
    statsEyebrow: string;
    statsHeading: string;
    statsHeadingAccent: string;
    statsHeadingSuffix: string;
    processHeading: string;
    processHeadingAccent: string;
    faqEyebrow: string;
    faqHeading: string;
    faqHeadingAccent: string;
    ctaHeading: string;
    ctaHeadingAccent: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export function IndustryPage({ industry }: { industry: Industry }) {
  const { dict } = useDict() as unknown as { dict: Dict };
  const lang = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroNumber = parseInt(industry.heroMetric.value.replace(/\D/g, "")) || 0;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="grain" aria-hidden />
        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-3xl">{industry.icon}</span>
            <span className="eyebrow">{industry.name}</span>
          </motion.div>

          <h1 className="font-display text-[clamp(48px,9vw,140px)] font-medium leading-[0.95] tracking-[-0.04em] text-balance">
            {industry.tagline}
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <p className="md:col-span-7 text-xl text-text-secondary md:text-2xl">
              {industry.description}
            </p>
            <div className="md:col-span-5">
              <div className="card-elevated relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-50`}
                />
                <div className="relative">
                  <span className="eyebrow text-text-muted">
                    {lang === "ar" ? "متوسط النتائج" : "Average result"}
                  </span>
                  <div className="mt-3 font-display text-7xl font-medium text-accent md:text-8xl">
                    {heroNumber > 0 ? (
                      <span>
                        {industry.heroMetric.value}
                      </span>
                    ) : (
                      industry.heroMetric.value
                    )}
                  </div>
                  <p className="mt-2 text-text-secondary">
                    {industry.heroMetric.label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/#contact"
              className="btn-primary"
              data-cursor="view"
              data-cursor-label="HIRE"
            >
              {industry.cta} <Arrow />
            </MagneticButton>
            <Link href="/#work" className="btn-ghost">
              {dict.industryPage.backToAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border-subtle py-12">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {industry.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-4xl font-medium md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="mb-16 max-w-3xl md:mb-24">
              <span className="eyebrow">{dict.industryPage.statsEyebrow}</span>
              <h2 className="display-md mt-4 text-balance">
                {dict.industryPage.statsHeading}{" "}
                <Accent>{industry.name.toLowerCase()}</Accent>
                {dict.industryPage.statsHeadingSuffix}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {industry.projects.map((p, i) => {
              const flipLayout = lang === "ar" ? i % 2 === 0 : i % 2 === 1;
              return (
                <Reveal key={p.name} delay={i * 0.1}>
                  <div
                    className={`group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 ${
                      flipLayout ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    <div
                      className={`md:col-span-7 ${flipLayout ? "" : "md:[direction:ltr]"}`}
                    >
                      <div
                        className={`relative aspect-[16/10] overflow-hidden rounded-card-lg border border-border-subtle bg-gradient-to-br ${industry.color}`}
                      >
                        <div className="absolute inset-0 flex flex-col">
                          <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-black/20 px-4">
                            <span className="h-2 w-2 rounded-full bg-white/30" />
                            <span className="h-2 w-2 rounded-full bg-white/30" />
                            <span className="h-2 w-2 rounded-full bg-white/30" />
                            <div className="mx-auto h-4 w-1/3 rounded bg-white/10" />
                          </div>
                          <div className="relative flex-1 overflow-hidden p-6">
                            <div className="flex items-center justify-between">
                              <span className="font-display text-lg font-semibold text-white">
                                {p.name}
                              </span>
                              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
                                {industry.name}
                              </span>
                            </div>
                            <div className="absolute inset-x-6 bottom-6">
                              <span className="font-display text-5xl font-medium text-white md:text-7xl">
                                {p.metric.split(" ")[0]}
                              </span>
                              <p className="mt-1 text-xs text-white/70">
                                {p.metric.split(" ").slice(1).join(" ")}
                              </p>
                            </div>
                            <div
                              aria-hidden
                              className="absolute inset-0 grid-lines opacity-30"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`md:col-span-5 ${flipLayout ? "" : "md:[direction:ltr]"} flex flex-col justify-center`}
                    >
                      <h3 className="display-sm">{p.name}</h3>
                      <p className="mt-4 text-lg text-text-secondary">
                        {p.description}
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <span className="font-display text-2xl font-semibold text-accent">
                          {p.metric.split(" ")[0]}
                        </span>
                        <span className="text-sm text-text-muted">
                          {p.metric.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process reminder */}
      <section className="section-sm border-t border-border-subtle">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="eyebrow">{lang === "ar" ? "كيف أعمل" : "How it works"}</span>
                <h3 className="display-sm mt-3">
                  {dict.industryPage.processHeading}{" "}
                  <Accent>{dict.industryPage.processHeadingAccent}</Accent>
                </h3>
              </div>
              <Link
                href="/#process"
                className="btn-ghost"
                data-cursor="view"
                data-cursor-label="PROCESS"
              >
                {dict.industryPage.backToWork} <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="mb-16 max-w-3xl md:mb-24">
              <span className="eyebrow">{dict.industryPage.faqEyebrow}</span>
              <h2 className="display-md mt-4 text-balance">
                {dict.industryPage.faqHeading}{" "}
                <Accent>{industry.name}</Accent>{" "}
                {dict.industryPage.faqHeadingAccent}
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t border-border-subtle">
              {industry.faqs.map((f, i) => (
                <div key={i} className="border-b border-border-subtle">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="group flex w-full items-center justify-between gap-4 py-6 text-start transition-colors hover:text-accent"
                    data-cursor="view"
                  >
                    <span className="font-display text-lg font-medium md:text-xl">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-2xl text-text-muted group-hover:text-accent"
                    >
                      +
                    </motion.span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pe-12 text-base text-text-secondary">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm border-t border-border-subtle">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="display-lg text-balance">
              {dict.industryPage.ctaHeading}{" "}
              <Accent>{industry.name}</Accent>{" "}
              {dict.industryPage.ctaHeadingAccent}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary">
              {dict.industryPage.ctaBody}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
              <MagneticButton
                href="/#contact"
                className="btn-primary"
                data-cursor="view"
                data-cursor-label="HIRE"
              >
                {dict.industryPage.ctaPrimary} <Arrow />
              </MagneticButton>
              <Link
                href="/work/landing-pages"
                className="btn-ghost"
                data-cursor="view"
              >
                {dict.industryPage.ctaSecondary} <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
