"use client";

import { Reveal } from "./Reveal";
import { useDict } from "./I18nProvider";
import { Accent } from "./Accent";

type Testimonial = { quote: string; name: string; role: string; business: string; industry: string; metric: string; initials: string };
type Dict = {
  testimonials: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    items: Testimonial[];
  };
};

const colors = [
  "from-orange-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-pink-500 to-purple-500",
  "from-amber-500 to-yellow-500",
  "from-stone-500 to-zinc-500",
  "from-emerald-500 to-teal-500"
];

export function Testimonials() {
  const { dict } = useDict() as unknown as { dict: Dict };

  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <span className="eyebrow">{dict.testimonials.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.testimonials.heading}{" "}
              <Accent>{dict.testimonials.headingAccent}</Accent>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure
                className="card flex h-full flex-col justify-between p-8 transition-all duration-base hover:border-accent/40"
                data-cursor="view"
              >
                <div>
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, k) => (
                      <span key={k}>★</span>
                    ))}
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-text-primary">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center justify-between border-t border-border-subtle pt-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${colors[i % colors.length]} text-sm font-semibold text-white`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {t.name}
                      </div>
                      <div className="text-xs text-text-muted">
                        {t.role} · {t.business}
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full border border-border-subtle px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-text-muted">
                    {t.industry}
                  </span>
                </figcaption>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-display text-lg font-semibold text-accent">
                    {t.metric}
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
