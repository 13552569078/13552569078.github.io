import{_ as F,B as l,f as o,h as r,D as t,z as u,x as s,k as a,u as b,N as f}from"./chunks/framework.5deb65a5.js";const g={name:"SectorLayerDemo",data(){return{center:[116.17381,39.92155464],radius:10}}},x={style:{height:"400px"},class:"vw-full vh-full"};function h(p,c,d,n,e,k){const y=l("x-tianditu-layer"),i=l("x-buffer-sector-layer"),D=l("x-map");return o(),r("div",x,[t(D,{zoom:10,center:e.center,glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:u(()=>[t(y),t(i,{center:e.center,radius:e.radius,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"start-angle":315,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0},null,8,["center","radius"])]),_:1},8,["center","glyphs"])])}const m=F(g,[["render",h]]),_=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="10" :center="center" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-sector-layer
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        :start-angle="315"
        :closable="true"
        :countable="true"
        :draggable="true"
        :resizable="true"
        :rotatable="true"
      />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'SectorLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
      radius: 10,
    }
  },
}
<\/script>
`,E=s("h1",{id:"扇形缓冲区-buffersectorlayer",tabindex:"-1"},[a("扇形缓冲区（BufferSectorLayer） "),s("a",{class:"header-anchor",href:"#扇形缓冲区-buffersectorlayer","aria-label":'Permalink to "扇形缓冲区（BufferSectorLayer）"'},"​")],-1),C=s("p",null,"支持拖拽改变位置，拖拽改变大小，实时显示面积等功能",-1),q={id:"示例",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),B=f("",11),P=JSON.parse('{"title":"扇形缓冲区（BufferSectorLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/buffer/sector/index.md"}'),S={name:"api/core/buffer/sector/index.md"},z=Object.assign(S,{setup(p){return(c,d)=>{const n=l("play");return o(),r("div",null,[E,C,s("h2",q,[a("示例 "),t(n,{"source-code":b(_)},null,8,["source-code"]),a(),A]),t(m),B])}}});export{P as __pageData,z as default};
