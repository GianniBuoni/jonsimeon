import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

const sharedConfig = {
  content: ["./src/**/*.{astro,tsx}", "../../packages/ui/src/**/*.{astro,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hard: "6px 10px rgba(0,0,0,.2)",
      },
      fontFamily: {
        display: ["Paytone One", ...defaultTheme.fontFamily.sans],
        sans: ["Chivo Variable", ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: "fadeIn 1s ease-in-out",
      },

      // that is actual animation
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "765c9c",
        },
      },
    ],
  },
} satisfies Config;

export default sharedConfig;
