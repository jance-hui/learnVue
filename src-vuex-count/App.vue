<template>
  <div>
    <h2>vuex:点击了 {{count}} 次，次数是 {{evenOrOdd}}</h2>
    <button @click="addOne">+</button>
    <button @click="cutOne">-</button>
    <button @click="addIfOdd">奇数加一</button>
    <button @click="addIfAsync">异步加一</button>
  </div>
</template>

<script>
  // 优化一，引用vuex映射函数，用于简化编码
  import {mapState, mapActions, mapGetters} from 'vuex'
  export default {
    computed:{ // 计算属性
      /*count(){
        return this.$store.state.count
      },
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }*/
      // 优化二，
      ...mapState(['count']), //mapState返回对象
      ...mapGetters({evenOrOdd2:'evenOrOdd'}) // 对应方法名不一样时，使用对象（尽量保持一致）
    },
    methods:{
      /*addOne(){ // 加一
        // 通知Vuex去更新
        this.$store.dispatch('addOne') // 分发事件，触发store中的对应的action调用
      },
      cutOne(){ // 减一
        this.$store.dispatch('cutOne') // 分发事件，触发store中的对应的action调用
      },
      addIfOdd(){ // 为奇数加一
        this.$store.dispatch('addIfOdd') // 分发事件，触发store中的对应的action调用
      },
      addIfAsync(){ // 异步加一(过一秒才增加)
        this.$store.dispatch('addIfAsync') // 分发事件，触发store中的对应的action调用
      }*/
      // 优化二
      ...mapActions(['addOne', 'cutOne', 'addIfOdd', 'addIfAsync'])
    }
  }
</script>

<style scoped>

</style>
