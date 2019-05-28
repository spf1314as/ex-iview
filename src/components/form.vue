<!-- this is form component -->
<template>
  <div>
    <Row>
      <Col
        span="14"
        offset="5">
      <Form
        ref="form"
        :label-width="120"
        :model="formData"
        :rules="validateRules">
        <FormItem
          label="姓名"
          prop="name">
          <Input
            :clearable="true"
            v-model="formData.name"
            type="text"
            placeholder="输入你的名字...">
          </Input>
        </FormItem>
        <FormItem
          label="密码"
          prop="pwd">
          <Input
            :clearable="true"
            v-model="formData.pwd"
            type="text"
            placeholder="请输入你的密码...">
          </Input>
        </FormItem>
        <FormItem
          label="年龄"
          prop="age">
          <Input
            v-model="formData.age"
            type="text">
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="submit">提交</Button>
          <Button
            type="success"
            @click="reset">重置</Button>
          <Button
            ghost
            type="info"
            @click="validate">验证</Button>
        </FormItem>
        <FormItem>
          <RadioGroup v-model.trim="radioValue">
            <Radio
              :label="item.id"
              v-for="(item, index) in radioData"
              :key='index'/>
          </RadioGroup>
        </FormItem>
      </Form>
      </Col>
    </Row>
    <npm-test show="npm"/>
  </div>
</template>

<script>
export default {
  components: {
    NpmTest: _ => import('./test-npm.vue')
  },
  filters: {},
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
      },
      radioData: [
        {id: 111, label: '111'},
        {id: 222, label: '222'}
      ],
      radioValue: ''
    }
  },
  computed: {},
  mounted () {},
  created () {},
  beforeDestroy () {},
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
}
</script>
<style lang='scss' scoped>
</style>
