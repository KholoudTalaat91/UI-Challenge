const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
  test: /\.pug$/,
  use: ["html-loader?attrs=false", "pug-html-loader"]
};

const sass = {
  test: /\.s[ac]ss$/i,
  // test: /\.(sa|sc|c)ss$/,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader"
  ]
};

const babel = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }
};
module.exports = {
  entry: { index: "./src/js/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [pug, sass, babel]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: "index.html",
      // template: path.resolve(__dirname, "src/pug/index.pug"),
      // // template: "src/pug/index.pug",
      // inject: true,
      // chunks: ["index"],
      // chunksSortMode: "manual"
      inject: true,
      filename: "index.html",
      template: path.resolve(__dirname, "src/pug/index.pug"),
      minify: false,
      hash: true,
      chunks: ["index"]
      // chunksSortMode: "manual"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
      // filename: devMode ? "[name].css" : "[name].[hash].css",
      // chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
      // ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ]
};
