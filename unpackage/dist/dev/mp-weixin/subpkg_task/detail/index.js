"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
require("../../api/uni-fetch.js");
require("../../stores/counter.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const detailInfo = common_vendor.ref({});
    const getDetailInfo = async (id) => {
      if (!id)
        return;
      let res = await api_task.taskDetail(id);
      detailInfo.value = res.data;
    };
    common_vendor.onLoad((e) => {
      getDetailInfo(e.id);
    });
    const fileDetail = common_vendor.ref([
      { title: "基本信息", status: true },
      { title: "车辆司机信息", status: false },
      { title: "运输路线", status: false },
      { title: "物品信息", status: false },
      { title: "提货信息", status: false }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(fileDetail.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => item.status = !item.status, index),
            c: item.status
          }, item.status ? {
            d: common_vendor.t(detailInfo.value.startAddress),
            e: common_vendor.t(detailInfo.value.endAddress)
          } : {}, {
            f: item.status
          }, item.status ? common_vendor.e({
            g: common_vendor.t(detailInfo.value.transportTaskId),
            h: detailInfo.value.status >= 1
          }, detailInfo.value.status >= 1 ? {
            i: common_vendor.t(detailInfo.value.startHandoverName),
            j: common_vendor.t(detailInfo.value.startHandoverPhone),
            k: common_vendor.t(detailInfo.value.planDepartureTime),
            l: common_vendor.t(detailInfo.value.planArrivalTime)
          } : {}, {
            m: detailInfo.value.status >= 2
          }, detailInfo.value.status >= 2 ? {
            n: common_vendor.t(detailInfo.value.finishHandoverName),
            o: common_vendor.t(detailInfo.value.finishHandoverPhone),
            p: common_vendor.t(detailInfo.value.planArrivalTime),
            q: common_vendor.t(detailInfo.value.actualArrivalTime)
          } : {}) : {}, {
            r: index
          });
        }),
        b: detailInfo.value.status === 1
      }, detailInfo.value.status === 1 ? {
        c: `/subpkg_task/delay/index?id=${detailInfo.value.id}&planDepartureTime=${detailInfo.value.planDepartureTime}`,
        d: `/subpkg_task/pickup/index?id=${detailInfo.value.id}`
      } : {}, {
        e: detailInfo.value.status === 2
      }, detailInfo.value.status === 2 ? {
        f: `/subpkg_task/except/index?id=${detailInfo.value.id}`,
        g: `/subpkg_task/delivery/index`
      } : {}, {
        h: detailInfo.value.status === 4
      }, detailInfo.value.status === 4 ? {
        i: `/subpkg_task/record/index`
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/subpkg_task/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
