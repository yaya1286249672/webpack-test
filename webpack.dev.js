const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',   //original source (lines only)
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});