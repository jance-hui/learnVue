/*路由器模块*/
// 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import About from '../pages/about/App'
import Home from '../pages/home/App'
import Msg from '../pages/msg/App'
import News from '../pages/news/App'
import MsgDetail from '../pages/msgDetail/App'

// 使用路由
Vue.use(VueRouter)
// 1.创建路由器的构造函数
export default new VueRouter({
  // 2.配置n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      // 配置嵌套路由
      children:[
        {
          path: '/home/news', // path最左侧 / 永远代表根路径
          component: News
        },{
          path: 'msg', // 路径简易写法
          component: Msg,
          children:[
            {
              // 使用params传递数据一：配置路由
              path: 'detail/:id',
              component: MsgDetail,
            }
          ]
        }, {
          path: '', // 默认显示
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/', // 访问根目录
      redirect: '/home' // 重定向home
    }
  ]
})
