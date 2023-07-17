# 项目中使用pinia
参考官方文档：[简介|Pinia](https://pinia.vuejs.org/zh/introduction.html)
### 1.通过createPinia函数创建一个pinia对象并将其应用到vue全局实例上
```
const pinia = createPinia()
vue.use(pinia)
```
### 2.创建store文件夹，在其中定义一个store文件
### 3.store文件通过defineStore来创建，其接收两个参数，第一个为store唯一的名称，第二个参数为store内容
### 4.store内容可以是一个选项式api，通过包含state，getter，action的对象来创建
> 注意，和选项式api中的data一样，state也必须是一个函数，这是为了避免多个实例共享数据（虽然好像确实应该共享数据？）
```
export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 0,
        }
    },
    actions: {
        add() {
            this.count ++
        }
    }
})
```
### 5.也可以是一个组合式api，一个setup函数
```
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    return {
        count,
    }
})
```
