import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bai-jamjuree)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
          muted: "rgba(0, 0, 0, 0.7)",
          light: "rgba(0, 0, 0, 0.1)",
        },
        secondary: {
          DEFAULT: "#DAEFFF",
          foreground: "#1a1a1a",
          muted: "rgba(218, 239, 255, 0.7)",
          light: "rgba(218, 239, 255, 0.3)",
        },
        accent: {
          DEFAULT: "#FF7777",
          foreground: "#ffffff",
          muted: "rgba(255, 119, 119, 0.7)",
          light: "rgba(255, 119, 119, 0.1)",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
        muted: {
          DEFAULT: "#DAEFFF",
          foreground: "#666666",
        },
        destructive: {
          DEFAULT: "#FF7777",
          foreground: "#ffffff",
        },
        border: "#DAEFFF",
        input: "#DAEFFF",
        ring: "#000000",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
