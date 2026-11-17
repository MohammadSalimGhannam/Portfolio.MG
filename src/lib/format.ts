import type { Dictionary } from "@/i18n/types";

/** "2025-12" → "Dec 2025" / "ديسمبر 2025" / "Ara 2025". */
export function formatMonth(value: string, dictionary: Dictionary) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(dictionary.language.dateLocale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, (month ?? 1) - 1, 1)));
}

/** "Dec 2025 – Present". */
export function formatPeriod(
  start: string,
  end: string | undefined,
  dictionary: Dictionary,
) {
  const from = formatMonth(start, dictionary);
  const to = end ? formatMonth(end, dictionary) : dictionary.common.present;
  return `${from} – ${to}`;
}
