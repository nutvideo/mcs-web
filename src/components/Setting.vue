<template>
  <div class="home">
    <!-- <img src="@/assets/hdcon.png"> -->
    <h1>{{ msg }}</h1>
    <!-- <h2>hdcon</h2> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Setting page'
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
.home{
  /* color: #42b983; */
  background: #0571ec;
}
</style>
