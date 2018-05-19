import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import New from '@/components/New'
import UpDate from '@/components/UpDate'
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
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/update/:id',
      name: 'UpDate',
      component: UpDate
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})