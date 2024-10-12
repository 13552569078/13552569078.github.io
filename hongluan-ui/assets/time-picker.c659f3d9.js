import{p as w,R as g,H as s,L as v,F as y,P as a,X as n,V as h,O as f,Q as t,S as r,W as S,a1 as V,o as x}from"./vue.85e091e9.js";import{A as E}from"./hongluan-icons.6cddbf05.js";const A=t("p",{class:"m-b-md"},[r(" \u4F7F\u7528\u7684\u7BAD\u5934\u8FDB\u884C\u9009\u62E9\uFF1A "),t("code",null,"arrow-control")],-1),B=t("p",{class:"m-b-md"},"\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u9009\u62E9\uFF1A\u9ED8\u8BA4",-1),H=w({setup(F){const e=(o,d)=>{const _=[];for(let m=o;m<=d;m++)_.push(m);return _};let l=g(new Date(2016,9,10,18,40)),p=g(new Date(2016,9,10,18,40));const i=()=>e(0,16).concat(e(19,23)),u=o=>{if(o===17)return e(0,29);if(o===18)return e(31,59)},c=(o,d)=>{if(o===18&&d===30)return e(1,59)};return(o,d)=>{const _=s("hl-icon"),m=s("hl-time-picker"),k=s("hl-col"),D=s("hl-row");return v(),y(D,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[n(k,{span:"lg:col-10"},{default:a(()=>[A,n(m,{modelValue:h(p),"onUpdate:modelValue":d[0]||(d[0]=b=>f(p)?p.value=b:p=b),"arrow-control":"","disabled-hours":i,"disabled-minutes":u,"disabled-seconds":c,placeholder:"\u4EFB\u610F\u65F6\u95F4\u70B9",block:""},{icon:a(()=>[n(_,null,{default:a(()=>[n(h(E))]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(k,{span:"lg:col-10"},{default:a(()=>[B,n(m,{modelValue:h(l),"onUpdate:modelValue":d[1]||(d[1]=b=>f(l)?l.value=b:l=b),"disabled-hours":i,"disabled-minutes":u,"disabled-seconds":c,placeholder:"\u4EFB\u610F\u65F6\u95F4\u70B9",block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const T=w({setup(F){let e=g([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]),l=g([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]);return(p,i)=>{const u=s("hl-time-picker"),c=s("hl-col"),o=s("hl-row");return v(),y(o,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[n(c,{span:"lg:col-10"},{default:a(()=>[n(u,{modelValue:h(l),"onUpdate:modelValue":i[0]||(i[0]=d=>f(l)?l.value=d:l=d),"is-range":"","arrow-control":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4",block:""},null,8,["modelValue"])]),_:1}),n(c,{span:"lg:col-10"},{default:a(()=>[n(u,{modelValue:h(e),"onUpdate:modelValue":i[1]||(i[1]=d=>f(e)?e.value=d:e=d),"is-range":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4",block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const P=t("h1",null,"TimePicker \u65F6\u95F4\u9009\u62E9\u5668",-1),C=t("p",null,"TimePicker \u7EC4\u4EF6\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u65F6\u95F4\u3002",-1),q=t("div",{class:"doc-tip"},[t("p",null,[r("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),t("code",null,"<client-only></client-only>"),r(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),t("a",{href:"https://nuxt.com/v3"},"Nuxt"),r(") \u548C SSG (eg: "),t("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),r(")\u3002")])],-1),z=t("div",null,[t("p",null,[r("\u901A\u8FC7 "),t("code",null,"disabledHours"),r(),t("code",null,"disabledMinutes"),r(" \u548C "),t("code",null,"disabledSeconds"),r(" \u9650\u5236\u53EF\u9009\u65F6\u95F4\u8303\u56F4\u3002")])],-1),j=t("h2",{id:"ren-yi-shi-jian-fan-wei"},[t("a",{class:"header-anchor",href:"#ren-yi-shi-jian-fan-wei"}),r(" \u4EFB\u610F\u65F6\u95F4\u8303\u56F4")],-1),O=t("p",null,[r("\u6DFB\u52A0"),t("code",null,"is-range"),r("\u5C5E\u6027\u5373\u53EF\u9009\u62E9\u65F6\u95F4\u8303\u56F4\uFF0C\u540C\u6837\u652F\u6301"),t("code",null,"arrow-control"),r("\u5C5E\u6027\u3002")],-1),N=x('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u9700\u8981\u957F\u5EA6\u4E3A2</td><td>Date / number / string / Array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>is-range</td><td>\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>arrow-control</td><td>\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>popper-class</td><td>TimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>HH:mm:ss</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date(TimePicker) / string(TimeSelect)</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790(TimePicker) / \u53EF\u9009\u503C(TimeSelect)</td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled-hours</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td><td>function</td><td>\u2014</td><td>-</td></tr><tr><td>disabled-minutes</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td><td>function(selectedHour)</td><td>\u2014</td><td>-</td></tr><tr><td>disabled-seconds</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td><td>function(selectedHour, selectedMinute)</td><td>\u2014</td><td>-</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>id</td><td>input \u8F93\u5165\u6846 id \u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>empty-values</td><td>\u7EC4\u4EF6\u7684\u7A7A\u503C\u914D\u7F6E\uFF0C\u53C2\u8003config-provider</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>value-on-clear</td><td>\u6E05\u7A7A\u9009\u9879\u7684\u503C\uFF0C\u53C2\u8003 config-provider</td><td>string / number / boolean / Function</td><td>\u2014</td><td></td></tr><tr><td>aria-label</td><td>\u539F\u751Finput <code>aria-label</code> \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>clear</td><td>\u5F53\u6E05\u7A7A\u56FE\u6807\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>() =&gt; void</code></td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr><tr><td>blur</td><td>\u4F7F input \u5931\u53BB\u7126\u70B9</td><td>\u2014</td></tr><tr><td>handleOpen</td><td>\u6253\u5F00\u65F6\u95F4\u9009\u62E9\u5668\u5F39\u7A97</td><td>\u2014</td></tr><tr><td>handleClose</td><td>\u5173\u95ED\u65F6\u95F4\u9009\u62E9\u5668\u5F39\u7A97</td><td>\u2014</td></tr></tbody></table>',8),Q={setup(F){const e="time-picker",l={"../../../examples/time-picker/basic.vue":R,"../../../examples/time-picker/is-range.vue":M};return(p,i)=>{const u=s("demo-block"),c=s("right-nav");return v(),S(V,null,[t("section",null,[P,C,q,n(u,{fs:"",demos:h(l),"component-id":e,"path-name":"time-picker/basic","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-10">
      <p class="m-b-md">
        \u4F7F\u7528\u7684\u7BAD\u5934\u8FDB\u884C\u9009\u62E9\uFF1A
        <code>arrow-control</code>
      </p>
      <hl-time-picker
        v-model="value2"
        arrow-control
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="\u4EFB\u610F\u65F6\u95F4\u70B9"
        block
      >
        <template #icon>
          <hl-icon>
            <two-airplay />
          </hl-icon>
        </template>
      </hl-time-picker>
    </hl-col>
    <hl-col span="lg:col-10">
      <p class="m-b-md">\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u9009\u62E9\uFF1A\u9ED8\u8BA4</p>
      <hl-time-picker
        v-model="value1"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="\u4EFB\u610F\u65F6\u95F4\u70B9"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoAirplay } from '@hongluan-ui/icons'

const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

let value1 = ref(new Date(2016, 9, 10, 18, 40))
let value2 = ref(new Date(2016, 9, 10, 18, 40))

// \u5982\u5141\u8BB8 17:30:00 - 18:30:00
const disabledHours = () => {
  return makeRange(0, 16).concat(makeRange(19, 23))
}

const disabledMinutes = hour => {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}

const disabledSeconds = (hour, minute) => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}

<\/script>
`},{default:a(()=>[z]),_:1},8,["demos"]),j,O,n(u,{fs:"",demos:h(l),"component-id":e,"path-name":"time-picker/is-range","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-10">
      <hl-time-picker
        v-model="value2"
        is-range
        arrow-control
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65F6\u95F4"
        end-placeholder="\u7ED3\u675F\u65F6\u95F4"
        placeholder="\u9009\u62E9\u65F6\u95F4\u8303\u56F4"
        block
      />
    </hl-col>
    <hl-col span="lg:col-10">
      <hl-time-picker
        v-model="value1"
        is-range
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65F6\u95F4"
        end-placeholder="\u7ED3\u675F\u65F6\u95F4"
        placeholder="\u9009\u62E9\u65F6\u95F4\u8303\u56F4"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
let value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])

<\/script>
`},null,8,["demos"]),N]),n(c)],64)}}};export{Q as default};
