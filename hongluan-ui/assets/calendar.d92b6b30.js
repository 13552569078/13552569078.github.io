import{p as v,R as b,H as c,L as u,F as p,P as d,Q as e,T as f,X as s,S as t,C as x,W as D,V as _,a1 as S,o as $}from"./vue.85e091e9.js";import{_ as y}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const E=v({setup(h){const l=b(new Date);return(n,r)=>{const a=c("hl-calendar");return u(),p(a,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=o=>l.value=o)},null,8,["modelValue"])}}});var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const j=e("span",null,"\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9",-1),C=t("\u4E0A\u4E00\u5E74"),A=t("\u4E0A\u4E2A\u6708"),w=t("\u4ECA\u5929"),M=t("\u4E0B\u4E2A\u6708"),P=t("\u4E0B\u4E00\u5E74"),B=v({setup(h){const l=b(null),n=r=>{l.value.selectDate(r)};return(r,a)=>{const o=c("hl-button"),m=c("hl-group"),g=c("hl-calendar");return u(),p(g,{ref_key:"calendar",ref:l},{header:d(({date:z})=>[j,e("span",null,f(z),1),s(m,null,{default:d(()=>[s(o,{size:"sm",onClick:a[0]||(a[0]=i=>n("prev-year"))},{default:d(()=>[C]),_:1}),s(o,{size:"sm",onClick:a[1]||(a[1]=i=>n("prev-month"))},{default:d(()=>[A]),_:1}),s(o,{size:"sm",onClick:a[2]||(a[2]=i=>n("today"))},{default:d(()=>[w]),_:1}),s(o,{size:"sm",onClick:a[3]||(a[3]=i=>n("next-month"))},{default:d(()=>[M]),_:1}),s(o,{size:"sm",onClick:a[4]||(a[4]=i=>n("next-year"))},{default:d(()=>[P]),_:1})]),_:1})]),_:1},512)}}});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const V={};function O(h,l){const n=c("hl-calendar");return u(),p(n,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])}var I=y(V,[["render",O]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const N={};function Q(h,l){const n=c("hl-calendar");return u(),p(n,null,{"date-cell":d(({data:r})=>[e("p",{class:x(r.isSelected?"is-selected":"")},f(r.day.split("-").slice(1).join("-"))+" "+f(r.isSelected?"\u2714\uFE0F":""),3)]),_:1})}var R=y(N,[["render",Q]]),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const X=e("h1",null,"Calendar \u65E5\u5386",-1),F=e("p",null,"\u663E\u793A\u65E5\u671F",-1),H=e("h2",{id:"ji-ben"},[e("a",{class:"header-anchor",href:"#ji-ben"}),t(" \u57FA\u672C")],-1),U=e("div",null,[e("p",null,[t("\u8BBE\u7F6E "),e("code",null,"value"),t(" \u6765\u6307\u5B9A\u5F53\u524D\u663E\u793A\u7684\u6708\u4EFD\u3002\u5982\u679C "),e("code",null,"value"),t(" \u672A\u6307\u5B9A\uFF0C\u5219\u663E\u793A\u5F53\u6708\u3002"),e("code",null,"value"),t(" \u652F\u6301 "),e("code",null,"v-model"),t(" \u53CC\u5411\u7ED1\u5B9A\u3002")])],-1),q=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),t(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),G=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),e("code",null,"dateCell"),t(" \u7684 "),e("code",null,"slot"),t(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5355\u5143\u683C\u4E2D\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),e("code",null,"slot"),t(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09, data\uFF08\u5305\u62EC type\uFF0CisSelected\uFF0Cday \u5C5E\u6027\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),J=e("h2",{id:"zi-ding-yi-fan-wei"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-fan-wei"}),t(" \u81EA\u5B9A\u4E49\u8303\u56F4")],-1),K=e("div",null,[e("p",null,[t("\u8BBE\u7F6E "),e("code",null,"range"),t(" \u5C5E\u6027\u6307\u5B9A\u65E5\u5386\u7684\u663E\u793A\u8303\u56F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002")])],-1),Y=e("h2",{id:"zi-ding-yi-tou-bu"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-tou-bu"}),t(" \u81EA\u5B9A\u4E49\u5934\u90E8")],-1),Z=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),e("code",null,"header"),t(" \u7684 "),e("code",null,"slot"),t(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),e("code",null,"slot"),t(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),ee=$('<h2 id="guo-ji-hua"><a class="header-anchor" href="#guo-ji-hua"></a> \u56FD\u9645\u5316</h2><p>\u9ED8\u8BA4\u8BED\u8A00\u662F\u4E2D\u6587 (Chinese), \u5982\u9700\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00, \u8BF7\u53C2\u8003 <a href="#/zh-CN/component/config-provider">ConfigProvider</a></p><p>\u6CE8\u610F\uFF1A\u65F6\u95F4\u65E5\u671F\u76F8\u5173\u7684\u8BED\u8A00\u914D\u7F6E\u5982 (\u6708\u4EFD\u540D, \u6BCF\u5468\u7B2C\u4E00\u5929\u662F\u5468\u51E0\u7B49) \u4E5F\u662F\u5728\u56FD\u9645\u5316\u91CC\u914D\u7F6E\u3002\u540C\u65F6\u9700\u8981\u5F15\u5165dayjs\u76F8\u5173\u7684\u8BED\u8A00\u5305<code>import &#39;path/to/dayjs/locale/zh-cn&#39;</code></p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>Date</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002</td><td>[Date]Array</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>selectDate</td><td>\u5207\u6362\u65E5\u671F</td><td>today / prev-month / next-month / prev-year / next-year</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date-cell</td><td>{ type, isSelected, day, date }\uFF0C<code>type</code> \u8868\u793A\u8BE5\u65E5\u671F\u7684\u6240\u5C5E\u6708\u4EFD\uFF0C\u53EF\u9009\u503C\u6709 prev-month\uFF0Ccurrent-month\uFF0Cnext-month\uFF1B<code>isSelected</code> \u6807\u660E\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u9009\u4E2D\uFF1B<code>day</code> \u662F\u683C\u5F0F\u5316\u7684\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A yyyy-MM-dd\uFF1B<code>date</code> \u662F\u5355\u5143\u683C\u7684\u65E5\u671F</td></tr><tr><td>header</td><td>{ date }\uFF0C<code>date</code> \u662F\u6708\u4EFD\u4FE1\u606F</td></tr></tbody></table>',9),de={setup(h){const l="calendar",n={"../../../examples/calendar/basic.vue":k,"../../../examples/calendar/header.vue":T,"../../../examples/calendar/range.vue":L,"../../../examples/calendar/slot.vue":W};return(r,a)=>{const o=c("demo-block"),m=c("right-nav");return u(),D(S,null,[e("section",null,[X,F,H,s(o,{fs:"",demos:_(n),"component-id":l,"path-name":"calendar/basic","source-code":`<template>
  <hl-calendar v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
<\/script>
`},{default:d(()=>[U]),_:1},8,["demos"]),q,s(o,{fs:"",demos:_(n),"component-id":l,"path-name":"calendar/slot","source-code":`<template>
  <hl-calendar>
    <template #date-cell="{data}">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '\u2714\uFE0F' :
          '' }}
      </p>
    </template>
  </hl-calendar>
</template>

<style>
  .is-selected {
    color: #1989fa;
  }
</style>
`},{default:d(()=>[G]),_:1},8,["demos"]),J,s(o,{fs:"",demos:_(n),"component-id":l,"path-name":"calendar/range","source-code":`<template>
  <hl-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />
</template>
`},{default:d(()=>[K]),_:1},8,["demos"]),Y,s(o,{fs:"",demos:_(n),"component-id":l,"path-name":"calendar/header","source-code":`<template>
  <hl-calendar ref="calendar">
    <template #header="{date}">
      <span>\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9</span>
      <span>{{ date }}</span>
      <hl-group>
        <hl-button size="sm" @click="selectDate('prev-year')">\u4E0A\u4E00\u5E74</hl-button>
        <hl-button size="sm" @click="selectDate('prev-month')">\u4E0A\u4E2A\u6708</hl-button>
        <hl-button size="sm" @click="selectDate('today')">\u4ECA\u5929</hl-button>
        <hl-button size="sm" @click="selectDate('next-month')">\u4E0B\u4E2A\u6708</hl-button>
        <hl-button size="sm" @click="selectDate('next-year')">\u4E0B\u4E00\u5E74</hl-button>
      </hl-group>
    </template>
  </hl-calendar>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const calendar = ref(null)
const selectDate = value => {
  calendar.value.selectDate(value)
}
<\/script>
`},{default:d(()=>[Z]),_:1},8,["demos"]),ee]),s(m)],64)}}};export{de as default};
