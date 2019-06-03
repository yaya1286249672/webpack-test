const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dev = process.env.NODE_ENV !== "production";
console.log("process.env.NODE_ENV=======>", process.env.NODE_ENV);
console.log("dev=============================》", dev);
//'./src/index.html' require('html-webpack-template')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  //关闭 webpack 的性能提示(文件大小超出提示)
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      src: resolve("src"),
      plugin: resolve("src/plugin")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html",
      inject: "body",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.(sa|c)ss$/,
        use: [
          {
            loader: dev ? "style-loader" : MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("precss")(), //sass解析
                require("cssnano")(), //相同css合并（例：.a{width:100px},.b{width:100px} => .a,.b{width:100px}）
                require("autoprefixer")({
                  browsers: [
                    ">0%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 8" //针对不同浏览器某些css属性需要用到不同内核前缀（例：-webkit-transfrom，-moz-transfrom)
                  ]
                })
              ],
              sourceMap: true,
              config: {
                path: "postcss.config.js"
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 81920,
              name: "img/[name].[hash:7].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    
  }
};
