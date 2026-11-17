import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { defaultLocale, LOCALE_STORAGE_KEY, locales } from "@/i18n/config";

export const metadata: Metadata = {
  title: siteConfig.author,
  robots: { index: false },
};

/*
 * GitHub Pages has no server, so the root URL picks a language in the
 * browser: the visitor's last choice, else their browser language, else the
 * default. Without JavaScript the meta refresh sends them to the default.
 */
const base = siteConfig.basePath;
const script = `(function(){var L=${JSON.stringify(locales)},l=null;try{l=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)})}catch(e){}if(L.indexOf(l)<0){l=null;var n=navigator.languages||[navigator.language];for(var i=0;i<n.length&&!l;i++){var c=String(n[i]||"").slice(0,2).toLowerCase();if(L.indexOf(c)>=0)l=c}}location.replace(${JSON.stringify(base)}+"/"+(l||${JSON.stringify(defaultLocale)})+"/")})()`;

export default function LanguageRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${base}/${defaultLocale}/`} />
      </noscript>
      <p style={{ fontFamily: "system-ui", padding: "2rem" }}>
        <a href={`${base}/${defaultLocale}/`}>{siteConfig.author}</a>
      </p>
    </>
  );
}
