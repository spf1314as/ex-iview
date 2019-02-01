<!-- this is form component -->
<template>
  <div>
      <Row>
        <Col span='14' offset='5'>
            <Form ref='form' :label-width='120' :model="formData" :rules="validateRules">
              <FormItem label='姓名' prop='name'>
                <Input type="text" :clearable="true" v-model='formData.name' placeholder="输入你的名字。。。"/>
              </FormItem>
              <FormItem label='密码' prop='pwd'>
                <Input type='text' :clearable="true" v-model="formData.pwd" placeholder="请输入你的密码。。。"/>
              </FormItem>
               <FormItem label='年龄' prop='age'>
                <Input type='text' v-model="formData.age"/>
              </FormItem>
              <FormItem>
                <Button type="primary" @click='submit'>提交</Button>
                <Button type="success" @click='reset'>重置</Button>
                <Button ghost type="info" @click='validate'>验证</Button>
              </FormItem>
          </Form>
        </Col>
      </Row>
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    return {
      formData: {
        name: '',
        pwd: '',
        age: 0
      },
      validateRules: {
        name: [
          {required: true, message: '请输入你的名字', trigger: 'blur'},
          {type: 'string', 'max': 6, message: '输入长度过大', trigger: 'change'}
        ],
        pwd: [
          {required: true, message: '请输入你的密码', trigger: 'blur'}
        ],
        age: [
          {validator: that.validateAge, message: 'didi', trigger: 'blur'}
        ]
      }
    }
  },
  components: {},
  computed: {},
  filters: {},
  methods: {
    async submit () {
      let result = await this.$refs.form.validate(res => {
        return res
      })
      console.log(result) //promise
    },
    reset () {
      this.$refs.form.resetFields()
    },
    async validate () {
      let result = await this.$refs.form.validateField('age', res => {
        console.log('test part')
        console.log(res)
        return res
      })
      console.log(result) // undefined
    },
    validateAge (rule, value, callback) {
      console.log(rule)
      console.log(value)
      if (!value) {
        callback(new Error('年龄没有哦'))
      } else {
        callback()
      }
    }
  },
  mounted () {},
  created () {},
  beforeDestroy () {}
}
</script>
<style lang='scss' scoped>
</style>
