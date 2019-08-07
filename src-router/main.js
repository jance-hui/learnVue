/*
入口JS：创建Vue实例
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入router

/* eslint-disable no-new */
new Vue({ // 配置对象的属性都是一些确定的名称，不能随便修改
  el: '#app',
  components: {App}, // 将组建映射成组建标签
  template: '<App/>', // 指定需要渲染到页面的模板
  router,
})
