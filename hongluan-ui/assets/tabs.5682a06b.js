import{p as v,R as g,H as c,L as h,F as p,P as o,X as d,V as r,W as C,af as N,S as e,T as B,a1 as x,Y as y,Q as l,o as V}from"./vue.85e091e9.js";import{a0 as F,y as $}from"./hongluan-icons.6cddbf05.js";const k=v({setup(f){let a=2;const u=g("2"),b=g([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]),n=(t,i)=>{if(i==="add"){const s=`${++a}`;b.value.push({title:"New Tab",name:s,content:"New Tab content"}),u.value=s}else if(i==="remove"){const s=b.value;let _=u.value;_===t&&s.forEach((m,T)=>{if(m.name===t){const D=s[T+1]||s[T-1];D&&(_=D.name)}}),u.value=_,b.value=s.filter(m=>m.name!==t)}};return(t,i)=>{const s=c("hl-icon"),_=c("hl-tab-pane"),m=c("hl-tabs");return h(),p(m,{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=T=>u.value=T),type:"card",class:"demo-tabs",editable:"",onEdit:n},{"add-icon":o(()=>[d(s,null,{default:o(()=>[d(r(F))]),_:1})]),default:o(()=>[(h(!0),C(x,null,N(b.value,T=>(h(),p(_,{key:T.name,label:T.title,name:T.name},{default:o(()=>[e(B(T.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const w=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),S=e("\u706B\u72D0\u6D4F\u89C8\u5668"),j=e("\u6B27\u670B\u6D4F\u89C8\u5668"),E=v({setup(f){const a=g("second"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[w]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[S]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[j]),_:1})]),_:1},8,["modelValue"])}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const I=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),q=e("\u706B\u72D0\u6D4F\u89C8\u5668"),M=e("\u6B27\u670B\u6D4F\u89C8\u5668"),O=v({setup(f){const a=g("first"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),type:"button",onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[I]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[q]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[M]),_:1})]),_:1},8,["modelValue"])}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const A=v({setup(f){const a=y({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),u=(b,n)=>{if(n==="add"){let t=++a.tabIndex+"";a.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"}),a.editableTabsValue=t}if(n==="remove"){let t=a.editableTabs,i=a.editableTabsValue;i===b&&t.forEach((s,_)=>{if(s.name===b){let m=t[_+1]||t[_-1];m&&(i=m.name)}}),a.editableTabsValue=i,a.editableTabs=t.filter(s=>s.name!==b)}};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:r(a).editableTabsValue,"onUpdate:modelValue":n[0]||(n[0]=s=>r(a).editableTabsValue=s),editable:"",onEdit:u},{default:o(()=>[(h(!0),C(x,null,N(r(a).editableTabs,s=>(h(),p(t,{key:s.name,label:s.title,name:s.name},{default:o(()=>[e(B(s.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const R=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),Q=e("\u706B\u72D0\u6D4F\u89C8\u5668"),W=e("\u6B27\u670B\u6D4F\u89C8\u5668"),X=v({setup(f){const a=g("second"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),gap:"var(--md)",onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[R]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[Q]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[W]),_:1})]),_:1},8,["modelValue"])}}});var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const H=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),Y=e("\u706B\u72D0\u6D4F\u89C8\u5668"),J=e("\u6B27\u670B\u6D4F\u89C8\u5668"),K=v({setup(f){const a=g("first"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),type:"line",onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[H]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[Y]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[J]),_:1})]),_:1},8,["modelValue"])}}});var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const tt=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),et=e("\u706B\u72D0\u6D4F\u89C8\u5668"),at=e("\u6B27\u670B\u6D4F\u89C8\u5668"),nt=v({setup(f){const a=g("second"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),"nav-height":"80px",onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[tt]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[et]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[at]),_:1})]),_:1},8,["modelValue"])}}});var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const ot=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),dt=e("\u706B\u72D0\u6D4F\u89C8\u5668"),st=e("\u6B27\u670B\u6D4F\u89C8\u5668"),ut=v({setup(f){const a=g("second"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),"nav-padding":"var(--xxl)",onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[ot]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[dt]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[st]),_:1})]),_:1},8,["modelValue"])}}});var bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut});const it=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),ct=e("\u706B\u72D0\u6D4F\u89C8\u5668"),rt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),mt=v({setup(f){const a=g("second"),u=(b,n)=>{console.log(b,n)};return(b,n)=>{const t=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),"pane-height":"calc(var(--xxl) * 6)",onTabClick:u},{default:o(()=>[d(t,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[it]),_:1}),d(t,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[ct]),_:1}),d(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[rt]),_:1})]),_:1},8,["modelValue"])}}});var ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const _t={style:{"margin-bottom":"20px"}},pt=e(" add tab "),ft=v({setup(f){const a=y({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),u=()=>{let n=++a.tabIndex+"";a.editableTabs.push({title:"New Tab",name:n,content:"New Tab content"}),a.editableTabsValue=n},b=n=>{let t=a.editableTabs,i=a.editableTabsValue;i===n&&t.forEach((s,_)=>{if(s.name===n){let m=t[_+1]||t[_-1];m&&(i=m.name)}}),a.editableTabsValue=i,a.editableTabs=t.filter(s=>s.name!==n)};return(n,t)=>{const i=c("hl-button"),s=c("hl-tab-pane"),_=c("hl-tabs");return h(),C(x,null,[l("div",_t,[d(i,{size:"sm",onClick:t[0]||(t[0]=m=>u())},{default:o(()=>[pt]),_:1})]),d(_,{modelValue:r(a).editableTabsValue,"onUpdate:modelValue":t[1]||(t[1]=m=>r(a).editableTabsValue=m),type:"line",closable:"",onTabRemove:b},{default:o(()=>[(h(!0),C(x,null,N(r(a).editableTabs,m=>(h(),p(s,{key:m.name,label:m.title,name:m.name},{default:o(()=>[e(B(m.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])],64)}}});var vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ft});const gt=e("top"),Tt=e("right"),Ct=e("bottom"),xt=e("left"),Nt=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),Bt=e("\u706B\u72D0\u6D4F\u89C8\u5668"),Dt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),yt=v({setup(f){const a=g("top");return(u,b)=>{const n=c("hl-radio"),t=c("hl-radio-group"),i=c("hl-tab-pane"),s=c("hl-tabs");return h(),C(x,null,[d(t,{modelValue:a.value,"onUpdate:modelValue":b[0]||(b[0]=_=>a.value=_),style:{"margin-bottom":"30px"}},{default:o(()=>[d(n,{label:"top"},{default:o(()=>[gt]),_:1}),d(n,{label:"right"},{default:o(()=>[Tt]),_:1}),d(n,{label:"bottom"},{default:o(()=>[Ct]),_:1}),d(n,{label:"left"},{default:o(()=>[xt]),_:1})]),_:1},8,["modelValue"]),d(s,{"tab-position":a.value,type:"button",style:{height:"200px"}},{default:o(()=>[d(i,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668"},{default:o(()=>[Nt]),_:1}),d(i,{label:"\u706B\u72D0\u6D4F\u89C8\u5668"},{default:o(()=>[Bt]),_:1}),d(i,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:o(()=>[Dt]),_:1})]),_:1},8,["tab-position"])],64)}}});var Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yt});const Ft=e(" \u6211\u7684\u884C\u7A0B "),$t=e(" \u6211\u7684\u884C\u7A0B "),kt=e("\u6D88\u606F\u4E2D\u5FC3"),zt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),wt=v({setup(f){return(a,u)=>{const b=c("hl-icon"),n=c("hl-tab-pane"),t=c("hl-tabs");return h(),p(t,null,{default:o(()=>[d(n,null,{label:o(()=>[d(b,{class:"sm m-r-xs"},{default:o(()=>[d(r($))]),_:1}),Ft]),default:o(()=>[$t]),_:1}),d(n,{label:"\u6D88\u606F\u4E2D\u5FC3"},{default:o(()=>[kt]),_:1}),d(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:o(()=>[zt]),_:1})]),_:1})}}});var St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wt});const jt=l("h1",null,"Tabs \u6807\u7B7E\u9875",-1),Et=l("p",null,"Tabs \u7528\u4E8E\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),Pt=l("div",null,[l("p",null,[e("Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u6807\u7B7E\u529F\u80FD\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),l("code",null,"value"),e(" \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u3002")])],-1),It=l("h2",{id:"line-yang-shi"},[l("a",{class:"header-anchor",href:"#line-yang-shi"}),e(" Line \u6837\u5F0F")],-1),qt=l("p",null,[e("\u53EA\u9700\u8981\u8BBE\u7F6E "),l("code",null,"type"),e(" \u5C5E\u6027\u4E3A "),l("code",null,"line"),e(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u7EBF\u6761\u98CE\u683C\u3002")],-1),Mt=l("h2",{id:"button-yang-shi"},[l("a",{class:"header-anchor",href:"#button-yang-shi"}),e(" Button \u6837\u5F0F")],-1),Ot=l("p",null,[e("\u53EA\u9700\u8981\u8BBE\u7F6E "),l("code",null,"type"),e(" \u5C5E\u6027\u4E3A "),l("code",null,"button"),e(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u6309\u94AE\u98CE\u683C\u3002")],-1),Ut=l("h2",{id:"paddingshu-xing"},[l("a",{class:"header-anchor",href:"#paddingshu-xing"}),e(" Padding\u5C5E\u6027")],-1),At=l("p",null,[l("code",null,"nav-padding"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u7684\u4E24\u4FA7\u586B\u5145\u5C3A\u5BF8\uFF0C\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Lt=l("h2",{id:"gapshu-xing"},[l("a",{class:"header-anchor",href:"#gapshu-xing"}),e(" Gap\u5C5E\u6027")],-1),Rt=l("p",null,[l("code",null,"gap"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Qt=l("h2",{id:"biao-qian-gao-du-she-zhi"},[l("a",{class:"header-anchor",href:"#biao-qian-gao-du-she-zhi"}),e(" \u6807\u7B7E\u9AD8\u5EA6\u8BBE\u7F6E")],-1),Wt=l("p",null,[l("code",null,"nav-height"),e(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u6807\u7B7E\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Xt=l("h2",{id:"nei-rong-qu-gao-du-she-zhi"},[l("a",{class:"header-anchor",href:"#nei-rong-qu-gao-du-she-zhi"}),e(" \u5185\u5BB9\u533A\u9AD8\u5EA6\u8BBE\u7F6E")],-1),Gt=l("p",null,[l("code",null,"pane-height"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Ht=l("h2",{id:"wei-zhi"},[l("a",{class:"header-anchor",href:"#wei-zhi"}),e(" \u4F4D\u7F6E")],-1),Yt=l("p",null,[e("\u53EF\u4EE5\u901A\u8FC7 "),l("code",null,"tab-position"),e(" \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E")],-1),Jt=l("div",null,[l("p",null,[e("\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E "),l("code",null,'tabPosition="left|right|top|bottom"')])],-1),Kt=l("h2",{id:"zi-ding-yi-biao-qian-ye"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian-ye"}),e(" \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875")],-1),Zt=l("p",null,[e("\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),l("code",null,"slot"),e(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u7684\u5185\u5BB9")],-1),te=l("h2",{id:"dong-tai-zeng-jian-biao-qian-ye"},[l("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-qian-ye"}),e(" \u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875")],-1),ee=l("p",null,"\u589E\u51CF\u6807\u7B7E\u9875\u6309\u94AE\u53EA\u80FD\u5728\u6807\u7B7E\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u4E0B\u4F7F\u7528",-1),ae=l("h2",{id:"zi-ding-yi-tian-jia-an-niu"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-tian-jia-an-niu"}),e(" \u81EA\u5B9A\u4E49\u6DFB\u52A0\u6309\u94AE")],-1),ne=l("h2",{id:"zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"}),e(" \u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668")],-1),le=V('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u6807\u7B7E\u7684 name</td><td>string / number</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u6807\u7B7E\u7684 name</td></tr><tr><td>type</td><td>\u98CE\u683C\u7C7B\u578B</td><td>string</td><td>line</td><td>\u663E\u793A\u4E3A\u7EBF\u6761\u6837\u5F0F</td></tr><tr><td>nav-height</td><td>\u6807\u7B7E\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>nav-padding</td><td>\u6807\u7B7E\u7684\u586B\u5145\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u6807\u7B7E\u7684\u95F4\u9694\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pane-height</td><td>\u5185\u5BB9\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-pane</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>addable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tab-position</td><td>\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002</td><td>Function(activeName, oldActiveName)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr><tr><td>tab-change</td><td><code>activeName</code>\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(name: <code>TabPaneName</code>)</td></tr><tr><td>tab-remove</td><td>\u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name</td></tr><tr><td>tab-add</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>edit</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1</td><td>(targetName, action)</td></tr></tbody></table><h2 id="tabs-slots"><a class="header-anchor" href="#tabs-slots"></a> Tabs Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>add-icon</td><td>\u81EA\u5B9A\u4E49\u6DFB\u52A0\u6309\u94AE</td></tr></tbody></table><h2 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes"></a> Tab Pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u4E0E\u6807\u7B7E\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u6807\u7B7E\u522B\u540D</td><td>string / number</td><td>\u2014</td><td>\u8BE5\u6807\u7B7E\u5728\u6807\u7B7E\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u6807\u7B7E\u5219\u4E3A&#39;1&#39;</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lazy</td><td>\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',8),se={setup(f){const a="tabs",u={"../../../examples/tabs/add-icon.vue":z,"../../../examples/tabs/basic.vue":P,"../../../examples/tabs/button.vue":U,"../../../examples/tabs/editable.vue":L,"../../../examples/tabs/gap.vue":G,"../../../examples/tabs/line.vue":Z,"../../../examples/tabs/nav-height.vue":lt,"../../../examples/tabs/padding.vue":bt,"../../../examples/tabs/pane-height.vue":ht,"../../../examples/tabs/pane.vue":vt,"../../../examples/tabs/position.vue":Vt,"../../../examples/tabs/slot.vue":St};return(b,n)=>{const t=c("demo-block"),i=c("right-nav");return h(),C(x,null,[l("section",null,[jt,Et,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/basic","source-code":`<template>
  <hl-tabs v-model="activeName" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
<\/script>
`},{default:o(()=>[Pt]),_:1},8,["demos"]),It,qt,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/line","source-code":`<template>
  <hl-tabs v-model="activeName" type="line" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Mt,Ot,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/button","source-code":`<template>
  <hl-tabs v-model="activeName" type="button" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Ut,At,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/padding","source-code":`<template>
  <hl-tabs v-model="activeName" nav-padding="var(--xxl)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Lt,Rt,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/gap","source-code":`<template>
  <hl-tabs v-model="activeName" gap="var(--md)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Qt,Wt,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/nav-height","source-code":`<template>
  <hl-tabs v-model="activeName" nav-height="80px" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Xt,Gt,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/pane-height","source-code":`<template>
  <hl-tabs v-model="activeName" pane-height="calc(var(--xxl) * 6)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Ht,Yt,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/position","source-code":`<template>
  <hl-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <hl-radio label="top">top</hl-radio>
    <hl-radio label="right">right</hl-radio>
    <hl-radio label="bottom">bottom</hl-radio>
    <hl-radio label="left">left</hl-radio>
  </hl-radio-group>

  <hl-tabs :tab-position="tabPosition" type="button" style="height: 200px;">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('top')
<\/script>
`},{default:o(()=>[Jt]),_:1},8,["demos"]),Kt,Zt,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/slot","source-code":`<template>
  <hl-tabs>
    <hl-tab-pane>
      <template #label>
        <hl-icon class="sm m-r-xs"><two-application /></hl-icon>
        \u6211\u7684\u884C\u7A0B
      </template>
      \u6211\u7684\u884C\u7A0B
    </hl-tab-pane>
    <hl-tab-pane label="\u6D88\u606F\u4E2D\u5FC3">\u6D88\u606F\u4E2D\u5FC3</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>
<script lang="ts" setup>

import { TwoApplication } from '@hongluan-ui/icons'
<\/script>
`},null,8,["demos"]),te,ee,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/editable","source-code":`<template>
  <hl-tabs v-model="state.editableTabsValue" editable @edit="handleTabsEdit">
    <hl-tab-pane
      v-for="item in state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  editableTabsValue: '2',
  editableTabs: [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ],
  tabIndex: 2,
})
const handleTabsEdit = (targetName, action) => {
  if (action === 'add') {
    let newTabName = ++state.tabIndex + ''
    state.editableTabs.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    state.editableTabsValue = newTabName
  }
  if (action === 'remove') {
    let tabs = state.editableTabs
    let activeName = state.editableTabsValue
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    state.editableTabsValue = activeName
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)
  }
}

