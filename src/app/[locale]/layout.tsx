import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import { siteConfig } from "@/config/site";
import { getDictionary, isLocale, languageOptions, locales } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { plexArabic, plexSans } from "@/lib/fonts";
import { I18nProvider } from "@/providers/i18n";
import { MotionProvider } from "@/providers/motion";
import { ThemeSync, themeScript } from "@/providers/theme";

import "@/styles/globals.css";

/** One static page per language; any other path is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { seo } = getDictionary(locale);

  return {
    metadataBase: new URL(`${siteConfig.url}/`),
    title: seo.title,
    description: seo.description,
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: `${locale}/`,
      languages: Object.fromEntries(locales.map((code) => [code, `${code}/`])),
    },
    openGraph: {
      type: "website",
      title: seo.title,
      description: seo.description,
      locale,
      url: `${locale}/`,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1318" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={dictionary.language.dir}
      className={cn(plexSans.variable, plexArabic.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <I18nProvider locale={locale} dictionary={dictionary} languages={languageOptions}>
          <MotionProvider>
            <ThemeSync />
            <a
              href="#main"
              className="fixed start-4 top-3 z-50 -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-transform focus:translate-y-0"
            >
              {dictionary.common.skipToContent}
            </a>
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer dictionary={dictionary} />
            <BackToTop />
          </MotionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
