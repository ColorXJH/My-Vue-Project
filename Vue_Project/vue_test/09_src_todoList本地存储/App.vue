<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos"
                  :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "@/components/MyHeader";
import MyList from "@/components/MyList";
import MyFooter from "@/components/MyFooter";

export default {
  name: 'App',
  data() {
    return {
      //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在app中（状态提升）
      //数据在哪里，对数据得操作就定义在哪里
      todos:JSON.parse(localStorage.getItem("todos"))||[],
    }
  },
  methods: {
    //添加一个todo,数组前面添加
    addTodo(todoObj){
      this.todos.unshift(todoObj);
    },
    //勾选。取消一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.done=! todo.done;
        }
      })
    },
    //删除一个todo
    deleteTodo(id){
      this.todos=this.todos.filter((todo)=>{return todo.id!==id})
    },
    //全选，取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{todo.done=done})
    },
    //清楚所有已完成的todo
    clearAllTodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  components: {
    MyHeader, MyList, MyFooter,
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
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
