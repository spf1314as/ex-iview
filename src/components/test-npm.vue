<!-- this is test npm -->
<template>
  <div class='npm-wrapper'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam iusto iure quasi, labore aut impedit odit! Doloremque enim inventore eaque omnis, illo architecto neque repellendus et odio quisquam autem.
    <h3>
      test props and computed {{showName}}
    </h3>
    <Button @click='showModalFunc(true)'>show modal</Button>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      showModal: false
    }
  },
  props:{
    show: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  computed: {
    showName(){
      return this.show
    }
  },

  filters: {},

  methods: {
    showModalFunc(v){
      this.showModal = v ? v : false
      console.log(this.showModal)
    }
  },

  mounted(){},

  created(){},

  beforeDestroy(){}
}
</script>
<style lang='scss' scoped>
</style>
