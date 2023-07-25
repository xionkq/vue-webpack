const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,       // 文件扩展名 .css 的正则表达式
                use: ['vue-style-loader', 'css-loader']   // 使用 vue-style-loader、css-loader 加载器
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.worker.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: 'no-fallback' }
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    happyPackMode: true,  // 开启多线程，加快编译
                    appendTsSuffixTo: [/\.vue$/]  // ts不知道如何处理.vue结尾文件，需加此配置
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],  // 模块解析时尝试自动解析的文件扩展名，因此在模块导入时可以省略以下扩展名
        alias: {
            '@': path.resolve(__dirname, 'src'), // 将@别名指向项目的src目录
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true
    },
};

module.exports = config;
