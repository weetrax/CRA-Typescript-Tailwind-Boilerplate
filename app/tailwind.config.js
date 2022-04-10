// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      //DO NOT CHANGE
      black: colors.black,
      blue: {
          100: "#d2edff",
          200: "#a5dcfe",
          300: "#78cafe",
          400: "#4bb9fd",
          500: "#1ea7fd",
          600: "#1886ca",
          700: "#126498",
          800: "#0c4365",
          900: "#062133"
      },
      white: colors.white,
      gray: colors.neutral,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,

      //CUSTOM COLORS
      //https://www.tailwindshades.com/ 
      //or crtl g + ctrl k on hexa value (#007ce6)
      primary: {
        100: "#cceffa",
        200: "#99def5",
        300: "#66cef0",
        400: "#33bdeb",
        500: "#00ade6",
        600: "#008ab8",
        700: "#00688a",
        800: "#00455c",
        900: "#00232e",
      },
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
