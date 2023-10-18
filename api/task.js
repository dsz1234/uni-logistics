import uniFetch from './uni-fetch.js';

// 获取任务列表
export const getQuestList = (data) => {
  return uniFetch({
    url: '/driver/tasks/list',
    method: 'GET',
    data
  });
};

// 任务详情
export const taskDetail = (jobId) => {
  return uniFetch({
    url: `/driver/tasks/details/${jobId}`,
    method: 'GET'
  });
};

// 延迟提货
export const delay = (data) => {
  return uniFetch({
    url: '/driver/tasks/delay',
    method: 'PUT',
    data
  });
};
// 提货
export const takeDelivery = (data) => {
  return uniFetch({
    url: '/driver/tasks/takeDelivery',
    method: 'POST',
    data
  });
};
// 交付
export const deliver = (data) => {
  return uniFetch({
    url: '/driver/tasks/deliver',
    method: 'POST',
    data
  });
};
// 上报异常
export const reportException = (data) => {
  return uniFetch({
    url: '/driver/tasks/reportException',
    method: 'POST',
    data
  });
};

// 回车登记
export const truckRegistration = (data) => {
  return uniFetch.post('/driver/tasks/truckRegistration', data);
};
