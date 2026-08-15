import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-dark': '#0a0a0a',
        'gta-pink': '#FF006E',
        'gta-magenta': '#ff00ff',
        'gta-orange': '#ff6b35',
      },
      fontFamily: {
        'pricedown': ['Pricedown', 'sans-serif'],
        'rage': ['Rage Italic', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
