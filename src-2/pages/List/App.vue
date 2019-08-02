<template>
  <div class="col-md-8">
    <h3 class="repay">评论回复:</h3>
    <h2 v-show="msgs.length==0">暂无评论，点击左侧添加</h2>
    <ul class="list-group">
      <Item v-for="(msg, index) in msgs" :key="index" :msg="msg" :index="index" :delMsg="delMsg"/>
    </ul>
  </div>
</template>

<script>
  import Item from '../Item/App'
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    // 声明接收属性，这个属性就会成为组件对象的属性
    props: ['msgs','delMsg'], // 只指定属性名
    data (){

    },
    components: {
      Item
    }
  }
</script>

<style>
  .repay{
    margin-top: 0px;
  }
</style>
