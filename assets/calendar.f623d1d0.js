import{p as f,R as v,I as c,L as u,H as p,P as l,Q as e,U as m,X as o,T as t,F as x,W as D,V as _,a3 as j,o as S}from"./vue.8a077a47.js";import{_ as b}from"./index.3e39e2d9.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";import"./hongluan-icons.286a55ba.js";const $=f({setup(h){const a=v(new Date);return(r,d)=>{const n=c("hl-calendar");return u(),p(n,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=s=>a.value=s)},null,8,["modelValue"])}}});var E=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const k=e("span",null,"\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9",-1),A=t("\u4E0A\u4E00\u5E74"),C=t("\u4E0A\u4E2A\u6708"),P=t("\u4ECA\u5929"),w=t("\u4E0B\u4E2A\u6708"),O=t("\u4E0B\u4E00\u5E74"),M=f({setup(h){const a=v(null),r=d=>{a.value.selectDate(d)};return(d,n)=>{const s=c("hl-button"),y=c("hl-group"),g=c("hl-calendar");return u(),p(g,{ref_key:"calendar",ref:a},{header:l(({date:z})=>[k,e("span",null,m(z),1),o(y,null,{default:l(()=>[o(s,{size:"sm",onClick:n[0]||(n[0]=i=>r("prev-year"))},{default:l(()=>[A]),_:1}),o(s,{size:"sm",onClick:n[1]||(n[1]=i=>r("prev-month"))},{default:l(()=>[C]),_:1}),o(s,{size:"sm",onClick:n[2]||(n[2]=i=>r("today"))},{default:l(()=>[P]),_:1}),o(s,{size:"sm",onClick:n[3]||(n[3]=i=>r("next-month"))},{default:l(()=>[w]),_:1}),o(s,{size:"sm",onClick:n[4]||(n[4]=i=>r("next-year"))},{default:l(()=>[O]),_:1})]),_:1})]),_:1},512)}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const T={};function V(h,a){const r=c("hl-calendar");return u(),p(r,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])}var I=b(T,[["render",V]]),L=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const N={};function Q(h,a){const r=c("hl-calendar");return u(),p(r,null,{"date-cell":l(({data:d})=>[e("p",{class:x(d.isSelected?"is-selected":"")},m(d.day.split("-").slice(1).join("-"))+" "+m(d.isSelected?"\u2714\uFE0F":""),3)]),_:1})}var R=b(N,[["render",Q]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const W=e("h1",null,"Calendar \u65E5\u5386",-1),X=e("p",null,"\u663E\u793A\u65E5\u671F",-1),F=e("h2",{id:"ji-ben"},[e("a",{class:"header-anchor",href:"#ji-ben"}),t(" \u57FA\u672C")],-1),H=e("div",null,[e("p",null,[t("\u8BBE\u7F6E "),e("code",null,"value"),t(" \u6765\u6307\u5B9A\u5F53\u524D\u663E\u793A\u7684\u6708\u4EFD\u3002\u5982\u679C "),e("code",null,"value"),t(" \u672A\u6307\u5B9A\uFF0C\u5219\u663E\u793A\u5F53\u6708\u3002"),e("code",null,"value"),t(" \u652F\u6301 "),e("code",null,"v-model"),t(" \u53CC\u5411\u7ED1\u5B9A\u3002")])],-1),q=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),t(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),G=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),e("code",null,"dateCell"),t(" \u7684 "),e("code",null,"slot"),t(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5355\u5143\u683C\u4E2D\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),e("code",null,"slot"),t(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09, data\uFF08\u5305\u62EC type\uFF0CisSelected\uFF0Cday \u5C5E\u6027\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),J=e("h2",{id:"zi-ding-yi-fan-wei"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-fan-wei"}),t(" \u81EA\u5B9A\u4E49\u8303\u56F4")],-1),K=e("div",null,[e("p",null,[t("\u8BBE\u7F6E "),e("code",null,"range"),t(" \u5C5E\u6027\u6307\u5B9A\u65E5\u5386\u7684\u663E\u793A\u8303\u56F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002")])],-1),Y=e("h2",{id:"zi-ding-yi-tou-bu"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-tou-bu"}),t(" \u81EA\u5B9A\u4E49\u5934\u90E8")],-1),Z=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),e("code",null,"header"),t(" \u7684 "),e("code",null,"slot"),t(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),e("code",null,"slot"),t(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),ee=S('<h2 id="guo-ji-hua"><a class="header-anchor" href="#guo-ji-hua"></a> \u56FD\u9645\u5316</h2><p>\u9ED8\u8BA4\u8BED\u8A00\u662F\u4E2D\u6587 (Chinese), \u5982\u9700\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00, \u8BF7\u53C2\u8003 <a href="#/zh-CN/component/config-provider">ConfigProvider</a></p><p>\u6CE8\u610F\uFF1A\u65F6\u95F4\u65E5\u671F\u76F8\u5173\u7684\u8BED\u8A00\u914D\u7F6E\u5982 (\u6708\u4EFD\u540D, \u6BCF\u5468\u7B2C\u4E00\u5929\u662F\u5468\u51E0\u7B49) \u4E5F\u662F\u5728\u56FD\u9645\u5316\u91CC\u914D\u7F6E\u3002\u540C\u65F6\u9700\u8981\u5F15\u5165dayjs\u76F8\u5173\u7684\u8BED\u8A00\u5305<code>import &#39;path/to/dayjs/locale/zh-cn&#39;</code></p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>Date</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002</td><td>[Date]Array</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>selectDate</td><td>\u5207\u6362\u65E5\u671F</td><td>today / prev-month / next-month / prev-year / next-year</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date-cell</td><td>{ type, isSelected, day, date }\uFF0C<code>type</code> \u8868\u793A\u8BE5\u65E5\u671F\u7684\u6240\u5C5E\u6708\u4EFD\uFF0C\u53EF\u9009\u503C\u6709 prev-month\uFF0Ccurrent-month\uFF0Cnext-month\uFF1B<code>isSelected</code> \u6807\u660E\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u9009\u4E2D\uFF1B<code>day</code> \u662F\u683C\u5F0F\u5316\u7684\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A yyyy-MM-dd\uFF1B<code>date</code> \u662F\u5355\u5143\u683C\u7684\u65E5\u671F</td></tr><tr><td>header</td><td>{ date }\uFF0C<code>date</code> \u662F\u6708\u4EFD\u4FE1\u606F</td></tr></tbody></table>',9),oe={setup(h){const a={"../../../examples/calendar/basic.vue":E,"../../../examples/calendar/header.vue":B,"../../../examples/calendar/range.vue":L,"../../../examples/calendar/slot.vue":U};return(r,d)=>{const n=c("demo-block"),s=c("right-nav");return u(),D(j,null,[e("section",null,[W,X,F,o(n,{fs:"",demos:_(a),"path-name":"calendar/basic","source-code":`<template>\r
  <hl-calendar v-model="value" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(new Date())\r
<\/script>\r
`},{default:l(()=>[H]),_:1},8,["demos"]),q,o(n,{fs:"",demos:_(a),"path-name":"calendar/slot","source-code":`<template>\r
  <hl-calendar>\r
    <template #date-cell="{data}">\r
      <p :class="data.isSelected ? 'is-selected' : ''">\r
        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '\u2714\uFE0F' :\r
          '' }}\r
      </p>\r
    </template>\r
  </hl-calendar>\r
</template>\r
\r
<style>\r
  .is-selected {\r
    color: #1989fa;\r
  }\r
</style>\r
`},{default:l(()=>[G]),_:1},8,["demos"]),J,o(n,{fs:"",demos:_(a),"path-name":"calendar/range","source-code":`<template>\r
  <hl-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />\r
</template>\r
`},{default:l(()=>[K]),_:1},8,["demos"]),Y,o(n,{fs:"",demos:_(a),"path-name":"calendar/header","source-code":`<template>\r
  <hl-calendar ref="calendar">\r
    <template #header="{date}">\r
      <span>\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9</span>\r
      <span>{{ date }}</span>\r
      <hl-group>\r
        <hl-button size="sm" @click="selectDate('prev-year')">\u4E0A\u4E00\u5E74</hl-button>\r
        <hl-button size="sm" @click="selectDate('prev-month')">\u4E0A\u4E2A\u6708</hl-button>\r
        <hl-button size="sm" @click="selectDate('today')">\u4ECA\u5929</hl-button>\r
        <hl-button size="sm" @click="selectDate('next-month')">\u4E0B\u4E2A\u6708</hl-button>\r
        <hl-button size="sm" @click="selectDate('next-year')">\u4E0B\u4E00\u5E74</hl-button>\r
      </hl-group>\r
    </template>\r
  </hl-calendar>\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const calendar = ref(null)\r
const selectDate = value => {\r
  calendar.value.selectDate(value)\r
}\r
<\/script>\r
`},{default:l(()=>[Z]),_:1},8,["demos"]),ee]),o(s)],64)}}};export{oe as default};
