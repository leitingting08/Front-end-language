## 一、简答题

### 1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。

```
let vm = new Vue({
el: '#el',
data: {
o: 'object',
dog: {}
},
method: {
clickHandler () {
// 该 name 属性是否是响应式的
this.dog.name = 'Trump'
}
}
})
```

> vue2.x 中是利用 Object.defineProperty 用 get set 方法来做拦截的
> 不是响应式的，因为 name 原来在对象中是不存在的，要手动设置，Vue 中提供了 set 方法来设置，
> Vue.set(object,key,value) 或者 this.\$set(this.object,key,value)，或者是利用 Object.assign 对对象做整个的修改像这样而不是这种添加某个不存在的属性 this.dog.name = 'Trump'
> vue3 中是改用 Proxy 做变更检测，目标对象上不存在的属性设置值时，进行 “添加” 操作，并且会触发 trigger() 来通知响应系统的更新。解决了 Vue 2.x 中无法检测到对象属性的添加的问题

### 2、请简述 Diff 算法的执行过程

diff 算法是在数据改变时执行，根据真实 dom 生成虚拟 dom，当虚拟 dom 的某个节点的数据改变时，生成新的 vNode，利用 diff 算法比较新旧节点的差异，更新真实 dom。这样比直接改变真实 dom 所耗费的性能要少。

## 二、编程题

### 1、模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。

[vueRouter](https://github.com/leitingting08/Front/tree/master/lagou/chapter3/vueRouter.js)

### 2、在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。

[Compiler](https://github.com/leitingting08/Front/tree/master/lagou/chapter3/compiler.js)

### 3、参考 Snabbdom 提供的电影列表的示例，利用 Snabbdom 实现类似的效果，如图：
