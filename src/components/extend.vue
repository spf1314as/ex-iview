<!-- this is test extend and mixins  -->
<template>
  <div class='extends-wrapper'>
    <h1>this is test extend </h1>
      <Button type='primary' @click='consoleTime'>console</Button>
      <extends-template/>
      <class-component></class-component>
  </div>
</template>

<script>
import baseExtend from '@/common/components/base-extend.vue'
import baseMixins from '@/common/components/base-mixins.vue'
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
    console.log('this is form extend at mounted')
  }

}
</script>
<style lang='scss' scoped>
</style>
