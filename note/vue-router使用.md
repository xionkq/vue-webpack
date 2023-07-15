# vue-router使用
参考：[Vue Router入门](https://router.vuejs.org/zh/guide/)
### 1.创建router文件夹，定义路由文件index.js。
### 2.定义routes路由配置，必要配置为path和component。
### 3.创建router对象，使用*导入的createRouter函数*，使用全局变量VueRouter不起作用（可能是vue3语法导致）。
### 4.在main.js文件里使用导出的router，app.use(router)。
### 5.run起来，router会将路由匹配的组件渲染到router-view组件中，若没有定义则不会渲染。
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

