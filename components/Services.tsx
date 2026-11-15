"use client";

import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { useDict, useLocale } from "./I18nProvider";
import { formatPrice } from "@/lib/format-currency";

type ServiceItem = { n: string; title: string; desc: string; deliverables: string[]; price: number };
type Dict = {
  services: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    headingSuffix: string;
    subtitle: string;
    help: string;
    cta: string;
    items: ServiceItem[];
  };
};

export function Services() {
  const { dict } = useDict() as unknown as { dict: Dict };
  const lang = useLocale();

  return (
    <section id="services" className="section">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <span className="eyebrow">{dict.services.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.services.heading}{" "}
              <span className="italic text-accent rtl:font-bold rtl:not-italic">
                {dict.services.headingAccent}
              </span>{" "}
              {dict.services.headingSuffix}
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              {dict.services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {dict.services.items.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div
                className="card-elevated group relative h-full overflow-hidden"
                data-cursor="view"
                data-cursor-label="SERVICE"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-text-muted">
                    {s.n}
                  </span>
                  <span className="text-xs text-text-muted">
                    {formatPrice(s.price, lang)}
                  </span>
                </div>
                <h3 className="display-sm mt-8 group-hover:text-accent transition-colors duration-base">
                  {s.title}
                </h3>
                <p className="mt-4 text-base text-text-secondary md:text-lg">
                  {s.desc}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-text-muted">{dict.services.help}</p>
            <MagneticButton
              href="#contact"
              data-cursor="view"
              data-cursor-label="QUOTE"
              className="btn-primary"
            >
              {dict.services.cta} →
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
