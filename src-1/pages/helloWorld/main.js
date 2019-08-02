/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 将组建映射成组建标签
  template: '<App/>', // 指定需要渲染到页面的模板
})
