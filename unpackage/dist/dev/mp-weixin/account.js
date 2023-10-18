"use strict";
const common_vendor = require("./common/vendor.js");
const stores_counter = require("./stores/counter.js");
const api_user = require("./api/user.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "./uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "./uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "account",
  setup(__props) {
    const store = stores_counter.useUserStore();
    const formData = common_vendor.reactive({
      account: "admin1",
      password: "123456"
    });
    const accountForm = common_vendor.ref();
    const accountRules = common_vendor.ref({
      account: {
        rules: [
          {
            required: true,
            errorMessage: "请输入登录账号"
          },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            errorMessage: "登录账号格式不正确"
          }
        ]
      },
      password: {
        rules: [
          {
            required: true,
            errorMessage: "请输入登录密码"
          },
          {
            pattern: /^\d{6}$/,
            errorMessage: "登录密码格式不正确"
          }
        ]
      }
    });
    const redirectURL = common_vendor.ref("");
    const routeType = common_vendor.ref("");
    common_vendor.onLoad((e) => {
      redirectURL.value = e.redirectUrl;
      routeType.value = e.routeType;
    });
    const submitForm = async () => {
      const formData2 = await accountForm.value.validate();
      try {
        let res = await api_user.login(formData2);
        if (res.data)
          store.token = res.data;
        if (routeType.value === "switchTab") {
          common_vendor.index.switchTab({
            url: redirectURL.value
          });
        } else {
          common_vendor.index.redirectTo({
            url: redirectURL.value
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    const show = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: formData.account,
        b: common_vendor.o(($event) => formData.account = $event.detail.value),
        c: common_vendor.p({
          name: "account"
        }),
        d: show.value ? "text" : "password",
        e: formData.password,
        f: common_vendor.o(($event) => formData.password = $event.detail.value),
        g: common_vendor.o(($event) => formData.password = ""),
        h: show.value
      }, show.value ? {
        i: common_vendor.o(($event) => show.value = !show.value)
      } : {
        j: common_vendor.o(($event) => show.value = !show.value)
      }, {
        k: common_vendor.p({
          name: "password"
        }),
        l: common_vendor.sr(accountForm, "4f96e1a2-0", {
          "k": "accountForm"
        }),
        m: common_vendor.p({
          rules: accountRules.value,
          modelValue: formData
        }),
        n: common_vendor.o(submitForm)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/login/components/account.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
