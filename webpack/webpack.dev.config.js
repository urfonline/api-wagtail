const webpack = require('webpack');
const config = require('./webpack.base.config.js');

if (process.env.NODE_ENV !== 'test') {
  config.entry = {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      config.entry.main,
    ],
  };
}

config.devtool = 'eval-source-map';

config.plugins = config.plugins.concat([
  new webpack.NoErrorsPlugin(),
]);


module.exports = config;