import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";

/*
 * One type family for all three languages: IBM Plex Sans for Latin and
 * Turkish, IBM Plex Sans Arabic for Arabic. Fonts are downloaded at build
 * time and served from the site itself.
 */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});
