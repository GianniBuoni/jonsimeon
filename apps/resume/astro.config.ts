// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  publicDir: "../../public",
  site: "https://resume.jonsimeon.com",
  integrations: [tailwind(), react()],
  output: "hybrid",

  adapter: node({
    mode: "standalone",
  }),
});

