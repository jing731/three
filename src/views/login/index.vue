<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
    class="app-nav-warp"
    title="注册/登录"
    left-arrow
    ref="login-form"
    @click-left="$router.back()"
    />
    <!-- 导航栏end -->
    <!-- 输入框 -->
    <van-form
    :show-error-message='false'
    :show-error='false'
    @submit="Onlogin"
    @failed="Onfailed">
  <van-field
    v-model="user.mobile"
    icon-prefix='icon'
    left-icon="shouji"
    name='mobile'
    placeholder="请输入手机号"
    :rules="formRules.mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    icon-prefix='icon'
    name='code'
    left-icon="yanzhengma"
    placeholder="请输入验证码"
    :rules="formRules.code"
  >
   <template #button>
    <van-count-down :time="1000*6" format="ss s" v-if="isCountDownShow"/>
    <van-button v-else size="small" class="send"
    @finish="isCountDownShow = false"
    @click.prevent="OnsendSms" round
    :loading = 'isSendSmsloading'
    >发送验证码</van-button>
   </template>
  </van-field>
  <!-- 按钮 -->
    <div class="app-btn">
      <van-button type="info" class="app-send" block>登录</van-button>
    </div>
    <!-- 按钮end -->
   </van-form>
    <!-- 输入框end -->
  </div>
</template>
<script>
import { login, sendSms } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /\d{6}/, message: '验证码格式错误' }
        ]
      },
      isCountDownShow: false,
      isSendSmsloading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async  Onlogin () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.user)
        console.log(res)
        this.$toast.success('登录成功')
        // 登录成功后将数据存储到容器中
        this.$store.commit('setUser', res.data.data)
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },
    Onfailed (err) {
      console.log(err)
      if (err.errors[0]) {
        this.$toast({
          message: err.errors[0].message,
          position: top
        })
      }
    },
    async OnsendSms () {
      try {
        // 校验手机号
        // this.$refs['login-form']  可以获取login-form的实例
        await this.$refs['login-form'].validate('mobile')
        // 校验通过，发送验证码
        // 验证手机号，先loading
        this.isSendSmsloading = true
        const data = await sendSms(this.user.mobile)
        // 显示倒计时
        this.isCountDownShow = true
        console.log(data)
      } catch (error) {
        let message = ''
        if (error && error.response.status === 429) {
          message = '发送的太频繁了'
        } else if (error.name === 'mobile') {
          message = error.message
        } else {
          message = '发送失败，请重新再试'
        }
        this.$toast({
          message,
          position: top
        })
      }
      // 不管发送成功还是失败，都将loading关闭
      this.isSendSmsloading = false
    }
  }
}
</script>
<style lang="less" scoped>
.app-btn{
  padding: 26px 16px;
  .app-send{
    background: #6db4fb;
    border: none;
    font-size: 16px;
  }
}
.send{
  background: #ededed;
  color: #666666;
  font-size: 12px;
  width: 80px;
  height: 30px;
}
</style>
