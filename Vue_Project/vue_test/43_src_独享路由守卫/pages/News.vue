<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>
<script>
    export default {
        name:"News",
      data(){
          return {
           a:false,
           opacity: 1,
          }
      },
      /*beforeDestroy() {
          console.log("news组件即将被销毁");
          //清空定时器
          clearInterval(this.timer);
      },
      mounted() {
          //重复执行喝执行一次的区别
         this.timer=setInterval(()=>{
           console.log('@');
           this.opacity-=0.01;
           if(this.opacity<=0){
             this.opacity=1;
           }
         },16)
      },*/

      //下面两个组件是路由独有的

      //激活 （从无到有 切换来）
      activated() {
        console.log("News组件激活了");
        //重复执行喝执行一次的区别
        this.timer=setInterval(()=>{
          console.log('@');
          this.opacity-=0.01;
          if(this.opacity<=0){
            this.opacity=1;
          }
        },16)
      },
      //失活 （从有到无 切换走）
      deactivated() {
        console.log("News组件失活了");
        //清空定时器
        clearInterval(this.timer);
      },

      //之前生命周期落下的三个钩子这里说了两个，还有一个是#nextTick, todoList-nextTick案例说过，生命周期钩子完毕
    }
</script>
<style>

</style>