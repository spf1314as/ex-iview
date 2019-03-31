// import baseExtend from './base-extend'
export default {
  name: 'extends-template',
  extends: require('./base-extend').default,
  render (h){
    let time = this.time
    return (
      <div>
        <h2> this is extends-template</h2>
        <h3>time:{time}</h3>
        <i-button type='success' onClick={this.bind.bind(this)}>console in extends-template</i-button>
      </div>
    )
  },
  data () {
    return {
      time: 0
    }
  },
  mounted () {
    console.log('child mounted')
  },
  created () {
    console.log('child created ')
  },
  destroyed () {
    console.log('child destroyed')
  },
  updated () {
    console.log('child updated')
  }
}
