<template>
<!-- v-show="total"控制是否展示 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: 'MyFooter',
  data(){
    return {
      todos:[],
    }
  },
  computed:{
    total(){
      return this.todos.length;
    },
    doneTotal(){
      //reduce:条件统计，pre初始值为数组index=0,或者默认初始值，pre为上次函数执行完得返回值，current为当前传递项得值，整个reduc最后一次返回值作为方法返回值
      return this.todos.reduce((pre,todo)=>{
        return pre+(todo.done?1:0)
      },0)
    },
    isAll:{
      get(){
        return this.doneTotal===this.total&&this.total>0;
      },
      set(val){
        pubsub.publish("checkAllTodo",val);
      }
    },
  },
  methods:{
    clearAll(){
      pubsub.publish("clearAllTodo")
    },
    gotData(msg,val){
      console.log("-----val-----");
      console.log(val);
      this.todos=val;
    }
  },
  beforeMount() {
    //初始化数据前挂载一个事件
    pubsub.subscribe("recieveData",this.gotData)
  },
  beforeDestroy() {
    pubsub.unsubscribe("recieveData");
  }

}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
