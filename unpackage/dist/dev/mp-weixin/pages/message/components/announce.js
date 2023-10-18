"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_message = require("../../../api/message.js");
require("../../../api/uni-fetch.js");
require("../../../stores/counter.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "announce",
  setup(__props) {
    const isEmpty = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const taskParams = common_vendor.ref({
      contentType: "200",
      page: 0,
      pageSize: 5
    });
    const taskNotifyInfo = common_vendor.ref({});
    const notifyList = common_vendor.ref([]);
    const getTaskNotify = async () => {
      try {
        taskParams.value.page += 1;
        let res = await api_message.getMessage(taskParams.value);
        if (taskParams.value.page === 1)
          notifyList.value = [];
        taskNotifyInfo.value = res.data;
        notifyList.value = [...notifyList.value, ...res.data.items || []];
        hasMore.value = taskParams.value.page == taskNotifyInfo.value.pages;
        isEmpty.value = notifyList.value.length === 0;
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
        a: notifyList.value.length > 0
      }, notifyList.value.length > 0 ? {
        b: common_vendor.o(handleAllRead),
        c: common_vendor.f(notifyList.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.isRead === 0
          }, item.isRead === 0 ? {} : {}, {
            b: item.id,
            c: "db0d5e96-1-" + i0 + ",db0d5e96-0",
            d: common_vendor.p({
              title: item.title,
              ["right-text"]: item.created,
              ellipsis: "1",
              to: `/subpkg_user/content/index?id=${item.id}`
            })
          });
        })
      } : {}, {
        d: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        e: isTriggered.value,
        f: common_vendor.o(onRefresh),
        g: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/pages/message/components/announce.vue"]]);
wx.createComponent(Component);
