<template>
  <view class="page-container">
    <view class="receipt-info">
      <!-- 提货凭证上传组件 -->
      <uni-file-picker file-extname="jpg,webp,gif,png" title="请拍照上传提货凭证" limit="3" v-model="receiptPictrues" />
      <!-- 上传货品照片组件 -->
      <uni-file-picker file-extname="jpg,webp,gif,png" title="请拍照上传货品照片" limit="3" v-model="goodsPictrues" />
    </view>

    <button @click="onSubmitForm" :disabled="!enableSubmit" class="button">提交</button>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { takeDelivery } from '@/api/task.js';
// 司机作业id
const id = ref('');

// 初始化加载
onLoad((query) => {
  id.value = query.id;
});

// 保存上传的提货凭证照片
const receiptPictrues = ref([]);

// 提货凭证照片数组
const cargoPickUpPictureList = computed(() => {
  return receiptPictrues.value.map((item) => {
    return {
      url: item.url
    };
  });
});

// 提货照片数组
const goodsPictrues = ref([]);

// 保存提货照片
const cargoPictureList = computed(() => {
  return goodsPictrues.value.map((item) => {
    return {
      url: item.url
    };
  });
});

// 什么情况下按钮是非禁用状态?
const enableSubmit = computed(() => {
  return cargoPickUpPictureList.value.length > 0 && cargoPictureList.value.length > 0;
});

// 提货方法
const onSubmitForm = async () => {
  console.log('123');
  try {
    const data = {
      id: id.value,
      cargoPickUpPictureList: cargoPickUpPictureList.value,
      cargoPictureList: cargoPictureList.value
    };
    const result = await takeDelivery(data);

    console.log('result', result);

    // 跳转到任务详情
    uni.reLaunch({
      url: '/subpkg_task/detail/index?id=' + id.value
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<style lang="scss">
.page-container {
  padding: 30rpx;
}
.receipt-info {
  min-height: 600rpx;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 16rpx;
}

::v-deep .uni-file-picker {
  margin-bottom: 30rpx;
}

.button {
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  /* #ifdef APP */
  padding-top: 4rpx;
  /* #endif */
  border-radius: 100rpx;
  margin-top: 60rpx;
  color: #fff;
  font-size: $uni-font-size-big;
  background-color: $uni-main-color;

  &[disabled] {
    color: #fff;
    background-color: #fadcd9;
  }
}
</style>
