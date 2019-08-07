<template>
  <div>
    <div>About</div>
    <!--使用<router-view>标签传递数据三：显示-->
    <p>{{msg}}</p>
  </div>
</template>
<script>
  export default {
    props:{
      // 使用<router-view>标签传递数据二：props接收数据
      msg:String
    }
  }
</script>

<style>

</style>
