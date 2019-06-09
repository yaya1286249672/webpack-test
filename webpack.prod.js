const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//打包时候把css从js文件中提取出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//异步打包压缩js
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
//显示打包进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
    //分析打包文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const chalk = require('chalk');



module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "js/[name].[chunkhash:8].bundle.js",
        chunkFilename: 'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[id].[hash].css"
        }),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS: {
                output: {
                    comments: false
                },
                compress: {
                    // warnings: false,
                    drop_debugger: true, // 去除生产环境的 debugger 和 console.log
                    drop_console: true
                }
            }
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
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
                },
                styles: {
                    name: 'styles',
                    test: /\.(scss|css)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        }
    }
});