<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--自定义事件方法1、<Top @addTodo="addTodo"/>&lt;!&ndash;给Top标签对象绑定addTodo事件监听&ndash;&gt;-->
      <!--自定义事件方法2，定义唯一标识符，js中使用-->
      <Top ref="top"/>
      <!--使用消息订阅与发布PubSub-->
      <List :todos="todos"/>
      <!--使用slot插槽-->
      <End>
        <input type="checkbox" v-model="isAllCheck" slot="check">
        <span slot="count"><span>已完成{{num}} / 全部{{todos.length}}</span></span>
        <button class="btn btn-danger" v-show="num >0" @click="delOk" slot="delBtn">删除已完成任务</button>
      </End>
    </div>
  </div>
</template>

<script>
  import Top from './pages/Top/App'
  import List from './pages/List/App'
  import End from './pages/End/App'
  import PubSub from 'pubsub-js'
  import localStorageUtil from './utils/localStorageUtil'
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    data(){
      return{
        // 使用本都存储localStorage
        // 从localStorage中读取todos
        // 需得到一个json格式的字符串，若为null时。解析问[]
        //todos: JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
        todos: localStorageUtil.getTodos()
      }
    },
    computed:{
      num(){
        return this.todos.reduce((perTotal, todo) => perTotal + (todo.type?1:0), 0)
      },
      isAllCheck:{
        get(){
          return this.num === this.todos.length
        },
        set(value){ // value为当前checkBox的最新值
          this.selectAll(value)
        }
      }
    },
    mounted(){ // 执行异步代码
      // 自定义事件方法2，给<Top/>标签绑定addTodo事件监听
      this.$refs.top.$on('addTodo',this.addTodo)

      // 订阅消息
      PubSub.subscribe('delTodo', (msg, index) => {
        this.delTodo(index) //回调函数不使用function，使用=>，可使用外部this
      })
    },
    watch: { // 深度监视
      todos:{
        deep: true, // deep为true深度监视
        /*handler: function (val) {
          // 将todos最新值保存到localStorage中,存的是json格式。更改时也需为json格式
          //window.localStorage.setItem('todos_key', JSON.stringify(val))
          localStorageUtil.saveTodos(val)
        }*/
        /*可简化为*/
        handler: localStorageUtil.saveTodos
      }
    },
    methods:{
      // 新增任务
      addTodo(todo){
        this.todos.unshift(todo)
      },
      // 删除指定任务
      delTodo(index){
        this.todos.splice(index,1)
      },
      // 删除所有选中的
      delOk(){
        this.todos = this.todos.filter(todo => !todo.type)
      },
      // 全选或全不选
      selectAll(check){
        this.todos.forEach(todo => todo.type = check)
      }
    },
    components:{
      Top,
      List,
      End
    }
  }
</script>

<style>
  /*app*/
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
