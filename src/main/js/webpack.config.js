var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve:{
    alias:{
      'react-dom': '@hot-loader/react-dom'
    }
  },
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    publicPath: '/'
    //contentBase: __dirname + '/dist/'
  },
  module: {
        rules: [
        {
          test: /\.js$|\.jsx?$/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'  // use ! to chain loaders
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,          
          loader: 'file-loader'
        },
        {
          test: require.resolve("underscore"),
          loader: "expose-loader",
          options: {
            exposes: {
              globalName: "_.filter",
              moduleLocalName: "filter",
            },
          },
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, './src/index.html'),
      filename: path.resolve(__dirname, './public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}