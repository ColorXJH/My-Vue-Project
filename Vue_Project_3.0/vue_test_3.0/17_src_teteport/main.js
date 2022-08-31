//引入的不再是Vue的构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
//创建实例对象，类似于之前vue2中的vm,但是这里更轻量级,然后挂载
const app=createApp(App);

app.mount('#app')
console.log(app);
/*
setTimeout(()=>{
    app.unmount('#app');
},1000)*/
