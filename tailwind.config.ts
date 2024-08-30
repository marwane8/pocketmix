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
        primary: "#F80005",
        secondary: "#BA8376",
        accent: "#FFF4ED",
        neutral: "#FEFDFD",
      },
    },
    fontFamily: {
      verdana: ["Verdana", "sans-serif"],
      playfair: ["Playfair", "system-ui"],
      playfair_d: ["Playfair Display", "serif"],
      gwendy: ["Gwendolyn", "cursive"],
      sans: ["Gill Sans", "system-ui"],
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
} satisfies Config;
