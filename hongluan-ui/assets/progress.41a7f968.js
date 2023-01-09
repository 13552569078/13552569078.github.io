import{p as m,R as _,I as s,L as g,W as b,X as r,a3 as w,H as x,P as a,Q as e,U as j,V as d,E as B,T as t,o as M}from"./vue.8a077a47.js";import{_ as P}from"./index.3e39e2d9.js";import{G as z,J as O}from"./hongluan-icons.286a55ba.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";const C=m({setup(h){const n=l=>`${l}%  Complete`,c=_([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:l=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${l}%`}]);return(l,o)=>{const p=s("hl-progress");return g(),b(w,null,[r(p,{percentage:40,format:n,round:"",class:"m-b-xxl",align:"items-right"}),r(p,{"show-as":"stack",stack:c.value,align:"items-right"},null,8,["stack"])],64)}}});var E=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const T=m({setup(h){const n=c=>`${c}%  Complete`;return(c,l)=>{const o=s("hl-progress");return g(),b(w,null,[r(o,{type:"disabled",percentage:40,format:n,round:"",class:"m-b-xxl"}),r(o,{percentage:40,format:n,round:"",class:"m-b-xxl"}),r(o,{percentage:40,format:n,"stroke-width":"3px","show-text":!1,"track-color":"#fff"})],64)}}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const W={};function F(h,n){const c=s("hl-progress"),l=s("fill-airplay"),o=s("hl-icon"),p=s("hl-group");return g(),x(p,{indent:"var(--lg)"},{default:a(()=>[r(c,{"show-as":"circle",percentage:80}),r(c,{"show-as":"circle","stroke-width":"4px",percentage:70,color:"#f00","track-color":"rgba(0,0,0, 0.01)"},{default:a(({percentage:u})=>[r(p,{dir:"vertical",gap:"var(--sm)",align:"items-middle items-center"},{default:a(()=>[r(o,{type:"danger",size:"sm",radius:"",fill:"",class:"static"},{default:a(()=>[r(l)]),_:1}),e("h5",null,j(u)+"%",1)]),_:2},1024)]),_:1}),r(c,{"show-as":"circle",type:"info","stroke-width":"4px",percentage:50,text:"Label"})]),_:1})}var L=P(W,[["render",F]]),I=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const q=m({setup(h){const n=_(20),c=_("#409eff"),l=_([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),o=i=>i<30?"#909399":i<70?"#e6a23c":"#67c23a",p=()=>{n.value+=10,n.value>100&&(n.value=100)},u=()=>{n.value-=10,n.value<0&&(n.value=0)};return(i,y)=>{const f=s("hl-progress"),v=s("hl-col"),S=s("hl-row"),k=s("hl-icon"),$=s("hl-button"),A=s("hl-group");return g(),b(w,null,[r(S,{gap:"var(--md)"},{default:a(()=>[r(v,{span:"lg:col-8"},{default:a(()=>[r(f,{percentage:n.value,color:c.value},null,8,["percentage","color"])]),_:1}),r(v,{span:"lg:col-8"},{default:a(()=>[r(f,{percentage:n.value,color:o},null,8,["percentage"])]),_:1}),r(v,{span:"lg:col-8"},{default:a(()=>[r(f,{percentage:n.value,color:l.value},null,8,["percentage","color"])]),_:1})]),_:1}),r(A,{merge:"",indent:"",class:"m-t-lg"},{default:a(()=>[r($,{class:"group-item",onClick:u},{icon:a(()=>[r(k,null,{default:a(()=>[r(d(z))]),_:1})]),_:1}),r($,{class:"group-item",onClick:p},{icon:a(()=>[r(k,null,{default:a(()=>[r(d(O))]),_:1})]),_:1})]),_:1})],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const R=m({setup(h){const n=_(10),c=_(0),l=_([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),o=()=>{n.value+=10,n.value>100&&(n.value=100)},p=()=>{n.value-=10,n.value<0&&(n.value=0)};return B(()=>{setInterval(()=>{c.value=c.value%100+10},500)}),(u,i)=>{const y=s("hl-icon"),f=s("hl-button"),v=s("hl-progress"),S=s("hl-group"),k=s("hl-col"),$=s("hl-row");return g(),x($,null,{default:a(()=>[r(k,{span:"md:col-12"},{default:a(()=>[r(S,{indent:"var(--md)",class:"items-middle"},{default:a(()=>[r(f,{onClick:p},{icon:a(()=>[r(y,null,{default:a(()=>[r(d(z))]),_:1})]),_:1}),r(v,{"show-as":"dashboard",percentage:n.value,color:l.value},null,8,["percentage","color"]),r(f,{onClick:o},{icon:a(()=>[r(y,null,{default:a(()=>[r(d(O))]),_:1})]),_:1})]),_:1})]),_:1}),r(k,{span:"md:col-12"},{default:a(()=>[r(v,{"show-as":"dashboard",percentage:c.value,color:l.value},null,8,["percentage","color"])]),_:1})]),_:1})}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const X=m({setup(h){const n=l=>`${l}%  \u9759\u6001`,c=l=>`${l}%  \u8109\u51B2`;return(l,o)=>{const p=s("hl-progress"),u=s("hl-col"),i=s("hl-row");return g(),x(i,{gap:"var(--md)"},{default:a(()=>[r(u,{span:12},{default:a(()=>[r(p,{percentage:50,indicating:"",format:n})]),_:1}),r(u,{span:12},{default:a(()=>[r(p,{percentage:50,indicating:"",active:"",format:c})]),_:1})]),_:1})}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const H=e("br",null,null,-1),J=m({setup(h){const n=_("\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar");return(c,l)=>{const o=s("hl-progress");return g(),b(w,null,[r(o,{percentage:75,"stroke-width":"var(--xxs)",text:n.value,"show-as":"line"},null,8,["text"]),H,r(o,{percentage:75,"stroke-width":"1px","hide-label":"","show-as":"line"})],64)}}});var N=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));const U=m({setup(h){const n=_([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:c=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${c}%`}]);return(c,l)=>{const o=s("hl-progress");return g(),x(o,{"show-as":"stack",stack:n.value},null,8,["stack"])}}});var K=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const Y=e("span",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),Z={class:"progress-label"},ee={class:"progress-percentage"},re=m({setup(h){const n=_([{percentage:35},{percentage:20,type:"warning"},{percentage:20,type:"error"}]);return(c,l)=>{const o=s("hl-progress");return g(),b(w,null,[r(o,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:a(()=>[Y]),_:1}),r(o,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:a(({percentage:p,text:u})=>[e("span",Z,j(u),1),e("span",ee,j(p)+"%",1)]),_:1}),r(o,{"show-as":"stack",stack:n.value,class:"m-b-xxl"},{default:a(({percentage:p})=>[e("strong",null,"\u8FDB\u5EA6\uFF1A"+j(p)+"%",1)]),_:1},8,["stack"])],64)}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));const ne=m({setup(h){const n=l=>`${l}%  \u9759\u6001\u6761\u7EB9`,c=l=>`${l}%  \u6EDA\u52A8\u6761\u7EB9`;return(l,o)=>{const p=s("hl-progress"),u=s("hl-col"),i=s("hl-row");return g(),x(i,{gap:"var(--md)"},{default:a(()=>[r(u,{span:12},{default:a(()=>[r(p,{percentage:50,striped:"",format:n})]),_:1}),r(u,{span:12},{default:a(()=>[r(p,{percentage:50,striped:"",active:"",format:c})]),_:1})]),_:1})}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));const ae=m({setup(h){const n=o=>`${o}%  success`,c=o=>`${o}%  warning`,l=o=>`${o}%  danger`;return(o,p)=>{const u=s("hl-progress"),i=s("hl-col"),y=s("hl-row");return g(),x(y,{gap:"var(--md)"},{default:a(()=>[r(i,{span:"lg:col-8"},{default:a(()=>[r(u,{percentage:68,type:"warning",format:c})]),_:1}),r(i,{span:"lg:col-8"},{default:a(()=>[r(u,{percentage:68,type:"success",format:n})]),_:1}),r(i,{span:"lg:col-8"},{default:a(()=>[r(u,{percentage:68,type:"error",format:l})]),_:1})]),_:1})}}});var se=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));const le=e("h1",null,"Progress \u8FDB\u5EA6\u6761",-1),ce=e("p",null,"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\uFF0C\u544A\u77E5\u7528\u6237\u5F53\u524D\u72B6\u6001\u548C\u9884\u671F\u3002",-1),pe=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),t(" \u57FA\u7840\u7528\u6CD5")],-1),ue=e("div",null,[e("p",null,[t("\u6DFB\u52A0"),e("code",null,"percentage"),t("\u5C5E\u6027\u5373\u53EF\uFF0C\u8868\u793A\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u767E\u5206\u6BD4\uFF0C"),e("strong",null,"\u5FC5\u586B"),t("\uFF0C\u5FC5\u987B\u5728 0-100\u3002\u901A\u8FC7 "),e("code",null,"format"),t(" \u5C5E\u6027\u6765\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9\u3002")])],-1),de=e("h2",{id:"jin-du-tiao-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-du-tiao-zhuang-tai"}),t(" \u8FDB\u5EA6\u6761\u72B6\u6001")],-1),ie=e("p",null,[t("\u6DFB\u52A0"),e("code",null,"type"),t("\u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001\u3002")],-1),ge=e("h2",{id:"jie-duan-yan-se"},[e("a",{class:"header-anchor",href:"#jie-duan-yan-se"}),t(" \u9636\u6BB5\u989C\u8272")],-1),he=e("p",null,[t("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"color"),t(" \u8BBE\u7F6E\u8FDB\u5EA6\u6761\u4E0D\u540C\u9636\u6BB5\u7684\u989C\u8272\uFF0C"),e("code",null,"color"),t(" \u53EF\u4EE5\u63A5\u53D7\u989C\u8272\u5B57\u7B26\u4E32\uFF0C\u51FD\u6570\u548C\u6570\u7EC4\u3002")],-1),_e=e("h2",{id:"tiao-wen-zhuang"},[e("a",{class:"header-anchor",href:"#tiao-wen-zhuang"}),t(" \u6761\u7EB9\u72B6")],-1),me=e("p",null,[t("\u6DFB\u52A0"),e("code",null,"striped"),t("\u5C5E\u6027\u8BBE\u7F6E\u6761\u7EB9\u72B6, \u6DFB\u52A0"),e("code",null,"active"),t("\u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u7EB9\u3002")],-1),fe=e("h2",{id:"mai-chong-zhuang"},[e("a",{class:"header-anchor",href:"#mai-chong-zhuang"}),t(" \u8109\u51B2\u72B6")],-1),ve=e("p",null,[t("\u6DFB\u52A0"),e("code",null,"indicating"),t("\u5C5E\u6027\u8BBE\u7F6E\u9759\u6001\u8109\u51B2\u72B6, \u6DFB\u52A0"),e("code",null,"active"),t("\u5C5E\u6027\u8BBE\u7F6E\u8109\u51B2\u72B6\u3002")],-1),be=e("h2",{id:"dui-die-zhuang"},[e("a",{class:"header-anchor",href:"#dui-die-zhuang"}),t(" \u5806\u53E0\u72B6")],-1),we=e("p",null,[t("\u6DFB\u52A0\u5C5E\u6027"),e("code",null,"show-as"),t("\u503C\u4E3A"),e("code",null,"stack"),t("\u65F6\u53D8\u4E3A\u5806\u53E0\u72B6\uFF0C\u7528 "),e("code",null,"stack"),t(" \u4F20\u53C2\u3002")],-1),xe=e("div",null,[e("p",null,[t("\u53EF\u9009\u503C\uFF1A"),e("code",null,"percentage"),t(","),e("code",null,"type"),t(","),e("code",null,"striped"),t(","),e("code",null,"indicating"),t(","),e("code",null,"active"),t(","),e("code",null,"format"),t(" \u7B49\u5C5E\u6027")])],-1),ye=e("h2",{id:"xian-tiao-yang-shi"},[e("a",{class:"header-anchor",href:"#xian-tiao-yang-shi"}),t(" \u7EBF\u6761\u6837\u5F0F")],-1),ke=e("p",null,[t("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"show-as"),t("\u4E3A "),e("code",null,"line"),t(" \u6837\u5F0F\u5373\u53EF\u5C55\u73B0\u4E00\u79CD\u65B0\u7684\u5F62\u6001")],-1),$e=e("h2",{id:"dui-qi-fang-shi"},[e("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),t(" \u5BF9\u9F50\u65B9\u5F0F")],-1),je=e("p",null,[t("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"align"),t("\u4E3A "),e("code",null,"left"),t(),e("code",null,"center"),t(),e("code",null,"right"),t(" \u6837\u5F0F\u5373\u53EF\u6539\u53D8\u8FDB\u5EA6\u6761\u7684\u5BF9\u9F50\u65B9\u5F0F")],-1),Se=e("h2",{id:"huan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#huan-xing-jin-du-tiao"}),t(" \u73AF\u5F62\u8FDB\u5EA6\u6761")],-1),ze=e("p",null,[t("Progress \u7EC4\u4EF6\u53EF\u901A\u8FC7 "),e("code",null,"show-as"),t(" \u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u5728\u73AF\u5F62\u8FDB\u5EA6\u6761\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"width"),t(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u5176\u5927\u5C0F\u3002")],-1),Oe=e("h2",{id:"yi-biao-pan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#yi-biao-pan-xing-jin-du-tiao"}),t(" \u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761")],-1),Ae=e("p",null,[t("\u901A\u8FC7 "),e("code",null,'show-as="dashboard"'),t("\u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761\u3002")],-1),Be=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),t(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Me=e("p",null,"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),Pe=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>percentage</td><td>\u767E\u5206\u6BD4</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>show-as</td><td>\u8FDB\u5EA6\u6761\u5C55\u73B0\u5F62\u5F0F</td><td>string</td><td>stack / circle / dashboard / line</td><td>\u2014</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001</td><td>string</td><td>success / warning / error</td><td>\u2014</td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF08\u4F1A\u8986\u76D6\u72B6\u6001\u989C\u8272\uFF09(show-as \u4E3A stack \u65F6\u4E0D\u53EF\u7528)</td><td>string/function/array</td><td>\u2014</td><td></td></tr><tr><td>track-color</td><td>\u8FDB\u5EA6\u6761\u8F68\u9053\u989C\u8272</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>function(percentage)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>text</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u63CF\u8FF0\u6587\u5B57\uFF0C\u4E3B\u8981\u7528\u5728 line=true \u65F6\uFF0C\u663E\u793A\u5DE6\u4FA7\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stack</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u96C6\u5408\uFF08\u53EA\u5728 show-as \u4E3A stack \u65F6\u53EF\u7528\uFF09</td><td>array[{percentage, type, striped, indicating, active, format}]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>align</td><td>\u8FDB\u5EA6\u6761\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u9ED8\u8BA4\u4E3A { percentage, text }\uFF0Cshow-as=stack \u65F6{percentage, type, striped, indicating, active, format}</td></tr></tbody></table>',4),Fe={setup(h){const n={"../../../examples/progress/align.vue":E,"../../../examples/progress/basic.vue":D,"../../../examples/progress/circle.vue":I,"../../../examples/progress/color.vue":Q,"../../../examples/progress/dashboard.vue":V,"../../../examples/progress/indicating.vue":G,"../../../examples/progress/line.vue":N,"../../../examples/progress/show-as.vue":K,"../../../examples/progress/slot.vue":te,"../../../examples/progress/striped.vue":oe,"../../../examples/progress/type.vue":se};return(c,l)=>{const o=s("demo-block"),p=s("right-nav");return g(),b(w,null,[e("section",null,[le,ce,pe,r(o,{fs:"",demos:d(n),"path-name":"progress/basic","source-code":`<template>\r
  <hl-progress type="disabled" :percentage="40" :format="format" round class="m-b-xxl" />\r
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" />\r
  <hl-progress :percentage="40" :format="format" stroke-width="3px" :show-text="false" track-color="#fff" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const format = percentage => {\r
  return \`\${percentage}%  Complete\`\r
}\r
\r
<\/script>\r
`},{default:a(()=>[ue]),_:1},8,["demos"]),de,ie,r(o,{fs:"",demos:d(n),"path-name":"progress/type","source-code":`<template>\r
  <hl-row gap="var(--md)">\r
    <hl-col span="lg:col-8">\r
      <hl-progress :percentage="68" type="warning" :format="formatWarning" />\r
    </hl-col>\r
    <hl-col span="lg:col-8">\r
      <hl-progress :percentage="68" type="success" :format="formatSuccess" />\r
    </hl-col>\r
    <hl-col span="lg:col-8">\r
      <hl-progress :percentage="68" type="error" :format="formatDanger" />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const formatSuccess = percentage => {\r
  return \`\${percentage}%  success\`\r
}\r
const formatWarning = percentage => {\r
  return \`\${percentage}%  warning\`\r
}\r
const formatDanger = percentage => {\r
  return \`\${percentage}%  danger\`\r
}\r
<\/script>\r
`},null,8,["demos"]),ge,he,r(o,{fs:"",demos:d(n),"path-name":"progress/color","source-code":`<template>\r
  <hl-row gap="var(--md)">\r
    <hl-col span="lg:col-8">\r
      <hl-progress :percentage="percentage" :color="customColor" />\r
    </hl-col>\r
    <hl-col span="lg:col-8">\r
      <hl-progress :percentage="percentage" :color="customColorMethod" />\r
    </hl-col>\r
    <hl-col span="lg:col-8">\r
      <hl-progress :percentage="percentage" :color="customColors" />\r
    </hl-col>\r
  </hl-row>\r
\r
  <hl-group merge indent class="m-t-lg">\r
    <hl-button class="group-item" @click="decrease">\r
      <template #icon>\r
        <hl-icon><two-minus /></hl-icon>\r
      </template>\r
    </hl-button>\r
    <hl-button class="group-item" @click="increase">\r
      <template #icon>\r
        <hl-icon><two-plus /></hl-icon>\r
      </template>\r
    </hl-button>\r
  </hl-group>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'\r
\r
\r
const percentage = ref(20)\r
const customColor = ref('#409eff')\r
const customColors = ref([\r
  { color: '#f56c6c', percentage: 20 },\r
  { color: '#e6a23c', percentage: 40 },\r
  { color: '#5cb87a', percentage: 60 },\r
  { color: '#1989fa', percentage: 80 },\r
  { color: '#6f7ad3', percentage: 100 },\r
])\r
\r
const customColorMethod = percentage => {\r
  if (percentage < 30) {\r
    return '#909399'\r
  } else if (percentage < 70) {\r
    return '#e6a23c'\r
  } else {\r
    return '#67c23a'\r
  }\r
}\r
const increase = () => {\r
  percentage.value += 10\r
  if (percentage.value > 100) {\r
    percentage.value = 100\r
  }\r
}\r
const decrease = () => {\r
  percentage.value -= 10\r
  if (percentage.value < 0) {\r
    percentage.value = 0\r
  }\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),_e,me,r(o,{fs:"",demos:d(n),"path-name":"progress/striped","source-code":`<template>\r
  <hl-row gap="var(--md)">\r
    <hl-col :span="12">\r
      <hl-progress :percentage="50" striped :format="format" />\r
    </hl-col>\r
    <hl-col :span="12">\r
      <hl-progress :percentage="50" striped active :format="formatActive" />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const format = percentage => {\r
  return \`\${percentage}%  \u9759\u6001\u6761\u7EB9\`\r
}\r
const formatActive = percentage => {\r
  return \`\${percentage}%  \u6EDA\u52A8\u6761\u7EB9\`\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),fe,ve,r(o,{fs:"",demos:d(n),"path-name":"progress/indicating","source-code":`<template>\r
  <hl-row gap="var(--md)">\r
    <hl-col :span="12">\r
      <hl-progress :percentage="50" indicating :format="format" />\r
    </hl-col>\r
    <hl-col :span="12">\r
      <hl-progress :percentage="50" indicating active :format="formatActive" />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const format = percentage => {\r
  return \`\${percentage}%  \u9759\u6001\`\r
}\r
const formatActive = percentage => {\r
  return \`\${percentage}%  \u8109\u51B2\`\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),be,we,r(o,{fs:"",demos:d(n),"path-name":"progress/show-as","source-code":`<template>\r
  <hl-progress show-as="stack" :stack="list" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const list = ref([\r
  {\r
    percentage: 35,\r
    type: '',\r
    striped: true,\r
    active: false,\r
  },\r
  {\r
    percentage: 20,\r
    type: 'warning',\r
    indicating: true,\r
    active: true,\r
  },\r
  {\r
    percentage: 20,\r
    type: 'error',\r
    format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,\r
  },\r
])\r
\r
<\/script>\r
`},{default:a(()=>[xe]),_:1},8,["demos"]),ye,ke,r(o,{fs:"",demos:d(n),"path-name":"progress/line","source-code":`<template>\r
  <hl-progress :percentage="75" stroke-width="var(--xxs)" :text="text" show-as="line" />\r
  <br>\r
  <hl-progress :percentage="75" stroke-width="1px" hide-label show-as="line" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const text = ref('\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar')\r
\r
<\/script>\r
`},null,8,["demos"]),$e,je,r(o,{fs:"",demos:d(n),"path-name":"progress/align","source-code":`<template>\r
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" align="items-right" />\r
\r
  <hl-progress show-as="stack" :stack="list" align="items-right" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const format = percentage => {\r
  return \`\${percentage}%  Complete\`\r
}\r
\r
const list = ref([\r
  {\r
    percentage: 35,\r
    type: '',\r
    striped: true,\r
    active: false,\r
  },\r
  {\r
    percentage: 20,\r
    type: 'warning',\r
    indicating: true,\r
    active: true,\r
  },\r
  {\r
    percentage: 20,\r
    type: 'error',\r
    format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,\r
  },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Se,ze,r(o,{fs:"",demos:d(n),"path-name":"progress/circle","source-code":`<template>\r
  <hl-group indent="var(--lg)">\r
    <hl-progress show-as="circle" :percentage="80" />\r
    <hl-progress show-as="circle" stroke-width="4px" :percentage="70" color="#f00" track-color="rgba(0,0,0, 0.01)">\r
      <template #default="{percentage}">\r
        <hl-group dir="vertical" gap="var(--sm)" align="items-middle items-center">\r
          <hl-icon type="danger" size="sm" radius fill class="static"><fill-airplay /></hl-icon>\r
          <h5>{{ percentage }}%</h5>\r
        </hl-group>\r
      </template>\r
    </hl-progress>\r
    <hl-progress show-as="circle" type="info" stroke-width="4px" :percentage="50" text="Label" />\r
  </hl-group>\r
</template>\r
`},null,8,["demos"]),Oe,Ae,r(o,{fs:"",demos:d(n),"path-name":"progress/dashboard","source-code":`<template>\r
  <hl-row>\r
    <hl-col span="md:col-12">\r
      <hl-group indent="var(--md)" class="items-middle">\r
        <hl-button @click="decrease">\r
          <template #icon>\r
            <hl-icon><two-minus /></hl-icon>\r
          </template>\r
        </hl-button>\r
        <hl-progress show-as="dashboard" :percentage="percentage" :color="colors" />\r
        <hl-button @click="increase">\r
          <template #icon>\r
            <hl-icon><two-plus /></hl-icon>\r
          </template>\r
        </hl-button>\r
      </hl-group>\r
    </hl-col>\r
    <hl-col span="md:col-12">\r
      <hl-progress show-as="dashboard" :percentage="percentage2" :color="colors" />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref, onMounted } from 'vue'\r
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'\r
\r
const percentage = ref(10)\r
const percentage2 = ref(0)\r
const colors = ref([\r
  { color: '#f56c6c', percentage: 20 },\r
  { color: '#e6a23c', percentage: 40 },\r
  { color: '#5cb87a', percentage: 60 },\r
  { color: '#1989fa', percentage: 80 },\r
  { color: '#6f7ad3', percentage: 100 },\r
])\r
\r
const increase = () => {\r
  percentage.value += 10\r
  if (percentage.value > 100) {\r
    percentage.value = 100\r
  }\r
}\r
const decrease = () => {\r
  percentage.value -= 10\r
  if (percentage.value < 0) {\r
    percentage.value = 0\r
  }\r
}\r
\r
onMounted(() => {\r
  setInterval(() => {\r
    percentage2.value = (percentage2.value % 100) + 10\r
  }, 500)\r
})\r
\r
<\/script>\r
`},null,8,["demos"]),Be,Me,r(o,{fs:"",demos:d(n),"path-name":"progress/slot","source-code":`<template>\r
  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">\r
    <span>\u81EA\u5B9A\u4E49\u5185\u5BB9</span>\r
  </hl-progress>\r
\r
  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">\r
    <template #default="{percentage, text}">\r
      <span class="progress-label">{{ text }}</span>\r
      <span class="progress-percentage">{{ percentage }}%</span>\r
    </template>\r
  </hl-progress>\r
\r
  <hl-progress show-as="stack" :stack="list" class="m-b-xxl">\r
    <template #default="{percentage}">\r
      <strong>\u8FDB\u5EA6\uFF1A{{ percentage }}%</strong>\r
    </template>\r
  </hl-progress>\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const list = ref([\r
  {\r
    percentage: 35,\r
  },\r
  {\r
    percentage: 20,\r
    type: 'warning',\r
  },\r
  {\r
    percentage: 20,\r
    type: 'error',\r
  },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Pe]),r(p)],64)}}};export{Fe as default};
