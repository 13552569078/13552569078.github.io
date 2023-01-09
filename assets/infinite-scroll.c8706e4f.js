import{p as g,R as _,ar as y,M as x,L as t,W as e,a3 as p,ag as j,U as k,B as h,V as a,a as v,I as b,Q as r,X as u,T as d,o as $}from"./vue.8a077a47.js";const O={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}},S=g({setup(f){const n=_(0),s=()=>{n.value+=2};return(o,i)=>{const l=y("infinite-scroll");return x((t(),e("ul",O,[(t(!0),e(p,null,j(n.value,c=>(t(),e("li",{key:c,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(c),1))),128))])),[[l,s]])}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const w=["infinite-scroll-disabled"],z={key:0},A={key:1},P=g({setup(f){const n=_(10),s=_(!1),o=h(()=>n.value>=20),i=h(()=>s.value||o.value),l=()=>{s.value=!0,setTimeout(()=>{n.value+=2,s.value=!1},2e3)};return(c,R)=>{const M=y("infinite-scroll");return t(),e("div",null,[x((t(),e("ul",{style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":a(i)},[(t(!0),e(p,null,j(n.value,m=>(t(),e("li",{key:m,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(m),1))),128))],8,w)),[[M,l]]),s.value?(t(),e("p",z,"\u52A0\u8F7D\u4E2D...")):v("",!0),a(o)?(t(),e("p",A,"\u6CA1\u6709\u66F4\u591A\u4E86")):v("",!0)])}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const D=r("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),E=r("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),F=r("h2",{id:"ji-chu-yong-fa"},[r("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),I=r("p",null,[d("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),r("code",null,"v-infinite-scroll"),d("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),L=r("h2",{id:"jin-yong-jia-zai"},[r("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),d(" \u7981\u7528\u52A0\u8F7D")],-1),Q=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2),W={setup(f){const n={"../../../examples/infinite-scroll/basic.vue":T,"../../../examples/infinite-scroll/disabled.vue":B};return(s,o)=>{const i=b("demo-block"),l=b("right-nav");return t(),e(p,null,[r("section",null,[D,E,F,I,u(i,{fs:"",demos:a(n),"path-name":"infinite-scroll/basic","source-code":`<template>\r
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none">\r
    <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>\r
  </ul>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const count = ref(0)\r
const load = () => {\r
  count.value += 2\r
}\r
<\/script>\r
`},null,8,["demos"]),L,u(i,{fs:"",demos:a(n),"path-name":"infinite-scroll/disabled","source-code":`<template>\r
  <div>\r
    <ul\r
      v-infinite-scroll="load"\r
      style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none"\r
      :infinite-scroll-disabled="disabled"\r
    >\r
      <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>\r
    </ul>\r
    <p v-if="loading">\u52A0\u8F7D\u4E2D...</p>\r
    <p v-if="noMore">\u6CA1\u6709\u66F4\u591A\u4E86</p>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref, computed } from 'vue'\r
\r
const count = ref(10)\r
const loading = ref(false)\r
\r
const noMore = computed(() => {\r
  return count.value >= 20\r
})\r
const disabled = computed(() => {\r
  return loading.value || noMore.value\r
})\r
\r
const load = () => {\r
  loading.value = true\r
  setTimeout(() => {\r
    count.value += 2\r
    loading.value = false\r
  }, 2000)\r
}\r
<\/script>\r
`},null,8,["demos"]),Q]),u(l)],64)}}};export{W as default};
