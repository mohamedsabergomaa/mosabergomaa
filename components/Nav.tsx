"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useDict } from "./I18nProvider";
import type { Locale } from "@/lib/i18n-config";

type Dict = {
  nav: {
    logo: string;
    links: { work: string; process: string; about: string; contact: string };
    availability: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
};

export function Nav({ lang }: { lang: Locale }) {
  const { dict } = useDict() as unknown as { dict: Dict };
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#work", label: dict.nav.links.work },
    { href: "#process", label: dict.nav.links.process },
    { href: "#about", label: dict.nav.links.about },
    { href: "#contact", label: dict.nav.links.contact }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-base ease-out-expo",
          scrolled
            ? "border-b border-border-subtle bg-bg-primary/70 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link
            href={`/${lang}`}
            className="group flex items-center gap-1 text-text-primary"
            data-cursor="view"
            data-cursor-label="HOME"
          >
            <span className="font-display text-xl font-semibold tracking-tight">
              {dict.nav.logo}
            </span>
            <span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm text-text-secondary transition-colors hover:text-text-primary"
                data-cursor="view"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <div className="flex items-center gap-2 text-xs text-text-muted max-w-[160px]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="truncate">{dict.nav.availability}</span>
            </div>
            <MagneticButton
              href="#contact"
              data-cursor="view"
              data-cursor-label="HIRE"
              className="btn-primary !py-2.5 !px-5 text-xs"
            >
              {dict.nav.cta}
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle md:hidden"
            aria-label={dict.nav.openMenu}
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-text-primary" />
              <span className="h-px w-5 bg-text-primary" />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-primary md:hidden"
          >
            <div className="container-x flex h-16 items-center justify-between">
              <Link
                href={`/${lang}`}
                onClick={() => setOpen(false)}
                className="font-display text-xl font-semibold"
              >
                {dict.nav.logo}
                <span className="text-accent">.</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle"
                aria-label={dict.nav.closeMenu}
              >
                <span className="relative h-3 w-3">
                  <span className="absolute inset-0 my-auto block h-px w-full rotate-45 bg-text-primary" />
                  <span className="absolute inset-0 my-auto block h-px w-full -rotate-45 bg-text-primary" />
                </span>
              </button>
            </div>
            <div className="container-x mt-12 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl font-medium text-text-primary"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <LanguageSwitcher />
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
                  {dict.nav.availability}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
