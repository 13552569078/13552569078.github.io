import{p as v,R as h,H as c,L as g,W as b,X as l,P as o,Q as t,a1 as f,S as e,V as F,o as x}from"./vue.85e091e9.js";import{b as E}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const A=e("\u6253\u5F00 Dialog"),S=t("br",null,null,-1),M=t("br",null,null,-1),P=e("\u6253\u5F00 \u5DE6\u4FA7\u62BD\u5C49"),z=e("\u6253\u5F00 \u53F3\u4FA7\u62BD\u5C49"),T=e("\u6253\u5F00 \u5E95\u90E8\u62BD\u5C49"),O=e("\u6253\u5F00 \u9876\u90E8\u62BD\u5C49"),U=t("br",null,null,-1),j=t("br",null,null,-1),L=e("\u6253\u5F00 \u5168\u5C4FDialog"),W=t("h4",null,"\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846title",-1),H=t("span",{style:{height:"100px"}},"\u5BF9\u8BDD\u6846body\u4FE1\u606F",-1),R={class:"dialog-footer"},q=e("\u53D6 \u6D88"),N=e("\u786E \u5B9A"),Q=v({setup(D){const a=h(!1),r=h("dialog"),u=h("center"),i=(d,n="dialog")=>{u.value=d,r.value=n,a.value=!0};return(d,n)=>{const s=c("hl-button"),p=c("hl-dialog");return g(),b(f,null,[l(s,{class:"m-r-md",onClick:n[0]||(n[0]=m=>i("center"))},{default:o(()=>[A]),_:1}),S,M,l(s,{class:"m-r-md",onClick:n[1]||(n[1]=m=>i("left","drawer"))},{default:o(()=>[P]),_:1}),l(s,{class:"m-r-md",onClick:n[2]||(n[2]=m=>i("right","drawer"))},{default:o(()=>[z]),_:1}),l(s,{class:"m-r-md",onClick:n[3]||(n[3]=m=>i("bottom","drawer"))},{default:o(()=>[T]),_:1}),l(s,{class:"m-r-md",onClick:n[4]||(n[4]=m=>i("top","drawer"))},{default:o(()=>[O]),_:1}),U,j,l(s,{class:"m-r-md",onClick:n[5]||(n[5]=m=>i("fullscreen","drawer"))},{default:o(()=>[L]),_:1}),l(p,{modelValue:a.value,"onUpdate:modelValue":n[8]||(n[8]=m=>a.value=m),width:"calc(var(--xxs) * 100)","show-as":r.value,placement:u.value},{header:o(()=>[W]),footer:o(()=>[t("span",R,[l(s,{onClick:n[6]||(n[6]=m=>a.value=!1)},{default:o(()=>[q]),_:1}),l(s,{type:"primary",class:"m-l-md",onClick:n[7]||(n[7]=m=>a.value=!1)},{default:o(()=>[N]),_:1})])]),default:o(()=>[H]),_:1},8,["modelValue","show-as","placement"])],64)}}});var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const G=e("\u70B9\u51FB\u6253\u5F00 Dialog"),I=t("span",null,"\u9700\u8981\u6CE8\u610F\u5728 Dialog \u6253\u5F00\u524D\u662F\u8FD9\u6761\u5185\u5BB9\u548C\u4E0B\u9762\u7684\u5185\u5BB9\u90FD\u662F\u4E0D\u4F1A\u88AB\u6E32\u67D3\u7684",-1),J=t("strong",null,"\u989D\u5916\u7684\u5185\u5BB9",-1),K={class:"dialog-footer"},Y=e("\u53D6 \u6D88"),Z=e("\u786E \u5B9A"),tt=v({setup(D){const a=h(!1);return(r,u)=>{const i=c("hl-button"),d=c("hl-dialog");return g(),b(f,null,[l(i,{class:"m-r-md",onClick:u[0]||(u[0]=n=>a.value=!0)},{default:o(()=>[G]),_:1}),l(d,{modelValue:a.value,"onUpdate:modelValue":u[3]||(u[3]=n=>a.value=n),title:"\u63D0\u793A",width:"30%","destroy-on-close":""},{footer:o(()=>[t("span",K,[l(i,{onClick:u[1]||(u[1]=n=>a.value=!1)},{default:o(()=>[Y]),_:1}),l(i,{type:"primary",class:"m-l-md",onClick:u[2]||(u[2]=n=>a.value=!1)},{default:o(()=>[Z]),_:1})])]),default:o(()=>[I,J]),_:1},8,["modelValue"])],64)}}});var et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});const lt=e("\u70B9\u51FB\u6253Dialog"),ot=t("p",null,"panel \u5BF9\u8BDD\u6846",-1),nt=v({setup(D){const a=h(!1);return(r,u)=>{const i=c("hl-button"),d=c("hl-dialog");return g(),b(f,null,[l(i,{class:"m-r-md",onClick:u[0]||(u[0]=n=>a.value=!0)},{default:o(()=>[lt]),_:1}),l(d,{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=n=>a.value=n),title:"\u6D4B\u8BD5Panel\u62D6\u62FD/\u6539\u53D8\u5927\u5C0F",width:"400px",draggable:"",resizable:""},{default:o(()=>[ot]),_:1},8,["modelValue"])],64)}}});var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const at=e("\u6253\u5F00\u5BF9\u8BDD\u6846"),ut=t("span",{class:"m-r-sm"},"\u5173\u95ED\u5BF9\u8BDD\u6846\u540E\uFF0C\u8F93\u5165\u6846\u81EA\u52A8\u83B7\u53D6\u7126\u70B9",-1),st=t("span",{class:"m-b-sm"},"\u8BF7\u8F93\u5165\uFF1A",-1),it={class:"dialog-footer"},rt=e("\u53D6\u6D88"),ct=e("\u786E\u5B9A"),mt=v({setup(D){const a=h(!1),r=h(),u=()=>{var i;(i=r.value)==null||i.focus()};return(i,d)=>{const n=c("hl-button"),s=c("hl-input"),p=c("hl-dialog");return g(),b(f,null,[l(n,{type:"link",onClick:d[0]||(d[0]=m=>a.value=!0)},{default:o(()=>[at]),_:1}),t("div",null,[ut,l(s,{ref_key:"inputRef",ref:r,placeholder:"Please input"},null,512)]),l(p,{modelValue:a.value,"onUpdate:modelValue":d[3]||(d[3]=m=>a.value=m),"destroy-on-close":"",title:"\u63D0\u793A",width:"30%",onCloseAutoFocus:u},{footer:o(()=>[t("span",it,[l(n,{class:"m-r-md",onClick:d[1]||(d[1]=m=>a.value=!1)},{default:o(()=>[rt]),_:1}),l(n,{type:"primary",onClick:d[2]||(d[2]=m=>a.value=!1)},{default:o(()=>[ct]),_:1})])]),default:o(()=>[st,l(s,{placeholder:"\u521D\u59CB\u83B7\u53D6\u7126\u70B9"})]),_:1},8,["modelValue"])],64)}}});var pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const ht=e("\u70B9\u51FB\u6253\u5F00\u5916\u5C42 Dialog"),_t=e("\u70B9\u51FB\u6253\u5F00 Message Box"),gt={class:"dialog-footer"},bt=e("\u53D6 \u6D88"),ft=e("\u6253\u5F00\u5185\u5C42 Dialog"),Dt=v({setup(D){const a=()=>{E.alert("\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9","\u6807\u9898\u540D\u79F0",{confirmButtonText:"\u786E\u5B9A"})},r=h(!1),u=h(!1);return(i,d)=>{const n=c("hl-button"),s=c("hl-dialog");return g(),b(f,null,[l(n,{class:"m-r-md",onClick:d[0]||(d[0]=p=>r.value=!0)},{default:o(()=>[ht]),_:1}),l(s,{modelValue:r.value,"onUpdate:modelValue":d[4]||(d[4]=p=>r.value=p),title:"\u5916\u5C42 Dialog",width:"400px","destroy-on-close":""},{footer:o(()=>[t("div",gt,[l(n,{onClick:d[2]||(d[2]=p=>r.value=!1)},{default:o(()=>[bt]),_:1}),l(n,{type:"primary",class:"m-l-md",onClick:d[3]||(d[3]=p=>u.value=!0)},{default:o(()=>[ft]),_:1})])]),default:o(()=>[l(s,{modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=p=>u.value=p),width:"30%",title:"\u5185\u5C42 Dialog","append-to-body":""},{default:o(()=>[l(n,{type:"link",onClick:a},{default:o(()=>[_t]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)}}});var vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dt});const Ft=e("\u70B9\u51FB\u6253Dialog"),yt=t("p",null,"panel \u5BF9\u8BDD\u6846",-1),Vt=v({setup(D){const a=h(!1);return(r,u)=>{const i=c("hl-button"),d=c("hl-dialog");return g(),b(f,null,[l(i,{class:"m-r-md",onClick:u[0]||(u[0]=n=>a.value=!0)},{default:o(()=>[Ft]),_:1}),l(d,{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=n=>a.value=n),title:"\u6D4B\u8BD5Panel\u5C5E\u6027",width:"400px",borderless:"",radius:"0","header-height":"40px","body-padding":"20px","header-class":"header-dialog","body-class":"footer-dialog"},{default:o(()=>[yt]),_:1},8,["modelValue"])],64)}}});var $t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vt});const kt=e("\u6253\u5F00\u5D4C\u5957\u8868\u683C\u7684 Dialog"),Bt=e("\u6253\u5F00\u5D4C\u5957\u8868\u5355\u7684 Dialog"),Ct={class:"dialog-footer"},wt=e("\u53D6 \u6D88"),xt=e("\u786E \u5B9A"),Et=v({setup(D){const a=h([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),r=h(!1),u=h(!1),i=h({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),d=h("120px");return(n,s)=>{const p=c("hl-button"),m=c("hl-table-column"),k=c("hl-table"),y=c("hl-dialog"),B=c("hl-input"),V=c("hl-form-item"),$=c("hl-option"),C=c("hl-select"),w=c("hl-form");return g(),b(f,null,[l(p,{class:"m-r-md",onClick:s[0]||(s[0]=_=>r.value=!0)},{default:o(()=>[kt]),_:1}),l(y,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=_=>r.value=_),title:"\u6536\u8D27\u5730\u5740",width:"700px"},{default:o(()=>[l(k,{data:a.value,stripe:""},{default:o(()=>[l(m,{property:"date",label:"\u65E5\u671F",width:"150"}),l(m,{property:"name",label:"\u59D3\u540D",width:"200"}),l(m,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),l(p,{class:"m-r-md",onClick:s[2]||(s[2]=_=>u.value=!0)},{default:o(()=>[Bt]),_:1}),l(y,{modelValue:u.value,"onUpdate:modelValue":s[7]||(s[7]=_=>u.value=_),title:"\u6536\u8D27\u5730\u5740",width:"500px"},{footer:o(()=>[t("span",Ct,[l(p,{class:"m-r-md",onClick:s[5]||(s[5]=_=>u.value=!1)},{default:o(()=>[wt]),_:1}),l(p,{type:"primary",onClick:s[6]||(s[6]=_=>u.value=!1)},{default:o(()=>[xt]),_:1})])]),default:o(()=>[l(w,{model:i.value,width:["md:col-6","md:col-18"]},{default:o(()=>[l(V,{label:"\u6D3B\u52A8\u540D\u79F0","label-width":d.value},{default:o(()=>[l(B,{modelValue:i.value.name,"onUpdate:modelValue":s[3]||(s[3]=_=>i.value.name=_),autocomplete:"off",block:""},null,8,["modelValue"])]),_:1},8,["label-width"]),l(V,{label:"\u6D3B\u52A8\u533A\u57DF","label-width":d.value},{default:o(()=>[l(C,{modelValue:i.value.region,"onUpdate:modelValue":s[4]||(s[4]=_=>i.value.region=_),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",block:""},{default:o(()=>[l($,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),l($,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});var At=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Et});const St=t("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),Mt=t("p",null,"Dialog \u901A\u5E38\u7528\u4F5C\u5F39\u7A97\u3001\u6A21\u6001\u7A97\u4F7F\u7528\uFF0C\u5B83\u4F7F\u7528panel\u7EC4\u4EF6\u6784\u5EFA\uFF0C\u540C\u65F6\u4E5F\u652F\u6301panel\u7684\u5C5E\u6027\u7279\u5F81",-1),Pt=t("div",{class:"doc-tip"},[t("p",null,[e("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),t("code",null,"<client-only></client-only>"),e(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),t("a",{href:"https://nuxt.com/v3"},"Nuxt"),e(") \u548C SSG (eg: "),t("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),e(")\u3002")])],-1),zt=t("div",null,[t("p",null,[e("\u9700\u8981\u8BBE\u7F6E "),t("code",null,"model-value / v-model"),e(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u6536 "),t("code",null,"boolean"),e("\uFF0C\u5F53\u4E3A "),t("code",null,"true"),e(" \u65F6\u663E\u793A Dialog\u3002Dialog \u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF1A"),t("code",null,"body"),e(" \u548C "),t("code",null,"footer"),e("\uFF0C"),t("code",null,"footer"),e(" \u9700\u8981\u5177\u540D\u4E3A "),t("code",null,"footer"),e(" \u7684 "),t("code",null,"slot"),e("\u3002"),t("code",null,"title"),e(" \u5C5E\u6027\u7528\u4E8E\u5B9A\u4E49\u6807\u9898\uFF0C\u5B83\u662F\u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002\u6700\u540E\uFF0C\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86 "),t("code",null,"before-close"),e(" \u7684\u7528\u6CD5\u3002")])],-1),Tt=t("div",{class:"doc-tip"},[t("p",null,[t("code",null,"before-close"),e(" \u4EC5\u5F53\u7528\u6237\u901A\u8FC7\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u6216\u906E\u7F69\u5173\u95ED Dialog \u65F6\u8D77\u6548\u3002\u5982\u679C\u4F60\u5728 "),t("code",null,"footer"),e(" \u5177\u540D slot \u91CC\u6DFB\u52A0\u4E86\u7528\u4E8E\u5173\u95ED Dialog \u7684\u6309\u94AE\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u6309\u94AE\u7684\u70B9\u51FB\u56DE\u8C03\u51FD\u6570\u91CC\u52A0\u5165 "),t("code",null,"before-close"),e(" \u7684\u76F8\u5173\u903B\u8F91\u3002")])],-1),Ot=t("h2",{id:"zi-ding-yi-nei-rong"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),e(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Ut=t("p",null,"Dialog \u7EC4\u4EF6\u7684\u53EF\u4EE5\u5D4C\u5165\u4EFB\u610F\u7684\u5185\u5BB9",-1),jt=t("h2",{id:"qian-tao-de-dialog"},[t("a",{class:"header-anchor",href:"#qian-tao-de-dialog"}),e(" \u5D4C\u5957\u7684 Dialog")],-1),Lt=t("p",null,[e("\u5982\u679C\u9700\u8981\u5728\u4E00\u4E2A Dialog \u5185\u90E8\u5D4C\u5957\u53E6\u4E00\u4E2A Dialog\uFF0C\u9700\u8981\u4F7F\u7528 "),t("code",null,"append-to-body"),e(" \u5C5E\u6027\u3002")],-1),Wt=t("div",{class:"doc-tip"},[t("p",null,[e("Dialog \u7684\u5185\u5BB9\u662F\u61D2\u6E32\u67D3\u7684\uFF0C\u5373\u5728\u7B2C\u4E00\u6B21\u88AB\u6253\u5F00\u4E4B\u524D\uFF0C\u4F20\u5165\u7684\u9ED8\u8BA4 slot \u4E0D\u4F1A\u88AB\u6E32\u67D3\u5230 DOM \u4E0A\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u9700\u8981\u6267\u884C DOM \u64CD\u4F5C\uFF0C\u6216\u901A\u8FC7 "),t("code",null,"ref"),e(" \u83B7\u53D6\u76F8\u5E94\u7EC4\u4EF6\uFF0C\u8BF7\u5728 "),t("code",null,"open"),e(" \u4E8B\u4EF6\u56DE\u8C03\u4E2D\u8FDB\u884C\u3002")])],-1),Ht=t("h2",{id:"guan-bi-shi-xiao-hui-dom-nei-rong"},[t("a",{class:"header-anchor",href:"#guan-bi-shi-xiao-hui-dom-nei-rong"}),e(" \u5173\u95ED\u65F6\u9500\u6BC1 DOM \u5185\u5BB9")],-1),Rt=t("p",null,"\u53EF\u5728 Dialog \u6CA1\u6709\u663E\u793A\u65F6\uFF0C\u9500\u6BC1 Dialog \u91CC\u7684\u5185\u5BB9\u4EE5\u8FBE\u5230\u51CF\u5C11 DOM \u8282\u70B9\u7684\u4F5C\u7528",-1),qt=t("div",null,[t("p",null,[e("\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8FD9\u4E2A\u5C5E\u6027\u88AB\u542F\u7528\u65F6\uFF0CDialog \u5185\u5E76\u4E0D\u4F1A\u6709\u4EFB\u4F55\u7684 DOM \u8282\u70B9\u5B58\u5728\uFF0C\u9664\u4E86 "),t("code",null,"overlay"),e(),t("code",null,"header\uFF08\u5982\u679C\u6709\uFF09"),e(),t("code",null,"footer\uFF08\u5982\u679C\u6709\uFF09")])],-1),Nt=t("h2",{id:"ke-tuo-zhuai-ke-gai-bian-da-xiao"},[t("a",{class:"header-anchor",href:"#ke-tuo-zhuai-ke-gai-bian-da-xiao"}),e(" \u53EF\u62D6\u62FD\uFF0C\u53EF\u6539\u53D8\u5927\u5C0F")],-1),Qt=t("p",null,"\u5934\u90E8\u53EF\u62D6\u52A8\u5BF9\u8BDD\u6846\uFF1B\u53F3\u4E0B\u89D2\u53EF\u62D6\u62FD\u6539\u53D8\u5BF9\u8BDD\u6846\u5C3A\u5BF8",-1),Xt=t("h2",{id:"panelshu-xing"},[t("a",{class:"header-anchor",href:"#panelshu-xing"}),e(" Panel\u5C5E\u6027")],-1),Gt=t("p",null,"\u7531\u4E8E Dialog \u57FA\u4E8E Panel \u7EC4\u4EF6\u6784\u9020\uFF0C\u53EF\u4EE5\u5728 Dialog \u4E0A\u76F4\u63A5\u5E94\u7528 Panel \u7EC4\u4EF6\u5C5E\u6027\u3002",-1),It=t("div",null,[t("p",null,"\u5177\u4F53\u5C5E\u6027\u8BF7\u53C2\u8003Panel\u6587\u6863\u3002")],-1),Jt=x('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u662F\u5426\u663E\u793A Dialog</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6\u3002showAs=drawer\uFF0Cposition=top / bottom\uFF0C\u8BBE\u7F6E\u4E3A 100%</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>height</td><td>Dialog \u7684\u9AD8\u5EA6\u3002showAs=drawer\uFF0Cposition=left / right\uFF0C\u8BBE\u7F6E\u4E3A 100%</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 top \u503C</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>modal</td><td>\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>append-to-body</td><td>Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Dialog \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>open-delay</td><td>Dialog \u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-delay</td><td>Dialog \u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED</td><td>function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>destroy-on-close</td><td>\u5173\u95ED\u65F6\u9500\u6BC1 Dialog \u4E2D\u7684\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>modal-class</td><td>\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>show-as</td><td>\u5F39\u7A97\u7C7B\u578B\u3002\u8BBE\u7F6E\u4E3A drawer \u65F6\uFF0C\u8BF7\u914D\u5408 placement \u4F7F\u7528</td><td>string</td><td>dialog / drawer</td><td>dialog</td></tr><tr><td>animation-name</td><td>Dialog \u52A8\u753B\u7C7B\u578B\uFF0C\u4EC5\u5BF9dialog\u7C7B\u578B\u751F\u6548\u3002\u53C2\u8003\u5185\u7F6E\u8FC7\u5EA6\u52A8\u753B\u6587\u6863</td><td>string</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>\u5F39\u7A97\u4F4D\u7F6E</td><td>string</td><td>center / top / bottom / left / right / fullscreen</td><td>center</td></tr><tr><td>draggable</td><td>\u662F\u5426\u53EF\u62D6\u52A8\u6807\u9898\u90E8\u5206\u79FB\u52A8\u5BF9\u8BDD\u6846\uFF0Cdrawer\u4EE5\u53CAfullscreen\u6A21\u5F0F\u4E0B\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>resizable</td><td>\u662F\u5426\u53EF\u62D6\u52A8\u53F3\u4E0B\u89D2\u6539\u53D8\u5BF9\u8BDD\u6846\u5C3A\u5BF8\uFF0Cdrawer\u4EE5\u53CAfullscreen\u6A21\u5F0F\u4E0B\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>title</td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>z-index</td><td>\u5BF9\u8BDD\u6846\u81EA\u5B9A\u4E49\u5C42\u7EA7</td><td>number</td><td>\u2014</td><td>-</td></tr><tr><td>header-aria-level</td><td>\u5934\u90E8 <code>aria-level</code> \u5C5E\u6027</td><td>string</td><td>-</td><td>2</td></tr><tr><td>append-to</td><td>\u5BF9\u8BDD\u6846\u88AB\u6DFB\u52A0\u5230\u7684\u5143\u7D20\uFF0C\u5C06\u4F1A\u8986\u76D6 <code>append-to-body</code> \u5C5E\u6027</td><td>string / HTMLElement</td><td>-</td><td>body</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Dialog \u5934\u90E8\u533A\u7684\u5185\u5BB9</td></tr><tr><td>title</td><td>Dialog \u6807\u9898\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>Dialog \u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>Dialog \u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table>',6),le={setup(D){const a="dialog",r={"../../../examples/dialog/basic.vue":X,"../../../examples/dialog/destroy.vue":et,"../../../examples/dialog/drag.vue":dt,"../../../examples/dialog/focus-trapping.vue":pt,"../../../examples/dialog/nested.vue":vt,"../../../examples/dialog/panel.vue":$t,"../../../examples/dialog/slot.vue":At};return(u,i)=>{const d=c("demo-block"),n=c("right-nav");return g(),b(f,null,[t("section",null,[St,Mt,Pt,l(d,{fs:"",demos:F(r),"component-id":a,"path-name":"dialog/basic","source-code":`<template>
  <hl-button class="m-r-md" @click="btnClick('center')">\u6253\u5F00 Dialog</hl-button>
  <br><br>
  <hl-button class="m-r-md" @click="btnClick('left', 'drawer')">\u6253\u5F00 \u5DE6\u4FA7\u62BD\u5C49</hl-button>
  <hl-button class="m-r-md" @click="btnClick('right', 'drawer')">\u6253\u5F00 \u53F3\u4FA7\u62BD\u5C49</hl-button>
  <hl-button class="m-r-md" @click="btnClick('bottom', 'drawer')">\u6253\u5F00 \u5E95\u90E8\u62BD\u5C49</hl-button>
  <hl-button class="m-r-md" @click="btnClick('top', 'drawer')">\u6253\u5F00 \u9876\u90E8\u62BD\u5C49</hl-button>
  <br><br>
  <hl-button class="m-r-md" @click="btnClick('fullscreen', 'drawer')">\u6253\u5F00 \u5168\u5C4FDialog</hl-button>

  <hl-dialog
    v-model="dialogVisible"
    width="calc(var(--xxs) * 100)"
    :show-as="showAs"
    :placement="placement"
  >
    <template #header>
      <h4>\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846title</h4>
    </template>
    <span style="height:100px;">\u5BF9\u8BDD\u6846body\u4FE1\u606F</span>
    <template #footer>
      <span class="dialog-footer">
        <hl-button @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" class="m-l-md" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const showAs = ref('dialog')
const placement = ref('center')

const btnClick = (placementParam, showAsParam = 'dialog') => {
  placement.value = placementParam
  showAs.value = showAsParam
  dialogVisible.value = true
}
<\/script>
`},{default:o(()=>[zt]),_:1},8,["demos"]),Tt,Ot,Ut,l(d,{fs:"",demos:F(r),"component-id":a,"path-name":"dialog/slot","source-code":`<template>
  <hl-button class="m-r-md" @click="dialogTableVisible = true">\u6253\u5F00\u5D4C\u5957\u8868\u683C\u7684 Dialog</hl-button>

  <hl-dialog v-model="dialogTableVisible" title="\u6536\u8D27\u5730\u5740" width="700px">
    <hl-table :data="gridData" stripe>
      <hl-table-column property="date" label="\u65E5\u671F" width="150" />
      <hl-table-column property="name" label="\u59D3\u540D" width="200" />
      <hl-table-column property="address" label="\u5730\u5740" />
    </hl-table>
  </hl-dialog>

  <!-- Form -->
  <hl-button class="m-r-md" @click="dialogFormVisible = true">\u6253\u5F00\u5D4C\u5957\u8868\u5355\u7684 Dialog</hl-button>

  <hl-dialog v-model="dialogFormVisible" title="\u6536\u8D27\u5730\u5740" width="500px">
    <hl-form :model="form" :width="['md:col-6','md:col-18']">
      <hl-form-item label="\u6D3B\u52A8\u540D\u79F0" :label-width="formLabelWidth">
        <hl-input v-model="form.name" autocomplete="off" block />
      </hl-form-item>
      <hl-form-item label="\u6D3B\u52A8\u533A\u57DF" :label-width="formLabelWidth">
        <hl-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF" block>
          <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
          <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
        </hl-select>
      </hl-form-item>
    </hl-form>
    <template #footer>
      <span class="dialog-footer">
        <hl-button class="m-r-md" @click="dialogFormVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" @click="dialogFormVisible = false">\u786E \u5B9A</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridData = ref([
  {
    date: '2016-05-02',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
  },
  {
    date: '2016-05-04',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
  },
  {
    date: '2016-05-01',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
  },
  {
    date: '2016-05-03',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
  },
])
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const form = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const formLabelWidth = ref('120px')

<\/script>
`},null,8,["demos"]),jt,Lt,l(d,{fs:"",demos:F(r),"component-id":a,"path-name":"dialog/nested","source-code":`<template>
  <hl-button class="m-r-md" @click="outerVisible = true">\u70B9\u51FB\u6253\u5F00\u5916\u5C42 Dialog</hl-button>

  <hl-dialog v-model="outerVisible" title="\u5916\u5C42 Dialog" width="400px" destroy-on-close>
    <hl-dialog
      v-model="innerVisible"
      width="30%"
      title="\u5185\u5C42 Dialog"
      append-to-body
    >
      <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
    </hl-dialog>
    <template #footer>
      <div class="dialog-footer">
        <hl-button @click="outerVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" class="m-l-md" @click="innerVisible = true">\u6253\u5F00\u5185\u5C42 Dialog</hl-button>
      </div>
    </template>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HlMessageBox } from 'hongluan-ui'

const open = () => {
  HlMessageBox.alert('\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9', '\u6807\u9898\u540D\u79F0', {
    confirmButtonText: '\u786E\u5B9A',
  })
}
const outerVisible = ref(false)
const innerVisible = ref(false)

<\/script>
`},null,8,["demos"]),Wt,Ht,Rt,l(d,{fs:"",demos:F(r),"component-id":a,"path-name":"dialog/destroy","source-code":`<template>
  <hl-button class="m-r-md" @click="centerDialogVisible = true">\u70B9\u51FB\u6253\u5F00 Dialog</hl-button>

  <hl-dialog
    v-model="centerDialogVisible"
    title="\u63D0\u793A"
    width="30%"
    destroy-on-close
  >
    <span>\u9700\u8981\u6CE8\u610F\u5728 Dialog \u6253\u5F00\u524D\u662F\u8FD9\u6761\u5185\u5BB9\u548C\u4E0B\u9762\u7684\u5185\u5BB9\u90FD\u662F\u4E0D\u4F1A\u88AB\u6E32\u67D3\u7684</span>
    <strong>\u989D\u5916\u7684\u5185\u5BB9</strong>
    <template #footer>
      <span class="dialog-footer">
        <hl-button @click="centerDialogVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" class="m-l-md" @click="centerDialogVisible = false">\u786E \u5B9A</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
<\/script>
`},{default:o(()=>[qt]),_:1},8,["demos"]),Nt,Qt,l(d,{fs:"",demos:F(r),"component-id":a,"path-name":"dialog/drag","source-code":`<template>
  <hl-button class="m-r-md" @click="outerVisible = true">\u70B9\u51FB\u6253Dialog</hl-button>
  <hl-dialog
    v-model="outerVisible"
    title="\u6D4B\u8BD5Panel\u62D6\u62FD/\u6539\u53D8\u5927\u5C0F"
    width="400px"
    draggable
    resizable
  >
    <p>panel \u5BF9\u8BDD\u6846</p>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)

<\/script>
`},null,8,["demos"]),Xt,Gt,l(d,{fs:"",demos:F(r),"component-id":a,"path-name":"dialog/panel","source-code":`<template>
  <hl-button class="m-r-md" @click="outerVisible = true">\u70B9\u51FB\u6253Dialog</hl-button>
  <hl-dialog
    v-model="outerVisible"
    title="\u6D4B\u8BD5Panel\u5C5E\u6027"
    width="400px"
    borderless
    radius="0"
    header-height="40px"
    body-padding="20px"
    header-class="header-dialog"
    body-class="footer-dialog"
  >
    <p>panel \u5BF9\u8BDD\u6846</p>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)

<\/script>
`},{default:o(()=>[It]),_:1},8,["demos"]),Jt]),l(n)],64)}}};export{le as default};
