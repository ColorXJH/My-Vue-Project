<template>
    <div>
      <!--模板能看见vc身上的所有东西      -->
      <h1>当前求和为{{$store.state.sum}}</h1>
<!--      <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>-->
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为基数+</button>
      <button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
  export default {
    name:"Count",
    data(){
      return{
        n:1,//用户选择的数字
      }
    },
    methods:{
      increment(){
        //如果没有业务逻辑直接调用commit
        //this.$store.dispatch("add",this.n);
        this.$store.commit("ADD",this.n);
      },
      decrement(){
        //this.$store.dispatch("jian",this.n);
        this.$store.commit("JIAN",this.n);
      },
      incrementOdd(){
        /*if(this.$store.state.sum%2){
          this.$store.dispatch("add",this.n);
        }*/
        this.$store.dispatch("addOdd",this.n);
      },
      incrementWait(){
          /*setTimeout(()=>{
            this.$store.dispatch("add",this.n);
          },500)*/
        this.$store.dispatch("addWait",this.n);
      },
    },
  }
</script>
<style scoped>
    button{
      margin-right: 5px;
    }
</style>
