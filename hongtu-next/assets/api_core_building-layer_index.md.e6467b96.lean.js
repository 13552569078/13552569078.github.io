import{_ as D,B as s,f as n,h as o,D as t,z as F,x as e,k as a,u,N as g}from"./chunks/framework.5deb65a5.js";const h={name:"BuildingLayerDemo"},f={style:{height:"400px"},class:"vw-full vh-full"};function x(r,p,i,l,S,A){const c=s("x-tianditu-layer"),d=s("x-building-layer"),y=s("x-map");return n(),o("div",f,[t(y,{center:[116.194322,39.925238],zoom:15,pitch:50},{default:F(()=>[t(c,{types:["vec","cva"]}),t(d,{"height-info-field":"Floor",magnification:5,"geo-json-data-source":"http://10.255.134.231:8088/geoserver/cestc/ows?service=WFS&maxFeatures=60000&version=1.0.0&request=GetFeature&typeName=cestc:beijing-building-4326&outputFormat=application/json"})]),_:1})])}const m=D(h,[["render",x]]),b=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[116.194322,39.925238]" :zoom="15" :pitch="50">
      <x-tianditu-layer :types="['vec','cva']" />
      <x-building-layer
        height-info-field="Floor"
        :magnification="5"
        geo-json-data-source="http://10.255.134.231:8088/geoserver/cestc/ows?service=WFS&maxFeatures=60000&version=1.0.0&request=GetFeature&typeName=cestc:beijing-building-4326&outputFormat=application/json"
      />
    </x-map>
  </div>
</template>
<script>
export default{
  name:'BuildingLayerDemo',
}
<\/script>
`,_=e("h1",{id:"建筑物图层-buildinglayer",tabindex:"-1"},[a("建筑物图层（BuildingLayer） "),e("a",{class:"header-anchor",href:"#建筑物图层-buildinglayer","aria-label":'Permalink to "建筑物图层（BuildingLayer）"'},"​")],-1),v=e("p",null,"建筑物图层，模拟建筑物3d效果，需要建筑物源数据以及层高字段信息 数据量较大时建议使用矢量切片方式",-1),E={id:"示例",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),C=g("",11),P=JSON.parse('{"title":"建筑物图层（BuildingLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/building-layer/index.md"}'),B={name:"api/core/building-layer/index.md"},k=Object.assign(B,{setup(r){return(p,i)=>{const l=s("play");return n(),o("div",null,[_,v,e("h2",E,[a("示例 "),t(l,{"source-code":u(b)},null,8,["source-code"]),a(),q]),t(m),C])}}});export{P as __pageData,k as default};
