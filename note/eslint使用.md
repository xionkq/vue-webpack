# 项目中使用eslint
参考官方文档（吐槽下：很多配置确实没讲清楚）：[ESLint 入门](https://zh-hans.eslint.org/docs/latest/use/getting-started)  
参考大佬文章：[webpack5之eslint的配置,vue3环境](https://juejin.cn/post/7009103851902992414)
### 1.首先可以通过npm init来安装相关依赖和生成默认的eslint配置文件。
```
npm init @eslint/config
```
### 2.此时通过命令可以直接执行eslint代码检查，但此时还会报错。
```
npx eslint src/**
```
### 3.需要在配置文件添加以下内容，以便识别ts规范和vue文件。
```
"parserOptions": {
    ...
    "parser": "@typescript-eslint/parser",
    "project": ['tsconfig.json'],
    "extraFileExtensions": ['.vue'],
},
```
### 4.需要在启动服务时执行代码检测，则需要在webpack里添加插件。
```
npm install eslint-webpack-plugin --save-dev
```
```
const ESLintPlugin = require('eslint-webpack-plugin')

plugins: [
    ...
    new ESLintPlugin({
        fix: true, /* 自动帮助修复 */
        extensions: ['js', 'json', 'ts', 'vue'],
        exclude: 'node_modules'
    }),
],
```
### 5.若想忽略特定文件或目录的检测，可以添加.eslintignore文件，例如忽略目录下png文件。
```
/src/assets/
```
### 6.可以在package.json中添加命令快捷执行代码检测和fix。
```
"scripts": {
    ...
    "lint": "npx eslint src/** --fix",
},
```
