// http请求文件
import { createUniFetch } from 'uni-app-fetch';

// 引入user的store
import { useUserStore } from '@/stores/counter.js';

// 定义tabbar路径
const tabBarPagePaths = ['pages/task/index', 'pages/message/index', 'pages/my/index'];

// 使用自定义选项创建实例
const uniFetch = createUniFetch({
  // loading加载
  loading: { title: '加载中...' },
  baseURL: 'https://slwl-api.itheima.net',
  intercept: {
    // 请求拦截器
    request(options) {
      const store = useUserStore();
      // 第一种写法;
      // if (store.token) options.header.Authorization = store.token;
      // 第二种写法
      const defaultHeader = {
        Authorization: store.token
      };

      options.header = Object.assign({}, defaultHeader, options.header);
      return options;
    },
    // 相应拦截器
    response(result) {
      // console.log('result', result);
      if (result.statusCode === 200 && result.data.code === 200) {
        return result.data;
      }
      if (result.statusCode === 401) {
        // TODO token过期处理
        // 页面栈 ->  4 个路由 []
        const pageStack = getCurrentPages();
        console.log('pageStack', pageStack);

        const redirectUrl = pageStack[pageStack.length - 1].route;
        const routeType = tabBarPagePaths.includes(redirectUrl) ? 'switchTab' : 'redirectTo';

        // 当前回调的地址是否是tabbar页面
        // 1. 跳转到登录页
        return uni.redirectTo({
          // url: '/pages/login/index?redirectUrl=' + redirectUrl + "&routeType=" +routeType
          url: `/pages/login/index?routeType=${routeType}&redirectUrl=/${redirectUrl}`
        });
      }

      uni.utils.toast(result.data.msg || '请求失败');
    }
  }
});

export default uniFetch;
