import type { NextConfig } from "next";

import { siteConfig } from "./src/config/site";

/**
 * The site is exported as plain static files (no server) so it can be
 * hosted on GitHub Pages. `basePath` is the repo sub-path on Pages; set it
 * to "" in `src/config/site.ts` if you move to a custom domain.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: siteConfig.basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
