<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="message"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    props: { // 接收addMsg方法
      addMsg:{ // 指定属性名、属性值类型、必要性
        type:Function,
        required:true
      }
    },
    data(){
      return{
        name: '',
        message: ''
      }
    },
    methods: {
      add () {
        // 1，检查输入的合法性
        const name = this.name.trim()
        const message = this.message.trim()
        if(!name || !message){
          alert('姓名或内容不能为空')
          return
        }
        // 2，根据输入的数据，封装成一个msg对象
        const msg = {
          name,
          message
        }
        // 3，添加到msgs中
        this.addMsg(msg)
        // 4，清除输入框
        this.name = ''
        this.message = ''
      }
    }
  }
</script>

<style>

</style>
