import Vue from 'vue';
import App from './App';
Vue.config.productionTip=false;

//1：在window上能全部看到
//window.x=100;

//2:在Vue原型上也能被所有得vc包括vm看到，因为vue有一个原型链关系
//Vue.prototype.y=200;

//3:但是上方都不能实现在本身上调用vue原型上的额绑定事件，解绑方法，所有就需要创造一个vc实例对象并将他放到vue原型上，这样
//y属性才能即被所有人看见，而且它自身还能触发事件，绑定事件等。。。（vc可以调用$on,$emit,$off...）
//const demo=Vue.extend({});
//const d=new demo();
//Vue.prototype.y=d;

//4：其实3已经弄出来一个傀儡了，按照功能来说已经实现了，但是下面是更好的方法：
    //利用beforeCreate声明周期函数,不要使用const vm=new Vue(Vue.prototype.x=vm)，因为此时vm还没创建，怎么返回
new Vue({
    //el:"#root",
    render:h=>h(App),
    beforeCreate() {
        //this就是vm实例
        //Vue.prototype.x=this;//安装全局事件总线，一般不用x,用$bus
        Vue.prototype.$bus=this;
    }
}).$mount("#root");
