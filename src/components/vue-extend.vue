<!-- this is vue extend -->
<template>
  <div>
    <h1>this is vue component </h1>
    <vue-defined/>
    <h1>this is solution of pre by v-html</h1>
    <div
      class="container"
      v-html="pre"/>
  </div>
</template>

<script>
export default {
  components: {},

  filters: {},
  data () {
    return {
      pre: ''
    }
  },

  computed: {},
  mounted () {
    setTimeout(_ => {
      this.pre = '<pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam iusto iure quasi, labore aut impedit odit! Doloremque enim inventore eaque omnis, illo architecto neque repellendus et odio quisquam autem.</pre>'
    },1000)
  },
  updated () {
    this.$nextTick(_ => {
      let pre = document.querySelectorAll('.container pre')
      pre.forEach(element => {
        element.style.whiteSpace = 'normal'
      })
    })
  },

  methods: {},
}
</script>
<style scoped>
  .container{
    width: 200px;
    margin: 0 auto;
    background-color: aquamarine;
  }
</style>
