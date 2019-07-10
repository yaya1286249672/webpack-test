const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
module.exports = merge(common, {
    output: {
        filename: "js/[name].bundle.js",
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devtool: "cheap-module-eval-source-map", //original source (lines only)
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 5000,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:3030",
            }
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});