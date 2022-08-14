<template>
<!--
  1：npm i animate.css --save
  2: 引入
  -->
    <div>
      <button @click="isShow=! isShow">显示/隐藏</button>
      <!--  使用第三方库需要配置的三个属性    -->
      <transition-group
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__swing"
          leave-active-class="animate__backOutUp"
      >
        <h1 v-show="!isShow" key="1">你好啊2</h1>
        <h1 v-show="isShow" key="2">你好啊3</h1>
      </transition-group>
    </div>
</template>
<script>
/*直接引入样式 */
import 'animate.css'
    export default {
      name:'Test3',
      data(){
        return {
          isShow:true,
        }
      },
      methods:{

      },
    }
</script>
<style scoped>
  h1{
    background-color: orange;

  }



</style>
