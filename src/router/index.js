import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: _ => import('@/components/form.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: _ => import('@/components/table')
    }
  ]
})
