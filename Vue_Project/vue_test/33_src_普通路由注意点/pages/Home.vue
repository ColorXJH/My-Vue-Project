<template>
    <div>
      <h2>我是home</h2>
    </div>
</template>
<script>
  export default {
    name:'Home',
    mounted() {
      console.log("Home挂载完毕",this)
      window.homeRouter=this.$router;
      window.homeRoute=this.$route;
    },
    beforeDestroy() {
      console.log("Home即将被销毁")
    },
  }
</script>
<style>

</style>