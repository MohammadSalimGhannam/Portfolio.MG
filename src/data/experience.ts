import type { Dictionary } from "@/i18n/types";

export type ExperienceId = keyof Dictionary["experience"]["items"];
export type ExperienceKind = keyof Dictionary["experience"]["kinds"];

export type Experience = {
  /** Key of the texts in `dictionary.experience.items`. */
  id: ExperienceId;
  kind: ExperienceKind;
  /** `YYYY-MM`. Leave `end` out for a current position. */
  start: string;
  end?: string;
};

/** Shown in this order, newest first. */
export const experience: Experience[] = [
  { id: "teknova", kind: "work", start: "2025-12" },
  { id: "altinkey", kind: "work", start: "2026-01", end: "2026-10" },
  { id: "bluebits", kind: "volunteering", start: "2021-10", end: "2025-10" },
  { id: "shai", kind: "training", start: "2024-02", end: "2024-09" },
];
