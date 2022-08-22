//人员管理相关的配置
import axios from "axios";
import {nanoid} from "nanoid";
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit("ADD_PERSON",value)
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                (response)=>{
                    context.commit("ADD_PERSON",{id:nanoid(),name:response.data})
                },
                (error)=>{
                    alert(error.message)
                }

            )
        },
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log("mutations --ADD_PERSON被调用了",state,value);
            state.personList.unshift(value)
        },
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name;
        }
    },
    state:{
        personList:[{id:"001",name:"张三"},{id:"002",name:"李四"}]
    },
};
