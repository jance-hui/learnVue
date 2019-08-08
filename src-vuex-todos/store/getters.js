/*
* 包含所有基于state的getter计算属性对象
*/
export default {
  // 总数量
  totalCount (state) {
    return state.todos.length
  },
  // 完成数量
  okCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.type?1:0), 0)
  },

  // 判断是否全部选中
  isAllSelect(state, getters){
    return getters.totalCount === getters.okCount && state.todos.length > 0
  }
}
