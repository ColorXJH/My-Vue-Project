<template>
  <h2>当前求和为：{{sum }}</h2>
  <button @click="sum++">点我加1</button>
</template>
<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref,} from 'vue'
    export default {
      name:"Demo",
      setup:function(props,context){
          console.log("---setup---")
          let sum=ref(0);
          //通过组合式API的方式去使用生命周期钩子
          //setup代替了beforeCreate,created
          //beforeMount=>onBeforeMount
          //mounted==>onMounted
          //beforeUpdate==>onBeforeUpdate
          //updated==>onUpdated
          //beforeUnmount==>onBeforeUnmount
          //unmounted==>onUnmounted
          onBeforeMount(()=>{
            console.log("---onBeforeMount---")
          })
          onMounted(()=>{
            console.log("---onMounted---")
          })
          onBeforeUpdate(()=>{
            console.log("---onBeforeUpdate---")
          })
          onUpdated(()=>{
            console.log("---onUpdated---")
          })
          onBeforeUnmount(()=>{
            console.log("---onBeforeUnmount---")
          })
          onUnmounted(()=>{
            console.log("---onUnmounted---")
          })
          return {
            sum,
          }
      },
      //通过配置项的形式使用生命周期钩子,注意，如果组合api和配置项都写了，组合api的优先级要高于配置项，优先执行
      /*beforeCreate() {
        console.log("===beforeCreate===")
      },
      created() {
        console.log("===created===")
      },
      beforeMount() {
        console.log("===beforeMount===")
      },
      mounted() {
        console.log("===mounted===")
      },
      beforeUpdate() {
        console.log("===beforeUpdate===")
      },
      updated() {
        console.log("===updated===")
      },
      beforeUnmount() {
        console.log("===beforeUnmount===")
      },
      unmounted() {
        console.log("===unmounted===")
      },*/
    }
</script>
<style>

</style>