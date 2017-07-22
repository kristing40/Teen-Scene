
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [{
      test: /.jsx?$/, loader: 'babel',
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};