<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--使用组件3：使用组件标签-->
    <HelloWorld/>
  </div>
</template>

<script>
  // 使用组件1：import引入组件
  import HelloWorld from './pages/helloWorld/App'
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    // 使用组件2：components映射组件标签
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .logo{
    width: 100px;
  }
</style>
