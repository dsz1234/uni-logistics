// http请求文件
import { createUniFetch } from 'uni-app-fetch';

// 使用自定义选项创建实例
const uniFetch = createUniFetch({
  // loading加载
  loading: { title: '加载中...' },
  baseURL: 'https://slwl-api.itheima.net',
  intercept: {
    // 请求拦截器
    request(options) {
      // TODO 通过请求头发送token
      return options;
    },
    // 相应拦截器
    request(result) {
      // TODO 进行相应拦截器处理(token过期/异常提示)
      return result;
    }
  }
});

export default uniFetch;
