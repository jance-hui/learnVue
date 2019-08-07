<template>
  <div>
    <h2 v-if="firstView">请输入用户名搜索</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a href="user.html_url" target="_blank">
          <img src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import Axios from 'axios'
  export default {
    data(){
      return{
        firstView: true,
        loading:false,
        users:null, // [{url:'', imgUrl:'', name:''}...]
        errorMsg:''
      }
    },
    mounted () {
      // 订阅消息
      PubSub.subscribe('search', (msg, searchName) =>{ // 发ajax请求进行搜索
        const url = 'https://api.github.com/search/users?q='+searchName
        // 更新为请求中状态
        this.loading = true
        this.firstView = false
        this.users = null
        this.errorMsg = ''
        // 发ajax请求
        Axios.get(url).then(response=>{ // 成功，更新状态（成功）
          const result = response.data
          /*const users = results.items.map(item => ({
            url: item.html_url,
            imgUrl: item.avatar_url,
            name: item.login
          }))*/
          const users = result.items
          this.loading = false
          this.users = users
        }).catch(error=>{ // 失败，更新状态（失败）
          this.loading = false
          this.errorMsg = '查询错误'
        })
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
