# Mohammad Ghannam — Portfolio

Personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript** and
**Tailwind CSS v4**. Exported as a static site and hosted on GitHub Pages.

- Three languages (English, Arabic, Turkish) with full right-to-left support
- Light and dark themes driven by CSS variables, no flash on load
- Subtle animations with [Motion](https://motion.dev), turned off for reduced-motion users

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000/Portfolio.MG
```

| Script              | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Development server                             |
| `npm run build`     | Static export into `out/`                      |
| `npm run preview`   | Serve the built site (open `/Portfolio.MG/en`) |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | Generate route types and run `tsc`             |
| `npm run format`    | Prettier (also sorts Tailwind classes)         |

## Project structure

```
src/
├── app/
│   ├── (language-redirect)/   # "/" → picks the visitor's language
│   └── [locale]/              # one static page per language
├── assets/images/             # images imported by components
├── components/
│   ├── icons/                 # inline SVG icons
│   ├── layout/                # Header, Footer, Container, Section
│   ├── motion/                # reusable animation wrappers
│   └── ui/                    # Button, ThemeToggle, LanguageSwitcher…
├── config/                    # site facts (links, email) and navigation
├── hooks/                     # small reusable React hooks
├── i18n/
│   ├── config.ts              # registered languages
│   └── dictionaries/          # en.ts (reference), ar.ts, tr.ts
├── lib/                       # helpers: cn(), fonts, motion presets
├── providers/                 # theme, i18n and motion providers
├── sections/                  # page sections: hero, about, …
└── styles/
    ├── theme.css              # ← all colours, for light and dark
    └── globals.css
```

## Common changes

**Change colours** — edit the variables in `src/styles/theme.css`. Each theme has the same
seven tokens (`background`, `surface`, `foreground`, `muted`, `border`, `primary`,
`primary-foreground`), used in components as `bg-background`, `text-muted`, etc.

**Edit text** — every visible sentence lives in `src/i18n/dictionaries/<lang>.ts`.

**Add a language**

1. Copy `src/i18n/dictionaries/en.ts` to `<code>.ts` and translate the values.
2. Register it in `src/i18n/config.ts`.

TypeScript fails the build if the new dictionary is missing a key or has an extra one, and
a page for the language is generated automatically.

**Add a section** — create it in `src/sections/<name>/`, render it in
`src/app/[locale]/page.tsx`, add its texts to every dictionary and (optionally) a link in
`src/config/navigation.ts`.

**Links and contact details** — `src/config/site.ts`.

## Deployment

Every push runs lint, type-check and build. Pushes to `main` are deployed to GitHub Pages
(`gh-pages` branch). If the site moves to a custom domain, set `basePath` to `""` in
`src/config/site.ts`.
