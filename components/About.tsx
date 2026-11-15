"use client";

import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { useDict, useLocale } from "./I18nProvider";
import { Accent } from "./Accent";

type Value = { title: string; body: string };
type Dict = {
  about: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    story1: string;
    story2: string;
    story3: string;
    interests: string[];
    values: Value[];
    cta: string;
    ctaButton: string;
  };
};

export function About() {
  const { dict } = useDict() as unknown as unknown as { dict: Dict };
  const lang = useLocale();

  return (
    <section id="about" className="section">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <span className="eyebrow">{dict.about.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.about.heading}{" "}
              <Accent>{dict.about.headingAccent}</Accent>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card-lg border border-border-subtle bg-gradient-to-br from-bg-elevated to-bg-secondary">
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[200px] font-medium text-accent/20">
                  {lang === "ar" ? "م" : "M"}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur">
                <span className="text-xs text-white/70">
                  {lang === "ar" ? "محمد صابر" : "Mohammed Saber"}
                </span>
                <span className="font-accent font-display text-2xl text-accent">
                  {lang === "ar" ? "صابر" : "Saber"}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <div className="flex h-full flex-col justify-center">
              <p className="text-xl text-text-primary md:text-2xl">
                {dict.about.story1}
              </p>
              <p className="mt-6 text-lg text-text-secondary">
                {dict.about.story2}
              </p>
              <p className="mt-6 text-lg text-text-secondary">
                {dict.about.story3}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {dict.about.interests.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border-subtle bg-bg-secondary px-4 py-1.5 text-sm text-text-secondary"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dict.about.values.map((v, i) => (
              <div
                key={v.title}
                className="card p-6 transition-all duration-base hover:border-accent/40"
              >
                <span className="font-mono text-xs text-text-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <h3 className="display-sm text-balance">{dict.about.cta}</h3>
            <MagneticButton
              href="#contact"
              className="btn-primary"
              data-cursor="view"
              data-cursor-label="HIRE"
            >
              {dict.about.ctaButton} →
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
