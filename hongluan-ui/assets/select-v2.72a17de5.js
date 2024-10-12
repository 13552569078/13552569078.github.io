var D=Object.defineProperty;var B=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var C=(i,a,n)=>a in i?D(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,v=(i,a)=>{for(var n in a||(a={}))w.call(a,n)&&C(i,n,a[n]);if(B)for(var n of B(a))k.call(a,n)&&C(i,n,a[n]);return i};import{H as F,L as V,W as j,Q as e,X as s,P as r,a1 as N,o as x,S as h,aR as g}from"./vue.85e091e9.js";import{_ as M}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:i,openBlock:a,createBlock:n}=g;function p(o,t){const u=i("hl-select-v2");return a(),n(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),options:o.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"}},null,8,["modelValue","options"])}const c=["a","b","c","d","e","f","g","h","i","j"];return v({render:p},{data(){return{options:Array.from({length:1e3}).map((o,t)=>({value:`\u9009\u9879${t+1}`,label:`${c[t%10]}${t}`})),value:""}}})}(),"hl-demo1":function(){const{resolveComponent:i,openBlock:a,createBlock:n}=g;function p(o,t){const u=i("hl-select-v2");return a(),n(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),options:o.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}const c=["a","b","c","d","e","f","g","h","i","j"];return v({render:p},{data(){return{options:Array.from({length:1e3}).map((o,t)=>({value:`\u9009\u9879${t+1}`,label:`${c[t%10]}${t}`})),value:[]}}})}(),"hl-demo2":function(){const{resolveComponent:i,openBlock:a,createBlock:n}=g;function p(o,t){const u=i("hl-select-v2");return a(),n(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),options:o.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"},multiple:"","collapse-tags":""},null,8,["modelValue","options"])}const c=["a","b","c","d","e","f","g","h","i","j"];return v({render:p},{data(){return{options:Array.from({length:1e3}).map((o,t)=>({value:`\u9009\u9879${t+1}`,label:`${c[t%10]}${t}`})),value:[]}}})}(),"hl-demo3":function(){const{resolveComponent:i,openBlock:a,createBlock:n}=g;function p(o,t){const u=i("hl-select-v2");return a(),n(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),filterable:"",options:o.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}const c=["a","b","c","d","e","f","g","h","i","j"];return v({render:p},{data(){return{options:Array.from({length:1e3}).map((o,t)=>({value:`\u9009\u9879${t+1}`,label:`${c[t%10]}${t}`})),value:[]}}})}(),"hl-demo4":function(){const{resolveComponent:i,createVNode:a,Fragment:n,openBlock:p,createElementBlock:c}=g;function d(u,l){const E=i("hl-select-v2");return p(),c(n,null,[a(E,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=m=>u.value=m),filterable:"",options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"]),a(E,{disabled:"",modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=m=>u.value=m),filterable:"",options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"])],64)}const o=["a","b","c","d","e","f","g","h","i","j"];return v({render:d},{data(){return{options:Array.from({length:1e3}).map((u,l)=>({value:`\u9009\u9879${l+1}`,label:`${o[l%10]}${l}`,disabled:l%10===0})),value:[]}}})}(),"hl-demo5":function(){const{resolveComponent:i,openBlock:a,createBlock:n}=g;function p(o,t){const u=i("hl-select-v2");return a(),n(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),filterable:"",options:o.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}const c=["a","b","c","d","e","f","g","h","i","j"];return v({render:p},{data(){return{options:Array.from({length:10}).map((o,t)=>{const u=t+1;return{value:`\u7EC4 ${u}`,label:`\u7EC4 ${u}`,options:Array.from({length:10}).map((l,E)=>({value:`\u9009\u9879${E+1+10*u}`,label:`${c[E%10]}${E+1+10*u}`}))}}),value:[]}}})}(),"hl-demo6":function(){const{toDisplayString:i,createElementVNode:a,resolveComponent:n,withCtx:p,openBlock:c,createBlock:d}=g,o={style:{"margin-right":"8px"}},t={style:{color:"var(--hl-text-color-secondary)","font-size":"13px"}};function u(m,f){const b=n("hl-select-v2");return c(),d(b,{modelValue:m.value,"onUpdate:modelValue":f[0]||(f[0]=_=>m.value=_),filterable:"",options:m.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"},multiple:""},{default:p(({item:_})=>[a("span",o,i(_.label),1),a("span",t,i(_.value),1)]),_:1},8,["modelValue","options"])}const l=["a","b","c","d","e","f","g","h","i","j"];return v({render:u},{data(){return{options:Array.from({length:1e3}).map((m,f)=>({value:`\u9009\u9879${f+1}`,label:`${l[f%10]}${f}`})),value:[]}}})}(),"hl-demo7":function(){const{resolveComponent:i,createVNode:a,Fragment:n,openBlock:p,createElementBlock:c}=g;function d(u,l){const E=i("hl-select-v2");return p(),c(n,null,[a(E,{modelValue:u.value1,"onUpdate:modelValue":l[0]||(l[0]=m=>u.value1=m),options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:"",clearable:""},null,8,["modelValue","options"]),a(E,{modelValue:u.value2,"onUpdate:modelValue":l[1]||(l[1]=m=>u.value2=m),options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px","vertical-align":"middle"},clearable:""},null,8,["modelValue","options"])],64)}const o=["a","b","c","d","e","f","g","h","i","j"];return v({render:d},{data(){return{options:Array.from({length:1e3}).map((u,l)=>({value:`\u9009\u9879${l+1}`,label:`${o[l%10]}${l}`})),value1:[],value2:""}}})}(),"hl-demo8":function(){const{resolveComponent:i,createVNode:a,Fragment:n,openBlock:p,createElementBlock:c}=g;function d(u,l){const E=i("hl-select-v2");return p(),c(n,null,[a(E,{modelValue:u.value1,"onUpdate:modelValue":l[0]||(l[0]=m=>u.value1=m),options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:""},null,8,["modelValue","options"]),a(E,{modelValue:u.value2,"onUpdate:modelValue":l[1]||(l[1]=m=>u.value2=m),options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px","vertical-align":"middle"},"allow-create":"",filterable:"",clearable:""},null,8,["modelValue","options"])],64)}const o=["a","b","c","d","e","f","g","h","i","j"];return v({render:d},{data(){return{options:Array.from({length:1e3}).map((u,l)=>({value:`\u9009\u9879${l+1}`,label:`${o[l%10]}${l}`})),value1:[],value2:""}}})}(),"hl-demo9":function(){const{resolveComponent:i,openBlock:a,createBlock:n}=g;function p(d,o){const t=i("hl-select-v2");return a(),n(t,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=u=>d.value=u),style:{width:"240px"},multiple:"",size:"medium",filterable:"",remote:"","remote-method":d.remoteMethod,clearable:"",options:d.options,loading:d.loading,placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"},null,8,["modelValue","remote-method","options","loading"])}return v({render:p},{created(){this.list=this.states.map(d=>({value:`value:${d}`,label:`label:${d}`}))},methods:{remoteMethod(d){d!==""?(this.loading=!0,setTimeout(()=>{this.loading=!1,this.options=this.list.filter(o=>o.label.toLowerCase().indexOf(d.toLowerCase())>-1)},200)):this.options=[]}},data(){return{list:[],loading:!1,states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],options:[],value:[]}}})}()}},z=x('<h1>Select V2 \u865A\u62DF\u5217\u8868\u9009\u62E9\u5668</h1><h2 id="bei-jing"><a class="header-anchor" href="#bei-jing"></a> \u80CC\u666F</h2><p>\u5728\u6570\u636E\u91CF\u7206\u53D1\u7684\u4ECA\u5929\uFF0C\u5F88\u591A\u65F6\u5019\u4E00\u4E2A\u9009\u62E9\u5668\u53EF\u80FD\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u975E\u5E38\u591A\u7684\u6570\u636E\uFF0C\u7136\u800C\u6D4F\u89C8\u5668\u5728\u4E00\u6B21\u6027\u628A\u8FD9\u4E9B\u6570\u636E\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u7684\u65F6\u5019\u4F1A\u51FA\u73B0\u5361\u987F\u751A\u81F3\u662F\u5D29\u6E83\u7684\u60C5\u51B5\uFF0C\u6240\u4EE5\u865A\u62DF\u5316\u6280\u672F\u5E94\u8FD0\u800C\u751F\uFF0C\u4E3A\u4E86\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u548C\u66F4\u597D\u7684\u4F7F\u7528\u4F53\u9A8C\uFF0C\u6211\u4EEC\u51B3\u5B9A\u6DFB\u52A0\u8FD9\u4E2A\u7EC4\u4EF6\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><h2 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa"></a> \u57FA\u7840\u7528\u6CD5</h2><p>\u9002\u7528\u5E7F\u6CDB\u7684\u57FA\u7840\u9009\u62E9\u5668</p>',6),U=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: '',
      }
    },
  }
