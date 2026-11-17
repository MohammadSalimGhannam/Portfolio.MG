"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { LanguageOption, Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type I18nContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  languages: LanguageOption[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Gives client components the current language. Only the active dictionary
 * is sent to the browser; server components read it with `getDictionary`.
 */
export function I18nProvider({
  children,
  ...value
}: I18nContextValue & { children: ReactNode }) {
  return <I18nContext value={value}>{children}</I18nContext>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside <I18nProvider>");
  return context;
}
