<template>
  <input type="text" v-model="keyWord"/>
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue';
export default {
  name: 'App',
  setup(){
    //let keyWord=ref("hello")
    let keyWord=myRef("hello");
    //自定义的ref
    function myRef(value){
      let timer
      console.log("----myRef----",value);
      return customRef((track,trigger)=>{
        return {
          get(){
            console.log(`有人从myRef中读取数据了，我把${value}返回给它了`)
            track();//通知vue追踪value数据的变化
            return value
          },
          set(val){
            console.log(`有人把myRef中数据修改为了：${val}返回给它了`)
            clearTimeout(timer)
            timer=setTimeout(()=>{
              //将新的值赋值给形参（get返回值)
              value=val;
              trigger();//通知vue去重新解析模板
            },500)

          },
        }
      })
    }
    return {
      keyWord
    }
  },
  components: {

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
</style>

<!--
vue项目关闭后，页面每隔一段时间会发送一个请求给服务器
    sockjs-node/info?t=xxxx,是在咨询服务器，还在不在为什么不给我返回信号了，无影响，直接叉掉即可
-->
