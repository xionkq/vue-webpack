# 在vue项目中手动引入ts
参考大佬文章：[vue接入ts基本套路](https://juejin.cn/post/7057396225317797896)
### 1.引入typescript依赖。
```
npm install typescript --save-dev
```

### 2.创建tsconfig.json文件，并配置选项（先引入少量字段，后续需要再加）。
```
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "sourceMap": true
  },
}
```

### 3.安装ts-loader，并在webpack中配置ts的解析器。
```
{
    test: /\.(ts|tsx)?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
        appendTsxSuffixTo: [/\.vue$/],  // ts不知道如何处理.vue结尾文件，需加此配置
        happyPackMode: true  // 开启多线程，加快编译
    }
}
```

### 4.配置完成，试试使用ts编写代码。
