<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Top :addTodo="addTodo"/>
      <List :todos="todos" :delTodo="delTodo"/>
      <End :todos="todos" :delOk="delOk" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import Top from './pages/Top/App'
  import List from './pages/List/App'
  import End from './pages/End/App'
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    data(){
      return{
        todos:[//定义一个数组
          {title:'aaa',type:false},//title标题，type标志：false未完成，true完成
          {title:'bbb',type:true},
          {title:'ccc',type:false}
        ]
      }
    },
    methods:{
      // 新增任务
      addTodo(todo){
        this.todos.unshift(todo)
      },
      // 删除指定任务
      delTodo(index){
        this.todos.splice(index,1)
      },
      // 删除所有选中的
      delOk(){
        this.todos = this.todos.filter(todo => !todo.type)
      },
      // 全选或全不选
      selectAll(check){
        this.todos.forEach(todo => todo.type = check)
      }
    },
    components:{
      Top,
      List,
      End
    }
  }
</script>

<style>
  /*app*/
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
