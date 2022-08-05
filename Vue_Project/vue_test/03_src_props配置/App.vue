<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>
    <Student name="张三" sex="男" />
  </div>
</template>
<script>
import Student from "./components/Student";
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
    Student,
  }
}

</script>
<style>


</style>
