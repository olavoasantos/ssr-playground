const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = Object.assign(baseConfig, {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.server.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
});
