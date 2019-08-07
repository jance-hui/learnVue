/*
入口JS：创建Vue实例
 */
import Vue from 'vue'
//引入vue-resource
import VueResource from 'vue-resource'
import App from './App.vue'

//声明使用vue-resource插件
Vue.use(VueResource) // 内部会给vm对象和组件对象添加一个属性：$http（get()/post()请求方法）

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 将组建映射成组建标签
  template: '<App/>', // 指定需要渲染到页面的模板
})
