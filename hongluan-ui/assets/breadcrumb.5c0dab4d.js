import{H as d,L as u,F as b,P as r,X as a,S as e,Q as t,p as _,V as s,W as p,a1 as f,o as g}from"./vue.85e091e9.js";import{_ as y}from"./index.bf23fef6.js";import{C as v,A as B}from"./hongluan-icons.6cddbf05.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";const $={},A=e("\u9996\u9875"),x=t("a",{href:"/"},"\u6D3B\u52A8\u7BA1\u7406",-1),S=e("\u6D3B\u52A8\u5217\u8868"),z=e("\u6D3B\u52A8\u8BE6\u60C5");function D(m,l){const o=d("hl-breadcrumb-item"),n=d("hl-breadcrumb");return u(),b(n,{separator:"/"},{default:r(()=>[a(o,{to:{path:"/"}},{default:r(()=>[A]),_:1}),a(o,null,{default:r(()=>[x]),_:1}),a(o,null,{default:r(()=>[S]),_:1}),a(o,null,{default:r(()=>[z]),_:1})]),_:1})}var I=y($,[["render",D]]),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const C=e("\u9996\u9875"),T=e("\u6D3B\u52A8\u7BA1\u7406"),j=e(" \u6D3B\u52A8\u5217\u8868 "),N=e("\u6D3B\u52A8\u8BE6\u60C5"),P=_({setup(m){return(l,o)=>{const n=d("hl-icon"),c=d("hl-breadcrumb-item"),h=d("hl-breadcrumb");return u(),b(h,null,{icon:r(()=>[a(n,null,{default:r(()=>[a(s(v))]),_:1})]),default:r(()=>[a(c,{to:{path:"/"}},{default:r(()=>[C]),_:1}),a(c,null,{default:r(()=>[T]),_:1}),a(c,null,{icon:r(()=>[a(n,{size:"sm",type:"danger"},{default:r(()=>[a(s(B))]),_:1})]),default:r(()=>[j]),_:1}),a(c,null,{default:r(()=>[N]),_:1})]),_:1})}}});var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const H=t("h1",null,"Breadcrumb \u9762\u5305\u5C51",-1),L=t("p",null,"\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E4B\u524D\u7684\u4EFB\u610F\u9875\u9762\u3002",-1),M=t("div",null,[t("p",null,[e("\u5728 Breadcrumb \u7EC4\u4EF6\u4E2D\u4F7F\u7528 BreadcrumbItem \u7EC4\u4EF6\u8868\u793A\u4ECE\u9996\u9875\u5F00\u59CB\u7684\u6BCF\u4E00\u7EA7\u3002Hongluan UI \u63D0\u4F9B\u4E86\u4E00\u4E2A"),t("code",null,"separator"),e("\u5C5E\u6027\uFF0C\u5728 Breadcrumb \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E\u5B83\u6765\u51B3\u5B9A\u5206\u9694\u7B26\uFF0C\u5B83\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4\u4E3A\u659C\u6760"),t("code",null,"/"),e("\u3002")])],-1),O=t("h2",{id:"tu-biao-fen-ge-fu"},[t("a",{class:"header-anchor",href:"#tu-biao-fen-ge-fu"}),e(" \u56FE\u6807\u5206\u9694\u7B26")],-1),Q=t("p",null,[e("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"icon"),e(" \u63D2\u69FD\uFF0C\u53EF\u4F7F\u7528\u76F8\u5E94\u7684 "),t("code",null,"icon\u56FE\u6807"),e(" \u4F5C\u4E3A\u5206\u9694\u7B26")],-1),R=t("div",null,[t("p",null,[e("\u6CE8\u610F\uFF0C\u4F7F\u7528"),t("code",null,"icon"),e(" \u63D2\u69FD\u5C06\u4F7F "),t("code",null,"separator"),e(" \u8BBE\u7F6E\u5931\u6548")])],-1),V=g('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>separator</td><td>\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u659C\u6760&#39;/&#39;</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td></tr></tbody></table><h2 id="breadcrumb-item-attributes"><a class="header-anchor" href="#breadcrumb-item-attributes"></a> Breadcrumb Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C <code>vue-router</code> \u7684 <code>to</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="breadcrumb-item-slots"><a class="header-anchor" href="#breadcrumb-item-slots"></a> Breadcrumb Item Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8EBreadcrumb icon\u63D2\u69FD</td></tr></tbody></table>',8),q={setup(m){const l="breadcrumb",o={"../../../examples/breadcrumb/basic.vue":w,"../../../examples/breadcrumb/icon.vue":k};return(n,c)=>{const h=d("demo-block"),i=d("right-nav");return u(),p(f,null,[t("section",null,[H,L,a(h,{fs:"",demos:s(o),"component-id":l,"path-name":"breadcrumb/basic","source-code":`<template>
  <hl-breadcrumb separator="/">
    <hl-breadcrumb-item :to="{ path: '/' }">\u9996\u9875</hl-breadcrumb-item>
    <hl-breadcrumb-item><a href="/">\u6D3B\u52A8\u7BA1\u7406</a></hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u5217\u8868</hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u8BE6\u60C5</hl-breadcrumb-item>
  </hl-breadcrumb>
</template>
`},{default:r(()=>[M]),_:1},8,["demos"]),O,Q,a(h,{fs:"",demos:s(o),"component-id":l,"path-name":"breadcrumb/icon","source-code":`<template>
  <hl-breadcrumb>
    <template #icon>
      <hl-icon>
        <two-chevron-right />
      </hl-icon>
    </template>
    <hl-breadcrumb-item :to="{ path: '/' }">\u9996\u9875</hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u7BA1\u7406</hl-breadcrumb-item>
    <hl-breadcrumb-item>
      \u6D3B\u52A8\u5217\u8868
      <template #icon>
        <hl-icon size="sm" type="danger">
          <two-airplay />
        </hl-icon>
      </template>
    </hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u8BE6\u60C5</hl-breadcrumb-item>
  </hl-breadcrumb>
</template>
<script lang="ts" setup>
import { TwoAirplay, TwoChevronRight } from '@hongluan-ui/icons'
<\/script>
`},{default:r(()=>[R]),_:1},8,["demos"]),V]),a(i)],64)}}};export{q as default};
