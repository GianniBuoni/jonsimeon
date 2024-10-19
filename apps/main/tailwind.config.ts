import { sharedConfig } from "@jonsimeon/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,tsx}"],
  presets: [sharedConfig],
} satisfies Config;
