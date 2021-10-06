const path = require('path');

const clientConfig = {
	name: 'web',
	target: 'web',
	entry: '.src/index.js',
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'bundle.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/react']
					}
				}
			}
		]
	}
}

const serverConfig = {
	name: 'server',
	target: 'node',
	entry: './src/server.js',
	output: {
		path: __dirname,
		filename: 'server.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/react']
					}
				}
			}
		]
	}
}

module.exports = [clientConfig, serverConfig];