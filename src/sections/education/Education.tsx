import { Section } from "@/components/layout/Section";
import { Subheading } from "@/components/layout/Subheading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { certificates, degrees, honours } from "@/data/education";
import type { Dictionary } from "@/i18n/types";
import { formatMonth } from "@/lib/format";

const row =
  "grid gap-x-10 gap-y-2 border-t border-border py-6 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]";

export function Education({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.education;

  return (
    <Section id="education" title={t.title}>
      <div className="space-y-16">
        <Stagger inView>
          <Subheading>{t.degreesTitle}</Subheading>
          <ol>
            {degrees.map((id) => {
              const degree = t.degrees[id];
              return (
                <StaggerItem key={id} as="li" className={row}>
                  <p className="text-sm text-muted tabular-nums">{degree.period}</p>
                  <div>
                    <h4 className="font-medium">{degree.degree}</h4>
                    <p className="mt-1 text-muted">{degree.school}</p>
                    <p className="mt-3 max-w-[42rem] leading-relaxed text-foreground/80">
                      {degree.note}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </ol>
        </Stagger>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Stagger inView>
            <Subheading>{t.honoursTitle}</Subheading>
            <ul className="space-y-6">
              {honours.map(({ id, date }) => (
                <StaggerItem key={id} as="li">
                  <p className="font-medium">{t.honours[id].title}</p>
                  <p className="mt-1 text-sm text-muted">
                    {t.honours[id].by}, {formatMonth(date, dictionary)}
                  </p>
                </StaggerItem>
              ))}
            </ul>
          </Stagger>

          <Stagger inView>
            <Subheading>{t.certificatesTitle}</Subheading>
            <ul className="space-y-6">
              {certificates.map((certificate) => (
                <StaggerItem key={certificate.url} as="li">
                  <p className="font-medium">
                    <bdi>{certificate.name}</bdi>
                  </p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                    <span>
                      {certificate.issuer}, {formatMonth(certificate.date, dictionary)}
                    </span>
                    <ExternalLink href={certificate.url}>{t.verify}</ExternalLink>
                  </p>
                </StaggerItem>
              ))}
            </ul>
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
