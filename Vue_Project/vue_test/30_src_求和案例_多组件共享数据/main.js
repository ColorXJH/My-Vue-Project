import Vue from 'vue';
import App from './App';

//引入vuex
//import Vuex from 'vuex';
//引入store
//import store from './store/index.js'
//默认拿index.js
import store from './store'
Vue.config.productionTip=false;
//使用该插件
//Vue.use(Vuex);
//注意：vue的脚手架把所有的import扫描后，按照顺序提升到页面最顶部，所以import之间的设置其实是没有效果的，所以把use放到store里面写

 const vm=new Vue({
     el:"#root",
     render: h=>h(App),
     //只要你使用了vuex插件，就可以再vm/vc (组件实例对象)身上设置这个store属性，并且可以查到$store,所以需要我们创建store
     //有两种方式1：在src下新建vuex,里面创建store.js，  2：在src下创建store，在里面新建index.js 这两种创建方式都可以
     //store:store,
        //简写形式
     store,
     beforeCreate() {
         Vue.prototype.$bus=this
     }
 });
console.log(vm);