<\/script>
`},null,8,["demos"]),ae,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/add-icon","source-code":`<template>
  <hl-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    editable
    @edit="handleTabsEdit"
  >
    <template #add-icon>
      <hl-icon><TwoAlert /></hl-icon>
    </template>
    <hl-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { TwoAlert } from '@hongluan-ui/icons'
import type { TabPaneName } from 'hongluan-ui'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add',
) => {
  if (action === 'add') {
    const newTabName = \`\${++tabIndex}\`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter(tab => tab.name !== targetName)
  }
}
<\/script>
<style>
.demo-tabs > .tabs-content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
`},null,8,["demos"]),ne,d(t,{fs:"",demos:r(u),"component-id":a,"path-name":"tabs/pane","source-code":`<template>
  <div style="margin-bottom: 20px;">
    <hl-button size="sm" @click="addTab()">
      add tab
    </hl-button>
  </div>
  <hl-tabs
    v-model="state.editableTabsValue"
    type="line"
    closable
    @tab-remove="removeTab"
  >
    <hl-tab-pane
      v-for="item in state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  editableTabsValue: '2',
  editableTabs: [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ],
  tabIndex: 2,
})

const addTab = () => {
  let newTabName = ++state.tabIndex + ''
  state.editableTabs.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  state.editableTabsValue = newTabName
}

const removeTab = targetName => {
  let tabs = state.editableTabs
  let activeName = state.editableTabsValue
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        let nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  state.editableTabsValue = activeName
  state.editableTabs = tabs.filter(tab => tab.name !== targetName)
}

<\/script>
`},null,8,["demos"]),le]),d(i)],64)}}};export{se as default};
