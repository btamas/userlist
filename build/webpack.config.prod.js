const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const PATHS = require('./webpack.config.paths');

module.exports = (environment = 'development') => {
	return webpackMerge(baseConfig(environment), {
		output: {
			path: PATHS.outputDir,
			filename: 'js/[name].[chunkhash].js',
			chunkFilename: 'js/[name].[chunkhash].js',
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
								plugins: ['@babel/plugin-syntax-dynamic-import']
							}
						},
						{ loader: 'ts-loader' }
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: path.join(PATHS.outputDir, 'index.html'),
				template: path.join(PATHS.srcDir, `index.html`),
				minify: {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					sortAttributes: true,
					sortClassName: true
				}
			})
		],
		optimization: {
			runtimeChunk: {
				name: 'manifest'
			}
		}
	});
};
