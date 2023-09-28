/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "pri-1": "#919e8b",
        "pri-2": "#d87c7c",
        "pri-3": "#d7ab82",
        "pri-4": "#6e7074",
        "pri-5": "#61a0a8",
        "pri-6": "#efa18d",
        "pri-7": "#787464",
        "pri-8": "#cc7e63",
        "pri-9": "#724e58",
        "pri-10": "#4b565b",
        "pri-11": "#6189a8",
        "pri-12": "#e3e0cd",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
};
