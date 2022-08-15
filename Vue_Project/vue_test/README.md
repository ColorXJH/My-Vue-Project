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


## 脚手架文件结构分析
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

## 关于不同版本的vue
- 1：vue.js/vue.runtime.js的区别：
  - 1：vue.js是完整版的，包含核心功能和模板解析器
  - 2：vue.runtime.js是运行版的vue,只包含核心功能，没有模板解析器
- 2：因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
  - 1：xxx.esm 其中esm 表示es module ,如果你使用了es6的模块化，就引入这个版本
  - 2：vue在打包的时候使用了webpack,package.json中的devDependencies中的"vue-template-compiler": "^2.6.14" 专门处理.vue文件中的模板<template></template>
  - 3：vm中没有模板解析器了，所以不能写template配置项，最后都是统一打包成静态资源，html,css,js这种浏览器能识别的
  - 4：模块化有两种，一种是es6的一种是带commonjs的

## vue.config.js配置文件
- 参考官方文档

## ref属性
    1：被用来给元素或子组件注册引用信息（id的替代者）
    2：应用在html标签上获取的是真是的dom元素，应用在组件标签上是组件实例对象vc
    3：使用方式：
        打标识：<h1 ref="xxx"></h1>  <School ref="xxx"/>
        获取方式：this.$ref.xxx

## 配置项props
    功能：让组件接收外部传过来的数据
        1：传递数据：
            <demo name="xxx"/>
        2：接收数据：
            第一种方式：只接受
                props:['name']
            第二种方式：限制类型
                props:{
                    name:String,
                }
            第三种方式：限制类型，限制必要性，指定默认值：
                props:{
                    name:{
                        type:String,//类型
                        required:true,//必要性
                        default:'老王',//默认值
                    } 
                }
    备注：props是只读的，Vue底层会监测到你对props的修改，如果进行了修改，就会发出警告
        若业务需求确实需要修改，那么请赋值props中的内容到data中，然后却重命名修改data中的数据

## mixin(混入)
    功能:可以把多个组件共用的配置提取成一个混入对象
    使用方式:
        1:第一步定义混合：例如：
            {
                data(){....}
                methods(){...}
            }
        2：第二步使用混合，例如：
            1：全局混入:Vue.mixin(xxx)
            2：局部混入:mixins:['xxx']
        
## 插件
    功能：用于增强vue
    本质：包含install方法的一个对象，install的第一个参数是vue,第二个以后的参数是插件使用者传递的参数
    定义插件：
        对象.install=function(Vue,Options){
                //增加一个全局过滤器
                Vue.filter('name',function(){});
                //定义一个全局指令
                Vue.directive('name',options);
                //定义混入
                Vue.mixin(options)
                //添加实例方法
                Vue.prototype.$myMethod=function(){}
                Vue.prototype.$myProperty=xxx;
            }
    使用插件：Vue.use(pluginname,args);

## scoped样式
    作用：让样式在局部生效
    写法：<style scoped></style>
    关于安装脚手架中默认识别less插件 less-loader，可能存在的版本冲突
    一般是由于webpack版本与其不兼容导致
    请使用低版本less-loader  =>npm i less-loader@6
    卸载请用： npm uninstall --save less-loader

## todoList案例
    1：组件化编码流程：
        1：拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
        2：实现动态组件：考虑好数据存放得位置，数据是一个组件在应用还是一些组件在应用：
            1）：一个组件在应用：放在组件自身即可
            2）：一些组件在应用：放在他们共同得父组件身上<span style="color:red">状态提升</span>
        3：实现交互：从绑定事件开始
    2：props适用于：
        1：父组件==》子组件通信
        2：子组件==》父组件通信（要求父先给子一个函数）
    3：使用v-model时要切记：v-model绑定的值不能是props传递过来得值，因为props是不可以被修改得
    4：props传过来的若是对象类型的值，修改对象中的属性时vue不会报错，但是不推荐这么做
        --参考watch深度监视功能：deep:true

## webStorage(浏览器本地存储)
    --(localStorage/sessionStorage)
    1:存储内容大小一般支持5MB左右，（不同浏览器可能还不一样）
    2:浏览器端通过window.sessionStorage,window.localStorage属性来实现本地存储机制
    3:相关API:
        1:xxxStorage.setItem(k,v);
            该方法会接受一个键和值作为一个参数，会把键值添加到存储中，如果键名存在，则更新其对应的值
        2:xxxStorage.getItem(k);
            该方法接受一个键名作为参数，返回键名对应的值
        3:xxxStorage.removeItem(k);
            该方法接受一个键名作为参数，并把该键名对应的键值对从存储中移除
        4:xxxStorage.clear();
            该方法会清空存储中的所有数据
    4:备注：
        1：sessionStorage存储的内容会随着浏览器窗口关闭而消失
        2：localStorage存储的内容，需要手动清楚才消失
        3：xxxStorage.getItem(k),如果对应的k获取不到，那么返回值为null
        4：JSON.parse(null)的结果依旧是null

