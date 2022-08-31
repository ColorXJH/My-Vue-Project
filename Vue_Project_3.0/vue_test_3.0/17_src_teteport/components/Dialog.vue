<template>
    <div>
        <button @click="isShow=true">点我弹窗</button>
        <teleport to="body">
        <!--  遮罩层        -->
        <div v-if="isShow" class="mask">
          <!-- 弹出层         -->
          <div  class="dialog">
            <h3>我是一个弹窗</h3>
            <h4>一些内容</h4>
            <button @click="isShow=false">关闭弹窗</button>
          </div>
        </div>
        </teleport>
    </div>
</template>
<script>
    import {ref} from "vue";

    export default {
        name:"Dialog",
      setup(){
          let isShow=ref(false);
          return {
            isShow,
          }
      }
    }
</script>
<style scoped>
    .dialog{
      width: 300px;
      height: 300px;
      background-color: green;
      text-align: center;
      position: absolute;
      /*参考定位的元素.中间那个点*/
      top:50%;
      left: 50%;
      /*参考自身，推回自身的一半*/
      transform: translate(-50%,-50%);

    }

    .divs{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    /*遮罩层*/
    .mask{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.5);
    }
</style>