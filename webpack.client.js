const baseConfig = require('./webpack.base.js');
const path = require('path');

module.exports = Object.assign(baseConfig, {
  entry: './src/app/js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
});
