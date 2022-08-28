<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <h1>我是app组件</h1>
<!--发现name 是refimpl应用对象，自动帮我们读取属性的value值，不用我们手写{{name.value}}  -->
  <h2>姓名：{{name}},年龄{{age}}，性别{{sex}}</h2>
  <h3>工作{{job.type}}，薪水{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {h} from 'vue'
import {ref} from 'vue';
export default {
  name: 'App',
  setup(){
    //数据,对于不同数据类型的 引用实现不同,非对象的为value,对象为Proxy代理
    let name=ref("张三");
    let age=ref(28);
    let a=ref(200);
    let job=ref({
      type:'前端工程师',
      salary:'30k',
    })

    //方法,此处只是此时一下，暂时不考虑响应式
    function sayHello(){
      alert(`我叫${name},我${age}岁了，你好啊`);
    }
    function changeInfo(){
      console.log(name,age,job);
      name.value="李四";
      age.value=48;
      job.value.type="后端工程师";
      job.value.salary="40K";
    }
    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
    }

    //返回一个对象（常用）
    return{
      name:name,
      age,
      sayHello,
      test2,
      a,
      changeInfo,
      job,
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
