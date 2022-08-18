//该文件用于创建vuex中最为核心的store
//引入Vuex
import Vue from "vue";
import Vuex from 'vuex';
//使用vuex插件
Vue.use(Vuex);
//准备actions,用于响应组件中的动作
const actions={
    'add':function(context,value){
        console.log("actions --add被调用了",context,value);
        context.commit("ADD",value);

    },
    jian(context,value){
        console.log("actions --jian被调用了",context,value);
        context.commit("JIAN",value);
    },
    addOdd(context,value){
        if(context.state.sum%2){
            context.commit("ADD",value);
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit("ADD",value);
        },500)

    },
}
//准备mutations,用于操作数据（state）
const mutations={
    ADD(state,value){
        console.log("mutations --ADD被调用了",state,value);
        state.sum+=value;
    },
    JIAN(state,value){
        console.log("mutations --JIAN被调用了",state,value);
        state.sum-=value;
    }
}
//准备state,用于存储数据
const state={
    sum:0,//当前和
}

//创建store
const store=new Vuex.Store({
    /*actions:actions,
    mutations:mutations,
    state:state*/
    //触发简写形式
    actions,mutations,state,
});

//导出，暴露store,当然也可以将export default  替换掉const store=  ，即创建并导出store
export default store;