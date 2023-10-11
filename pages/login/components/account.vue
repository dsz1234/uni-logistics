<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from '@/stores/counter.js';
const store = useUserStore();
import { login } from '@/api/user.js';
import { onLoad } from '@dcloudio/uni-app';
// 表单数据
const formData = reactive({
  account: 'admin1',
  password: '123456'
});

const accountForm = ref();
const accountRules = ref({
  account: {
    rules: [
      {
        required: true,
        errorMessage: '请输入登录账号'
      },
      {
        pattern: /^[a-zA-Z0-9]{5,8}$/,
        errorMessage: '登录账号格式不正确'
      }
    ]
  },
  password: {
    rules: [
      {
        required: true,
        errorMessage: '请输入登录密码'
      },
      {
        pattern: /^\d{6}$/,
        errorMessage: '登录密码格式不正确'
      }
    ]
  }
});

// 回跳地址
const redirectURL = ref('');
// 跳转地址方式
const routeType = ref('');

// 获取地址中的参数
onLoad((e) => {
  // console.log(e);
  redirectURL.value = e.redirectUrl;
  routeType.value = e.routeType;
});
// 点击登录
const submitForm = async () => {
  const formData = await accountForm.value.validate();
  // console.log(formData);
  try {
    let res = await login(formData);
    // console.log('loginres', res);
    // 存储token
    if (res.data) store.token = res.data;

    // 跳转到token过期前的页面
    if (redirectURL.value == undefined) {
      uni.switchTab({
        url: '/pages/task/index'
      });
    } else {
      uni[routeType.value]({
        url: redirectURL.value
      });
    }
  } catch (e) {
    console.log(e);
  }
};
// 登录密码显示的状态
const show = ref(false);
</script>

<template>
  <uni-forms ref="accountForm" :rules="accountRules" class="uni-form" :modelValue="formData">
    <uni-forms-item name="account">
      <input type="text" class="uni-input-input" v-model="formData.account" placeholder="请输入账号" />
    </uni-forms-item>
    <uni-forms-item name="password">
      <input :type="show ? 'text' : 'password'" class="uni-input-input" v-model="formData.password" placeholder="请输入密码" />
      <view class="right">
        <text class="gb" @click="formData.password = ''">x</text>
        <image v-if="show" src="../../../static/images/眼睛.png" mode="" @click="show = !show"></image>
        <image v-else src="../../../static/images/眼睛_闭.png" mode="" @click="show = !show"></image>
      </view>
    </uni-forms-item>
  </uni-forms>
  <button @click="submitForm" class="submit-button">登录</button>
</template>

<style lang="scss">
.uni-form {
  .uni-forms-item {
    height: 100rpx;
    box-sizing: border-box;
    margin-bottom: 50rpx;
    border-bottom: 2rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ::v-deep .uni-forms-item__content {
      display: flex;
      align-items: center;
    }

    ::v-deep input {
      width: 100%;
      font-size: $uni-font-size-base;
      color: $uni-secondary-text-color;
    }

    .right {
      display: flex;
      align-items: center;
      .gb {
        width: 40rpx;
        height: 40rpx;
        background: #cccccc;
        color: #fff;
        font-size: 34rpx;
        border-radius: 50%;
        text-align: center;
        line-height: 32rpx;
        margin-right: 10rpx;
      }
      image {
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
}
.submit-button {
  width: 100%;
  height: 100rpx;
  background: $uni-main-color;
  border-radius: 49.54px;
  color: #fff;
  margin-top: 45rpx;
}
.disabled {
  background-color: #fadcd9;
  color: $uni-white-color;
}
</style>
