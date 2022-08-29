<template>
  <h2>当前求和为：{{sum }}</h2>
  <button @click="sum++">点我加1</button>
  <h2>d当前的信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr/>
  <h2>姓名：{{person.name}},年龄{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>
<script>
import {reactive,computed,ref,watch} from 'vue'
    export default {
      name:"Demo",
      setup:function(props,context){
          let sum=ref(0);
          let msg=ref("你好啊")
          let person=ref({
            name:"张三",
            age:28,
            job:{
              j1:{
                salary:20
              }
            }
          })
          //注意监视的都是一个引用
          //监测reactive定义数据，自动开启deep
          watch(person.value,(news,old)=>{
          console.log("person变化了",news,old);//old不准
          })
          //监测ref定义数据（对于object内部还是帮我们调用了reactive函数），手动动开启deep
          /*watch(person,(news,old)=>{
            console.log("person变化了",news,old);//old不准
          },{
            deep:true
          })*/
          watch(sum,function (news,olds){
              console.log("sum的值变化了",news,olds)
          })
          console.log(sum,msg,person);
          return {
            sum,
            msg,
            person,
          }
        },
    }
</script>
<style>

</style>