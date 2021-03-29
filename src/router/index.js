import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Setting from '@/components/Setting'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    // {
    //   path: '/setting',
    //   name: 'Setting',
    //   component: Setting
    // }
  ]
})
