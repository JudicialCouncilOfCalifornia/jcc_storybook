const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-rtl-direction",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  staticDirs: ['../src/assets'],

  // Config Webpack
  webpackFinal: async (config, { configType }) => {

    // Alias
    config.resolve.alias = {
      '@atoms': path.resolve(__dirname, '../', 'src/stories/Atoms'),
      '@molecules': path.resolve(__dirname, '../', 'src/stories/Molecules'),
      '@organisms': path.resolve(__dirname, '../', 'src/stories/Organisms'),
    }
    // Loaders
    config.module.rules.push(
      {
        test: /\.twig$/,
        use: 'twigjs-loader',
      }
    );

    return config;
  },
}
