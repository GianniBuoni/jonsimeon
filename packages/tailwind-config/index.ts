import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

const sharedConfig: Omit<Config, "content"> = {
  theme: {
    extend: {
      boxShadow: {
        hard: "6px 10px rgba(0,0,0,.2)",
      },
      fontFamily: {
        display: ["Paytone One", ...defaultTheme.fontFamily.sans],
        sans: ["Chivo Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          secondary: "765c9c",
        },
      },
    ],
  },
};

export default sharedConfig;
