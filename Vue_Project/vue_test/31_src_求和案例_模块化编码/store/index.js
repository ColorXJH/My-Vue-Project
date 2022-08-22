//该文件用于创建vuex中最为核心的store
//引入Vuex
import Vue from "vue";
import Vuex from 'vuex';
//使用vuex插件
Vue.use(Vuex);
import countOptions from './count'
import personOptions from './person'







//创建store
const store=new Vuex.Store({
    modules:{
        //a:countOptions,
        //b:personOptions,
        //简写形式
        countOptions,personOptions,
    },
});

//导出，暴露store,当然也可以将export default  替换掉const store=  ，即创建并导出store
export default store;