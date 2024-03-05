const path = require('path')
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
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js',
    sourceMapFilename: '[file].map',
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "common",
            chunks: "all"}
      }
  }
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
          // options: {
          //   presets: ['@babel/preset-env'],
          // }
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
//   test: /\.svg$/,
//   use: {
//     loader:'file-loader',
//     options: {
//     name: '[name].[hash].[ext]',
//     outputPath: 'public/js/',
//     }
//   }// adjust the output path as needed
// },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 5000,
      //         mimetype: 'image/svg+xml',
      //       },
      //     },
      //   ],
      // }
    ]
},
plugins: [
  new CleanWebpackPlugin(), 
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname, '../demo/index.html'),
        chunks: ['common','app'],
        filename: "index.html"
      })
],
resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    static: {directory: path.join(__dirname, '../src'), },
    port: 9000,
    historyApiFallback: true
  },
}