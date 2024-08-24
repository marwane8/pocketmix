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
        prime: {
          "50": "#f0f9f4",
          "100": "#daf1e4",
          "200": "#b8e2cc",
          "300": "#89ccad",
          "400": "#57b08a",
          "500": "#35946e",
          "600": "#28805f",
          "700": "#1e5e48",
          "800": "#1a4b3a",
          "900": "#163e31",
          "950": "#0b231b",
        },
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
} satisfies Config;
