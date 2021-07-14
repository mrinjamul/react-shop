module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turquoise: "#40e0d0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
