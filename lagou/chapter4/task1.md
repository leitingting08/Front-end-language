# React 设计原理解密及源码解读

## 1. 请简述 React 16 版本中初始渲染的流程

首先 jsx 转换成 react element，第二步render渲染阶段，为每一个 react 元素构建 fiber 对象（workInProgress Fiber 树）创建 fiber 对象对应的 dom 对象，为fiber对象添加effectTag属性用来记录当前fiber要执行的dom操作，然后在render结束之后，fiber 会被保存到 fiberroot。第三步 commit 阶段，先获取到 render 的结果，在 fiberroot 中的新构建的 workInProgress Fiber 树，根据 fiber 中的 effectTag 属性进行相应的dom操作

## 2. 为什么 React 16 版本中 render 阶段放弃了使用递归

递归调用的过程不能被终止，如果 virtual dom 层级比较深，递归比对的过程就会长期占用主线程，而js又是单线程，不能同时执行多个任务，其他任务只能等待执行，而且js的执行和ui的渲染又是互斥的，此时用户要么看到的就是空白界面，要么就是有界面但是不能影响用户操作，处于卡顿状态，用户体验差。所以 React 16 放弃使用递归调用，采用循环来模拟递归，因为循环随时可以被中断。

## 3. 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情

1. before mutation 阶段：执行dom操作前，处理dom节点渲染/删除后autoFocus、blur逻辑，处理类组件的getSnapShotBeforeUpdate生命周期钩子，调度useEffect。
2. mutation 阶段：执行dom操作，将workInProgress Fiber 树变成current fiber树。
3. layout 阶段：调用类组件生命周期函数或者函数组件的钩子函数，充值nextEffetc/useEffect等让函数组件产生副作用的hooks，当使用useEffect后，会在fiber上的updateQuene.lastEffect生成effect链，循环effect链，并根据每个effect上的effectTag，执行destory/create操作

## 4. 请简述 workInProgress Fiber 树存在的意义是什么

实现双缓存技术，在内存中构建 DOM 结构以及 DOM 更新，在 commit 阶段实现 DOM 的快速更新
双fiber树，在react最多会同时存在两颗fiber树。当前屏幕上显示内容对应的 fiber 树
