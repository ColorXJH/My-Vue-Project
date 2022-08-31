<template>
  <div class="child">
    <h3>我是app组件(子),{{x.name}}--{{x.price}}</h3>
    {{sum}}
  </div>
</template>
<script>
import {inject, ref} from "vue";
    export default {
        name:"Child",
       async setup(){
        let x=inject("car")
        let sum=ref(0);
         //让组件等一等：1：网速慢 2使用了异步组件 配合async/await
        let p= new Promise((resolve,reject)=>{
            setTimeout(()=>{
              resolve({
                sum,x
              });
            },3000)
        })
         console.log(p);
        return await p


      },

    }
</script>
<style>
.child{
  background-color: skyblue;
  padding: 10px;
}
</style>