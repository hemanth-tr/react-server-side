module.exports = {
	name: 'sconfig',
	target: 'node',
	entry: '',
	output: {
		path: __dirname,
		filename: 'server.js',
		libraryTarget: 'commonjs2',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js%/,
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