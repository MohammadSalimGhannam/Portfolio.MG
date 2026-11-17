"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useId, useRef, useState } from "react";

import { CheckIcon, GlobeIcon } from "@/components/icons";
import { useClickOutside } from "@/hooks/useClickOutside";
import { LOCALE_STORAGE_KEY, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { ease } from "@/lib/motion";
import { useI18n } from "@/providers/i18n";

/** Same page, other language: swaps the first path segment (`/en/…` → `/ar/…`). */
function localizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}/`;
}

function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Not critical: the URL already carries the language.
  }
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, languages, dictionary } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);
  useClickOutside(rootRef, close, open);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={dictionary.common.language}
        className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
      >
        <GlobeIcon className="text-base" />
        <span className="uppercase">{locale}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{ duration: 0.18, ease }}
            className="absolute end-0 top-full z-50 mt-2 min-w-40 origin-top-right rounded-2xl border border-border bg-surface p-1.5 shadow-lg shadow-foreground/5 rtl:origin-top-left"
          >
            {languages.map((language) => {
              const current = language.code === locale;
              return (
                <li key={language.code}>
                  <Link
                    href={localizedPath(pathname, language.code)}
                    hrefLang={language.code}
                    lang={language.code}
                    aria-current={current ? "true" : undefined}
                    onClick={() => {
                      rememberLocale(language.code);
                      close();
                    }}
                    className={cn(
                      "flex items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-foreground/5",
                      current ? "font-medium text-foreground" : "text-muted",
                    )}
                  >
                    {language.name}
                    {current && <CheckIcon className="text-primary" />}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
