const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const entries = glob.sync('./src/stories/**/*.css').reduce((entries, path) => {
  const entry = path.replace('src/', '');
  entries[entry] = path;
  return entries;
}, {});

module.exports = {
  // mode: 'development',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../lib')
  },
  module: {
    rules: [
      loaders.CSSLoader,
    ]
  },
  optimization : {
    minimizer: [ new CssMinimizerPlugin() ],
    minimize: true,
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.FixStyleOnlyEntriesPlugin,
  ],
};
