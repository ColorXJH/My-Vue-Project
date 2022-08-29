<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <h1>我是app组件</h1>
<!--发现name 是refimpl应用对象，自动帮我们读取属性的value值，不用我们手写{{name.value}}  -->
  <h2>姓名：{{person.name}},年龄{{person.age}}，性别{{person.sex}}</h2>
  <h3>工作{{person.job.type}}，薪水{{person.job.salary}}</h3>
  <h3>工作{{person.jobs.type}}，薪水{{person.jobs.salary}}</h3>
  <h3>reactive嵌套的c的值{{person.jobs.s.a.b.c}}</h3>
  <h3>兴趣爱好{{person.ins}}</h3>
  <ul>
    <li v-for="(item,index) in person.hobby" :key="index">{{item}}</li>
  </ul>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addIns">添加一个intrest属性</button>
  <button @click="deleteName">删除一个name属性</button>
  <Demo msg="你好啊" school="广德中学" @hello="showHelloMessage">
<!--默认插槽    -->
<!--    <span>Color6</span>-->
<!--具名插槽    -->
    <template v-slot:color>
      <span>Color6</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "@/components/Demo";
import HelloWorld from './components/HelloWorld.vue'
import {h} from 'vue'
import {ref,reactive} from 'vue';
export default {
  name: 'App',
  setup(){
    let person=reactive({
      name:'张三',
      age:28,
      sex:"男",
      a:100,
      jobs:{
        type:'UI工程师',
        salary:'30k',
        s:{
          a:{
            b:{
              c:777,
            }
          }
        }
      },
      job:{
        type:'前端工程师',
        salary:'30k',
      },
      hobby:["抽烟",'喝酒','烫头'],
    })
    //方法,此处只是此时一下，暂时不考虑响应式
    function sayHello(){
      alert(`我叫${person.name},我${person.age}岁了，你好啊`);
    }
    function changeInfo(){
      person.name="李四";
      person.age=48;
      person.job.type="后端工程师";
      person.job.salary="40K";
      person.jobs.type="JavaScript工程师";
      person.jobs.salary="40K";
      person.jobs.s.a.b.c=999;
      person.hobby[2]="打游戏"
    }
    function test2(){
      console.log(person.name)
      console.log(person.age)
      console.log(sayHello)
    }
    function addIns(){
      person.ins="lol"
    }

    function deleteName(){
      delete person.name
    }

    function showHelloMessage(value){
      alert(`触发自定义hello事件，我收到的参属是${value}`)
    }
    //返回一个对象（常用）
    return{
      person,
      changeInfo,
      addIns,
      deleteName,
      showHelloMessage,
    }
    //返回一个函数(h 渲染哈哈书)
    /*return ()=>{
      return h('h2','你好ColorXJH')
    }*/
  },
  components: {
    Demo
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--
vue项目关闭后，页面每隔一段时间会发送一个请求给服务器
    sockjs-node/info?t=xxxx,是在咨询服务器，还在不在为什么不给我返回信号了，无影响，直接叉掉即可
-->
