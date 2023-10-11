<template>
  <view class="page-container">
    <view class="title">
      <image src="../../static/images/btn_shangyue.png" mode=""></image>
      <text class="dev">2020年2月</text>
      <image src="../../static/images/btn_xiayue.png" mode=""></image>
    </view>
    <view class="navFile">
      <view class="list">
        <view class="one">18</view>
        <view class="two">任务总量</view>
      </view>
      <view class="list">
        <view class="one">18</view>
        <view class="two">任务总量</view>
      </view>
      <view class="list">
        <view class="one">18</view>
        <view class="two">任务总量</view>
      </view>
    </view>
    <view class="timeData"></view>
  </view>
</template>

<script setup></script>

<style lang="scss">
.page-container {
  overflow: hidden;
}
.title {
  width: 150px;
  display: flex;
  align-items: center;
  margin: 64rpx auto 45rpx;
  image {
    width: 60rpx;
    height: 60rpx;
  }
}
.navFile {
  background-color: #fff;
  width: 100%;
  height: 202rpx;
  display: flex;
  justify-content: space-around;
  .list {
    text-align: center;
    .one {
      margin: 42rpx 0 28rpx 0;
      font-size: 36rpx;
      font-weight: 600;
    }
    .two {
      font-size: 24rpx;
    }
  }
}
.timeData {
  width: 100%;
  height: 686rpx;
  background: #ffffff;
  margin-top: 43rpx;
}
</style>
