import{r as t,o as e,c as a,w as r,g as l,a as s,b as i,d as u,F as o,D as n,l as c,p,E as d}from"./index-d88a521f.js";import{_ as g,a as m}from"./uni-list.c6354b96.js";import{o as x,r as h}from"./uni-app.es.c0a9eb75.js";import{g as _}from"./user.9a1f8c51.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-fetch.216a285c.js";const T=f({__name:"index",setup(f){const T=t({});return x((()=>{(async()=>{let t=await _();console.log(t),T.value=t.data})()})),(t,x)=>{const _=p,f=d,v=n,b=h(c("uni-list-item"),g),j=h(c("uni-list"),m),k=l;return e(),a(k,{class:"page-container page-content"},{default:r((()=>[s(v,{class:"truck-pictures"},{default:r((()=>[(e(!0),i(o,null,u(T.value.pictureList,((t,l)=>(e(),a(f,{key:l},{default:r((()=>[s(_,{class:"picture",src:t.url,mode:""},null,8,["src"])])),_:2},1024)))),128))])),_:1}),s(j,null,{default:r((()=>[s(b,{border:!1,title:"车辆编号",rightText:T.value.id},null,8,["rightText"]),s(b,{border:!1,title:"车辆号牌",rightText:T.value.licensePlate},null,8,["rightText"]),s(b,{border:!1,title:"车型",rightText:T.value.truckType},null,8,["rightText"]),s(b,{border:!1,title:"所属机构",rightText:T.value.currentOrganName},null,8,["rightText"]),s(b,{border:!1,title:"载重",rightText:T.value.allowableLoad},null,8,["rightText"])])),_:1})])),_:1})}}},[["__scopeId","data-v-e2baa260"]]);export{T as default};