import{_ as u,B as l,f as c,h as y,D as n,z as b,x as s,k as a,u as d,N as g}from"./chunks/framework.5deb65a5.js";const m={name:"PolygonLayerDemo",data(){return{center:[116.17381,39.92155464],polygon:[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311],[116.3234327392287,39.892836286211754]]}}},x={style:{height:"400px"},class:"vw-full vh-full"};function h(D,F,i,t,e,f){const o=l("x-tianditu-layer"),p=l("x-buffer-polygon-layer"),r=l("x-map");return c(),y("div",x,[n(r,{zoom:10,center:e.center,glyphs:"//hongluan-ui.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(o),n(p,{polygon:e.polygon,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0},null,8,["polygon"])]),_:1},8,["center","glyphs"])])}const _=u(m,[["render",h]]),C={name:"PolygonLayerDemo",data(){return{center:[116.17381,39.92155464]}}},E={style:{height:"400px"},class:"vw-full vh-full"};function q(D,F,i,t,e,f){const o=l("x-tianditu-layer"),p=l("x-buffer-polygon-layer"),r=l("x-map");return c(),y("div",E,[n(r,{zoom:10,center:e.center,glyphs:"//hongluan-ui.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(o),n(p,{manual:!0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1},8,["center","glyphs"])])}const A=u(C,[["render",q]]),B=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="10" :center="center" :glyphs="'//hongluan-ui.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-polygon-layer
        :polygon="polygon"
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
      />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'PolygonLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
      polygon: [
        [116.17381, 39.92155464],
        [116.25105956968257, 40.02398993628292],
        [116.31591012802686, 39.96769599504311],
        [116.3234327392287, 39.892836286211754],
      ],
    }
  },
}
<\/script>
`,v=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="10" :center="center" :glyphs="'//hongluan-ui.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-polygon-layer
        :manual="true"
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
      />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'PolygonLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
    }
  },
}
<\/script>
`,k=s("h1",{id:"多边形缓冲区-bufferpolygonlayer",tabindex:"-1"},[a("多边形缓冲区（BufferPolygonLayer） "),s("a",{class:"header-anchor",href:"#多边形缓冲区-bufferpolygonlayer","aria-label":'Permalink to "多边形缓冲区（BufferPolygonLayer）"'},"​")],-1),P=s("p",null,"支持拖拽改变位置，拖拽改变大小，实时显示面积等功能",-1),S={id:"示例",tabindex:"-1"},z=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),T=g("",2),O={id:"手工模式示例",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#手工模式示例","aria-label":'Permalink to "手工模式示例 <play :source-code="DemoManualSource" />"'},"​",-1),R=s("ul",null,[s("li",null,"单击地图画点"),s("li",null,"Esc，Del，Backspace键，删除前一个点"),s("li",null,"双击或者Enter结束手工模式"),s("li",null,"手工模式下，polygon数据无效"),s("li",null,"不支持动态改变manual参数值")],-1),N=g("",11),w=JSON.parse('{"title":"多边形缓冲区（BufferPolygonLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/buffer/polygon/index.md"}'),V={name:"api/core/buffer/polygon/index.md"},I=Object.assign(V,{setup(D){return(F,i)=>{const t=l("play");return c(),y("div",null,[k,P,s("h2",S,[a("示例 "),n(t,{"source-code":d(B)},null,8,["source-code"]),a(),z]),n(_),T,s("h2",O,[a("手工模式示例 "),n(t,{"source-code":d(v)},null,8,["source-code"]),a(),L]),R,n(A),N])}}});export{w as __pageData,I as default};
