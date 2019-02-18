export default {
  methods: {
    consoleTime () {
      console.log(`${Date.now()} from ${this.$options.name}`)
    }
  },
  mounted(){
    console.log(`this is from ${this.$options.name} at mounted`)
  }
}
