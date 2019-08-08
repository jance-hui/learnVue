<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import Item from '../Item/App'
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    props:{
      todos:Array,
    },
    components:{
      Item
    }
  }
</script>

<style>
  /*main*/
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
