"use strict";const r=require("./uni-fetch.js");exports.getTruck=()=>r.uniFetch({url:"/driver/users/truck",method:"GET"}),exports.login=e=>{if(e.account&&e.password)return r.uniFetch.post("/driver/login/account",e)},exports.proFile=()=>r.uniFetch({url:"/driver/users",method:"GET"}),exports.taskReport=e=>r.uniFetch({url:"/driver/users/taskReport",method:"GET",data:e});
