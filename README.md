# vue学习

> A Vue.js project

## 创建

``` bash
# 安装依赖
npm install

# 测试环境运行
npm run dev

# 打包
npm run build

# 打包并查看报告
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#一、Vue基础

####1、模板语法：
    v-bind: / : 强制数据绑定
    v-on: / @ 强制事件监听
    {{...}} 向页面输出数据，可调用对象方法
                
####2.计算属性 ：
`computed`

    初始化 和 相关属性发生时执行
    通过get、set实现对属性数据的显示和监视
    
    注：计算属性存在缓存，多次读取只执行一次
                
####3.监视 
`watch配置 / $watch()方法`
    监视指定属性，属性变化时，函数直接调用
                
####4.class 与 style 绑定：
    class绑定： :class="xxx" // xxx可为字符串、对象、数组
    style绑定： :style="{...}" // {...}为json对象
    
####5.条件渲染：v-if / v-else 和 v-show
    为true时显示，否则隐藏
    
    区别：v-if / v-else 结果为false时，在HTML中移除(内存中对象不存在)
          v-show 通过样式显示/隐藏 style="display=none"，内存中存在
    
    注：当需反复变换时，使用v-show，避免内存中反复创建、删除对象
    
####6.列表渲染： v-for
        对数组：v-for="(user, index) in users(数组)" :key="index"
        对对象：v-for="(user, key) in users[0](数组第一个对象)" :key="key"
    
####7.列表搜索、过滤、排序
`filter()`：对数组过滤

`sort()`：对数组排序
                
####8.事件处理
    绑定监听：v-on:xxx="fun" / @xxx="fun" / $xxx="fun(参数)"
        默认事件形参为event，隐含属性对象为$event
    
`事件修饰符`

        .prevent / event.preventDefault() 阻止事件的默认行为
        .stop / event.stopPropagation 阻止事件冒泡
        
`按键修饰符`

        .keycode 操作某个keycode值的键
        .keyName 操作某个按键名的建（少部分）
    
`注：`

        event.target.innerHTML：输出HTML值
        event.target.value：输出内容
    
####9.表单数据绑定
        使用v-model (双向绑定) 自动收集表单数据
    
####10.Vue实例生命周期
    a.初始化状态
        beforeCreated() 刚在内存中创建，还未初始化data、methods
        cerated()       已在内存中创建，且已初始化data、methods，未编译
        beforeMount()   已编译，未挂载带页面
        mounted()       已挂载到页面指定容器中显示
        
    b.更新状态
        beforeUpdate()  状态更新之前，data已更新，页面未更新
        updated()       都已更新
        
    c.销毁状态
        beforeDestory() 实例销毁之前，实例vm仍可用
        destoryed()     已销毁
    
    ·created() / mounted() 方法常用于发送ajax请求、启动定时器等异步任务
    ·beforeDestory() 做收尾工作。如清除定时器
    
####11.Vue动画
    操作 css 的 transtation / animation
    
    基本过渡动画：
        a.目标元素外加transtation标签：<transtation name="xxx"> ... </transtation>
        b.定义 xxx 的 css 样式
        
`transtation过程`：（常用）

        显示enter：
            xxx-enter           显示之前
            xxx-enter-active    显示过程中    
            xxx-enter-to        显示之后
        离开leave：
            xxx-leave           离开之前
            xxx-leave-active    离开过程中
            xxx-leave-to        离开之后
    
####12.过滤器
    对要显示的数据进行特定格式化后再显示
    
    注：为改变源数据，产生了新的对应数据
    
`定义：`
```js
// 定义过滤器
  Vue.filter('filterName', function (value, format='YYYY-MM-DD HH:mm:ss') {
    // return new Value
    return moment(value).format(format);
  })
