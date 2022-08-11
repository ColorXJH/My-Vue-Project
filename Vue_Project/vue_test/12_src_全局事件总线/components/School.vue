<template>
    <div class="school">
      <h1>学校名称{{name}}</h1>
      <h1>学校地址{{address}}</h1>
    </div>
</template>
<script>
  export default {
    name:'School',
    data(){
      return {
        name:"广德中学",
        address:"安徽广德",
      }
    },
    mounted() {
      console.log(window.x,this.y);
      console.log(this.__proto__.__proto__.y);
      this.$bus.$on("hello",(data)=>{
        console.log("我是school组件，收到了数据",data);
      })
    },
    beforeDestroy() {
      this.$bus.$off("hello");
    }
  }

</script>
<style scoped>
  .school{
    background-color: mediumseagreen;
  }
</style>
