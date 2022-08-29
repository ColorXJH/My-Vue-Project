<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <h1>我是app组件</h1>
<!--发现name 是refimpl应用对象，自动帮我们读取属性的value值，不用我们手写{{name.value}}  -->
  <h2>姓名：{{person.name}},年龄{{person.age}}，性别{{person.sex}}</h2>
  <h3>工作{{person.job.type}}，薪水{{person.job.salary}}</h3>
  <h3>工作{{person.jobs.type}}，薪水{{person.jobs.salary}}</h3>
  <h3>reactive嵌套的c的值{{person.jobs.s.a.b.c}}</h3>
  <lu>
    <li v-for="item in person.hobby" :key="index">{{item}}</li>
  </lu>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
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

    //返回一个对象（常用）
    return{
      person,
      changeInfo,
    }
    //返回一个函数(h 渲染哈哈书)
    /*return ()=>{
      return h('h2','你好ColorXJH')
    }*/
  },
  components: {
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
