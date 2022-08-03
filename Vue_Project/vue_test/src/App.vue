<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <MySchool></MySchool>
  </div>
</template>

<script>
//引入组件,在脚手架里，可以不用写组件名称的后缀
import MySchool from "./components/School";
export  default {
  name:'App',
  components:{
    MySchool,
  }

}
</script>
<style>

</style>
