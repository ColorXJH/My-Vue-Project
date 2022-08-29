<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <slot name="color"></slot><br/>
  <button @click="testClick">测试触发一下demo组件的hello事件</button>

</template>
<script>
import {reactive} from 'vue'
    export default {
      name:"Demo",
      props:['msg','school'],
      //接收绑定的自定义事件，vue3
      emits:["hello"],
      beforeCreate() {
        console.log('---beforeCreate---',this)
      },
      setup:function(props,context){
           console.log('---setup---',this)
           console.log('---分隔符---');
           //props参数为props属性接收到的数据，包装成一个Proxy代理对象
           console.log(props,context)
           //context参数中的包含attrs,相当于vue2中的$attrs,
           let person=reactive({
              name:'ColorXJH',
              age:28,
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