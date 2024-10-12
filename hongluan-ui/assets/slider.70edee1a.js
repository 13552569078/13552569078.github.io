import{p as b,R as u,H as m,L as v,W as g,Q as t,X as l,a1 as k,F as x,P as c,V as f,S as s,o as y}from"./vue.85e091e9.js";const $={class:"block"},S=t("span",{class:"demonstration"},"\u9ED8\u8BA4",-1),w={class:"block"},z=t("span",{class:"demonstration"},"\u81EA\u5B9A\u4E49\u521D\u59CB\u503C",-1),U={class:"block"},T=t("span",{class:"demonstration"},"\u9690\u85CF Tooltip",-1),j={class:"block"},A=t("span",{class:"demonstration"},"\u683C\u5F0F\u5316 Tooltip",-1),C={class:"block"},B=t("span",{class:"demonstration"},"\u7981\u7528",-1),F=b({setup(h){const e=u(0),a=u(50),o=u(36),n=u(48),d=u(42),i=r=>r/100;return(r,p)=>{const V=m("hl-slider");return v(),g(k,null,[t("div",$,[S,l(V,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=_=>e.value=_)},null,8,["modelValue"])]),t("div",w,[z,l(V,{modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=_=>a.value=_)},null,8,["modelValue"])]),t("div",U,[T,l(V,{modelValue:o.value,"onUpdate:modelValue":p[2]||(p[2]=_=>o.value=_),"show-tooltip":!1},null,8,["modelValue"])]),t("div",j,[A,l(V,{modelValue:n.value,"onUpdate:modelValue":p[3]||(p[3]=_=>n.value=_),"format-tooltip":i},null,8,["modelValue"])]),t("div",C,[B,l(V,{modelValue:d.value,"onUpdate:modelValue":p[4]||(p[4]=_=>d.value=_),disabled:""},null,8,["modelValue"])])],64)}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const M=b({setup(h){const e=u(50);return(a,o)=>{const n=m("hl-slider"),d=m("hl-col"),i=m("hl-row");return v(),x(i,null,{default:c(()=>[l(d,{span:"col"},{default:c(()=>[l(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),type:"primary"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:c(()=>[l(n,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=r=>e.value=r),type:"danger"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:c(()=>[l(n,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=r=>e.value=r),type:"warning"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:c(()=>[l(n,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=r=>e.value=r),type:"success"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:c(()=>[l(n,{modelValue:e.value,"onUpdate:modelValue":o[4]||(o[4]=r=>e.value=r),type:"info"},null,8,["modelValue"])]),_:1})]),_:1})}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const D={class:"block"},P=b({setup(h){const e=u([30,60]),a=u({0:"0\xB0C",8:"8\xB0C",37:"37\xB0C",50:{style:{color:"#1989FA"},label:"50%"}});return(o,n)=>{const d=m("hl-slider");return v(),g("div",D,[l(d,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value=i),range:"",marks:a.value},null,8,["modelValue","marks"])])}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const L={class:"block"},N=b({setup(h){const e=u([4,8]);return(a,o)=>{const n=m("hl-slider");return v(),g("div",L,[l(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),range:"","show-stops":"",max:10},null,8,["modelValue"])])}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const W={class:"block"},X=t("span",{class:"demonstration"},"\u4E0D\u663E\u793A\u95F4\u65AD\u70B9",-1),G={class:"block"},H=t("span",{class:"demonstration"},"\u663E\u793A\u95F4\u65AD\u70B9",-1),I=b({setup(h){const e=u(0),a=u(0);return(o,n)=>{const d=m("hl-slider");return v(),g(k,null,[t("div",W,[X,l(d,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value=i),step:10},null,8,["modelValue"])]),t("div",G,[H,l(d,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=i=>a.value=i),step:10,"show-stops":""},null,8,["modelValue"])])],64)}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const J={class:"block"},K=b({setup(h){const e=u(0);return(a,o)=>{const n=m("hl-slider");return v(),g("div",J,[l(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),vertical:"",height:"200px"},null,8,["modelValue"])])}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const Z=t("h1",null,"Slider \u6ED1\u5757",-1),tt=t("p",null,"\u901A\u8FC7\u62D6\u52A8\u6ED1\u5757\u5728\u4E00\u4E2A\u56FA\u5B9A\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9",-1),et=t("div",{class:"doc-tip"},[t("p",null,[s("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),t("code",null,"<client-only></client-only>"),s(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),t("a",{href:"https://nuxt.com/v3"},"Nuxt"),s(") \u548C SSG (eg: "),t("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),s(")\u3002")])],-1),lt=t("div",null,[t("p",null,"\u901A\u8FC7\u8BBE\u7F6E\u7ED1\u5B9A\u503C\u81EA\u5B9A\u4E49\u6ED1\u5757\u7684\u521D\u59CB\u503C")],-1),dt=t("h2",{id:"chi-san-zhi"},[t("a",{class:"header-anchor",href:"#chi-san-zhi"}),s(" \u79BB\u6563\u503C")],-1),ot=t("p",null,"\u9009\u9879\u53EF\u4EE5\u662F\u79BB\u6563\u7684",-1),nt=t("div",null,[t("p",null,[s("\u6539\u53D8"),t("code",null,"step"),s("\u7684\u503C\u53EF\u4EE5\u6539\u53D8\u6B65\u957F\uFF0C\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"show-stops"),s("\u5C5E\u6027\u53EF\u4EE5\u663E\u793A\u95F4\u65AD\u70B9")])],-1),st=t("h2",{id:"zhuang-tai-se"},[t("a",{class:"header-anchor",href:"#zhuang-tai-se"}),s(" \u72B6\u6001\u8272")],-1),at=t("p",null,"Slider \u4E5F\u652F\u6301\u72B6\u6001\u8272",-1),rt=t("h2",{id:"fan-wei-xuan-ze"},[t("a",{class:"header-anchor",href:"#fan-wei-xuan-ze"}),s(" \u8303\u56F4\u9009\u62E9")],-1),ut=t("p",null,"\u652F\u6301\u9009\u62E9\u67D0\u4E00\u6570\u503C\u8303\u56F4",-1),it=t("div",null,[t("p",null,[s("\u8BBE\u7F6E"),t("code",null,"range"),s("\u5373\u53EF\u5F00\u542F\u8303\u56F4\u9009\u62E9\uFF0C\u6B64\u65F6\u7ED1\u5B9A\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u5143\u7D20\u5206\u522B\u4E3A\u6700\u5C0F\u8FB9\u754C\u503C\u548C\u6700\u5927\u8FB9\u754C\u503C")])],-1),ct=t("h2",{id:"shu-xiang-mo-shi"},[t("a",{class:"header-anchor",href:"#shu-xiang-mo-shi"}),s(" \u7AD6\u5411\u6A21\u5F0F")],-1),pt=t("div",null,[t("p",null,[s("\u8BBE\u7F6E"),t("code",null,"vertical"),s("\u53EF\u4F7F Slider \u53D8\u6210\u7AD6\u5411\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6"),t("code",null,"height"),s("\u5C5E\u6027")])],-1),mt=t("h2",{id:"zhan-shi-biao-ji"},[t("a",{class:"header-anchor",href:"#zhan-shi-biao-ji"}),s(" \u5C55\u793A\u6807\u8BB0")],-1),_t=t("div",null,[t("p",null,[s("\u8BBE\u7F6E "),t("code",null,"marks"),s(" \u5C5E\u6027\u53EF\u4EE5\u5C55\u793A\u6807\u8BB0")])],-1),vt=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>\u2014</td><td>100</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>step</td><td>\u6B65\u957F</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-stops</td><td>\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-tooltip</td><td>\u662F\u5426\u663E\u793A tooltip</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format-tooltip</td><td>\u683C\u5F0F\u5316 tooltip message</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>vertical</td><td>\u662F\u5426\u7AD6\u5411\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>height</td><td>Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>aria-label</td><td>\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>debounce</td><td>\u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2\uFF0C\u4EC5\u5728<code>show-input</code>\u7B49\u4E8E true \u65F6\u6709\u6548</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>tooltip-class</td><td>tooltip \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>marks</td><td>\u6807\u8BB0\uFF0C key \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A number \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 <code>[min, max]</code> \u5185\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-start-label</td><td>\u5F53\u4E3A<code>range</code>\u65F6, \u5C4F\u5E55\u9605\u8BFB\u5668\u8BFB\u53D6\u7684\u8303\u56F4\u5F00\u59CB\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-end-label</td><td>\u5F53\u4E3A<code>range</code>\u65F6, \u5C4F\u5E55\u9605\u8BFB\u5668\u8BFB\u53D6\u7684\u8303\u56F4\u7ED3\u675F\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format-value-text</td><td>\u4E3A\u5C4F\u5E55\u9605\u8BFB\u5668\u683C\u5F0F\u5316 <code>aria-valuenow</code> \u5C5E\u6027\u503C</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>placement</td><td>\u63D0\u793A\u6846\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>top</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr><tr><td>input</td><td>\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u6D3B\u52A8\u8FC7\u7A0B\u5B9E\u65F6\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr></tbody></table>',4),ft={setup(h){const e="slider",a={"../../../examples/slider/basic.vue":E,"../../../examples/slider/color.vue":O,"../../../examples/slider/marks.vue":R,"../../../examples/slider/range.vue":Q,"../../../examples/slider/stops.vue":q,"../../../examples/slider/vertical.vue":Y};return(o,n)=>{const d=m("demo-block"),i=m("right-nav");return v(),g(k,null,[t("section",null,[Z,tt,et,l(d,{fs:"",demos:f(a),"component-id":e,"path-name":"slider/basic","source-code":`<template>
  <div class="block">
    <span class="demonstration">\u9ED8\u8BA4</span>
    <hl-slider v-model="value1" />
  </div>
  <div class="block">
    <span class="demonstration">\u81EA\u5B9A\u4E49\u521D\u59CB\u503C</span>
    <hl-slider v-model="value2" />
  </div>
  <div class="block">
    <span class="demonstration">\u9690\u85CF Tooltip</span>
    <hl-slider v-model="value3" :show-tooltip="false" />
  </div>
  <div class="block">
    <span class="demonstration">\u683C\u5F0F\u5316 Tooltip</span>
    <hl-slider v-model="value4" :format-tooltip="formatTooltip" />
  </div>
  <div class="block">
    <span class="demonstration">\u7981\u7528</span>
    <hl-slider v-model="value5" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(50)
const value3 = ref(36)
const value4 = ref(48)
const value5 = ref(42)

const formatTooltip = val => {
  return val / 100
}
<\/script>
`},{default:c(()=>[lt]),_:1},8,["demos"]),dt,ot,l(d,{fs:"",demos:f(a),"component-id":e,"path-name":"slider/stops","source-code":`<template>
  <div class="block">
    <span class="demonstration">\u4E0D\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value1" :step="10" />
  </div>
  <div class="block">
    <span class="demonstration">\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value2" :step="10" show-stops />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)

<\/script>
`},{default:c(()=>[nt]),_:1},8,["demos"]),st,at,l(d,{fs:"",demos:f(a),"component-id":e,"path-name":"slider/color","source-code":`<template>
  <hl-row>
    <hl-col span="col">
      <hl-slider v-model="value" type="primary" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="danger" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="warning" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="success" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="info" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)

<\/script>
`},null,8,["demos"]),rt,ut,l(d,{fs:"",demos:f(a),"component-id":e,"path-name":"slider/range","source-code":`<template>
  <div class="block">
    <hl-slider v-model="value" range show-stops :max="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])

<\/script>
`},{default:c(()=>[it]),_:1},8,["demos"]),ct,l(d,{fs:"",demos:f(a),"component-id":e,"path-name":"slider/vertical","source-code":`<template>
  <div class="block">
    <hl-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)

<\/script>
`},{default:c(()=>[pt]),_:1},8,["demos"]),mt,l(d,{fs:"",demos:f(a),"component-id":e,"path-name":"slider/marks","source-code":`<template>
  <div class="block">
    <hl-slider v-model="value" range :marks="marks" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([30, 60])
const marks = ref({
  0: '0\xB0C',
  8: '8\xB0C',
  37: '37\xB0C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})
<\/script>
`},{default:c(()=>[_t]),_:1},8,["demos"]),vt]),l(i)],64)}}};export{ft as default};
