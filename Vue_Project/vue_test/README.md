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

## vue-resource
    1:几种发送ajax请求的方式：1：xhr,2:jquery 3:axios,4:fetch,5:vue-resource
    使用vue-resource
        1:npm i vue-resource
        2:使用插件 Vue.use();
        3:替换axios
    注意：该插件库vue 1.x使用较为广泛，仙子啊官方已不维护了，建议使用axios
    
## vue插槽
    1：作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <span color="red">父组件==>子组件</span>
    2：分类：默认插槽，具名插槽，作用域插槽
    3：使用方式：
        1：默认插槽
            父组件中：
                <Category>
                    <div>html结构</div>
                </Category>
            子组件中：
                <template>
                    <div>
                        <!-- 定义插槽 -->
                        <slot>插槽默认内容</slot>
                    </div>
                </template>
        2：具名插槽：
            父组件中：
                <Category>
                    <template slot="center">
                        <div>html结构</div>
                    </template>
                    <template v-slot:footer>
                        <div>html结构</div>
                    </template>
                </Category>
            子组件中：
                <template>
                    <div>
                        <!-- 定义插槽 -->
                        <slot name="center">插槽默认内容</slot>
                        <slot name="footer">插槽默认内容</slot>
                    </div>
                </template>
        3：作用域插槽：（有时候父组件没有数据定义，数据放在子组件）
            1：理解：数据在组件自身，但根据数据生成的结构需要组件的使用者（父组件）来决定，（games数据在category组件中，但使用
            数据所遍历出来的结构由app组件来决定）
            2：具体编码：
                父组件中：
                    <Category>
                        <template scope="scopeData">
                            <!-- 生成的是ul列表 -->
                            <ul>
                                <li v-for="(item,index) in scopeData.games">{{item}}</li>
                            </ul>
                        </template>
                    </Category>
                    <Category>
                        <template scope="scopeData">
                            <!-- 生成的是ol列表 -->
                            <ol>
                                <li v-for="(item,index) in scopeData.games">{{item}}</li>
                            </ol>
                        </template>
                    </Category>
                子组件中：
                    <template>
                        <div>
                            <slot :games="games"></slot>
                        </div>
                    </template>
                    export default {
                        data(){
                            return{
                                games:["QQ飞车","英雄联盟","穿越火线","红色警戒"],
                            }
                        }
                    }

## vuex
    1:vuex是什么
        专门在vue中实现集中式状态（数据）管理的一个vue插件，对vue应用中多个组件的
        共享状态进行集中式的管理（读/写），也是一种组件间通讯的方式，且适用于任意组件间通信
    2:github: https://github.com/vuejs/vuex
    3:什么时候使用vuex
        1:多个组件间依赖于同一个状态
        2：来自不同组件的行为需要变更同一状态
        我们使用的是vue2，所以使用vuex3版本，他们的版本号是差一位的：npm i vuex@3
    4:搭建vuex环境：
        1：创建文件：src/store/index.js
            import Vue from 'vue'
            import Vuex from 'vuex'
            Vue.use(Vuex);
            const actions={}
            const mutations={}
            const state={}
            export default new Vuex.Store({
                actions,mutations,state
            })
        2:在main.js中创建vm时传入store配置项
            ...
            import store from './store'
            ...
            new Vue({
                el:'#root'
                store,
                render:h=>h(App),
            })
    5：基本使用
        1：初始化数据：配置actions,mutations,state,操作文件store.js
        import Vue form 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
        const actions={
            jia(context,value){
               context.commit("JIA",value)     
            }
        }
        const mutaitons={
            JIA(state,value){
                state.sum+=value;
            }
        }
        const state={
            sum:0
        }
        export default new Vuex.Store({
            actions,mutations,state
        })
        组件中读取vuex中的数据：$store.state.sum
        组件中修改vuex中的数据：$store.dispatch("action中的方法名"，数据)，或：$store.commit("mutaitons中的额方法名",数据)
        备注：若没有网络请求或其他业务逻辑，组件也可以越过actions，即不写dispatch,直接写commit

