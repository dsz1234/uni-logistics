import App from './App';
import './utils/utils.js';

// 引入pinia
import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import piniaPluginPersistedstate from '@/stores/persist.js';

// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
  const app = createSSRApp(App);
  // 实例化Pinia
  const pinia = createPinia();
  // 传递给项目应用
  app.use(pinia);
  pinia.use(piniaPluginPersistedstate);
  return {
    app
  };
}
// #endif
