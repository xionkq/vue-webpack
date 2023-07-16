const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
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
            }
        ]
    },
    // resolve: {
    //     extensions: [
    //         '.js',
    //         '.vue'
    //     ]
    // },
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
