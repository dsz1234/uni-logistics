<template>
  <view class="page-container">
    <!-- 基本信息模块 -->
    <view class="box" v-for="(item, index) in fileDetail" :key="index">
      <view class="header">
        <view class="title">{{ item.title }}</view>
        <image src="../../static/images/btn_add.png" mode="" @click="item.status = !item.status"></image>
      </view>
      <view class="beaner" v-if="item.status">
        <view class="line">{{ detailInfo.startAddress }}8877号</view>
        <view class="line">{{ detailInfo.endAddress }}</view>
      </view>
      <view class="info-list" v-if="item.status">
        <view class="info-list-item">
          <text class="label">任务编号</text>
          <text class="value">{{ detailInfo.transportTaskId }}</text>
        </view>

        <!-- 待提货展示数据 -->
        <template v-if="detailInfo.status === 1">
          <view class="info-list-item">
            <text class="label">联系人</text>
            <text class="value">{{ detailInfo.startHandoverName }}</text>
          </view>
          <view class="info-list-item">
            <text class="label">联系电话</text>
            <text class="value">{{ detailInfo.startHandoverPhone }}</text>
          </view>
          <view class="info-list-item">
            <text class="label">预计提货时间</text>
            <text class="value">{{ detailInfo.planDepartureTime }}</text>
          </view>
          <view class="info-list-item">
            <text class="label">实际提货时间</text>
            <text class="value">{{ detailInfo.planArrivalTime }}</text>
          </view>
        </template>

        <!-- 在途展示数据 -->
        <template v-if="detailInfo.status === 2">
          <view class="info-list-item">
            <text class="label">交付联系人</text>
            <text class="value">{{ detailInfo.finishHandoverName }}</text>
          </view>
          <view class="info-list-item">
            <text class="label">联系电话</text>
            <text class="value">{{ detailInfo.finishHandoverPhone }}</text>
          </view>
          <view class="info-list-item">
            <text class="label">预计送达时间</text>
            <text class="value">{{ detailInfo.planArrivalTime }}</text>
          </view>
          <view class="info-list-item">
            <text class="label">实际送达时间</text>
            <text class="value">{{ detailInfo.actualArrivalTime }}</text>
          </view>
        </template>
      </view>
    </view>
    <!-- 按钮 -->
    <view class="toolbar" v-if="detailInfo.status === 1">
      <navigator :url="`/subpkg_task/delay/index?id=${detailInfo.id}&planDepartureTime=${detailInfo.planDepartureTime}`" hover-class="none" class="button secondary">
        延迟提货
      </navigator>
      <navigator :url="`/subpkg_task/pickup/index?id=${detailInfo.id}`" hover-class="none" class="button primary">提货</navigator>
    </view>
    <view class="toolbar" v-if="detailInfo.status === 2">
      <navigator :url="`/subpkg_task/except/index`" hover-class="none" class="button secondary">异常上报</navigator>
      <navigator :url="`/subpkg_task/delivery/index`" hover-class="none" class="button primary">支付</navigator>
    </view>
    <view class="toolbar" v-if="detailInfo.status === 4">
      <navigator :url="`/subpkg_task/record/index`" hover-class="none" class="button primary block">回车登记</navigator>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { taskDetail } from '@/api/task.js';

// 保存的是任务详情数据
const detailInfo = ref({});
// 获取任务详情数据
const getDetailInfo = async (id) => {
  if (!id) return;
  let res = await taskDetail(id);
  // console.log(res);
  detailInfo.value = res.data;
};
onLoad((e) => {
  getDetailInfo(e.id);
  // console.log(e);
});

const fileDetail = ref([
  { title: '基本信息', status: true },
  { title: '车辆司机信息', status: false },
  { title: '运输路线', status: false },
  { title: '物品信息', status: false },
  { title: '提货信息', status: false }
]);
</script>

<style lang="scss">
.page-container {
  padding: 0 30rpx;
  overflow-x: auto;
  height: calc(100vh - 124px);
  .box {
    background-color: #fff;
    border-radius: 20rpx;
    margin-top: 30rpx;
    padding: 29rpx 34rpx 36rpx 39rpx;
    box-sizing: border-box;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      image {
        width: 50rpx;
        height: 50rpx;
      }
      .title {
        font-weight: 500;
        font-size: 32rpx;
        color: #2a2929;
      }
    }
    .beaner {
      margin: 40rpx 0 40rpx 25rpx;
      border-left: 2rpx dashed #ccc;
      position: relative;
      padding: 10rpx 0;
      .line {
        font-weight: 400;
        font-size: 28rpx;
        color: #818181;
        padding-left: 47rpx;
        &:last-child {
          margin-top: 20rpx;
        }
      }
      &::before {
        content: '起';
        display: block;
        background-color: $uni-black-color;
        color: #fff;
        border-radius: 50%;
        width: 44rpx;
        height: 44rpx;
        text-align: center;
        line-height: 44rpx;
        font-size: 24rpx;
        position: absolute;
        top: 2rpx;
        left: -22rpx;
      }
      &::after {
        content: '止';
        display: block;
        background-color: #ef4f3f;
        color: #fff;
        border-radius: 50%;
        width: 44rpx;
        height: 44rpx;
        text-align: center;
        line-height: 44rpx;
        font-size: 24rpx;
        position: absolute;
        bottom: 0rpx;
        left: -22rpx;
      }
    }
    .info-list {
      padding: 20rpx 10rpx 0;
      margin-top: 40rpx;
      border-top: 2rpx solid #f4f4f4;

      .info-list-item {
        display: flex;
        justify-content: space-between;
        line-height: 1;
        padding: 20rpx 0;
        font-size: $uni-font-size-small;

        .label {
          color: $uni-secondary-text-color;
        }

        .value {
          color: $uni-black-color;
        }
      }
    }
  }
}
.toolbar {
  display: flex;
  justify-content: space-between;
  padding: 30rpx 30rpx calc(env(safe-area-inset-bottom) + 30rpx);
  font-size: $uni-font-size-base;
  background-color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  box-sizing: border-box;

  .button {
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    /* #ifdef APP */
    padding-top: 4rpx;
    /* #endif */
    border-radius: 100rpx;
    font-size: $uni-font-size-big;
  }

  .secondary {
    width: 250rpx;
    color: $uni-black-color;
    background-color: #e6e6e6;
  }

  .primary {
    width: 400rpx;
    color: #fff;
    background-color: $uni-main-color;

    &.block {
      width: 690rpx;
    }

    &[disabled] {
      background-color: #fadcd9;
    }
  }
}
</style>
