const path = require('path')
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app:path.resolve(__dirname, '../demo/js/index.js')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  target: "web",
  output: {
    filename: '[name].bundle.js',
    path: Path.join(__dirname, '../public'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 5000,
      //       },
      //     },
      //   ],
      // }
    ]
},
resolve: {
  alias: {
    '~': Path.resolve(__dirname, '../src')
  }

},
plugins: [
  new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
        template: "./demo/index.html",
        path: Path.resolve(__dirname, '../public'),
        filename: "index.html"
     }),
     new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
]
}