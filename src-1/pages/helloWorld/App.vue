<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    data () { // 组件中必须写函数
      return {
        msg: 'Hello World !'
      }
    }
  }
</script>

<style>
  .msg{
    color: red;
    font-size: 30px;
  }
</style>

