<!-- this is base of extend -->
<template>
  <div>
    <h2>component-name: {{componentName}}</h2>
    <Button @click='bind'>click me</Button>
    <i-circle :percent=80>
      <span> 80%</span>
    </i-circle>
  </div>
</template>

<script>
// import extendMixins from './extend-mixins.js'
export default {
  data () {
    return {
      name: 'base extend'
    };
  },
  extends: import('./extend-mixins.js'),
  // extends: require('./extend-mixins.js').default,
  // mixins: [extendMixins],
  components: {

  },
  computed: {
     componentName(){
      let that = this
      return that.name + Date.now();
    }
  },
 methods: {
    bind (){
      console.log('this is bind')
    }
  },
  filters: {},

  created(){},
}
</script>
<style lang='scss' scoped>
</style>
