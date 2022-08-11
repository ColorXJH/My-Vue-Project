<template>
  <div class="student">
    <h1>学生姓名{{name}}</h1>
    <h1>学生年龄{{age}}</h1>
    <button @click="sendStudentName">把学生名传递给school组件</button>
  </div>
</template>
<script>
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
        this.$bus.$emit("hello",this.name);
      }
    },
  }

</script>
<style scoped>
  .student{
    background-color: pink;
  }
</style>
