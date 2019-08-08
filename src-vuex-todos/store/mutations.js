/*
* mutation
* 包含多个由action触发，直接更新state的方法的对象
*/
import {ADD_TODO, DEL_TODO, SELECT_ALL_TODOS, DEL_OK, GET_TODOS} from './mutation-types'

export default {
  // 增加
  [ADD_TODO] (state, {todo}){ // {todo} 接收包装好的todo对象
    state.todos.unshift(todo) // 添加
  },
  // 删除
  [DEL_TODO] (state, {index}){
    state.todos.splice(index, 1) // 删除
  },
  // 全选或全不选
  [SELECT_ALL_TODOS] (state, {isChecked}){
    state.todos.forEach(todo => todo.type = isChecked)
  },
  // 删除选中
  [DEL_OK] (state){
    state.todos = state.todos.filter(todo => !todo.type)
  },
  // 接收todos
  [GET_TODOS] (state, {todos}){
    state.todos = todos
  }
}
