import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";
import { siteConfig, type SocialKey } from "@/config/site";
import { cn } from "@/lib/cn";

import { buttonClasses } from "./Button";

const socials: Record<
  SocialKey,
  { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }
> = {
  github: { label: "GitHub", Icon: GitHubIcon },
  linkedin: { label: "LinkedIn", Icon: LinkedInIcon },
  telegram: { label: "Telegram", Icon: TelegramIcon },
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {(Object.keys(socials) as SocialKey[]).map((key) => {
        const { label, Icon } = socials[key];
        return (
          <li key={key}>
            <a
              href={siteConfig.socials[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={buttonClasses("ghost", "text-lg")}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
