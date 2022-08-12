<template>
    <div>
      <!-- 如果不使用vue的话，则需要自己在点击事件的回调里面写class样式的切换     -->
      <!--      <button @click="changeAni">动画切换</button>-->
      <button @click="isShow=! isShow">显示/隐藏</button>
      <!-- vue的标签 动画，css类名特定   appear="true"表示一开始就出现动画  -->
      <transition name="hello" :appear="true">
        <!--<transition name="hello" appear>这样写也可以-->
        <!--<h1 v-show="isShow" class="come" ref="h1s" id="myh1">你好啊</h1>-->
        <h1 v-show="isShow" class="come" ref="h1s" id="myh1">你好啊</h1>
      </transition>
    </div>
</template>
<script>
    export default {
      name:'Test',
      data(){
        return {
          isShow:true,
        }
      },
      methods:{
        changeAni(){
          /*console.log(this.$refs.h1s.className);
          if(this.$refs.h1s.className==="come"){
            //document.querySelector("#myh1").className="go";
            //this.$refs.h1s.setAttribute("class","go")
          }else{
            //this.$refs.h1s.setAttribute("class","come")
            //document.querySelector("#myh1").className="come";
          }*/

        },
      },
    }
</script>
<style>
  h1{
    background-color: orange;
  }

  /*
  css3 动画效果
  */
  /*vue的默认类名*/
  .v-enter-active{
     animation: colorxjh 1s linear;
   }
  .v-leave-active{
    animation: colorxjh 1s reverse linear;
  }
  /*根据translation标签name的类名*/
  .hello-enter-active{
    animation: colorxjh 1s linear;
  }
  .hello-leave-active{
    animation: colorxjh 1s reverse linear;
  }
  @keyframes colorxjh {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }

  }
</style>
