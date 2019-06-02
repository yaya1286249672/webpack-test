const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//打包时候把css从js文件中提取出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css插件

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
            new OptimizeCSSAssetsPlugin({})
        ],
    }
});