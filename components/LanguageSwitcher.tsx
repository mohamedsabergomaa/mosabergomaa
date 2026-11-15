"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale } from "./I18nProvider";
import { locales, localeLabels, type Locale } from "@/lib/i18n-config";
import clsx from "clsx";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const currentLang = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (target: Locale) => {
    if (target === currentLang) return;
    // Replace the current locale segment with the target
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] && locales.includes(segments[0] as Locale)) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    const newPath = `/${segments.join("/")}`;
    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.push(newPath);
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full border border-border-subtle bg-bg-secondary p-1",
        className
      )}
      data-cursor="view"
      data-cursor-label={currentLang === "ar" ? "LANG" : "LANG"}
    >
      {locales.map((loc) => {
        const isActive = loc === currentLang;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-label={`Switch to ${loc === "ar" ? "Arabic" : "English"}`}
            aria-pressed={isActive}
            className={clsx(
              "rounded-full px-3 py-1 text-xs font-semibold transition-all duration-base",
              isActive
                ? "bg-accent text-bg-primary"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {localeLabels[loc]}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Plain anchor-based language switcher for use in server contexts
 * (e.g., footer link list) where router.push is not available.
 */
export function LanguageLink({ target, label }: { target: Locale; label: string }) {
  const currentLang = useLocale();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && locales.includes(segments[0] as Locale)) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  const newPath = `/${segments.join("/")}`;
  if (target === currentLang) return null;

  return (
    <Link href={newPath} className="text-sm text-text-secondary hover:text-text-primary">
      {label}
    </Link>
  );
}
