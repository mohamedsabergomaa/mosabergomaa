"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n-config";

type Dict = Record<string, unknown>;

const I18nContext = createContext<{ lang: Locale; dict: Dict } | null>(null);

export function I18nProvider({
  lang,
  dict,
  children
}: {
  lang: Locale;
  dict: Dict;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ lang, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useDict() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useDict must be used within I18nProvider");
  return ctx;
}

export function useLocale(): Locale {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within I18nProvider");
  return ctx.lang;
}
