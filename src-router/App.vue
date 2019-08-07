<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--<a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
          <a href="#/home" class="list-group-item">Home</a>-->
          <!--生成路由链接-->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--<div>
              <h2>about组件</h2>
              <p>接受外部数据：123</p>
              <input type="text">
            </div>-->
            <!--显示路由组件界面-->
            <!--使用<router-view>标签传递数据一： msg="xxx"(xxx可为字符串。若为变量msg前加:)-->
            <router-view msg="aaa"></router-view>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>
