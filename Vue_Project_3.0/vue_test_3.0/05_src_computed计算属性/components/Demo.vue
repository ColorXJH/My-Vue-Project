<template>
  <h1>一个人的信息</h1>
  姓<input type="text" v-model="person.firstName"><br/>
  名<input type="text" v-model="person.lastName"><br/>
  全名：<input type="text" v-model="person.fullName"><br/>
  全称：{{person.fullName}}<br/>
  <slot name="color"></slot><br/>
  <button @click="testClick">测试触发一下demo组件的hello事件</button>

</template>
<script>
import {reactive,computed} from 'vue'
    export default {
      name:"Demo",
      props:['msg','school'],
      //接收绑定的自定义事件，vue3
      emits:["hello"],
      beforeCreate() {
        console.log('---beforeCreate---',this)
      },
      //vue2的方式，不建议使用
      /*computed:{
        fullName(){
          return this.person.firstName+"-"+this.person.lastName
        }
      },*/
      setup:function(props,context){
           console.log('---setup---',this)
           console.log('---分隔符---');
           //props参数为props属性接收到的数据，包装成一个Proxy代理对象
           console.log(props,context)
           //context参数中的包含attrs,相当于vue2中的$attrs,
           let person=reactive({
              firstName:'Color',
              lastName:"XJH",
           })
           //计算属性-简写
           /*person.fullName=computed(()=>{
             return person.firstName+"-"+person.lastName
           })*/
           //计算属性-完整写法
           person.fullName=computed({
             get(){
               return person.firstName+"-"+person.lastName;
             },
             set(val){
               const nameArr=val.split("-");
               person.firstName=nameArr[0];
               person.lastName=nameArr[1];
             }
           })
           function testClick(){
             //触发自定义事件的
             context.emit('hello',6666)
           }

          return {
            person,
            testClick,
          }
        },
    }
</script>
<style>

</style>