import{p as f,R as c,N as e,L as i,W as h,X as n,P as s,s as u,n as _,Q as t,V as b,U as x}from"./vue.29009e11.js";const z=_("\u5207\u6362\u8BED\u8A00"),y=f({setup(m){const o=c({name:"zh-cn",vt:{demo:{confirm:"\u53BB\u5F80"}}}),a=c({name:"en",vt:{pagination:{confirm:"Go to"}}}),r=()=>{const d=o.value;o.value=a.value,a.value=d};return(d,l)=>{const g=e("vt-demo"),p=e("vt-config-provider"),v=e("hl-button");return i(),h(u,null,[n(p,{locale:a.value},{default:s(()=>[n(g)]),_:1},8,["locale"]),n(v,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:r},{default:s(()=>[z]),_:1})],64)}}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const C=t("h1",null,"Config Provider \u5168\u5C40\u914D\u7F6E",-1),P=t("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\uFF0CConfig Provider \u4F7F\u7528\u4E86 Vue \u7684 provide/inject \u7279\u6027",-1),M=t("h2",{id:"guo-ji-hua-xiang-guan-pei-zhi"},[t("a",{class:"header-anchor",href:"#guo-ji-hua-xiang-guan-pei-zhi"}),_(" \u56FD\u9645\u5316 \u76F8\u5173\u914D\u7F6E")],-1),k=t("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),A=t("div",null,[t("p",null,"\u4F7F\u7528\u4E24\u4E2A\u5C5E\u6027\u6765\u63D0\u4F9B i18n \u76F8\u5173\u914D\u7F6E")],-1),B=x('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>locale</td><td>\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61</td><td>Object&lt;Language&gt;</td><td>zh-cn / zh-tw / en</td><td>Chinese</td></tr><tr><td>size</td><td>\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>zIndex</td><td>\u5168\u5C40\u521D\u59CB\u5316zIndex</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>Message\u76F8\u5173\u914D\u7F6E, <a href="#message-attributes">\u53C2\u89C1\u4E0B\u8868</a></td><td>MessageGlobalConfig</td><td>-</td><td>\u53C2\u89C1\u4E0B\u8868</td></tr><tr><td>experimental-features</td><td>\u5B9E\u9A8C\u7279\u6027\uFF0C\u9ED8\u8BA4\u5168\u90E8\u914D\u7F6E\u4E3Afalse</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="message-attributes"><a class="header-anchor" href="#message-attributes"></a> Message Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max</td><td>\u540C\u65F6\u663E\u793AMessage\u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table>',6),L={setup(m){const o={"../../../examples/config-provider/usage.vue":j};return(a,r)=>{const d=e("demo-block"),l=e("right-nav");return i(),h(u,null,[t("section",null,[C,P,M,k,n(d,{fs:"",demos:b(o),"path-name":"config-provider/usage","source-code":`<template>
  <vt-config-provider :locale="locale2">
    <vt-demo />
  </vt-config-provider>
  <hl-button style="margin-left: 8px; vertical-align: middle" @click="toggle">\u5207\u6362\u8BED\u8A00</hl-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const locale1 = ref({
  name: 'zh-cn',
  vt: {
    demo: {
      confirm: '\u53BB\u5F80',
    },
  },
})
const locale2 = ref({
  name: 'en',
  vt: {
    pagination: {
      confirm: 'Go to',
    },
  },
})
const toggle = () => {
  const temp = locale1.value
  locale1.value = locale2.value
  locale2.value = temp
}

<\/script>
`},{default:s(()=>[A]),_:1},8,["demos"]),B]),n(l)],64)}}};export{L as default};
