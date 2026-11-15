"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { useDict } from "./I18nProvider";
import { Arrow } from "./Arrow";

type Dict = {
  hero: {
    eyebrow: string;
    line1: string;
    line2Prefix: string;
    rotatingWords: string[];
    line2Suffix: string;
    line3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: { rating: string; projects: string; experience: string; availability: string };
  };
};

export function Hero() {
  const { dict, lang } = useDict() as unknown as { dict: Dict; lang: "en" | "ar" };
  const [index, setIndex] = useState(0);
  const words = dict.hero.rotatingWords;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grain" aria-hidden />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            {dict.hero.eyebrow}
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(56px,11vw,168px)] font-medium leading-[0.92] tracking-[-0.04em] text-text-primary">
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              {dict.hero.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              {dict.hero.line2Prefix}
              <span className="font-accent relative inline-block min-w-[280px] text-accent md:min-w-[420px]">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 30, rotate: 3 }}
                    animate={
                      i === index
                        ? { opacity: 1, y: 0, rotate: 0 }
                        : { opacity: 0, y: -30, rotate: -3 }
                    }
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute start-0 top-0"
                  >
                    {w}
                  </motion.span>
                ))}
                <span className="font-accent invisible">{words[index]}</span>
              </span>
              {dict.hero.line2Suffix}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            >
              <span className="text-gradient">{dict.hero.line3}</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 text-lg text-text-secondary md:text-xl"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-wrap items-center gap-4 md:justify-end"
          >
            <MagneticButton
              href="#contact"
              data-cursor="view"
              data-cursor-label="HIRE"
              className="btn-primary group"
            >
              {dict.hero.ctaPrimary}
              <Arrow className="transition-transform duration-base group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#work"
              data-cursor="view"
              data-cursor-label="SEE WORK"
              className="btn-secondary"
            >
              {dict.hero.ctaSecondary} ↓
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border-subtle pt-8 text-sm text-text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="text-accent">★★★★★</span>
            <span>{dict.hero.trust.rating}</span>
          </div>
          <span className="hidden h-3 w-px bg-border-subtle md:block" />
          <span>{dict.hero.trust.projects}</span>
          <span className="hidden h-3 w-px bg-border-subtle md:block" />
          <span>{dict.hero.trust.experience}</span>
          <span className="hidden h-3 w-px bg-border-subtle md:block" />
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {dict.hero.trust.availability}
          </span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-32 top-32 -z-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-0 h-[360px] w-[360px] rounded-full bg-accent/5 blur-[120px]" />
    </section>
  );
}
