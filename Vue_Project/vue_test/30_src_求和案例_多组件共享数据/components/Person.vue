<template>
    <div>
      <h1>人员列表</h1>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
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
        this.$store.commit("ADD_PERSON",personObj)
        console.log(personObj);
        this.name="";
      },
    },
    computed:{
      personList(){
        return this.$store.state.personList
      },
      sum(){
        return this.$store.state.sum;
      },
      //...mapState({personList:"personList"}),
    },
  }
</script>
<style scoped>
h2{
  color: skyblue;
}
</style>