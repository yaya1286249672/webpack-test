const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//打包时候把css从js文件中提取出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css插件

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename:  "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css"
          })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                parallel: true,
            })
        ],
        splitChunks: {
            chunks: "all", //意味着即使在异步和非异步块之间也可以共享块
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
          },
          runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
          }
    }
});