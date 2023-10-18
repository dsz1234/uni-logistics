"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../api/uni-fetch.js");
require("../../stores/counter.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const id = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      id.value = query.id;
    });
    const receiptPictrues = common_vendor.ref([]);
    const goodsPictrues = common_vendor.ref([]);
    common_vendor.computed(() => {
      return receiptPictrues.value.map((item) => {
        return {
          url: item.url
        };
      });
    });
    common_vendor.computed(() => {
      return goodsPictrues.value.map((item) => {
        return {
          url: item.url
        };
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => receiptPictrues.value = $event),
        b: common_vendor.p({
          ["file-extname"]: "jpg,webp,gif,png",
          title: "请拍照上传回单凭证",
          limit: "3",
          modelValue: receiptPictrues.value
        }),
        c: common_vendor.o(($event) => goodsPictrues.value = $event),
        d: common_vendor.p({
          ["file-extname"]: "jpg,webp,gif,png",
          title: "请拍照上传货品照片",
          limit: "3",
          modelValue: goodsPictrues.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/subpkg_task/delivery/index.vue"]]);
wx.createPage(MiniProgramPage);
