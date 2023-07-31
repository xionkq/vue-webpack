1. Cannot read properties of null (reading 'parentNode')  
因为引入了js为扩展名的Pinia store导致，改完后问题解决。

2. Cannot read properties of null (reading 'shapeFlag')  
同上

3. "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?  
原因：似乎是因为ts文件里导入js就会报错？（TODO）  
解决：将pinia文件扩展名从.js改为.ts，改完引入后一切正常。

4. TS2307: Cannot find module './App.vue' or its corresponding type declarations.  
原因：可以正常运行，但ts不认识.vue扩展名，需要新增配置。使用vite似乎有内置的配置？。（TODO）  
解决：在src目录下新建shims-vue.d.ts文件用于告诉ts，.vue文件就有vue模块去处理。需要注意的是，vue3和vue2的写法并不一致。

5. Module not found: Error: Can't resolve './router' in 'D:\github\github-personal\vue-webpack\src'  
原因：在router目录下我使用了index.ts文件作为router文件。当未声明目录中文件时，会默认去查找目录下index，index.js，index.json文件，而这在我项目中都没有，因此找不到导入的'./router'文件。  
解决：方法一：可以修改index.ts扩展名未index.js，此时webpack可以解析到。方法二：在webpack配置中加入一下代码，让webpack可以解析ts文件。
```
resolve: {
    extensions: ['.ts', '.tsx', '.js'],
},
```

6. Can't resolve '@/components/Page.vue'  
原因：ts可以解析@路径，但是webpack无法解析。  
解决：因此需要在webpack中也配置上。

7. webpack5 tree shaking不生效  
原因：各种配置都检查过了都没用，最后搜到一篇帖子，原因是tsconfig里配置module使用的commonjs
解决：将ts配置文件module改成es6

8. 启动开发服务器报错webpack the server responded with a status of 404  
原因：由于开发服务器本质也是打包之后将内容展示出来，所以打包配置output.publicPath属性也会影响server。  
解决：将publicPath改成'/'改回来，但是此时打包路径就会出现问题，暂未找到解决办法。（TODO）

9. Cannot find module './zh-CN.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.  
原因：ts无法识别或者导入json  
解决：在tsconfig中加入"resolveJsonModule": true

10. ts的if语法判断ref值不为null，但是结果依然报错  
原因：查配置，差vue版本，查ts版本，终于发现使ts版本问题。  
解决：目前使用ts4没问题，使用ts5有问题。（TODO）
