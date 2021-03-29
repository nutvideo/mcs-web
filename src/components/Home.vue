<template>
  <div class="home">
    <!-- <el-container>
      <el-header>
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/setting">设置</router-link>
        </div>
      </el-header>
    <el-container>
      <el-aside width="200px" height="100%">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->
    <img src="@/assets/hdcon.png">
    <h1>{{ msg }}</h1>
    <h2>hdcon</h2>
    <el-button @click="doGetRequest()">发送get</el-button>
    <el-button @click="doPostRequest()">发送get</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to home App'
    }
  },
  methods: {
    doGetRequest () {
      console.log('发起get网络请求')
    },
    doPostRequest () {
      console.log('发起post网络请求')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
