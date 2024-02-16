module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media-generator": {
      // you can pass in any arbitrary key, and any valid CSS media query value
      "--t": "(min-width: 980px)",
      "--d": "(min-width: 1270px)",
    },
    "postcss-preset-env": {},
  },
};
