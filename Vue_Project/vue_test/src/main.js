import Vue from 'vue';
import App from './App';

//引入element ui的组件库
//import ElementUI from 'element-ui';
//引入element ui的全部样式
//import 'element-ui/lib/theme-chalk/index.css';

//按需引入（样式自动分析，自动引入，我们只关注按需引入的组件，前提是按照官网配置）
import { Button, Row,DatePicker } from 'element-ui';
Vue.config.productionTip=false;

//应用element ui
//Vue.use(ElementUI)

//按需注册（注册全局组件）
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

new Vue({
     el:"#root",
     render: h=>h(App),
 });