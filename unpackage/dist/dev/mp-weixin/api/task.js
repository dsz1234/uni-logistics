"use strict";
const api_uniFetch = require("./uni-fetch.js");
const getQuestList = (data) => {
  return api_uniFetch.uniFetch({
    url: "/driver/tasks/list",
    method: "GET",
    data
  });
};
const taskDetail = (jobId) => {
  return api_uniFetch.uniFetch({
    url: `/driver/tasks/details/${jobId}`,
    method: "GET"
  });
};
const delay = (data) => {
  return api_uniFetch.uniFetch({
    url: "/driver/tasks/delay",
    method: "PUT",
    data
  });
};
const takeDelivery = (data) => {
  return api_uniFetch.uniFetch({
    url: "/driver/tasks/takeDelivery",
    method: "POST",
    data
  });
};
const reportException = (data) => {
  return api_uniFetch.uniFetch({
    url: "/driver/tasks/reportException",
    method: "POST",
    data
  });
};
exports.delay = delay;
exports.getQuestList = getQuestList;
exports.reportException = reportException;
exports.takeDelivery = takeDelivery;
exports.taskDetail = taskDetail;
