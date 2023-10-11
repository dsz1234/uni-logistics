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
