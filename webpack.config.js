const path = require('path')

const CssoWebpackPlugin = require('csso-webpack-plugin').default
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'result.js',
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'stylus-loader'
          ]
        }),
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    // new CssoWebpackPlugin()
  ]
}