## getters的使用
    1：概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
    2：在store.js中追缴getters配置
        ...
            const getters={
                bigSum(state){
                    return state.sum*10;
                }
            }
            export default new Vuex.Store({
                ....getters, 
            })
        ...
    3：组件中读取数据：{{$store.getters.bigSum}}

## 4个map方法的使用
    1：mapState方法：用于帮助我们映射state中的数据为计算属性
    computed:{
        ...mapState({sum:'sum',school:"school"})//对象写法
        ...mapState(["sum","school","subject"])//数组写法
    }
    2：mapGatters方法：用于帮助我们映射Getters中的数据为计算属性
    computed:{
        ...mapGetters({"bigSum":"bigSum"});//对象写法
        ...mapGetters(["bigSum"]);//数组写法
    }
    3：mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(XXX)的函数
    methods:{
        //靠mapActions生成，incrementOdd,incrementWait(对象形式)
        ...mapActions({incrementOdd:"jia",incrementWait:"jiaWait"})
        //靠mapActions生成，incrementOdd,incrementWait(数组形式)
        ...mapActions(["jia","jiaWait"]);
    }
    4：mapMutations方法：用于帮助我们生成与mutation对话的方法，即包含$store.commit(XXX)
    emthods:{
        //靠mapMutations生成，incrementOdd,incrementWait(对象形式)
        ...mapMutations({jia:"ADD",jian:"JIAN"})
        //靠mapMutations生成，incrementOdd,incrementWait(数组形式)
        ...mapMutations(["ADD","JIAN"]); 
    }

## 模块化+命名空间
    1：目的：当代码更好维护，让多种数据分类更加明确
    2：修改store.js
        const countAbout={
            namespaced:true,
            state:{},
            mutations:{},
            actions:{},
            getters:{},
        }
        const personAbout={
            namespaced:true,
            state:{},
            mutations:{},
            actions:{},
            getters:{},
        }
        const store={
            countAbout,personAbout
        }
    3：开启命名空间后，组件中读取state数据
        1：方式一：自己直接读取
            this.$store.state.personAbout.list
        2：方式二：借助mapStatus读取
            ...mapState('countAbout',['sum','school','subject'])
    4：开启命名空间后，组件中读取getter数据
        1：方式一：自己直接读取
            this.$store.getters['personAbout/firstPsersonName']
        2：方式二：借助mapGetters读取
            ...mapgetters('countAbout',['bigSum'])         
    5：开启命名空间后，组件中调用dispatch
        1：方式一：自己直接调用
            this.$store.dispatch('personAbout/addPersonWang',person)
        2：方式二：借助mapActions调用
            ...mapActions('countAbout',{"incremmentOdd":"jiaOdd"}})  
    6：开启命名空间后，组件中调用commit
        1：方式一：自己直接调用
            this.$store.commit('personAbout/addPersonWang',person)
        2：方式二：借助mapMutations调用
            ...mapMutations('countAbout',{"incremmentOdd":"jiaOdd"}})

## vue-router
    1：路由就是一组key-value的对应关系 route
    2：多个路由，需要经过路由器的管理 router
    3:路由适用于SPA:single page web application:单页面应用
    vue-router:vue的一个插件库，专门用来实现spa应用 
    spa:单页web应用，整个应用只有一个完整的页面
    点击页面中的导航链接，不会刷新页面，只会做页面的局部更新
    数据需要通过ajax请求获取
    route:一个路由就是一组映射关系k/v
    key为路径，value可能是function或者component
    路由分类：
        后端路由：value是function,用于处理客户端提交的请求（node js）
        工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
        前端路由：value是component,用于展示页面内容
        工作过程：当浏览器的路径改变时，对应的组件就会显示
        
    1:基本使用：
        1：安装vue-router:npm i vue-router@3 
        2：应用插件：Vue.use(VueRouter),注意先引入VueRouter
        3：编写router配置项
            创建router文件夹，新建index.js
            import VueRouter from 'vue-router'
            import About from './component/About.vue'
            import Home from './component/Home.vue'
            const router =new VueRouter({
                routers:[{
                    path:'/about',
                    component:About,
                },{
                    path:'/home',
                    component:Home,
                }]
            });
            export default router
        4：实现切换：（active-class可以配置高亮）
            <router-link active-class="active" to="/about">About</router-link>
        5：指定展示位置
            <router-view></router-view>

