<template>
  <scroll-view :refresher-triggered="isTriggered" @refresherrefresh="onRefresh" refresher-enabled @scrolltolower="onScrollToLower" scroll-y="true" class="scroll-view">
    <view class="scroll-view-wrapper" v-if="notifyList.length > 0">
      <view class="message-action" @click="handleAllRead">
        <text class="iconfont icon-clear"></text>
        全部已读
      </view>
      <uni-list>
        <uni-list-item
          v-for="(item, index) in notifyList"
          :key="item.id"
          :title="item.title"
          :right-text="item.created"
          ellipsis="1"
          :to="`/subpkg_user/content/index?id=${item.id}`"
        >
          <template v-slot:header>
            <text class="dot" v-if="item.isRead === 0"></text>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
    <view v-if="isEmpty" class="message-blank">暂无消息</view>
  </scroll-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getMessage, getReadAll } from '@/api/message.js';

// 判断是否显示暂无数据 false表示有数据 true没有数据
const isEmpty = ref(false);
// false表示还有数据数据没有加载, true则表示所有数据已经加载完成
const hasMore = ref(false);

// 是否加载完成
const isTriggered = ref(false);

//请求数据所需参数
const taskParams = ref({
  contentType: '200',
  page: 0,
  pageSize: 5
});

// 保存公告数据
const taskNotifyInfo = ref({});
const notifyList = ref([]);
// 请求消息列表
const getTaskNotify = async () => {
  try {
    // 更新下一页页码
    taskParams.value.page += 1;

    // 请求数据
    let res = await getMessage(taskParams.value);
    // console.log(res);
    // 如果是页码是1,则表示执行了下拉刷新,这个时候需要清空数组
    if (taskParams.value.page === 1) notifyList.value = [];
    // 保存请求到的数据
    taskNotifyInfo.value = res.data;
    // 保存列表数据
    notifyList.value = [...notifyList.value, ...(res.data.items || [])];
    // 判断是否加载到最后一页的数据
    hasMore.value = taskParams.value.page == taskNotifyInfo.value.pages;
    // 判断如果没有数据的话显示暂无数据
    isEmpty.value = notifyList.value.length === 0;
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  getTaskNotify();
});
// 监听上拉加载
const onScrollToLower = () => {
  if (hasMore.value) return;
  getTaskNotify();
};
// 监听下拉刷新
const onRefresh = async () => {
  isTriggered.value = true;
  // console.log('123');
  taskParams.value.page = 0;
  await getTaskNotify();
  isTriggered.value = false;
};

// 监听全部已读
const handleAllRead = async () => {
  try {
    let res = await getReadAll(taskParams.value.contentType);
    taskParams.value.page = 0;
    getTaskNotify();
  } catch (e) {
    console.log(e);
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
