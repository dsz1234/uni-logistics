"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
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
    const planDepartureTime = common_vendor.ref("");
    const id = common_vendor.ref("");
    const delayTime = common_vendor.ref("");
    const delayReason = common_vendor.ref("");
    const wordsCount = common_vendor.computed(() => delayReason.value.length);
    const delayReasonValid = common_vendor.computed(() => {
      return wordsCount.value <= 50 && wordsCount.value > 0;
    });
    common_vendor.onLoad((e) => {
      planDepartureTime.value = e.planDepartureTime;
      id.value = e.id;
    });
    const onPickerChange = (ev) => {
      const [date] = planDepartureTime.value.split(" ");
      delayTime.value = `${date} ${ev.detail.value}`;
    };
    const delayTimeValid = common_vendor.computed(() => {
      const start = new Date(planDepartureTime.value).getTime();
      const end = new Date(delayTime.value).getTime();
      return end - start > 0 && end - start < 7200 * 1e3;
    });
    const enableSubmit = common_vendor.computed(() => {
      return delayReasonValid.value && delayTimeValid.value;
    });
    const onSubmitForm = async () => {
      try {
        const data = {
          id: id.value,
          delayTime: delayTime.value,
          delayReason: delayReason.value
        };
        const result = await api_task.delay(data);
        common_vendor.index.reLaunch({
          url: "/pages/task/index"
        });
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "原定时间",
          rightText: planDepartureTime.value
        }),
        b: !delayTime.value
      }, !delayTime.value ? {} : {
        c: common_vendor.t(delayTime.value + ":00"),
        d: !common_vendor.unref(delayTimeValid) ? 1 : ""
      }, {
        e: common_vendor.o(onPickerChange),
        f: common_vendor.p({
          title: "延迟时间",
          showArrow: true
        }),
        g: delayReason.value,
        h: common_vendor.o(($event) => delayReason.value = $event.detail.value),
        i: common_vendor.t(common_vendor.unref(wordsCount)),
        j: common_vendor.unref(wordsCount) > 50 ? 1 : "",
        k: !common_vendor.unref(enableSubmit),
        l: common_vendor.o(onSubmitForm),
        m: common_vendor.p({
          border: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/subpkg_task/delay/index.vue"]]);
wx.createPage(MiniProgramPage);
