<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>
<script>
import axios from "axios";
  export  default {
    name:'Search',
    data(){
      return{
        keyWord:'',
      }
    },
    methods:{
      searchUsers(){
        this.$bus.$emit("updateListData",{
          isLoading:true,
          errMsg:"",
          users:[],
          isFirst:false,
        })
        //使用模板字符串，想让参数按照js解析，就需要使用${}包裹表达式，这是es6的模板字符串语法
          //这里确实存在跨域问题，但是github工程师在后端通过cors已经为我们解决了
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            (response)=>{
              console.log("请求成功了",response.data.items);
              /*组件间通信，谁发数据，就在谁这边使用全局事件总线触发事件*/
              this.$bus.$emit("updateListData",{
                users:response.data.items,
                errMsg:"",
                isLoading:false,
              })
            },
            (error)=>{
              console.log("请求失败了");
              this.$bus.$emit("updateListData",{
                users:[],
                errMsg:error.message,
                isLoading:false,
              })
            }

        )
      },
    },

  }
</script>
<style>

</style>
