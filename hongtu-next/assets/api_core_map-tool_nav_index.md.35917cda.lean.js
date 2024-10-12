import{_ as d,B as t,f as e,h as o,D as s,z as F,x as a,k as n,u as h,N as u}from"./chunks/framework.5deb65a5.js";const m={name:"NavigationDemo"},b={style:{height:"400px"},class:"vw-full vh-full"};function g(p,r,c,l,A,P){const i=t("x-tianditu-layer"),D=t("x-navigation-control"),y=t("x-map");return e(),o("div",b,[s(y,{bearing:30},{default:F(()=>[s(i),s(D,{"show-compass":!0,"show-zoom":!0,position:"top-right"})]),_:1})])}const _=d(m,[["render",g]]),x=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :bearing="30">
      <x-tianditu-layer />
      <x-navigation-control :show-compass="true" :show-zoom="true" position="top-right" />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'NavigationDemo',
}
<\/script>
`,f=a("h1",{id:"指南针控件-navigationcontrol",tabindex:"-1"},[n("指南针控件（NavigationControl） "),a("a",{class:"header-anchor",href:"#指南针控件-navigationcontrol","aria-label":'Permalink to "指南针控件（NavigationControl）"'},"​")],-1),v=a("p",null,"导航控件组件，包括缩放按钮和一个指南针.",-1),E={id:"示例",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),B=u("",11),N=JSON.parse('{"title":"指南针控件（NavigationControl）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map-tool/nav/index.md"}'),C={name:"api/core/map-tool/nav/index.md"},w=Object.assign(C,{setup(p){return(r,c)=>{const l=t("play");return e(),o("div",null,[f,v,a("h2",E,[n("示例 "),s(l,{"source-code":h(x)},null,8,["source-code"]),n(),q]),s(_),B])}}});export{N as __pageData,w as default};
