const path = require('path');
const webpack = require('webpack');
const autoPrefixer = require('autoprefixer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const PATHS = require('./webpack.config.paths');

module.exports = (environment = 'development') => ({
	entry: {
		bundle: PATHS.bundle
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: false
						}
					},
					{ loader: 'csso-loader' },
					{
						loader: 'postcss-loader',
						options: {
							plugins: loader => [autoPrefixer()]
						}
					},
					{ loader: 'sass-loader' }
				]
			}
		]
	},
	resolve: {
		mainFiles: ['index'],
		extensions: ['.ts', '.tsx', '.js', '.scss'],
		plugins: [new TsconfigPathsPlugin()],
		alias: {
			config: path.join(PATHS.srcDir, 'configs', environment)
		}
	}
});
