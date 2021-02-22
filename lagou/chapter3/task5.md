# 3-5 Vue3.0

## 1、Vue 3.0 性能提升主要是通过哪几方面体现的？

响应式系统升级
用proxy重写响应式系统，可以监听动态新增的属性，可以监听删除的属性，可以监听数组的索引和length属性
编译优化
标记所有静态节点，diff的时候只需要对比动态节点内容
Fragments
静态提升
pacth flag
缓存事件处理函数

## 2、Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？

Vue 2.x使用的Options Api

1. 包含一个描述组件选项（data,methods,props等）的对象
2. Options Api开发复杂组件，同一个功能逻辑被拆分到不同选项

Vue 3.0 所采用的 Composition Api

1. 是一组基于函数的API
2. 可以更灵活的组织组件的逻辑
3. 可以提取逻辑功能方便其他组件重用

## 3、Proxy 相对于 Object.defineProperty 有哪些优点？

1. 可以直接监听动态添加的属性
2. 直接监听属性的删除操作
3. 监听数组索引和length属性

## 4、Vue 3.0 在编译方面有哪些优化？

Ve2.x中编译静态根节点和静态节点，做根节点的静态标记，静态节点还需要diff
Vue 3.0标记和提升所有的静态根节点，diff的时候只需要对比动态节点的内容，Fragengts-片段，模板中不需要再创建一个唯一的根节点，
静态提升的节点只会在初始化的时候被创建一次，patch flag 标记动态节点提升性能，缓存事件处理函数，减少不必要的更新操作

## 5、Vue.js 3.0 响应式系统的实现原理？

Proxy对象实现属性监听
reactive接收一个参数，判断参数是否是对象，创建拦截器对象handler，设置get/set/deleteProprty，返回Proxy对象
effect&track函数手机依赖
trigger触发更新
