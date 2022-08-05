<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的dom元素</button>
    <MySchool ref="sch" id="sc"/>
  </div>
</template>
<script>
import MySchool from './components/School'
export default {
  name:'App',
  data(){
    return {
      msg:"广德中学欢迎您",
    }
  },
  methods:{
    showDom(){
      console.log('@',this.$refs.title);//标签元素的dom结构
      console.log('@',this.$refs.sch);//school组件的实例对象，以后组件间通信需要用到
      console.log('@',document.getElementById("sc"));// 通过id拿到的是真实的整个dom结构
    }
  },
  components:{
    MySchool,
  }
}

</script>
<style>


</style>
