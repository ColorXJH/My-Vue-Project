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

## 常用composition(组合式) API
    1：拉开序幕的setup
        1:理解：vue3.0中一个新的配置项，值为一个函数
        2：setup是所有composition api表演的舞台
        3：组件中所用到的：数据，方法，等等，均要配置在setup中
        4：setup函数的两种返回值：
            1：若返回一个对象，则对象中的属性，方法 在模板中均可以被使用（重点关注）
            2：若返回一个渲染函数，则可以自定义渲染内容
        5：注意点：
            1:尽量不要与vue2.x混合使用
                vue2.x配置（data,methods,computed...）中可以访问到setup中的属性，方法
                但是在setup中不能访问到vue2.x配置（data,methods,computed...）
                如果有重名，setup优先
            2：setup不能是一个async函数，以为返回值不再是return对象，而是promise,模板看不到return对象中的属性
    2：ref函数
        作用：定义一个响应式的数据
        语法：const xxx=ref(initValue)
            创建一个包含响应式数据的引用对象（reference对象）
            js中操作数据xxx.value
            模板中读取数据：不需要.value，直接<div>{{xxx}}</div>
        备注：
            接受的数据可以是基本数据类型，也可以是对象类型
            基本类型的数据：响应式依然是靠 Object.defineProperty()的get和set完成的
            对象类型的数据：内部“求助”了vue3.0中的一个新函数：reactive函数
    3：reactive函数
        作用：定义一个对象类型的响应式数据（基本类型别用它，用ref函数）
        语法：const 代理对象=reactive(被代理对象) 接收一个对象（或数组），返回一个代理器对象（proxy对象）
        reactive定义的响应式数据是“深层次的”
        内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据都是响应式的
        
    4：vue3中的响应式原理
    

                


