<template>
  <!-- @click：mintUI自定义点击事件（非Vue原生事件）-->
  <!--若使用Vue原生事件：@click.native（后需加.native）-->
  <mt-button @click="handleClick" type="primary" style="width: 100%">Test</mt-button>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    methods: {
      handleClick () {
        Toast('点击了测试');
      }
    }
  }
</script>

<style scoped>

</style>
