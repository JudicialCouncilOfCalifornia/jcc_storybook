const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const entries = glob.sync('./src/stories/**/*.css').reduce((entries, path) => {
  const entry = path.replace('/index.js', '');
  entries[entry] = path;
  return entries;
}, {});

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../lib')
  },
  module: {
    rules: [
      loaders.CSSLoader,
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.FixStyleOnlyEntriesPlugin,
  ],
};
