## Vue.js 源码剖析-响应式原理、虚拟 DOM、模板编译和组件化

### 1、请简述 Vue 首次渲染的过程。

首次渲染过程：
1. 首先Vue初始化实例成员和静态成员
2. 实例化之后调用Vue的构造函数 new Vue()
3. 入口调用this._init()方法
4. 在初始化方法中调用了vm.$mount方法，在enter-runtime-with-complier.js文件中 如果没有传入render函数，把模板编译成render函数
complieToFunctions生成render渲染函数，编译完成后存到options.render=render
5. 在 src/web/runtime/index.js 调用 vm.$mount 运行时版本不会执行这个
6.  mountComponent(this, el) src/core/instance/lifecycle.js 判断是否有render选项，如果没有但是传入了模板，并且当前是开发环境的话会发出警告，运行时版本不支持编译器。
触发beforeMount、定义updateComponent vm.render() 把render转换成虚拟dom vm.update(vm.render(),...) 把虚拟dom转换成真实dom、创建watcher实例，updateComponent是在watcher内部调用的，调用get方法、watcher创建完毕之后触发mounted钩子函数、最终挂载结束返回vue实例


### 2、请简述 Vue 响应式原理。

响应式的处理是从init方法开始的
1. initState()初始化Vue实例的状态、initState里调用initData()把data属性注入到Vue实例上、并且调用observe()把data属性转换成响应式对象
2. observe(value)里做的事情是，首先判断value是否是对象，如果不是对象直接返回，其次判断value对象是否有__ob__，如果有直接返回，如果没有创建observer对象并返回observer对象
3. 创建observe对象的时候，首先给传入的value对象定义一个不可枚举的__ob__属性，记录当前的observer对象，然后进行数组的响应式处理（设置数组的几个方法，比如push/pop/sort等方法，这些方法会改变原数组，所以这些方法被调用的时候要去发送通知，发送通知的时候是找到数组对象对应的__ob__，找到observer对象对应的dep，调用dep的notify方法，遍历数组中的每一个成员）和对象的响应式处理（调用walk()方法，即遍历对象的每一个属性，对每一个属性调用defineReactive）
4. defineReactive会为每一个属性创建dep对象，如果当前属性值是对象，调用observe把属性下面的每个属性也转换成响应式对象，defineReactive里定义getter和setter，getter的作用是收集依赖，返回属性值，setter作用是保存新值，如果新值是对象，调用observe，派发更新，调用dep.notify方法
5. 收集依赖的过程，首先执行watcher对象的get方法中调用pushTarget，记录Dep.target属性，访问data中成员的时候收集依赖，把属性对应的watcher添加到dep的subs数组中，如果属性值也是对象，要为子对象childOb收集依赖，目的是子对象添加和删除成员时发送通知
6. 当数据发生变化的时候Watcher的执行过程，dep.notify()调用Watcher对象的update()方法，update()方法中会调用queneWatcher()判断watcher是否被处理，如果没有的话添加到队列，并调用flushSchedulerQuene()，flushSchedulerQuene()中会触发beforeUpdate()钩子函数，调用watcher.run更新，接下来清空上一次的依赖，触发actived钩子函数，触发update钩子函数

### 3、请简述虚拟 DOM 中 Key 的作用和好处。

在patchVnode的时候，遇到不相等的值的时候会从后往前去找，如果内容相同，会重用上一次的结果不会更新dom
设置key比不设置key的dom操作要少很多


### 4、请简述 Vue 中模板编译的过程。

1. 模板编译的入口函数complieToFunctions(template, ...)， 先从缓存中加载编译好的render函数，如果缓存中没有的话调用compile(template, options)开始编译
2. compile函数中，首先合并options选项，然后调用baseCompile(template.trim(), finalOptions)编译模板
3. baseCompile中首先把template转换成AST抽象语法树，然后对抽象语法树进行优化，标记静态根节点，检测到静态根节点，不需要在每次重新渲染的时候重新生成新节点，patch阶段跳过静态子树，最后抽象语法树生成js的创建代码
4. complieToFunctions(template, ...)继续把上一步中生成的字符串形式js代码转换成函数，createFunction()，render和staticRenderFns初始化完毕，挂载到Vue实例的options对应的属性中