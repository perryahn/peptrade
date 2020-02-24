const dotenv = require('dotenv');

dotenv.config();

const debug = process.env.ENV === 'debug';

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
  const config = {
    context: path.join(__dirname, 'client'),
    entry: ['react-hot-loader/patch', '@babel/polyfill', './src/index.js'],
    devtool: debug ? 'eval-source-map' : 'false',
    mode: debug ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }],
        },
      ],
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    output: {
      path: `${__dirname}/build/`,
      filename: 'client.min.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      historyApiFallback: {
        index: 'http://localhost:8080',
      },
      hot: true,
      host: 'localhost',
      port: 8080,
      proxy: {
        '/Api/**': 'http://localhost:3001',
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true,
      }),
    ],
  };

  if (!debug) {
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
      ],
    };
  }

  return config;
};
