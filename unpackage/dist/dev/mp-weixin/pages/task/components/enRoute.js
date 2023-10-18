"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_task = require("../../../api/task.js");
require("../../../api/uni-fetch.js");
require("../../../stores/counter.js");
const _sfc_main = {
  __name: "enRoute",
  setup(__props) {
    const taskList = common_vendor.ref([]);
    const requestParams = common_vendor.ref({
      // 页码
      page: 0,
      // 条数
      pageSize: 5,
      // 作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
      status: 2
    });
    const isTriggered = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isEmpty = common_vendor.ref(false);
    const getTaskList = async () => {
      try {
        requestParams.value.page++;
        const result = await api_task.getQuestList(requestParams.value);
        if (requestParams.value.page === 1)
          taskList.value = [];
        taskList.value = [...taskList.value, ...result.data.items || []];
        hasMore.value = requestParams.value.page == result.data.pages;
        isEmpty.value = taskList.value.length <= 0;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad(() => {
      getTaskList();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getTaskList();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      requestParams.value.page = 0;
      await getTaskList();
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(taskList.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.transportTaskId),
            b: common_vendor.t(item.startAddress),
            c: common_vendor.t(item.endAddress),
            d: `/subpkg_task/detail/index?id=${item.id}`,
            e: common_vendor.t(item.planDepartureTime),
            f: item.status === 2
          }, item.status === 2 ? {
            g: `/subpkg_task/delivery/index?id=${item.id}`
          } : {}, {
            h: item.status === 4
          }, item.status === 4 ? {
            i: `/subpkg_task/delivery/index?id=${item.id}`
          } : {}, {
            j: index
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/task/components/enRoute.vue"]]);
wx.createComponent(Component);
