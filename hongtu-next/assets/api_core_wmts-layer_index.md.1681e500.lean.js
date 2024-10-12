import{_ as y,B as e,f as n,h as o,D as s,z as D,x as t,k as a,u as F,N as m}from"./chunks/framework.5deb65a5.js";const h={name:"WMTSLayerDemo"},u={style:{height:"400px"},class:"vw-full vh-full"};function f(p,r,c,l,w,T){const i=e("x-wmts-layer"),d=e("x-map");return n(),o("div",u,[s(d,null,{default:D(()=>[s(i,{url:"http://t{s}.tianditu.gov.cn/img_w/wmts?tk=b8ed92ff9b64aebcb0110acca15e478f","layer-name":"img","layer-style":"default","tile-matrix-set-i-d":"w",subdomains:"01234567",maxzoom:18})]),_:1})])}const x=y(h,[["render",f]]),b=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <x-wmts-layer
        url="http://t{s}.tianditu.gov.cn/img_w/wmts?tk=b8ed92ff9b64aebcb0110acca15e478f"
        layer-name="img"
        layer-style="default"
        tile-matrix-set-i-d="w"
        subdomains="01234567"
        :maxzoom="18"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'WMTSLayerDemo',
}
<\/script>
`,g=t("h1",{id:"wmts图层-wmtslayer",tabindex:"-1"},[a("WMTS图层（WMTSLayer） "),t("a",{class:"header-anchor",href:"#wmts图层-wmtslayer","aria-label":'Permalink to "WMTS图层（WMTSLayer）"'},"​")],-1),_=t("p",null,[a("WMTS类型图层，查看 "),t("a",{href:"http://docs.opengeospatial.org/is/13-082r2/13-082r2.html",target:"_blank",rel:"noreferrer"},"WMTS标准 ")],-1),E={id:"示例",tabindex:"-1"},S=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=m("",11),A=JSON.parse('{"title":"WMTS图层（WMTSLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/wmts-layer/index.md"}'),v={name:"api/core/wmts-layer/index.md"},B=Object.assign(v,{setup(p){return(r,c)=>{const l=e("play");return n(),o("div",null,[g,_,t("h2",E,[a("示例 "),s(l,{"source-code":F(b)},null,8,["source-code"]),a(),S]),s(x),q])}}});export{A as __pageData,B as default};
