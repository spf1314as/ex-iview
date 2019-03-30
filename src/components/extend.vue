<!-- this is test extend and mixins  -->
<template>
  <div class='extends-wrapper'>
    <h1>this is test extend </h1>
      <Button type='primary' @click='consoleTime'>console</Button>
      <extends-template/>
      <!-- <extends-component></extends-component> -->
    <div id="mounted">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam, alias amet provident magnam doloribus error esse repudiandae temporibus iste natus nemo nam qui commodi. Quod dolore modi corporis ipsam?
    </div>
  </div>
</template>

<script>
import baseExtend from '@/common/components/base-extend.vue'
import baseMixins from '@/common/components/base-mixins.vue'
import Vue from 'vue'
let Extend = Vue.extend({
      name: 'extend',
      mounted () {
        console.log('i am vue.extend!!!')
      },
      template: "<div><h1>iam vue.extend !!!</h1></div>"
  })
export default {
  name: 'extend',
  data () {
    return {
    }
  },
  extends: baseExtend,
  mixins: [baseMixins],

  components: {
    extendsTemplate: _ => import('@/common/components/extends-template.js')
  },

  computed: {},

  filters: {},

  methods: {
    // consoleTime () {
    //   console.log(`this is ${this.$options.name}`)
    // }
  },

  mounted () {
    console.log('parent mounted')
    let el = document.getElementById('mounted')
    // 1
    new Extend ({
      data: {
        time: Date.now()
      }
    }).$mount('#mounted')
    // 2
    // let dom = new Extend({
    //   data: {
    //     time: Date.now()
    //   }
    // }).$mount()
    // el.appendChild(dom.$el)

  },
  created () {
    console.log('parent created ')


  },
  destroyed () {
    console.log('parent destroyed')
  },
  updated () {
    console.log('parent updated')
  }

}
</script>
<style lang='scss' scoped>
</style>
