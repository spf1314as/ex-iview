<!-- this is pug template -->
<template lang='pug'>
  .pug-wrapper
    h1 pug is called "jade" long before!
    span {{Date.now()}}
    p this is pug template!!
</template>

<script>
export default {
  components: {},
  filters: {},
  data () {
    return {
    }
  },

  computed: {},

  mounted(){},

  created(){},

  methods: {},
}
</script>
<style lang='scss' scoped>
  .pug-wrapper{
    background-color:#f5f7f9;
    font-size: 18px;
    margin: 10px 0;
  }
</style>
