import{_ as g,B as e,f as o,h as p,x as t,D as n,z as u,t as b,A as x,k as r,N as f}from"./chunks/framework.5deb65a5.js";const m={name:"GridLayerDemo",data(){return{beijingPriceData:"//bitjjj.github.io/hongtu-next/geojson/beijing_price.json",meanPrice:void 0}},methods:{mousemoveHandler({object:l}){this.meanPrice=l.elevationValue},mouseleaveHandler(){this.meanPrice=void 0}}},h={style:{height:"500px"}},E={style:{height:"470px"}},_={style:{height:"30px",margin:"10px 10px"}},A={key:0,class:"text-muted"};function B(l,c,i,S,a,d){const y=e("x-tianditu-layer"),D=e("x-grid-layer"),F=e("x-map");return o(),p("div",h,[t("div",E,[n(F,{zoom:8},{default:u(()=>[n(y),n(D,{data:a.beijingPriceData,position:s=>s.lnglat,"color-weight":s=>s.transPrice,"color-aggregation":"MEAN","elevation-weight":s=>s.transPrice,"elevation-aggregation":"MEAN",pickable:!0,"elevation-scale":50,onMousemove:d.mousemoveHandler},null,8,["data","position","color-weight","elevation-weight","onMousemove"])]),_:1})]),t("div",_,[a.meanPrice?(o(),p("p",A,"均价： "+b(a.meanPrice/1e4)+"万元/平米",1)):x("",!0)])])}const q=g(m,[["render",B]]),v=t("h1",{id:"_3d网格热力图-gridlayer",tabindex:"-1"},[r("3D网格热力图（GridLayer） "),t("a",{class:"header-anchor",href:"#_3d网格热力图-gridlayer","aria-label":'Permalink to "3D网格热力图（GridLayer）"'},"​")],-1),C=t("h2",{id:"示例",tabindex:"-1"},[r("示例 "),t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1),P=f("",11),N=JSON.parse('{"title":"3D网格热力图（GridLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/deck/grid/index.md"}'),k={name:"api/deck/grid/index.md"},M=Object.assign(k,{setup(l){return(c,i)=>(o(),p("div",null,[v,C,n(q),P]))}});export{N as __pageData,M as default};