import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { tr } from "./dictionaries/tr";
import type { Dictionary } from "./types";

/**
 * Every language the site is published in.
 *
 * To add a language:
 *   1. Copy `dictionaries/en.ts` to `dictionaries/<code>.ts` and translate it.
 *   2. Register it below. A page is generated for it automatically.
 */
export const dictionaries = { en, ar, tr } satisfies Record<string, Dictionary>;

export type Locale = keyof typeof dictionaries;

export const defaultLocale: Locale = "en";

export const locales = Object.keys(dictionaries) as Locale[];

export function isLocale(value: string): value is Locale {
  return value in dictionaries;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type LanguageOption = { code: Locale; name: string };

/** Names of all languages, each written in its own language, for the switcher. */
export const languageOptions: LanguageOption[] = locales.map((code) => ({
  code,
  name: dictionaries[code].language.name,
}));

/** Key used to remember the visitor's choice in localStorage. */
export const LOCALE_STORAGE_KEY = "locale";
