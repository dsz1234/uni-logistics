"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      to: "/subpkg_user/truck/index",
      showArrow: true,
      title: "换绑手机"
    }),
    b: common_vendor.p({
      to: "/subpkg_user/task/index",
      showArrow: true,
      title: "修改密码"
    }),
    c: common_vendor.p({
      to: "/subpkg_user/settings/index",
      showArrow: true,
      title: "消息通知设置"
    }),
    d: common_vendor.p({
      to: "/subpkg_user/settings/index",
      showArrow: true,
      title: "修改密码"
    }),
    e: common_vendor.p({
      to: "/subpkg_user/settings/index",
      showArrow: true,
      title: "清理缓存"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/实训二/神领物流/uni-logistics/subpkg_user/settings/index.vue"]]);
wx.createPage(MiniProgramPage);