<\/script>
`)],-1),I=e("h2",{id:"duo-xuan"},[e("a",{class:"header-anchor",href:"#duo-xuan"}),h(" \u591A\u9009")],-1),O=e("p",null,"\u6700\u57FA\u7840\u7684\u591A\u9009\u9009\u62E9\u5668",-1),W=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`)],-1),L=e("h2",{id:"yin-cang-duo-yu-biao-qian-de-duo-xuan"},[e("a",{class:"header-anchor",href:"#yin-cang-duo-yu-biao-qian-de-duo-xuan"}),h(" \u9690\u85CF\u591A\u4F59\u6807\u7B7E\u7684\u591A\u9009")],-1),q=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
    collapse-tags
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`)],-1),T=e("h2",{id:"ke-shai-xuan-de-duo-xuan"},[e("a",{class:"header-anchor",href:"#ke-shai-xuan-de-duo-xuan"}),h(" \u53EF\u7B5B\u9009\u7684\u591A\u9009")],-1),H=e("p",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u53EF\u901A\u8FC7\u5339\u914D\u7B5B\u9009",-1),P=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`)],-1),K=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),h(" \u7981\u7528\u72B6\u6001")],-1),R=e("p",null,"\u60A8\u53EF\u4EE5\u9009\u62E9\u7981\u7528 Select \u6216\u8005 Select \u7684 Option",-1),G=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    multiple
  />
  <hl-select-v2
    disabled
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; vertical-align: middle;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
          disabled: idx % 10 === 0,
        })),
        value: [],
      }
    },
  }
