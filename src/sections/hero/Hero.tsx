import Image from "next/image";

import { MapPinIcon } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { Dictionary } from "@/i18n/types";
import profile from "@/assets/images/profile.jpg";

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.hero;

  return (
    <section
      aria-labelledby="hero-title"
      className="pt-10 pb-16 sm:pt-16 lg:pt-24 lg:pb-24"
    >
      <Container className="grid items-center gap-10 md:grid-cols-[1fr_auto] lg:gap-20">
        <Stagger delay={0.1} className="order-last md:order-first">
          <StaggerItem>
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPinIcon className="text-primary" />
              {t.location}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1
              id="hero-title"
              className="mt-5 text-[clamp(2.6rem,6.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance rtl:leading-[1.25] rtl:tracking-normal"
            >
              {t.name}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">{t.role}</p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-pretty text-muted">
              {t.lead}
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#contact">{t.contactCta}</ButtonLink>
            <SocialLinks />
          </StaggerItem>
        </Stagger>

        <Stagger delay={0.25}>
          <StaggerItem>
            <Image
              src={profile}
              alt={t.photoAlt}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 7rem"
              className="aspect-square w-28 rounded-3xl object-cover object-[50%_15%] md:aspect-[4/5] md:w-64 lg:w-80"
            />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
