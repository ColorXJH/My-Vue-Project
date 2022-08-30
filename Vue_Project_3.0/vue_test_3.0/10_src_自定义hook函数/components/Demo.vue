<template>
  <h2>当前求和为：{{sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr/>
  <h2>当前点击时鼠标的坐标为：{{point}}</h2>
</template>
<script>
import {ref,} from 'vue'
import usePoint from "@/hooks/usePoint";
    export default {
      name:"Demo",
      setup:function(props,context){
          console.log("---setup---")
          let sum=ref(0);
          let point=usePoint();
          return {
            sum,
            point,
          }
      },
    }
</script>
<style>

</style>