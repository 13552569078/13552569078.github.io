import{_ as u,B as a,f as e,h as t,D as n,z as b,x as s,k as p,u as m,N as h}from"./chunks/framework.5deb65a5.js";const _={name:"ImageLoaderDemo",data(){return{tiandituTypes:["vec","cia"],videos:[{name:"rain",url:"//hongluan-ui.github.io/hongtu-next/videos/rains-s.mp4",size:[54,96]}],symbolDataSource:[{coordinates:[115.124368,29.216049],properties:{icon:"rain"}},{coordinates:[115.124368,29.246049],properties:{icon:"rain"}},{coordinates:[115.124368,29.186049],properties:{icon:"rain"}},{coordinates:[115.324368,29.216049],properties:{icon:"rain"}}]}}},C={style:{height:"400px"},class:"vw-full vh-full"};function x(r,c,F,o,l,T){const i=a("x-tianditu-layer"),D=a("x-video-mp4-loader"),y=a("x-symbol-layer"),d=a("x-map");return e(),t("div",C,[n(d,{center:[115.124368,29.216049],zoom:10},{default:b(()=>[n(i,{types:l.tiandituTypes},null,8,["types"]),n(D,{videos:l.videos},null,8,["videos"]),n(y,{id:"symbol",data:l.symbolDataSource,"icon-size":1.5,"icon-image-field":"icon","icon-rotation-alignment":"map"},null,8,["data"])]),_:1})])}const g=u(_,[["render",x]]),E=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[115.124368, 29.216049]" :zoom="10">
      <x-tianditu-layer :types="tiandituTypes" />
      <x-video-mp4-loader :videos="videos" />
      <x-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        :icon-size="1.5"
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
      videos: [
        {
          name: 'rain',
          url: '//hongluan-ui.github.io/hongtu-next/' + 'videos/rains-s.mp4',
          size: [54, 96],
        },
      ],
      symbolDataSource: [{
        coordinates: [115.124368, 29.216049],
        properties: {
          icon: 'rain',
        },
      }, {
        coordinates: [115.124368, 29.246049],
        properties: {
          icon: 'rain',
        },
      }, {
        coordinates: [115.124368, 29.186049],
        properties: {
          icon: 'rain',
        },
      }, {
        coordinates: [115.324368, 29.216049],
        properties: {
          icon: 'rain',
        },
      }],
    }
  },
}
<\/script>
`,f=s("h1",{id:"mp4视频加载器-videomp4loader",tabindex:"-1"},[p("MP4视频加载器（VideoMp4Loader） "),s("a",{class:"header-anchor",href:"#mp4视频加载器-videomp4loader","aria-label":'Permalink to "MP4视频加载器（VideoMp4Loader）"'},"​")],-1),v=s("p",null,[s("em",null,[s("strong",null,"版本：>=2.3.0，https并且需要较新版本浏览器支持")])],-1),q=s("p",null,"VideoMp4Loader 提供预加载MP4图标",-1),B={id:"示例",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),S=h("",12),V=JSON.parse('{"title":"MP4视频加载器（VideoMp4Loader）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-loaders/video-mp4-loader/index.md"}'),P={name:"api/core/image-loaders/video-mp4-loader/index.md"},z=Object.assign(P,{setup(r){return(c,F)=>{const o=a("play");return e(),t("div",null,[f,v,q,s("h2",B,[p("示例 "),n(o,{"source-code":m(E)},null,8,["source-code"]),p(),A]),n(g),S])}}});export{V as __pageData,z as default};
