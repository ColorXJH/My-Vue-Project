<template>
    <div>
      <!--模板能看见vc身上的所有东西      -->
      <h1>当前求和为{{sum}}</h1>
      <h3>当前求和放大10倍为：{{sum*10}}</h3>
      <!-- 计算属性：跨组件无法使用     -->
      <h3>当前求和放大10倍，计算属性{{sum}}</h3>
      <h3>当前求和放大10倍，复杂逻辑放在getter中：{{daHe}}</h3>
      <h3>我在{{school}}学习{{subject}}</h3>
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
/*引入vuex映射状态*/
  import {mapState,mapGetters} from 'vuex'
  export default {
    name:"Count",
    data(){
      return{
        n:1,//用户选择的数字
      }
    },
    computed:{
      //靠程序员亲自去写计算属性
      /*tsum:function xxxxxxxuuuu(){
        return 10*this.$store.state.sum
      },
      sums(){
        return this.$store.state.sum;
      },
      school(){
        return this.$store.state.school
      },
      subject(){
        return this.$store.state.subject;
      },*/
      //借助mapState生成计算属性，从state中读取数据，对象写法
      //将mapState对象中的每一组k/v展开，放在外部对象中
      /*...mapState({
        he:'sum',
        xueke:"subject",
        xuexiao:'school',
      }),*/

      //借助mapState生成计算属性，从state中读取数据，数组写法
      ...mapState(['sum','subject','school']),

      /*bigSum(){
        return this.$store.getters.bigSum;
      },*/
      //借助mapGetters生成计算属性，从getter中读取数据，对象写法(同上也有数组写法)
      //将mapGetters对象中的每一组k/v展开，放在外部对象中
      ...mapGetters({
        daHe:"bigSum"
      }),
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
    mounted() {
      const x=mapState({
        he:'sum',
        'xueke':"subject",
        'xuexiao':'school',
      });
      const y=mapGetters({
        daHe:"bigSum"
      });
      console.log(x);
      console.log(y);
    }
  }
</script>
<style scoped>
    button{
      margin-right: 5px;
    }
</style>
