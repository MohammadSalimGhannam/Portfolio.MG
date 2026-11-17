import type { Dictionary } from "@/i18n/types";

/**
 * Sections shown in the header. `id` is the section's DOM id (the `#anchor`),
 * `label` is a key in `dictionary.nav`. Add an entry here when a new
 * section is added to the page.
 */
export const navItems = [
  { id: "about", label: "about" },
] as const satisfies ReadonlyArray<{
  id: string;
  label: keyof Dictionary["nav"];
}>;

export type SectionId = (typeof navItems)[number]["id"];
