import{_ as u,B as a,f as o,h as t,D as n,z as b,x as s,k as p,u as d,N as h}from"./chunks/framework.5deb65a5.js";const g={name:"ImageLoaderDemo",data(){return{tiandituTypes:["vec","cia"],images:[{name:"firefox",url:"//bitjjj.github.io/hongtu-next/images/firefox.png"}],symbolDataSource:[{coordinates:[115.124368,29.216049],properties:{icon:"firefox"}},{coordinates:[115.124368,29.246049],properties:{icon:"firefox"}},{coordinates:[115.124368,29.186049],properties:{icon:"firefox"}},{coordinates:[115.324368,29.216049],properties:{icon:"firefox"}}]}}},f={style:{height:"400px"},class:"vw-full vh-full"};function x(r,c,F,e,l,T){const i=a("x-tianditu-layer"),D=a("x-image-apng-loader"),y=a("x-symbol-layer"),m=a("x-map");return o(),t("div",f,[n(m,{center:[115.124368,29.216049],zoom:10},{default:b(()=>[n(i,{types:l.tiandituTypes},null,8,["types"]),n(D,{images:l.images},null,8,["images"]),n(y,{id:"symbol",data:l.symbolDataSource,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"},null,8,["data"])]),_:1})])}const _=u(g,[["render",x]]),C=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[115.124368, 29.216049]" :zoom="10">
      <x-tianditu-layer :types="tiandituTypes" />
      <x-image-apng-loader :images="images" />
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
          name: 'firefox',
          url: '//bitjjj.github.io/hongtu-next/' + 'images/firefox.png',
        },
      ],
      symbolDataSource: [{
        coordinates: [115.124368, 29.216049],
        properties: {
          icon: 'firefox',
        },
      }, {
        coordinates: [115.124368, 29.246049],
        properties: {
          icon: 'firefox',
        },
      }, {
        coordinates: [115.124368, 29.186049],
        properties: {
          icon: 'firefox',
        },
      }, {
        coordinates: [115.324368, 29.216049],
        properties: {
          icon: 'firefox',
        },
      }],
    }
  },
}
<\/script>
`,E=s("h1",{id:"apng图片加载器-imageapngloader",tabindex:"-1"},[p("APNG图片加载器（ImageApngLoader） "),s("a",{class:"header-anchor",href:"#apng图片加载器-imageapngloader","aria-label":'Permalink to "APNG图片加载器（ImageApngLoader）"'},"​")],-1),q=s("p",null,[s("em",null,[s("strong",null,"版本：>=2.3.2")])],-1),A=s("p",null,"ImageApngLoader 提供预加载APNG图标",-1),B={id:"示例",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),S=h("",12),N=JSON.parse('{"title":"APNG图片加载器（ImageApngLoader）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-loaders/image-apng-loader/index.md"}'),P={name:"api/core/image-loaders/image-apng-loader/index.md"},k=Object.assign(P,{setup(r){return(c,F)=>{const e=a("play");return o(),t("div",null,[E,q,A,s("h2",B,[p("示例 "),n(e,{"source-code":d(C)},null,8,["source-code"]),p(),v]),n(_),S])}}});export{N as __pageData,k as default};
