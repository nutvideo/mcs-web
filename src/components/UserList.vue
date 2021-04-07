<template>
  <div class="bg">
    <el-row :gutter="20" style="margin-left: 0px; margin-right: 0px; height: 100%">
      <el-col :xs="24" :sm="24" :md="4" :lg="4" style="padding-left: 0px; padding-right: 0px">
        <div class="nav-header-bg">
          <div class="header-div-title">
            <p>用户列表</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="20" style="padding-left: 0px; padding-right: 0px">
        <div class="nav-header-bg">
          <el-button @click="doGetRequest()">发送user-get</el-button>
        </div>
      </el-col>
    </el-row>
    {{data}}
    <el-row :gutter="20" style="margin-top: 10px;margin-left: 0px; margin-right: 0px; height: 100%">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" style="padding-left: 0px; padding-right: 0px">
        <!-- {{data}} -->
        <el-table ref="multipleTable" :data="data" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="index" width="50" label="序号"></el-table-column>
          <!-- <el-table-column type="selection" width="55"/> -->
          <el-table-column width="100px" align="center" prop="name" label="名称"/>
          <el-table-column align="left" label="名称" >
            <template slot-scope="scope">
              <span>{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" label="昵称" >
            <template slot-scope="scope">
              <span>{{ scope.row.nickname }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { findUserList } from '@/api/user'
export default {
  name: 'UserList',
  data() {
    return {
      msg: 'Welcome to UserList page',
      data: [],
      selectPartsArr: []
    }
  },
  created() {
    this.doGetRequest()
  },
  methods: {
    handleSelectionChange(val) {
      this.selectPartsArr = val
      console.log('全选会场设备')
      console.log(val)
      console.log(this.selectPartsArr)
    },
    doGetRequest() {
      console.log('发起get网络请求')
      findUserList({ }).then((response) => {
        console.log(response)
        console.log(response['data'])
        console.log(response['data']['data'])
        console.log(response['data']['data']['content'])

        // this.data = response['data']['data']['content']
      })
    },
    doPostRequest() {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.bg{
   margin-top: 10px;
  // background-color: #2f5c97;
}
.title-bg{
  text-align: left;
  width: 200px;
  height: 80px;
  background-color: #6aa57e;
  font-size: 18px;
  font-weight: bold;
  // line-height: 24px;
  color: #1b1b1b;
}
.nav-header-bg {
    /* 第2个蓝色条 */
    width: 100%;
    height: 50px;
    background-color: #CCCCCC;
    border-radius: 2px;
}

.header-div-title{
  margin-left: 10px;
  text-align: left;
  position: absolute;
  // width: 100%;
  width: 100px;
  // background-color: #61d387;
  font-size: 15px;
  font-weight: bold;
  color: #1b1b1b;
}
</style>
