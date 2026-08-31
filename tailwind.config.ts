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
        primary: {
          DEFAULT: "#5c205e",
          50: "#fcf5fe",
          100: "#f7e6fa",
          200: "#eecff4",
          300: "#e2adeb",
          400: "#d886e2",
          500: "#ce59dc",
          600: "#b43abf",
          700: "#922f9c",
          800: "#74267a",
          900: "#5c205e",
        },
        dark: {
          surface: "#101828",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        clinical: ["var(--font-clinical)", "Space Grotesk", "monospace"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
