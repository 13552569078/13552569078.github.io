import{_ as y,B as e,f as n,h as o,D as t,z as D,x as s,k as l,u as F,N as h}from"./chunks/framework.5deb65a5.js";const g={name:"WMSLayerDemo"},m={style:{height:"400px"},class:"vw-full vh-full"};function u(r,p,d,a,q,C){const c=e("x-wms-layer"),i=e("x-map");return n(),o("div",m,[t(i,{center:[116.38745,39.91266],zoom:14,pitch:50},{default:D(()=>[t(c,{url:"http://10.255.134.231:8088/geoserver/cestc/wms",layers:"cestc:beijing-building-3857"})]),_:1})])}const x=y(g,[["render",u]]),f=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[116.38745, 39.91266]" :zoom="14" :pitch="50">
      <x-wms-layer
        url="http://10.255.134.231:8088/geoserver/cestc/wms"
        layers="cestc:beijing-building-3857"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'WMSLayerDemo',
}
<\/script>
`,b=s("h1",{id:"wms图层-wmslayer",tabindex:"-1"},[l("WMS图层（WMSLayer） "),s("a",{class:"header-anchor",href:"#wms图层-wmslayer","aria-label":'Permalink to "WMS图层（WMSLayer）"'},"​")],-1),_={id:"示例",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),S=h("",11),A=JSON.parse('{"title":"WMS图层（WMSLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/wms-layer/index.md"}'),v={name:"api/core/wms-layer/index.md"},B=Object.assign(v,{setup(r){return(p,d)=>{const a=e("play");return n(),o("div",null,[b,s("h2",_,[l("示例 "),t(a,{"source-code":F(f)},null,8,["source-code"]),l(),E]),t(x),S])}}});export{A as __pageData,B as default};
