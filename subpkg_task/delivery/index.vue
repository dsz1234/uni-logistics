<script setup>
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { deliver } from '@/api/task.js';

// 司机作业id
const id = ref('');
onLoad((query) => {
  id.value = query.id;
});

// v-model绑定的是上传的凭证图片
const receiptPictrues = ref([]);
// v-model绑定的是上传的交付图片
const goodsPictrues = ref([]);
// 交付图片列表
const deliverPictrueList = computed(() => {
  return receiptPictrues.value.map((item) => {
    return {
      url: item.url
    };
  });
});
// 交付凭证列表
const certificatePictureList = computed(() => {
  return goodsPictrues.value.map((item) => {
    return {
      url: item.url
    };
  });
});
// 验证数据方法, 通过的话按钮则为非禁用状态
const enableSubmit = computed(() => {
  return goodsPictrues.value.length > 0 && receiptPictrues.value.length > 0;
});

// 交付方法
const onSubmitForm = async () => {
  try {
    const data = {
      id: id.value,
      deliverPictureList: goodsPictrues.value,
      certificatePictureList: receiptPictrues.value
    };

    const result = await deliver(data);

    // 交付成功,跳转到任务列表页面
    uni.reLaunch({
      url: '/pages/task/index'
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <view class="page-container">
    <view class="receipt-info">
      <!-- 请拍照上传回单凭证 -->
      <uni-file-picker file-extname="jpg,webp,gif,png" title="请拍照上传回单凭证" limit="3" v-model="receiptPictrues" />
      <!-- 请拍照上传货品照片 -->
      <uni-file-picker file-extname="jpg,webp,gif,png" title="请拍照上传货品照片" limit="3" v-model="goodsPictrues" />
    </view>
    <button @click="onSubmitForm" :disabled="!enableSubmit" class="button">提交</button>
  </view>
</template>

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
