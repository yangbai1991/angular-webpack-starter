const { resolve } = require('path');
const webpack = require('webpack');
const WebpackHtmlPlugin = require('webpack-html-plugin');

module.exports = {
  entry: './src/main',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader'
        }
      ],
      include: resolve(__dirname, 'src'),
      exclude: /node_modules/,
    }, ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new WebpackHtmlPlugin({
      title: 'index',
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        resolve(__dirname, 'src'), // location of your src
        {
          // your Angular Async Route paths relative to this root directory
        }
      ),
  ],
  devServer: {
    contentBase: resolve(__dirname, "/dist"),
    compress: true,
    inline: true,
    hot: true,
    hotOnly: true,
    port: 3000,
    stats: {
      chunkModules: false,
      colors: true
    }
  }
};