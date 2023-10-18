"use strict";
const api_uniFetch = require("./uni-fetch.js");
const getMessage = (data) => {
  return api_uniFetch.uniFetch({
    url: "/driver/messages/page",
    method: "GET",
    data
  });
};
const getReadAll = (contentType) => {
  return api_uniFetch.uniFetch.put(`/driver/messages/readAll/${contentType}`);
};
exports.getMessage = getMessage;
exports.getReadAll = getReadAll;
