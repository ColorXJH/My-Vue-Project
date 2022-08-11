<template>
  <div class="student">
    <h1>学生姓名{{name}}</h1>
    <h1>学生年龄{{age}}</h1>
    <button @click="sendStudentName">把学生名传递给school组件</button>
  </div>
</template>
<script>
  /*消息接收发送引入的特定的js库，npm install xxxx-js*/
  import pubsub from 'pubsub-js'
  export default {
    name:'Student',
    data(){
      return {
        name:'ColorXJH',
        age:18
      }
    },
    methods:{
      sendStudentName(){
        //发布消息
        pubsub.publish("hello",666);
      }
    },
  }

</script>
<style scoped>
  .student{
    background-color: pink;
  }
</style>
