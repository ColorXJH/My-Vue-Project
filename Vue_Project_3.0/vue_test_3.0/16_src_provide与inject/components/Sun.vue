<template>
  <div class="sun">
    <h3>我是app组件(孙),{{car.name}}--{{car.price}}</h3>
  </div>
</template>
<script>
import {inject} from "vue";

export default {
        name:"Sun",
        setup(){
          let car=inject('car')//接受父辈传递的数据
          return {
            car,
          }
        },
    }
</script>
<style>
  .sun{
    background-color: orange;
    padding: 10px;
  }
</style>