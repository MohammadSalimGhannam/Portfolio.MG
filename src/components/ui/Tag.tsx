import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Small label for a technology or a category. */
export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  items,
  className,
  tagClassName,
}: {
  items: string[];
  className?: string;
  tagClassName?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          {/* Technology names are always written left-to-right. */}
          <Tag className={tagClassName}>
            <bdi>{item}</bdi>
          </Tag>
        </li>
      ))}
    </ul>
  );
}
