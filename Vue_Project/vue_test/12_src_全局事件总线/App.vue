<template>
  <div class="demo">
    <h1>你好啊:{{userName}}</h1>
    <School/>
    <Student/>
  </div>
</template>
<script>
import School from "@/components/School";
import Student from "@/components/Student";
export  default {
  name:'App',
  data(){
    return{
      userName:'ColorXJH',
    }
  },
  components:{School,Student,},
  methods:{

  },
}

</script>
<style>
  .demo{
    background-color: gray;
  }
</style>
