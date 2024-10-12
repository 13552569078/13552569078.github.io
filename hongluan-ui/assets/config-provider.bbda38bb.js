import{p as v,R as f,H as n,L as u,F as x,P as i,Q as l,X as o,W as b,af as C,a1 as O,Y as k,V as p,S as h,o as y}from"./vue.85e091e9.js";import{H as z}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const M={class:"flex flex-wrap gap-4 items-center"},S=v({setup(g){const e=f(""),t=[{value:"",label:"All"},{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],c=d=>{[void 0,null].includes(d)&&z.info(`The clear value is: ${d}`)};return(d,a)=>{const s=n("hl-option"),m=n("hl-select"),_=n("hl-config-provider");return u(),x(_,{"value-on-clear":null,"empty-values":[void 0,null]},{default:i(()=>[l("div",M,[o(m,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r),clearable:"",placeholder:"Select",style:{width:"240px"},onChange:c},{default:i(()=>[(u(),b(O,null,C(t,r=>o(s,{key:r.value,label:r.label,value:r.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),_:1})}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const T=h("open"),j=v({setup(g){const e=k({max:3}),t=()=>{z("this is a message.")};return(c,d)=>{const a=n("hl-button"),s=n("hl-config-provider");return u(),b("div",null,[o(s,{message:p(e)},{default:i(()=>[o(a,{onClick:t},{default:i(()=>[T]),_:1})]),_:1},8,["message"])])}}});var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const H=h("\u5207\u6362\u8BED\u8A00"),w=v({setup(g){const e=f({name:"zh-cn",hl:{pagination:{goto:"\u53BB\u5F80",pagesize:"\u5927\u5C0F",total:"\u5171 {total}",pageClassifier:"",deprecationWarning:"\u5E9F\u5F03"}}}),t=f({name:"en",hl:{pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the Pagination documentation for more details"}}}),c=()=>{const d=e.value;e.value=t.value,t.value=d};return(d,a)=>{const s=n("hl-pagination"),m=n("hl-config-provider"),_=n("hl-button"),r=n("hl-group");return u(),x(r,null,{default:i(()=>[o(m,{locale:t.value},{default:i(()=>[o(s,{layout:"prev, pager, next, total",total:50})]),_:1},8,["locale"]),o(_,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:c},{default:i(()=>[H]),_:1})]),_:1})}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const V=l("h1",null,"Config Provider \u5168\u5C40\u914D\u7F6E",-1),W=l("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\uFF0CConfig Provider \u4F7F\u7528\u4E86 Vue \u7684 provide/inject \u7279\u6027",-1),A=l("h2",{id:"guo-ji-hua-xiang-guan-pei-zhi"},[l("a",{class:"header-anchor",href:"#guo-ji-hua-xiang-guan-pei-zhi"}),h(" \u56FD\u9645\u5316 \u76F8\u5173\u914D\u7F6E")],-1),D=l("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),B=l("div",null,[l("p",null,"\u4F7F\u7528\u4E24\u4E2A\u5C5E\u6027\u6765\u63D0\u4F9B i18n \u76F8\u5173\u914D\u7F6E")],-1),G=l("h2",{id:"message-xiang-guan-pei-zhi"},[l("a",{class:"header-anchor",href:"#message-xiang-guan-pei-zhi"}),h(" Message \u76F8\u5173\u914D\u7F6E")],-1),I=y('<h2 id="kong-zhi-pei-zhi"><a class="header-anchor" href="#kong-zhi-pei-zhi"></a> \u7A7A\u503C\u914D\u7F6E</h2><p>\u652F\u6301\u7684\u7EC4\u4EF6\uFF1A</p><ul><li>Cascader</li><li>DatePicker</li><li>Select</li><li>TimePicker</li><li>TimeSelect</li></ul><p>\u8BBE\u7F6E<code>empty-values</code>\u6765\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u7A7A\u503C\u3002 \u9ED8\u8BA4\u503C\u662F<code>[&#39;&#39;, null, undefined]</code>\u3002 \u5982\u4E1A\u52A1\u9700\u6C42\u7A7A\u5B57\u7B26\u4E32\u4E0D\u662F\u4E00\u4E2A\u7A7A\u503C, \u5219\u53EF\u4EE5\u8BBE\u7F6E\u6210<code>[undefined, null]</code>\u3002</p><p>\u8BBE\u7F6E<code>value-on-clear</code>\u4EE5\u8BBE\u7F6E\u6E05\u7A7A\u9009\u9879\u7684\u503C\u3002 \u4E00\u822C\u7EC4\u4EF6\u9ED8\u8BA4\u503C\u662F<code>undefined</code>\u3002 \u800C\u5728 <code>TimePicker</code> <code>TimeSelect</code> \u7EC4\u4EF6\u5219\u662F<code>null</code>. \u5982\u679C\u60F3\u8BBE\u7F6E\u6210<code>undefined</code>, \u8BF7\u4F7F\u7528 <code>() =&gt; undefined</code>\u3002</p>',5),L=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>locale</td><td>\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61</td><td>Object&lt;Language&gt;</td><td>zh-cn / zh-tw / en</td><td>Chinese</td></tr><tr><td>size</td><td>\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>zIndex</td><td>\u5168\u5C40\u521D\u59CB\u5316zIndex</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>Message\u76F8\u5173\u914D\u7F6E, <a href="#message-attributes">\u53C2\u89C1\u4E0B\u8868</a></td><td>MessageGlobalConfig</td><td>-</td><td>\u53C2\u89C1\u4E0B\u8868</td></tr><tr><td>experimental-features</td><td>\u5B9E\u9A8C\u7279\u6027\uFF0C\u9ED8\u8BA4\u5168\u90E8\u914D\u7F6E\u4E3Afalse</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>empty-values</td><td>\u8F93\u5165\u7C7B\u7EC4\u4EF6\u7A7A\u503C</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>value-on-clear</td><td>\u8F93\u5165\u7C7B\u7EC4\u4EF6\u6E05\u7A7A\u503C</td><td>string / number / boolean / Function</td><td>\u2014</td><td></td></tr></tbody></table><h2 id="message-attributes"><a class="header-anchor" href="#message-attributes"></a> Message Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max</td><td>\u540C\u65F6\u663E\u793AMessage\u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>-</td><td>-</td></tr><tr><td>grouping</td><td>\u662F\u5426\u5408\u5E76\u76F8\u540C\u7684\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>duration</td><td>\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2. \u5982\u679C\u8BBE\u7F6E\u503C\u4E3A0\uFF0C\u5C06\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>offset</td><td>\u8DDD\u79BB\u53EF\u89C6\u7A97\u53E3\u4E0A\u90E8\u7684\u8DDD\u79BB</td><td>number</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table>',6),U={setup(g){const e="config-provider",t={"../../../examples/config-provider/empty-values.vue":P,"../../../examples/config-provider/message.vue":$,"../../../examples/config-provider/usage.vue":F};return(c,d)=>{const a=n("demo-block"),s=n("right-nav");return u(),b(O,null,[l("section",null,[V,W,A,D,o(a,{fs:"",demos:p(t),"component-id":e,"path-name":"config-provider/usage","source-code":`<template>
  <hl-group>
    <hl-config-provider :locale="locale2">
      <hl-pagination layout="prev, pager, next, total" :total="50" />
    </hl-config-provider>
    <hl-button style="margin-left: 8px; vertical-align: middle" @click="toggle">\u5207\u6362\u8BED\u8A00</hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const locale1 = ref({
  name: 'zh-cn',
  hl: {
    pagination: {
      goto: '\u53BB\u5F80',
      pagesize: '\u5927\u5C0F',
      total: '\u5171 {total}',
      pageClassifier: '',
      deprecationWarning: '\u5E9F\u5F03',
    },
  },
})
const locale2 = ref({
  name: 'en',
  hl: {
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      deprecationWarning: 'Deprecated usages detected, please refer to the Pagination documentation for more details',
    },
  },
})
const toggle = () => {
  const temp = locale1.value
  locale1.value = locale2.value
  locale2.value = temp
}

<\/script>
`},{default:i(()=>[B]),_:1},8,["demos"]),G,o(a,{fs:"",demos:p(t),"component-id":e,"path-name":"config-provider/message","source-code":`<template>
  <div>
    <hl-config-provider :message="config">
      <hl-button @click="open">open</hl-button>
    </hl-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HlMessage } from 'hongluan-ui'

const config = reactive({
  max: 3,
})
const open = () => {
  HlMessage('this is a message.')
}

<\/script>
`},null,8,["demos"]),I,o(a,{fs:"",demos:p(t),"component-id":e,"path-name":"config-provider/empty-values","source-code":`<template>
  <hl-config-provider :value-on-clear="null" :empty-values="[undefined, null]">
    <div class="flex flex-wrap gap-4 items-center">
      <hl-select
        v-model="value1"
        clearable
        placeholder="Select"
        style="width: 240px"
        @change="handleChange"
      >
        <hl-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </hl-select>
    </div>
  </hl-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HlMessage } from 'hongluan-ui'

const value1 = ref('')
const options = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const handleChange = value => {
  if ([undefined, null].includes(value)) {
    HlMessage.info(\`The clear value is: \${value}\`)
  }
}
<\/script>
`},null,8,["demos"]),L]),o(s)],64)}}};export{U as default};
