<template>
    <div>
      <!--模板能看见vc身上的所有东西      -->
      <h1>当前求和为{{sum}}</h1>
      <h3>当前求和放大10倍为：{{sum*10}}</h3>
      <!-- 计算属性：跨组件无法使用     -->
      <h3>当前求和放大10倍，计算属性{{sum}}</h3>
      <h3>当前求和放大10倍，复杂逻辑放在getter中：{{daHe}}</h3>
      <h3>我在{{school}}学习{{subject}}</h3>
      <h2>下方的总人数是：{{personList.length}}</h2>

      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd(n)">当前求和为基数+</button>
      <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>
<script>
/*引入vuex映射状态*/
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name:"Count",
    data(){
      return{
        n:1,//用户选择的数字
      }
    },
    computed:{
      ...mapState('countOptions',['sum','daHe','school','subject']),
      ...mapState('personOptions',['personList']),
      ...mapGetters("countOptions",["bigSum"]),
    },
    methods:{
      /*这种属于笨方法，基本方法是属于调用的时候传参，不穿的话，默认传递的是event事件对象，不符合要求*/
      decrement(){
        this.decrementadd(this.n);
      },

      /*借助mapMutations生成对应的方法，方法中会调用commit去联系mutations (对象写法)*/
      ...mapMutations('countOptions',{increment:"ADD",decrementadd:"JIAN"}),
      /*借助mapActions生成对应的方法，方法中会调用dispatch去联系actions (数组写法)*/
      ...mapActions('countOptions',{incrementOdd:"addOdd",incrementWait:"addWait"}),

    },
    mounted() {
    }
  }
</script>
<style scoped>
    button{
      margin-right: 5px;
    }
    h2{
      color: red;
    }
</style>
