import{_ as y,B as t,f as e,h as o,D as s,z as h,x as a,k as n,u as F,N as u}from"./chunks/framework.5deb65a5.js";const m={name:"ScaleDemo"},b={style:{height:"400px"},class:"vw-full vh-full"};function x(p,r,c,l,A,C){const i=t("x-tianditu-layer"),d=t("x-scale-control"),D=t("x-map");return e(),o("div",b,[s(D,null,{default:h(()=>[s(i),s(d,{"max-width":88,position:"top-right"})]),_:1})])}const _=y(m,[["render",x]]),f=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <x-tianditu-layer />
      <x-scale-control :max-width="88" position="top-right" />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'ScaleDemo',
}
<\/script>
`,g=a("h1",{id:"比例尺控件-scalecontrol",tabindex:"-1"},[n("比例尺控件（ScaleControl） "),a("a",{class:"header-anchor",href:"#比例尺控件-scalecontrol","aria-label":'Permalink to "比例尺控件（ScaleControl）"'},"​")],-1),E=a("p",null,"比例尺组件，用于显示图上距离和实际距离的比值",-1),B={id:"示例",tabindex:"-1"},S=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),v=u("",11),T=JSON.parse('{"title":"比例尺控件（ScaleControl）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map-tool/scale/index.md"}'),q={name:"api/core/map-tool/scale/index.md"},k=Object.assign(q,{setup(p){return(r,c)=>{const l=t("play");return e(),o("div",null,[g,E,a("h2",B,[n("示例 "),s(l,{"source-code":F(f)},null,8,["source-code"]),n(),S]),s(_),v])}}});export{T as __pageData,k as default};
