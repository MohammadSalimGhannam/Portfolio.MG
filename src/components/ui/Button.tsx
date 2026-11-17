import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "h-11 px-5 border border-border text-foreground hover:border-foreground/40",
  ghost: "size-10 text-muted hover:text-foreground hover:bg-foreground/5",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  /** Opens in a new tab with safe `rel` attributes. */
  external?: boolean;
};

export function ButtonLink({ variant, className, external, ...props }: ButtonLinkProps) {
  return (
    <a
      className={buttonClasses(variant, className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
