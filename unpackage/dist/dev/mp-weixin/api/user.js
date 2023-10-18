"use strict";
const api_uniFetch = require("./uni-fetch.js");
const login = (data) => {
  if (!data.account || !data.password)
    return;
  return api_uniFetch.uniFetch.post("/driver/login/account", data);
};
const proFile = () => {
  return api_uniFetch.uniFetch({ url: "/driver/users", method: "GET" });
};
const taskReport = (data) => {
  return api_uniFetch.uniFetch({ url: "/driver/users/taskReport", method: "GET", data });
};
const getTruck = () => {
  return api_uniFetch.uniFetch({ url: "/driver/users/truck", method: "GET" });
};
exports.getTruck = getTruck;
exports.login = login;
exports.proFile = proFile;
exports.taskReport = taskReport;
