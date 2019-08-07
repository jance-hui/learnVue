<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <!--<a href="">{{message.title}}</a>-->
        <!--使用params传递数据二：传参数（使用json格式）-->
        <router-link :to="`/home/msg/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        messages:[]
      }
    },
    mounted () {
      // 模拟ajax请求，从后台获取数据
      setTimeout(() =>{
        const  messages = [{
          title:'msg01',
          id:1
        },{
          title:'msg02',
          id:2
        },{
          title:'msg03',
          id:3
        },{
          title:'msg04',
          id:4
        }]
        this.messages=messages
      } , 1000)
    },
    methods:{
      pushShow(id){
        this.$router.push(`/home/msg/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/msg/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
