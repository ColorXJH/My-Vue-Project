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
import {reactive,computed,ref,watch,watchEffect} from 'vue'
    export default {
      name:"Demo",
      setup:function(props,context){
          let sum=ref(0);
          let msg=ref("你好啊")
          let person=reactive({
            name:"张三",
            age:28,
            job:{
              j1:{
                salary:20
              }
            }
          })
          /*watch(sum,function (news,olds){
              console.log("sum的值变化了",news,olds)
          },{immediate:true})*/
          watchEffect(function (){
            const x1=sum.value;
            const x2=person.job.j1.salary
            console.log("watchEffect 所指定的回调执行了");
          })
          //console.log(sum,msg,person);
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