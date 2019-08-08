/*
* actions
* 包含多个接收组件触发mutation调用间接更新的方法的对象
*/
import {ADD_TODO, DEL_TODO, SELECT_ALL_TODOS, DEL_OK, GET_TODOS} from './mutation-types'
import localStorageUtil from '../utils/localStorageUtil'

export default {
  // 增加
  addTodo({commit}, todo){
    // 提交一个mutation的请求
    commit(ADD_TODO, {todo}) // {todo}：将数据包装成对象
  },
  // 删除
  delTodo({commit}, index){
    // 提交一个mutation的请求
    commit(DEL_TODO, {index}) // 无论数据什么类型，都要用 {} 括起来
  },

  // 全选中 / 全不选：value:boolean类型
  selectAllTodos({commit}, isChecked){
    commit(SELECT_ALL_TODOS, {isChecked})
  },

  // 删除选中的
  delOk({commit}){
    commit(DEL_OK)
  },

  // 异步获取todos更新状态
  getTodos({commit}){
    setTimeout(()=>{
      const todos = localStorageUtil.getTodos()
      // 提交mutations
      commit(GET_TODOS, {todos})
    }, 1000)
  }
}
