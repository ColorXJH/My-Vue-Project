import Vue from 'vue';
import App from './App';
//引入老版本ajax库（该库作为插件使用）
import vueResource from 'vue-resource';
Vue.config.productionTip=false;
//使用插件，使用之后，vm vc上多了一个东西:$http
Vue.use(vueResource);
 new Vue({
     el:"#root",
     render: h=>h(App),
     beforeCreate() {
         Vue.prototype.$bus=this
     }
 });
