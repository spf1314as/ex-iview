
import Table from '@/components/table.vue'
export default {
  install(Vue){
    Vue.component('vueDefined',Object.assign({}, Table, {
      mounted () {
        console.log('this is component defined by Vue')
      }
    }))
  }
}
