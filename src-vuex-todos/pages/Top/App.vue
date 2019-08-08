<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，回车键确认"
           v-model="inputTodo" @keyup.enter="addTodo">
  </div>
</template>

<script>
  export default {
    data(){
      return{
        inputTodo:'' // 内部使用的状态，不存在共享，不需使用vuex管理
      }
    },
    methods:{
      addTodo(){
        // 1，检查输入合法性
        const inputTodo = this.inputTodo.trim()
        if(!inputTodo){
          alert('请输入')
          return
        }
        // 2，根据输入生成todo对象
        const todo = {
          title:inputTodo,
          type: false// 默认未完成
        }
        // 3，添加到todos
        this.$store.dispatch('addTodo', todo)
        // 4，清除输入
        this.inputTodo = ''
      }
    }
  }
</script>

<style>
  /*header*/
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus{
    outline: none;
    border-color: #adadad;
  }
</style>
