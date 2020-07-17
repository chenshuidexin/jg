const path =require('path');
const nodeExternals=require('webpack-node-externals');//定义外部-不应捆绑的模块，可以提取和删除不使用的模块
module.exports={
    target:'node',//目标：告知webpack打包的是服务器文件
    mode:'development',//开发模式
    entry:path.resolve(__dirname,'./src/server/index.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
    },
    externals:[nodeExternals()],//负责检查所有引入的核心模块，并且告诉webpack不要把核心模块打包到server.js 里面去
    module:{
        rules:[
            {
                test:/.js$/,//匹配
                loader:'babel-loader',//解析模块
                exclude:/node_modules/,//排除
                options:{
                    presets:[//解析选项对象，所有应用的解析选项都将合并。
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    }
}