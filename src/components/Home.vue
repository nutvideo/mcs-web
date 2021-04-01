<template>
  <!-- <div class="home"> -->
    <el-container class="main-container">
      <el-header class="">
        <div class="left-box">
          <img class="systemimage" src="@/assets/hdcon1.png">
          <!-- background: rgba(11, 42, 70, 0.3); -->
          <span style="width:125px;color: #868787;font-size: 18px;font-family:PingFangSC-Semibold;">控制系统中心</span>
          <img class="headImage" style="margin-left: 20px;" src="@/assets/headImage.png" alt="">
          <span style="margin-left: 12px;font-size: 15px;">
              <font color="#333333" style="color: #868787;font-size: 15px;font-family:PingFangSC-Semibold;">admin 您好,欢迎登录</font>
          </span>
        </div>
        <div class="right-box">
            <!-- <img src="@/assets/hdcon1.png" alt=""> -->
          <el-button type="text" @click="doPostRequest()">
            <i class="fa fa-exclamation-circle" style="color: #868787"/>
            <span style="margin-left: 2px;">
              <font color="#333333;">帮助</font>
            </span>
          </el-button>
          <!-- <router-link to="/login">退出</router-link> -->
          <el-button type="text" @click="logout()" style="margin-left: 20px;">
            <i class="fa fa-power-off" style="color: #ff0000"/>
            <span style="margin-left: 2px;">
              <router-link to="/login"></router-link>
              <font color="#b22222">退出</font>
            </span>
          </el-button>
        </div>
      </el-header>
    <el-container>
      <el-aside width="200px" height="100%">
        <el-button @click="doGetRequest()">发送user-get</el-button>
        <el-button @click="doPostRequest()">发送qp-get</el-button>
      </el-aside>
    <el-main>
      <span>{{data}}</span>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import PartsList from './PartsList'
import { findUserList } from '@/api/user'
import { findAutoPartsList } from '@/api/parts'
export default {
  name: 'Home',
  components: {
    PartsList
  },
  data () {
    return {
      msg: 'Welcome to home App',
      data: []
    }
  },
  methods: {
    doGetRequest () {
      console.log('发起get网络请求')
      findUserList({ }).then((response) => {
        console.log(response)
        this.data = response['data']
      })
    },
    doPostRequest () {
      console.log('发起post网络请求')
      findAutoPartsList({ }).then((response) => {
        console.log(response)
        this.data = response['data']
      })
    },
    logout () {
      window.location.href = '/login'
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
    width: 450px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    .systemimage{
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
    width: 120px;
    height: 60px;
    // background-color: #e7e2e2;
    // img{
    //   width: 60px;
    //   height: 60px;
    //   margin: 0px 0px 10px 10px;
    // }
  }
}
.left-box-head{
  // display: flex;
  justify-content:space-left;
  padding-left: 0;
  background-color: #e7e2e2;
}
.headImage{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // box-shadow:0 0 1px rgb(61, 55, 55) inset;
  box-shadow:2px 2px 5px rgb(54, 42, 42);
}

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
