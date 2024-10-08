import { Config } from "tailwindcss";
import sharedConfig from "@jonsimeon/tailwind-config";

export default {
  content: ["./src/**/*.{astro,tsx}"],
  presets: [sharedConfig],
} satisfies Config;
