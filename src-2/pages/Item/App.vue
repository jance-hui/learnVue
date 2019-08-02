<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascropt:;" @click="delMessage(index)">删除</a>
    </div>
    <p class="user"><span>{{msg.name}}</span><span>说：</span></p>
    <p class="centence">{{msg.message}}</p>
  </li>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    props: { //指定属性名和属性值的类型
      msg: Object,
      index:Number,
      delMsg :{ // 指定属性名、属性值类型、必要性
        type:Function,
        required:true
      }
    },
    methods:{
      delMessage(index){
        const {message} = this
        if(window.confirm('确定删除${message.name}的评论吗？'))
        this.delMsg(index)
      }
    }
  }
</script>

<style>
li {
  transition: .5s;
  overflow: hidden;
}
.handle{
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}
.handle a{
  display: block;
  text-decoration: none;
}
.list-group-item .centence {
  padding: 0px 50px;
}
.user {
  font-size: 22px;
}
</style>
