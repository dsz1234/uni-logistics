<script setup>
import { computed, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { reportException } from '@/api/task.js';

// 运输任务id
const transportTaskId = ref('');
onLoad((e) => {
  transportTaskId.value = e.id;
});
// 异常时间
const exceptionPicker = ref('');
const exceptionTime = computed(() => {
  return exceptionPicker.value || '请选择';
});
// 上报异常位置
const exceptionPlace = ref('');
// 打开地图
const onLocationChoose = async () => {
  try {
    const { address } = await uni.chooseLocation({});
    // console.log('address', address);
    exceptionPlace.value = address;
  } catch (e) {
    //TODO handle the exception
    console.log(e);
  }
};
// 异常类型(传中文)
const exceptionType = ref('');
const popup = ref('');
const openPopup = () => {
  popup.value.open();
};
const exceptionTypes = ['发动机启动困难', '不着车，漏油', '照明失灵', '排烟异常、温度异常', '其他问题'];
const tempException = [];
const onCheckboxChange = (e) => {
  // console.log(e);
  tempException.push(e.detail.value[0]);
  // console.log(tempException);
};
// 点击确定
const onPopupConfirm = () => {
  // 关闭弹出层
  popup.value.close();
  exceptionType.value = tempException.join('|');
  // console.log(exceptionType.value);
};

// 异常描述
const exceptionDescribe = ref('');
// 异常图片
const exceptionPictures = ref([]);
// 过滤出图片的url
const exceptionImagesList = computed(() => {
  return exceptionPictures.value.map((item) => {
    return {
      url: item.url
    };
  });
});

// 提交异常方法
const onSubmitForm = async () => {
  try {
    const data = {
      transportTaskId: transportTaskId.value,
      exceptionTime: exceptionTime.value,
      exceptionPlace: exceptionPlace.value,
      exceptionType: exceptionType.value,
      exceptionImagesList: exceptionImagesList.value
    };
    const res = await reportException(data);

    // 上报异常成功之后,跳转到任务列表页面
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
    <scroll-view scroll-y="true" class="scroll-view">
      <view class="scroll-view-wrapper">
        <uni-list>
          <uni-list-item title="异常时间" right-text="请选择" show-arrow="">
            <template v-slot:footer>
              <uni-datetime-picker v-model="exceptionPicker">
                <view class="picker-value">
                  {{ exceptionTime }}
                </view>
              </uni-datetime-picker>
            </template>
          </uni-list-item>
          <uni-list-item clickable @click="onLocationChoose" title="上报位置" :right-text="exceptionPlace || '请选择'" show-arrow></uni-list-item>
          <uni-list-item clickable @click="openPopup" title="异常类型" :right-text="exceptionType || '请选择'" show-arrow></uni-list-item>
          <uni-list-item title="异常描述">
            <template v-slot:body>
              <view>
                <textarea v-model="exceptionDescribe" placeholder="请输入异常描述" />
              </view>
            </template>
          </uni-list-item>
          <uni-list-item title="上传图片(最多3张)" direction="column">
            <template v-slot:footer>
              <uni-file-picker v-model="exceptionPictures" file-extname="jpg,webp,gif,png" limit="3"></uni-file-picker>
            </template>
          </uni-list-item>
        </uni-list>
      </view>
    </scroll-view>

    <view>
      <button @click="onSubmitForm" class="button" type="default">提交</button>
    </view>

    <uni-popup ref="popup" type="bottom">
      <view style="background-color: #fff; min-height: 500rpx; border-top-left-radius: 50rpx; border-top-right-radius: 50rpx">
        <view class="title">选择类型</view>
        <uni-list>
          <uni-list-item v-for="(item, index) in exceptionTypes" :key="index" :title="item">
            <template v-slot:footer>
              <checkbox-group @change="onCheckboxChange">
                <checkbox :value="item" />
                <text></text>
              </checkbox-group>
            </template>
          </uni-list-item>
        </uni-list>
        <uni-list-item>
          <template v-slot:body>
            <button @click="onPopupConfirm" class="button" type="default">确定</button>
          </template>
        </uni-list-item>
      </view>
    </uni-popup>
  </view>
</template>

<style lang="scss">
.page-container {
  padding: 30rpx;

  .picker-value {
    width: 360rpx;
    color: #818181;
    text-align: right;
    font-size: 32rpx;
  }
}
.button {
  margin-top: 20rpx;
  background-color: $uni-main-color;
  color: #fff;
}
</style>
