import{H as s,L as u,F as c,P as a,X as l,S as t,p as x,R as g,W as y,af as E,T as $,a1 as b,ah as j,l as V,Q as e,V as h,o as C}from"./vue.85e091e9.js";import{_ as v}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const I={},O=t("\u9ED8\u8BA4\u6807\u7B7E"),M=t("\u9ED8\u8BA4\u6807\u7B7E"),D=t("\u9ED8\u8BA4\u6807\u7B7E");function q(_,o){const n=s("hl-tag"),r=s("hl-group");return u(),c(r,{gap:"var(--md)"},{default:a(()=>[l(n,{color:"#ffeedd"},{default:a(()=>[O]),_:1}),l(n,{active:""},{default:a(()=>[M]),_:1}),l(n,{type:"primary",effect:"light",active:""},{default:a(()=>[D]),_:1})]),_:1})}var L=v(I,[["render",q]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const P=t("+ New Tag"),K=x({setup(_){const o=g(["\u6807\u7B7E\u4E00","\u6807\u7B7E\u4E8C","\u6807\u7B7E\u4E09"]),n=g(!1),r=g(""),p=g(null),d=m=>{o.value.splice(o.value.indexOf(m),1)},i=()=>{n.value=!0,V(()=>{p.value.focus()})},T=()=>{let m=r.value;m&&o.value.push(m),n.value=!1,r.value=""};return(m,z)=>{const k=s("hl-tag"),w=s("hl-input"),B=s("hl-link"),S=s("hl-group");return u(),c(S,{gap:"var(--sm)",wrap:""},{default:a(()=>[(u(!0),y(b,null,E(o.value,f=>(u(),c(k,{key:f,closable:"","disable-transitions":!1,onClose:Ut=>d(f)},{default:a(()=>[t($(f),1)]),_:2},1032,["onClose"]))),128)),n.value?(u(),c(w,{key:0,ref_key:"saveTagInput",ref:p,modelValue:r.value,"onUpdate:modelValue":z[0]||(z[0]=f=>r.value=f),class:"input-new-tag",size:"sm",onKeyup:j(T,["enter"]),onBlur:T},null,8,["modelValue","onKeyup"])):(u(),c(B,{key:1,size:"sm",onClick:i},{default:a(()=>[P]),_:1}))]),_:1})}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const R={},W=t("\u6807\u7B7E\u4E00"),X=t("\u6807\u7B7E\u4E8C"),A=t("\u6807\u7B7E\u4E09"),F=t("\u6807\u7B7E\u56DB"),H=t("\u6807\u7B7E\u4E94"),U=t("\u6807\u7B7E\u516D");function G(_,o){const n=s("hl-tag"),r=s("hl-group");return u(),c(r,{gap:"var(--md)"},{default:a(()=>[l(n,null,{default:a(()=>[W]),_:1}),l(n,{type:"primary"},{default:a(()=>[X]),_:1}),l(n,{type:"success"},{default:a(()=>[A]),_:1}),l(n,{type:"warning"},{default:a(()=>[F]),_:1}),l(n,{type:"danger"},{default:a(()=>[H]),_:1}),l(n,{type:"info"},{default:a(()=>[U]),_:1})]),_:1})}var J=v(R,[["render",G]]),Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const Z=x({setup(_){const o=g([{name:"\u6807\u7B7E\u4E8C",type:"primary"},{name:"\u6807\u7B7E\u4E09",type:"success"},{name:"\u6807\u7B7E\u56DB",type:"warning"},{name:"\u6807\u7B7E\u4E94",type:"danger"},{name:"\u6807\u7B7E\u516D",type:"info"}]);return(n,r)=>{const p=s("hl-tag"),d=s("hl-group");return u(),c(d,{gap:"var(--md)"},{default:a(()=>[(u(!0),y(b,null,E(o.value,i=>(u(),c(p,{key:i.name,closable:"",type:i.type},{default:a(()=>[t($(i.name),1)]),_:2},1032,["type"]))),128))]),_:1})}}});var tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const et=x({setup(_){const o=g([{label:"\u6807\u7B7E\u4E00",type:null},{label:"\u6807\u7B7E\u4E8C",type:"primary"},{label:"\u6807\u7B7E\u4E09",type:"success"},{label:"\u6807\u7B7E\u56DB",type:"warning"},{label:"\u6807\u7B7E\u4E94",type:"danger"},{label:"\u6807\u7B7E\u516D",type:"info"}]);return(n,r)=>{const p=s("hl-tag"),d=s("hl-group");return u(),c(d,{gap:"var(--md)"},{default:a(()=>[(u(!0),y(b,null,E(o.value,i=>(u(),c(p,{key:i.label,type:i.type,effect:"light"},{default:a(()=>[t($(i.label),1)]),_:2},1032,["type"]))),128))]),_:1})}}});var nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const at={},lt=t("\u6807\u7B7E\u4E00"),ot=t("\u6807\u7B7E\u4E8C"),st=t("\u6807\u7B7E\u4E09"),ut=t("\u6807\u7B7E\u56DB"),dt=t("\u6807\u7B7E\u4E94"),rt=t("\u6807\u7B7E\u516D");function it(_,o){const n=s("hl-tag"),r=s("hl-group");return u(),c(r,{gap:"var(--md)"},{default:a(()=>[l(n,{outline:""},{default:a(()=>[lt]),_:1}),l(n,{type:"primary",outline:""},{default:a(()=>[ot]),_:1}),l(n,{type:"success",outline:""},{default:a(()=>[st]),_:1}),l(n,{type:"warning",outline:""},{default:a(()=>[ut]),_:1}),l(n,{type:"danger",outline:""},{default:a(()=>[dt]),_:1}),l(n,{type:"info",outline:""},{default:a(()=>[rt]),_:1})]),_:1})}var ct=v(at,[["render",it]]),_t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});const pt={},ht=t(" Tag\u7701\u7565\u53F7\u793A\u4F8B ");function gt(_,o){const n=s("hl-tag");return u(),c(n,{closable:"",type:"primary",style:{width:"100px"}},{default:a(()=>[ht]),_:1})}var mt=v(pt,[["render",gt]]),ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const yt=x({setup(_){const o=g([{label:"\u6807\u7B7E\u4E00",type:null},{label:"\u6807\u7B7E\u4E8C",type:"primary"},{label:"\u6807\u7B7E\u4E09",type:"success"},{label:"\u6807\u7B7E\u56DB",type:"warning"},{label:"\u6807\u7B7E\u4E94",type:"danger"},{label:"\u6807\u7B7E\u516D",type:"info"}]);return(n,r)=>{const p=s("hl-tag"),d=s("hl-group");return u(),c(d,{gap:"var(--md)"},{default:a(()=>[(u(!0),y(b,null,E(o.value,i=>(u(),c(p,{key:i.label,type:i.type,effect:"light",round:""},{default:a(()=>[t($(i.label),1)]),_:2},1032,["type"]))),128))]),_:1})}}});var bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yt});const vt={},xt=t("\u5C0F\u578B\u6807\u7B7E"),Et=t("\u9ED8\u8BA4\u6807\u7B7E"),$t=t("\u5927\u578B\u6807\u7B7E");function Tt(_,o){const n=s("hl-tag"),r=s("hl-group");return u(),c(r,{gap:"var(--md)"},{default:a(()=>[l(n,{size:"sm"},{default:a(()=>[xt]),_:1}),l(n,null,{default:a(()=>[Et]),_:1}),l(n,{size:"lg"},{default:a(()=>[$t]),_:1})]),_:1})}var zt=v(vt,[["render",Tt]]),kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zt});const wt=e("h1",null,"Tag \u6807\u7B7E",-1),Bt=e("p",null,"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9\u3002",-1),St=e("div",null,[e("p",null,[t("\u7531"),e("code",null,"type"),t("\u5C5E\u6027\u6765\u9009\u62E9 tag \u7684\u989C\u8272\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),t("\u3001"),e("code",null,"success"),t("\u3001"),e("code",null,"warning"),t("\u3001"),e("code",null,"danger"),t(" \u548C "),e("code",null,"info"),t("\u3002")])],-1),jt=e("h2",{id:"light-yang-shi"},[e("a",{class:"header-anchor",href:"#light-yang-shi"}),t(" Light \u6837\u5F0F")],-1),Vt=e("p",null,"\u5F53\u6807\u7B7E\u9644\u6709\u72B6\u6001\u8272\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5728\u52A0\u4E0A light \u5C5E\u6027\u5373\u53EF\u4F7F\u5B83\u7684\u989C\u8272\u51CF\u6DE1\u3002",-1),Ct=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E"),e("code",null,'effect="light"'),t("\u5C5E\u6027\u6765\u6539\u53D8\u4E3B\u9898")])],-1),It=e("h2",{id:"yuan-jiao-yang-shi"},[e("a",{class:"header-anchor",href:"#yuan-jiao-yang-shi"}),t(" \u5706\u89D2\u6837\u5F0F")],-1),Ot=e("p",null,"round \u5C5E\u6027\u53EF\u4EE5\u4F7F tag \u5448\u73B0\u4E3A\u5706\u8FB9\u6837\u5F0F",-1),Mt=e("h2",{id:"lun-kuo-yang-shi"},[e("a",{class:"header-anchor",href:"#lun-kuo-yang-shi"}),t(" \u8F6E\u5ED3\u6837\u5F0F")],-1),Dt=e("p",null,"Tag \u7EC4\u4EF6\u8FD8\u63D0\u4F9B\u4E00\u6B3E\u8F6E\u5ED3\u6837\u5F0F\uFF0C\u4EE5\u4FBF\u4F60\u6709\u66F4\u591A\u573A\u666F\u7684\u8868\u8FBE\u65B9\u5F0F\u3002",-1),qt=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),t(" \u5C3A\u5BF8\u4FEE\u9970")],-1),Lt=e("p",null,"Tag \u7EC4\u4EF6\u63D0\u4F9B\u9664\u4E86\u9ED8\u8BA4\u503C\u4EE5\u5916\u7684\u4E24\u79CD\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u9009\u62E9\u5408\u9002\u7684\u6309\u94AE\u5C3A\u5BF8\u3002",-1),Nt=e("h2",{id:"zi-ding-yi-bei-jing-se-yi-ji-xuan-zhong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-bei-jing-se-yi-ji-xuan-zhong-zhuang-tai"}),t(" \u81EA\u5B9A\u4E49\u80CC\u666F\u8272\u4EE5\u53CA\u9009\u4E2D\u72B6\u6001")],-1),Pt=e("h2",{id:"ke-yi-chu-biao-qian"},[e("a",{class:"header-anchor",href:"#ke-yi-chu-biao-qian"}),t(" \u53EF\u79FB\u9664\u6807\u7B7E")],-1),Kt=e("p",null,[t("\u8BBE\u7F6E"),e("code",null,"closable"),t("\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6807\u7B7E\u662F\u5426\u53EF\u79FB\u9664\u3002")],-1),Qt=e("div",null,[e("p",null,[t("\u53EF\u4EE5\u8BBE\u7F6E"),e("code",null,"disable-transitions"),t("\u5C5E\u6027\uFF0C\u6765\u5173\u95ED\u6807\u7B7E\u79FB\u9664\u65F6\u6E10\u53D8\u52A8\u753B\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"Boolean"),t("\uFF0Ctrue \u4E3A\u5173\u95ED\u3002")])],-1),Rt=e("h2",{id:"yi-chu-kong-zhi"},[e("a",{class:"header-anchor",href:"#yi-chu-kong-zhi"}),t(" \u6EA2\u51FA\u63A7\u5236")],-1),Wt=e("p",null,[t("\u901A\u8FC7\u6837\u5F0F\u8BBE\u7F6E"),e("code",null,"width"),t("\uFF0C\u53EF\u4EE5\u5728\u6587\u5B57\u8D85\u51FA\u957F\u5EA6\u540E\u663E\u793A\u7701\u7565\u53F7\u3002")],-1),Xt=e("div",null,[e("p",null,"\u5F53Tag\u5728\u5176\u5B83DOM\u5185\u90E8\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6765\u81EA\u52A8\u9690\u85CF\u8D85\u51FA\u7684\u6587\u672C\u3002")],-1),At=e("h2",{id:"dong-tai-bian-ji-biao-qian"},[e("a",{class:"header-anchor",href:"#dong-tai-bian-ji-biao-qian"}),t(" \u52A8\u6001\u7F16\u8F91\u6807\u7B7E")],-1),Ft=e("p",null,[t("\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 "),e("code",null,"close"),t(" \u4E8B\u4EF6\u6765\u5B9E\u73B0")],-1),Ht=C('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary/success/warning/danger/info</td><td>\u2014</td></tr><tr><td>closable</td><td>\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disable-transitions</td><td>\u662F\u5426\u7981\u7528\u6E10\u53D8\u52A8\u753B</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>effect</td><td>\u4E3B\u9898</td><td>string</td><td>light</td><td>\u2014</td></tr><tr><td>outline</td><td>\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u89D2</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>active</td><td>\u9009\u4E2D</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>color</td><td>\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>suffix</td><td>\u6587\u5B57\u540E\u9762\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u6587\u5B57\u524D\u9762\u5185\u5BB9</td></tr></tbody></table>',6),ee={setup(_){const o="tag",n={"../../../examples/tag/active.vue":N,"../../../examples/tag/addable.vue":Q,"../../../examples/tag/basic.vue":Y,"../../../examples/tag/closable.vue":tt,"../../../examples/tag/light.vue":nt,"../../../examples/tag/outline.vue":_t,"../../../examples/tag/overflow.vue":ft,"../../../examples/tag/round.vue":bt,"../../../examples/tag/size.vue":kt};return(r,p)=>{const d=s("demo-block"),i=s("right-nav");return u(),y(b,null,[e("section",null,[wt,Bt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/basic","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag>\u6807\u7B7E\u4E00</hl-tag>
    <hl-tag type="primary">\u6807\u7B7E\u4E8C</hl-tag>
    <hl-tag type="success">\u6807\u7B7E\u4E09</hl-tag>
    <hl-tag type="warning">\u6807\u7B7E\u56DB</hl-tag>
    <hl-tag type="danger">\u6807\u7B7E\u4E94</hl-tag>
    <hl-tag type="info">\u6807\u7B7E\u516D</hl-tag>
  </hl-group>
</template>
`},{default:a(()=>[St]),_:1},8,["demos"]),jt,Vt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/light","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="item in items" :key="item.label" :type="item.type" effect="light">
      {{ item.label }}
    </hl-tag>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = ref([
  { label: '\u6807\u7B7E\u4E00', type: null },
  { label: '\u6807\u7B7E\u4E8C', type: 'primary' },
  { label: '\u6807\u7B7E\u4E09', type: 'success' },
  { label: '\u6807\u7B7E\u56DB', type: 'warning' },
  { label: '\u6807\u7B7E\u4E94', type: 'danger' },
  { label: '\u6807\u7B7E\u516D', type: 'info' },
])

<\/script>
`},{default:a(()=>[Ct]),_:1},8,["demos"]),It,Ot,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/round","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="item in items" :key="item.label" :type="item.type" effect="light" round>
      {{ item.label }}
    </hl-tag>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = ref([
  { label: '\u6807\u7B7E\u4E00', type: null },
  { label: '\u6807\u7B7E\u4E8C', type: 'primary' },
  { label: '\u6807\u7B7E\u4E09', type: 'success' },
  { label: '\u6807\u7B7E\u56DB', type: 'warning' },
  { label: '\u6807\u7B7E\u4E94', type: 'danger' },
  { label: '\u6807\u7B7E\u516D', type: 'info' },
])

<\/script>
`},null,8,["demos"]),Mt,Dt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/outline","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag outline>\u6807\u7B7E\u4E00</hl-tag>
    <hl-tag type="primary" outline>\u6807\u7B7E\u4E8C</hl-tag>
    <hl-tag type="success" outline>\u6807\u7B7E\u4E09</hl-tag>
    <hl-tag type="warning" outline>\u6807\u7B7E\u56DB</hl-tag>
    <hl-tag type="danger" outline>\u6807\u7B7E\u4E94</hl-tag>
    <hl-tag type="info" outline>\u6807\u7B7E\u516D</hl-tag>
  </hl-group>
</template>
`},null,8,["demos"]),qt,Lt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/size","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag size="sm">\u5C0F\u578B\u6807\u7B7E</hl-tag>
    <hl-tag>\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
    <hl-tag size="lg">\u5927\u578B\u6807\u7B7E</hl-tag>
  </hl-group>
</template>
`},null,8,["demos"]),Nt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/active","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag color="#ffeedd">\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
    <hl-tag active>\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
    <hl-tag type="primary" effect="light" active>\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
  </hl-group>
</template>
`},null,8,["demos"]),Pt,Kt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/closable","source-code":`<template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </hl-tag>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: '\u6807\u7B7E\u4E8C', type: 'primary' },
  { name: '\u6807\u7B7E\u4E09', type: 'success' },
  { name: '\u6807\u7B7E\u56DB', type: 'warning' },
  { name: '\u6807\u7B7E\u4E94', type: 'danger' },
  { name: '\u6807\u7B7E\u516D', type: 'info' },
])

