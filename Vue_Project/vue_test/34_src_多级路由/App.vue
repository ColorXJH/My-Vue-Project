<template>
  <div class="container">
    <!--样式都是bootstrap中的样式，在index页面引入或者在本页引入    -->
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group-item"
                       active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item"
                       active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name:'App',
  components:{
    Banner,
  }
}
</script>
<style>
 .row{
   padding-top: 20px;
 }
 .panel{
   padding-left: 10px;
 }
</style>