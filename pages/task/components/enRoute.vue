<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getQuestList } from '@/api/task.js';
// 保存请求到的任务列表数据
const taskList = ref([]);

// 请求的参数
const requestParams = ref({
  // 页码
  page: 0,
  // 条数
  pageSize: 5,
  // 作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
  status: 2
});

// 下拉刷新状态 false 关闭 true 开启
const isTriggered = ref(false);

// 数据是否加载完毕 false 未加载完成 true全部已加载完
const hasMore = ref(false);

// 控制是否显示暂无数据状态 false 不显示 true显示
const isEmpty = ref(false);

// 获取任务列表
const getTaskList = async () => {
  try {
    requestParams.value.page++;

    const result = await getQuestList(requestParams.value);

    if (requestParams.value.page === 1) taskList.value = [];

    taskList.value = [...taskList.value, ...(result.data.items || [])];

    hasMore.value = requestParams.value.page == result.data.pages;

    isEmpty.value = taskList.value.length <= 0;
  } catch (e) {
    console.log(e);
  }
};

// 初始化加载
onLoad(() => {
  getTaskList();
});

// 监听上拉加载
const onScrollToLower = () => {
  if (hasMore.value) return;
  getTaskList();
};

// 监听下拉刷新
const onRefresh = async () => {
  isTriggered.value = true;
  requestParams.value.page = 0;
  await getTaskList();
  isTriggered.value = false;
};
</script>
<template>
  <scroll-view :refresher-triggered="isTriggered" @refresherrefresh="onRefresh" refresher-enabled @scrolltolower="onScrollToLower" class="scroll-view-wrapper" scroll-y="true">
    <view class="card" v-for="(item, index) in taskList" :key="index">
      <navigator hover-class="none" :url="`/subpkg_task/detail/index?id=${item.id}`">
        <view class="header">
          <text class="title">任务编号：{{ item.transportTaskId }}</text>
        </view>
        <view class="body">
          <view class="time-line">
            <view class="line">{{ item.startAddress }}</view>
            <view class="line">{{ item.endAddress }}</view>
          </view>
        </view>
      </navigator>
      <view class="footer">
        <view class="time">
          <view>到货时间</view>
          <view>{{ item.planDepartureTime }}</view>
        </view>
        <navigator v-if="item.status === 2" class="action" :url="`/subpkg_task/delivery/index?id=${item.id}`">交付</navigator>
        <navigator v-if="item.status === 4" class="action" :url="`/subpkg_task/record/index?id=${item.transportTaskId}&startTime=${item.actualDepartureTime}`">回车登记</navigator>
      </view>
    </view>

    <view v-if="isEmpty" class="task-blank">无待提货物</view>
  </scroll-view>
</template>
<style lang="scss">
@import './style.scss';
</style>