<\/script>
`},{default:a(()=>[Qt]),_:1},8,["demos"]),Rt,Wt,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/overflow","source-code":`<template>
  <hl-tag closable type="primary" style="width: 100px">
    Tag\u7701\u7565\u53F7\u793A\u4F8B
  </hl-tag>
</template>
`},{default:a(()=>[Xt]),_:1},8,["demos"]),At,Ft,l(d,{fs:"",demos:h(n),"component-id":o,"path-name":"tag/addable","source-code":`<template>
  <hl-group gap="var(--sm)" wrap>
    <hl-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
      {{ tag }}
    </hl-tag>
    <hl-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      class="input-new-tag"
      size="sm"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <hl-link v-else size="sm" @click="showInput">+ New Tag</hl-link>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const dynamicTags = ref(['\u6807\u7B7E\u4E00', '\u6807\u7B7E\u4E8C', '\u6807\u7B7E\u4E09'])
const inputVisible = ref(false)
const inputValue = ref('')
const saveTagInput = ref(null)

const handleClose = tag => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    saveTagInput.value.focus()
  })
}

const handleInputConfirm = () => {
  let val = inputValue.value
  if (val) {
    dynamicTags.value.push(val)
  }
  inputVisible.value = false
  inputValue.value = ''
}

<\/script>

<style>
  .input-new-tag {
    width: 90px;
  }
</style>
`},null,8,["demos"]),Ht]),l(i)],64)}}};export{ee as default};
