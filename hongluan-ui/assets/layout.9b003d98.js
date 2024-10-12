var j=Object.defineProperty;var b=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?j(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))w.call(a,e)&&g(t,e,a[e]);if(b)for(var e of b(a))L.call(a,e)&&g(t,e,a[e]);return t};import{H as m,L as T,W as $,Q as n,X as h,P as i,a1 as P,S as E,o as Q,aR as y}from"./vue.85e091e9.js";import{_ as W}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const X={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:t,resolveComponent:a,withCtx:e,createVNode:u,openBlock:r,createBlock:c}=y,d=t("header"),o=t("sub-header"),l=t("aside"),s=t("main"),f=t("footer");function x(A,C){const _=a("hl-header"),B=a("hl-sub-header"),F=a("hl-aside"),D=a("hl-main"),N=a("hl-container"),V=a("hl-footer"),v=a("hl-layout");return r(),c(v,{class:"dom-area","data-name":"\u5916\u5C42\u5BB9\u5668"},{default:e(()=>[u(_,{class:"dom-area","data-name":"\u5934\u90E8"},{default:e(()=>[d]),_:1}),u(B,{class:"dom-area","data-name":"\u5B50\u7EA7\u5934\u90E8"},{default:e(()=>[o]),_:1}),u(N,{class:"dom-area","data-name":"\u5BB9\u5668"},{default:e(()=>[u(F,{class:"dom-area","data-name":"\u4FA7\u8FB9\u680F"},{default:e(()=>[l]),_:1}),u(D,{class:"dom-area","data-name":"\u4E3B\u4F53\u5185\u5BB9",style:{"min-height":"300px",height:"300px"}},{default:e(()=>[s]),_:1})]),_:1}),u(V,{class:"dom-area","data-name":"\u5E95\u90E8"},{default:e(()=>[f]),_:1})]),_:1})}return p({render:x},{})}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:a,withCtx:e,createVNode:u,openBlock:r,createBlock:c}=y,d=t("header"),o=t("aside"),l=t("main");function s(x,k){const A=a("hl-header"),C=a("hl-aside"),_=a("hl-main"),B=a("hl-container"),F=a("hl-layout");return r(),c(F,{class:"dom-area","data-name":"\u5916\u5C42\u5BB9\u5668"},{default:e(()=>[u(A,{class:"dom-area","data-name":"\u5934\u90E8"},{default:e(()=>[d]),_:1}),u(B,{class:"dom-area","data-name":"\u5BB9\u5668"},{default:e(()=>[u(C,{class:"dom-area","data-name":"\u4FA7\u8FB9\u680F"},{default:e(()=>[o]),_:1}),u(_,{class:"dom-area","data-name":"\u4E3B\u4F53\u5185\u5BB9",style:{"min-height":"300px",height:"300px"}},{default:e(()=>[l]),_:1})]),_:1})]),_:1})}return p({render:s},{})}()}},H=n("h1",null,"Layout \u5E03\u5C40",-1),R=n("p",null,"\u7528\u4E8E\u5E03\u5C40\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u5FEB\u901F\u642D\u5EFA\u9875\u9762\u7684\u57FA\u672C\u7ED3\u6784\uFF1A",-1),S=n("pre",null,[n("code",{class:"html"},`<template>
  <hl-layout class="dom-area" data-name="\u5916\u5C42\u5BB9\u5668">
    <hl-header class="dom-area" data-name="\u5934\u90E8">header</hl-header>
    <hl-sub-header class="dom-area" data-name="\u5B50\u7EA7\u5934\u90E8"
      >sub-header</hl-sub-header
    >
    <hl-container class="dom-area" data-name="\u5BB9\u5668">
      <hl-aside class="dom-area" data-name="\u4FA7\u8FB9\u680F">aside</hl-aside>
      <hl-main
        class="dom-area"
        data-name="\u4E3B\u4F53\u5185\u5BB9"
        style="min-height: 300px; height: 300px"
        >main</hl-main
      >
    </hl-container>
    <hl-footer class="dom-area" data-name="\u5E95\u90E8">footer</hl-footer>
  </hl-layout>
</template>

`)],-1),q=n("h2",{id:"ke-chai-jie-jie-gou"},[n("a",{class:"header-anchor",href:"#ke-chai-jie-jie-gou"}),E(" \u53EF\u62C6\u89E3\u7ED3\u6784")],-1),z=n("p",null,[E("\u4F60\u53EF\u4EE5\u79FB\u9664 "),n("code",null,"layout"),E(" \u4E0B\u7684\u4EFB\u610F\u5E03\u5C40\u7EC4\u4EF6\u3002\u4EE5\u65B9\u4FBF\u4F60\u8BBE\u8BA1\u51FA\u4E30\u5BCC\u7684\u9875\u9762\u7ED3\u6784\u3002")],-1),G=n("pre",null,[n("code",{class:"html"},`<template>
  <hl-layout class="dom-area" data-name="\u5916\u5C42\u5BB9\u5668">
    <hl-header class="dom-area" data-name="\u5934\u90E8">header</hl-header>
    <hl-container class="dom-area" data-name="\u5BB9\u5668">
      <hl-aside class="dom-area" data-name="\u4FA7\u8FB9\u680F">aside</hl-aside>
      <hl-main
        class="dom-area"
        data-name="\u4E3B\u4F53\u5185\u5BB9"
        style="min-height: 300px; height: 300px"
        >main</hl-main
      >
    </hl-container>
  </hl-layout>
</template>

`)],-1),I=Q('<h2 id="gong-neng-yan-shi"><a class="header-anchor" href="#gong-neng-yan-shi"></a> \u529F\u80FD\u6F14\u793A</h2><p>hongluan-pro \u662F\u4F7F\u7528 hongluan-ui\u5236\u4F5C\u7684\u4E00\u5957\u4F01\u4E1A\u7EA7\u4E1A\u52A1\u4E2D\u53F0\u754C\u9762\u6A21\u7248\u3002<a href="http://pro.front.etcc.group/">\u5B8C\u6574\u5730\u5740</a></p><h2 id="layout-attributes"><a class="header-anchor" href="#layout-attributes"></a> Layout Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>boxed</td><td>\u9875\u9762\u5C45\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>fixed-aside</td><td>\u4FA7\u8FB9\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>fixed-header</td><td>\u9876\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>fixed-sub-header</td><td>\u4E8C\u7EA7\u9876\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>fixed-footer</td><td>\u5E95\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>full-header</td><td>\u9876\u680F\u662F\u5426\u6EE1\u5BBD</td><td>boolean</td><td>false</td></tr><tr><td>full-sub-header</td><td>\u4E8C\u7EA7\u9876\u680F\u662F\u5426\u6EE1\u5BBD</td><td>boolean</td><td>false</td></tr><tr><td>full-footer</td><td>\u5E95\u680F\u662F\u5426\u6EE1\u5BBD</td><td>boolean</td><td>false</td></tr></tbody></table>',4);function J(t,a,e,u,r,c){const d=m("hl-demo0"),o=m("demo-block"),l=m("hl-demo1"),s=m("right-nav");return T(),$(P,null,[n("section",null,[H,R,h(o,{"source-code":`<template>
  <hl-layout class="dom-area" data-name="\u5916\u5C42\u5BB9\u5668">
    <hl-header class="dom-area" data-name="\u5934\u90E8">header</hl-header>
    <hl-sub-header class="dom-area" data-name="\u5B50\u7EA7\u5934\u90E8"
      >sub-header</hl-sub-header
    >
    <hl-container class="dom-area" data-name="\u5BB9\u5668">
      <hl-aside class="dom-area" data-name="\u4FA7\u8FB9\u680F">aside</hl-aside>
      <hl-main
        class="dom-area"
        data-name="\u4E3B\u4F53\u5185\u5BB9"
        style="min-height: 300px; height: 300px"
        >main</hl-main
      >
    </hl-container>
    <hl-footer class="dom-area" data-name="\u5E95\u90E8">footer</hl-footer>
  </hl-layout>
</template>

`},{source:i(()=>[h(d)]),highlight:i(()=>[S]),_:1}),q,z,h(o,{"source-code":`<template>
  <hl-layout class="dom-area" data-name="\u5916\u5C42\u5BB9\u5668">
    <hl-header class="dom-area" data-name="\u5934\u90E8">header</hl-header>
    <hl-container class="dom-area" data-name="\u5BB9\u5668">
      <hl-aside class="dom-area" data-name="\u4FA7\u8FB9\u680F">aside</hl-aside>
      <hl-main
        class="dom-area"
        data-name="\u4E3B\u4F53\u5185\u5BB9"
        style="min-height: 300px; height: 300px"
        >main</hl-main
      >
    </hl-container>
  </hl-layout>
</template>

`},{source:i(()=>[h(l)]),highlight:i(()=>[G]),_:1}),I]),h(s)],64)}var aa=W(X,[["render",J]]);export{aa as default};
