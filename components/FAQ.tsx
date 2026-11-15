"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { useDict } from "./I18nProvider";
import { Accent } from "./Accent";

type FAQItem = { q: string; a: string };
type Dict = {
  faq: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtitle: string;
    askDirect: string;
    items: FAQItem[];
  };
};

export function FAQ() {
  const { dict } = useDict() as unknown as { dict: Dict };
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <span className="eyebrow">{dict.faq.eyebrow}</span>
              <h2 className="display-md mt-4 text-balance">
                {dict.faq.heading}{" "}
                <Accent>{dict.faq.headingAccent}</Accent>
              </h2>
              <p className="mt-6 text-text-secondary">{dict.faq.subtitle}</p>
              <a
                href="#contact"
                data-cursor="view"
                data-cursor-label="ASK"
                className="btn-ghost mt-4"
              >
                {dict.faq.askDirect} →
              </a>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="border-t border-border-subtle">
              {dict.faq.items.map((f, i) => (
                <div key={i} className="border-b border-border-subtle">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="group flex w-full items-center justify-between gap-4 py-6 text-start transition-colors hover:text-accent"
                    data-cursor="view"
                  >
                    <span className="font-display text-lg font-medium md:text-xl">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-2xl text-text-muted group-hover:text-accent"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pe-12 text-base text-text-secondary">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
