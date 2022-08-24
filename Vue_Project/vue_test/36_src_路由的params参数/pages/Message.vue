<template>
  <div>
  <ul>
    <li v-for="item in messageList" :key="item.id">
<!--      <a :href='item.title'>{{item.title}}</a>&nbsp;&nbsp;
      <a :href="`/${item.title}`">{{item.title}}</a>&nbsp;&nbsp;-->
<!-- 跳转路由并携带query参数，to的字符串写法     -->
<!--      <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>-->
<!-- 跳转路由并携带query参数，to的对象写法       -->
<!--      <router-link :to="{
        //path:'/home/message/detail',
        name:'xiangqing',
        query:{
          id:item.id,
          title:item.title,
        },
      }">{{item.title}}</router-link>-->
      <!-- 跳转路由并携带params参数，to的字符串写法     -->
      <router-link :to="`/home/message/detail/${item.id}/${item.title}`">路由携带param参数--{{item.title}}</router-link>
      <!-- 跳转路由并携带params参数，to的对象写法     -->
      <router-link :to="{
        //注意这里只能写name,不能写path
        name:'xiangqing',
        params:{
          id:item.id,
          title:item.title
        }
      }">路由携带param参数--{{item.title}}</router-link>
    </li>
  </ul>
  <hr>
  <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name:"Message",
        data(){
          return{
            messageList:[
              {id:'001',title:'消息001'},
              {id:'002',title:'消息002'},
              {id:'003',title:'消息003'},
            ],
          }
        },
    }
</script>
<style>

</style>