<template>
  <div class="container">
    <!-- 标签内部传递的动态结构，传递的位置听从slot插槽指挥   -->
    <!-- 解析完之后进入标签内部，样式可以在app定义，表示带着样式进入组件   -->
    <Category title="美食" >
      <img slot="center" src="./assert/002.jpg" alt="哈哈哈">
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">百度一下你就知道</a>
      </div>
    </Category>
   <Category title="游戏" >
     <ul slot="center">
       <li v-for="(item,index) in games" :key="index" >{{item}}</li>
     </ul>
    <!--相同的插槽名称，内容追加    -->
     <div class="foot" slot="footer">
     <a href="https://www.baidu.com">百度一下你就知道</a>
     <a href="https://www.baidu.com">百度一下你就知道</a>
     </div>
   </Category>
    <Category title="电影">
      <video slot="center" controls src="./assert/一键成图.mp4"></video>
      <!-- 使用template  解析后不生成元素   -->
  <!--      <template slot="footer">
        <div class="foot" >
          <a  href="https://www.baidu.com">百度一下你就知道</a>
        </div>
        <h4 >欢迎观影</h4>
      </template>-->
      <!--  使用template有最新的写法    -->
      <template v-slot:footer>
        <div class="foot" >
          <a  href="https://www.baidu.com">百度一下你就知道</a>
        </div>
        <h4 >欢迎观影</h4>
      </template>
    </Category>
  </div>
</template>
<script>
//import './assert/bootstrap.css';//这种方式有严格的资源检查，不存在的资源可能会报错，
import Category from "@/components/Category";
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
<style lang="css" scoped>
    .container,.foot{
      /*选择浮动，定位，或者弹性盒模型*/

      /*弹性盒模型*/
      display: flex;
      /*主轴对齐方式*/
      justify-content: space-around;
    }
    h4{
      text-align: center;
    }
</style>
