import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import type { Dictionary } from "@/i18n/types";
import { formatPeriod } from "@/lib/format";

export function Experience({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.experience;

  return (
    <Section id="experience" title={t.title}>
      <Stagger inView as="ol">
        {experience.map((entry) => {
          const item = t.items[entry.id];
          return (
            <StaggerItem
              key={entry.id}
              as="li"
              className="grid gap-x-10 gap-y-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
            >
              <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start">
                <p className="text-sm text-muted tabular-nums">
                  {formatPeriod(entry.start, entry.end, dictionary)}
                </p>
                <Tag>{t.kinds[entry.kind]}</Tag>
              </div>
              <div>
                <h3 className="text-lg font-medium">{item.role}</h3>
                <p className="mt-1 text-muted">
                  {item.org}
                  {item.meta && <span className="text-sm">{` (${item.meta})`}</span>}
                </p>
                <ul className="mt-4 max-w-[42rem] space-y-2.5 leading-relaxed text-foreground/80">
                  {item.points.map((point) => (
                    <li key={point} className="relative ps-5">
                      <span
                        aria-hidden
                        className="absolute start-0 top-[0.7em] size-1.5 rounded-full bg-primary/60"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
