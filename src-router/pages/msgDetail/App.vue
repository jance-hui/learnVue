<template>
  <div>
    <p>{{$route.params.id}}</p>
    <ul>
      <li>id:{{msgDetail.id}}</li>
      <li>title:{{msgDetail.title}}</li>
      <li>content:{{msgDetail.content}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data (){
      return{
        msgDetail: {
          id:'',
          title:'',
          content:''
        }
      }
    },
    mounted () { // 只执行一次，路径发生改变时，无法调用
      setTimeout(()=>{
        const msgAll = [{
          title:'msg01',
          id:1,
          content:'msg01,xxxxxx'
        },{
          title:'msg02',
          id:2,
          content:'msg02,xxxxxx'
        },{
          title:'msg03',
          id:3,
          content:'msg03,xxxxxx'
        },{
          title:'msg04',
          id:4,
          content:'msg04,xxxxxx'
        }]
        this.msgAll = msgAll
        // 使用params传递数据三：接收参数this.$route.params.xxx
        const id = this.$route.params.id*1 // 防止问文本
        this.msgDetail = msgAll.find(detail => detail.id === id)

      }, 1000)
    },
    watch:{ //使用监视
      $route: function (vul) { // 路由路径(param)发生了改变
        const id = vul.params.id*1
        this.msgDetail = this.msgAll.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>
