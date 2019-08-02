<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck">
    </label>
    <span><span>已完成{{num}}</span> / 全部{{todos.length}}</span>
    <button class="btn btn-danger" v-show="num >0" @click="delOk">删除已完成任务</button>
  </div>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    props:{
      todos:Array,
      delOk:Function,
      selectAll:Function
    },
    data(){
      return{
      }
    },
    computed:{
      num(){
        return this.todos.reduce((perTotal, todo) => perTotal + (todo.type?1:0), 0)
      },
      isAllCheck:{
        get(){
          return this.num === this.todos.length
        },
        set(value){ // value为当前checkBox的最新值
          this.selectAll(value)
        }
      }
    }
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
