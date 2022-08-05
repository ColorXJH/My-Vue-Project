<template>
  <div class="demo">
    <h2>学校名称{{name}}</h2>
    <h2>学校地址{{address}}</h2>
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
export default {
  name:'MySchool',
  data(){
    return {
      name:"广德中学",
      address:"安徽广德"
    }
  }
}

</script>

<style>
  .demo{
    background-color: pink;
  }

</style>
