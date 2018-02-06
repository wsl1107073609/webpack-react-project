//webpack的配置文件

module.exports = {
	//调试配置项
	devtool: 'eval-source-map',

	//打包的入口和出口及文件名
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	//本地服务器
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		inline: true,
		port: '8080'
	},

	//依赖工具和转换规则
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'es2015', 
							'react'
						]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
				]
			}
		]
	}
}