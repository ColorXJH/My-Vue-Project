<template>
    <div class="school">
      <h1>学校名称{{name}}</h1>
      <h1>学校地址{{address}}</h1>
    </div>
</template>
<script>
  /*消息接收发送引入的特定的js库，npm install xxxx-js*/
  import pubsub from 'pubsub-js'
  export default {
    name:'School',
    data(){
      return {
        name:"广德中学",
        address:"安徽广德",
      }
    },
    //mounted:function(){...}
    mounted() {
      //订阅消息
      this.pubid=pubsub.subscribe("hello",(msgName,data)=>{
        console.log(this);//应用了其他库，this 不保证为vc实例，改为箭头函数就行,或者将回调函数单独写在methods中，这里this.methodsName引入
        console.log("有人发布了hello消息，hello消息的回调执行了",msgName,data);
      })
    },
    beforeDestroy() {
      //取消订阅
      pubsub.unsubscribe(this.pubid);
    }
  }

</script>
<style scoped>
  .school{
    background-color: mediumseagreen;
  }
</style>
