import{_ as D,B as l,f as n,h as e,D as a,z as F,x as s,k as o,N as u}from"./chunks/framework.5deb65a5.js";const g={name:"TextureBuildingLayerDemo",data(){return{coordinates:[116.17381,39.92155464]}}},b={class:"map-container"};function h(p,r,c,C,i,q){const d=l("x-texture-building-layer"),y=l("x-map");return n(),e("div",b,[a(y,{zoom:14,center:i.coordinates,pitch:60,"background-color":"black"},{default:F(()=>[a(d,{data:"//bitjjj.github.io/hongtu-next/showcase/building.geojson",texture:"//bitjjj.github.io/hongtu-next/images/light.jpg","data-transform":t=>t.features,"get-polygon":t=>t.geometry.coordinates[0],"get-elevation":t=>t.properties.Floor*30},null,8,["data","texture","data-transform","get-polygon","get-elevation"])]),_:1},8,["center"])])}const x=D(g,[["render",h]]),f=s("h1",{id:"纹理建筑物-texturebuildinglayer",tabindex:"-1"},[o("纹理建筑物（TextureBuildingLayer） "),s("a",{class:"header-anchor",href:"#纹理建筑物-texturebuildinglayer","aria-label":'Permalink to "纹理建筑物（TextureBuildingLayer）"'},"​")],-1),m=s("h2",{id:"示例",tabindex:"-1"},[o("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1),_=u("",11),A=JSON.parse('{"title":"纹理建筑物（TextureBuildingLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/effect-layers/texture-building/index.md"}'),E={name:"api/effect-layers/texture-building/index.md"},v=Object.assign(E,{setup(p){return(r,c)=>(n(),e("div",null,[f,m,a(x),_]))}});export{A as __pageData,v as default};