"use strict";const e=require("./common/vendor.js"),r=require("./stores/counter.js"),o=require("./api/user.js");if(!Array){(e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-forms"))()}Math||((()=>"./uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"./uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const a={__name:"account",setup(a){const s=r.useUserStore(),u=e.reactive({account:"admin1",password:"123456"}),t=e.ref(),n=e.ref({account:{rules:[{required:!0,errorMessage:"请输入登录账号"},{pattern:/^[a-zA-Z0-9]{5,8}$/,errorMessage:"登录账号格式不正确"}]},password:{rules:[{required:!0,errorMessage:"请输入登录密码"},{pattern:/^\d{6}$/,errorMessage:"登录密码格式不正确"}]}}),i=e.ref(""),l=e.ref("");e.onLoad((e=>{i.value=e.redirectUrl,l.value=e.routeType}));const c=async()=>{const r=await t.value.validate();try{let a=await o.login(r);a.data&&(s.token=a.data),"switchTab"===l.value?e.index.switchTab({url:i.value}):e.index.redirectTo({url:i.value})}catch(a){console.log(a)}},m=e.ref(!1);return(r,o)=>e.e({a:u.account,b:e.o((e=>u.account=e.detail.value)),c:e.p({name:"account"}),d:m.value?"text":"password",e:u.password,f:e.o((e=>u.password=e.detail.value)),g:e.o((e=>u.password="")),h:m.value},m.value?{i:e.o((e=>m.value=!m.value))}:{j:e.o((e=>m.value=!m.value))},{k:e.p({name:"password"}),l:e.sr(t,"4f96e1a2-0",{k:"accountForm"}),m:e.p({rules:n.value,modelValue:u}),n:e.o(c)})}};exports._sfc_main=a;