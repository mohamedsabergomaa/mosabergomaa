"use client";

import { Reveal } from "./Reveal";
import { useDict } from "./I18nProvider";
import { Accent } from "./Accent";

type Tool = { name: string; use: string; icon: string };
type Dict = {
  techStack: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    headingSuffix: string;
    subtitle: string;
    tools: Tool[];
  };
};

export function TechStack() {
  const { dict } = useDict() as unknown as { dict: Dict };

  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <span className="eyebrow">{dict.techStack.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.techStack.heading}{" "}
              <Accent>{dict.techStack.headingAccent}</Accent>{" "}
              {dict.techStack.headingSuffix}
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              {dict.techStack.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {dict.techStack.tools.map((t) => (
              <div
                key={t.name}
                className="card group flex aspect-square flex-col justify-between p-5 transition-all duration-base hover:border-accent/40 hover:bg-bg-elevated"
                data-cursor="view"
              >
                <span className="font-display text-2xl">{t.icon}</span>
                <div>
                  <div className="font-medium text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.use}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
