import Vue from 'vue';
import App from './App';
//引入vue-router
import VueRouter from "vue-router";
import store from "@/store";
//引入路由器
import router from "@/router";
//完整版如下,上方是简写
//import router from "./router/index.js";
Vue.config.productionTip=false;
//应用插件
Vue.use(VueRouter);

new Vue({
     el:"#root",
     render: h=>h(App),
     store,
     router:router,
 });