```     
`使用：`
```html
<div>{{myData | filterName}}</div>
<div>{{myData | filterName(arg)}}</div>
```    
    
####13.指令
`内置指令`
 
    v:text: 更新元素的textContent
    v-html: 更新元素的innerHTML
    v-if:   若为true，当前标签显示在页面上
    v-else: 若为false，当前标签显示在页面上
    v-show: 通过css : display样式显示true/隐藏false标签
    v-for:  遍历数组、对象
    v-on:   绑定监听事件，常用 @ 代替
    v-bind: 强制绑定解析式，可缩写为 :
    v-model:双向绑定数据，常在input中使用
    ref:    指定唯一标识符，vue对象通过 $els 属性，访问该对象
    v-cloak:防止闪现，与 css 配合：[v-cloak] {display : none}
    
`自定义指令`

    注册： 全局指令
            Vue.directive('指令名', function(el, binding){
                //将字符串全改为大写
                el.innerHTML = binding.value.toupperCase()
            })
           局部指令
           directives : {
               '指令名' : {
                   bind (el, binding) {
                     //将字符串全改为小写
                     el.innerHTML = binding.value.toLowerCase()
                   }
               }
            }
    使用： 
            <p v-指令名="所传数据"></p>
    
####14.自定义插件
    Vue插件是一个包括install方法的对象；
    
    通过install方法给Vue 或 Vue 实例添加方法，定义全局指令等。
                
#二、Vue组件化编码
####1. .vue文件结构
```vue
<template>
    <!--写 HTML 代码-->
</template>

<script >
    // 写 js 代码
    export default { // 向外默认暴露一个配置对象，与vue一致
    }
</script>

<style>
    /*写 css 代码*/
</style>
```    
####2.Vue项目创建、打包、发布
`创建`

    npm install -g vue-cil      // 使用vue-cli脚手架创建项目
    npm install                 // 安装依赖
    npm run dev / npm start     // 运行开发环境
`打包`

    npm run bulid               // 生成dist打包文件夹
`发布`

    静态发布：
        npm install -g serve    // 安装serve
        npm dist                // 发布
    
    动态发布：
        a.修改配置wbepack文件夹下 prod.conf.js 文件下新增
            output:{
                publicPath : '/xxx/'    // 打包文件名
            }
        b.npm run bulid         // 重新打包
        c.修改 dist 文件夹名为项目名 xxx
        d.拷贝至 Tomcat 动态服务器的 webapps 目录下：http"//localhost:8080/xxx 访问    
    
####3.代码规范检查工具eslint
`提供以下支持：`

        ES 、 TSX 、 style检查 、 自定义错误与提示
    
`提供以下校验：`

        a.语法错误检验
        b.不重要或丢失标点符号，如 ;
        c.无法运行到代码块
        d.未被使用的参数提醒
        e.确保样式统一规则
        f.检查变量命名   
    
####4.组件化编码步骤
    a.拆分组件
    b.编写静态组件
    c.编写动态组件
    d.组件间交互
    
####5.本地数据存储
    localStorage(需对数据进行深度监视 deep:true )
```js
/*
* 使用localStorage储存数据的工具类
* 1.向外暴露函数（向外暴露一个功能）
* 2.向外暴露对象（向外暴露多个功能）
 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos){ // 更新数据
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  getTodos(){ // 读取数据
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  },
}
```  
    
####6.组件间通讯
    1.props
    2.自定义事件
    3.消息订阅与发布(PubSub库)
    4.slot插槽
    5.vuex
    

#三、Vue发生ajax请求

####1.vue-resource
    a.下载插件：
```
npm install --save vue-resource
```
    b.使用：main.js中引入，Vue使用：
```js
import VueResource from 'vue-resource'
//声明使用vue-resource插件
Vue.use(VueResource) // 内部会给vm对象和组件对象添加一个属性：$http（get()/post()请求方法）
```   
    c.使用：App.vue中使用：
```js
      this.$http.get(ajaxUrl).then(
        response=>{
          // 请求成功
        },
        response=>{
          // 请求失败
        }
      )
```          
    
####2.Axios
    a.下载插件：
```
npm install --save axios
```

    c.使用：App.vue中使用：
```js
    // 引入库
    import Axios from 'axios'
    // 使用
    Axios.get(ajaxUrl).then(response=>{
      // 请求成功
      }).catch(error=>{
      // 请求失败
      alert('请求失败')
    })
```     

#四、Vue UI组件库
#五、vue-router
#六、通信方式之vuex
