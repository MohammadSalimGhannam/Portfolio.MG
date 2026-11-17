"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Turns animations off for visitors who ask their OS for reduced motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
