import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/cn";

export function About({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.about;

  return (
    <Section id="about" title={t.title}>
      <Stagger inView>
        {t.paragraphs.map((paragraph, i) => (
          <StaggerItem key={i}>
            <p
              className={cn(
                "mb-5 max-w-[40rem] leading-relaxed text-pretty",
                i === 0 ? "text-xl text-foreground" : "text-lg text-foreground/80",
              )}
            >
              {paragraph}
            </p>
          </StaggerItem>
        ))}

        <StaggerItem>
          <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
            {t.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1.5 leading-relaxed font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
