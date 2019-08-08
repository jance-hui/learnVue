<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，回车键确认"
           v-model="title" @keyup.enter="addTitle">
  </div>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    props:{
      addTodo: Function
    },
    data(){
      return{
        title:''
      }
    },
    methods:{
      addTitle(){
        // 1，检查输入合法性
        const title = this.title.trim()
        if(!title){
          alert('请输入')
          return
        }
        // 2，根据输入生成todo对象
        const todo = {
          title,
          type: false// 默认未完成
        }
        // 3，添加到todos
        this.addTodo(todo)
        // 4，清除输入
        this.title = ''
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
