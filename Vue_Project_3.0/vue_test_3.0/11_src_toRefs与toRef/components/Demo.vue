<template>
  <h2>{{person}}</h2>
  <h2>姓名：{{name}},年龄{{age2}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
<script>
import {reactive, computed, ref, watch, watchEffect, toRef, toRefs} from 'vue'
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
    const name2=toRef(person,'name');
    const age2=toRef(person,'age');
    const salary2=toRef(person.job.j1,'salary');
    const allProps=toRefs(person)
    return {
      person,
      ...allProps,
    }
  },
}
</script>
<style>

</style>