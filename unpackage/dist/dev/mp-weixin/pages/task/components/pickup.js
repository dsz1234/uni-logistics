"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_task = require("../../../api/task.js");
require("../../../api/uni-fetch.js");
require("../../../stores/counter.js");
const _sfc_main = {
  __name: "pickup",
  setup(__props) {
    const questParams = common_vendor.ref({
      page: 0,
      pageSize: 5,
      // 作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
      status: 1
    });
    const pickUpList = common_vendor.ref([]);
    const questFile = async () => {
      try {
        questParams.value.page++;
        const res = await api_task.getQuestList(questParams.value);
        if (questParams.value.page === 1)
          pickUpList.value = [];
        pickUpList.value = [...pickUpList.value, ...res.data.items || []];
        hasMore.value = questParams.value.page == res.data.pages;
        isEmpty.value = pickUpList.value.length === 0;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad(() => {
      questFile();
    });
    const isTriggered = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isEmpty = common_vendor.ref(false);
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      questFile();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      questParams.value.page = 0;
      await questFile();
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(pickUpList.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.transportTaskId),
            b: common_vendor.t(item.startAddress),
            c: common_vendor.t(item.endAddress),
            d: `/subpkg_task/detail/index?id=${item.id}`,
            e: common_vendor.t(item.planDepartureTime),
            f: item.enablePickUp
          }, item.enablePickUp ? {
            g: `/subpkg_task/pickup/index?id=${item.id}`
          } : {}, {
            h: index
          });
        }),
        b: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        c: isTriggered.value,
        d: common_vendor.o(onRefresh),
        e: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/task/components/pickup.vue"]]);
wx.createComponent(Component);
