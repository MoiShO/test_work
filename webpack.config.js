const HtmlWebPackPlugin = require("html-webpack-plugin");
const { join, resolve } = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
      filename: "./index.html"
    })
  ]
};