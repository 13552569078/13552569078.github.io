import{p as h,R as _,H as i,L as r,W as u,X as o,P as b,Q as n,F as g,$ as f,T as y,V as m,a1 as T,S as d,o as S}from"./vue.85e091e9.js";import{A as x,v as V,R as j,V as z,X as k,W as M}from"./hongluan-icons.6cddbf05.js";import{_ as W}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";const O={class:"display-flex flex-col"},w=h({setup(c){const e=_("Mon"),l=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return(p,t)=>{const s=i("hl-segmented");return r(),u("div",O,[o(s,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,size:"lg",class:"m-b-sm"},null,8,["modelValue"]),o(s,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value=a),options:l,size:"md",class:"m-b-sm"},null,8,["modelValue"]),o(s,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value=a),options:l,size:"sm"},null,8,["modelValue"])])}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const F=h({setup(c){const e=_("Mon"),l=["Mon","Tue","Wed","Thu","Fri","Sat","Sunday long long long long long long long"];return(p,t)=>{const s=i("hl-segmented");return r(),u("div",null,[o(s,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,block:""},null,8,["modelValue"])])}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const $={class:"display-flex flex-col items-middle items-center p-sm"},D=h({setup(c){const e=_("Apple"),l=[{label:"Apple",value:"Apple",icon:x},{label:"Cherry",value:"Cherry",icon:V},{label:"Grape",value:"Grape",icon:j},{label:"Orange",value:"Orange",icon:z},{label:"Pear",value:"Pear",icon:k},{label:"Watermelon",value:"Watermelon",icon:M}];return(p,t)=>{const s=i("hl-icon"),a=i("hl-segmented");return r(),u("div",null,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=v=>e.value=v),options:l},{default:b(({item:v})=>[n("div",$,[o(s,{size:"20"},{default:b(()=>[(r(),g(f(v.icon)))]),_:2},1024),n("div",null,y(v.label),1)])]),_:1},8,["modelValue"])])}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const C={class:"custom-style"},G=h({setup(c){const e=_("Delicacy"),l=["Delicacy","Desserts&Drinks","Fresh foods","Supermarket"];return(p,t)=>{const s=i("hl-segmented");return r(),u("div",C,[o(s,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l},null,8,["modelValue"])])}}});var B=W(G,[["__scopeId","data-v-4f130049"]]),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const R={class:"display-flex flex-col"},X=h({setup(c){const e=_("Mon"),l=[{label:"Mon",value:"Mon",disabled:!0},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed",disabled:!0},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri",disabled:!0},{label:"Sat",value:"Sat"},{label:"Sun",value:"Sun"}];return(p,t)=>{const s=i("hl-segmented");return r(),u("div",R,[o(s,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),options:l,disabled:"",class:"m-b-sm"},null,8,["modelValue"]),o(s,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value=a),options:l},null,8,["modelValue"])])}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const L=n("h1",null,"Segmented \u5206\u6BB5\u63A7\u5236\u5668",-1),Q=n("p",null,"\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9009\u9879\u5E76\u5141\u8BB8\u7528\u6237\u9009\u62E9\u5176\u4E2D\u5355\u4E2A\u9009\u9879\u3002",-1),E=n("h2",{id:"ji-chu-yong-fa"},[n("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),H=n("p",null,"\u8BBE\u7F6Ev-model\u4E3A\u9009\u9879\u503C\u3002",-1),N=n("h2",{id:"jin-yong-zhuang-tai"},[n("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),J=n("p",null,"\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u7981\u7528\u4E00\u4E9B\u9009\u9879\u3002",-1),K=n("h2",{id:"block-fen-duan-xuan-ze-qi"},[n("a",{class:"header-anchor",href:"#block-fen-duan-xuan-ze-qi"}),d(" Block \u5206\u6BB5\u9009\u62E9\u5668")],-1),Y=n("p",null,[d("\u8BBE\u7F6E"),n("code",null,"block"),d("\u4E3A"),n("code",null,"true"),d("\u4EE5\u9002\u5E94\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u3002")],-1),Z=n("h2",{id:"zi-ding-yi-nei-rong"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),d(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),ee=n("p",null,"\u8BBE\u7F6E default slot \u4F4D\u6765\u6E32\u67D3\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),ne=n("h2",{id:"zi-ding-yi-yang-shi"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),d(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),te=n("p",null,"\u8BBE\u7F6E default slot \u4F4D\u6765\u6E32\u67D3\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),le=S(`<h2 id="api"><a class="header-anchor" href="#api"></a> API</h2><h3 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>options</td><td>\u9009\u9879\u7684\u6570\u636E</td><td>Option[]</td><td>-</td><td>[]</td></tr><tr><td>size</td><td>\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>lg / md / sm</td><td>-</td></tr><tr><td>block</td><td>\u6491\u6EE1\u7236\u5143\u7D20\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>validate-event</td><td>\u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>id</td><td>\u539F\u751F id \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>aria-label</td><td>n\u539F\u751F aria-label \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events"></a> Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u6240\u9009\u503C\u66F4\u6539\u65F6\u89E6\u53D1\uFF0C\u53C2\u6570\u662F\u5F53\u524D\u9009\u4E2D\u7684\u503Ce</td><td><code>(val: any) =&gt; void</code></td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49 Option \u6A21\u677F</td></tr></tbody></table><h2 id="type-declarations"><a class="header-anchor" href="#type-declarations"></a> Type Declarations</h2><pre><code class="hljs language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Option</span> = {
  <span class="hljs-attr">label</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">value</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>
  disabled?: <span class="hljs-built_in">boolean</span>
  [<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">any</span>
} | <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>
</code></pre>`,9),re={setup(c){const e="segmented",l={"../../../examples/segmented/basic.vue":A,"../../../examples/segmented/block.vue":P,"../../../examples/segmented/custom-content.vue":U,"../../../examples/segmented/custom-style.vue":I,"../../../examples/segmented/disabled.vue":q};return(p,t)=>{const s=i("demo-block"),a=i("right-nav");return r(),u(T,null,[n("section",null,[L,Q,E,H,o(s,{fs:"",demos:m(l),"component-id":e,"path-name":"segmented/basic","source-code":`<template>
  <div class="display-flex flex-col">
    <hl-segmented v-model="value" :options="options" size="lg" class="m-b-sm" />
    <hl-segmented v-model="value" :options="options" size="md" class="m-b-sm" />
    <hl-segmented v-model="value" :options="options" size="sm" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
<\/script>
`},null,8,["demos"]),N,J,o(s,{fs:"",demos:m(l),"component-id":e,"path-name":"segmented/disabled","source-code":`<template>
  <div class="display-flex flex-col">
    <hl-segmented v-model="value" :options="options" disabled class="m-b-sm" />
    <hl-segmented v-model="value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')
const options = [
  {
    label: 'Mon',
    value: 'Mon',
    disabled: true,
  },
  {
    label: 'Tue',
    value: 'Tue',
  },
  {
    label: 'Wed',
    value: 'Wed',
    disabled: true,
  },
  {
    label: 'Thu',
    value: 'Thu',
  },
  {
    label: 'Fri',
    value: 'Fri',
    disabled: true,
  },
  {
    label: 'Sat',
    value: 'Sat',
  },
  {
    label: 'Sun',
    value: 'Sun',
  },
]
<\/script>
`},null,8,["demos"]),K,Y,o(s,{fs:"",demos:m(l),"component-id":e,"path-name":"segmented/block","source-code":`<template>
  <div>
    <hl-segmented v-model="value" :options="options" block />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')

const options = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sunday long long long long long long long',
]
<\/script>
`},null,8,["demos"]),Z,ee,o(s,{fs:"",demos:m(l),"component-id":e,"path-name":"segmented/custom-content","source-code":`<template>
  <div>
    <hl-segmented v-model="value" :options="options">
      <template #default="{ item }">
        <div class="display-flex flex-col items-middle items-center p-sm">
          <hl-icon size="20">
            <component :is="item.icon" />
          </hl-icon>
          <div>{{ item.label }}</div>
        </div>
      </template>
    </hl-segmented>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  TwoAirplay,
  TwoCalendar,
  TwoGood,
  TwoBellOff,
  TwoPackage,
  TwoWarning,
} from '@hongluan-ui/icons'

const value = ref('Apple')

const options = [
  {
    label: 'Apple',
    value: 'Apple',
    icon: TwoAirplay,
  },
  {
    label: 'Cherry',
    value: 'Cherry',
    icon: TwoCalendar,
  },
  {
    label: 'Grape',
    value: 'Grape',
    icon: TwoGood,
  },
  {
    label: 'Orange',
    value: 'Orange',
    icon: TwoBellOff,
  },
  {
    label: 'Pear',
    value: 'Pear',
    icon: TwoPackage,
  },
  {
    label: 'Watermelon',
    value: 'Watermelon',
    icon: TwoWarning,
  },
]
<\/script>
`},null,8,["demos"]),ne,te,o(s,{fs:"",demos:m(l),"component-id":e,"path-name":"segmented/custom-style","source-code":`<template>
  <div class="custom-style">
    <hl-segmented v-model="value" :options="options" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Delicacy')

const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']
<\/script>

<style scoped>
.custom-style .hl-segmented {
  --segmented-item-selected-color: var(--text-primary);
  --segmented-item-selected-bg-color: #ffd100;
  --segmented-border-radius-base: 16px;
}
</style>
`},null,8,["demos"]),le]),o(a)],64)}}};export{re as default};