## 几个注意点
    1：路由组件通常放在pages文件夹，一般组件通常放在components文件夹
    2：通过切换，隐藏了的路由组件，默认是被销毁的，需要的时候再去挂载
    3：每个组件都有自己的$route属性，里面存储着自己的路由信息
    4：整个应用只有一个router,可以通过组件的$router属性获取
    
## 多级路由（嵌套路由）
    1：配置路由规则：使用children配置项
        routes:[
            {
                path:'/home',
                component:Home
            },{
                path:'/about',
                component:About,
                children:[{
                    path:'news',
                    componemt:News
                },{
                    path:'message',
                    component:Message
                }]
            }
        ]
    2:调转要写完整路径：
        <router-link to="/home/news">News</router-link>

## 路由的query参数
    1：传递参数
    <!-- 跳转路由并携带query参数，to的字符串写法     -->
    <!--      <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>-->
    <!-- 跳转路由并携带query参数，to的对象写法       -->
      <router-link :to="{
        path:'/home/message/detail',
        query:{
          id:item.id,
          title:item.title,
        },
      }">{{item.title}}</router-link>
    2：接收参数：
        $route.query.id
        $route.query.title
    
## 命名路由
    1：作用：可以简化路由的跳转
    2：如何使用：
        1：给路由命名：
            {   
                name:'guanyu',
                path:'/about',
                component:About
            }
        2：简化跳转
            简化前：需要写完整的路径
            <router-link to="/home/text/vues">跳转</router-link>
            简化后：直接通过名字跳转
            <router-link :to={name:'guanyu'}>跳转</router-link>
            简化配合参数传递
            <router-link :to=
                {
                    name:'guanyu'
                    query:{
                        id:xxx,
                        title:xxx
                    }
                }
            >跳转</router-link>

## 路由的params参数
    1：配置路由，声明接收params参数
        {
            path:'/home',
            component:Home,
            children:[
                {
                    name:'xxx',
                    componemt:Detail,
                    path:'detail/:id/:title'
                }
            ]
        }
    2:传递参数
        <!-- 跳转路由并携带params参数，to的字符串写法     -->
        <router-link :to="`/home/message/detail/${item.id}/${item.title}`">路由携带param参数--{{item.title}}</router-link>
        <!-- 跳转路由并携带params参数，to的对象写法     -->
        <router-link :to="{
            //注意这里只能写name,不能写path
            name:'xiangqing',
            params:{
                id:item.id,
                title:item.title
            }
        }">路由携带param参数--{{item.title}}</router-link>
    特别注意：路由携带params参数时，若使用to的 对象写法，则不能使用path配置项，必须使用name配置项
    
## 路由的props配置
    作用:让路由组件更加方便的收到参数
    {
        name:'xiangqiang',
        path:'detail/:id',
        component:Detail,
        //第一种写法，props值为对象：所有的k,v都会通过props属性传递给Detail
            props:{a:100,b:'xx'}
        //第二种写法，props为true，params所有的k,v都会通过props属性传递给Detail
            props:true
        //第三种写法，props为函数，所有的k,v都会通过props属性传递给Detail
            props($route){
                return{ a:100,b:$route.query.id,c:$route.params.title}
            }
    }

