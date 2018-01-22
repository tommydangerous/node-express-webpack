const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

module.exports = {
  entry: [
    './src/index.js',
    './src/index.scss',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public', nodeEnv),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: 'css/'
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
