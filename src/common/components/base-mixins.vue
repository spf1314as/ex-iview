<!-- this is base of extend -->
<template>
  <div>
    <h2>component-name: {{componentName}}</h2>
  </div>
</template>

<script>
import extendMixins from './extend-mixins.js'
export default {
  name: 'base extend',
  data () {
    return {
      name: 'base mixins'
    };
  },
  extends: extendMixins,
  // mixins: [extendMixins],
  components: {
    componentName(){
      let that = this
      return that.name + Date.now();
    }
  },

  computed: {

  },

  filters: {},

  created(){},
}
</script>
<style lang='scss' scoped>
</style>
