<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
    class="app-nav-warp"
    title="注册/登录"
    left-arrow
    @click-left="$router.back()"
    />
    <!-- 导航栏end -->
    <!-- 输入框 -->
    <van-form @submit="Onlogin">
  <van-field
    v-model="user.mobile"
    icon-prefix='icon'
    left-icon="shouji"
    placeholder="请输入手机号"
    :rules="formRules.mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    icon-prefix='icon'
    left-icon="yanzhengma"
    placeholder="请输入验证码"
    :rules="formRules.code"
  >
   <template #button>
    <van-button size="small" class="send" round>发送验证码</van-button>
   </template>
  </van-field>
  <!-- 按钮 -->
    <div class="app-btn">
      <van-button type="info" class="app-send" @click="Onlogin" block>登录</van-button>
    </div>
    <!-- 按钮end -->
   </van-form>
    <!-- 输入框end -->
  </div>
</template>
<script>
import { login } from '@/api/user'
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
      }
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
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
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
