import{p as g,R as m,I as v,L as h,W as p,X as n,a3 as _,a0 as b,V as u,P as c,H as V,Q as e,U,T as d,o as x}from"./vue.8a077a47.js";import{H as y}from"./index.3e39e2d9.js";import{l as z,X as j,A as S}from"./hongluan-icons.286a55ba.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";const P=g({setup(f){const r=m(!0);return(s,a)=>{const t=v("hl-switch");return h(),p(_,null,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),class:"m-r-md"},null,8,["modelValue"]),n(t,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),type:"primary",width:"var(--xxl)"},null,8,["modelValue"])],64)}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const M=g({setup(f){const r=b({value1:!1,loading1:!1}),s=()=>(r.loading1=!0,new Promise(l=>{setTimeout(()=>(r.loading1=!1,y.success("\u5207\u6362\u6210\u529F"),l(!0)),1e3)})),a=b({value2:!1,loading2:!1}),t=()=>(a.loading2=!0,new Promise((l,o)=>{setTimeout(()=>(a.loading2=!1,y.error("\u5207\u6362\u5931\u8D25"),o(new Error("Error"))),1e3)}));return(l,o)=>{const w=v("hl-switch");return h(),p(_,null,[n(w,{modelValue:u(r).value1,"onUpdate:modelValue":o[0]||(o[0]=i=>u(r).value1=i),loading:u(r).loading1,"before-change":s,class:"m-r-md"},null,8,["modelValue","loading"]),n(w,{modelValue:u(a).value2,"onUpdate:modelValue":o[1]||(o[1]=i=>u(a).value2=i),loading:u(a).loading2,"before-change":t},null,8,["modelValue","loading"])],64)}}});var O=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const k=g({setup(f){const r=m(!1),s=m(!0);return(a,t)=>{const l=v("hl-switch");return h(),p(_,null,[n(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),class:"m-r-md"},null,8,["modelValue"]),n(l,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),class:"m-r-md",type:"primary"},null,8,["modelValue"]),n(l,{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=o=>s.value=o),class:"m-r-md",type:"success"},null,8,["modelValue"]),n(l,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=o=>s.value=o),class:"m-r-md",type:"warning"},null,8,["modelValue"]),n(l,{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=o=>s.value=o),class:"m-r-md",type:"danger"},null,8,["modelValue"]),n(l,{modelValue:s.value,"onUpdate:modelValue":t[5]||(t[5]=o=>s.value=o),class:"m-r-md",type:"info"},null,8,["modelValue"]),n(l,{modelValue:r.value,"onUpdate:modelValue":t[6]||(t[6]=o=>r.value=o),"active-color":"#13ce66","inactive-color":"#2d3748"},null,8,["modelValue"])],64)}}});var C=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));const $=g({setup(f){const r=m(!0),s=m(!1);return(a,t)=>{const l=v("hl-switch");return h(),p(_,null,[n(l,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),class:"m-r-md",disabled:""},null,8,["modelValue"]),n(l,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),class:"m-r-md",type:"primary",disabled:""},null,8,["modelValue"])],64)}}});var A=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const E=e("i",null,"\xA5",-1),H=g({setup(f){m(!0);const r=m(!0),s=m(!0),a=m(!1);return(t,l)=>{const o=v("hl-switch"),w=v("hl-icon");return h(),p(_,null,[n(o,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=i=>r.value=i),type:"success",class:"m-r-md"},{icon:c(()=>[E]),_:1},8,["modelValue"]),n(o,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=i=>s.value=i),type:"danger",class:"m-r-md"},{icon:c(()=>[n(w,null,{default:c(()=>[n(u(z))]),_:1})]),_:1},8,["modelValue"]),n(o,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=i=>a.value=i),loading:"",class:"m-r-md"},null,8,["modelValue"]),n(o,{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=i=>a.value=i),loading:"",class:"m-r-md"},{icon:c(()=>[n(w,null,{default:c(()=>[n(u(z))]),_:1})]),_:1},8,["modelValue"]),n(o,{modelValue:a.value,"onUpdate:modelValue":l[4]||(l[4]=i=>a.value=i),type:"primary",class:"m-r-md"},{icon:c(({checked:i})=>[n(w,null,{default:c(()=>[i?(h(),V(u(j),{key:0})):(h(),V(u(S),{key:1}))]),_:2},1024)]),_:1},8,["modelValue"])],64)}}});var F=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const L=g({setup(f){const r=m(!0);return(s,a)=>{const t=v("hl-switch");return h(),p(_,null,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),size:"sm",class:"m-r-md"},null,8,["modelValue"]),n(t,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),size:"md",class:"m-r-md"},null,8,["modelValue"]),n(t,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=l=>r.value=l),size:"lg",class:"m-r-md"},null,8,["modelValue"])],64)}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const q={class:"m-l-md"},D=g({setup(f){const r=m("100");return(s,a)=>{const t=v("hl-switch");return h(),p(_,null,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),"active-value":"100","inactive-value":"0"},null,8,["modelValue"]),e("span",q,U(r.value),1)],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const R=e("h1",null,"Switch \u5F00\u5173",-1),W=e("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),B=e("div",null,[e("p",null,[d("\u7ED1\u5B9A"),e("code",null,"v-model"),d("\u5230\u4E00\u4E2A"),e("code",null,"boolean"),d("\u7C7B\u578B\u7684\u53D8\u91CF\u3002")])],-1),I=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),d(" \u5C3A\u5BF8\u4FEE\u9970")],-1),N=e("p",null,[d("Switch \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),d(),e("code",null,"md"),d(),e("code",null,"lg"),d(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),d(" \u5C3A\u5BF8")],-1),G=e("h2",{id:"yan-se"},[e("a",{class:"header-anchor",href:"#yan-se"}),d(" \u989C\u8272")],-1),J=e("p",null,[d("Switch \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),d("\u3001"),e("code",null,"success"),d("\u3001"),e("code",null,"warning"),d("\u548C"),e("code",null,"danger"),d("\u3002")],-1),K=e("div",null,[e("p",null,[d("\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"active-color"),d("\u5C5E\u6027\u4E0E"),e("code",null,"inactive-color"),d("\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002")])],-1),Y=x('<h2 id="kuo-zhan-de-value-lei-xing"><a class="header-anchor" href="#kuo-zhan-de-value-lei-xing"></a> \u6269\u5C55\u7684 value \u7C7B\u578B</h2><p>\u8BBE\u7F6E<code>active-value</code>\u548C<code>inactive-value</code>\u5C5E\u6027\uFF0C\u63A5\u53D7<code>boolean</code>, <code>string</code>\u6216<code>number</code>\u7C7B\u578B\u7684\u503C\u3002</p>',2),Z=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),ee=e("p",null,[d("\u8BBE\u7F6E"),e("code",null,"disabled"),d("\u5C5E\u6027\u53EF\u4F7F switch \u53D8\u4E3A\u7981\u7528\u72B6\u6001\u3002")],-1),te=e("h2",{id:"tu-biao"},[e("a",{class:"header-anchor",href:"#tu-biao"}),d(" \u56FE\u6807")],-1),le=e("p",null,[e("code",null,"icon"),d("\u5C5E\u6027\u53EF\u4E3A Switch \u52A0\u4E0A\u56FE\u6807\u6548\u679C\u3002\u4F60\u4E5F\u901A\u8FC7 icon slot \u6765\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002")],-1),re=e("div",null,[e("p",null,[d("\u6CE8\u610F slot \u91CC\u9762\u5FC5\u987B\u7528"),e("code",null,"i"),d("\u6807\u7B7E\u5305\u88F9\u4F60\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9")])],-1),ne=e("h2",{id:"zu-zhi-qie-huan"},[e("a",{class:"header-anchor",href:"#zu-zhi-qie-huan"}),d(" \u963B\u6B62\u5207\u6362")],-1),ae=e("div",null,[e("p",null,[d("\u8BBE\u7F6E"),e("code",null,"before-change"),d("\u5C5E\u6027\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5207\u6362\u3002")])],-1),oe=x('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E<code>active-value</code>\u6216<code>inactive-value</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>Boolean</code>\u7C7B\u578B</td><td>boolean / string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>primary, warning, danger, success, info</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>width</td><td>\u81EA\u5B9A\u4E49 switch \u7684\u5BBD\u5EA6\uFF0C width \u548C size \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>active-value</td><td>switch \u6253\u5F00\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>true</td></tr><tr><td>inactive-value</td><td>switch \u5173\u95ED\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>false</td></tr><tr><td>active-color</td><td>switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#C0CCDA</td></tr><tr><td>border-color</td><td>switch \u8FB9\u6846\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>switch \u5BF9\u5E94\u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u6539\u53D8 switch \u72B6\u6001\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u6B64\u72B6\u6001\u4E0B\u5982\u679C\u4E0D\u8BBE\u7F6E icon\uFF0C\u4F1A\u9ED8\u8BA4\u5C06 icon \u8BBE\u6210 Loading</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-change</td><td>switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362</td><td><code>() =&gt; Promise&lt;boolean&gt; \\| boolean</code></td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F Switch \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>icon \u81EA\u5B9A\u4E49\uFF0C\u81EA\u5B9A\u4E49\u5C06\u4F1A\u4F7F\u81EA\u52A8\u8BBE\u7F6E loading icon \u529F\u80FD\u5931\u6548\uFF0C\u53C2\u6570\uFF1A{ checked }</td></tr></tbody></table>',8),me={setup(f){const r={"../../../examples/switch/basic.vue":T,"../../../examples/switch/change.vue":O,"../../../examples/switch/color.vue":C,"../../../examples/switch/disabled.vue":A,"../../../examples/switch/icon.vue":F,"../../../examples/switch/size.vue":X,"../../../examples/switch/value.vue":Q};return(s,a)=>{const t=v("demo-block"),l=v("right-nav");return h(),p(_,null,[e("section",null,[R,W,n(t,{fs:"",demos:u(r),"path-name":"switch/basic","source-code":`<template>\r
  <hl-switch v-model="value" class="m-r-md" />\r
  <hl-switch v-model="value" type="primary" width="var(--xxl)" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(true)\r
\r
<\/script>\r
`},{default:c(()=>[B]),_:1},8,["demos"]),I,N,n(t,{fs:"",demos:u(r),"path-name":"switch/size","source-code":`<template>\r
  <hl-switch v-model="value1" size="sm" class="m-r-md" />\r
  <hl-switch v-model="value1" size="md" class="m-r-md" />\r
  <hl-switch v-model="value1" size="lg" class="m-r-md" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value1 = ref(true)\r
<\/script>\r
`},null,8,["demos"]),G,J,n(t,{fs:"",demos:u(r),"path-name":"switch/color","source-code":`<template>\r
  <hl-switch v-model="value1" class="m-r-md" />\r
  <hl-switch v-model="value1" class="m-r-md" type="primary" />\r
  <hl-switch v-model="value1" class="m-r-md" type="success" />\r
  <hl-switch v-model="value1" class="m-r-md" type="warning" />\r
  <hl-switch v-model="value1" class="m-r-md" type="danger" />\r
  <hl-switch v-model="value1" class="m-r-md" type="info" />\r
\r
  <hl-switch\r
    v-model="value"\r
    active-color="#13ce66"\r
    inactive-color="#2d3748"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
const value1 = ref(true)\r
\r
<\/script>\r
`},{default:c(()=>[K]),_:1},8,["demos"]),Y,n(t,{fs:"",demos:u(r),"path-name":"switch/value","source-code":`<template>\r
  <hl-switch v-model="value" active-value="100" inactive-value="0" />\r
  <span class="m-l-md">{{ value }}</span>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref('100')\r
<\/script>\r
`},null,8,["demos"]),Z,ee,n(t,{fs:"",demos:u(r),"path-name":"switch/disabled","source-code":`<template>\r
  <hl-switch v-model="value1" class="m-r-md" disabled />\r
  <hl-switch v-model="value2" class="m-r-md" type="primary" disabled />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value1 = ref(true)\r
const value2 = ref(false)\r
\r
<\/script>\r
`},null,8,["demos"]),te,le,n(t,{fs:"",demos:u(r),"path-name":"switch/icon","source-code":`<template>\r
  <hl-switch v-model="value2" type="success" class="m-r-md">\r
    <template #icon>\r
      <i>\xA5</i>\r
    </template>\r
  </hl-switch>\r
\r
  <hl-switch v-model="value3" type="danger" class="m-r-md">\r
    <template #icon>\r
      <hl-icon><two-mail /></hl-icon>\r
    </template>\r
  </hl-switch>\r
  <hl-switch v-model="value4" loading class="m-r-md" />\r
  <hl-switch v-model="value4" loading class="m-r-md">\r
    <template #icon>\r
      <hl-icon><two-mail /></hl-icon>\r
    </template>\r
  </hl-switch>\r
  <hl-switch v-model="value4" type="primary" class="m-r-md">\r
    <template #icon="{ checked }">\r
      <hl-icon>\r
        <two-power v-if="checked" />\r
        <two-airplay v-else />\r
      </hl-icon>\r
    </template>\r
  </hl-switch>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { TwoMail, TwoPower, TwoAirplay } from '@hongluan-ui/icons'\r
\r
const value1 = ref(true)\r
const value2 = ref(true)\r
const value3 = ref(true)\r
const value4 = ref(false)\r
\r
<\/script>\r
`},{default:c(()=>[re]),_:1},8,["demos"]),ne,n(t,{fs:"",demos:u(r),"path-name":"switch/change","source-code":`<template>\r
  <hl-switch v-model="status1.value1" :loading="status1.loading1" :before-change="beforeChange1" class="m-r-md" />\r
  <hl-switch v-model="status2.value2" :loading="status2.loading2" :before-change="beforeChange2" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
import { HlMessage } from 'hongluan-ui'\r
\r
const status1 = reactive({\r
  value1: false,\r
  loading1: false,\r
})\r
\r
const beforeChange1 = () => {\r
  status1.loading1 = true\r
  return new Promise(resolve => {\r
    setTimeout(() => {\r
      status1.loading1 = false\r
      HlMessage.success('\u5207\u6362\u6210\u529F')\r
      return resolve(true)\r
    }, 1000)\r
  })\r
}\r
\r
const status2 = reactive({\r
  value2: false,\r
  loading2: false,\r
})\r
\r
const beforeChange2 = () => {\r
  status2.loading2 = true\r
  return new Promise((resolve, reject) => {\r
    setTimeout(() => {\r
      status2.loading2 = false\r
      HlMessage.error('\u5207\u6362\u5931\u8D25')\r
      return reject(new Error('Error'))\r
    }, 1000)\r
  })\r
}\r
\r
<\/script>\r
`},{default:c(()=>[ae]),_:1},8,["demos"]),oe]),n(l)],64)}}};export{me as default};
