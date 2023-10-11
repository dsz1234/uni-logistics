<template>
  <view class="page-container">
    <view class="tab">
      <view class="tab-item" @click="changeTab(index)" v-for="(item, index) in tabMetas" :key="index">
        <view class="title" :class="{ active: tabIndex === index }">
          {{ item.title }}
        </view>
      </view>
    </view>
    <view class="message-list">
      <!-- 任务通知组件 -->
      <Notify v-show="tabIndex === 0" v-if="tabMetas[0].rendered"></Notify>
    </view>

    <view class="message-list">
      <!-- 公告组件 -->
      <Announce v-show="tabIndex === 1" v-if="tabMetas[1].rendered"></Announce>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import Announce from './components/announce.vue';
import Notify from './components/notify.vue';

// Tab 标签索引
const tabIndex = ref(0);
// tab的数据
const tabMetas = ref([
  { title: '任务通知', rendered: true },
  { title: '公告', rendered: false }
]);

// 监听tab切花
const changeTab = (index) => {
  tabMetas.value[index].rendered = true;
  tabIndex.value = index;
};
</script>

<style lang="scss">
@import './index.scss';
</style>