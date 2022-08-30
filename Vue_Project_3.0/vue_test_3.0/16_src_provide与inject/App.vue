<template>
  <div class="app">
    <h3>我是app组件(祖),{{name}}--{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import Child from "@/components/Child";
import {reactive, toRefs,provide} from "vue";
export default {
  name: 'App',
  setup(){
    let car=reactive({
      name:"奔驰",
      price:"40W",
    })
    provide('car',car)//给自己的后代组件传递数据
    return {
      ...toRefs(car)
    }
  },
  components: {
    Child,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app{
  background-color: gray;
  padding: 10px;
}
</style>

<!--
vue项目关闭后，页面每隔一段时间会发送一个请求给服务器
    sockjs-node/info?t=xxxx,是在咨询服务器，还在不在为什么不给我返回信号了，无影响，直接叉掉即可
-->
