<template>
  <div class="login">
    <!-- <h1>{{ msg }}</h1>
    <h2>登录</h2> -->
    <section>
      <div class="container">
        <!-- login -->
        <div class="user singinBx">
            <div class="imgBx"><img src="@/assets/1.png" alt=""></div>
            <div class="formBx">
                <form id="formid" name="f" action="/login" method="POST">
                    <h2>登录</h2>
                    <input style="width: 100%;" type="text" name="" placeholder="用户名">
                    <input type="text" name="" placeholder="密码">
                    <br>
                    <input style="width: 100%;" type="submit" name="" value="登录">
                    <p class="signup">没有账号？<a href="#" @click="changeForm();">注册</a></p>
                </form>
            </div>
        </div>

        <!-- 注册 -->
        <div class="user singupBx">
            <div class="formBx">
                <form action="">
                    <h2>singup</h2>
                    <input type="text" name="" placeholder="用户名">
                    <input type="email" name="" placeholder="邮箱地址">
                    <input type="password" name="" placeholder="密码">
                    <input type="password" name="" placeholder="再次输入密码">
                    <input type="submit" name="" value="注册">
                    <p class="signup">已有账号？<a href="#" @click="changeForm()">登录</a></p>
                </form>
            </div>
            <div class="imgBx"><img src="@/assets/2.png" alt=""></div>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      msg: 'Login page'
    }
  },
  methods: {
    changeForm() {
      console.log('切换布局')
      var container = document.querySelector('.container')
      container.classList.toggle('active')
    },
    doGetRequest() {
      console.log('发起登录请求网络请求')
    },
    doPostRequest() {
      console.log('发起登录请求网络请求')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.login{
  /* color: #42b983; */
  background: #0571ec;
  height: 100%;
}
section {
  position: relative;
  min-height: 100vh;
  /* background: #304156; */
  background: #2b2929;
  /* background: rgb(77, 76, 76); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
section .container {
  position: relative;
  /* width: 800px;
  height: 500px; */
  width: 700px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
section .container .user{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
/* 更改图片  （左侧）*/
section .container .imgBx{
  position: relative;
  width: 50%;
  height: 100%;
  /* background: #fff; */
  transition: .5s;
}
section .container .user .imgBx img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 右侧表单盒子 */
section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: .5s;
}
/* h2 */
section .container .user .formBx form h2{
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;/*大小*/
  letter-spacing: 2px;/* 间距*/
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}
/* 表单文字属性 */
section .container .user .formBx form input{
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline:none;
  box-shadow:none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing:1px;
  font-weight: 300;
}
/* 为登录设置样式 */
section .container .user .formBx form input[type="submit"]{
  max-width: 100px;
  background: #677eff;
  color:#fff;
  cursor:pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: .5s;
}
/* 没有账号时 */
section .container .user .formBx form .signup{
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}
section .container .user .formBx form .signup a{
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}
section .container .singupBx {
  pointer-events: none;
}
section .container.active .singupBx {
  pointer-events: initial;
}
section .container .singupBx .formBx {
  left: 100%;
}
section .container.active .singupBx .formBx {
  left: 0;
}
section .container .singupBx .imgBx {
  left: -100%;
}
section .container.active .singupBx .imgBx {
  left: 0;
}
section .container .singinBx .formBx {
  left: 0;
}
section .container.active .singinBx .formBx {
  left: 100%;
}
section .container .singinBx .imgBx {
  left: 0;
}
section .container.active .singinBx .imgBx {
  left: -100%;
}
@media (max-width: 991px) {
  section .container {
      max-width: 400px;
  }
  section .container .imgBx {
      display: none;
  }
  section .container .user .formBx {
      width: 100%;
  }
}
</style>
