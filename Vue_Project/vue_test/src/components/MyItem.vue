<template>
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
</template>

<script>
export default {
  name: 'MyItem',
  //声明接收todo
  props:['todo'],
  /*方法三 ：不推荐，推荐使用方法2*/
  /*updated() {
    this.$refs.inputTitle.focus();
  },*/
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
      /*解决方法之一*/
      /*setTimeout(()=>{
        this.$refs.inputTitle.focus();
      },200);*/

      //方法2
      //$nextTick所指定的回调会在dom节点更新完毕之后再执行
      //如果不使用这个：则执行顺序不对，input框都走完了可能页面还没解析，然后再解析渲染，就没有效果了
      this.$nextTick(function (){
        this.$refs.inputTitle.focus();
      })

      //这种定时器立即到点，定时器的回调也是需要推向队列执行，这种也可以，但是不如上面好
      /*setTimeout(()=>{
        this.$refs.inputTitle.focus();
      },200);*/
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
