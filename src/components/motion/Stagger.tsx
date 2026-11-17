"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ComponentType } from "react";

import { rise, stagger } from "@/lib/motion";

/** Elements the wrappers can render as, so lists stay semantic. */
type Tag = "div" | "ol" | "ul" | "dl" | "li";

type MotionProps = HTMLMotionProps<"div"> & { as?: Tag };

type AnyMotion = ComponentType<HTMLMotionProps<"div">>;

const elements: Record<Tag, AnyMotion> = {
  div: motion.div,
  ol: motion.ol as unknown as AnyMotion,
  ul: motion.ul as unknown as AnyMotion,
  dl: motion.dl as unknown as AnyMotion,
  li: motion.li as unknown as AnyMotion,
};

type StaggerProps = MotionProps & {
  delay?: number;
  /** Start when scrolled into view instead of on page load. */
  inView?: boolean;
};

/** Reveals its `StaggerItem` children one after another. */
export function Stagger({
  as = "div",
  delay = 0,
  inView = false,
  ...props
}: StaggerProps) {
  const Component = elements[as];
  return (
    <Component
      variants={stagger(delay)}
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, margin: "0px 0px -10% 0px" } }
        : { animate: "visible" })}
      {...props}
    />
  );
}

export function StaggerItem({ as = "div", ...props }: MotionProps) {
  const Component = elements[as];
  return <Component variants={rise} {...props} />;
}
