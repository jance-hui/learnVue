<template>
  <div class="container">
    <search/>
    <user-main/>
  </div>

</template>

<script>
  import search from './pages/search/App'
  import main from './pages/main/App'
  export default {
    components:{
      search,
      UserMain:main
    }
  }
</script>

<style scoped>

</style>
