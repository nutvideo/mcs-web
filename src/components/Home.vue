<template>
  <!-- <div class="home"> -->
    <el-container class="main-container">
      <el-header class="">
        <div class="left-box">
          <img src="@/assets/hdcon1.png">
          <span>会议控制系统</span>
        </div>
        <div class="right-box"></div>
      </el-header>
    <el-container>
      <el-aside width="200px" height="100%">Aside</el-aside>
    <el-main>
      <el-button @click="doGetRequest()">发送get</el-button>
    </el-main>
  </el-container>
</el-container>
    <!-- <img src="@/assets/hdcon.png">
    <h1>{{ msg }}</h1>
    <h2>hdcon</h2>
    <el-button @click="doGetRequest()">发送get</el-button>
    <el-button @click="doPostRequest()">发送get</el-button> -->
  <!-- </div> -->
</template>

<script>
import { findUserList } from '@/api/user'
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
      findUserList({ }).then((response) => {
        console.log(response)
      })
    },
    doPostRequest () {
      console.log('发起post网络请求')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-header{
  // background-color: #ffffff;
  display: flex;
  justify-content:space-between;
  padding-left: 0;
  // color: rgb(226, 215, 215);
  align-items: center;
  font-size: 20px;

  .left-box{
    display: flex;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
      // margin: 0px 0px 10px 10px;
    }
    span{
      margin-left: 15px;
    }
  }
  .right-box{
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #488a63;
  }
}
/* .left-box{
  width: 200px;
  height: 60px;
  background-color: #2f5c97;
}
.right-box{
  width: 200px;
  background-color: #488a63;
} */
.main-container{
  height: 100%;
}
.el-header, .el-footer {
    background-color: #ffffff;
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
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
