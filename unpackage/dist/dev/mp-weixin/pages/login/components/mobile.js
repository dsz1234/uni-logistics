"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_counter = require("../../../stores/counter.js");
const api_user = require("../../../api/user.js");
require("../../../api/uni-fetch.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "mobile",
  setup(__props) {
    const store = stores_counter.useUserStore();
    const formData = common_vendor.reactive({
      account: "",
      key: ""
    });
    const accountForm = common_vendor.ref();
    const accountRules = common_vendor.ref({
      account: {
        rules: [
          {
            required: true,
            errorMessage: "请输入手机号"
          },
          {
            pattern: /^1[3-9]{9}\d$/,
            errorMessage: "手号格式不正确"
          }
        ]
      },
      password: {
        rules: [
          {
            required: true,
            errorMessage: "请输入验证码"
          }
        ]
      }
    });
    const submitForm = async () => {
      const formData2 = await accountForm.value.validate();
      let res = await api_user.login(formData2);
      store.token = res.data;
      common_vendor.index.switchTab({
        url: "/pages/my/index"
      });
    };
    const show = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: formData.account,
        b: common_vendor.o(($event) => formData.account = $event.detail.value),
        c: common_vendor.p({
          name: "account"
        }),
        d: show.value ? "text" : "password",
        e: formData.password,
        f: common_vendor.o(($event) => formData.password = $event.detail.value),
        g: common_vendor.p({
          name: "password"
        }),
        h: common_vendor.sr(accountForm, "8f3fa7e0-0", {
          "k": "accountForm"
        }),
        i: common_vendor.p({
          rules: accountRules.value,
          modelValue: formData
        }),
        j: common_vendor.o(submitForm)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/login/components/mobile.vue"]]);
wx.createComponent(Component);
