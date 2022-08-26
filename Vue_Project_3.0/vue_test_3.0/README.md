# vue_test_3.0

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


# vue3 快速上手
    vue3简介：
        2020.9.18，vue3.0发布，代号，one piece 海贼王
    vue3带来了什么：
        1：性能的提升
            打包大小减少41%
            初次渲染快55%,再次渲染快133%
            内存减少41%
            ...
        2：源码的升级
            使用Proxy代替defineProperty实现响应式
            重写虚拟dom的实现和Tree-Shaking
        3：拥抱Type-script
            vue3.0可以更好的支持type-script
        4：新的特性
            1：CompositionAPI(组合API)
                setup配置
                ref与reactive
                watch与watchEffect
                provide与inject
                ...
            2：新的内置组件
                Fragment
                Teleport
                Suspense
            3:其他改变
                新的生命周期钩子
                data选项应该始终被声明为一个函数
                移除keyCode支持做为v-on的修饰符
                ...

## 创建vue3.0工程
    1：使用vue-cli创建
        查看@vue/cli版本，确保其在4.5.0以上
        vue --version
        安装或升级你的vue/cli
        npm install -g @vue/cli
        创建
        vue create vue_test
        启动
        cd vue_test
        npm run serve
    2:使用vite创建
        什么是vite:新一代前端构建工具
            优势如下：
                开发环境中，无需打包操作，可快速的冷启动
                轻量快速的热重载
                真正的按需编译，不再等待整个应用编译完成
        步骤：
            1：创建工程：npm init vite-app <project-name>
            2：进入工程目录 cd <project-name>
            3：安装依赖 npm install
            4：运行 npm run dev


                


