<template>
  <view class="page-container page-content">
    <swiper class="truck-pictures">
      <swiper-item v-for="(item, index) in truckList.pictureList" :key="index">
        <image class="picture" :src="item.url" mode=""></image>
      </swiper-item>
    </swiper>

    <uni-list>
      <uni-list-item :border="false" title="车辆编号" :rightText="truckList.id"></uni-list-item>
      <uni-list-item :border="false" title="车辆号牌" :rightText="truckList.licensePlate"></uni-list-item>
      <uni-list-item :border="false" title="车型" :rightText="truckList.truckType"></uni-list-item>
      <uni-list-item :border="false" title="所属机构" :rightText="truckList.currentOrganName"></uni-list-item>
      <uni-list-item :border="false" title="载重" :rightText="truckList.allowableLoad"></uni-list-item>
    </uni-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { getTruck } from '@/api/user.js';
import { onLoad } from '@dcloudio/uni-app';

// 车辆信息数据
const truckList = ref({});
const getTruckFile = async () => {
  let res = await getTruck();
  console.log(res);
  truckList.value = res.data;
};
onLoad(() => {
  getTruckFile();
});
</script>

<style lang="scss">
.page-content {
  padding: 30rpx;
  .truck-pictures {
    width: 100%;
    height: 400rpx;
    border-radius: 16rpx;
    overflow: hidden;

    .picture {
      width: 100%;
      height: 100%;
    }
  }

  .uni-list {
    margin-top: 30rpx;
  }
  ::v-deep .uni-list-item__extra-text {
    font-weight: 400;
    font-size: 28rpx;
    color: #2a2929;
  }
  ::v-deep .uni-list-item__content-title {
    font-weight: 400;
    font-size: 28rpx;
    color: #818181;
  }
}
</style>
