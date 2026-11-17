import type { Dictionary } from "@/i18n/types";

export type DegreeId = keyof Dictionary["education"]["degrees"];
export type HonourId = keyof Dictionary["education"]["honours"];

/** Order in which degrees are listed (texts are in the dictionary). */
export const degrees: DegreeId[] = ["msc", "bsc", "secondary"];

export const honours: { id: HonourId; date: string }[] = [
  { id: "scholarship", date: "2026-08" },
  { id: "ranking", date: "2025-12" },
];

/** Certificate names are kept in their original language. */
export const certificates = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "2024-07",
    url: "https://coursera.org/verify/SMM5R2WCJUXZ",
  },
  {
    name: "Generative AI for Everyone",
    issuer: "Coursera",
    date: "2024-02",
    url: "https://coursera.org/verify/WW5JZL9XSYN7",
  },
  {
    name: "Duolingo English Test, B2",
    issuer: "Duolingo",
    date: "2025-11",
    url: "https://certs.duolingo.com/wd3l10a9ed3bzzsx",
  },
];
