<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos":key="todoObj.id"
            :todo="todoObj"/>
  </ul>
</template>

<script>
import pubsub from 'pubsub-js';
import MyItem from "@/components/MyItem";

export default {
  name: 'MyList',
  components: {MyItem,},
  //声明接收app传递的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  data() {
    return {
      //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在app中（状态提升）
      //数据在哪里，对数据得操作就定义在哪里
      todos:JSON.parse(localStorage.getItem("todos"))||[],
    }
  },
  methods:{
    //添加一个todo,数组前面添加
    addTodo(msg,todoObj){
      this.todos.unshift(todoObj);
    },
    //勾选。取消一个todo
    checkTodo(msg,id){
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.done=! todo.done;
        }
      })
    },
    //删除一个todo
    deleteTodo(msg,id){
      this.todos=this.todos.filter((todo)=>{return todo.id!==id})
      //刷新footer数据
      pubsub.publish("recieveData",this.todos)
    },
    //全选，取消全选
    checkAllTodo(msg,done){
      this.todos.forEach((todo)=>{todo.done=done})

    },
    //清除所有已完成的todo
    clearAllTodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
      //刷新footer数据,因为并没有直接关联数据，所以无法自动刷新
      pubsub.publish("recieveData",this.todos)
    }

  },
  mounted() {
    this.pubid1=pubsub.subscribe("addTodo",this.addTodo)
    this.pubid2=pubsub.subscribe("checkTodo",this.checkTodo)
    this.pubid3=pubsub.subscribe("deleteTodo",this.deleteTodo)
    this.pubid4=pubsub.subscribe("checkAllTodo",this.checkAllTodo)
    this.pubid5=pubsub.subscribe("clearAllTodo",this.clearAllTodo)
    //加载完毕后将数据传递给footer
    pubsub.publish("recieveData",this.todos)
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubid1)
    pubsub.unsubscribe(this.pubid2)
    pubsub.unsubscribe(this.pubid3)
    pubsub.unsubscribe(this.pubid4)
    pubsub.unsubscribe(this.pubid5)

  },
  watch:{
    todos:{
      deep:true,//深度监视，检测对象中的属性是否发生变化
      handler(newVal,oldVal){
        console.log(newVal);
        console.log(oldVal);
        localStorage.setItem("todos",JSON.stringify(newVal));
      },
    },

  },

}
</script>

<style>
    /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
