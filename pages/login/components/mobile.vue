<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from '@/stores/counter.js';
const store = useUserStore();
import { login } from '@/api/user.js';
// 表单数据
const formData = reactive({
  account: '',
  key: ''
});

const accountForm = ref();
const accountRules = ref({
  account: {
    rules: [
      {
        required: true,
        errorMessage: '请输入手机号'
      },
      {
        pattern: /^1[3-9]{9}\d$/,
        errorMessage: '手号格式不正确'
      }
    ]
  },
  password: {
    rules: [
      {
        required: true,
        errorMessage: '请输入验证码'
      }
    ]
  }
});
// 点击登录
const submitForm = async () => {
  const formData = await accountForm.value.validate();
  // console.log(formData);
  let res = await login(formData);
  // console.log('loginres', res);
  store.token = res.data;
  uni.switchTab({
    url: '/pages/my/index'
  });
};
// 登录密码显示的状态
const show = ref(false);
</script>

<template>
  <uni-forms ref="accountForm" :rules="accountRules" class="uni-form" :modelValue="formData">
    <uni-forms-item name="account">
      <input type="text" class="uni-input-input" v-model="formData.account" placeholder="请输入手机号" />
    </uni-forms-item>
    <uni-forms-item name="password">
      <input :type="show ? 'text' : 'password'" class="uni-input-input" v-model="formData.password" placeholder="请输入验证码" />
      <view class="right">
        <text class="hqCode">获取验证码</text>
      </view>
    </uni-forms-item>
  </uni-forms>
  <button @click="submitForm" class="submit-button disabled">登录</button>
</template>

<style lang="scss">
.uni-form {
  .uni-forms-item {
    height: 100rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
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
      .hqCode {
        width: 180rpx;
        border-left: 2rpx solid #eee;
        text-align: center;
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
