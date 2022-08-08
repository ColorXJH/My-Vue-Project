<template>
  <div class="demo">
    <Student/>
    <hr>
    <School/>
  </div>
</template>
<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name:'App',
  data(){
    return {
    }
  },
  methods:{
    showDom(){
    }
  },
  components:{
    Student,School,
  }
}

</script>
<!--
css ,less,...,less可以嵌套使用
不写lang,默认css
-->

<style lang="less">
.demo{
  background-color: #42b983;
  .qwe{
    font-size:40px;
  }
}
</style>
