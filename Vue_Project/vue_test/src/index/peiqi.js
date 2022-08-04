//1：引入组件

import Vue from "vue";
//方法2：重新引入Vue
//import Vue from "vue/dist/vue.esm.js"
import App from "../App";

Vue.config.productionTip = false

//2:创建vue
new Vue({
    el:'#root',
    //使用 template属性，需要引入带编译器的完整版的vue.esm.js
    /*template:`<App></App>`,
    components:{
        App
    },*/
    //方法1：如下
    render: h => h(App),
    //render函数需要有返回值,正常映入的vue只引入到vue文件，根据模块化，到package.json中查找到module的名字找到对应的vue.js
    //这种js没有模板编译器，需要借助render函数来渲染模板，该函数接受一个参数函数，用于创建元素（元素标签，元素内容）
    /*render(createElement){
        console.log(typeof createElement);
        return createElement('h2','你好啊');

    },*/
    //上面的函数等价于==》  render:h=>h(APP)
    // (h代表createElement 函数，该参数在render箭头函数的函数体里面执行了，内部的App是createElement函数的第一个参数，代表组件变量，
    // 如果是字符串表示创建网页中的某个元素)


    /*
    * 关于不同版本的vue：
    *   1：vue.js/vue.runtime.js的区别：
    *       1：vue.js是完整版的，包含核心功能和模板解析器
    *       2：vue.runtime.js是运行版的vue,只包含核心功能，没有模板解析器
    *   2：因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的
    *       createElement函数去指定具体内容
    *    xxx.esm 其中esm 表示es module ,如果你使用了es6的模块化，就引入这个版本
    *    vue在打包的时候使用了webpack,package.json中的devDependencies中的
    *    "vue-template-compiler": "^2.6.14" 专门处理.vue文件中的模板<template></template>
    *     vm中没有模板解析器了，所以不能写template配置项，最后都是统一打包成静态资源，html,css,js这种浏览器能识别的
    *     模块化有两种，一种是es6的一种是带common的
    * */
})


//修改webpack.conf.js文件中vue所指向的js；
/*
configureWebpack: {
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}*/

//方法4:在webpack.conf.js 中修改如下配置：
/*
module.exports = {
    runtimeCompiler: true,
    ......

*/