<\/script>
`)],-1),J=e("h2",{id:"xuan-xiang-fen-zu"},[e("a",{class:"header-anchor",href:"#xuan-xiang-fen-zu"}),h(" \u9009\u9879\u5206\u7EC4")],-1),Y=e("p",null,"\u6211\u4EEC\u53EF\u4EE5\u4E3A\u9009\u9879\u5206\u7EC4\uFF0C\u53EA\u9700\u8981\u6EE1\u8DB3\u4F8B\u5B50\u91CC\u7684\u8FD9\u4E2A pattern",-1),Q=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 10 }).map((_, idx) => {
          const label = idx + 1
          return {
            value: \`\u7EC4 \${label}\`,
            label: \`\u7EC4 \${label}\`,
            options: Array.from({ length: 10 }).map((_, idx) => ({
              value: \`\u9009\u9879\${idx + 1 + 10 * label}\`,
              label: \`\${initials[idx % 10]}\${idx + 1 + 10 * label}\`,
            })),
          }
        }),
        value: [],
      }
    },
  }
<\/script>
`)],-1),X=e("h2",{id:"zi-ding-yi-xuan-ran-mo-ban"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-xuan-ran-mo-ban"}),h(" \u81EA\u5B9A\u4E49\u6E32\u67D3\u6A21\u677F")],-1),Z=e("p",null,"\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u81EA\u5DF1\u81EA\u5B9A\u4E49\u6A21\u677F\u6765\u6E32\u67D3\u81EA\u5DF1\u60F3\u8981\u7684\u5185\u5BB9\u3002",-1),ee=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  >
    <template #default="{item}">
      <span style="margin-right: 8px;">{{ item.label }}</span>
      <span style="color: var(--hl-text-color-secondary); font-size: 13px">
        {{ item.value }}
      </span>
    </template>
  </hl-select-v2>
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`)],-1),te=e("h2",{id:"yi-jian-qing-chu"},[e("a",{class:"header-anchor",href:"#yi-jian-qing-chu"}),h(" \u4E00\u952E\u6E05\u9664")],-1),ue=e("p",null,"\u4E00\u952E\u5220\u9664\u6240\u6709\u7684\u9009\u9879\uFF08\u4E5F\u53EF\u9002\u7528\u4E8E\u5355\u9009\uFF09",-1),le=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value1"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    multiple
    clearable
  />
  <hl-select-v2
    v-model="value2"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; vertical-align: middle;"
    clearable
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value1: [],
        value2: '',
      }
    },
  }
<\/script>
`)],-1),oe=e("h2",{id:"chuang-jian-lin-shi-xuan-xiang"},[e("a",{class:"header-anchor",href:"#chuang-jian-lin-shi-xuan-xiang"}),h(" \u521B\u5EFA\u4E34\u65F6\u9009\u9879")],-1),ae=e("p",null,"\u53EF\u4EE5\u521B\u5EFA\u5E76\u9009\u4E2D\u9009\u9879\u4E2D\u4E0D\u5B58\u5728\u7684\u6761\u76EE",-1),ne=e("div",null,[e("p",null,[h("\u4F7F\u7528"),e("code",null,"allow-create"),h("\u5C5E\u6027\u5373\u53EF\u901A\u8FC7\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6587\u5B57\u6765\u521B\u5EFA\u65B0\u7684\u6761\u76EE\u3002\u6CE8\u610F\u6B64\u65F6"),e("code",null,"filterable"),h("\u5FC5\u987B\u4E3A\u771F\u3002")])],-1),ie=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value1"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    allow-create
    filterable
    multiple
    clearable
  />
  <hl-select-v2
    v-model="value2"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; vertical-align: middle;"
    allow-create
    filterable
    clearable
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value1: [],
        value2: '',
      }
    },
  }
