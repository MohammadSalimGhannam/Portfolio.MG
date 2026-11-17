"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { rise, stagger } from "@/lib/motion";

type StaggerProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Start when scrolled into view instead of on page load. */
  inView?: boolean;
};

/** Reveals its `StaggerItem` children one after another. */
export function Stagger({ delay = 0, inView = false, ...props }: StaggerProps) {
  return (
    <motion.div
      variants={stagger(delay)}
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, margin: "0px 0px -15% 0px" } }
        : { animate: "visible" })}
      {...props}
    />
  );
}

export function StaggerItem(props: HTMLMotionProps<"div">) {
  return <motion.div variants={rise} {...props} />;
}
