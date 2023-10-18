"use strict";
const common_vendor = require("../common/vendor.js");
const utils = {
  toast(title = "", icon = "none") {
    common_vendor.index.showToast({
      title,
      icon,
      mask: true
    });
  },
  // 获取年和月
  getYearAndMonth() {
    const date = /* @__PURE__ */ new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    return { year, month };
  }
};
common_vendor.index.utils = utils;
