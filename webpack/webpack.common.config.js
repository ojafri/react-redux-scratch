const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProvidePlugin = require('webpack/lib/ProvidePlugin')

module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      underscore: 'lodash'
    }
  },
  plugins: [
    new ProvidePlugin({
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'xo-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  }
}
