module.exports = {
  purge: [
    "../../../themes/2022/layouts/*.html",
    "../../../themes/2022/layouts/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0052EA",
      },
      fontFamily: {
        body: ["arial"],
        heading: ["'Merriweather', serif"],
      },
      textColor: {
        primary: "#0052EA",
      },
      backgroundColor: {
        primary: "#8cc43d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
