import type { Direction } from "../types";

/**
 * English is the reference dictionary: its shape defines `Dictionary`.
 * Every other language must provide exactly the same keys — TypeScript
 * reports any key that is missing or extra.
 */
export const en = {
  language: {
    name: "English",
    dir: "ltr" as Direction,
  },
  seo: {
    title: "Mohammad Ghannam, front-end developer",
    description:
      "Front-end developer building fast, accessible interfaces with React, Next.js and TypeScript, with a background in artificial intelligence.",
  },
  common: {
    skipToContent: "Skip to content",
    mainNav: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
    backToTop: "Back to top",
  },
  nav: {
    about: "About",
    contact: "Contact",
  },
  hero: {
    name: "Mohammad Ghannam",
    role: "Front-end developer",
    lead: "I build fast, accessible web interfaces with React, Next.js and TypeScript, backed by a degree in artificial intelligence.",
    location: "Sakarya, Türkiye",
    emailCta: "Email me",
    githubCta: "See my GitHub",
    mapCaption:
      "My graduation project: three EV3 robots mapping a room together with ROS2.",
    mapLabel: "Animation of three robots exploring a floor plan and building a map of it",
    replay: "Replay",
  },
  about: {
    title: "About",
    photoAlt: "Portrait of Mohammad Ghannam",
    paragraphs: [
      "I'm a front-end developer who came to the web through engineering. At ALTINKEY I built an AI agents dashboard with Next.js and TypeScript, including JWT login and role-based access, and raised its performance score from 60 to 95 by removing unnecessary re-renders.",
      "I studied Informatics Engineering at the University of Aleppo and graduated first in the Artificial Intelligence department. That background shapes how I work: I'm comfortable with data, computer vision and robotics, and I like interfaces that make complex systems easy to read.",
      "Today I teach data analysis at TEKNOVA and study Turkish in Sakarya before starting an MSc in Artificial Intelligence on a Türkiye Scholarship.",
    ],
    facts: [
      {
        label: "Studied",
        value: "BSc Informatics Engineering",
        detail: "University of Aleppo, 2020 to 2025. Ranked 1st in the AI department.",
      },
      {
        label: "Next",
        value: "MSc Artificial Intelligence",
        detail: "Sakarya University, from 2027, on a Türkiye Scholarship.",
      },
      {
        label: "Languages",
        value: "Arabic, English, Turkish",
        detail: "Native, B2, and learning Turkish full-time.",
      },
    ],
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
};
