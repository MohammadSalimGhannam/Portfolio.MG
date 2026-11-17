import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/i18n/config";
import { About } from "@/sections/about/About";
import { Hero } from "@/sections/hero/Hero";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
    </>
  );
}
