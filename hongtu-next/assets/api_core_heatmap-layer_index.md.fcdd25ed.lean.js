import{_ as d,B as l,f as r,h as c,D as a,z as u,x as n,k as p,u as b,N as m}from"./chunks/framework.5deb65a5.js";const g={name:"HeatmapLayerDemo",data(){return{airpotDataSource:[],color:[0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",1,"rgb(178,24,43)"],radius:[0,5,1,10,14,80]}},mounted(){fetch("//bitjjj.github.io/hongtu-next/geojson/ne_10m_airports.geojson").then(s=>s.json()).then(s=>{this.airpotDataSource=s.features.map(t=>({coordinates:t.geometry.coordinates.slice(),properties:t.properties}))})}},h={style:{height:"400px"},class:"vw-full vh-full"};function f(s,t,y,o,e,v){const F=l("x-tianditu-layer"),i=l("x-heatmap-layer"),D=l("x-map");return r(),c("div",h,[a(D,{zoom:1.5,pitch:20},{default:u(()=>[a(F),a(i,{data:e.airpotDataSource,color:e.color,radius:e.radius},null,8,["data","color","radius"])]),_:1})])}const x=d(g,[["render",f]]),_=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="1.5" :pitch="20">
      <x-tianditu-layer />
      <x-heatmap-layer
        :data="airpotDataSource"
        :color="color"
        :radius="radius"
      />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'HeatmapLayerDemo',
  data() {
    return {
      airpotDataSource: [],
      color: [
        0,
        'rgba(33,102,172,0)',
        0.2,
        'rgb(103,169,207)',
        0.4,
        'rgb(209,229,240)',
        0.6,
        'rgb(253,219,199)',
        0.8,
        'rgb(239,138,98)',
        1,
        'rgb(178,24,43)',
      ],
      radius: [0, 5, 1, 10, 14, 80],
    }
  },
  mounted() {
    fetch('//bitjjj.github.io/hongtu-next/' + 'geojson/ne_10m_airports.geojson')
      .then(res => res.json())
      .then(data => {
        this.airpotDataSource = data.features.map(feature => {
          return {
            coordinates: feature.geometry.coordinates.slice(),
            properties: feature.properties,
          }
        })
      })
  },
}
<\/script>
`,E=n("h1",{id:"热力图图层-heatmaplayer",tabindex:"-1"},[p("热力图图层（HeatmapLayer） "),n("a",{class:"header-anchor",href:"#热力图图层-heatmaplayer","aria-label":'Permalink to "热力图图层（HeatmapLayer）"'},"​")],-1),B=n("p",null,"热力图图层 本组件仅适用与展示与密度强相关的数据，如企业分布，油罐分布等；其他数据如温度、aqi污染值等不适合用此图层展示 不支持鼠标事件",-1),C={id:"示例",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=m("",11),P=JSON.parse('{"title":"热力图图层（HeatmapLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/heatmap-layer/index.md"}'),S={name:"api/core/heatmap-layer/index.md"},k=Object.assign(S,{setup(s){return(t,y)=>{const o=l("play");return r(),c("div",null,[E,B,n("h2",C,[p("示例 "),a(o,{"source-code":b(_)},null,8,["source-code"]),p(),A]),a(x),q])}}});export{P as __pageData,k as default};
