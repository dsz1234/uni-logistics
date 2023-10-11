<template>
  <view class="page-container">
    <view class="entry-list">
      <uni-list>
        <uni-list-item to="/subpkg_user/truck/index" showArrow title="换绑手机" />
        <uni-list-item to="/subpkg_user/task/index" showArrow title="修改密码" />
        <uni-list-item to="/subpkg_user/settings/index" showArrow title="消息通知设置" />
        <uni-list-item to="/subpkg_user/settings/index" showArrow title="修改密码" />
        <uni-list-item to="/subpkg_user/settings/index" showArrow title="清理缓存" />
      </uni-list>
    </view>
    <view class="goOut">退出</view>
  </view>
</template>

<script setup></script>

<style lang="scss">
.page-container {
  padding: 0 31rpx 0 29rpx;
  overflow: hidden;
}
.entry-list {
  margin: 40rpx 0 80rpx 0;
  border-radius: 16rpx;
  overflow: hidden;
}
.goOut {
  background-color: #fff;
  border-radius: 16rpx;
  width: 690rpx;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
}
</style>
