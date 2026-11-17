"use client";

import { AnimatePresence, motion } from "motion/react";

import { ArrowUpIcon } from "@/components/icons";
import { useScrolled } from "@/hooks/useScrolled";
import { useI18n } from "@/providers/i18n";

export function BackToTop() {
  const { dictionary } = useI18n();
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label={dictionary.common.backToTop}
          title={dictionary.common.backToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -3 }}
          className="fixed end-5 bottom-5 z-30 grid size-11 place-items-center rounded-full border border-border bg-surface text-lg text-foreground shadow-lg shadow-foreground/5"
        >
          <ArrowUpIcon />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
