/*
vuex的核心管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex' // 引入Vuex
// 引入子js
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 使用Vuex
Vue.use(Vuex)
// 声明
export default new Vuex.Store({
  state, // 状态
  mutations, //包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个getter计算属性函数的对象
})