## 组件的自定义事件
    1：一种组件间通信的方式，适用于：子组件==》父组件
    2：使用场景：A是父组件，B是子组件，B想传递数据给A，那么就要在A中给B绑定自定义事件（事件的回调在A中）
    3：绑定自定义事件：
        1：第一种方式：在父组件中：<Demo @colorxjh="myFunc"/> 或者<Demo  v-on:colorxjh="myFunc"/>
        2：第二种方式：在父组件中：<Demo ref="demo">,
                mounted(){
                    this.#refs.demo.$on("colorxjh",this.test)//自定义事件名称，回调函数
                }
        3：若想让事件只触发一次，可以使用once修饰符，或者$once方法
    4：触发自定义事件：this.$emit("colorxjh",数据)
    5：解绑自定义事件：this.$off("colorxjh")
    6：组件上也可以绑定原生的dom事件，需要使用.native修饰符
    7：注意：通过this.$refs.demo.$on("colorxjh",回调函数)绑定自定义事件时，回调函数要么配置在methods中
        要么用箭头函数，否则this指向会出现问题，（他会指向默认的：谁触发了自定义事件，他就指向哪个vc实例对象）

## 全局事件总线（GlobalEventBus）
    1:一种组件间通信的方式，适用于任意组件间通信 
    2:安装全局事件总线
        new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus=this;//安装全局事件总线,$bus就是当前应用的vm
            }
            ...
        })
        3:使用事件总线
            1：接受数据：A组件想接受数据，则在A组件种给$bus绑定自定义事件。事件的回调留在A组件自身
                methods:{
                    test(){...}    
                }
                mounted(){
                    this.$bus.$on("xxx",this.test)
                }
            2:提供数据：this.$bus.$emit("xxx",data)
        4:最好在beforeDestory钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布（pubsub）
    1:一种组件间通信的方式，适用于任意组件间通信
    2：使用步骤：
        1：安装pubsub: npm i pubsub-js
        2：引入：import pubsub from 'pubsub-js'
        3：接收数据：组件A想接收数据，则在A组件中订阅消息，订阅的回调留在A自身
            methods:function(){
                callBackFunc(){...}
            }
            mounted(){
                //订阅消息
                this.pid=pubsub.subscribe('xxx',this.callBackFunc);
            }
        4：提供数据：pubsub.publish('xxx',数据)
        5：最好在beforeDestroy钩子中，用pubsub.unsubscribe(this.pid)去取消订阅

## nextTick
    1:语法: this.$nextTick(回调函数);
    2:作用: 在下一次dom更新结束后执行其指定的回调
    3:什么时候用: 当改变数据后，要基于更新后的新dom进行某些操作时，要在nextTick所指定的回调函数中执行

## vue封装的过渡与动画
    1:作用：在插入、更新、移除dom元素时，在合适的时候给元素添加样式类名
    2：实例    enter: v-enter   -->v-enter-active----->  v-enter-to
              leave: v-leave   -->v-leave-active----->  v-leave-to   
    3:写法：
        1：准备好样式：
            元素进入的样式：
                1:v-enter:进入的起点
                2:v-enter-active:进入过程中
                3:v-enter-to:进入的终点
            元素离开的样式：
                1:v-leave:离开的起点
                2:v-leave-active:离开过程中
                3:v-leave-to:离开的终点
        2：使用<transition>包裹要过渡的元素，并配置name属性
                <transition name="hello">
                    <h1 v-show="isShow"></h1>
                </transition>
        3:备注：若有多个元素需要过渡，则需要使用<transition-group>,且每个元素都要指定key值    

   
## vue脚手架配置代理
    方法一：在vue.config.js中添加如下配置
        devServer:{
            proxy:'http://localhost:8080'
        }
        说明：
            优点：配置简单，请求资源时直接发给前端8080即可
            缺点：不能配置多个代理，不能灵活控制请求是否走代理
            工作方式：若按照上述配置代理，当请求了前端不存在的url时，那么该请求会转发给服务器（优先匹配前端资源）
    方法二：编写vue.config.js配置具体代理规则
        module.exports={
            devServer:{
                proxy:{
                    '//api1':{
                        target:'gttp://localhost:5000',//代理目标得基础路径
                        changeOrigin:true,
                        pathRewrite:{'^/api1':''},
                        ws:true,//用于支持websocket
                    },
                    '/api2':{
                        target:'gttp://localhost:5000',//代理目标得基础路径  
                        pathRewrite:{'^/api2':''},
                    },
                },
            },
        }
        //changeOrigin  ws 默认为true
        //changeOrigin 为true时，服务器收到得请求头中host为 localhost:5000
        //changeOrigin 为false时，服务器收到得请求头中host为 localhost:8080
            //优点：可以配置多个代理，其可以灵活控制请求是否走代理
            //缺点：配置略微繁琐，请求资源时必须加上前缀