# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#笔记


##脚手架文件结构分析
- 配置文件目录结构
   - node_modules
   - public
     - favicon.ico:页面标签
     - index.html:主页面
   - src
     - asserts:存放静态资源
       - log.png 
     - components:存放组件
       - HelloWorld.vue
     - App.vue:汇总所有组件
     - main.js:入口文件
- .gitignore:git版本控制忽略的配置文件
- babel.config.js:babel的配置文件
- package.json:应用包配置文件
- README.md:应用描述文件
- package-lock.json:包版本控制文件

##关于不同版本的vue
- 1：vue.js/vue.runtime.js的区别：
  - 1：vue.js是完整版的，包含核心功能和模板解析器
  - 2：vue.runtime.js是运行版的vue,只包含核心功能，没有模板解析器
- 2：因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
  - 1：xxx.esm 其中esm 表示es module ,如果你使用了es6的模块化，就引入这个版本
  - 2：vue在打包的时候使用了webpack,package.json中的devDependencies中的"vue-template-compiler": "^2.6.14" 专门处理.vue文件中的模板<template></template>
  - 3：vm中没有模板解析器了，所以不能写template配置项，最后都是统一打包成静态资源，html,css,js这种浏览器能识别的
  - 4：模块化有两种，一种是es6的一种是带commonjs的

##vue.config.js配置文件
-- 参考官方文档

##ref属性
    1：被用来给元素或子组件注册引用信息（id的替代者）
    2：应用在html标签上获取的是真是的dom元素，应用在组件标签上是组件实例对象vc
    3：使用方式：
        打标识：<h1 ref="xxx"></h1>  <School ref="xxx"/>
        获取方式：this.$ref.xxx


