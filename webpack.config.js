const path = require('path');
//把css文件抽离一个单独的style.css文件而不是直接插入到head中
const ExtractTextPlugin = require("extract-text-webpack-plugin");



//path.resolve把一个路径或路径片段的序列解析为一个绝对路径
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};
