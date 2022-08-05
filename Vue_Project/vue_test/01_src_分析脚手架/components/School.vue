<template><!--该标签最终不参与编译-->
  <!--  组件的结构-->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名称</button>
  </div>

</template>

<script>
  //组件交互相关的代码,需要暴露给别人呢使用，这里时ex6模块化的知识，别人引用需要import
  //这里暴露有三种方式，：1：分别暴露，2：统一暴露 3：3.默认暴露
  /*
  分别暴露
  export let a = 1
  export function fun(){
    console.log("你好")
  }*/

  /*
  统一暴露
  let a = 1
  function fun (){
    console.log("你好")
  }
  export { a , fun }
  */

  /*
  //默认暴露一个函数
  export default function fun(){
    console.log("你好")
  }
  */

  /*
  默认暴露一个对象
  let a = 1
  function fun (){
    console.log("你好")
  }
  export default { a , fun }
  */


  //引入方式：1.解构赋值引入 （对于分别暴露，一般使用解构赋值来引入） 2.直接引入（对于默认暴露，直接引入即可）
  /*
  对于分别暴露，一般使用解构赋值来引入
  import { a , fun } from "文件路径"
  //此时当前模块便含有 a 变量，和fun函数
  console.log(a)// 1
  fun()// 你好
  */


  /*
  对于默认暴露，直接引入即可
  //如果要引入的js模块默认暴露的是一个对象
  import objName from "文件路径"  //此处引入的也是一个对象
  console.log(objName.a) // 1
  objName.fun() // 你好
  */
/*  export default Vue.extend({
    data(){
      return {
        name:"广德中学",
        address:"安徽广德"
      }
    },
    methods:{
      showName(){
        alert(this.name)
      }
    }
  });*/
  //export default school
  export  default  {
    name:'MySchool',
    data(){
      return {
        name:"广德中学",
        address:"安徽广德"
      }
    },
    methods:{
      showName(){
        alert(this.name)
      }
    }
  }

</script>

<style>
/*组件的样式*/
.demo{
  background-color: orange;
}

</style>
