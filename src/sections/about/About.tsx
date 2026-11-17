import Image from "next/image";

import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/cn";
import profile from "@/assets/images/profile.jpg";

export function About({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.about;

  return (
    <Section id="about" title={t.title}>
      <Stagger inView className="grid gap-12 md:grid-cols-[1fr_15rem] md:gap-14">
        <div>
          {t.paragraphs.map((paragraph, i) => (
            <StaggerItem key={i}>
              <p
                className={cn(
                  "mb-5 max-w-[38rem] leading-relaxed text-pretty",
                  i === 0 ? "text-xl text-foreground" : "text-lg text-foreground/80",
                )}
              >
                {paragraph}
              </p>
            </StaggerItem>
          ))}

          <StaggerItem>
            <dl className="mt-10 grid gap-x-8 gap-y-8 border-t border-border pt-8 sm:grid-cols-3">
              {t.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="mt-2 font-medium">{fact.value}</dd>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">
                    {fact.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </StaggerItem>
        </div>

        <StaggerItem className="order-first md:order-none">
          <Image
            src={profile}
            alt={t.photoAlt}
            placeholder="blur"
            sizes="(min-width: 768px) 15rem, 12rem"
            className="aspect-[4/5] w-48 rounded-3xl object-cover object-top md:w-full"
          />
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
