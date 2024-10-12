import{p as _,R as i,H as s,L as m,F as f,P as g,X as l,W as b,Q as t,V as p,a1 as y,o as v,S as o}from"./vue.85e091e9.js";const x=_({setup(c){const e=i("");return(n,r)=>{const a=s("hl-time-select");return m(),f(a,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=d=>e.value=d),start:"08:30",step:"00:15",end:"18:30",placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])}}});var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const F=_({setup(c){const e=i("");return(n,r)=>{const a=s("hl-time-select");return m(),f(a,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=d=>e.value=d),start:"00:00",step:"00:30",end:"23:59",placeholder:"\u9009\u62E9\u65F6\u95F4",format:"hh:mm A"},null,8,["modelValue"])}}});var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const j=_({setup(c){const e=i(""),n=i("");return(r,a)=>{const d=s("hl-time-select"),u=s("hl-group");return m(),f(u,{indent:"var(--md)"},{default:g(()=>[l(d,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=h=>e.value=h),"max-time":n.value,class:"mr-4",placeholder:"\u5F00\u59CB\u65F6\u95F4",start:"08:30",step:"00:15",end:"18:30"},null,8,["modelValue","max-time"]),l(d,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=h=>n.value=h),"min-time":e.value,placeholder:"\u7ED3\u675F\u65F6\u95F4",start:"08:30",step:"00:15",end:"18:30"},null,8,["modelValue","min-time"])]),_:1})}}});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const E=v('<h1>TimeSelect \u65F6\u95F4\u9009\u62E9</h1><p>\u7528\u4E8E\u9009\u62E9\u6216\u8F93\u5165\u65E5\u671F</p><p>\u53EF\u7528\u65F6\u95F4\u8303\u56F4\u662F 00:00-23:59</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><h2 id="gu-ding-shi-jian-dian"><a class="header-anchor" href="#gu-ding-shi-jian-dian"></a> \u56FA\u5B9A\u65F6\u95F4\u70B9</h2><p>\u63D0\u4F9B\u51E0\u4E2A\u56FA\u5B9A\u7684\u65F6\u95F4\u70B9\u4F9B\u7528\u6237\u9009\u62E9</p>',6),z=t("div",null,[t("p",null,"\u4F7F\u7528 HlTimeSelect \u6807\u7B7E\uFF0C\u7136\u540E\u901A\u8FC7start\u3001end\u548Cstep\u6307\u5B9A\u8D77\u59CB\u65F6\u95F4\uFF0C\u7ED3\u675F\u65F6\u95F4\u548C\u6B65\u957F\u3002")],-1),H=t("h2",{id:"shi-jian-ge-shi"},[t("a",{class:"header-anchor",href:"#shi-jian-ge-shi"}),o(" \u65F6\u95F4\u683C\u5F0F")],-1),M=t("p",null,[o("\u4F7F\u7528 "),t("code",null,"format"),o(" \u5C5E\u6027\u6765\u63A7\u5236\u65F6\u95F4\u683C\u5F0F (\u5C0F\u65F6\u4EE5\u53CA\u5206\u949F)\u3002")],-1),P=t("p",null,[o("\u5728 "),t("a",{href:"https://day.js.org/docs/en/display/format#list-of-all-available-formats"},"\u8FD9\u91CC"),o(" \u67E5\u770B Day.js \u652F\u6301\u7684\u6240\u6709\u683C\u5F0F\u3002")],-1),U=t("div",{class:"doc-tip warning"},[t("p",null,"\u6CE8\u610F\u5927\u5C0F\u5199")],-1),k=t("h2",{id:"gu-ding-shi-jian-fan-wei"},[t("a",{class:"header-anchor",href:"#gu-ding-shi-jian-fan-wei"}),o(" \u56FA\u5B9A\u65F6\u95F4\u8303\u56F4")],-1),w=t("p",null,"\u5982\u679C\u5148\u9009\u4E2D\u4E86\u5F00\u59CB\uFF08\u6216\u7ED3\u675F\uFF09\u65F6\u95F4\uFF0C\u5219\u7ED3\u675F\uFF08\u6216\u5F00\u59CB\uFF09\u65F6\u95F4\u7684\u72B6\u6001\u4E5F\u5C06\u4F1A\u968F\u4E4B\u6539\u53D8\u3002",-1),A=v('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>large / default / small</td><td>default</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>effect</td><td>\u4E3B\u9898\uFF0C\u5185\u7F6E\u4E86 dark / light \u4E24\u79CD\u4E3B\u9898</td><td>string</td><td>string</td><td>light</td></tr><tr><td>start</td><td>\u5F00\u59CB\u65F6\u95F4</td><td>string</td><td>\u2014</td><td>09:00</td></tr><tr><td>end</td><td>\u7ED3\u675F\u65F6\u95F4</td><td>string</td><td>\u2014</td><td>18:00</td></tr><tr><td>step</td><td>\u95F4\u9694\u65F6\u95F4</td><td>string</td><td>\u2014</td><td>00:30</td></tr><tr><td>min-time</td><td>\u6700\u65E9\u65F6\u95F4\u70B9\uFF0C\u65E9\u4E8E\u8BE5\u65F6\u95F4\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528</td><td>string</td><td>\u2014</td><td>00:00</td></tr><tr><td>max-time</td><td>\u6700\u665A\u65F6\u95F4\u70B9\uFF0C\u665A\u4E8E\u8BE5\u65F6\u95F4\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format</td><td>\u8BBE\u7F6E\u65F6\u95F4\u683C\u5F0F</td><td>string</td><td>\u8BE6\u89C1 <a href="https://day.js.org/docs/en/display/format#list-of-all-available-formats">\u683C\u5F0F\u8868\u793A</a></td><td>HH:mm</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>empty-values</td><td>\u7EC4\u4EF6\u7684\u7A7A\u503C\u914D\u7F6E\uFF0C\u53C2\u8003config-provider</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>value-on-clear</td><td>\u6E05\u7A7A\u9009\u9879\u7684\u503C\uFF0C\u53C2\u8003 config-provider</td><td>string / number / boolean / Function</td><td>\u2014</td><td></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>val\uFF0C\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: FocusEvent)</td></tr><tr><td>focus</td><td>\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: FocusEvent)</td></tr><tr><td>clear</td><td>\u5F53\u6E05\u7A7A\u56FE\u6807\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr><tr><td>blur</td><td>\u4F7F input \u5931\u53BB\u7126\u70B9</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prefix</td><td>\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td></tr></tbody></table>',8),O={setup(c){const e="time-select",n={"../../../examples/time-select/basic.vue":V,"../../../examples/time-select/time-formats.vue":S,"../../../examples/time-select/time-range.vue":T};return(r,a)=>{const d=s("demo-block"),u=s("right-nav");return m(),b(y,null,[t("section",null,[E,l(d,{fs:"",demos:p(n),"component-id":e,"path-name":"time-select/basic","source-code":`<template>
  <hl-time-select
    v-model="value"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="\u9009\u62E9\u65F6\u95F4"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

<\/script>
`},{default:g(()=>[z]),_:1},8,["demos"]),H,M,P,U,l(d,{fs:"",demos:p(n),"component-id":e,"path-name":"time-select/time-formats","source-code":`<template>
  <hl-time-select
    v-model="value"
    start="00:00"
    step="00:30"
    end="23:59"
    placeholder="\u9009\u62E9\u65F6\u95F4"
    format="hh:mm A"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

<\/script>
`},null,8,["demos"]),k,w,l(d,{fs:"",demos:p(n),"component-id":e,"path-name":"time-select/time-range","source-code":`<template>
  <hl-group indent="var(--md)">
    <hl-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      placeholder="\u5F00\u59CB\u65F6\u95F4"
      start="08:30"
      step="00:15"
      end="18:30"
    />
    <hl-time-select
      v-model="endTime"
      :min-time="startTime"
      placeholder="\u7ED3\u675F\u65F6\u95F4"
      start="08:30"
      step="00:15"
      end="18:30"
    />
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')

<\/script>
`},null,8,["demos"]),A]),l(u)],64)}}};export{O as default};
