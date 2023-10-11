<template>
  <view class="user-login">
    <view class="login-type">
      <view class="title">{{ tabMetas[tabIndex].title }}</view>
      <view class="type">
        <text @click="changeLoginType">{{ tabMetas[tabIndex].subTitle }}</text>
        <text class="iconfont icon-caret"></text>
      </view>
    </view>

    <!-- 账号登录 -->
    <account v-if="tabIndex === 0"></account>
    <!-- 手机号登录 -->
    <mobile v-else></mobile>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import account from './components/account.vue';
import mobile from './components/mobile.vue';

// 登录类型索引值
const tabIndex = ref(0);
// 定义登录类型切换文本
const tabMetas = ref([
  {
    title: '账号登录',
    subTitle: '手机号登录'
  },
  {
    title: '手机号登录',
    subTitle: '账号登录'
  }
]);
// 切换登录类型
const changeLoginType = () => {
  tabIndex.value = Math.abs(tabIndex.value - 1);
};
</script>

<style lang="scss">
@import 'index.scss';
</style>
