<template>
  <div class="container">
    <!-- 标签内部传递的动态结构，传递的位置听从slot插槽指挥   -->
    <!-- 解析完之后进入标签内部，样式可以在app定义，表示带着样式进入组件   -->
    <Category title="美食" >
      <img src="./assert/002.jpg" alt="哈哈哈">
    </Category>
   <Category title="游戏" >
     <ul>
       <li v-for="(item,index) in games" :key="index" >{{item}}</li>
     </ul>
   </Category>
    <Category title="电影">
      <video controls src="./assert/一键成图.mp4"></video>
    </Category>
  </div>
</template>
<script>
//import './assert/bootstrap.css';//这种方式有严格的资源检查，不存在的资源可能会报错，
import Category from "@/components/Count";
  export default {
    name:'App',
    data(){
      return {
        foods:["火锅","烧烤","小龙虾","牛排"],
        games:["QQ飞车","英雄联盟","穿越火线","超级玛丽"],
        films:["拆弹专家","功夫","美人鱼","教父"]
      }
    },
    components:{Category},
    method:{

    },
  }
</script>
<style lang="css">
    .container{
      /*选择浮动，定位，或者弹性盒模型*/

      /*弹性盒模型*/
      display: flex;
      /*主轴对齐方式*/
      justify-content: space-around;
    }
</style>
