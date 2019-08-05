<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="isAllCheck">-->
      <slot name="check"></slot>
    </label>
    <!--<span><span>已完成{{num}} / 全部{{todos.length}}</span></span>-->
    <slot name="count"></slot>
    <!--<button class="btn btn-danger" v-show="num >0" @click="delOk">删除已完成任务</button>-->
    <slot name="delBtn"></slot>
  </div>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）

  }
</script>

<style>
  /*footer*/
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>
