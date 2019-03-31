<!-- this is base of extend -->
<template>
  <div>
    <h2>component-name: {{ componentName }}</h2>
  </div>
</template>

<script>
import extendMixins from './extend-mixins.js'
export default {
  name: 'BaseExtend',
  // mixins: [extendMixins],
  components: {
    componentName(){
      let that = this
      return that.name + Date.now()
    }
  },

  filters: {},
  extends: extendMixins,
  data () {
    return {
      name: 'base mixins'
    }
  },

  computed: {

  },

  created(){},
}
</script>
<style lang='scss' scoped>
</style>
