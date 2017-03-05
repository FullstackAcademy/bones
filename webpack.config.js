'use strict'; // eslint-disable-line semi

const LiveReloadPlugin = require('webpack-livereload-plugin')
const eslintFormatterPretty = require('eslint-formatter-pretty')
const devMode = process.env.NODE_ENV === 'development'

/**
 * Fast source maps rebuild quickly during development, but only give a link
 * to the line where the error occurred. The stack trace will show the bundled
 * code, not the original code. Keep this on `false` for slower builds but
 * usable stack traces. Set to `true` if you want to speed up development.
 */

const USE_FAST_SOURCE_MAPS = false

const config = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-2']
      }
    }]
  },
  plugins: []
}

if (devMode) {
  config.devtool = USE_FAST_SOURCE_MAPS
    ? 'cheap-module-eval-source-map'
    : 'source-map'
  config.module.rules.unshift({
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      formatter: eslintFormatterPretty,
      cache: true
    }
  })
  config.plugins.push(
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  )
}

module.exports = config
