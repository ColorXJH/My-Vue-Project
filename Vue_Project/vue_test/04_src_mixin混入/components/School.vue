<template>
  <div>
    <h2 @click="showName">学校名称{{name}}</h2>
    <h2>学校地址{{address}}</h2>
  </div>
</template>

<script>
/*  import Vue from 'vue'
  export default Vue.extend({
       name:'MySchool',
       data(){
         return {
           name:"广德中学",
           address:"安徽广德"
         }
       }
  })*/
//引入混合（mixin）
//import {datas, mixin} from '../mixin'
export default {
  name:'School',
  data(){
    return {
      name:"广德中学",
      address:"安徽广德",
      //props上的优先被接收，放到vc上，然后才是data上的
      //myAge:this.age,
    }
  },
  //mixins:[mixin,datas],
  //props:["name","sex","age"]//简单接收

  //接收的同时对数据类型进行限制
  /*props:{
    name:String,
    age:Number,
    sex:String,
  }*/

  //接收属性，类型限制，知否必须，附加默认值
  /*props:{
    name:{
      type:String,
      required:true,

    },
    age:{
      type:Number,
      default:99,
    },
    sex:{
      type:String,
      required:true
    },
  }*/
}

</script>

<style>
  .demo{
    background-color: orange;
  }

</style>
