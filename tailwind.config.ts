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
          DEFAULT: "#0b3b8b",
          50: "#f0f7ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#388ee8",
          700: "#1e64d4",
          800: "#134fb0",
          900: "#0b3b8b",
          950: "#07265c",
        },
        navy: {
          DEFAULT: "#0b3b8b",
          900: "#07265c",
          800: "#0b3b8b",
        },
        cerulean: {
          DEFAULT: "#388ee8",
          light: "#60a5fa",
        },
        dark: {
          surface: "#0b192c",
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
