import{_ as d,B as n,f as p,h as r,D as s,z as m,x as a,k as t,u,N as h}from"./chunks/framework.5deb65a5.js";const b={name:"TooltipDemo",data(){return{mousePosition:void 0}},methods:{mousemoveHandler(l){this.mousePosition=l.coordinates},getTooltipContent(){return this.mousePosition&&this.mousePosition.join(",")}}},_={style:{height:"400px"},class:"vw-full vh-full"};function f(l,c,i,o,C,e){const D=n("x-tianditu-layer"),F=n("x-map-tooltip"),y=n("x-map");return p(),r("div",_,[s(y,{zoom:14,onMousemove:e.mousemoveHandler},{default:m(()=>[s(D),s(F,{"get-content":e.getTooltipContent},null,8,["get-content"])]),_:1},8,["onMousemove"])])}const x=d(b,[["render",f]]),B=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="14" @mousemove="mousemoveHandler">
      <x-tianditu-layer />
      <x-map-tooltip :get-content="getTooltipContent" />
    </x-map>
  </div>
</template>
<script>
export default {
  name: 'TooltipDemo',
  data() {
    return { mousePosition: undefined }
  },
  methods:{
    mousemoveHandler(payload){
      this.mousePosition = payload.coordinates
    },
    getTooltipContent(){
      return this.mousePosition && this.mousePosition.join(',')
    },
  },
}
<\/script>
`,g=a("h1",{id:"提示框-maptooltip",tabindex:"-1"},[t("提示框（MapTooltip） "),a("a",{class:"header-anchor",href:"#提示框-maptooltip","aria-label":'Permalink to "提示框（MapTooltip）"'},"​")],-1),E={id:"示例",tabindex:"-1"},A=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),v=h("",11),q=JSON.parse('{"title":"提示框（MapTooltip）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map-tooltip/index.md"}'),P={name:"api/core/map-tooltip/index.md"},S=Object.assign(P,{setup(l){return(c,i)=>{const o=n("play");return p(),r("div",null,[g,a("h2",E,[t("示例 "),s(o,{"source-code":u(B)},null,8,["source-code"]),t(),A]),s(x),v])}}});export{q as __pageData,S as default};
