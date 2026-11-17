import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./Container";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Standard page section: an anchor id, a heading in the side column on wide
 * screens, and the content beside it.
 */
export function Section({ id, title, children, className }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 sm:py-28", className)}
    >
      <Container className="grid gap-10 lg:grid-cols-[12rem_1fr] lg:gap-16">
        <h2
          id={headingId}
          className="text-sm font-medium text-muted lg:sticky lg:top-28 lg:self-start"
        >
          <span
            className="me-3 inline-block h-px w-6 bg-primary align-middle"
            aria-hidden
          />
          {title}
        </h2>
        <div>{children}</div>
      </Container>
    </section>
  );
}
