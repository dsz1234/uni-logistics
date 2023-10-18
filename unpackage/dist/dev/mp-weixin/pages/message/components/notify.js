"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_message = require("../../../api/message.js");
require("../../../api/uni-fetch.js");
require("../../../stores/counter.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "notify",
  setup(__props) {
    const isEmpty = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const taskParams = common_vendor.ref({
      contentType: "201",
      page: 0,
      pageSize: 5
    });
    const taskList = common_vendor.ref([]);
    const getTaskNotify = async () => {
      try {
        taskParams.value.page += 1;
        let res = await api_message.getMessage(taskParams.value);
        if (taskParams.value.page === 1)
          taskList.value = [];
        taskList.value = [...taskList.value, ...res.data.items || []];
        hasMore.value = taskParams.value.page == res.data.pages;
        isEmpty.value = taskList.value.length === 0;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onMounted(() => {
      getTaskNotify();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getTaskNotify();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      taskParams.value.page = 0;
      await getTaskNotify();
      isTriggered.value = false;
    };
    const handleAllRead = async () => {
      try {
        let res = await api_message.getReadAll(taskParams.value.contentType);
        taskParams.value.page = 0;
        getTaskNotify();
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: taskList.value.length > 0
      }, taskList.value.length > 0 ? common_vendor.e({
        b: common_vendor.o(handleAllRead),
        c: common_vendor.f(taskList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.isRead === 0 ? 1 : "",
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.created),
            e: `/subpkg_task/detail/index?id=${item.id}`,
            f: index,
            g: "beee3ed6-0-" + i0
          };
        }),
        d: common_vendor.p({
          ["is-shadow"]: false
        }),
        e: hasMore.value
      }, hasMore.value ? {} : {}) : {}, {
        f: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        g: isTriggered.value,
        h: common_vendor.o(onRefresh),
        i: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/message/components/notify.vue"]]);
wx.createComponent(Component);
