<template>
    <div>
      <h2>我是home</h2>
      <div>
        <ul class="nav nav-tabs">
          <li><router-link class="list-group-item"
                           active-class="active" to="/home/news">News</router-link></li>
          <li><router-link class="list-group-item"
                           active-class="active" to="/home/message">Message</router-link></li>
        </ul>
        <!-- 使哪个组件保持活跃，不写的话所有放在该位置的组件都活跃，不销毁       -->
<!--        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>-->
<!--多个写法        -->
        <keep-alive :include=['News']>
          <router-view></router-view>
        </keep-alive>
<!--        <router-view></router-view>-->
      </div>
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