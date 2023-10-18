"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../api/uni-fetch.js");
require("../../stores/counter.js");
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
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userProFile = common_vendor.ref({});
    const getUserProfile = async () => {
      try {
        const result = await api_user.proFile();
        userProFile.value = result.data;
      } catch (e) {
        console.log(e);
      }
    };
    const taskFileList = common_vendor.ref({});
    const getTaskData = async () => {
      try {
        const res = await api_user.taskReport(common_vendor.index.utils.getYearAndMonth());
        taskFileList.value = res.data;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad(() => {
      getUserProfile();
      getTaskData();
    });
    return (_ctx, _cache) => {
      return {
        a: userProFile.value.avatar,
        b: common_vendor.t(userProFile.value.name),
        c: common_vendor.t(userProFile.value.phone),
        d: common_vendor.t(userProFile.value.number),
        e: common_vendor.t(taskFileList.value.taskAmounts),
        f: common_vendor.t(taskFileList.value.completedAmounts),
        g: common_vendor.t(taskFileList.value.transportMileage),
        h: common_vendor.p({
          to: "/subpkg_user/truck/index",
          showArrow: true,
          title: "车辆信息"
        }),
        i: common_vendor.p({
          to: "/subpkg_user/task/index",
          showArrow: true,
          title: "任务数据"
        }),
        j: common_vendor.p({
          to: "/subpkg_user/settings/index",
          showArrow: true,
          title: "系统设置"
        }),
        k: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"], ["__file", "E:/实训二/神领物流/uni-logistics/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
