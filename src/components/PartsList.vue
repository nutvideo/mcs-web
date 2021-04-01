<template>
  <div class="bg">
    <!-- <img src="../assets/hdcon.png"> -->
    <el-button @click="doGetRequest()">发送user-get</el-button>
    <el-button @click="doPostRequest()">发送qp-get</el-button>
  </div>
</template>

<script>

import { findUserList } from '@/api/user'
import { findAutoPartsList } from '@/api/parts'
export default {
  name: 'PartsList',
  data() {
    return {
      msg: 'Welcome to PartsList page',
      data: []
    }
  },
  methods: {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .bg{
  // width: 200px;
  // height: 60px;
  background-color: #2f5c97;
}
</style>
