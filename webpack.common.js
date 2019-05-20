const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    options: {
                        // publicPath: './',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                'css-loader',
                'postcss-loader',
                // 'sass-loader',
            ],
        }, ]
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    }
}