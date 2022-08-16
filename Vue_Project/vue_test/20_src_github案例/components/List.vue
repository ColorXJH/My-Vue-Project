<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card"
         v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'List',
  data(){
    return{
      info:{
        users:[],
        isLoading:false,
        errMsg:"",
        isFirst:true,
      }
    }
  },
  /*组件间通信。谁接收数据就在谁的mounted里面向全局事件总线注册*/
  mounted() {
    this.$bus.$on('updateListData',(info)=>{
      console.log("我是list组件，收到数据：",info)
      //isFirst丢失
      //this.info=info;
      //isFirst不丢失
        //通过字面量的形式合并对象，对比this.info，info,重名或没有的以后面为准，没重复的以前面为准
      this.info={
        ...this.info,
        ...info,
      }
    })
  },
  methods:{

  },

}
</script>
<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
