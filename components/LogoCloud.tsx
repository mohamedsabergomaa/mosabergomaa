"use client";

import { useDict } from "./I18nProvider";

type Dict = { logoCloud: { logos: string[]; reviews: string; eyebrow: string } };

export function LogoCloud() {
  const { dict } = useDict() as unknown as { dict: Dict };
  const logos = dict.logoCloud.logos;
  return (
    <section className="border-y border-border-subtle bg-bg-secondary/40 py-12">
      <div className="container-x mb-6 flex items-center justify-between">
        <span className="eyebrow text-text-muted">
          {dict.logoCloud.eyebrow}
        </span>
        <span className="hidden text-xs text-text-muted md:block">
          {dict.logoCloud.reviews}
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-primary to-transparent rtl:bg-gradient-to-l"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-primary to-transparent rtl:bg-gradient-to-r"
        />
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-display text-2xl font-medium tracking-tight text-text-muted transition-colors hover:text-text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
