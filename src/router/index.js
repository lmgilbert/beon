import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import portfolio from '@/components/portfolio'
import project from '@/components/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/portfolio/:id',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/project',
      name: 'project',
      component: project
    }
  ]
})
