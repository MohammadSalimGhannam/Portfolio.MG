import type { ReactNode } from "react";

/** Minimal shell for the language-detection page at the site root. */
export default function RedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
