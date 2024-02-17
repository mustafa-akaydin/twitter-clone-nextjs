const path = require("path");
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-knobs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
export default config;
