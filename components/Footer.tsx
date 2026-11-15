"use client";

import Link from "next/link";
import { useDict } from "./I18nProvider";
import { Accent } from "./Accent";
import { type Locale } from "@/lib/i18n-config";

type Group = { title: string; links: { href: string; label: string }[] };
type Dict = {
  footer: {
    heading1: string;
    headingAccent: string;
    headingSuffix: string;
    cta: string;
    groups: Group[];
    legal: string;
    lastUpdated: string;
    available: string;
  };
};

const hrefFor = (lang: Locale, href: string) => {
  if (href.startsWith("#")) return href;
  if (href.startsWith("http") || href.startsWith("mailto:")) return href;
  if (href.startsWith("/")) return `/${lang}${href}`;
  return href;
};

export function Footer({ lang }: { lang: Locale }) {
  const { dict } = useDict() as unknown as { dict: Dict };

  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-bg-primary pt-24 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="font-display text-[clamp(56px,10vw,140px)] font-medium leading-[0.9] tracking-tight">
              {dict.footer.heading1}
              <br />
              <Accent>{dict.footer.headingAccent}</Accent>
              <br />
              {dict.footer.headingSuffix}
            </h2>
            <Link
              href="#contact"
              data-cursor="view"
              data-cursor-label="HIRE"
              className="btn-primary mt-12"
            >
              {dict.footer.cta}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            {dict.footer.groups.map((g) => (
              <div key={g.title}>
                <h3 className="eyebrow mb-5 text-text-muted">{g.title}</h3>
                <ul className="flex flex-col gap-3">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={hrefFor(lang, l.href)}
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-border-subtle pt-8 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <div>{dict.footer.legal}</div>
          <div className="flex items-center gap-6">
            <span>{dict.footer.lastUpdated}</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
              {dict.footer.available}
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </footer>
  );
}
