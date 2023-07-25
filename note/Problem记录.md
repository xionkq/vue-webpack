1. Cannot read properties of null (reading 'parentNode')  
因为引入了js为扩展名的Pinia store导致，改完后问题解决。

2. Cannot read properties of null (reading 'shapeFlag')  
同上

3. "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?  
将pinia文件扩展名从.js改为.ts，改完引入后一切正常。似乎是因为ts文件里导入js就会报错？（TODO）。
