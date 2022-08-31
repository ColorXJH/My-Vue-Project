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
                后期也可以返回一个promise实例，但是需要Suspense和异步组件配合使用
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
        vue2.x的响应式
            实现原理：
                对象类型：通过Object.definePerpoty()对属性的读取，修改进行拦截（数据劫持）
                数组类型：通过重写更新数组的一系列方法来实现拦截，对数组的变更方法进行了包裹
                    Object.defineProperty("data",{
                        get(){},
                        set(){},
                    })
            存在问题：
                新增属性，删除属性，界面不会更新
                直接通过下标修改数组，界面不会自动更新
        Vue3的响应式
            实现原理：
                通过Proxy代理：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加，属性的删除等
                通过Reflect反射：对被代理的对象的属性进行操作
                MDN文档中描述了Proxy与Reflect
                    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
                    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
                let personB={
                    name:'李四',
                    age:28,
                }
                //a:代理对象， : 配置信息
                const px=new Proxy(personB,{
                    //读取
                    get(target,propName){
                        //console.log("有人读取了px身上的%s属性",propName),
                        console.log(`有人读取了px身上的${propName}属性`,"@@")
                        //注意：propName是形参，使用target.propName相当于将propName当成字符串解析了
                        //return target[propName];
                        return Reflect.get(target,propName)
                    },
                    //修改，增加
                    set(target,propName,val){
                            console.log(`有人修改了了px身上的${propName}属性,值为${val}`)
                            //target[propName]=val;
                            Reflect.set(target,propName,val)
                    },
                    //删除
                    deleteProperty(target, propName) {
                        console.log(`有人删除了px身上的${propName}属性}`)
                        //return delete target[propName];
                        return Reflect.deleteProperty(target,propName)
                    }
                })
    5:reactive对比ref
        1:从定义数据角度对比：
            ref用来定义：基本数据类型
            reactive用来定义：对象（或数组）类型数据
            备注：ref也可以用来定义对象（或数组）类型数据，它北部会自动通过reactive函数转为代理对象
        2:从原理角度对比：
            ref通过Object.defineProperty的get/set来实现响应式（数据劫持）
            reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
        3：从使用角度对比：
            ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value
            reactive定义的数据：操作数据与读写数据，均不需要。value
       
    6:setup的两个注意点
        setup执行的时机：
            在beforeCreate之前执行一次，this是undefined
        setup的参数
            props:值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
            context: 上下文对象
                attrs:值为对象，包含：组件外部传递过来，但是没有在props配置中声明的属性，相当于this.$attrs
                slots:收到的插槽内容，相当于this.$slots
                emit：分发自定义事件的函数：相当于this.$emit
    
    7:计算属性与监视
        1：computed函数
            与vue2中的computed配置功能一致
            写法：
                import {computed} from 'vue'
                setup(){
                    ...
                    //计算属性-简写
                    let fullName=computed(()=>{
                            return person.firstName-person.lastName
                        }
                    )
                    //计算属性-完整
                    let fullName=computed(()=>{
                        get(){
                            retrun person.firstName-person.lastName
                        },
                        set(val){
                            const nameArr=val.split("-")
                            person.firstName=nameArr[0];
                            person.lastName=nameArr[1];
                        }
                    })
                }
        2:watch函数：
            与vue2中watch配置功能一致
            两个小坑：
                监视reactive定义的响应式数据时，oldValue,无法正确获取，强制开启了深度监视（deep配置失效）
                监视reactive定义的响应式数据中的某个属性时，deep配置有效

            //情况一：监视ref定义的响应式数据
            
            //情况二：监视多个ref定义的响应式数据
            
            //情况三：监视reactive定义的响应式数据
                     若watch监视的是reactive定义的响应式数据，则无法正确获取oldValue，并强制开启深度监视
            
            //情况四：监视reactive定义的响应式数据中的某个属性
            
            //情况五：监视reactive定义的响应式数据中的某些属性
    
        3：watchEffect函数
            watch的套路是：即要指明监视的属性，也要指明监视的回调
            watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性
            watchEffect有点像computed：
                但是computed注重的是计算出来的值（回调函数的返回值），所以必须要写返回值
                而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值
            //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回到
            watchEffect(()=>{
                const x1=sum.value
                const x2=person.age
                console.log("watchEffect配置的回调执行了")
            })
        
## vue3生命周期
    相较于vue2vue3改变了最后一对生命周期
        由beforeDestory/destoryed==>beforeUnmount/Unmount

## 自定义hook函数
    1:什么是hook?-->本质是一个函数，把setup函数中使用的composition API 进行了封装
    2:类似于vue2中的mixin
    3:自定义hook的优势：复用代码，让setup中的逻辑更加易懂

## toRef
    作用：创建一个ref对象，其value值指向另一个对象中的某个属性
    语法：const name=toRef(person,'name')
    应用：要将响应式对象中的某个属性单独提供给外部使用时
    扩展：toRefs与toRef功能一致，但是可以批量创建多个ref对象，语法：toRefs(person)
    
