<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>
<script>
//import './assert/bootstrap.css';//这种方式有严格的资源检查，不存在的资源可能会报错，
import Search from "@/components/Search";
import List from "@/components/List";
  export default {
    name:'App',
    data(){
      return {
        name:'color6',
      }
    },
    components:{Search,List,},
    method:{

    },
  }
</script>
<style>

</style>
