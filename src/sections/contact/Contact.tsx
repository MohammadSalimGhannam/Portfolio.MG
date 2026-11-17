import { MailIcon, MapPinIcon } from "@/components/icons";
import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";

import { ContactForm } from "./ContactForm";

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.contact;

  return (
    <Section id="contact" title={t.title}>
      <Stagger inView className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <StaggerItem>
          <p className="text-3xl font-semibold tracking-tight rtl:tracking-normal">
            {t.heading}
          </p>
          <p className="mt-4 max-w-[28rem] leading-relaxed text-muted">{t.text}</p>

          <dl className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 text-lg text-primary" aria-hidden />
              <div>
                <dt className="text-sm text-muted">{t.emailLabel}</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium underline-offset-4 hover:text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 text-lg text-primary" aria-hidden />
              <div>
                <dt className="text-sm text-muted">{t.locationLabel}</dt>
                <dd className="font-medium">{dictionary.hero.location}</dd>
              </div>
            </div>
          </dl>

          <SocialLinks className="-ms-2.5 mt-6" />
        </StaggerItem>

        <StaggerItem>
          <ContactForm />
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
