import type { Config } from "tailwindcss";
import localFont from 'next/font/local';

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
    },
  },
  plugins: [],
};

const myCustomFont = localFont({
      src: [
        {
          path: '../public/fonts/my-custom-font-regular.woff2',
          weight: '400',
          style: 'normal',
        },
        {
          path: '../public/fonts/my-custom-font-bold.woff2',
          weight: '700',
          style: 'normal',
        },
      ],
    });

export default config;