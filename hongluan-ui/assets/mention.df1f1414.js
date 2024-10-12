import{p as g,R as d,H as h,L as v,F as x,Y as F,P as b,X as i,V as c,S as m,Q as e,T as M,m as O,W as w,a1 as S,o as T}from"./vue.85e091e9.js";const j=g({setup(f){const t=d("@"),n=d([{label:"Fuphoenixes",value:"Fuphoenixes"},{label:"kooriookami",value:"kooriookami"},{label:"Jeremy",value:"Jeremy"},{label:"btea",value:"btea"}]);return(u,a)=>{const l=h("hl-mention");return v(),x(l,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),options:n.value,style:{width:"320px"},placeholder:"Please input"},null,8,["modelValue","options"])}}});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const R=m(" Submit "),J=m("Reset"),A=g({setup(f){const t=d(),n=F({name:"",desc:""}),u=d([{label:"Fuphoenixes",value:"Fuphoenixes"},{label:"kooriookami",value:"kooriookami"},{label:"Jeremy",value:"Jeremy"},{label:"btea",value:"btea"}]),a=F({name:[{required:!0,message:"Please input name",trigger:"blur"}],desc:[{required:!0,message:"Please input desc",trigger:"blur"}]}),l=async o=>{!o||await o.validate((r,p)=>{r?console.log("submit!"):console.log("error submit!",p)})},s=o=>{!o||o.resetFields()};return(o,r)=>{const p=h("hl-mention"),_=h("hl-form-item"),y=h("hl-button"),V=h("hl-form");return v(),x(V,{ref_key:"ruleFormRef",ref:t,style:{"max-width":"600px"},model:c(n),rules:c(a)},{default:b(()=>[i(_,{label:"name",prop:"name"},{default:b(()=>[i(p,{modelValue:c(n).name,"onUpdate:modelValue":r[0]||(r[0]=k=>c(n).name=k),options:u.value},null,8,["modelValue","options"])]),_:1}),i(_,{label:"desc",prop:"desc"},{default:b(()=>[i(p,{modelValue:c(n).desc,"onUpdate:modelValue":r[1]||(r[1]=k=>c(n).desc=k),type:"textarea",options:u.value},null,8,["modelValue","options"])]),_:1}),i(_,null,{default:b(()=>[i(y,{type:"primary",class:"m-r-sm",onClick:r[2]||(r[2]=k=>l(t.value))},{default:b(()=>[R]),_:1}),i(y,{onClick:r[3]||(r[3]=k=>s(t.value))},{default:b(()=>[J]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const $={style:{display:"flex","align-items":"center"}},I={style:{"margin-left":"6px"}},C=g({setup(f){const t=d(""),n=d([{value:"Fuphoenixes",avatar:"https://avatars.githubusercontent.com/u/27912232"},{value:"kooriookami",avatar:"https://avatars.githubusercontent.com/u/38392315"},{value:"Jeremy",avatar:"https://avatars.githubusercontent.com/u/15975785"},{value:"btea",avatar:"https://avatars.githubusercontent.com/u/24516654"}]);return(u,a)=>{const l=h("hl-thumb"),s=h("hl-mention");return v(),x(s,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),options:n.value,style:{width:"320px"},placeholder:"Please input"},{label:b(({item:o})=>[e("div",$,[i(l,{size:u.sm,src:o.avatar},null,8,["size","src"]),e("span",I,M(o.value),1)])]),_:1},8,["modelValue","options"])}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const D=g({setup(f){const t=d(""),n=d(!1),u=d([]);let a;const l=s=>{a&&clearTimeout(a),n.value=!0,a=setTimeout(()=>{u.value=["Fuphoenixes","kooriookami","Jeremy","btea"].map(o=>({label:s+o,value:s+o})),n.value=!1},1500)};return O(()=>{a&&clearTimeout(a)}),(s,o)=>{const r=h("hl-mention");return v(),x(r,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=p=>t.value=p),options:u.value,loading:n.value,style:{width:"320px"},placeholder:"Please input",onSearch:l},null,8,["modelValue","options","loading"])}}});var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const q=g({setup(f){const t={"@":["Fuphoenixes","kooriookami","Jeremy","btea"],"#":["1.0","2.0","3.0"]},n=d(""),u=d([]),a=(l,s)=>{u.value=(t[s]||[]).map(o=>({value:o}))};return(l,s)=>{const o=h("hl-mention");return v(),x(o,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r),options:u.value,prefix:["@","#"],style:{width:"320px"},placeholder:"input @ to mention people, # to mention tag",onSearch:a},null,8,["modelValue","options"])}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const W=g({setup(f){const t=d(""),n=d([{label:"Fuphoenixes",value:"Fuphoenixes"},{label:"kooriookami",value:"kooriookami"},{label:"Jeremy",value:"Jeremy"},{label:"btea",value:"btea"}]);return(u,a)=>{const l=h("hl-mention");return v(),x(l,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),"native-type":"textarea",options:n.value,style:{width:"320px"},placeholder:"Please input"},null,8,["modelValue","options"])}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const B=e("hr",null,null,-1),L=g({setup(f){const t={"@":["Fuphoenixes","kooriookami","Jeremy","btea"],"#":["1.0","2.0","3.0"]},n=d(""),u=d(""),a=d(t["@"].map(r=>({value:r}))),l=d([]),s=(r,p)=>{l.value=(t[p]||[]).map(_=>({value:_}))},o=(r,p)=>(t[p]||[]).includes(r);return(r,p)=>{const _=h("hl-mention");return v(),w(S,null,[i(_,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=y=>n.value=y),whole:"",options:a.value,style:{width:"320px"},placeholder:"Please input"},null,8,["modelValue","options"]),B,i(_,{modelValue:u.value,"onUpdate:modelValue":p[1]||(p[1]=y=>u.value=y),options:l.value,prefix:["@","#"],whole:"","check-is-whole":o,style:{width:"320px"},placeholder:"input @ to mention people, # to mention tag",onSearch:s},null,8,["modelValue","options"])],64)}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const X=e("h1",null,"Mention \u63D0\u53CA",-1),N=e("p",null,"\u7528\u4E8E\u5728\u8F93\u5165\u4E2D\u63D0\u53CA\u67D0\u4EBA\u6216\u67D0\u4E8B\u3002",-1),Y=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),m(" \u57FA\u7840\u7528\u6CD5")],-1),G=e("p",null,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",-1),Z=e("h2",{id:"textarea"},[e("a",{class:"header-anchor",href:"#textarea"}),m(" Textarea")],-1),ee=e("p",null,"\u8F93\u5165\u7C7B\u578B\u53EF\u4EE5\u8BBE\u7F6E\u4E3A textarea \u3002",-1),te=e("h2",{id:"zi-ding-yi-biao-qian"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian"}),m(" \u81EA\u5B9A\u4E49\u6807\u7B7E")],-1),ne=e("p",null,'\u4F7F\u7528 "label" \u81EA\u5B9A\u4E49\u6807\u7B7E\u3002',-1),oe=e("h2",{id:"jia-zai-yuan-cheng-xuan-xiang"},[e("a",{class:"header-anchor",href:"#jia-zai-yuan-cheng-xuan-xiang"}),m(" \u52A0\u8F7D\u8FDC\u7A0B\u9009\u9879")],-1),le=e("p",null,"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u3002",-1),ae=e("h2",{id:"zi-ding-yi-chu-fa-zi-duan"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-chu-fa-zi-duan"}),m(" \u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u6BB5")],-1),se=e("p",null,[m("\u901A\u8FC7 "),e("code",null,"prefix"),m(" \u5C5E\u6027 \u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u6BB5\u3002 \u9ED8\u8BA4\u4E3A "),e("code",null,"@"),m(", "),e("code",null,"Array<string>"),m(" \u3002")],-1),re=e("h2",{id:"zheng-ti-shan-chu"},[e("a",{class:"header-anchor",href:"#zheng-ti-shan-chu"}),m(" \u6574\u4F53\u5220\u9664")],-1),ie=e("p",null,'\u5C06whole\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u5F53\u60A8\u6309\u4E0B\u9000\u683C\u952E\u65F6\uFF0C\u6B64\u5904\u7684 mention \u533A\u57DF\u5C06\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\u88AB\u5220\u9664\u3002 \u8BBE\u7F6E "check-is-whole" \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u68C0\u67E5\u903B\u8F91\u3002',-1),de=e("h2",{id:"zai-biao-dan-li-shi-yong"},[e("a",{class:"header-anchor",href:"#zai-biao-dan-li-shi-yong"}),m(" \u5728\u8868\u5355\u91CC\u4F7F\u7528")],-1),ue=e("p",null,[m("\u4E0E "),e("code",null,"HlForm"),m(" \u4E00\u8D77\u4F7F\u7528")],-1),pe=T(`<div class="doc-tip"><p>\u7531\u4E8E\u8FD9\u4E2A\u7EC4\u4EF6\u662F\u57FA\u4E8E<code>HlInput</code>\u6D3E\u751F\u7684\uFF0C\u4ED6\u4EEC\u7684\u539F\u59CB\u5C5E\u6027\u672A\u88AB\u66F4\u6539\uFF0C\u6545\u4E0D\u5728\u6B64\u91CD\u590D\u3002\u8BF7\u8DF3\u8F6C\u67E5\u770B\u539F\u7EC4\u4EF6\u7684\u76F8\u5E94\u6587\u6863\u3002</p></div><h2 id="api"><a class="header-anchor" href="#api"></a> API</h2><h3 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>options</td><td>\u63D0\u53CA\u9009\u9879\u5217\u8868</td><td><code>MentionOption[]</code></td><td>[]</td></tr><tr><td>prefix</td><td>\u89E6\u53D1\u5B57\u6BB5\u7684\u524D\u7F00\u3002 \u5B57\u7B26\u4E32\u957F\u5EA6\u5FC5\u987B\u4E14\u53EA\u80FD\u4E3A 1</td><td>string / <code>string[]</code></td><td><code>&#39;@&#39;</code></td></tr><tr><td>split</td><td>\u7528\u4E8E\u62C6\u5206\u63D0\u53CA\u7684\u5B57\u7B26\u3002 \u5B57\u7B26\u4E32\u957F\u5EA6\u5FC5\u987B\u4E14\u53EA\u80FD\u4E3A 1</td><td>string</td><td><code>&#39; &#39;</code></td></tr><tr><td>filter-option</td><td>\u5B9A\u5236\u7B5B\u9009\u5668\u9009\u9879\u903B\u8F91</td><td>false / <code>(pattern: string, option: MentionOption) =&gt; boolean</code></td><td>-</td></tr><tr><td>placement</td><td>\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E</td><td><code>&#39;bottom&#39; \\| &#39;top&#39;</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>show-arrow</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9\u662F\u5426\u6709\u7BAD\u5934</td><td>boolean</td><td><code>false</code></td></tr><tr><td>offset</td><td>\u4E0B\u62C9\u9762\u677F\u504F\u79FB\u91CF</td><td>number</td><td><code>0</code></td></tr><tr><td>whole</td><td>\u5F53\u9000\u683C\u952E\u88AB\u6309\u4E0B\u505A\u5220\u9664\u64CD\u4F5C\u65F6\uFF0C\u662F\u5426\u5C06\u63D0\u53CA\u90E8\u5206\u4F5C\u4E3A\u6574\u4F53\u5220\u9664</td><td>boolean</td><td><code>false</code></td></tr><tr><td>check-is-whole</td><td>\u5F53\u9000\u683C\u952E\u88AB\u6309\u4E0B\u505A\u5220\u9664\u64CD\u4F5C\u65F6\uFF0C\u68C0\u67E5\u662F\u5426\u5C06\u63D0\u53CA\u90E8\u5206\u4F5C\u4E3A\u6574\u4F53\u5220\u9664</td><td><code>(pattern: string, prefix: string) =&gt; boolean</code></td><td>-</td></tr><tr><td>loading</td><td>\u63D0\u53CA\u7684\u4E0B\u62C9\u9762\u677F\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</td><td>boolean</td><td><code>false</code></td></tr><tr><td>model-value / v-model</td><td>\u8F93\u5165\u503C</td><td>string</td><td>-</td></tr><tr><td>popper-class</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td>string</td><td>-</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/">popper.js</a> \u53C2\u6570</td><td><code>object</code> refer to <a href="https://popper.js.org/docs/v2/">popper.js doc</a></td><td>-</td></tr><tr><td><a href="./input.md#attributes">input props</a></td><td>*</td><td>-</td><td>*</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events"></a> Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>search</td><td>\u6309\u4E0B\u89E6\u53D1\u5B57\u6BB5\u65F6\u89E6\u53D1</td><td><code>(pattern: string, prefix: string) =&gt; void</code></td></tr><tr><td>select</td><td>\u5F53\u7528\u6237\u9009\u62E9\u9009\u9879\u65F6\u89E6\u53D1</td><td><code>(option: MentionOption, prefix: string) =&gt; void</code></td></tr><tr><td><a href="./input.md#events">input events</a></td><td>-</td><td>-</td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9</td><td><code>{ item: MentionOption, index: number }</code></td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49 loading\u5185\u5BB9</td><td>-</td></tr><tr><td>header</td><td>\u4E0B\u62C9\u5217\u8868\u9876\u90E8\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td>footer</td><td>\u4E0B\u62C9\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td><a href="./input.md#slots">input slots</a></td><td>-</td><td>-</td></tr></tbody></table><h3 id="exposes"><a class="header-anchor" href="#exposes"></a> Exposes</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>input</td><td>hl-input \u7EC4\u4EF6\u5B9E\u4F8B</td><td><code>Ref&lt;InputInstance \\| null&gt;</code></td></tr><tr><td>tooltip</td><td>hl-tooltip \u7EC4\u4EF6\u5B9E\u4F8B</td><td><code>Ref&lt;TooltipInstance \\| null&gt;</code></td></tr><tr><td>dropdownVisible</td><td>\u63D0\u793A\u5361\u663E\u9690\u72B6\u6001</td><td><code>ComputedRef&lt;boolean&gt;</code></td></tr></tbody></table><h2 id="type-declarations"><a class="header-anchor" href="#type-declarations"></a> Type Declarations</h2><details><summary>Show declarations</summary><pre><code class="hljs language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">MentionOption</span> = {
  <span class="hljs-attr">value</span>: <span class="hljs-built_in">string</span>
  label?: <span class="hljs-built_in">string</span>
  disabled?: <span class="hljs-built_in">boolean</span>
  [<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">any</span>
}
</code></pre></details>`,12),ce={setup(f){const t="mention",n={"../../../examples/mention/basic.vue":z,"../../../examples/mention/form.vue":P,"../../../examples/mention/label.vue":U,"../../../examples/mention/loading.vue":K,"../../../examples/mention/prefix.vue":E,"../../../examples/mention/textarea.vue":H,"../../../examples/mention/whole.vue":Q};return(u,a)=>{const l=h("demo-block"),s=h("right-nav");return v(),w(S,null,[e("section",null,[X,N,Y,G,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/basic","source-code":`<template>
  <hl-mention
    v-model="value"
    :options="options"
    style="width: 320px"
    placeholder="Please input"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('@')

const options = ref([
  {
    label: 'Fuphoenixes',
    value: 'Fuphoenixes',
  },
  {
    label: 'kooriookami',
    value: 'kooriookami',
  },
  {
    label: 'Jeremy',
    value: 'Jeremy',
  },
  {
    label: 'btea',
    value: 'btea',
  },
])
<\/script>
`},null,8,["demos"]),Z,ee,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/textarea","source-code":`<template>
  <hl-mention
    v-model="value"
    native-type="textarea"
    :options="options"
    style="width: 320px"
    placeholder="Please input"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

const options = ref([
  {
    label: 'Fuphoenixes',
    value: 'Fuphoenixes',
  },
  {
    label: 'kooriookami',
    value: 'kooriookami',
  },
  {
    label: 'Jeremy',
    value: 'Jeremy',
  },
  {
    label: 'btea',
    value: 'btea',
  },
])
<\/script>
`},null,8,["demos"]),te,ne,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/label","source-code":`<template>
  <hl-mention
    v-model="value"
    :options="options"
    style="width: 320px"
    placeholder="Please input"
  >
    <template #label="{ item }">
      <div style="display: flex; align-items: center">
        <hl-thumb :size="sm" :src="item.avatar" />
        <span style="margin-left: 6px">{{ item.value }}</span>
      </div>
    </template>
  </hl-mention>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

const options = ref([
  {
    value: 'Fuphoenixes',
    avatar: 'https://avatars.githubusercontent.com/u/27912232',
  },
  {
    value: 'kooriookami',
    avatar: 'https://avatars.githubusercontent.com/u/38392315',
  },
  {
    value: 'Jeremy',
    avatar: 'https://avatars.githubusercontent.com/u/15975785',
  },
  {
    value: 'btea',
    avatar: 'https://avatars.githubusercontent.com/u/24516654',
  },
])
<\/script>
`},null,8,["demos"]),oe,le,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/loading","source-code":`<template>
  <hl-mention
    v-model="value"
    :options="options"
    :loading="loading"
    style="width: 320px"
    placeholder="Please input"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import type { MentionOption } from 'hongluan-ui'

const value = ref('')
const loading = ref(false)
const options = ref<MentionOption[]>([])

let timer: ReturnType<typeof setTimeout>
const handleSearch = (pattern: string) => {
  if (timer) clearTimeout(timer)

  loading.value = true
  timer = setTimeout(() => {
    options.value = ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'].map(
      item => ({
        label: pattern + item,
        value: pattern + item,
      }),
    )
    loading.value = false
  }, 1500)
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
<\/script>
`},null,8,["demos"]),ae,se,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/prefix","source-code":`<template>
  <hl-mention
    v-model="value"
    :options="options"
    :prefix="['@', '#']"
    style="width: 320px"
    placeholder="input @ to mention people, # to mention tag"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MentionOption } from 'hongluan-ui'

const MOCK_DATA: Record<string, string[]> = {
  '@': ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'],
  '#': ['1.0', '2.0', '3.0'],
}
const value = ref('')
const options = ref<MentionOption[]>([])

const handleSearch = (_: string, prefix: string) => {
  options.value = (MOCK_DATA[prefix] || []).map(value => ({
    value,
  }))
}
<\/script>
`},null,8,["demos"]),re,ie,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/whole","source-code":`<template>
  <hl-mention
    v-model="value1"
    whole
    :options="options1"
    style="width: 320px"
    placeholder="Please input"
  />
  <hr>
  <hl-mention
    v-model="value2"
    :options="options2"
    :prefix="['@', '#']"
    whole
    :check-is-whole="checkIsWhole"
    style="width: 320px"
    placeholder="input @ to mention people, # to mention tag"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MentionOption } from 'hongluan-ui'

const MOCK_DATA: Record<string, string[]> = {
  '@': ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'],
  '#': ['1.0', '2.0', '3.0'],
}
const value1 = ref('')
const value2 = ref('')
const options1 = ref<MentionOption[]>(
  MOCK_DATA['@'].map(value => ({ value })),
)
const options2 = ref<MentionOption[]>([])

const handleSearch = (_: string, prefix: string) => {
  options2.value = (MOCK_DATA[prefix] || []).map(value => ({
    value,
  }))
}

const checkIsWhole = (pattern: string, prefix: string) => {
  return (MOCK_DATA[prefix] || []).includes(pattern)
}
<\/script>
`},null,8,["demos"]),de,ue,i(l,{fs:"",demos:c(n),"component-id":t,"path-name":"mention/form","source-code":`<template>
  <hl-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
  >
    <hl-form-item label="name" prop="name">
      <hl-mention v-model="ruleForm.name" :options="options" />
    </hl-form-item>
    <hl-form-item label="desc" prop="desc">
      <hl-mention v-model="ruleForm.desc" type="textarea" :options="options" />
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" class="m-r-sm" @click="submitForm(ruleFormRef)">
        Submit
      </hl-button>
      <hl-button @click="resetForm(ruleFormRef)">Reset</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'hongluan-ui'

interface RuleForm {
  name: string
  desc: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  desc: '',
})

const options = ref([
  {
    label: 'Fuphoenixes',
    value: 'Fuphoenixes',
  },
  {
    label: 'kooriookami',
    value: 'kooriookami',
  },
  {
    label: 'Jeremy',
    value: 'Jeremy',
  },
  {
    label: 'btea',
    value: 'btea',
  },
])

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  desc: [{ required: true, message: 'Please input desc', trigger: 'blur' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
<\/script>
`},null,8,["demos"]),pe]),i(s)],64)}}};export{ce as default};
