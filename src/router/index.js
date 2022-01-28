import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import About from '~/views/About'
import Food from '~/views/Food'
import Table from '~/views/Table'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/food',
      component: Food
    },
    {
      path: '/table',
      component: Table
    }
  ]
})
