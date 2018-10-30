const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const PATHS = require('./webpack.config.paths');

module.exports = environment => {
	return webpackMerge(baseConfig(environment), {
		output: {
			path: PATHS.outputDir,
			filename: 'js/[name].js',
			chunkFilename: 'js/[name].js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					exclude: [/node_modules/],
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: ['@babel/plugin-syntax-dynamic-import', 'react-hot-loader/babel']
							}
						},
						{ loader: 'ts-loader' },
						{ loader: 'tslint-loader' }
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: path.join(PATHS.srcDir, 'index.html')
			}),
			new webpack.HotModuleReplacementPlugin()
		],
		devServer: {
			contentBase: PATHS.outputDir,
			watchContentBase: true,
			compress: true,
			publicPath: '/',
			hot: true,
			host: '0.0.0.0',
			disableHostCheck: true,
			https: true,
			stats: {
				color: true
			},
			historyApiFallback: true
		}
	});
};
