/**
 * Smoothly scrolls to a section and updates the URL hash. Used where a plain
 * `#anchor` jump would be interrupted, e.g. while the mobile menu collapses.
 */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  history.replaceState(null, "", `#${id}`);
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
