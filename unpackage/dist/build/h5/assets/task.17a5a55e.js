import{a}from"./uni-fetch.216a285c.js";const t=t=>a({url:"/driver/tasks/list",method:"GET",data:t}),r=t=>a({url:`/driver/tasks/details/${t}`,method:"GET"}),s=t=>a({url:"/driver/tasks/delay",method:"PUT",data:t}),e=t=>a({url:"/driver/tasks/takeDelivery",method:"POST",data:t}),d=t=>a({url:"/driver/tasks/reportException",method:"POST",data:t});export{e as a,s as d,t as g,d as r,r as t};