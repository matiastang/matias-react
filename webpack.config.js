/*
 * @Author: tangdaoyong
 * @Date: 2020-11-24 17:24:53
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-25 00:08:55
 * @Description: file content
 */
var path = require('path');
//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//常量
// const ENTRYPATH = path.resolve(__dirname, './src/index.js');
const ENTRYPATH = path.resolve(__dirname, './src/app.tsx');
const OUTPUTPATH = path.resolve(__dirname, './dist');

module.exports = {
    entry: {
        app: ENTRYPATH
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({//处理 html，配置多个会生成多个 html
            title: 'React学习',//html的标题
            filename: './index.html', //生成的 html 文件
            template: './public/index.html', //使用的 html 模版
            favicon: '',//html页面图标
            inject: "body", // script标签的未知，body,head,true(同body),false
            hash: true, //给js生成hash值
            showErrors: true, //显示错误信息
            minify: { // 压缩HTML文件
                minifyJS: true,  //压缩内联js
                minifyCSS: true, //压缩内联css
                removeComments: true, //移除HTML中的注释
                removeCommentsFromCDATA: true, //从脚本和样式删除的注释
                removeRedundantAttributes: true, //删除多余的属性
                collapseWhitespace: true, // 删除空白符与换行符
            }
        }),
    ],
    output: {
        path: OUTPUTPATH,      //出口路径
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader', 'ts-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,//匹配 js 文件
                use: [ {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false
                    }
                }],//使用babel
                exclude: /node_modules/,//排除文件夹
            },
            {
                test: /\.css$/, //匹配 css 文件
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {//配置 webpack-dev-server
        host: 'localhost',
        port: 3000,
        open: true,
        contentBase: OUTPUTPATH,
        historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
        compress:true //压缩
    }
}