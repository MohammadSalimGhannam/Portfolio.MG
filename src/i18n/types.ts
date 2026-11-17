import type { en } from "./dictionaries/en";

export type Direction = "ltr" | "rtl";

/** The full set of translation keys, taken from the English dictionary. */
export type Dictionary = typeof en;
