import{r as a,o as s,c as e,w as t,g as l,a as u,e as o,t as r,p as n,i as c,l as i}from"./index-d88a521f.js";import{_ as d,a as _}from"./uni-list.c6354b96.js";import{o as m,r as f}from"./uni-app.es.c0a9eb75.js";import{p,t as v}from"./user.9a1f8c51.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-fetch.216a285c.js";const h=g({__name:"index",setup(g){const h=a({}),w=a({});return m((()=>{(async()=>{try{const a=await p();h.value=a.data}catch(a){console.log(a)}})(),(async()=>{try{const a=await v(uni.utils.getYearAndMonth());w.value=a.data}catch(a){console.log(a)}})()})),(a,m)=>{const p=n,v=c,g=l,b=f(i("uni-list-item"),d),k=f(i("uni-list"),_);return s(),e(g,{class:"page-container"},{default:t((()=>[u(g,{class:"user-profile"},{default:t((()=>[u(p,{class:"avatar",src:h.value.avatar,mode:""},null,8,["src"]),u(v,{class:"username"},{default:t((()=>[o(r(h.value.name),1)])),_:1}),u(v,{class:"no"},{default:t((()=>[o("司机编号："+r(h.value.phone),1)])),_:1}),u(v,{class:"mobile"},{default:t((()=>[o("手机号码："+r(h.value.number),1)])),_:1})])),_:1}),u(g,{class:"month-overview"},{default:t((()=>[u(g,{class:"title"},{default:t((()=>[o("我的任务")])),_:1}),u(g,{class:"content"},{default:t((()=>[u(g,{class:"item"},{default:t((()=>[u(v,{class:"volumn"},{default:t((()=>[o(r(w.value.taskAmounts),1)])),_:1}),u(v,{class:"label"},{default:t((()=>[o("任务总量")])),_:1})])),_:1}),u(g,{class:"item"},{default:t((()=>[u(v,{class:"volumn"},{default:t((()=>[o(r(w.value.completedAmounts),1)])),_:1}),u(v,{class:"label"},{default:t((()=>[o("完成任务量")])),_:1})])),_:1}),u(g,{class:"item"},{default:t((()=>[u(v,{class:"volumn"},{default:t((()=>[o(r(w.value.transportMileage),1)])),_:1}),u(v,{class:"label"},{default:t((()=>[o("运输里程(km)")])),_:1})])),_:1})])),_:1})])),_:1}),u(g,{class:"entry-list"},{default:t((()=>[u(k,{border:!1},{default:t((()=>[u(b,{to:"/subpkg_user/truck/index",showArrow:"",title:"车辆信息"}),u(b,{to:"/subpkg_user/task/index",showArrow:"",title:"任务数据"}),u(b,{to:"/subpkg_user/settings/index",showArrow:"",title:"系统设置"})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-caf071c7"]]);export{h as default};
