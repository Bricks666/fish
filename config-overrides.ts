const webpack = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/**
 *
 * @param {import('webpack').Configuration} config
 * @returns {import('webpack').Configuration}
 */
module.exports = function override(config) {
	return {
		...config,
		plugins: [
			...config.plugins,
			new webpack.ProvidePlugin({
				process: 'process/browser',
				Buffer: ['buffer', 'Buffer'],
			}),
		],
		resolve: {
			fallback: {
				crypto: require.resolve('crypto-browserify'),
				stream: require.resolve('stream-browserify'),
				assert: require.resolve('assert'),
				http: require.resolve('stream-http'),
				https: require.resolve('https-browserify'),
				os: require.resolve('os-browserify'),
				url: require.resolve('url'),
			},
			...config.resolve,
			plugins: [
				...config.resolve.plugins,
				new TsconfigPathsPlugin({
					configFile: './tsconfig.json',
				}),
			],
		},
		ignoreWarnings: [/Failed to parse source map/],
	};
};
