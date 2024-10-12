import{_ as y,B as e,f as n,h as o,D as t,z as D,x as s,k as a,u as h,N as u}from"./chunks/framework.5deb65a5.js";const F={name:"UrlTemplateLayerDemo"},m={style:{height:"400px"},class:"vw-full vh-full"};function x(r,p,c,l,A,B){const i=e("x-url-template-layer"),d=e("x-map");return n(),o("div",m,[t(d,{zoom:2},{default:D(()=>[t(i,{url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=R8rAisQ0L6EL1wW8JVYQ"})]),_:1})])}const b=y(F,[["render",x]]),f=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="2">
      <x-url-template-layer
        url="https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=R8rAisQ0L6EL1wW8JVYQ"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'UrlTemplateLayerDemo',
}
<\/script>
`,g=s("h1",{id:"url模板图层-urltemplatelayer",tabindex:"-1"},[a("Url模板图层（UrlTemplateLayer） "),s("a",{class:"header-anchor",href:"#url模板图层-urltemplatelayer","aria-label":'Permalink to "Url模板图层（UrlTemplateLayer）"'},"​")],-1),_={id:"示例",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=u("",11),T=JSON.parse('{"title":"Url模板图层（UrlTemplateLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/url-layer/index.md"}'),v={name:"api/core/url-layer/index.md"},P=Object.assign(v,{setup(r){return(p,c)=>{const l=e("play");return n(),o("div",null,[g,s("h2",_,[a("示例 "),t(l,{"source-code":h(f)},null,8,["source-code"]),a(),E]),t(b),q])}}});export{T as __pageData,P as default};
