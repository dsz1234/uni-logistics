<script setup>
import { ref } from 'vue';
import { proFile, taskReport } from '@/api/user.js';
import { onLoad } from '@dcloudio/uni-app';

// 用户信息
const userProFile = ref({});

// 获取用户信息
const getUserProfile = async () => {
  try {
    const result = await proFile();
    // console.log(result);
    userProFile.value = result.data;
  } catch (e) {
    console.log(e);
  }
};

// 任务数据
const taskFileList = ref({});
// 获取任务数据
const getTaskData = async () => {
  try {
    const res = await taskReport(uni.utils.getYearAndMonth());
    // console.log('res', res);
    taskFileList.value = res.data;
  } catch (e) {
    console.log(e);
  }
};

onLoad(() => {
  getUserProfile();
  getTaskData();
});
</script>

<template>
  <view class="page-container">
    <view class="user-profile">
      <image class="avatar" :src="userProFile.avatar" mode=""></image>
      <text class="username">{{ userProFile.name }}</text>
      <text class="no">司机编号：{{ userProFile.phone }}</text>
      <text class="mobile">手机号码：{{ userProFile.number }}</text>
    </view>
    <view class="month-overview">
      <view class="title">我的任务</view>
      <view class="content">
        <view class="item">
          <text class="volumn">{{ taskFileList.taskAmounts }}</text>
          <text class="label">任务总量</text>
        </view>
        <view class="item">
          <text class="volumn">{{ taskFileList.completedAmounts }}</text>
          <text class="label">完成任务量</text>
        </view>
        <view class="item">
          <text class="volumn">{{ taskFileList.transportMileage }}</text>
          <text class="label">运输里程(km)</text>
        </view>
      </view>
    </view>
    <view class="entry-list">
      <uni-list :border="false">
        <uni-list-item to="/subpkg_user/truck/index" showArrow title="车辆信息" />
        <uni-list-item to="/subpkg_user/task/index" showArrow title="任务数据" />
        <uni-list-item to="/subpkg_user/settings/index" showArrow title="系统设置" />
      </uni-list>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
