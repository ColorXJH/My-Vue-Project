<template>
    <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 将games数据传递给插槽的使用者     -->
      <!-- name="myName"     -->
      <slot :games="games" msg="hello" >我是默认内容</slot>

    </div>
</template>
<script>
  export default {
    name:"Category",
    data(){
      return {
        games:["QQ飞车","英雄联盟","穿越火线","超级玛丽"],
      }
    },
    props:['title'],
  }
</script>
<style scoped>
    .category{
      background-color: skyblue;
      width: 200px;
      height: 300px;
    }
    h3{
      text-align: center;
      background-color: orange;
    }
    img{
      width: 150px;
    }
    video{
      width: 100%;
    }
</style>
