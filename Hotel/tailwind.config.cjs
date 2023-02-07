/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        h2: ["Raleway", ...defaultTheme.fontFamily.sans],
        subHeading: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#343a40",
        light: "#987648",
        beige: "#f8f5f0",
      },
      backgroundColor: {
        beige: "#f8f5f0",
        light: "#987648",
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [require("daisyui")],
};
