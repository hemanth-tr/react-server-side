const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: 'css/bootstrap.css'
});

const clientConfig = {
	name: 'web',
	target: 'web',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
		clean: true
	},
	plugins: [miniCssExtractPlugin],
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
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
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
			},
			{
				test: /\.s?css$/,
				use: 'css-loader'
			}
		]
	}
}

module.exports = [clientConfig, serverConfig];