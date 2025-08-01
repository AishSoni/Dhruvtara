import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'deep-blue': '#0A1128', // Deep dark blue
        'light-blue-bg': '#1B2A41', // Slightly brighter blue for the card
      },
      fontFamily: {
        'adam-light': ['var(--font-adam-light)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;