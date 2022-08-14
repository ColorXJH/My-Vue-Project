<template>
<!--  <transition appear
              name="animate__animated animate__bounce"
              enter-active-class="animate__swing"
              leave-active-class="animate__backOutUp"
  >-->
  <li>
    <label>
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <!--   @click  @change都可以   -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.title"  @blur="handleBlur(todo,$event)" ref="inputTitle"/>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
<!--  </transition>-->
</template>

<script>
/*import 'animate.css'*/
export default {
  name: 'MyItem',
  //声明接收todo
  props:['todo'],
  methods:{
    //勾选、取消勾选
    handleCheck(id){
      this.$bus.$emit("checkTodo",id)
    },
    //编辑
    handleEdit(todo){
      if(todo.hasOwnProperty("isEdit")){
        todo.isEdit=true;
      }else{
        this.$set(todo,"isEdit",true);
      }
      this.$nextTick(function (){
        this.$refs.inputTitle.focus();
      })
    },
    //失去焦点事件
    handleBlur(todo,e){
      todo.isEdit=false;
      console.log(e.target.value);
      if(!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo",todo.id,e.target.value)
    },
    //删除
    handleDelete(id){
      if(confirm('确定删除吗？')){
        this.$bus.$emit("deleteTodo",id)
      }
    },
  },

}
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>
