var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
	entry:{
		build:"./reactRouter/main.jsx"
	},
	output:{
		path:"./commentBuild/react_router/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style","css"],
				exclude:"/node_modules/",
				// include:path.resolve(__dirname,"./comentSrc/commentBox")
			},
			{
				test:/.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				// 排除node_modules里的
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"./reactRouter")
			}
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			// 自动生成js引用
			chunks:["build"]
		})
	]
}