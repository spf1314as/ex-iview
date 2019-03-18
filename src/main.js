// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
require('echarts')
import 'iview/dist/styles/iview.css'

import vueExtend from '@/common/components/vue-defined.js'

Vue.config.productionTip = false
Vue.use(iView)
Vue.config.devtool = true
Vue.use(vueExtend)
// 避免eslint 进行检测
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
