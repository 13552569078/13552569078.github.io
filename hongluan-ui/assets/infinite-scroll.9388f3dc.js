import{p as g,R as _,aq as y,I as x,L as t,W as n,a1 as p,af as j,T as k,B as h,V as r,a as v,H as b,Q as i,X as u,S as d,o as S}from"./vue.85e091e9.js";const $={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}},T=g({setup(m){const e=_(0),s=()=>{e.value+=2};return(a,c)=>{const o=y("infinite-scroll");return x((t(),n("ul",$,[(t(!0),n(p,null,j(e.value,l=>(t(),n("li",{key:l,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(l),1))),128))])),[[o,s]])}}});var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const z=["infinite-scroll-disabled"],A={key:0},I={key:1},O=g({setup(m){const e=_(10),s=_(!1),a=h(()=>e.value>=20),c=h(()=>s.value||a.value),o=()=>{s.value=!0,setTimeout(()=>{e.value+=2,s.value=!1},2e3)};return(l,V)=>{const M=y("infinite-scroll");return t(),n("div",null,[x((t(),n("ul",{style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":r(c)},[(t(!0),n(p,null,j(e.value,f=>(t(),n("li",{key:f,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(f),1))),128))],8,z)),[[M,o]]),s.value?(t(),n("p",A,"\u52A0\u8F7D\u4E2D...")):v("",!0),r(a)?(t(),n("p",I,"\u6CA1\u6709\u66F4\u591A\u4E86")):v("",!0)])}}});var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const D=i("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),E=i("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),F=i("h2",{id:"ji-chu-yong-fa"},[i("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),L=i("p",null,[d("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),i("code",null,"v-infinite-scroll"),d("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),Q=i("h2",{id:"jin-yong-jia-zai"},[i("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),d(" \u7981\u7528\u52A0\u8F7D")],-1),R=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2),X={setup(m){const e="infinite-scroll",s={"../../../examples/infinite-scroll/basic.vue":w,"../../../examples/infinite-scroll/disabled.vue":B};return(a,c)=>{const o=b("demo-block"),l=b("right-nav");return t(),n(p,null,[i("section",null,[D,E,F,L,u(o,{fs:"",demos:r(s),"component-id":e,"path-name":"infinite-scroll/basic","source-code":`<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none">
    <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const load = () => {
  count.value += 2
}
<\/script>
`},null,8,["demos"]),Q,u(o,{fs:"",demos:r(s),"component-id":e,"path-name":"infinite-scroll/disabled","source-code":`<template>
  <div>
    <ul
      v-infinite-scroll="load"
      style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
    </ul>
    <p v-if="loading">\u52A0\u8F7D\u4E2D...</p>
    <p v-if="noMore">\u6CA1\u6709\u66F4\u591A\u4E86</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const count = ref(10)
const loading = ref(false)

const noMore = computed(() => {
  return count.value >= 20
})
const disabled = computed(() => {
  return loading.value || noMore.value
})

const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
<\/script>
`},null,8,["demos"]),R]),u(l)],64)}}};export{X as default};
