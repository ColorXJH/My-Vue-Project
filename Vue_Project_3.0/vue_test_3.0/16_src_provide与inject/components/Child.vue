<template>
  <div class="child">
    <h3>我是app组件(子),{{x.name}}--{{x.price}}</h3>
    <Sun/>
  </div>
</template>
<script>
import Sun from "@/components/Sun";
import {inject} from "vue";
    export default {
        name:"Child",
        components:{Sun,},
      setup(){
          let x=inject("car")
        return{
            x,
        }

      },

    }
</script>
<style>
.child{
  background-color: skyblue;
  padding: 10px;
}
</style>