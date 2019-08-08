<template>
  <div>
    <h2>点击了 {{count}} 次，次数是 {{evenOrOdd}}</h2>
    <button @click="addOne">+</button>
    <button @click="cutOne">-</button>
    <button @click="addIfOdd">奇数加一</button>
    <button @click="addIfAsync">异步加一</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        count: 0
      }
    },
    computed:{ // 计算属性
      evenOrOdd(){
        return this.count%2===0?'偶数':'奇数'
      }
    },
    methods:{
      addOne(){ // 增一
        const count = this.count
        this.count = count + 1
      },
      cutOne(){ // 减一
        const count = this.count
        this.count = count - 1
      },
      addIfOdd(){ // 为奇数加一
        const count = this.count
        if(count%2===1){
          this.count = count + 1
        }
      },
      addIfAsync(){ // 异步加一(过一秒才增加)
        setTimeout(()=>{
          const count = this.count
          this.count = count + 1
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>
