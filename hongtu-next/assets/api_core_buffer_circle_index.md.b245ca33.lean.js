import{_ as d,B as l,f as c,h as D,D as s,z as b,x as n,k as t,u,N as f}from"./chunks/framework.5deb65a5.js";const x={name:"CircleLayerDemo",data(){return{center:[116.17381,39.92155464],radius:10}}},h={style:{height:"400px"},class:"vw-full vh-full"};function E(y,F,i,e,a,g){const o=l("x-tianditu-layer"),p=l("x-buffer-circle-layer"),r=l("x-map");return c(),D("div",h,[s(r,{zoom:10,center:a.center,glyphs:"//hongluan-ui.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[s(o),s(p,{center:a.center,radius:a.radius,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"text-color":"blue",closable:!0,countable:!0,draggable:!0,resizable:!0},null,8,["center","radius"])]),_:1},8,["center","glyphs"])])}const C=d(x,[["render",E]]),_=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="10" :center="center" :glyphs="'//hongluan-ui.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-circle-layer
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        text-color="blue"
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
  name: 'CircleLayerDemo',
  data() {
    return {
      center: [116.17381, 39.92155464],
      radius: 10,
    }
  },
}
<\/script>
`,q={name:"CircleLayerDemoV2",data(){return{center:[116.17381,39.92155464],radius:10}}},A={style:{height:"400px"},class:"vw-full vh-full"};function B(y,F,i,e,a,g){const o=l("x-tianditu-layer"),p=l("x-buffer-circle-layer"),r=l("x-buffer-circle-layer-v2"),m=l("x-map");return c(),D("div",A,[s(m,{crs:"EPSG:4490",zoom:10,center:a.center,glyphs:"//hongluan-ui.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf"},{default:b(()=>[s(o),s(p,{center:a.center,radius:a.radius,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"text-color":"blue",closable:!0,countable:!0,draggable:!0,resizable:!0},null,8,["center","radius"]),s(r,{center:a.center,radius:a.radius,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,"text-color":"blue",closable:!0,countable:!0,draggable:!0,resizable:!0},null,8,["center","radius"])]),_:1},8,["center","glyphs"])])}const v=d(q,[["render",B]]),k=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map crs="EPSG:4490" :zoom="10" :center="center" :glyphs="'//hongluan-ui.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'">
      <x-tianditu-layer />
      <x-buffer-circle-layer
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        text-color="blue"
        :closable="true"
        :countable="true"
        :draggable="true"
        :resizable="true"
      />
      <x-buffer-circle-layer-v2
        :center="center"
        :radius="radius"
        border-color="red"
        :border-opacity="0.5"
        background-color="red"
        center-color="red"
        resizer-color="blue"
        :background-opacity="0.1"
        text-color="blue"
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
  name: 'CircleLayerDemoV2',
  data() {
    return {
      center: [116.17381, 39.92155464],
      radius: 10,
    }
  },
}
<\/script>
`,S=n("h1",{id:"圆形缓冲区-buffercirclelayer",tabindex:"-1"},[t("圆形缓冲区（BufferCircleLayer） "),n("a",{class:"header-anchor",href:"#圆形缓冲区-buffercirclelayer","aria-label":'Permalink to "圆形缓冲区（BufferCircleLayer）"'},"​")],-1),z=n("p",null,"支持拖拽改变位置，拖拽改变大小，实时显示半径等功能",-1),P=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[t("自v2.4.0，增加XBufferCircleLayerV2组件，使用平面像素算法画圆，用以解决4490，4326等坐标系下圆变形问题。 继续保留XBufferCircleLayer组件，此组件使用"),n("code",null,"turf.circle"),t("画圆，在3857坐标系下，仍可使继续使用。")])],-1),T={id:"示例",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),O=f("",2),V={id:"epsg-4490坐标系",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#epsg-4490坐标系","aria-label":'Permalink to "EPSG:4490坐标系 <play :source-code="DemoSource2" />"'},"​",-1),N=f("",11),G=JSON.parse('{"title":"圆形缓冲区（BufferCircleLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/buffer/circle/index.md"}'),w={name:"api/core/buffer/circle/index.md"},$=Object.assign(w,{setup(y){return(F,i)=>{const e=l("play");return c(),D("div",null,[S,z,P,n("h2",T,[t("示例 "),s(e,{"source-code":u(_)},null,8,["source-code"]),t(),L]),s(C),O,n("h2",V,[t("EPSG:4490坐标系 "),s(e,{"source-code":u(k)},null,8,["source-code"]),t(),R]),s(v),N])}}});export{G as __pageData,$ as default};
