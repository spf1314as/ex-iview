<!-- this is form component -->
<template>
  <div>
    <Table stripe :columns="mycolumn" :data="data2"></Table>
  </div>
</template>

<script>
import Time from '@/util/common.js'
export default {
  data () {
    let that = this
     return {
                open: '',
                data2:
                [
                    {
                        name:'kkk',
                        age: 18,
                        sexy:'female',
                        date: new Time().format()
                    }
                ],
                self: this,
                count: 0,
                mycolumn:[
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title:'性别',
                        key: 'sexy'
                    },
                    {
                        title: '日期',
                        key: 'date'

                    },
                    {
                        title: '操作',
                        key: 'do',
                        render:(h, params) => {
                            // 用的h是组件返回的 这个是vnode作用域是在h所在的组件 可以把h改成 this.$createElement
                            let w = this.$createElement // 修改后能够使用$refs获取到组件
                            return w('i-switch',{
                                props:{
                                    'value': this.open
                                },
                                ref: 'switch',
                                on:{
                                    'on-change':(state) =>{
                                        console.log(this.open)
                                        console.log(state + 'state')
                                        this.getData().then( res => {
                                            this.data2[0].age = Date.now()
                                            this.open = false // 依赖收集
                                            // console.log(this.$refs.switch.value = true)
                                        })
                                    }
                                }
                            })
                        }
                    },
                    {
                        title: "提交",
                        key: 'commit',
                        render(h, props) {
                            return (<i-switch value={that.open} onOn-change={that.testJsx.bind(that)}>提交</i-switch>)
                        }
                    }
                ]
            }
  },
  components: {},
  computed: {},
  filters: {},
  methods: {
    getData(){
        let that = this;
        return new Promise(resolve => {
            setTimeout( _ => {
                resolve(new Date().getFullYear())
            },3*1000)
        })
    },
    testJsx(){
        this.$Notice.success({
            titile: 'test jsx',
            desc: 'hello world'
        })
        setTimeout( _ => {
            this.open = false
            console.log(this.open)
        },2*1000)
    }
  },
  mounted(){},
  created(){},
  beforeDestroy(){},
}
</script>
<style  scoped>
</style>
