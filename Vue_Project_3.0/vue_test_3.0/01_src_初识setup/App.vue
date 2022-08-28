<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <h1>我是app组件</h1>
  <h2>姓名：{{name}},年龄{{age}}，性别{{sex}}</h2>
  <h2>a的值是：{{a}}</h2>
  <button @click="sayHello">说话</button>
  <button @click="sayWelcome">欢迎(vue2配置)</button>
  <button @click="test1">vue2读vue3配置</button>
  <button @click="test2">vue3读vue2配置</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return {
      sex:'男',
      a:100,
    }
  },
  methods:{
    sayWelcome(){
      alert("欢迎你")
    },
    test1(){
      console.log(this.sex);
      console.log(this.name);
      console.log(this.sayHello);
      console.log(this.age);
    },
  },
  setup(){
    //数据
    let name="张三";
    let age=28;
    let a=200;

    //方法,此处只是此时一下，暂时不考虑响应式
    function sayHello(){
      alert(`我叫${name},我${age}岁了，你好啊`);
    }

    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
    }

    //返回一个对象（常用）
    return{
      name:name,
      age,
      sayHello,
      test2,
      a,
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
