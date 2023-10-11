/* 登录模块相关接口 */

import uniFetch from './uni-fetch.js';

// 用户登录
export const login = (data) => {
  if (!data.account || !data.password) return;
  return uniFetch.post('/driver/login/account', data);
};

// 个人资料
export const proFile = () => {
  return uniFetch({ url: '/driver/users', method: 'GET' });
};

// 任务数据
export const taskReport = (data) => {
  return uniFetch({ url: '/driver/users/taskReport', method: 'GET', data });
};
// 车辆信息
export const getTruck = () => {
  return uniFetch({ url: '/driver/users/truck', method: 'GET' });
};
