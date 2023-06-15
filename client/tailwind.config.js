/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const appColors = {
  background: {
    DEFAULT: "#eaeef2",
    light: {
      100: "#f6f8fa",
      200: "#eaeef2",
      300: "#d0d7de",
      400: "#afb8c1",
      500: "#8c959f",
      600: "#6e7781",
      700: "#57606a",
      800: "#404951",
      900: "#32383f",
    },
    dark: {
      100: "#2c2c2c",
      200: "#282828",
      300: "#222222",
      400: "#1d1d1d",
      500: "#181818",
      600: "#141414",
      700: "#0e0e0e",
      800: "#080808",
      900: "#000000",
    },
  },
  dark: {
    DEFAULT: "#080808",

    100: "#2c2c2c",
    200: "#282828",
    300: "#222222",
    400: "#1d1d1d",
    500: "#181818",
    600: "#141414",
    700: "#0e0e0e",
    800: "#080808",
    900: "#000000",
  },
  light: {
    DEFAULT: "#f6f8fa",

    100: "#f6f8fa",
    200: "#eaeef2",
    300: "#d0d7de",
    400: "#afb8c1",
    500: "#8c959f",
    600: "#6e7781",
    700: "#57606a",
    800: "#404951",
    900: "#32383f",
  },
  border: {
    DEFAULT: "#8c959f",
    light: "#404951",
    dark: "#eaeef2",

    100: "#f6f8fa",
    200: "#eaeef2",
    300: "#d0d7de",
    400: "#afb8c1",
    500: "#8c959f",
    600: "#6e7781",
    700: "#57606a",
    800: "#404951",
    900: "#32383f",
  },
  primary: {
    DEFAULT: "#218bff",
    light: "#54aeff",
    dark: "#0969da",

    100: "#ddf4ff",
    200: "#b6e3ff",
    300: "#80ccff",
    400: "#54aeff",
    500: "#218bff",
    600: "#0969da",
    700: "#0550ae",
    800: "#033d8b",
    900: "#0a3069",
  },
  secondary: {
    DEFAULT: "#e85aad",
    light: "#ff80c8",
    dark: "#bf3989",

    100: "#ffeff7",
    200: "#ffd3eb",
    300: "#ffadda",
    400: "#ff80c8",
    500: "#e85aad",
    600: "#bf3989",
    700: "#99286e",
    800: "#772057",
    900: "#611347",
  },
  accent: {
    DEFAULT: "#8250df",
    light: "#a475f9",
    dark: "#6639ba",

    200: "#d8b9ff",
    300: "#c297ff",
    400: "#a475f9",
    500: "#8250df",
    600: "#6639ba",
    700: "#512a97",
    800: "#3e1f79",
    900: "#2e1461",
  },
};

module.exports = {
  darkMode: ["class"],
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
    colors: {
      ...colors,
      ...appColors,
    },
  },
  plugins: [],
};
