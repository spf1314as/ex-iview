<!--  -->
<template>
  <div >
    <Modal
        :value="true"
        title="Modal npm package"
        @on-visible-change='dispatch'
       >
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },

  components: {},

  computed: {},

  filters: {},

  methods: {
    dispatch(){
      this.$emit('on-visible-change')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
