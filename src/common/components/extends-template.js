import baseExtend from './base-extend'
export default {
  name: 'extends-template',
  extends: require('./base-extend').default,
  render (h){
    return (
      <div>
        <h2> this is extends-template</h2>
        <i-button type='success' onClick={this.bind.bind(this)}>console in template</i-button>
      </div>
    )
  }
}
