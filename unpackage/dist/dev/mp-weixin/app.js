"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./utils/utils.js");
const stores_persist = require("./stores/persist.js");
if (!Math) {
  "./pages/task/index.js";
  "./pages/login/index.js";
  "./pages/my/index.js";
  "./pages/message/index.js";
  "./pages/login/components/account.js";
  "./subpkg_user/truck/index.js";
  "./subpkg_user/task/index.js";
  "./subpkg_user/settings/index.js";
  "./subpkg_user/content/index.js";
  "./subpkg_task/detail/index.js";
  "./subpkg_task/pickup/index.js";
  "./subpkg_task/delay/index.js";
  "./subpkg_task/delivery/index.js";
  "./subpkg_task/except/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/实训二/神领物流/uni-logistics/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const pinia = common_vendor.createPinia();
  app.use(pinia);
  pinia.use(stores_persist.piniaPluginPersistedstate);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
