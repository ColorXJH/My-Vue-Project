<template>
  <div class="student">
    <h2>名称{{name}}</h2>
    <h2>性别{{sex}}</h2>
    <h2>年龄{{age}}</h2>
    <button @click="postName">点我传递名称</button>
    <button @click="regist">点我注册事件</button>
    <button @click="death">销毁当前student的实例对象vc</button>
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
//1：引入混合
//import {datas, mixin} from '../mixin'
export default {
  name:'Student',
  data(){
    return {
      msg:"你好，欢迎",
      name:"张三123",
      sex:"男123",
      age:18,
      //props上的优先被接收，放到vc上，然后才是data上的
      //myAge:this.age,
    }
  },
  props:['handleTest'],
  methods:{
    postName(){
      this.handleTest(this.name);
    },
    regist(){
      this.$emit('demoss')
    },
    death(){
      this.$destroy();//销毁了当前实例对象，销毁后所有实例对象的自定义事件都失效了
    },
  },
  //2:配置混合
  //混合优先级比原来代码优先级低，但是如果混入了生命周期函数，则不以任何为准，都要
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
<!--

-->

<style scoped>
.student{
  background-color: skyblue;
  padding: 5px;
}

</style>
