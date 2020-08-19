# vue-app-base

### 开启本地服务

```
npm run serve
```

用`webpack-dev-server`来启动本地服务，开启 HMR 热替换

### 生产环境打包

```
npm run build
```

启动压缩和 copy

### 监听打包调试

```
npm run watch
```

开启 sourcemap 以便调试

### lint 规则

```
npm run lint
```

用 eslint 来进行规范代码

### 总结

配置一个 webpack 打包项目
首先第一步先看有哪些文件资源需要通过 loader 来加载，比如 vue 就需要用到 vue-loader，less 需要用到 less-loader css-loader style-loader
其次看分环境区分配置，可以根据全局环境变量判断来加载不同模块，也可以配置多个文件以满足不同环境的打包需求，公共部分放到 common 配置文件。
开发环境需要尽可能保持代码和自己写的一致，所以会加入 sourcemap 文件调试，生产环境则应尽量压缩代码，不泄露源码，开启压缩工具，关掉 sourcemap。
最后可以根据实际需要使用一些插件。这样一个 webpack 打包项目就完成了
