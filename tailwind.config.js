/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        black: "#RRRRRR",
        border: "#C6D9FF",
        body: "#f1f5ff",
        icons:"#264d73",
        blue: {
          600: "#006ED4",
          500: "#0083FF",
          400: "#95CCFF",
          300: "#D0E0FF",
          200: "#F1F5FF",
          100: "#F6F6F7",
        },
        dark: {
          600: "#101729",
          500: "#1F2937",
          400: "#2B4262",
          300: "#506288",
          200: "#798BB2",
          100: "#D9E2F5",
        },
        yellow: {
          600: "#EA9B0A",
          500: "#FFC04B",
          400: "#FFDCA7",
          300: "#FFEDCC",
          200: "#FFF4CD",
        },
        green: {
          600: "#109D5A",
          500: "#3FC886",
          400: "#83D2AC",
          300: "#CDEFDD",
          200: "#EDF5EF",
        },
        red: {
          600: "#B14644",
          500: "#E75D5B",
          400: "#FFCAC9",
          300: "#FFE1DB",
          200: "#FEF6F5",
        },
      },
      boxShadow: {
        // custom shadow
        card: "0px 1px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        cardsm: "0px 1px 1px rgba(0, 0, 0, 0.1)",

        // Tailwind
        sm: "0 1px 2px 0 rgb(0 131 255 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 131 255 / 0.1), 0 1px 2px -1px rgb(0 131 255 / 0.1)",
        md: "0 4px 6px -1px rgb(0 131 255 / 0.1), 0 2px 4px -2px rgb(0 131 255 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 131 255 / 0.1), 0 4px 6px -4px rgb(0 131 255 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 131 255 / 0.1), 0 8px 10px -6px rgb(0 131 255 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 131 255 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 131 255 / 0.05)",
        none: "none",
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.border"),
        // DEFAULT: theme("colors.border", "currentColor"),
      }),
      fontFamily: {
        inter: ["Inter"],
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
