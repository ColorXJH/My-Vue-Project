<template>
  <div class="container">
    <Category title="游戏">
      <!-- 想要接收到插槽传递过来的数据，就必须在结构外面包裹一层template     -->
      <!-- 注意作用域插槽也可以有名字，需要在template钟写下slot="name",但是可以用默认插槽代替，并不需要这么麻烦     -->
      <!--  slot="myName"    -->
      <template scope="ColorXJH" >
        <ul>
          <li v-for="(item,index) in ColorXJH.games" :key="index" >{{item}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!--es6 的解构赋值      -->
      <template scope="{games}">
      <ol>
        <li v-for="(item,index) in games" :key="index" >{{item}}</li>
      </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!--  slot-scope==scope,新旧api的问题，使用起来差不多-->
      <template slot-scope="ColorXJH">
      <h4 v-for="(item,index) in ColorXJH.games" :key="index" >{{item}}</h4>
       <h3>{{ColorXJH}}</h3>
      </template>
    </Category>
  </div>
</template>
<script>
//import './assert/bootstrap.css';//这种方式有严格的资源检查，不存在的资源可能会报错，
import Category from "@/components/Count";
  export default {
    name:'App',
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
