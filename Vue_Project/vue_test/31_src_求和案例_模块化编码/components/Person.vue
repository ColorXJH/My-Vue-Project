<template>
    <div>
      <h1>人员列表</h1>
      <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addWang">添加姓王的人</button>
      <button @click="addPersonServer">添加一个人,名字随机</button>
      <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
      <h2>count组件的求和为：{{sum}}</h2>
    </div>
</template>
<script>
import {mapState} from "vuex"
import {nanoid} from 'nanoid'
  export  default {
    name:"Person",
    data(){
      return {
        name:'',
      }
    },
    methods:{
      add(){
        const personObj={id:nanoid(),name:this.name};
        //没什么业务逻辑直接联系mutation,不一定非要联系actions
        this.$store.commit("personOptions/ADD_PERSON",personObj)
        console.log(personObj);
        this.name="";
      },
      addWang(){
        const personObj={id:nanoid(),name:this.name};
        this.$store.dispatch("personOptions/addPersonWang",personObj)
      },
      addPersonServer(){
        this.$store.dispatch("personOptions/addPersonServer")
      },
    },
    computed:{
      personList(){
        return this.$store.state.personOptions.personList
      },
      sum(){
        return this.$store.state.countOptions.sum;
      },
      firstPersonName(){
        return this.$store.getters["personOptions/firstPersonName"]
      }
    },
  }
</script>
<style scoped>
h2{
  color: skyblue;
}
</style>