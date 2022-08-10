
//引入vue
import Vue from 'vue'
//引入app带头大哥组件
import App from './App'
//关闭vue的生产提示
Vue.config.productionTip=false;
window.name="xjh";
//创建vm
new Vue({
    el:'#root',
    render:h=>h(App),
    mounted() {
        /*setTimeout(()=>{
            this.$destroy();//他自己及其下属的所有自定义事件都销毁了
        },4000);*/
    }
});
