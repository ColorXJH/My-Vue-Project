
//引入vue
import Vue from 'vue'
//引入app带头大哥组件
import App from './App'
//分别暴露引入
import {mixin,datas} from './mixin'
//关闭vue的生产提示
Vue.config.productionTip=false;
//全局混入
//可以把多个组件公用的配置提取成一个混入对象
Vue.mixin(datas);
Vue.mixin(mixin);
//创建vm
new Vue({
    el:'#root',
    render:h=>h(App)
});
