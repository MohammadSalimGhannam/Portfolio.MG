import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Heading for a group inside a section, e.g. "Certificates" under Education. */
export function Subheading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("mb-6 text-lg font-semibold tracking-tight", className)}>
      {children}
    </h3>
  );
}
