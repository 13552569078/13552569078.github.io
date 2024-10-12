import{_ as d,B as n,f as p,h as o,D as s,z as u,x as a,k as l,u as h,N as m}from"./chunks/framework.5deb65a5.js";const b={name:"ImageLayerDemo",data(){return{url:"//bitjjj.github.io/hongtu-next/images/cestc.jpg",coordinates:[[116.3594627380371,39.93632920085673],[116.4228057861328,39.93632920085673],[116.4228057861328,39.89735776851477],[116.3594627380371,39.89735776851477]]}}},g={style:{height:"400px"},class:"vw-full vh-full"};function _(r,c,i,t,e,S){const y=n("x-tianditu-layer"),F=n("x-image-layer"),D=n("x-map");return p(),o("div",g,[s(D,{zoom:12,pitch:40},{default:u(()=>[s(y),s(F,{url:e.url,coordinates:e.coordinates},null,8,["url","coordinates"])]),_:1})])}const x=d(b,[["render",_]]),f=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="12" :pitch="40">
      <x-tianditu-layer />
      <x-image-layer :url="url" :coordinates="coordinates" />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'ImageLayerDemo',
  data() {
    return {
      url: '//bitjjj.github.io/hongtu-next/' + 'images/cestc.jpg',
      coordinates: [
        [116.3594627380371, 39.93632920085673],
        [116.4228057861328, 39.93632920085673],
        [116.4228057861328, 39.89735776851477],
        [116.3594627380371, 39.89735776851477],
      ],
    }
  },
}
<\/script>
`,C=a("h1",{id:"图片图层-imagelayer",tabindex:"-1"},[l("图片图层（ImageLayer） "),a("a",{class:"header-anchor",href:"#图片图层-imagelayer","aria-label":'Permalink to "图片图层（ImageLayer）"'},"​")],-1),E=a("p",null,"图片图层，可以将一张图片（png/gif等）按照目标经纬度范围贴到地图上",-1),B={id:"示例",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),A=m("",11),T=JSON.parse('{"title":"图片图层（ImageLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-layer/index.md"}'),v={name:"api/core/image-layer/index.md"},k=Object.assign(v,{setup(r){return(c,i)=>{const t=n("play");return p(),o("div",null,[C,E,a("h2",B,[l("示例 "),s(t,{"source-code":h(f)},null,8,["source-code"]),l(),q]),s(x),A])}}});export{T as __pageData,k as default};
