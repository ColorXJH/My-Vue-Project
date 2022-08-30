<template>
  <h2>当前的x值是：{{x.y}}</h2>
  <h2>{{person}}</h2>
  <h2>姓名：{{name}},年龄{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="x={y:888}">点我替换x</button>
</template>
<script>
import { shallowReactive, shallowRef, toRefs} from 'vue'
export default {
  name:"Demo",
  setup:function(props,context){
    let person=shallowReactive({
      name:"张三",
      age:28,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let x=shallowRef({
      y:0
    });
    const allProps=toRefs(person)
    return {
      person,
      ...allProps,
      x,
    }
  },
}
</script>
<style>

</style>