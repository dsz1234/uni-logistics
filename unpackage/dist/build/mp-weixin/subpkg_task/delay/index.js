"use strict";const e=require("../../common/vendor.js"),t=require("../../api/task.js");if(require("../../api/uni-fetch.js"),require("../../stores/counter.js"),!Array){(e.resolveComponent("uni-list-item")+e.resolveComponent("uni-list"))()}Math||((()=>"../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js")+(()=>"../../uni_modules/uni-list/components/uni-list/uni-list.js"))();const u={__name:"index",setup(u){const a=e.ref(""),l=e.ref(""),n=e.ref(""),i=e.ref(""),o=e.computed((()=>i.value.length)),s=e.computed((()=>o.value<=50&&o.value>0));e.onLoad((e=>{a.value=e.planDepartureTime,l.value=e.id}));const r=e=>{const[t]=a.value.split(" ");n.value=`${t} ${e.detail.value}`},v=e.computed((()=>{const e=new Date(a.value).getTime(),t=new Date(n.value).getTime();return t-e>0&&t-e<72e5})),c=e.computed((()=>s.value&&v.value)),m=async()=>{try{const u={id:l.value,delayTime:n.value,delayReason:i.value};await t.delay(u);e.index.reLaunch({url:"/pages/task/index"})}catch(u){console.log(u)}};return(t,u)=>e.e({a:e.p({title:"原定时间",rightText:a.value}),b:!n.value},n.value?{c:e.t(n.value+":00"),d:e.unref(v)?"":1}:{},{e:e.o(r),f:e.p({title:"延迟时间",showArrow:!0}),g:i.value,h:e.o((e=>i.value=e.detail.value)),i:e.t(e.unref(o)),j:e.unref(o)>50?1:"",k:!e.unref(c),l:e.o(m),m:e.p({border:!1})})}};wx.createPage(u);
