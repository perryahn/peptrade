const dotenv = require('dotenv');
dotenv.config();

// const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: ['@babel/polyfill', './src/index.js'],
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: `${__dirname}/build/`,
    filename: 'client.min.js',
  }
};