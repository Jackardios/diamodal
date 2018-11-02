const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  const isDevMode = (options.mode !== 'production');

  const commonConfig = {
    entry: {
      diamodals: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'diamodals.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.art$/,
          loader: "art-template-loader",
          options: {
              // art-template options (if necessary)
              // @see https://github.com/aui/art-template
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([
        'dist',
        'build'
      ]),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
    ],
  }

  const devConfig = {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
    devServer: {
      hot: true,
      compress: true,
      port: 9000
    }
  };

  const productionConfig = {
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({}),
      ],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        },
        chunks: "all"
      }
    },
    plugins: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new MiniCssExtractPlugin({
        filename: 'diamodals.[hash].css',
      }),
    ],
  }

  return isDevMode ? merge(commonConfig, devConfig) : merge(commonConfig, productionConfig);
}