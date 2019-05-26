const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dev = process.env.NODE_ENV !== 'production';
console.log('dev=============================》', dev)
console.log('html-webpack-template', require('html-webpack-template'))
    //'./src/index.html' require('html-webpack-template')
module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            inject: 'body',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: dev ? '[name].css' : '[name].[hash].css',
            chunkFilename: dev ? '[id].css' : '[id].[hash].css',
        }),

    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },


    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('precss')(), //sass解析
                                require('cssnano')(), //相同css合并（例：.a{width:100px},.b{width:100px} => .a,.b{width:100px}）
                                require('autoprefixer')({
                                    browsers: [
                                        '>0%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 8' //针对不同浏览器某些css属性需要用到不同内核前缀（例：-webkit-transfrom，-moz-transfrom)
                                    ]
                                })
                            ],
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        },

                    },

                ],
            },
            {
                test: /\.(m?js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }

        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}