"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (account + mobile)();
}
const account = () => "./components/account2.js";
const mobile = () => "./components/mobile.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabMetas = common_vendor.ref([
      {
        title: "账号登录",
        subTitle: "手机号登录"
      },
      {
        title: "手机号登录",
        subTitle: "账号登录"
      }
    ]);
    const changeLoginType = () => {
      tabIndex.value = Math.abs(tabIndex.value - 1);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(tabMetas.value[tabIndex.value].title),
        b: common_vendor.t(tabMetas.value[tabIndex.value].subTitle),
        c: common_vendor.o(changeLoginType),
        d: tabIndex.value === 0
      }, tabIndex.value === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
