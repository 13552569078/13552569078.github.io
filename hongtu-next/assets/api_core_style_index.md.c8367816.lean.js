import{_ as D,B as n,f as l,h as o,D as a,z as d,x as s,k as e,u as F,N as h}from"./chunks/framework.5deb65a5.js";const m={name:"MapboxStyleLayerDemo"},b={class:"map-container vw-full vh-full"};function u(p,r,c,t,B,A){const i=n("x-mapbox-style-layer"),y=n("x-map");return l(),o("div",b,[a(y,{center:[115.124368,29.216049],zoom:14,pitch:45},{default:d(()=>[a(i,{"mapbox-style":"/geojson/deck-dark.json"})]),_:1})])}const x=D(m,[["render",u]]),_=`<template>
  <div class="map-container vw-full vh-full">
    <x-map :center="[115.124368, 29.216049]" :zoom="14" :pitch="45">
      <x-mapbox-style-layer
        mapbox-style="/geojson/deck-dark.json"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'MapboxStyleLayerDemo',
}
<\/script>
`,f=s("h1",{id:"样式图层-stylelayer",tabindex:"-1"},[e("样式图层（StyleLayer） "),s("a",{class:"header-anchor",href:"#样式图层-stylelayer","aria-label":'Permalink to "样式图层（StyleLayer）"'},"​")],-1),g=s("p",null,"可加载mapbox标准style文件作为图层进行管理，会调用mapbox的setStyle方法",-1),E={id:"示例",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=h("",11),C=JSON.parse('{"title":"样式图层（StyleLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/style/index.md"}'),v={name:"api/core/style/index.md"},P=Object.assign(v,{setup(p){return(r,c)=>{const t=n("play");return l(),o("div",null,[f,g,s("h2",E,[e("示例 "),a(t,{"source-code":F(_)},null,8,["source-code"]),e(),S]),a(x),q])}}});export{C as __pageData,P as default};
