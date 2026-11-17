import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TagList } from "@/components/ui/Tag";
import { skills, type SkillGroupId } from "@/data/skills";
import type { Dictionary } from "@/i18n/types";

export function Skills({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.skills;
  const groups = Object.entries(skills) as [SkillGroupId, string[]][];

  return (
    <Section id="skills" title={t.title}>
      <Stagger inView as="dl">
        {groups.map(([group, items]) => (
          <StaggerItem
            key={group}
            className="grid gap-x-10 gap-y-3 border-t border-border py-6 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
          >
            <dt className="font-medium">{t.groups[group]}</dt>
            <dd>
              <TagList
                items={items}
                tagClassName="px-3 py-1 text-sm text-foreground/85"
              />
            </dd>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
