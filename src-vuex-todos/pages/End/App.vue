<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked">
    </label>
    <span><span>已完成{{okCount}}</span> / 全部{{totalCount}}</span>
    <button class="btn btn-danger" v-show="okCount >0" @click="delOk">删除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    computed:{
      ...mapGetters(['totalCount', 'okCount', 'isAllSelect']),
      isAllChecked:{
        get(){
          return this.$store.getters.isAllSelect
        },
        set(isChecked){ // value为当前checkBox的最新值
          this.$store.dispatch('selectAllTodos', isChecked)
        }
      }
    },
    methods:{
      ...mapActions(['delOk'])
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
