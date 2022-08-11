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
    <!-- 组件标签也可以绑定原生事件  注意并不是@click，dom元素上是这样，但是组件上需要加上.native -->
    <School ref="schools" @click.native="show"/>
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
    show(){
      alert(123);
    },
  },
  components:{
    Student,School,
  },
  mounted() {
    //注意：这里如果把myFun写成回调函数直接在这里写，其中的this就会指向被注册的哪个vc实例对象,而不是当前实例对象
    //原则：谁触发了整个事件，这个回调函数中的this就指向哪个vc实例对象
    this.$refs.schools.$on("colorxjh",function (name,...a){
      console.log(this);
    });

    //如下写就不会有这样的问题，因为同样的this.myFun中的this指向的是schools组件实例对象，但是这个方法又被包装在了app实例对象的methods中
    //vue给过我们承诺，就是写在本实例对象中普通函数的this一定指向本实例
    this.$refs.schools.$on("colorxjh",this.myFun);

    //同样将最上方的写法改换成箭头函数也能避免这个问题,因为回调函数里的this本来是schools组件实例对象，但是写成了箭头函数，箭头函数没有this
    //它就像外层找，找到mounted方法，这个方法的this就是app实例对象
    this.$refs.schools.$on("colorxjh", (name,...a)=>{
      console.log(this);
    });


    /*setTimeout(()=>{
      //this.$refs.schools.$on("colorxjh",this.myFun)

      //只触发一次
      this.$refs.schools.$once("colorxjh",this.myFun)

    },3000);*/
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
