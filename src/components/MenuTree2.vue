<template>
  <div class="bg">
    {{ 2222222222 }}
    {{ menuList.length }}
    <!-- 2222 -->
    <template v-for="item in this.menuList">
      <el-submenu :disabled="item.disabled" :index="item.id+''" :key="item.id+''" v-if="item.children.length>0">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.menuName }}</span>
        </template>
        <MenuTree :menuList="item.children"></MenuTree>
      </el-submenu>
      <el-menu-item
        v-else
        :disabled="item.disabled"
        :index="item.url+''"
        :route="item.url+''"
        :key="item.id"
        @click="savePath(item.url)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.menuName }}</span>
      </el-menu-item>
    </template>

    <!-- ============================= -->
    <template>
       <el-menu :unique-opened="true" :collapse-transition="false" :collapse="isCollapse" default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#ffffff" text-color="#868787" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>业务管理</span>
            </template>
            <el-menu-item title="分组2" index="1-1">
              <i class="el-icon-location"></i>
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item title="分组2" index="1-1">
              <i class="el-icon-location"></i>
              <span>汽配列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item title="分组2" index="2-1">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
    </template>
  </div>
</template>

<script>

// import { findUserList } from '@/api/user'
// import { findAutoPartsList } from '@/api/parts'
export default {
  name: 'MenuTree',
  props: ['menuList'],
  data () {
    return {
      msg: 'Welcome to PartsList page',
      data: []
    }
  },
  methods: {
    // doGetRequest () {
    //   console.log('发起get网络请求')
    //   findUserList({ }).then((response) => {
    //     console.log(response)
    //     this.data = response['data']
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .bg{
  background-color: #4e83c4;
}
  /*实现了一个溢出处理*/
  .el-menu--collapse span,
  .el-menu--collapse i.el-submenu__icon-arrow {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
</style>
