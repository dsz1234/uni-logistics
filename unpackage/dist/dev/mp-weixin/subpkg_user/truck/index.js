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
    const truckList = common_vendor.ref({});
    const getTruckFile = async () => {
      let res = await api_user.getTruck();
      console.log(res);
      truckList.value = res.data;
    };
    common_vendor.onLoad(() => {
      getTruckFile();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(truckList.value.pictureList, (item, index, i0) => {
          return {
            a: item.url,
            b: index
          };
        }),
        b: common_vendor.p({
          border: false,
          title: "车辆编号",
          rightText: truckList.value.id
        }),
        c: common_vendor.p({
          border: false,
          title: "车辆号牌",
          rightText: truckList.value.licensePlate
        }),
        d: common_vendor.p({
          border: false,
          title: "车型",
          rightText: truckList.value.truckType
        }),
        e: common_vendor.p({
          border: false,
          title: "所属机构",
          rightText: truckList.value.currentOrganName
        }),
        f: common_vendor.p({
          border: false,
          title: "载重",
          rightText: truckList.value.allowableLoad
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/subpkg_user/truck/index.vue"]]);
wx.createPage(MiniProgramPage);