# 其他composition API 
    1:shallowReactive与shallowRef
        shallowReactive:只处理对象最外层属性的响应式（浅响应式）
        shallowRef:只处理基本数据类型的响应式，不进行对象的响应式处理
        什么时候使用：
            1：如果有一个对象数据，结构比较深，但变化时只是外层属性变化==》shallowReactive
            2：如果有一个对象数据，后续功能不会修改改对象中的属性，而是生成新的对象来替换=》shallowRef
    2：readonly与shallowReadonly
        readonly:让一个响应式的数据变为只读(深只读)
        shallowReadonly:让一个响应式的数据变为只读（浅只读）
        应用场景：不希望数据被修改时（该数据有可能是别人传递过来的）
    3：toRow与markRow
        toRow
            作用：将一个由reactive生成的响应式对象转为普通对象
            使用场景：用于读取响应式对象对应的普通对象，对于这个普通对象的所有操作，不会引起界面的更新
        markRow
            作用：标记一个对象，使其永远不会再变成一个响应式对象
            应用场景：
                有些值不应该被设置为响应式的，例如复杂的第三方类库
                当渲染具有不可变数据源的大列表时，跳过响应式转换可提高性能
    4:customRef
        作用：创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显示控制
        实现防抖效果：
            <template>
                <input type="text" v-model="keyword"/>
                <h3>{{keyword}}</h3>
            </template>
            <script>
                import {ref,customRef} from 'vue'
                export default{
                    name:'Demo',
                    setup(){
                        //自定义的ref
                        function myRef(value){
                        let timer
                        console.log("----myRef----",value);
                        return customRef((track,trigger)=>{
                            return {
                                get(){
                                    console.log(`有人从myRef中读取数据了，我把${value}返回给它了`)
                                    track();//通知vue追踪value数据的变化
                                    return value
                                },
                                set(val){
                                    console.log(`有人把myRef中数据修改为了：${val}返回给它了`)
                                    clearTimeout(timer)
                                    timer=setTimeout(()=>{
                                    //将新的值赋值给形参（get返回值)
                                    value=val;
                                    trigger();//通知vue去重新解析模板
                                    },500)
                                },
                            }
                        })
                    }
                }
            </script>
    5：provide与inject
        作用：实现祖 孙 组件之间通信
        套路：父组件有一个provide选项来提供数据，后代组件有一个inject选项来使用这些数据
        具体写法：
        1：祖组件中：
            setup(){
                let car=reactive({name:"奔驰",price:"40W"})
                provide('car',car)
            }
        2:孙组件中；
            setup(){
                let car=inject("car")
            }
    6：响应式数据的判断
        isRef:检查一个值是否为一个ref对象
        isReactive:检查一个对象是否由reactive创建的响应式的代理
        isReadonly:检查一个对象是否由readonly创建的只读代理
        isProxy:检查一个对象是否由reactive或者readonly方法创建的代理

## composition API的优势
    1:options API存在的问题
        使用传统options API中，新增或者修改一个需求，就需要分别再data,methods,computed里面修改
    2：composition API的优势
        我们可以更加优雅的组织我们的代码，函数，让相关功能的代码更加有序的组织在一起
##新的组件
    1：Fragment
        在vue2中：组件必须有一个根标签
        在vue3中，组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中
        好处：减少标签层级，减少内存占用
    2：Teleport
        什么是Teleport:---Teleport是一种能够将我们的组件html结构移动到指定位置的技术
        <teleport to="移动位置">
             <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是一个弹窗</h3>
                    <button @click="isShow=false">关闭弹窗</button>
                </div>
            </div>   
        </teleport>
    3：Suspense
        等待异步组件时渲染一些额外的内容，让用户有更好的体验
        等待步骤
            异步组件引入
                import {defineAsyncComponent} from 'vue'
                const child=defineAsyncComponent(()=>{
                    import("./components/child.vue")
                })
            使用Suspense包裹组件，并配置好default与fallback
                <template>  
                    <div class="app">
                        <h3>我是app组件</h3>
                        <Suspense>
                            <template v-slot:default><Child/></template>
                            <template v-slot:fallback><h3>加载中...</h3></template>    
                        </Suspense>
                    </div>
                </template>
        
##其他
    1：全局API的转移
        vue2有许多全局api和配置
            例如注册全局组件，注册全局指令等：
            //组测全局组件
            Vue.component('MyButton',{
                data:()=>{
                    count:0,    
                }
                template:'<button @click="count++">click {{count}}</button>'
            })
            //组测全局指令
            Vue.directive('focus',{
                inserted: el=>el.focus()
            })
        vue3中对这些api做出了调整
            将全局api，即Vue.xxx调整到应用实例（app）上
                vue2                                    vue3
            Vue.config.xxx                          app.config.xxx
            Vue.config.productionTip                移除
            Vue.component                           app.component
            Vue.directive                           app.directive
            Vue.mixin                               app.mixin       
            Vue.use                                 app.use
            Vue.prototype                           app.config.globalProperties
    2:其他改变
        data选项应该始终被声明为一个函数
        过度类名的更改
            vue2.x
                .v-enter,
                .v-leave-to{
                    opacity:0;
                }
                .v-leave,
                .v-enter-to{
                    opacity:1
                }
            vue3.x
                .v-enter-from,
                .v-leave-to{
                    opacity:0
                }
                .-leave-from,
                .v-enter-to{
                    opacity:1
                }
        移除keyCode作为v-on的修饰符，同时也不再支持config.keyCodes
        移除v-on.native修饰符
            父组件中绑定事件
                <my-component
                    v-on:close="handleComponentEvent"
                    v-on:click="handleNativeClickEvent"
                >
                </my-component>
            子组件中声明自定义事件
                <script>
                     export default{
                            emits:["close"]//接收自定义事件，没声明就是原生事件
                        }   
                </script>
        移除过滤器filter
            过滤器虽然看起来很方便,但是他需要一个自定义语法，打破大括号内表达式“只是javascript”的假设
            这不仅有学习成本，还有实现成本，建议使用方法调用或计算属性去替代
        ...


