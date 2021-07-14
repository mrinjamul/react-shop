const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      divideColor: ["group-hover"],
      colors: {
        gray: colors.blueGray,
        red: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
