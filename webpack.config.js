const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

module.exports = {
  entry: [
    './src/index.jsx',
    './src/index.scss',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public', nodeEnv),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: {
          loader: 'babel-loader',
        },
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
