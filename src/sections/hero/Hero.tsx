import { GitHubIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";

import { SwarmMap } from "./SwarmMap";

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.hero;

  return (
    <section
      aria-labelledby="hero-title"
      className="pt-12 pb-20 sm:pt-20 lg:pt-28 lg:pb-28"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Stagger delay={0.1}>
          <StaggerItem>
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPinIcon className="text-primary" />
              {t.location}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1
              id="hero-title"
              className="mt-6 text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.02] font-semibold tracking-tight text-balance rtl:leading-[1.2] rtl:tracking-normal"
            >
              {t.name}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">{t.role}</p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-pretty text-muted">
              {t.lead}
            </p>
          </StaggerItem>

          <StaggerItem className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`}>
              <MailIcon className="text-base" />
              {t.emailCta}
            </ButtonLink>
            <ButtonLink href={siteConfig.socials.github} variant="outline" external>
              <GitHubIcon className="text-base" />
              {t.githubCta}
            </ButtonLink>
          </StaggerItem>
        </Stagger>

        <Stagger delay={0.35}>
          <StaggerItem>
            <SwarmMap />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
