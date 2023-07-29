# 创建一个web worker
参考大佬文章：[如何在前端Vue项目中使用web worker](https://juejin.cn/post/7074155791657205767)
### 1.在script目录创建worker内部的js文件，命名为test.worker.js
### 2.安装worker-loader，并配置在webpack中
> 由于Worker构造函数只能够接收外部url，不能够用于本地js文件，因此需要安装该插件将目标js文件(test.worker.ts)作为构造函数，使其可以创建一个worker实例
```
npm install worker-loader
```
```
{
    test: /\.worker.js$/,
    use: {
        loader: 'worker-loader',
        options: { inline: 'no-fallback' }
    }
},
```
### 3.此时便可以在vue文件中引入test.worker.js，并将其作为Worker构造函数
```
import Worker from '../script/test.worker.ts'

const worker = new Worker()
```
### 4.worker与主线程之间的通信通过postMessage进行，可监听双方的onmessage事件用于获取传递的数据
```
// worker.js内部
onmessage = (event) => {
    const data = event.data
    // ...do something
}
```
```
// worker.vue文件中
worker.onmessage = (e) => {
    const data = event.data
    // ...do something
}
```