<\/script>
`)],-1),de=e("h2",{id:"yuan-cheng-sou-suo"},[e("a",{class:"header-anchor",href:"#yuan-cheng-sou-suo"}),h(" \u8FDC\u7A0B\u641C\u7D22")],-1),re=e("p",null,"\u4ECE\u670D\u52A1\u5668\u641C\u7D22\u6570\u636E\uFF0C\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u67E5\u627E",-1),se=e("div",null,[e("p",null,[h("\u4E3A\u4E86\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u9700\u8981\u5C06"),e("code",null,"filterable"),h("\u548C"),e("code",null,"remote"),h("\u8BBE\u7F6E\u4E3A"),e("code",null,"true"),h("\uFF0C\u540C\u65F6\u4F20\u5165\u4E00\u4E2A"),e("code",null,"remote-method"),h("\u3002"),e("code",null,"remote-method"),h("\u4E3A\u4E00\u4E2A"),e("code",null,"Function"),h("\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002")])],-1),pe=e("pre",null,[e("code",{class:"html"},`<template>
  <hl-select-v2
    v-model="value"
    style="width: 240px"
    multiple
    size="medium"
    filterable
    remote
    :remote-method="remoteMethod"
    clearable
    :options="options"
    :loading="loading"
    placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
  />
</template>

