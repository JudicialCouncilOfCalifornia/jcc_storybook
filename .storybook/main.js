module.exports = {
  stories: [
    "../src/css/variables.css",
    "../src/css/every-layout-oneshot.css",
    "../src/css/elements.css",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/html",
  staticDirs: ['../src/assets']
}
