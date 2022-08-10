<template>
  <div class="school">
    <h2 >学校名称:{{name}}</h2>
    <h2 >学校地址:{{address}}</h2>
    <button @click="sendSchoolName">点我传递学校名（自定义事件）</button>
    <button @click="unbind">解绑自定义事件</button>
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
      name:"广德123",
      address:"安徽123",
      //props上的优先被接收，放到vc上，然后才是data上的
      //myAge:this.age,
    }
  },
  methods:{
    testPrototype(){
      this.hello();
    },
    sendSchoolName(){
      //触发绑定在组件上的自定义事件
      console.log(this);
      //触发school组件实例身上的colorxjh事件
      this.$emit("colorxjh",this.name,666,777,999);
      this.$emit("demos",this.name,666,777,999);


    },
    unbind(){
      //解绑自定义事件，解绑一个自定义事件
      //this.$off('colorxjh');
      //解绑多个事件
      this.$off(['colorxjh','demos']);
      //解绑所有的自身的自定义事件，别的组件的不行
      this.$off();
    },
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

<style scoped>
  .school{
    background-color: orange;
    padding: 5px;
  }

</style>
