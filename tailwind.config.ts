import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // creatoDisplay: ["var(--font-creato-display)"],
      creato: ["Creato Display", "sans-serif"],
    },

    extend: {
      colors: {
        "custom-yellow": "#BAA333",
        "urban-green": "#036E03",
        "urban-black": "#1A1A1A",
        "urban-lightGreen": "#6CC56C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        herobg1: "url('/assets/herobg1.svg')",
        heroAbout: "url('/assets/heroAbout.svg')",
        heroFleet: "url('/assets/heroFleet.svg')",
        uFleethand: "url('/assets/ufleethand.png')",
      },
    },
  },
  plugins: [],
};
export default config;
