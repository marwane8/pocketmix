import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-dvh": "100dvh",
        "screen-svh": "100svh",
        "screen-lvh": "100lvh",
      },
      colors: {
        primary: "#023E7D",
        neutral: "#FEFDFD",
        accent: "#7CB6B2 ",
      },
    },
    fontFamily: {
      playfair: ["Playfair","system-ui"],
      gwendy: ["Gwendolyn", "cursive"]
    }
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
} satisfies Config;
