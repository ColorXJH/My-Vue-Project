//求和功能相关的配置
export  default {
    //注意这里需要i开启，不然找不到
    namespaced:true,
    actions:{
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
    },
    mutations:{
        ADD(state,value){
            console.log("mutations --ADD被调用了",state,value);
            state.sum+=value;
        },
        JIAN(state,value){
            console.log("mutations --JIAN被调用了",state,value);
            state.sum-=value;
        },
    },
    getters:{
        bigSum(state){
            return state.sum*10;
        }
    },
    state:{
        sum:0,//当前和
        school:"广德中学",
        subject:'前端',
    },
};