<script>
  export default {
    created() {
      this.list = this.states.map(item => {
        return { value: \`value:\${item}\`, label: \`label:\${item}\` }
      })
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options = []
        }
      },
    },
    data() {
      return {
        list: [],
        loading: false,
        states: ['Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado',
          'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois',
          'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Ohio',
          'Oklahoma', 'Oregon', 'Pennsylvania',
          'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas',
          'Utah', 'Vermont', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin',
          'Wyoming'],
        options: [],
        value: [],
      }
    },
  }
<\/script>
`)],-1),ce=x('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modhl-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>value-key</td><td>\u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>value</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>medium/small/mini</td><td>\u2014</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>multiple-limit</td><td>\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>name</td><td>select input \u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>autocomplete</td><td>select input \u7684 autocomplete \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>off</td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>remote</td><td>\u662F\u5426\u4E3A\u8FDC\u7A0B\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>remote-method</td><td>\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>allow-create</td><td>\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C\u9700\u914D\u5408 <code>filterable</code> \u4F7F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>no-data-text</td><td>\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>#empty</code>\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u65E0\u6570\u636E</td></tr><tr><td>popper-class</td><td>Select \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-append-to-body</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-options</td><td>\u7528\u6237\u5B9A\u5236\u5316 popper \u7684\u884C\u4E3A, \u66F4\u591A\u8BF7\u67E5\u770B\u6587\u6863<a href="https://popper.js.org/docs/v2/">popper.js</a></td><td>object</td><td>-</td><td>-</td></tr><tr><td>automatic-dropdown</td><td>\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>hl-icon-circle-close</td></tr><tr><td>height</td><td>\u9762\u677F\u7684\u9AD8\u5EA6\uFF0C\u6BCF\u9879\u7684\u9AD8\u5EA6\u4E3A34px</td><td>number</td><td>-</td><td>170</td></tr><tr><td>scrollbar-always-on</td><td>\u6EDA\u52A8\u6761\u662F\u5426\u4E00\u76F4\u663E\u793A</td><td>boolean -</td><td>false</td><td></td></tr></tbody></table><span style="display:none;"></span><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u7684\u9009\u4E2D\u503C</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>remove-tag</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664tag\u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684tag\u503C</td></tr><tr><td>clear</td><td>\u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>Option \u6A21\u677F</td></tr><tr><td>empty</td><td>\u65E0\u9009\u9879\u65F6\u7684\u5217\u8868</td></tr></tbody></table>',7);function he(i,a,n,p,c,d){const o=F("hl-demo0"),t=F("demo-block"),u=F("hl-demo1"),l=F("hl-demo2"),E=F("hl-demo3"),m=F("hl-demo4"),f=F("hl-demo5"),b=F("hl-demo6"),_=F("hl-demo7"),A=F("hl-demo8"),y=F("hl-demo9"),$=F("right-nav");return V(),j(N,null,[e("section",null,[z,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: '',
      }
    },
  }
<\/script>
`},{source:r(()=>[s(o)]),highlight:r(()=>[U]),_:1}),I,O,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(u)]),highlight:r(()=>[W]),_:1}),L,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
    collapse-tags
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(l)]),highlight:r(()=>[q]),_:1}),T,H,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(E)]),highlight:r(()=>[P]),_:1}),K,R,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    multiple
  />
  <hl-select-v2
    disabled
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; vertical-align: middle;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
          disabled: idx % 10 === 0,
        })),
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(m)]),highlight:r(()=>[G]),_:1}),J,Y,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 10 }).map((_, idx) => {
          const label = idx + 1
          return {
            value: \`\u7EC4 \${label}\`,
            label: \`\u7EC4 \${label}\`,
            options: Array.from({ length: 10 }).map((_, idx) => ({
              value: \`\u9009\u9879\${idx + 1 + 10 * label}\`,
              label: \`\${initials[idx % 10]}\${idx + 1 + 10 * label}\`,
            })),
          }
        }),
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(f)]),highlight:r(()=>[Q]),_:1}),X,Z,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px;"
    multiple
  >
    <template #default="{item}">
      <span style="margin-right: 8px;">{{ item.label }}</span>
      <span style="color: var(--hl-text-color-secondary); font-size: 13px">
        {{ item.value }}
      </span>
    </template>
  </hl-select-v2>
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(b)]),highlight:r(()=>[ee]),_:1}),te,ue,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value1"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    multiple
    clearable
  />
  <hl-select-v2
    v-model="value2"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; vertical-align: middle;"
    clearable
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value1: [],
        value2: '',
      }
    },
  }
<\/script>
`},{source:r(()=>[s(_)]),highlight:r(()=>[le]),_:1}),oe,ae,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value1"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    allow-create
    filterable
    multiple
    clearable
  />
  <hl-select-v2
    v-model="value2"
    :options="options"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 240px; vertical-align: middle;"
    allow-create
    filterable
    clearable
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: \`\u9009\u9879\${idx + 1}\`,
          label: \`\${initials[idx % 10]}\${idx}\`,
        })),
        value1: [],
        value2: '',
      }
    },
  }
<\/script>
`},{source:r(()=>[s(A)]),highlight:r(()=>[ie]),default:r(()=>[ne]),_:1}),de,re,s(t,{"source-code":`<template>
  <hl-select-v2
    v-model="value"
    style="width: 240px"
    multiple
    size="medium"
    filterable
    remote
    :remote-method="remoteMethod"
    clearable
    :options="options"
    :loading="loading"
    placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
  />
</template>

<script>
  export default {
    created() {
      this.list = this.states.map(item => {
        return { value: \`value:\${item}\`, label: \`label:\${item}\` }
      })
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options = []
        }
      },
    },
    data() {
      return {
        list: [],
        loading: false,
        states: ['Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado',
          'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois',
          'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Ohio',
          'Oklahoma', 'Oregon', 'Pennsylvania',
          'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas',
          'Utah', 'Vermont', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin',
          'Wyoming'],
        options: [],
        value: [],
      }
    },
  }
<\/script>
`},{source:r(()=>[s(y)]),highlight:r(()=>[pe]),default:r(()=>[se]),_:1}),ce]),s($)],64)}var _e=M(S,[["render",he]]);export{_e as default};
