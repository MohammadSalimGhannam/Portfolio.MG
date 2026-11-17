import { SocialLinks } from "@/components/ui/SocialLinks";
import type { Dictionary } from "@/i18n/types";

import { Container } from "./Container";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col-reverse items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {dictionary.hero.name}.{" "}
          <span className="block sm:inline">{dictionary.footer.builtWith}</span>
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
