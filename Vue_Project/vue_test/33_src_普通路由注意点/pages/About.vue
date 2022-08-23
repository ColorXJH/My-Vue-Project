<template>
    <div>
      <h2>我是about</h2>
    </div>
</template>
<script>
  export default {
    name:'About',
    mounted() {
      console.log("About挂载完毕",this)
      window.aboutRouter=this.$router;
      window.aboutRoute=this.$route;
    },
    beforeDestroy() {
      console.log("About即将被销毁")
    },
  }
</script>
<style>

</style>