import{_ as u,B as a,f as e,h as t,D as n,z as b,x as s,k as p,u as d,N as h}from"./chunks/framework.5deb65a5.js";const g={name:"ImageLoaderDemo",data(){return{tiandituTypes:["vec","cia"],images:[{name:"hIcon",dir:"h",steps:7,duration:150,url:"//hongluan-ui.github.io/hongtu-next/images/h-steps.jpeg"},{name:"vIcon",dir:"v",steps:3,duration:300,url:"//hongluan-ui.github.io/hongtu-next/images/v-steps.png"}],symbolDataSource:[{coordinates:[115.124368,29.216049],properties:{icon:"hIcon"}},{coordinates:[115.124368,29.246049],properties:{icon:"hIcon"}},{coordinates:[115.124368,29.186049],properties:{icon:"hIcon"}},{coordinates:[115.324368,29.216049],properties:{icon:"vIcon"}}]}}},_={style:{height:"400px"},class:"vw-full vh-full"};function C(r,c,F,o,l,T){const D=a("x-tianditu-layer"),y=a("x-image-frame-loader"),i=a("x-symbol-layer"),m=a("x-map");return e(),t("div",_,[n(m,{center:[115.124368,29.216049],zoom:10},{default:b(()=>[n(D,{types:l.tiandituTypes},null,8,["types"]),n(y,{images:l.images},null,8,["images"]),n(i,{id:"symbol",data:l.symbolDataSource,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"},null,8,["data"])]),_:1})])}const E=u(g,[["render",C]]),f=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[115.124368, 29.216049]" :zoom="10">
      <x-tianditu-layer :types="tiandituTypes" />
      <x-image-frame-loader :images="images" />
      <x-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        :icon-size="0.2"
        icon-image-field="icon"
        icon-rotation-alignment="map"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'ImageLoaderDemo',
  data() {
    return {
      tiandituTypes: ['vec', 'cia'],
      images: [
        {
          name: 'hIcon',
          dir: 'h',
          steps: 7,
          duration: 150,
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/h-steps.jpeg',
        },
        {
          name: 'vIcon',
          dir: 'v',
          steps: 3,
          duration: 300,
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/v-steps.png',
        },
      ],
      symbolDataSource: [{
        coordinates: [115.124368, 29.216049],
        properties: {
          icon: 'hIcon',
        },
      }, {
        coordinates: [115.124368, 29.246049],
        properties: {
          icon: 'hIcon',
        },
      }, {
        coordinates: [115.124368, 29.186049],
        properties: {
          icon: 'hIcon',
        },
      }, {
        coordinates: [115.324368, 29.216049],
        properties: {
          icon: 'vIcon',
        },
      }],
    }
  },
}
<\/script>
`,x=s("h1",{id:"帧动画图片加载器-imageframeloader",tabindex:"-1"},[p("帧动画图片加载器（ImageFrameLoader） "),s("a",{class:"header-anchor",href:"#帧动画图片加载器-imageframeloader","aria-label":'Permalink to "帧动画图片加载器（ImageFrameLoader）"'},"​")],-1),v=s("p",null,[s("em",null,[s("strong",null,"版本：>=2.3.2")])],-1),q=s("p",null,"ImageFrameLoader 提供预加载帧动画图标",-1),B={id:"示例",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),A=h("",12),k=JSON.parse('{"title":"帧动画图片加载器（ImageFrameLoader）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-loaders/image-frame-loader/index.md"}'),S={name:"api/core/image-loaders/image-frame-loader/index.md"},L=Object.assign(S,{setup(r){return(c,F)=>{const o=a("play");return e(),t("div",null,[x,v,q,s("h2",B,[p("示例 "),n(o,{"source-code":d(f)},null,8,["source-code"]),p(),I]),n(E),A])}}});export{k as __pageData,L as default};
