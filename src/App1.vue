<template>
  <div>
    <div>
      <!--使用vue-resource发生ajax请求-->
      <p>使用vue-resource发生ajax请求</p>
      <div v-if="!url1">loading...</div><!--请求时显示-->
      <div v-else>使用最多的是<a :href="url1">{{name1}}</a></div><!--请求完成，显示请求结果-->
    </div>
    <p>-----------------------</p>
    <div>
      <!--使用axios发生ajax请求-->
      <p>使用axios发生ajax请求</p>
      <div v-if="!url2">loading...</div><!--请求时显示-->
      <div v-else>使用最多的是<a :href="url2">{{name2}}</a></div><!--请求完成，显示请求结果-->
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data(){
      return{
        url1:'',
        name1:'',
        url2:'',
        name2:''
      }
    },
    mounted () { // 初始化完成之前进行ajax操作
      const ajaxUrl = 'https://api.github.com/search/repositories?q=v&sort=stars'
      // 使用vue-resource发生ajax请求
      this.$http.get(ajaxUrl).then(
        response=>{
          // 请求成功
          const results = response.data
          // 得到排名第一的结果
          const result = results.items[0]
          this.url1 = result.html_url
          this.name1 = result.name
        },
        response=>{
          // 请求失败
          alert('请求失败')
        }
      )
      // 使用vue-resource发生ajax请求
      Axios.get(ajaxUrl).then(response=>{
          // 请求成功
          const results = response.data
          // 得到排名第一的结果
          const result = results.items[0]
          this.url2 = result.html_url
          this.name2 = result.name
        }).catch(error=>{
        // 请求失败
        alert('请求失败')
      })
    }
  }
</script>

<style>

</style>
