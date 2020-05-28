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
    <van-cell-group>
  <van-field
    v-model="user.mobile"
    icon-prefix='icon'
    left-icon="shouji"
    placeholder="请输入手机号"
  />
  <van-field
    v-model="user.code"
    clearable
    icon-prefix='icon'
    left-icon="yanzhengma"
    placeholder="请输入验证码"
  >
   <template #button>
    <van-button size="small" class="send" round>发送验证码</van-button>
   </template>
  </van-field>
   </van-cell-group>
    <!-- 输入框end -->
    <!-- 按钮 -->
    <div class="app-btn">
      <van-button type="info" class="app-send"  block>登录</van-button>
    </div>
    <!-- 按钮end -->
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
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
