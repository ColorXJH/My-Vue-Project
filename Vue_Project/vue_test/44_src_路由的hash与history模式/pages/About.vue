<template>
    <div>
      <h2>我是about</h2>
    </div>
</template>
<script>
  import store from "@/store";
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
    //独享-前置路由守卫
    //通过路由规则进入该组件时被调用
    beforeRouteEnter(to,from,next){
      console.log('--beforeEnter--',this)
      //权限
      if(to.meta.isAuth){
        if(store.state.school==='广德中学'){
          next();
        }else{
          alert("学校信息不对")
        }

      }

    },
    //独享-后置路由守卫
    //通过路由规则离开该组件时被调用
    beforeRouteLeave(to,from,next){
      console.log('--afterEnter--')
      next();
    },
  }
</script>
<style>

</style>