import{_ as u,B as a,f as c,h as y,D as n,z as b,x as s,k as l,u as d,N as g}from"./chunks/framework.5deb65a5.js";const m={name:"LineLayerDemo",data(){return{center:[116.17381,39.92155464],lineString:[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311],[116.3234327392287,39.892836286211754]]}}},x={style:{height:"400px"},class:"vw-full vh-full"};function h(D,i,F,t,e,f){const o=a("x-tianditu-layer"),p=a("x-buffer-line-layer"),r=a("x-map");return c(),y("div",x,[n(r,{zoom:10,center:e.center,glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(o),n(p,{"line-string":e.lineString,radius:2,"border-color":"red","border-opacity":.5,"background-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0},null,8,["line-string"])]),_:1},8,["center","glyphs"])])}const _=u(m,[["render",h]]),C={name:"LineLayerDemo",data(){return{center:[116.17381,39.92155464]}}},E={style:{height:"400px"},class:"vw-full vh-full"};function q(D,i,F,t,e,f){const o=a("x-tianditu-layer"),p=a("x-buffer-line-layer"),r=a("x-map");return c(),y("div",E,[n(r,{zoom:10,center:e.center,glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[n(o),n(p,{radius:2,"line-string":[],manual:!0,"border-color":"red","border-opacity":.5,"background-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0})]),_:1},8,["center","glyphs"])])}const A=u(C,[["render",q]]),B=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="10" :center="center" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-line-layer
        :line-string="lineString"
        :radius="2"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
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
  name: 'LineLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
      lineString: [
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
    <x-map :zoom="10" :center="center" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-line-layer
        :radius="2"
        :line-string="[]"
        :manual="true"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
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
  name: 'LineLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
    }
  },
}
<\/script>
`,S=s("h1",{id:"线型缓冲区-bufferlinelayer",tabindex:"-1"},[l("线型缓冲区（BufferLineLayer） "),s("a",{class:"header-anchor",href:"#线型缓冲区-bufferlinelayer","aria-label":'Permalink to "线型缓冲区（BufferLineLayer）"'},"​")],-1),k=s("p",null,"支持拖拽改变位置，拖拽改变大小，实时显示面积等功能",-1),z={id:"示例",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),P=g("",2),T={id:"手工模式示例",tabindex:"-1"},O=s("a",{class:"header-anchor",href:"#手工模式示例","aria-label":'Permalink to "手工模式示例 <play :source-code="DemoManualSource" />"'},"​",-1),j=s("ul",null,[s("li",null,"单击地图画点"),s("li",null,"Esc，Del，Backspace键，删除前一个点"),s("li",null,"双击或者Enter结束手工模式"),s("li",null,"手工模式下，lineString数据无效"),s("li",null,"不支持动态改变manual参数值")],-1),R=g("",11),$=JSON.parse('{"title":"线型缓冲区（BufferLineLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/buffer/line/index.md"}'),N={name:"api/core/buffer/line/index.md"},w=Object.assign(N,{setup(D){return(i,F)=>{const t=a("play");return c(),y("div",null,[S,k,s("h2",z,[l("示例 "),n(t,{"source-code":d(B)},null,8,["source-code"]),l(),L]),n(_),P,s("h2",T,[l("手工模式示例 "),n(t,{"source-code":d(v)},null,8,["source-code"]),l(),O]),j,n(A),R])}}});export{$ as __pageData,w as default};
