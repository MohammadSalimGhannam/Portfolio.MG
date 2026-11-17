import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/i18n/config";
import { About } from "@/sections/about/About";
import { Contact } from "@/sections/contact/Contact";
import { Education } from "@/sections/education/Education";
import { Experience } from "@/sections/experience/Experience";
import { Hero } from "@/sections/hero/Hero";
import { Projects } from "@/sections/projects/Projects";
import { Skills } from "@/sections/skills/Skills";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <Education dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </>
  );
}
