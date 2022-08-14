<template>
    <div>
      <!-- 如果不使用vue的话，则需要自己在点击事件的回调里面写class样式的切换     -->
      <!--      <button @click="changeAni">动画切换</button>-->
      <button @click="isShow=! isShow">显示/隐藏</button>
      <!-- vue的标签 动画，css类名特定   appear="true"表示一开始就出现动画  -->
      <transition name="hello" :appear="true">
        <!--<transition name="hello" appear>这样写也可以-->
        <!--<h1 v-show="isShow" class="come" ref="h1s" id="myh1">你好啊</h1>-->
        <h1 v-show="isShow" >你好啊</h1>
      </transition>
      <transition-group name="hello" :appear="true">
        <h1 v-show="!isShow" key="1">你好啊2</h1>
        <h1 v-show="isShow" key="2">你好啊3</h1>
      </transition-group>
    </div>
</template>
<script>
    export default {
      name:'Test2',
      data(){
        return {
          isShow:true,
        }
      },
      methods:{
        changeAni(){


        },
      },
    }
</script>
<style scoped>
  h1{
    background-color: orange;
    /*0.5秒，匀速*/
   /* transition: 0.5s linear;*/
  }

  /*
  CSS3 过渡实现
  */
  /*进入的起点,离开的终点*/
  .hello-enter,.hello-leave-to{
     transform: translateX(-100%);
  }
  /*0.5秒，匀速*/
  .hello-enter-active,.hello-leave-active{
    transition: 1s linear;
  }
  /*进入的终点，离开的起点*/
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  }



</style>
