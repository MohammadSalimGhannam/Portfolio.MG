"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { useI18n } from "@/providers/i18n";
import { useTheme } from "@/providers/theme";

import { buttonClasses } from "./Button";

/*
 * Both icons are always rendered and CSS (the `dark:` variant) decides which
 * one shows. That way the right icon is visible from the very first paint,
 * before React has even loaded.
 */
const iconBase =
  "absolute transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { dictionary } = useI18n();
  const label =
    theme === "dark" ? dictionary.common.switchToLight : dictionary.common.switchToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={buttonClasses("ghost", cn("relative text-lg", className))}
    >
      <SunIcon
        className={cn(
          iconBase,
          "scale-50 -rotate-90 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100",
        )}
      />
      <MoonIcon
        className={cn(
          iconBase,
          "scale-100 rotate-0 opacity-100 dark:scale-50 dark:rotate-90 dark:opacity-0",
        )}
      />
    </button>
  );
}
