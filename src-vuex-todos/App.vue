<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Top/>
      <List/>
      <End/>
    </div>
  </div>
</template>

<script>
  import Top from './pages/Top/App'
  import List from './pages/List/App'
  import End from './pages/End/App'
  import localStorageUtil from './utils/localStorageUtil'
  export default {
    mounted(){
      // 发送命令给action。异步获取保存todos数据并显示
      this.$store.dispatch('getTodos')
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
