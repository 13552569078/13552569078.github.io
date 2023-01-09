import{p as D,R as h,I as o,L as f,H as F,P as n,X as d,V as v,Q as t,W as y,a3 as E,o as w,T as s}from"./vue.8a077a47.js";const k=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),T=t("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),V=t("p",{class:"m-b-sm"},"\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4",-1),x=D({setup(b){const u=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const a=new Date;return a.setTime(a.getTime()-864e5),a})()},{text:"\u4E00\u5468\u524D",value:(()=>{const a=new Date;return a.setTime(a.getTime()-6048e5),a})()}],p=new Date(2e3,1,1,12,0,0),c=h(""),r=h(""),e=h("");return(a,l)=>{const m=o("hl-date-picker"),i=o("hl-col"),_=o("hl-row");return f(),F(_,{gap:"var(--lg)"},{default:n(()=>[d(i,{span:"lg:col-8"},{default:n(()=>[k,d(m,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=g=>c.value=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1}),d(i,{span:"lg:col-8"},{default:n(()=>[T,d(m,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=g=>r.value=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",shortcuts:u,block:""},null,8,["modelValue"])]),_:1}),d(i,{span:"lg:col-8"},{default:n(()=>[V,d(m,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=g=>e.value=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4","default-time":v(p),block:""},null,8,["modelValue","default-time"])]),_:1})]),_:1})}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const j=t("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1),P=t("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),S=D({setup(b){const u=[{text:"\u6700\u8FD1\u4E00\u5468",value:()=>{const r=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,r]}},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:()=>{const r=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,r]}},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:()=>{const r=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,r]}}],p=h([new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)]),c=h("");return(r,e)=>{const a=o("hl-date-picker"),l=o("hl-col"),m=o("hl-row");return f(),F(m,{align:"items-center",gap:"var(--lg)"},{default:n(()=>[d(l,{span:"col"},{default:n(()=>[j,d(a,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=i=>p.value=i),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),d(l,{span:"col"},{default:n(()=>[P,d(a,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=i=>c.value=i),type:"datetimerange",shortcuts:u,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1})]),_:1})}}});var A=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const q=t("p",{class:"m-b-md"},"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00",-1),C=t("p",{class:"m-b-md"},"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1),$=D({setup(b){const u=[new Date(2e3,1,1,12,0,0)],p=[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)],c=h(""),r=h("");return(e,a)=>{const l=o("hl-date-picker"),m=o("hl-col"),i=o("hl-row");return f(),F(i,{align:"items-center",gap:"var(--lg)"},{default:n(()=>[d(m,{span:"col"},{default:n(()=>[q,d(l,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=_=>c.value=_),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":u,block:""},null,8,["modelValue"])]),_:1}),d(m,{span:"col"},{default:n(()=>[C,d(l,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=_=>r.value=_),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":p,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const N=w('<h1>DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668</h1><p>\u4E3A<code>hl-date-picker</code>\u8BBE\u7F6E<code>type</code>\u5C5E\u6027\u4E3A<code>datetime</code>\uFF0C\u5373\u53EF\u5728\u540C\u4E00\u4E2A\u9009\u62E9\u5668\u91CC\u540C\u65F6\u8FDB\u884C\u65E5\u671F\u548C\u65F6\u95F4\u7684\u9009\u62E9\u3002\u5FEB\u6377\u9009\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E Date Picker \u76F8\u540C\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div>',3),U=t("div",null,[t("p",null,"DateTimePicker \u7531 \u65F6\u95F4 \u548C \u65E5\u671F \u9009\u62E9\u5668\u6D3E\u751F\u800C\u6765\uFF0C\u76F8\u5173\u5C5E\u6027\u53EF\u53C2\u8003\u6587\u6863\u8BF4\u660E\u3002")],-1),M=t("h2",{id:"ri-qi-he-shi-jian-fan-wei"},[t("a",{class:"header-anchor",href:"#ri-qi-he-shi-jian-fan-wei"}),s(" \u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")],-1),O=t("div",null,[t("p",null,[s("\u8BBE\u7F6E"),t("code",null,"type"),s("\u4E3A"),t("code",null,"datetimerange"),s("\u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")])],-1),Y=t("h2",{id:"mo-ren-de-qi-shi-yu-jie-shu-shi-ke"},[t("a",{class:"header-anchor",href:"#mo-ren-de-qi-shi-yu-jie-shu-shi-ke"}),s(" \u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B")],-1),H=t("div",null,[t("p",null,[s("\u4F7F\u7528"),t("code",null,"datetimerange"),s("\u8FDB\u884C\u8303\u56F4\u9009\u62E9\u65F6\uFF0C\u5728\u65E5\u671F\u9009\u62E9\u9762\u677F\u4E2D\u9009\u5B9A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65E5\u671F\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u8BE5\u65E5\u671F\u7684"),t("code",null,"00:00:00"),s("\u4F5C\u4E3A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65F6\u523B\uFF1B\u901A\u8FC7\u9009\u9879"),t("code",null,"default-time"),s("\u53EF\u4EE5\u63A7\u5236\u9009\u4E2D\u8D77\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\u65F6\u6240\u4F7F\u7528\u7684\u5177\u4F53\u65F6\u523B\u3002"),t("code",null,"default-time"),s("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u7B2C\u4E00\u9879\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\u3002")])],-1),R=w('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u9700\u8981\u957F\u5EA6\u4E3A2</td><td>Date / number / string / Array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>lg</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>time-arrow-control</td><td>\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD HH:mm:ss</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>popper-class</td><td>DateTimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u9009\u4E2D\u65E5\u671F\u540E\u7684\u9ED8\u8BA4\u5177\u4F53\u65F6\u523B</td><td>Date / \u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate[]</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate \u5BF9\u8C61\uFF1B\u8303\u56F4\u9009\u62E9\u65F6\uFF1A\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u6BCF\u9879\u503C\u4E3A Date \u5BF9\u8C61\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-class-name</td><td>\u8BBE\u7F6E\u65E5\u671F\u7684 className</td><td>Function(Date)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>id</td><td>input\u8F93\u5165\u6846id\u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(e: FocusEvent)</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(e: FocusEvent)</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>datetimerange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr></tbody></table><h2 id="slots-2"><a class="header-anchor" href="#slots-2"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>range-separator</td><td>\u81EA\u5B9A\u4E49\u5206\u9694\u7B26</td></tr></tbody></table>',10),Q={setup(b){const u={"../../../examples/datetime-picker/basic.vue":B,"../../../examples/datetime-picker/datetimerange.vue":A,"../../../examples/datetime-picker/default-time.vue":z};return(p,c)=>{const r=o("demo-block"),e=o("right-nav");return f(),y(E,null,[t("section",null,[N,d(r,{fs:"",demos:v(u),"path-name":"datetime-picker/basic","source-code":`<template>\r
  <hl-row gap="var(--lg)">\r
    <hl-col span="lg:col-8">\r
      <p class="m-b-sm">\u9ED8\u8BA4</p>\r
      <hl-date-picker v-model="value1" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" block />\r
    </hl-col>\r
    <hl-col span="lg:col-8">\r
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>\r
      <hl-date-picker v-model="value2" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" :shortcuts="shortcuts" block />\r
    </hl-col>\r
    <hl-col span="lg:col-8">\r
      <p class="m-b-sm">\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4</p>\r
      <hl-date-picker v-model="value3" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" :default-time="defaultTime" block />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const shortcuts = [\r
  {\r
    text: '\u4ECA\u5929',\r
    value: new Date(),\r
  },\r
  {\r
    text: '\u6628\u5929',\r
    value: (() => {\r
      const date = new Date()\r
      date.setTime(date.getTime() - 3600 * 1000 * 24)\r
      return date\r
    })(),\r
  },\r
  {\r
    text: '\u4E00\u5468\u524D',\r
    value: (() => {\r
      const date = new Date()\r
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)\r
      return date\r
    })(),\r
  },\r
]\r
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)\r
\r
const value1 = ref('')\r
const value2 = ref('')\r
const value3 = ref('')\r
\r
<\/script>\r
`},{default:n(()=>[U]),_:1},8,["demos"]),M,d(r,{fs:"",demos:v(u),"path-name":"datetime-picker/datetimerange","source-code":`<template>\r
  <hl-row align="items-center" gap="var(--lg)">\r
    <hl-col span="col">\r
      <p class="m-b-md">\u9ED8\u8BA4</p>\r
      <hl-date-picker\r
        v-model="value1"\r
        type="datetimerange"\r
        range-separator="\u81F3"\r
        start-placeholder="\u5F00\u59CB\u65E5\u671F"\r
        end-placeholder="\u7ED3\u675F\u65E5\u671F"\r
      />\r
    </hl-col>\r
    <hl-col span="col">\r
      <p class="m-b-md">\u5E26\u5FEB\u6377\u9009\u9879</p>\r
      <hl-date-picker\r
        v-model="value2"\r
        type="datetimerange"\r
        :shortcuts="shortcuts"\r
        range-separator="\u81F3"\r
        start-placeholder="\u5F00\u59CB\u65E5\u671F"\r
        end-placeholder="\u7ED3\u675F\u65E5\u671F"\r
      />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const shortcuts = [\r
  {\r
    text: '\u6700\u8FD1\u4E00\u5468',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)\r
      return [start, end]\r
    },\r
  },\r
  {\r
    text: '\u6700\u8FD1\u4E00\u4E2A\u6708',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)\r
      return [start, end]\r
    },\r
  },\r
  {\r
    text: '\u6700\u8FD1\u4E09\u4E2A\u6708',\r
    value: () => {\r
      const end = new Date()\r
      const start = new Date()\r
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)\r
      return [start, end]\r
    },\r
  },\r
]\r
\r
const value1 = ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)])\r
const value2 = ref('')\r
\r
<\/script>\r
`},{default:n(()=>[O]),_:1},8,["demos"]),Y,d(r,{fs:"",demos:v(u),"path-name":"datetime-picker/default-time","source-code":`<template>\r
  <hl-row align="items-center" gap="var(--lg)">\r
    <hl-col span="col">\r
      <p class="m-b-md">\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00</p>\r
      <hl-date-picker\r
        v-model="value1"\r
        type="datetimerange"\r
        start-placeholder="\u5F00\u59CB\u65E5\u671F"\r
        end-placeholder="\u7ED3\u675F\u65E5\u671F"\r
        :default-time="defaultTime1"\r
        block\r
      />\r
    </hl-col>\r
    <hl-col span="col">\r
      <p class="m-b-md">\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00</p>\r
      <hl-date-picker\r
        v-model="value2"\r
        type="datetimerange"\r
        start-placeholder="\u5F00\u59CB\u65E5\u671F"\r
        end-placeholder="\u7ED3\u675F\u65E5\u671F"\r
        :default-time="defaultTime2"\r
        block\r
      />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'\r
const defaultTime2 = [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)] // '12:00:00', '08:00:00'\r
\r
const value1 = ref('')\r
const value2 = ref('')\r
\r
<\/script>\r
`},{default:n(()=>[H]),_:1},8,["demos"]),R]),d(e)],64)}}};export{Q as default};
