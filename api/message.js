import uniFetch from './uni-fetch.js';

// 分页查询消息列表
export const getMessage = (data) => {
  return uniFetch({
    url: '/driver/messages/page',
    method: 'GET',
    data
  });
};

// 根据类型查询未读消息数量
export const getMessageCountType = (contentType) => {
  return uniFetch.get(`/driver/messages/countType/${contentType}`);
};

// 全部已读
export const getReadAll = (contentType) => {
  return uniFetch.put(`/driver/messages/readAll/${contentType}`);
};

// 标记已读
export const getMarkRead = (id) => {
  return uniFetch.put(`/driver/messages/${id}`);
};
