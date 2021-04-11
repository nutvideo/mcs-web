<template>
  <!-- <div class="home"> -->
    <!-- <img src="@/assets/hdcon1.png" alt=""> -->
    <el-container class="main-container">
      <el-header class="">
        <div class="left-box">
          <img class="systemimage" src="@/assets/hdcon1.png">
          <span style="width:125px;color: #868787;font-size: 18px;font-family:PingFangSC-Semibold;">控制系统中心</span>
          <!-- <img class="headImage" style="margin-left: 20px;" src="@/assets/headImage.png" alt="">
          <span style="margin-left: 12px;font-size: 15px;">
              <font color="#333333" style="color: #868787;font-size: 15px;font-family:PingFangSC-Semibold;">admin 您好,欢迎登录</font>
          </span> -->
        </div>
        <div class="right-box">
          <el-button type="text" @click="cleanData()">
            <i class="fa fa-exclamation-circle" style="color: #868787"/>
            <span style="margin-left: 2px;">
              <font color="#333333;">清空数据</font>
            </span>
          </el-button>
          <el-button type="text" @click="doPostRequest()">
            <i class="fa fa-exclamation-circle" style="color: #868787"/>
            <span style="margin-left: 2px;">
              <font color="#333333;">帮助</font>
            </span>
          </el-button>
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
      <el-aside :width="isCollapse ?'60px':'200px'" height="100%">
        <div class="toggle_box" @click="toggleBoxForCollapse()">|||</div>
        <!-- 网络数据 -->
        <!-- <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :default-active="activePath"
          :collapse-transition="false"
          :unique-opened="true"
          :router="true">
          <MenuTreeList :menuList="this.dataMenuList"></MenuTreeList>
        </el-menu> -->
        <!-- 固定数据 -->
        <el-menu @select="handleSelect" :unique-opened="true" :collapse-transition="false" :collapse="isCollapse" default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#ffffff" text-color="#868787" active-text-color="#383b3f">
          <el-submenu index="1">
            <template slot="title">
              <i class="fa fa-th-list"></i>
              <span style="margin-left: 15px;">会议管理</span>
            </template>
            <el-menu-item title="分组1" index="1-1">
              <i class="fa fa-users"></i>
              <span>会议列表</span>
            </el-menu-item>
            <el-menu-item title="分组1" index="1-2">
              <i class="fa fa-cubes"></i>
              <span>mcu列表</span>
            </el-menu-item>
            <el-menu-item title="分组1" index="1-3">
              <i class="fa fa-address-book-o"></i>
              <span>会场列表</span>
            </el-menu-item>
            <el-menu-item title="分组1" index="1-4">
              <i class="fa fa-wrench"></i>
              <span>相关设置</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="fa fa-address-card-o"></i>
              <span style="margin-left: 15px;">业务管理</span>
            </template>
            <el-menu-item title="分组2" index="2-1">
              <i class="fa fa-user-circle"></i>
              <span>用户列表</span>
            </el-menu-item>
            <!-- <el-menu-item title="分组2" index="2-2">
              <i class="fa fa-taxi"></i>
              <span>汽配列表</span>
            </el-menu-item> -->
          </el-submenu>
        </el-menu>
        <!-- <el-button @click="doGetRequest()">发送user-get</el-button>
        <el-button @click="doPostRequest()">发送qp-get</el-button> -->
      </el-aside>
    <el-main>
      <div class="main-bg">
         <PartsList v-show="PartsListPageStatus"></PartsList>
         <UserList v-show="UserListPageStatus"></UserList>
      <!-- <span>{{data}}</span> -->
      </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

import PartsList from './PartsList'
import UserList from './UserList'
import { findUserList } from '@/api/user'
import { findAutoPartsList } from '@/api/parts'
import MenuTreeList from './MenuTree'
export default {
  name: 'Main',
  components: {
    PartsList,
    UserList,
    MenuTreeList
  },
  data() {
    return {
      msg: 'Welcome to home App',
      data: [],
      UserListPageStatus: false,
      PartsListPageStatus: false,
      isCollapse: false,
      dataMenuList: [
        {
          'id': 1,
          'parentId': 0,
          'menuName': '系统管理',
          'url': '',
          'icon': 'el-icon-setting',
          'orderNum': 1,
          'open': 1,
          'disabled': false,
          'perms': null,
          'type': 0,
          'children': [
            {
              'id': 253,
              'parentId': 1,
              'menuName': '欢迎页面',
              'url': '/welcome',
              'icon': 'el-icon-star-off',
              'orderNum': 1,
              'open': 0,
              'disabled': false,
              'perms': 'welcome:view',
              'type': 0,
              'children': []
            }
          ]
        }
      ]
    }
  },
  methods: {
    cleanData() {
      this.data = []
    },
    handleSelect(key, keyPath) { // 点击了哪个
      console.log(key)
      console.log(keyPath)
      if (keyPath[1] === '1-1') {
        this.doGetRequest()
      }
      if (keyPath[1] === '1-2') {
        this.doPostRequest()
      }
      if (keyPath[1] === '1-3') {
        this.doPostRequest()
      }
      if (keyPath[1] === '1-4') {
        this.doPostRequest()
      }
      if (keyPath[1] === '2-1') {
        console.log('点击了用户查询')
        this.UserListPageStatus = true
        this.PartsListPageStatus = false
        this.doGetRequest()
      }
      if (keyPath[1] === '2-2') {
        console.log('点击了配件查询')
        this.UserListPageStatus = false
        this.PartsListPageStatus = true
        // this.doPostRequest()
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    doGetRequest() {
      console.log('发起get网络请求')
      findUserList({ }).then((response) => {
        console.log(response)
        this.data = response['data']
      })
    },
    doPostRequest() {
      console.log('发起post网络请求')
      findAutoPartsList({ }).then((response) => {
        console.log(response)
        this.data = response['data']
      })
    },
    logout() {
      window.location.href = '/login'
    },
    toggleBoxForCollapse() { // 取反默认为：
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-header{
  background-color: #383b3f;
  display: flex;
  justify-content:space-between;
  padding-left: 0;
  align-items: center;
  font-size: 20px;
  .left-box{
    width: 450px;
    display: flex;
    align-items: center;
    // background-color: #ffffff;
    .systemimage{
      width: 60px;
      height: 60px;
    }
    span{
      margin-left: 15px;
    }
  }
  .right-box{
    display: flex;
    align-items: center;
    // background-color: #383b3f;
    // width: 120px;
    width: 220px;
    height: 60px;
    // background-color: #e7e2e2;
    // img{
    //   width: 60px;
    //   height: 60px;
    //   margin: 0px 0px 10px 10px;
    // }
  }
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

.test {
    // background-color: #145ead;
}
// 侧边栏
  .el-aside {
    background-color: #383b3f;
    color: #333;
    // text-align: center;
    line-height: 200px;
    .toggle_box{
      // line-height: 200px;
      height: 30px;
      background-color: #383b3f;
      font-size: 15px;
      font-weight: bold;
      line-height: 24px;
      color: #ffffff;
      letter-spacing: 0.2em;
      text-align: center;
      cursor: pointer;
    }
    .el-menu{
      border-right: none;
    }
  }

  // 内容主体
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 360px;
  }
  .main-bg{
    // background-color: #2e70b3;
    height: 100%;
  }
  // body > .el-container {
  //   margin-bottom: 40px;
  // }
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
