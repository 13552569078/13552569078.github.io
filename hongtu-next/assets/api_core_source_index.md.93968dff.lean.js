import{_ as x,B as a,f as p,h as D,D as l,z as g,y as c,A as y,x as e,k as t,u as _,N as f}from"./chunks/framework.5deb65a5.js";const E={name:"MapSourceDemo",data(){return{mapCenter:[120.30782359643746,31.49292271319491],mapZoom:11,showLayer:!1,geoJsonSource:{type:"geojson",data:"//bitjjj.github.io/hongtu-next/geojson/wuxi.geojson"}}}},C={style:{height:"400px"},class:"vw-full vh-full"};function S(F,n,i,r,s,L){const u=a("x-tianditu-layer"),d=a("x-polygon-layer"),m=a("x-polyline-layer"),b=a("x-source"),h=a("x-map");return p(),D("div",C,[l(h,{zoom:s.mapZoom,"onUpdate:zoom":n[1]||(n[1]=o=>s.mapZoom=o),center:s.mapCenter,"onUpdate:center":n[2]||(n[2]=o=>s.mapCenter=o)},{default:g(()=>[l(u),s.showLayer?(p(),c(d,{key:0,"source-id":"wuxiSource",opacity:.1,color:"blue"})):y("",!0),s.showLayer?(p(),c(m,{key:1,"source-id":"wuxiSource",color:"blue"})):y("",!0),l(b,{id:"wuxiSource","geo-json-source":s.geoJsonSource,onSourceAdded:n[0]||(n[0]=o=>s.showLayer=!0)},null,8,["geo-json-source"])]),_:1},8,["zoom","center"])])}const q=x(E,[["render",S]]),A=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map
      v-model:zoom="mapZoom"
      v-model:center="mapCenter"
    >
      <x-tianditu-layer />
      <x-polygon-layer
        v-if="showLayer"
        source-id="wuxiSource"
        :opacity=".1"
        color="blue"
      />
      <x-polyline-layer
        v-if="showLayer"
        source-id="wuxiSource"
        color="blue"
      />
      <x-source id="wuxiSource" :geo-json-source="geoJsonSource" @source-added="showLayer=true" />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'MapSourceDemo',
  data() {
    return {
      mapCenter: [120.30782359643746, 31.49292271319491],
      mapZoom: 11,
      showLayer: false,
      geoJsonSource: { 'type': 'geojson', data: '//bitjjj.github.io/hongtu-next/' + 'geojson/wuxi.geojson' },
    }
  },
}
<\/script>
`,B=e("h1",{id:"数据源-source",tabindex:"-1"},[t("数据源（Source） "),e("a",{class:"header-anchor",href:"#数据源-source","aria-label":'Permalink to "数据源（Source）"'},"​")],-1),w=e("p",null,"支持设置GeoJson、TileJson数据",-1),v={id:"示例",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),k=f("",11),J=JSON.parse('{"title":"数据源（Source）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/source/index.md"}'),P={name:"api/core/source/index.md"},O=Object.assign(P,{setup(F){return(n,i)=>{const r=a("play");return p(),D("div",null,[B,w,e("h2",v,[t("示例 "),l(r,{"source-code":_(A)},null,8,["source-code"]),t(),j]),l(q),k])}}});export{J as __pageData,O as default};
