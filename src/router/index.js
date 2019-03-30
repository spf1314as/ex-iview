import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: _ => import('@/components/table.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: _ => import('@/components/table.vue')
    },
    {
      path: '/extend',
      name: 'extend',
      component: _ => import('@/components/extend.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: _ => import('@/components/vue-extend.vue')
    }
  ]
})
