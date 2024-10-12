import{_ as d,B as t,f as r,h as c,D as a,z as u,x as n,k as p,u as b,N as g}from"./chunks/framework.5deb65a5.js";const m={name:"CircleLayerDemo",data(){return{airpotDataSource:[],color:["scalerank",1,"rgb(178,24,43)",2,"rgb(239,138,98)",4,"rgb(253,219,199)",6,"rgb(209,229,240)",8,"rgb(103,169,207)",10,"rgba(33,102,172,0)"],radius:["scalerank",1,10,10,1]}},mounted(){fetch("//hongluan-ui.github.io/hongtu-next/geojson/ne_10m_airports.geojson").then(s=>s.json()).then(s=>{this.airpotDataSource=s.features.map(l=>({coordinates:l.geometry.coordinates.slice(),properties:l.properties}))})}},h={style:{height:"400px"},class:"vw-full vh-full"};function f(s,l,y,o,e,S){const i=t("x-tianditu-layer"),F=t("x-circle-layer"),D=t("x-map");return r(),c("div",h,[a(D,{zoom:1.5,pitch:20},{default:u(()=>[a(i),a(F,{data:e.airpotDataSource,color:e.color,radius:e.radius,"stroke-width":1,"stroke-opacity":1},null,8,["data","color","radius"])]),_:1})])}const x=d(m,[["render",f]]),E=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="1.5" :pitch="20">
      <x-tianditu-layer />
      <x-circle-layer
        :data="airpotDataSource"
        :color="color"
        :radius="radius"
        :stroke-width="1"
        :stroke-opacity="1"
      />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'CircleLayerDemo',
  data() {
    return {
      airpotDataSource: [],
      color: [
        'scalerank',
        1,
        'rgb(178,24,43)',
        2,
        'rgb(239,138,98)',
        4,
        'rgb(253,219,199)',
        6,
        'rgb(209,229,240)',
        8,
        'rgb(103,169,207)',
        10,
        'rgba(33,102,172,0)',
      ],
      radius: ['scalerank', 1, 10, 10, 1],
    }
  },
  mounted() {
    fetch('//hongluan-ui.github.io/hongtu-next/' + 'geojson/ne_10m_airports.geojson')
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
`,_=n("h1",{id:"圆图层-circlelayer",tabindex:"-1"},[p("圆图层（CircleLayer） "),n("a",{class:"header-anchor",href:"#圆图层-circlelayer","aria-label":'Permalink to "圆图层（CircleLayer）"'},"​")],-1),C=n("p",null,"circle layer，半径较小时也可当作点使用",-1),B={id:"示例",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=g("",11),j=JSON.parse('{"title":"圆图层（CircleLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/circle-layer/index.md"}'),k={name:"api/core/circle-layer/index.md"},P=Object.assign(k,{setup(s){return(l,y)=>{const o=t("play");return r(),c("div",null,[_,C,n("h2",B,[p("示例 "),a(o,{"source-code":b(E)},null,8,["source-code"]),p(),A]),a(x),q])}}});export{j as __pageData,P as default};
