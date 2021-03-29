<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>登录</h2>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Login page'
    }
  },
  methods: {
    doGetRequest () {
      console.log('发起登录请求网络请求')
    },
    doPostRequest () {
      console.log('发起登录请求网络请求')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
