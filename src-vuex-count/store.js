/*
vuex的核心管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex' // 引入Vuex
// 使用Vuex
Vue.use(Vuex)

// 定义
const state = { // 初始化状态
  count: 0
}
const mutations = {
  // 增加的mutation
  ADDONE(state){
    state.count++
  },
  CUTONE(state){
    state.count--
  }
  // 减少的mutation
}
const actions = {
  addOne({commit}){ // 加一
    // 提交一个mutation，去调用mutation中的方法
    commit('ADDONE')
  },
  cutOne({commit}){ // 减一
    // 提交一个mutation
    commit('CUTONE')
  },
  // 有条件的增加
  addIfOdd({commit, state}){ // 奇数加一，偶数不变
    // 提交一个mutation
    if(state.count%2===1){
      commit('ADDONE')
    }
  },
  addIfAsync({commit}){ // 异步加一
    // action中直接执行异步代码
    // 提交一个mutation
    setTimeout(()=>{
      commit('ADDONE')
    },1000)
  }
}
const getters = {
  evenOrOdd2(state){ // 不需要调用，只需读取属性值
    return state.count%2===0?'偶数':'奇数'
  }
}
// 声明
export default new Vuex.Store({
  state, // 状态
  mutations, //包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个getter计算属性函数的对象
})
