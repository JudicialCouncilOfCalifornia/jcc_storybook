const path = require('path');

module.exports = {
  stories: [
    "../src/css/scheme-default.css",
    "../src/css/layout-primitives.css",
    "../src/css/elements.css",
    "../src/stories/Atoms/FormFields/FormFields.css",
    "../src/stories/Layout/Reel/Reel.js",
    "../src/js/detectWrap.js",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/html",
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
