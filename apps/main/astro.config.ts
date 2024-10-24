// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  publicDir: "../../public",
  site: "https://jonsimeon.com",
  integrations: [tailwind(), react(), icon()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    serverIslands: true,
  },
});

