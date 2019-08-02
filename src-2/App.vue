<template>
  <div>
    <!--头部信息-->
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评价</h1>
          </div>
        </div>
      </div>
    </header>
    <!--放一系列组件-->
    <div class="container">
      <Add :addMsg="addMsg"/>
      <List :msgs="msgs" :delMsg="delMsg"/>
    </div>
  </div>
</template>

<script>
  import Add from './pages/Add/App'
  import List from './pages/List/App'

  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    data () {
      return {
        // list信息数组
        msgs: [ // 数据在那个组件，更新数据的函数就应定义在哪个组件
        ]
      }
    },
    methods: {
      // 添加
      addMsg (msg){
        this.msgs.unshift(msg)
      },
      delMsg(index){
        this.msgs.splice(index,1)
      }
    },
    components: {
      Add,
      List
    }
  }
</script>

<style>
  .repay {
    margin-top: 0px;
  }

</style>
