import{r as e,o as a,c as l,w as s,a as t,b as u,F as r,d,e as c,t as n,f as i,i as o,g as _,h as f,S as v,I as p,j as g,v as k,n as y}from"./index-d88a521f.js";import{o as h}from"./uni-app.es.c0a9eb75.js";import{g as m}from"./task.17a5a55e.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-fetch.216a285c.js";const w=b({__name:"pickup",setup(p){const g=e({page:0,pageSize:5,status:1}),k=e([]),y=async()=>{try{g.value.page++;const e=await m(g.value);1===g.value.page&&(k.value=[]),k.value=[...k.value,...e.data.items||[]],w.value=g.value.page==e.data.pages,x.value=0===k.value.length}catch(e){console.log(e)}};h((()=>{y()}));const b=e(!1),w=e(!1),x=e(!1),I=()=>{w.value||y()},$=async()=>{b.value=!0,g.value.page=0,await y(),b.value=!1};return(e,p)=>{const g=o,y=_,h=f,m=v;return a(),l(y,{class:"box"},{default:s((()=>[t(m,{"scroll-y":"true",class:"scroll-view-wrapper","refresher-triggered":b.value,onRefresherrefresh:$,"refresher-enabled":"",onScrolltolower:I},{default:s((()=>[t(y,{class:"scroll-view-wrapper"},{default:s((()=>[(a(!0),u(r,null,d(k.value,((e,u)=>(a(),l(y,{class:"task-card",key:u},{default:s((()=>[t(h,{"hover-class":"none",url:`/subpkg_task/detail/index?id=${e.id}`},{default:s((()=>[t(y,{class:"header"},{default:s((()=>[t(g,{class:"title"},{default:s((()=>[c("任务编号: "+n(e.transportTaskId),1)])),_:2},1024),t(g,{class:"tips"},{default:s((()=>[c("已延迟")])),_:1})])),_:2},1024),t(y,{class:"body"},{default:s((()=>[t(y,{class:"time-line"},{default:s((()=>[t(y,{class:"line"},{default:s((()=>[c(n(e.startAddress),1)])),_:2},1024),t(y,{class:"line"},{default:s((()=>[c(n(e.endAddress),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"]),t(y,{class:"footer"},{default:s((()=>[t(y,{class:"time"},{default:s((()=>[t(y,null,{default:s((()=>[c("提货时间")])),_:1}),t(y,null,{default:s((()=>[c(n(e.planDepartureTime),1)])),_:2},1024)])),_:2},1024),e.enablePickUp?(a(),l(h,{key:0,class:"action",url:`/subpkg_task/pickup/index?id=${e.id}`},{default:s((()=>[c("提货")])),_:2},1032,["url"])):(a(),l(h,{key:1,class:"action disabled"},{default:s((()=>[c("提货")])),_:1}))])),_:2},1024)])),_:2},1024)))),128)),x.value?(a(),l(y,{key:0,class:"task-blank"},{default:s((()=>[c("无待提货物")])),_:1})):i("",!0)])),_:1})])),_:1},8,["refresher-triggered"])])),_:1})}}},[["__scopeId","data-v-2317a711"]]),x=b({__name:"complete",setup(g){const k=e([]),y=e({page:0,pageSize:5,status:2}),b=e(!1),w=e(!1),x=e(!1),I=async()=>{try{y.value.page++;const e=await m(y.value);1===y.value.page&&(k.value=[]),k.value=[...k.value,...e.data.items||[]],w.value=y.value.page==e.data.pages,x.value=k.value.length<=0}catch(e){console.log(e)}};h((()=>{I()}));const $=()=>{w.value||I()},j=async()=>{b.value=!0,y.value.page=0,await I(),b.value=!1};return(e,g)=>{const y=o,h=p,m=_,w=f,I=v;return a(),l(m,{class:"page-container"},{default:s((()=>[t(m,{class:"search-bar"},{default:s((()=>[t(y,{class:"iconfont icon-search"}),t(h,{class:"input",type:"text",placeholder:"输入任务编号"})])),_:1}),t(I,{"refresher-triggered":b.value,onRefresherrefresh:j,"refresher-enabled":"",onScrolltolower:$,class:"scroll-view-wrapper","scroll-y":"true"},{default:s((()=>[(a(!0),u(r,null,d(k.value,((e,u)=>(a(),l(m,{class:"card",key:u},{default:s((()=>[t(w,{"hover-class":"none",url:`/subpkg_task/detail/index?id=${e.id}`},{default:s((()=>[t(m,{class:"header"},{default:s((()=>[t(y,{class:"title"},{default:s((()=>[c("任务编号："+n(e.transportTaskId),1)])),_:2},1024)])),_:2},1024),t(m,{class:"body"},{default:s((()=>[t(m,{class:"time-line"},{default:s((()=>[t(m,{class:"line"},{default:s((()=>[c(n(e.startAddress),1)])),_:2},1024),t(m,{class:"line"},{default:s((()=>[c(n(e.endAddress),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"]),t(m,{class:"footer"},{default:s((()=>[t(m,{class:"time"},{default:s((()=>[t(m,null,{default:s((()=>[c("到货时间")])),_:1}),t(m,null,{default:s((()=>[c(n(e.planDepartureTime),1)])),_:2},1024)])),_:2},1024),2===e.status?(a(),l(w,{key:0,class:"action",url:`/subpkg_task/delivery/index?id=${e.id}`},{default:s((()=>[c("交付")])),_:2},1032,["url"])):i("",!0),4===e.status?(a(),l(w,{key:1,class:"action",url:`/subpkg_task/delivery/index?id=${e.id}`},{default:s((()=>[c("回车登记")])),_:2},1032,["url"])):i("",!0)])),_:2},1024)])),_:2},1024)))),128)),x.value?(a(),l(m,{key:0,class:"task-blank"},{default:s((()=>[c("无待提货物")])),_:1})):i("",!0)])),_:1},8,["refresher-triggered"])])),_:1})}}},[["__scopeId","data-v-d1904228"]]),I=b({__name:"enRoute",setup(p){const g=e([]),k=e({page:0,pageSize:5,status:2}),y=e(!1),b=e(!1),w=e(!1),x=async()=>{try{k.value.page++;const e=await m(k.value);1===k.value.page&&(g.value=[]),g.value=[...g.value,...e.data.items||[]],b.value=k.value.page==e.data.pages,w.value=g.value.length<=0}catch(e){console.log(e)}};h((()=>{x()}));const I=()=>{b.value||x()},$=async()=>{y.value=!0,k.value.page=0,await x(),y.value=!1};return(e,p)=>{const k=o,h=_,m=f,b=v;return a(),l(b,{"refresher-triggered":y.value,onRefresherrefresh:$,"refresher-enabled":"",onScrolltolower:I,class:"scroll-view-wrapper","scroll-y":"true"},{default:s((()=>[(a(!0),u(r,null,d(g.value,((e,u)=>(a(),l(h,{class:"card",key:u},{default:s((()=>[t(m,{"hover-class":"none",url:`/subpkg_task/detail/index?id=${e.id}`},{default:s((()=>[t(h,{class:"header"},{default:s((()=>[t(k,{class:"title"},{default:s((()=>[c("任务编号："+n(e.transportTaskId),1)])),_:2},1024)])),_:2},1024),t(h,{class:"body"},{default:s((()=>[t(h,{class:"time-line"},{default:s((()=>[t(h,{class:"line"},{default:s((()=>[c(n(e.startAddress),1)])),_:2},1024),t(h,{class:"line"},{default:s((()=>[c(n(e.endAddress),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"]),t(h,{class:"footer"},{default:s((()=>[t(h,{class:"time"},{default:s((()=>[t(h,null,{default:s((()=>[c("到货时间")])),_:1}),t(h,null,{default:s((()=>[c(n(e.planDepartureTime),1)])),_:2},1024)])),_:2},1024),2===e.status?(a(),l(m,{key:0,class:"action",url:`/subpkg_task/delivery/index?id=${e.id}`},{default:s((()=>[c("交付")])),_:2},1032,["url"])):i("",!0),4===e.status?(a(),l(m,{key:1,class:"action",url:`/subpkg_task/delivery/index?id=${e.id}`},{default:s((()=>[c("回车登记")])),_:2},1032,["url"])):i("",!0)])),_:2},1024)])),_:2},1024)))),128)),w.value?(a(),l(h,{key:0,class:"task-blank"},{default:s((()=>[c("无待提货物")])),_:1})):i("",!0)])),_:1},8,["refresher-triggered"])}}},[["__scopeId","data-v-8c66e167"]]),$=b({__name:"index",setup(o){const f=e(0),v=e([{title:"待提货",rendered:!0},{title:"在途",rendered:!1},{title:"已完成",rendered:!1}]);return(e,o)=>{const p=_;return a(),l(p,{class:"page-container"},{default:s((()=>[t(p,{class:"tab"},{default:s((()=>[(a(!0),u(r,null,d(v.value,((e,u)=>(a(),l(p,{class:"tab-item",onClick:e=>(e=>{v.value[e].rendered=!0,f.value=e})(u),key:u},{default:s((()=>[t(p,{class:y(["title",{active:f.value===u}])},{default:s((()=>[c(n(e.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1}),t(p,{class:"message-list"},{default:s((()=>[v.value[0].rendered?g((a(),l(w,{key:0},null,512)),[[k,0===f.value]]):i("",!0)])),_:1}),t(p,{class:"message-list"},{default:s((()=>[v.value[1].rendered?g((a(),l(I,{key:0},null,512)),[[k,1===f.value]]):i("",!0)])),_:1}),t(p,{class:"message-list"},{default:s((()=>[v.value[2].rendered?g((a(),l(x,{key:0},null,512)),[[k,2===f.value]]):i("",!0)])),_:1})])),_:1})}}},[["__scopeId","data-v-107c9849"]]);export{$ as default};