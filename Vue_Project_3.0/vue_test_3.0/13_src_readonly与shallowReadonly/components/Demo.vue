<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{person.name}},年龄{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>
<script>
import {reactive, readonly, ref,shallowReadonly} from 'vue'
export default {
  name:"Demo",
  setup:function(props,context){
    let person=reactive({
      name:"张三",
      age:28,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let sum=ref(0);
    //person=readonly(person);
    person=shallowReadonly(person)
    sum=readonly(sum)
    return {
      person,
      sum,
    }
  },
}
</script>
<style>

</style>