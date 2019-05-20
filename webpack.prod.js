const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css插件

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [

    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ],
    },
});