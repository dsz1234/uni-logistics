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
      <!-- 待提货组件 -->
      <Pickup v-show="tabIndex === 0" v-if="tabMetas[0].rendered"></Pickup>
    </view>

    <view class="message-list">
      <!-- 在途组件 -->
      <EnRoute v-show="tabIndex === 1" v-if="tabMetas[1].rendered"></EnRoute>
    </view>
    <view class="message-list">
      <!-- 已完成组件 -->
      <Complete v-show="tabIndex === 2" v-if="tabMetas[2].rendered"></Complete>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import Pickup from './components/pickup.vue';
import Complete from './components/complete.vue';
import EnRoute from './components/enRoute.vue';
// Tab 标签索引
const tabIndex = ref(0);
// tab的数据
const tabMetas = ref([
  { title: '待提货', rendered: true },
  { title: '在途', rendered: false },
  { title: '已完成', rendered: false }
]);

// 监听tab切换
const changeTab = (index) => {
  tabMetas.value[index].rendered = true;
  tabIndex.value = index;
};
</script>

<style lang="scss">
@import './index.scss';
</style>
