import type { Dictionary } from "@/i18n/types";

/**
 * Sections shown in the header, in page order. `id` is the section's DOM id
 * (the `#anchor`) and also its key in `dictionary.nav`.
 */
export const navItems = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const satisfies ReadonlyArray<keyof Dictionary["nav"]>;

export type SectionId = (typeof navItems)[number];
