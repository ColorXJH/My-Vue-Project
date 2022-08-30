<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{person.name}},年龄{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <h3 v-show="person.car">汽车信息：{{person.car}}</h3>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button><br/>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click.once="addCar">给人添加一台车</button>
  <button @click="changeCarName">换车名</button>
  <button @click="changeCarPrice">换车价</button>
</template>
<script>
import {markRaw, reactive, ref, toRaw} from 'vue'
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
    function showRawPerson(){
       //将reactive对象转变为普通对象，从普通对象=》proxy对象  （reactive响应式） 从proxy对象==》普通对象 （toRow还原）
       const rawPerson=toRaw(person)
      //数据还是会改变，只是vue不在监视响应式了
       rawPerson.age++;
       console.log('@@',rawPerson);

    }
    function addCar(){
      let car={name:'奔驰',price:'40W'}
      //将对象变为普通对象，永远不再响应式
      person.car=markRaw(car);
    }
    function changeCarName(){
      person.car.name="BMW"
      //数据还是会改变，只是vue不在监视响应式了
      console.log(person.car);
    }
    function changeCarPrice(){
      person.car.price="50W"
      //数据还是会改变，只是vue不在监视响应式了
      console.log(person.car);
    }
    return {
      person,
      sum,
      showRawPerson,
      addCar,
      changeCarName,
      changeCarPrice,
    }
  },
}
</script>
<style>

</style>