<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import VehicleViolation from './components/vehicle-violation.vue';
import VehicleBreakdown from './components/vehicle-breakdown.vue';
import VehicleAccident from './components/vehicle-accident.vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());
import { truckRegistration } from '@/api/task.js';

// 初始化数据
onLoad((e) => {
  // 运输任务id
  recordData.value.id = e.id;
  // 出车时间
  recordData.value.startTime = e.startTime;
});
// console.log(recordData.value);

// 点击提交
const onFormSubmit = async () => {
  // console.log(recordData.value);
  try {
    recordData.value.accidentImagesList = recordData.value.accidentImagesList.map((item) => {
      return {
        url: item.url
      };
    });
    recordData.value.faultImagesList = recordData.value.faultImagesList.map((item) => {
      return {
        url: item.url
      };
    });
    const result = await truckRegistration(recordData.value);
    console.log(result);
    if (result.code != 200) return;
    // 提交回车登记成功之后, 回车任务列表页面
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
    <uni-list>
      <uni-list-item title="出车时间" :right-text="recordData.startTime" show-arrow=""></uni-list-item>
      <uni-list-item title="回车时间" show-arrow="">
        <template v-slot:footer>
          <uni-datetime-picker v-model="recordData.endTime">
            <view class="text-right">
              {{ recordData.endTime || '请选择' }}
            </view>
          </uni-datetime-picker>
        </template>
      </uni-list-item>
    </uni-list>

    <!-- 车辆违章 -->
    <VehicleViolation></VehicleViolation>
    <!-- 车辆故障 -->
    <VehicleBreakdown></VehicleBreakdown>
    <!-- 交通事故 -->
    <VehicleAccident></VehicleAccident>

    <view class="toolbar">
      <button @click="onFormSubmit" class="button">提交登记</button>
    </view>
  </view>
</template>

<style lang="scss">
.page-container {
  padding: 30rpx;
}
.text-right {
  text-align: right;
}
.button {
  background-color: $uni-main-color;
  color: #fff;
  margin-top: 30rpx;
}
</style>