## <router-link>的replace属性
    1：作用：控制路由跳转时，浏览器历史记录的模式
    2：浏览去的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前历史记录
        路由跳转的时候默认为push
    3：如何开启replace模式：<router-link replace ...></router-link>
    
## 编程式路由导航
    1：作用：不借助<router-link>实现路由跳转，更加灵活
    2：具体编码：
        this.$router.push({
            name:'xiangqing',
            params:{
                id:xxx,
                title:xxx,
            }
        })
        this.$router.replace({
            name:'xiangqing',
            params:{
                id:xxx,
                title:xxx,
            }
        })
        this.$router.forward();//前进
        this.$router.back();//后退
        this.$router.go(num);//前进（正数），后退（负数）
    
    切换路由时报Uncaught (in promise)
    行 npm i vue-router@3.0 -S 即可
    import Router from 'vue-router'
    const originalPush = Router.prototype.push
    Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
    }

## 缓存路由组件
    1：作用：让不展示的路由组件保持挂载，不被销毁
    2：具体编码：
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>

## 两个新的生命周期钩子
    1：作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
    2：具体名字：
        1：activted 路由组件被激活时触发
        2：deactivted 路由组件失活时触发
## 路由守卫
    1：作用：对路由进行权限控制
    2：分类：全局守卫，独享守卫，组件内守卫
    3：全局守卫：
        1：全局前置守卫：初始化+每次路由切换前调用
        router.beforeEach(function(to,from,next){
            //权限判断
        })
        2：全局后置守卫：初始化+每次路由切换后调用
        router.afterEach(function(to,from){
            //修改标题
        })

## 独享路由守卫
    1：beforeEnter(to,from,next){
        ...
    }
    2：注意：独享路由守卫只有前置没有后置，可以和全局后置路由守卫配合使用
    
## 组件内守卫
    1：进入守卫：通过路由规则，进入该组件时被调用
        beforeRouterEnter(to,from,next){}
    2：离开守卫：通过路由规则，离开组件时被调用
        beforeRouterLeave(to,from,enter){}

## 44 myserver下文件夹demo为node server
    1:起初创建一个空的demo文件，在命令行窗口打开，运行 npm init 作为一个node项目
    2: 接着运行 npm i express 使用该组件作为程序服务器发布组件
    3：写好 server.js作为node服务器端处理的代码，完毕之后demo文件夹下打开cmd运行node server
    4：自此node 后端服务启动，然后将编译好的前端代码放入static文件夹下
    5：vue的hash模式对于访问路由跳转之后重新刷新页面表示请求资源，不会报错404，因为定位到了根路径，其后不作为url传递到后端
    6：vue的history模式则不同，其看上去更美观但是其路径会传递到后端，刷新页面时，倒是服务器返回404
    7：关于history模式导致的刷新问题可以借助在服务器端执行新的插件：npm install --save connect-history-api-fallback
    8：var history = require('connect-history-api-fallback');
    9：      var app = connect()
                .use(history())
                .listen(3000);
    10:当然也可以使用nginx来作为中间代理，区分哪些是后端路由，哪些是前端路由
    
## 路由器的两种工作模式
    1：对于一个url来说，什么是hash值，--》#机器后面的内容就是hash值
    2：hash值不会包含在http请求中，即：hash值不会传递给服务器
    3：hash模式：
        1：地址中永远带着#号，不美观
        2：若以后将地址通过第三方手机app分享，若app校验严格，则会被标记为不合法
        3：兼容性较好
    4：history模式：
        1：地址干净，美观
        2：兼容性和hash相比略差
        3：应用部署上线时，需要后端人员支持，解决刷新页面服务器404的问题

## VUE UI 组件库
    1：移动端常用ui组件库
        1：Vant:https://youzan.github.io/vant
        2:Cube UI https://didi.github.io/cube-ui
        3:Mint UI http://mint-ui.github.io
        4:Nut UI
    2: PC端常用UI组件库
        1：Element UI https://element.eleme.cn
        2: IView UI https://www.iview.com
    
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


    


