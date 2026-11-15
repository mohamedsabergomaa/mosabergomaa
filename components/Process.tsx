"use client";

import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { useDict, useLocale } from "./I18nProvider";
import { Accent } from "./Accent";

type Step = { n: string; title: string; days: string; desc: string; deliverables: string[] };
type Dict = {
  process: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtitle: string;
    stillOnFence: string;
    stillOnFenceSub: string;
    bookCta: string;
    bookNote: string;
    steps: Step[];
  };
};

export function Process() {
  const { dict } = useDict() as unknown as { dict: Dict };
  const lang = useLocale();

  return (
    <section id="process" className="section relative">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <span className="eyebrow">{dict.process.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.process.heading}{" "}
              <Accent>{dict.process.headingAccent}</Accent>
              {lang === "en" ? "." : ""}
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              {dict.process.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {dict.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div
                className="card-elevated group relative h-full"
                data-cursor="view"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <span className="rounded-full border border-border-subtle px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-text-muted">
                    {s.days}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-text-secondary md:text-base">
                  {s.desc}
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-xs text-text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-text-muted" />
                      {d}
                    </li>
                  ))}
                </ul>
                {i < dict.process.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border-subtle md:block rtl:-right-2 rtl:left-auto"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 grid grid-cols-1 items-center gap-10 border-t border-border-subtle pt-16 md:grid-cols-2">
            <div>
              <h3 className="display-sm text-balance">
                {dict.process.stillOnFence}
              </h3>
              <p className="mt-4 text-text-secondary">
                {dict.process.stillOnFenceSub}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <MagneticButton
                href="#contact"
                data-cursor="view"
                data-cursor-label="BOOK"
                className="btn-primary"
              >
                {dict.process.bookCta} →
              </MagneticButton>
              <span className="text-xs text-text-muted">
                {dict.process.bookNote}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
