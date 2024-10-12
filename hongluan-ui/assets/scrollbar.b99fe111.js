import{H as i,L as a,F as S,P as o,W as c,af as v,Q as t,T as x,a1 as h,p as T,R as p,E as M,X as n,S as r,V as g,o as j}from"./vue.85e091e9.js";import{_ as $}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const L={};function O(_,e){const d=i("hl-scrollbar");return a(),S(d,{height:"calc(var(--lg) * 10)"},{default:o(()=>[(a(),c(h,null,v(20,l=>t("span",{key:l,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},x(l),1)),64))]),_:1})}var V=$(L,[["render",O]]),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const D={},E={class:"display-flex",style:{gap:"var(--md)"}};function H(_,e){const d=i("hl-scrollbar");return a(),S(d,null,{default:o(()=>[t("div",E,[(a(),c(h,null,v(20,l=>t("span",{key:l,class:"w-sm static p-md bg-primary text-center text-inverse"},x(l),1)),64))])]),_:1})}var P=$(D,[["render",H]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const F=T({setup(_){const e=p(0),d=p(0),l=p(null),b=p(null),u=s=>{b.value.setScrollTop(s)},m=s=>`${s} px`,y=({scrollTop:s})=>{d.value=s};return M(()=>{e.value=l.value.clientHeight-380}),(s,k)=>{const w=i("hl-scrollbar"),z=i("hl-slider");return a(),c(h,null,[n(w,{ref_key:"scrollbar",ref:b,height:"calc(var(--lg) * 10)",always:"",onScroll:y},{default:o(()=>[t("div",{ref_key:"inner",ref:l},[(a(),c(h,null,v(20,f=>t("span",{key:f,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},x(f),1)),64))],512)]),_:1},512),n(z,{modelValue:d.value,"onUpdate:modelValue":k[0]||(k[0]=f=>d.value=f),max:e.value,"format-tooltip":m,onInput:u},null,8,["modelValue","max"])],64)}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const Q=r("\u6DFB\u52A0\u5143\u7D20"),R=r("\u5220\u9664\u5143\u7D20"),W=T({setup(_){const e=p(3),d=()=>{e.value++},l=()=>{e.value>0&&e.value--};return(b,u)=>{const m=i("hl-button"),y=i("hl-scrollbar");return a(),c(h,null,[n(m,{class:"m-r-md",onClick:d},{default:o(()=>[Q]),_:1}),n(m,{onClick:l},{default:o(()=>[R]),_:1}),n(y,{class:"m-t-lg","max-height":"calc(var(--lg) * 10)"},{default:o(()=>[(a(!0),c(h,null,v(e.value,s=>(a(),c("span",{key:s,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},x(s),1))),128))]),_:1})],64)}}});var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const B=t("h1",null,"Scrollbar \u6EDA\u52A8\u6761",-1),N=t("p",null,"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002",-1),U=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),r(" \u57FA\u7840\u7528\u6CD5")],-1),q=t("div",null,[t("p",null,[r("\u901A\u8FC7 "),t("code",null,"height"),r(" \u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u7236\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002")])],-1),G=t("h2",{id:"heng-xiang-gun-dong"},[t("a",{class:"header-anchor",href:"#heng-xiang-gun-dong"}),r(" \u6A2A\u5411\u6EDA\u52A8")],-1),J=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u5BBD\u5EA6\u5927\u4E8E\u6EDA\u52A8\u6761\u5BBD\u5EA6\u65F6\uFF0C\u4F1A\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8\u3002")],-1),K=t("h2",{id:"zui-da-gao-du"},[t("a",{class:"header-anchor",href:"#zui-da-gao-du"}),r(" \u6700\u5927\u9AD8\u5EA6")],-1),Y=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u9AD8\u5EA6\u8D85\u8FC7\u6700\u5927\u9AD8\u5EA6\uFF0C\u624D\u4F1A\u663E\u793A\u6EDA\u52A8\u6761\u3002")],-1),Z=t("h2",{id:"shou-dong-gun-dong"},[t("a",{class:"header-anchor",href:"#shou-dong-gun-dong"}),r(" \u624B\u52A8\u6EDA\u52A8")],-1),tt=t("div",null,[t("p",null,[r("\u901A\u8FC7\u4F7F\u7528 "),t("code",null,"setScrollTop"),r(" \u4E0E "),t("code",null,"setScrollLeft"),r(" \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002")])],-1),et=j('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u6EDA\u52A8\u6761\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>\u6EDA\u52A8\u6761\u6700\u5927\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>native</td><td>\u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>wrap-style</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>wrap-class</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-style</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-class</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>noresize</td><td>\u4E0D\u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tag</td><td>\u89C6\u56FE\u7684\u5143\u7D20\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>div</td></tr><tr><td>always</td><td>\u6EDA\u52A8\u6761\u603B\u662F\u663E\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min-size</td><td>\u6EDA\u52A8\u6761\u6700\u5C0F\u5C3A\u5BF8</td><td>number</td><td>\u2014</td><td>20</td></tr><tr><td>distance</td><td>\u8DDD\u79BB\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u81F3\u5C11\u591A\u5C11\u50CF\u7D20\u89E6\u53D1\u4E8B\u4EF6\u3002<em><strong>\u8FD9\u4E2A\u503C\u6700\u597D\u4E0D\u8981\u8BBE\u7F6E\u62100\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u4E0D\u89E6\u53D1\u4E8B\u4EF6</strong></em></td><td>number</td><td>\u2014</td><td>5</td></tr><tr><td>id</td><td>\u89C6\u56FEid</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>role\uFF08a11y\uFF09</td><td>\u89C6\u56FErole</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>aria-label\uFF08a11y\uFF09</td><td>\u89C6\u56FEaria-label</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>aria-orientation\uFF08a11y\uFF09</td><td>\u89C6\u56FEaria-orientation</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tabindex</td><td>\u5305\u88F9\u5BB9\u5668\u7684tabindex</td><td>number / string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u6EDA\u52A8\u8DDD\u79BB <code>{ scrollLeft, scrollTop }</code></td></tr><tr><td>at-end</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u65F6\u89E6\u53D1\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u6EDA\u52A8\u5230\u5E95\u90E8\u89E6\u53D1</td><td><code>{ vertical: true }</code></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollTo</td><td>\u6EDA\u52A8\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E</td><td>(options: ScrollToOptions | number, yCoord?: number)</td></tr><tr><td>setScrollTop</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u5DE6\u8FB9\u7684\u8DDD\u79BB</td><td>(scrollLeft: number)</td></tr><tr><td>update</td><td>\u624B\u52A8\u66F4\u65B0\u6EDA\u52A8\u6761\u72B6\u6001</td><td>\u2014</td></tr></tbody></table>',6),at={setup(_){const e="scrollbar",d={"../../../examples/scrollbar/basic.vue":C,"../../../examples/scrollbar/h.vue":A,"../../../examples/scrollbar/manual.vue":I,"../../../examples/scrollbar/max-height.vue":X};return(l,b)=>{const u=i("demo-block"),m=i("right-nav");return a(),c(h,null,[t("section",null,[B,N,U,n(u,{fs:"",demos:g(d),"component-id":e,"path-name":"scrollbar/basic","source-code":`<template>
  <hl-scrollbar height="calc(var(--lg) * 10)">
    <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
  </hl-scrollbar>
</template>
`},{default:o(()=>[q]),_:1},8,["demos"]),G,n(u,{fs:"",demos:g(d),"component-id":e,"path-name":"scrollbar/h","source-code":`<template>
  <hl-scrollbar>
    <div class="display-flex" style="gap: var(--md)">
      <span v-for="item in 20" :key="item" class="w-sm static p-md bg-primary text-center text-inverse">{{ item }}</span>
    </div>
  </hl-scrollbar>
</template>
`},{default:o(()=>[J]),_:1},8,["demos"]),K,n(u,{fs:"",demos:g(d),"component-id":e,"path-name":"scrollbar/max-height","source-code":`<template>
  <hl-button class="m-r-md" @click="add">\u6DFB\u52A0\u5143\u7D20</hl-button>
  <hl-button @click="del">\u5220\u9664\u5143\u7D20</hl-button>
  <hl-scrollbar class="m-t-lg" max-height="calc(var(--lg) * 10)">
    <span v-for="item in count" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
  </hl-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const del = () => {
  if (count.value > 0) {
    count.value--
  }
}

<\/script>
`},{default:o(()=>[Y]),_:1},8,["demos"]),Z,n(u,{fs:"",demos:g(d),"component-id":e,"path-name":"scrollbar/manual","source-code":`<template>
  <hl-scrollbar ref="scrollbar" height="calc(var(--lg) * 10)" always @scroll="scroll">
    <div ref="inner">
      <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
    </div>
  </hl-scrollbar>
  <hl-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const max = ref(0)
const value = ref(0)
const inner = ref(null)
const scrollbar = ref(null)

const inputSlider = value => {
  scrollbar.value.setScrollTop(value)
}
const formatTooltip = value => {
  return \`\${value} px\`
}

const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}

onMounted(() => {
  max.value = inner.value.clientHeight - 380
})
<\/script>
`},{default:o(()=>[tt]),_:1},8,["demos"]),et]),n(m)],64)}}};export{at as default};
