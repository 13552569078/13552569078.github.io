import{_ as D,B as n,f as l,h as e,D as a,z as F,x as s,k as o,N as g}from"./chunks/framework.5deb65a5.js";const u={name:"WindowBuildingLayerDemo",data(){return{coordinates:[116.17381,39.92155464]}}},b={class:"map-container"};function h(p,r,c,C,i,q){const d=n("x-window-building-layer"),y=n("x-map");return l(),e("div",b,[a(y,{zoom:15,center:i.coordinates,pitch:60,"background-color":"black"},{default:F(()=>[a(d,{data:"//bitjjj.github.io/hongtu-next/showcase/building.geojson","get-fill-color":[28,57,85],"data-transform":t=>t.features,"get-polygon":t=>t.geometry.coordinates[0],"get-elevation":t=>t.properties.Floor,"elevation-scale":50},null,8,["data","data-transform","get-polygon","get-elevation"])]),_:1},8,["center"])])}const f=D(u,[["render",h]]),x=s("h1",{id:"窗户建筑物-windowbuildinglayer",tabindex:"-1"},[o("窗户建筑物（WindowBuildingLayer） "),s("a",{class:"header-anchor",href:"#窗户建筑物-windowbuildinglayer","aria-label":'Permalink to "窗户建筑物（WindowBuildingLayer）"'},"​")],-1),m=s("h2",{id:"示例",tabindex:"-1"},[o("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1),_=g("",11),A=JSON.parse('{"title":"窗户建筑物（WindowBuildingLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/effect-layers/window-building/index.md"}'),E={name:"api/effect-layers/window-building/index.md"},w=Object.assign(E,{setup(p){return(r,c)=>(l(),e("div",null,[x,m,a(f),_]))}});export{A as __pageData,w as default};