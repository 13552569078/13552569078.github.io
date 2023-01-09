import{p as m,R as c,I as s,L as u,H as _,W as v,Q as r,X as n,a3 as g,P as h,V as i,o as b,T as f}from"./vue.8a077a47.js";const k=m({setup(p){const e=c("rgba(19, 206, 102, 0.8)");return(a,o)=>{const t=s("hl-color-picker");return u(),_(t,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),"show-alpha":""},null,8,["modelValue"])}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));const y={class:"m-b-md"},x=r("span",{class:"m-r-sm"},"\u6709\u9ED8\u8BA4\u503C",-1),z=r("span",{class:"m-r-sm"},"\u65E0\u9ED8\u8BA4\u503C",-1),S=m({setup(p){const e=c("#409EFF"),a=c();return(o,t)=>{const d=s("hl-color-picker");return u(),v(g,null,[r("div",y,[x,n(d,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,8,["modelValue"])]),r("div",null,[z,n(d,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l)},null,8,["modelValue"])])],64)}}});var j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const P=m({setup(p){const e=c("rgba(255, 69, 0, 0.68)"),a=c(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(o,t)=>{const d=s("hl-color-picker");return u(),_(d,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),"show-alpha":"",predefine:a.value},null,8,["modelValue","predefine"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const E=m({setup(p){const e=c("409EFF");return(a,o)=>{const t=s("hl-color-picker"),d=s("hl-group");return u(),_(d,{indent:"var(--md)"},{default:h(()=>[n(t,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),size:"lg"},null,8,["modelValue"]),n(t,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l)},null,8,["modelValue"]),n(t,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value=l),size:"sm"},null,8,["modelValue"])]),_:1})}}});var F=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const O=b('<h1>ColorPicker \u989C\u8272\u9009\u62E9\u5668</h1><p>\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><h2 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa"></a> \u57FA\u7840\u7528\u6CD5</h2>',4),C=r("div",null,[r("p",null,"\u4F7F\u7528 v-model \u4E0E Vue \u5B9E\u4F8B\u4E2D\u7684\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\uFF0C\u7ED1\u5B9A\u7684\u53D8\u91CF\u9700\u8981\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u3002")],-1),U=r("h2",{id:"xuan-ze-tou-ming-du"},[r("a",{class:"header-anchor",href:"#xuan-ze-tou-ming-du"}),f(" \u9009\u62E9\u900F\u660E\u5EA6")],-1),A=r("div",null,[r("p",null,"ColorPicker \u652F\u6301\u666E\u901A\u989C\u8272\uFF0C\u4E5F\u652F\u6301\u5E26 Alpha \u901A\u9053\u7684\u989C\u8272\uFF0C \u8981\u542F\u7528 Alpha \u9009\u62E9\uFF0C\u53EA\u9700\u6DFB\u52A0 show-alpha \u5C5E\u6027\u3002")],-1),T=r("h2",{id:"yu-ding-yi-yan-se"},[r("a",{class:"header-anchor",href:"#yu-ding-yi-yan-se"}),f(" \u9884\u5B9A\u4E49\u989C\u8272")],-1),$=r("div",null,[r("p",null,"\u9884\u5B9A\u4E49\u989C\u8272")],-1),M=r("h2",{id:"bu-tong-chi-cun"},[r("a",{class:"header-anchor",href:"#bu-tong-chi-cun"}),f(" \u4E0D\u540C\u5C3A\u5BF8")],-1),R=b('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>large / default /small</td><td>\u2014</td></tr><tr><td>show-alpha</td><td>\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>color-format</td><td>\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (\u5F53 show-alpha \u4E3A false) / rgb (\u5F53 show-alpha \u4E3A true)</td></tr><tr><td>popper-class</td><td>\u989C\u8272\u9009\u62E9\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>predefine</td><td>\u9884\u5B9A\u4E49\u989C\u8272</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>validate-event</td><td>\u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C</td></tr><tr><td>active-change</td><td>\u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u503C</td></tr></tbody></table>',4),D={setup(p){const e={"../../../examples/color-picker/alpha.vue":V,"../../../examples/color-picker/basic.vue":j,"../../../examples/color-picker/predefined-color.vue":w,"../../../examples/color-picker/sizes.vue":F};return(a,o)=>{const t=s("demo-block"),d=s("right-nav");return u(),v(g,null,[r("section",null,[O,n(t,{fs:"",demos:i(e),"path-name":"color-picker/basic","source-code":`<template>\r
  <div class="m-b-md">\r
    <span class="m-r-sm">\u6709\u9ED8\u8BA4\u503C</span>\r
    <hl-color-picker v-model="color1" />\r
  </div>\r
  <div>\r
    <span class="m-r-sm">\u65E0\u9ED8\u8BA4\u503C</span>\r
    <hl-color-picker v-model="color2" />\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const color1 = ref('#409EFF')\r
const color2 = ref()\r
\r
<\/script>\r
`},{default:h(()=>[C]),_:1},8,["demos"]),U,n(t,{fs:"",demos:i(e),"path-name":"color-picker/alpha","source-code":`<template>\r
  <hl-color-picker v-model="color" show-alpha />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const color = ref('rgba(19, 206, 102, 0.8)')\r
\r
<\/script>\r
`},{default:h(()=>[A]),_:1},8,["demos"]),T,n(t,{fs:"",demos:i(e),"path-name":"color-picker/predefined-color","source-code":`<template>\r
  <hl-color-picker v-model="color" show-alpha :predefine="predefineColors" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const color = ref('rgba(255, 69, 0, 0.68)')\r
const predefineColors = ref([\r
  '#ff4500',\r
  '#ff8c00',\r
  '#ffd700',\r
  '#90ee90',\r
  '#00ced1',\r
  '#1e90ff',\r
  '#c71585',\r
  'rgba(255, 69, 0, 0.68)',\r
  'rgb(255, 120, 0)',\r
  'hsv(51, 100, 98)',\r
  'hsva(120, 40, 94, 0.5)',\r
  'hsl(181, 100%, 37%)',\r
  'hsla(209, 100%, 56%, 0.73)',\r
  '#c7158577',\r
])\r
<\/script>\r
`},{default:h(()=>[$]),_:1},8,["demos"]),M,n(t,{fs:"",demos:i(e),"path-name":"color-picker/sizes","source-code":`<template>\r
  <hl-group indent="var(--md)">\r
    <hl-color-picker v-model="color" size="lg" />\r
    <hl-color-picker v-model="color" />\r
    <hl-color-picker v-model="color" size="sm" />\r
  </hl-group>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const color = ref('409EFF')\r
\r
<\/script>\r
`},null,8,["demos"]),R]),n(d)],64)}}};export{D as default};
