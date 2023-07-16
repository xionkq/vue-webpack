# sass和scss
参考大佬文章：[sass中文文档](https://www.sass.hk/docs/)
### 1.安装sass
```
npm install sass
```
### 2.安装sass-loader以便webpack识别和打包
```
npm install sass-loader
```
### 3.在webpack配置中加入sass
> 注意：若在项目中使用lang=scss，则test需要匹配.scss文件，否则会编译出错
```
{
    test: /\.scss$/,
    use: ['vue-style-loader', 'css-loader', 'sass-loader']
}
```
### 4.sass和scss仅仅是语法上的区别，sass使用缩进语法，scss格式是css3语法的扩展，更易于阅读和使用
