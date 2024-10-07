import { Config } from "tailwindcss";
import sharedConfig from "@jonsimeon/tailwind-config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  presets: [sharedConfig],
} satisfies Config;
