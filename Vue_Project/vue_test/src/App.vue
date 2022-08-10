<template>
  <div class="demo">
    <h1>{{msg}}{{name}}{{schoolName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据  -->
    <Student :handleTest="handleTest" @demoss="m2"/>
    <hr>
    <!--通过组件的自定义事件绑定来实现：子给父传递数据    -->
    <!-- 由于v-on在student组件标签上，所以说是给student整个组件的实例对象vc(vue component)身上绑定了一个事件，事件名称叫
         colorxjh,如果以后有人触发了这个事件，则函数myFun就会被调用-->
    <!-- 事件触发原则：你给谁绑定的事件，你就找谁触发   -->
    <School v-on:colorxjh="myFun"/>
    <!-- v-on:colorxjh 和  @colorxjh都可以，后者是简写形式 -->
    <School @colorxjh.once="myFun" @demos="m1"/>

    <!-- 或者使用如下方法也能实现   this.$refs.student拿到这个组件实例对象-->
    <!--  更自由灵活  -->
    <School ref="schools"/>
  </div>
</template>
<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name:'App',
  data(){
    return {
      msg:'你好啊',
      name:'',
      schoolName:'',
    }
  },
  methods:{
    handleTest(msg){
      this.name=msg;
    },
    myFun(name,...a){
      console.log("myFun被调用了",name,a);
      this.schoolName=name;
    },
    m1(name,...a){
      console.log("demos事件被触发了")
    },
    m2(name,...a){
      console.log("demoss事件被触发了---")
    },
  },
  components:{
    Student,School,
  },
  mounted() {
   setTimeout(()=>{
     //this.$refs.schools.$on("colorxjh",this.myFun)

     //只触发一次
     this.$refs.schools.$once("colorxjh",this.myFun)
   },3000);
  },
}

</script>
<!--
css ,less,...,less可以嵌套使用
不写lang,默认css
-->

<style lang="less">
.demo{
  background-color: #42b983;
  margin-top: 10px;
  .qwe{
    font-size:40px;
  }
}
</style>
