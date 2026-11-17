"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { buttonClasses } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/config/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import { ease, spring } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";
import { useI18n } from "@/providers/i18n";

import { Container } from "./Container";

// "Contact" gets its own button, so it is left out of the text links.
const links = navItems.filter((id) => id !== "contact");

export function Header() {
  const { locale, dictionary } = useI18n();
  const scrolled = useScrolled();
  const active = useActiveSection(navItems);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close the mobile menu with Escape or when the screen grows to desktop size.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeMenu();
    const desktop = matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && closeMenu();
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300",
        scrolled || menuOpen
          ? "border-border bg-background/80 backdrop-blur-lg"
          : "border-transparent bg-background",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}/`}
          className="text-[0.95rem] font-semibold tracking-tight"
          onClick={closeMenu}
        >
          {dictionary.hero.name}
        </Link>

        <nav aria-label={dictionary.common.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((id) => (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={cn(
                    "relative block px-3 py-2 text-sm transition-colors",
                    active === id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {dictionary.nav[id]}
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={spring}
                      className="absolute inset-x-3 -bottom-px h-px bg-primary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            className={buttonClasses("primary", "ms-2 hidden h-9 px-4 lg:inline-flex")}
          >
            {dictionary.nav.contact}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={
              menuOpen ? dictionary.common.closeMenu : dictionary.common.openMenu
            }
            className={buttonClasses("ghost", "text-xl lg:hidden")}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label={dictionary.common.mainNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden lg:hidden"
          >
            <Container as="ul" className="flex flex-col gap-1 pt-2 pb-6">
              {links.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      closeMenu();
                      // Wait for the menu to collapse so the header height is final.
                      setTimeout(() => scrollToSection(id), 320);
                    }}
                    className="block rounded-xl px-3 py-3 text-base hover:bg-foreground/5"
                  >
                    {dictionary.nav[id]}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    closeMenu();
                    setTimeout(() => scrollToSection("contact"), 320);
                  }}
                  className={buttonClasses("primary", "w-full")}
                >
                  {dictionary.nav.contact}
                </a>
              </li>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
