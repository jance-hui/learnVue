<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">查询 Github 用户</h3>
    <div>
      <input type="text" placeholder="输入你要查询的姓名" v-model="searchText"/>
      <button @click="search">查询</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return{
        searchText:''
      }
    },
    methods:{
      search(){
        const searchName = this.searchText.trim()
        if(!searchName){
          alert('请输入姓名')
        }else {
          // 发布消息
          PubSub.publish('search', searchName)
        }
      }
    }
  }
</script>

<style scoped>

</style>
