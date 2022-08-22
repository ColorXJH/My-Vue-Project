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
    demo1(context,value){
        console.log("actions --demo1被调用了",context,value);
        if(context.state.sum%2){
            context.commit("ADD",value);
            //如果这样写，也能实现效果，但是开发者工具就失效了，以为dev-tool监视的是mutation，
            //context.state.sum+=value;
        }
    },
    addOdd(context,value){
        console.log("actions --addOdd被调用了",context,value);
        context.dispatch("demo1",value)
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
    school:"广德中学",
    subject:'前端',
}

/*用于处理复杂逻辑，加工state中的数据*/
const getters={
    bigSum(state){
        return state.sum*10;
    }
}

//创建store
const store=new Vuex.Store({
    /*actions:actions,
    mutations:mutations,
    state:state*/
    //触发简写形式
    actions,mutations,state,getters,
});

//导出，暴露store,当然也可以将export default  替换掉const store=  ，即创建并导出store
export default store;