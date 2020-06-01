<template>
  <div class="my-container">
    <div class="user-container">
       <van-cell-group>
  <van-cell
  title="单元格"
  value="内容"
  center
  >
    <div slot="icon">
      <van-image
      width="50"
      height="50"
      round
      fit='cover'
      src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="title">昵称</div>
      <van-button
      round
      size='small'>编辑按钮</van-button>
  </van-cell>
  </van-cell-group>
  <van-grid>
  <van-grid-item>
    <div slot="text">
      <div class="icon">123</div>
      <div class="text">头条</div>
    </div>
  </van-grid-item>
  <van-grid-item>
    <div slot="text">
      <div class="icon">123</div>
      <div class="text">关注</div>
    </div>
  </van-grid-item>
  <van-grid-item>
    <div slot="text">
      <div class="icon">123</div>
      <div class="text">粉丝</div>
    </div>
  </van-grid-item>
  <van-grid-item>
    <div slot="text">
      <div class="icon">123</div>
      <div class="text">获赞</div>
    </div>
  </van-grid-item>
 </van-grid>
    </div>
    <van-grid :column-num="2">
  <van-grid-item
  icon-prefix='icon'
  icon="shoucang"
  text="收藏" />
  <van-grid-item
  icon-prefix='icon'
  icon="lishi"
  text="历史" />
 </van-grid>
 <!-- 页面导航 -->
 <van-cell title="消息通知" is-link to="" />
 <van-cell title="小智同学" is-link to="" />
 <van-cell title="退出登录" is-link to="" />
  </div>
</template>
<script>
export default {
  name: 'myIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
