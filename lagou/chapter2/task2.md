# 模块化开发与规范化标准

## 一、简答题

### 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

1. 添加配置文件 `webpack.config.js`
2. 设置打包入口文件 `main.js` 输出文件 output 的文件名和路径
3. 设置工作模式 mode 默认生产模式，production/development/none 三种模式

```
const path = require('path)

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist)
  }
}
```

webpack 生成的代码是一个立即执行函数，这个函数接收一个 modules 的参数 调用时传入一个数组，
数组中每一个元素都是一个参数列表相同的函数，函数代表的就是源码中的模块，每个模块最终都会被包裹在函数中，从而实现模块的私有作用域。
函数入口，定义一个对象缓存加载过的模块，然后定义一个 require 函数，再在 require 函数上挂载数据和工具函数，最后加载 require 函数，进入 require 函数会先判断，有没有加载过，加载过就从缓存里读，没就加载这个模块。

### 2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

webpack 默认加载 js 文件，其他类型文件都需要用适合的 loader 来处理文件。
Loader 会将所有其他资源文件转换为 js 模块，Loader 作用是 加载资源文件，分类三类：编译转换类、文件操作类、代码检查类

开发 loader 思路：每个 Loader 都需要导出一个函数，输入就是所加载的资源文件内容，输出就是此次加工后的一个结果，通过 source 参数接收输入，返回值去输出，最终的结果必须是一段 JavaScript 代码。

Loader 专注实现模块加载，而 Plugin 是用来解决项目中其他自动化工作
Plugin 是插件，为了增强项目自动化的能力，相比于 Loader，Plugin 有更宽的能力范围，通过钩子机制实现，是一个函数或者是一个包含 apply 方法的对象，通过在生命周期的钩子中挂载函数实现扩展。

## 二、编程题

### 1、使用 Webpack 实现 Vue 项目打包任务

[Webpack](https://github.com/leitingting08/Front/tree/master/lagou/chapter2/vue-app-base)
