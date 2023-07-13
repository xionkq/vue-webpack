# 学习手动创建一个webpack+vue
参考大佬文章：[Vue自学之路（1）——Vue3.x+Webpack5.x的徒手搭建项目](https://blog.csdn.net/mole/article/details/123723516)
### 1.使用npm初始化项目，创建一个package.json文件。
```
npm init -y
```

### 2.添加依赖和webpack.config.ts文件，[看这里](https://createapp.dev/webpack/vue)。
```
npm install --save-dev webpack webpack-cli vue-loader vue-template-compiler babel-loader
```

### 3.添加src目录以及App.vue和main.js文件。
## build命令
### 1.在package.json中添加build命令，尝试运行build。
    没成功可能是因为没install vue或vue-loader
    
```
npm install vue
npm install vue-loader
```
```
"build": "webpack --config ./webpack.config.js"
```
### 2.此时如果vue文件中有style标签build会报错，因此继续添加css loader
```
npm install vue-style-loader css-loader
```
## dev命令
### 1.根目录添加index.html
### 2.添加依赖webpack-dev-server
```
npm install webpack-dev-server
```
### 3.webpack.config.js中添加配置
````
devServer: {
    host: 'localhost',
    port: 8080,
    open: true
},
````
### 4.package.json中添加dev命令
```
"dev": "webpack serve --progress --config webpack.config.js"
```
# tips
1. webpack默认只能解析js和JSON文件,解析其他文件需要安装并且配置在rules中。
2. loader需要配置在webpack.config.js中，rules或者plugin。
3. 使用server需要安装依赖webpack-dev-server并且添加devServer配置。

