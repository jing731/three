<template>
  <div class="my-container">
       <van-cell-group class="user-container">
  <van-cell
  class="base-info"
  title="单元格"
  value="内容"
  center
  :border='false'
  >
    <div slot="icon">
      <van-image
      class="avator"
      round
      fit='cover'
      src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="title"
      class="name">昵称</div>
      <van-button
      round
      size='small'
      class="btn">编辑按钮</van-button>
  </van-cell>
  </van-cell-group>
  <van-grid :border='false'>
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
    <van-grid class="btn-4" :column-num="2">
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
 <van-cell class="btn-4" title="小智同学" is-link to="" />
 <van-cell class="logout" title="退出登录"  />
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
<style lang="less" scoped>
.my-container{
.user-container{
  background: url("./banner.png") no-repeat;
  background-size: cover;
  .base-info{
    background-color: unset;
    .avator{
      width: 66px;
      height: 66px;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      margin-right: 10px;
    }
    .name{
      color: #ffffff;
      font-size: 15px;
    }
    .btn{
      height: 16px;
      color: #666666;
      font-size: 10px;
    }
  }
}
/deep/ .van-grid-item__content{
    background-color: unset;
  }
  .logout{
    text-align: center;
    color: tomato;
  }
  .btn-4{
    margin-bottom: 4px;
  }
}

</style>
