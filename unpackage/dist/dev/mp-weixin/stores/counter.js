"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore(
  "user",
  () => {
    const token = common_vendor.ref("");
    return { token };
  },
  {
    persist: true
  }
);
exports.useUserStore = useUserStore;
