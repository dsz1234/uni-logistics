import{a as r}from"./uni-fetch.216a285c.js";const s=s=>{if(s.account&&s.password)return r.post("/driver/login/account",s)},t=()=>r({url:"/driver/users",method:"GET"}),e=s=>r({url:"/driver/users/taskReport",method:"GET",data:s}),o=()=>r({url:"/driver/users/truck",method:"GET"});export{o as g,s as l,t as p,e as t};
