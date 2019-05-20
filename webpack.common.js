const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//把css文件抽离一个单独的style.css文件而不是直接插入到head中
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 创建多个实例
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const dev = process.env.NODE_ENV !== 'production';


module.exports = {
   entry: {
     app: './src/index.js'
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      inject: false,
      template: require('html-webpack-template'),
    }),
     new ExtractTextPlugin("style/[name].css"),
     new MiniCssExtractPlugin({
      filename: dev ? '[name].css' : '[name].[hash].css',
      chunkFilename: dev ? '[id].css' : '[id].[hash].css',
    }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },

          ]
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  }
 };