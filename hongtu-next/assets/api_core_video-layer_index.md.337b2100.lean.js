import{_ as d,B as n,f as o,h as p,D as s,z as u,x as a,k as l,u as h,N as b}from"./chunks/framework.5deb65a5.js";const m={name:"VideoLayerDemo",data(){return{urls:["//hongluan-ui.github.io/hongtu-next/videos/cestc-demo1.mp4"],coordinates:[[116.3594627380371,39.93632920085673],[116.4228057861328,39.93632920085673],[116.4228057861328,39.89735776851477],[116.3594627380371,39.89735776851477]]}}},_={style:{height:"400px"},class:"vw-full vh-full"};function x(r,c,i,t,e,S){const y=n("x-tianditu-layer"),F=n("x-video-layer"),D=n("x-map");return o(),p("div",_,[s(D,{zoom:12,pitch:40},{default:u(()=>[s(y),s(F,{urls:e.urls,coordinates:e.coordinates},null,8,["urls","coordinates"])]),_:1})])}const f=d(m,[["render",x]]),g=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="12" :pitch="40">
      <x-tianditu-layer />
      <x-video-layer :urls="urls" :coordinates="coordinates" />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'VideoLayerDemo',
  data() {
    return {
      urls: ['//hongluan-ui.github.io/hongtu-next/' + 'videos/cestc-demo1.mp4'],
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
`,C=a("h1",{id:"视频图层-videolayer",tabindex:"-1"},[l("视频图层（VideoLayer） "),a("a",{class:"header-anchor",href:"#视频图层-videolayer","aria-label":'Permalink to "视频图层（VideoLayer）"'},"​")],-1),E=a("p",null,"视频图层，可以将视频按照目标经纬度范围贴到地图上",-1),v={id:"示例",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=b("",11),V=JSON.parse('{"title":"视频图层（VideoLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/video-layer/index.md"}'),A={name:"api/core/video-layer/index.md"},T=Object.assign(A,{setup(r){return(c,i)=>{const t=n("play");return o(),p("div",null,[C,E,a("h2",v,[l("示例 "),s(t,{"source-code":h(g)},null,8,["source-code"]),l(),B]),s(f),q])}}});export{V as __pageData,T as default};
