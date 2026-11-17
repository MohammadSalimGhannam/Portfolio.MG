import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { TagList } from "@/components/ui/Tag";
import { projects, type ProjectLinkType } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";

export function Projects({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.projects;

  return (
    <Section id="projects" title={t.title}>
      <Stagger inView as="ul" className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const item = t.items[project.id];
          const links = Object.entries(project.links) as [ProjectLinkType, string][];
          return (
            <StaggerItem
              key={project.id}
              as="li"
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <p className="text-sm text-muted">{item.kind}</p>
              <h3 className="mt-1.5 text-lg font-medium">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{item.summary}</p>
              <TagList items={project.tech} className="mt-5" />
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
                {links.map(([type, href]) => (
                  <ExternalLink key={type} href={href}>
                    {t.links[type]}
                  </ExternalLink>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
