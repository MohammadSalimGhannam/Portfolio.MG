/**
 * Facts about the site and its owner that do NOT change between languages:
 * links, contact details, deployment paths. Anything a visitor reads as a
 * sentence lives in the dictionaries under `src/i18n/dictionaries`.
 */
export const siteConfig = {
  /** Sub-path the site is served from on GitHub Pages. "" for a custom domain. */
  basePath: "/Portfolio.MG",
  url: "https://mohammadsalimghannam.github.io/Portfolio.MG",
  author: "Mohammad Ghannam",
  email: "e.ms.ghannam@gmail.com",
  /**
   * EmailJS powers the contact form (https://www.emailjs.com). These IDs are
   * public by design; the template receives `from_name1`, `from_email` and
   * `message`.
   */
  emailjs: {
    serviceId: "service_5ha474o",
    templateId: "template_dyp6fxm",
    publicKey: "BTq3qeetewBboOdDv",
  },
  socials: {
    github: "https://github.com/MohammadSalimGhannam",
    linkedin: "https://www.linkedin.com/in/msghannam",
    telegram: "https://t.me/M_S_Ghannam",
  },
} as const;

export type SocialKey = keyof typeof siteConfig.socials;
