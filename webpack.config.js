const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: 
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: [
                ["env"]
            ]
        }
      },
      {
        test: path.resolve(__dirname, 'deskum.min.js'),
        loader: "imports-loader?this=>window&define=>false"
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};