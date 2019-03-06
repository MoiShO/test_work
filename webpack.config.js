const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  devtool: 'cheap-source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"]
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({ filename: './css/style.css' }),
    new HtmlWebPackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
  ]
}
