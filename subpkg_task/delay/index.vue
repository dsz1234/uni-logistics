<template>
  <view class="page-container">
    <view class="putPage">
      <uni-list>
        <uni-list-item title="原定时间" :rightText="planDepartureTime"></uni-list-item>
        <uni-list-item title="延迟时间" showArrow>
          <template v-slot:footer>
            <picker @change="onPickerChange" class="time-picker" mode="time">
              <text v-if="!delayTime">不可超过2个小时</text>
              <text :class="{ error: !delayTimeValid }" v-else>{{ delayTime + ':00' }}</text>
            </picker>
          </template>
        </uni-list-item>
        <uni-list-item>
          <template v-slot:body>
            <view class="textarea-wrapper">
              <textarea class="textarea" v-model="delayReason" placeholder="请输入延迟提货原因" />
              <text :class="{ error: wordsCount > 50 }" class="words-count">{{ wordsCount }}/50</text>
            </view>
          </template>
        </uni-list-item>
        <uni-list-item :border="false">
          <template v-slot:body>
            <button :disabled="!enableSubmit" class="button" @click="onSubmitForm">提交</button>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { delay } from '@/api/task.js';

// 原计划提货时间
const planDepartureTime = ref('');
// 延迟提货任务的id
const id = ref('');
// 延迟提货时间
const delayTime = ref('');
// 延迟原因
const delayReason = ref('');
// 监听数字的变化
const wordsCount = computed(() => delayReason.value.length);
// 验证输入的字数是否符合规则
const delayReasonValid = computed(() => {
  return wordsCount.value <= 50 && wordsCount.value > 0;
});

// 获取地址中的参数
onLoad((e) => {
  // console.log(e);
  planDepartureTime.value = e.planDepartureTime;
  id.value = e.id;
});

// 监听用户选择时间
const onPickerChange = (ev) => {
  // 延迟提货时间，需要拼接日期
  const [date] = planDepartureTime.value.split(' ');
  delayTime.value = `${date} ${ev.detail.value}`;
};
// 验证延迟时间
/**
 * 1. 选择的时间不能小于原定时间
 * 2. 选择的时间不能大于原定时间的两个小时
 * // 符合规则true  不符合false
 */
const delayTimeValid = computed(() => {
  // 原定时间
  const start = new Date(planDepartureTime.value).getTime();
  // console.log('start', start);
  // 当前所选择的时候
  const end = new Date(delayTime.value).getTime();
  // 2 * 60 * 60 * 1000
  return end - start > 0 && end - start < 7200 * 1000;
});
/**
 * 按钮如何变成可用的状态?
 * 1. 时间需要符合要求
 * 2. 字数需要符合要求
 */
const enableSubmit = computed(() => {
  return delayReasonValid.value && delayTimeValid.value;
});

// 点击提交
const onSubmitForm = async () => {
  try {
    const data = {
      id: id.value,
      delayTime: delayTime.value,
      delayReason: delayReason.value
    };
    const result = await delay(data);
    // 跳转到任务列表
    uni.reLaunch({
      url: '/pages/task/index'
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<style lang="scss">
.page-container {
  overflow: hidden;
}
.putPage {
  margin: 30rpx;
  border-radius: 20rpx;
  overflow: hidden;
}

.textarea-wrapper {
  position: relative;
  .textarea {
    width: 630rpx;
    height: 260rpx;
    font-size: $uni-font-size-base;
    padding: 20rpx 28rpx;
    background-color: #f4f4f4;
    border-radius: 16rpx;
    box-sizing: border-box;
    color: $uni-black-color;
  }
}
.words-count {
  position: absolute;
  bottom: 10rpx;
  right: 30rpx;
  color: $uni-secondary-text-color;
  font-size: $uni-font-size-small;
}
.button {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  margin: -20rpx auto 20rpx;
  color: #fff;
  font-size: $uni-font-size-big;
  border-radius: 100rpx;
  background-color: $uni-main-color;

  &[disabled] {
    background-color: #fadcd9;
  }
}
</style>
