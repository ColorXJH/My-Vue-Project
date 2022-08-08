
//引入vue
import Vue from 'vue'
//引入app带头大哥组件
import App from './App'
//引入插件
import plugins from './plugins';
//使用插件
Vue.use(plugins,1,2,3);
//关闭vue的生产提示
Vue.config.productionTip=false;
window.name="xjh";
//创建vm
new Vue({
    el:'#root',
    render:h=>h(App)
});
