<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());

// 接受父组件传递的数据
const props = defineProps({
  dataKey: String,
  types: Array
});

// 设置tab默认选中项
const tabIndex = ref(-1);

// 点击tab触发的方法
const onOptionSelect = (index, id, text) => {
  tabIndex.value = index;
  // recordData.value.breakRulesType = id;
  recordData.value[props.dataKey] = id;
  // console.log(recordData.value);
};
</script>
<template>
  <view class="tab-list">
    <view @click="onOptionSelect(index, item.id, item.text)" class="option" v-for="(item, index) in props.types" :class="{ active: index === tabIndex }" :key="index">
      {{ item.text }}
    </view>
  </view>
</template>

<style lang="scss">
.tab-list {
  display: flex;
  flex-wrap: wrap;
  font-size: 28rpx;
  .option {
    width: 180rpx;
    height: 70rpx;
    text-align: center;
    line-height: 70rpx;
    margin-top: 30rpx;
    margin-right: 35rpx;
    color: #818181;
    background-color: #f4f4f4;
    border-radius: 20rpx;
    border: 2rpx solid #f4f4f4;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &.active {
      color: #ef4f3f;
      border: 2rpx solid #ef4f3f;
      background-color: #ffe0dd;
    }
  }
}
</style>
