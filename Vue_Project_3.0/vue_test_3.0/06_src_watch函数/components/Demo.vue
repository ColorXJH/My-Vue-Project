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
/*vue3的 watch是组合式api，所以需要在前面引入*/
import {reactive,computed,ref,watch} from 'vue'
    export default {
      name:"Demo",
      //vue2中的watch，不建议写
      /*watch:{
        sum(news,old){
          console.log("sum的值变了，原来的值是%s,现在的值是%s",old,news);
        }
      },*/
      /*watch:{
        sum:{
          immediate:true,//立即监视
          deep:true,//开启深度监视
          handler(news,old){
            console.log("sum的值变了，原来的值是%s,现在的值是%s",old,news);
          }
        }
      },*/
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
          //监视
          //箭头函数和普通函数都可以，setup中的this为undefined,它比beforeCreate还要早
          //情况1:监视ref定义的一个响应式数据
          /*watch(sum,(news,old)=>{
            console.log("sum的值变了，原来的值是%s,现在的值是%s",old,news);
          })*/

          //情况2:监视ref定义的多个响应式数据
          /*watch(sum,(news,old)=>{
           console.log("sum的值变了，原来的值是%s,现在的值是%s",old,news);
          })
          watch(msg,(news,old)=>{
            console.log("msg的值变了，原来的值是%s,现在的值是%s",old,news);
          })*/
          //或者
          /*watch([sum,msg],(news,old)=>{
            console.log("sum的值变了，原来的值是%s,现在的值是%s",old,news);
          },{
            immediate:true,
            deep:true,
          })*/

          //情况3：监视reactive所定义的一个响应式数据的全部属性,注意此处无法正确获取oldValue（监视的是对象时就拿不到oldValue）
          /*watch(person,(news,old)=>{
            console.log("person变了",news,old);
          },{
            deep:false//这里强制开启了深度监视deep:true ,deep配置无效
          })*/

          //情况4：监视reactive所定义的一个响应式数据中的某个属性
          //监视的某个属性为一个函数，函数有返回值，返回这个属性发
          watch(()=>person.age,(news,old)=>{
            console.log("person的age变了",news,old);
          })

          //情况5：监视reactive所定义的一个响应式数据中的某些属性
          //情况4.5,1,2不存在深度监视
          /*watch([()=>person.name,()=>person.age],(news,old)=>{
            console.log("person的age/age变了",news,old);
          })*/
          //特殊情况
          watch([()=>person.job],(news,old)=>{
          console.log("person的job变了",news,old);
          },{
            deep:true //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效（监视的依然是个对象，deep奏效）
          })
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