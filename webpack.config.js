const path = require('path');
//解决新建js文件并打包后dist/index.html 引入名称未更新
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 删除打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');


//把css文件抽离一个单独的style.css文件而不是直接插入到head中
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 创建多个实例
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

const ManifestPlugin = require('webpack-manifest-plugin');



//path.resolve把一个路径或路径片段的序列解析为一个绝对路径
module.exports = {
  mode: "production",
  entry: {
    // app: './src/index.js',
    // print: './src/print.js'
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  output: {
    // filename: 'bundle.js',
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
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     ident: 'postcss',
            //     plugins: (loader) => [
            //       require('postcss-import')({ root: loader.resourcePath }),
            //       require('postcss-cssnext')(),
            //       require('autoprefixer')(),
            //       require('cssnano')()
            //     ]
            //   }
            // }

          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin("style/[name].css"),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      inject: false,
      template: require('html-webpack-template'),
    }),
    new ManifestPlugin({
      fileName: 'my-manifest.json',
      basePath: '/app/',
      seed: {
        name: 'My Manifest'
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ]
};
