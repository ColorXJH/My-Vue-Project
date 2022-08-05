<template>
  <div>
    <h2>名称{{name}}</h2>
    <h2>性别{{sex}}</h2>
    <h2>年龄{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改年龄</button>
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
export default {
  name:'Student',
  data(){
    return {
      msg:"你好，欢迎",
      //props上的优先被接收，放到vc上，然后才是data上的
      myAge:this.age,
    }
  },
  methods:{
    //属性接收到的尽量不要去修改
    updateAge(){
      this.myAge++;
    }
  },
  //props:["name","sex","age"]//简单接收

  //接收的同时对数据类型进行限制
  /*props:{
    name:String,
    age:Number,
    sex:String,
  }*/

  //接收属性，类型限制，知否必须，附加默认值
  props:{
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
  }
}

</script>

<style>
  .demo{
    background-color: pink;
  }

</style>
