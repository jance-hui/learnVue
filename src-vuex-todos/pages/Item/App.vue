<template>
  <!--
  onmouseenter：在鼠标指针移动到元素上时触发
  onmouseleave：在鼠标指针移出元素上时触发
  onmouseover：指鼠标移动都某个指点的HTML标签上，会出现什么效果
  onmouseout：指鼠标移出某个指点的HTML标签后，会出现什么效果
  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.type"><span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delItem">删除</button>
  </li>
</template>

<script>
  export default { // 向外默认暴露一个配置对象（配置对象与Vue一致）
    props:{
      todo:Object,
      index:Number
    },
    data(){
      return{
        bgColor:'white', //默认背景颜色
        isShow:false // 默认是否显示
      }
    },
    methods:{
      handleEnter(isEnter){
        if(isEnter){
          this.bgColor ='#aaaaaa'
          this.isShow = true
        }else {
          this.bgColor ='white'
          this.isShow = false
        }
      },
      delItem(){
        const {todo, index} = this
        if(window.confirm('确认删除${todo.title}?')){
          this.$store.dispatch('delTodo', this.index)
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label{
    cursor: pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button{
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before{
    content: initial;
  }
  li:last-child{
    border-bottom: none;
  }
</style>
