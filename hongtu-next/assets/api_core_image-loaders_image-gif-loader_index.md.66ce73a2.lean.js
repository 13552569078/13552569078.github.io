import{_ as m,B as a,f as e,h as t,D as n,z as b,x as s,k as p,u as d,N as h}from"./chunks/framework.5deb65a5.js";const g={name:"ImageLoaderDemo",data(){return{tiandituTypes:["vec","cia"],images:[{name:"child",url:"//hongluan-ui.github.io/hongtu-next/images/child.gif"},{name:"run",url:"//hongluan-ui.github.io/hongtu-next/images/run.gif"}],symbolDataSource:[{coordinates:[115.124368,29.216049],properties:{icon:"child"}},{coordinates:[115.124368,29.246049],properties:{icon:"child"}},{coordinates:[115.124368,29.186049],properties:{icon:"child"}},{coordinates:[115.324368,29.216049],properties:{icon:"run"}}]}}},_={style:{height:"400px"},class:"vw-full vh-full"};function f(r,c,F,o,l,P){const i=a("x-tianditu-layer"),D=a("x-image-gif-loader"),y=a("x-symbol-layer"),u=a("x-map");return e(),t("div",_,[n(u,{center:[115.124368,29.216049],zoom:10},{default:b(()=>[n(i,{types:l.tiandituTypes},null,8,["types"]),n(D,{images:l.images},null,8,["images"]),n(y,{id:"symbol",data:l.symbolDataSource,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"},null,8,["data"])]),_:1})])}const E=m(g,[["render",f]]),C=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[115.124368, 29.216049]" :zoom="10">
      <x-tianditu-layer :types="tiandituTypes" />
      <x-image-gif-loader :images="images" />
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
          name: 'child',
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/child.gif',
        },
        {
          name: 'run',
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/run.gif',
        },
      ],
      symbolDataSource: [{
        coordinates: [115.124368, 29.216049],
        properties: {
          icon: 'child',
        },
      }, {
        coordinates: [115.124368, 29.246049],
        properties: {
          icon: 'child',
        },
      }, {
        coordinates: [115.124368, 29.186049],
        properties: {
          icon: 'child',
        },
      }, {
        coordinates: [115.324368, 29.216049],
        properties: {
          icon: 'run',
        },
      }],
    }
  },
}
<\/script>
`,x=s("h1",{id:"gif图片加载器-imagegifloader",tabindex:"-1"},[p("Gif图片加载器（ImageGifLoader） "),s("a",{class:"header-anchor",href:"#gif图片加载器-imagegifloader","aria-label":'Permalink to "Gif图片加载器（ImageGifLoader）"'},"​")],-1),q=s("p",null,[s("em",null,[s("strong",null,"版本：>=2.2.4")])],-1),B=s("p",null,"ImageGifLoader 提供预加载Gif图标",-1),A={id:"示例",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),S=h("",12),k=JSON.parse('{"title":"Gif图片加载器（ImageGifLoader）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-loaders/image-gif-loader/index.md"}'),T={name:"api/core/image-loaders/image-gif-loader/index.md"},L=Object.assign(T,{setup(r){return(c,F)=>{const o=a("play");return e(),t("div",null,[x,q,B,s("h2",A,[p("示例 "),n(o,{"source-code":d(C)},null,8,["source-code"]),p(),v]),n(E),S])}}});export{k as __pageData,L as default};
