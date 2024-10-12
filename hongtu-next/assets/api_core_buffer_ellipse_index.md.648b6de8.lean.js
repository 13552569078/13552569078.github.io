import{_ as F,B as l,f as o,h as p,D as t,z as u,x as s,k as e,u as b,N as f}from"./chunks/framework.5deb65a5.js";const g={name:"EllipseLayerDemo",data(){return{center:[116.17381,39.92155464],radius:10}}},x={style:{height:"400px"},class:"vw-full vh-full"};function m(r,c,d,n,a,k){const y=l("x-tianditu-layer"),i=l("x-buffer-ellipse-layer"),D=l("x-map");return o(),p("div",x,[t(D,{zoom:10,center:a.center,glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:u(()=>[t(y),t(i,{center:a.center,"x-semi-axis":10,"y-semi-axis":5,angle:0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0},null,8,["center"])]),_:1},8,["center","glyphs"])])}const h=F(g,[["render",m]]),E=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="10" :center="center" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-ellipse-layer
        :center="center"
        :x-semi-axis="10"
        :y-semi-axis="5"
        :angle="0"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
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
  name: 'EllipseLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
      radius: 10,
    }
  },
}
<\/script>
`,_=s("h1",{id:"椭圆缓冲区-bufferellipselayer",tabindex:"-1"},[e("椭圆缓冲区（BufferEllipseLayer） "),s("a",{class:"header-anchor",href:"#椭圆缓冲区-bufferellipselayer","aria-label":'Permalink to "椭圆缓冲区（BufferEllipseLayer）"'},"​")],-1),C=s("p",null,"支持拖拽改变位置，拖拽改变大小，实时显示面积等功能",-1),q={id:"示例",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),B=f("",11),P=JSON.parse('{"title":"椭圆缓冲区（BufferEllipseLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/buffer/ellipse/index.md"}'),S={name:"api/core/buffer/ellipse/index.md"},z=Object.assign(S,{setup(r){return(c,d)=>{const n=l("play");return o(),p("div",null,[_,C,s("h2",q,[e("示例 "),t(n,{"source-code":b(E)},null,8,["source-code"]),e(),A]),t(h),B])}}});export{P as __pageData,z as default};
