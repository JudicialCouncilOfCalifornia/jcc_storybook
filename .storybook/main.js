module.exports = {
  stories: [
    "../src/css/scheme-default.css",
    "../src/css/layout-primitives.css",
    "../src/css/elements.css",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/html",
  staticDirs: ['../src/assets'],
}
