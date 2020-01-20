/**
 * Setup Webpack for bundling JavaScript and CSS files.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js'),
    styles: path.join(__dirname, 'src/index.css')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 15000,
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
  resolve: {
    alias: {
      // https://github.com/facebook/react/issues/13991#issuecomment-557677352
      'react': path.resolve('./node_modules/react'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: '',
    libraryTarget: 'umd'
  }
};
