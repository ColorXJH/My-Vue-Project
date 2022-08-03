//1：引入组件

//import Vue from "vue";
//方法2：重新引入Vue
import Vue from "vue/dist/vue.esm.js"
import App from "./App";

Vue.config.productionTip = false

//2:创建vue
new Vue({
    el:'#root',
    //使用 template属性，需要引入带编译器的完整版的vue.esm.js
    template:`<App></App>`,
    components:{
        App
    },
    //方法1：如下
    //render: h => h(App),
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
