import{_ as b,a1 as h,B as t,f as F,h as D,D as a,z as p,x as o,k as r,u as f,N as x}from"./chunks/framework.5deb65a5.js";const C={name:"MarkerDemo",components:{Test1:{setup(){return()=>h("div",{innerHTML:"Vue Comp",style:{color:"red",fontSize:"20px",fontWeight:"bolder"}})}}},data(){return{defaultMarkerCoordinates:[116.38745,39.91266],customMarkerCoordinates:[116.40123,39.91266],customMarkerCoordinates2:[116.39123,39.91266],customMarkerCoordinates3:[116.38123,39.91266]}}},g={style:{height:"400px"},class:"vw-full vh-full"},B=o("button",{class:"primary"},"按钮",-1),E=o("img",{src:"https://cdn.pixabay.com/animation/2022/10/11/23/03/23-03-06-809_512.gif",style:{width:"64px",height:"64px"}},null,-1);function k(y,s,i,c,n,P){const d=t("x-tianditu-layer"),e=t("x-map-marker"),m=t("Test1"),u=t("x-map");return F(),D("div",g,[a(u,{zoom:14},{default:p(()=>[a(d),a(e,{coordinates:n.defaultMarkerCoordinates,"onUpdate:coordinates":s[0]||(s[0]=l=>n.defaultMarkerCoordinates=l),color:"red"},null,8,["coordinates"]),a(e,{coordinates:n.customMarkerCoordinates,"onUpdate:coordinates":s[1]||(s[1]=l=>n.customMarkerCoordinates=l)},{default:p(()=>[B]),_:1},8,["coordinates"]),a(e,{coordinates:n.customMarkerCoordinates2,"onUpdate:coordinates":s[2]||(s[2]=l=>n.customMarkerCoordinates2=l)},{default:p(()=>[E]),_:1},8,["coordinates"]),a(e,{coordinates:n.customMarkerCoordinates3,"onUpdate:coordinates":s[3]||(s[3]=l=>n.customMarkerCoordinates3=l)},{default:p(()=>[a(m)]),_:1},8,["coordinates"])]),_:1})])}const _=b(C,[["render",k]]),A=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="14">
      <x-tianditu-layer />
      <x-map-marker v-model:coordinates="defaultMarkerCoordinates" color="red" />
      <x-map-marker v-model:coordinates="customMarkerCoordinates">
        <button class="primary">按钮</button>
      </x-map-marker>
      <x-map-marker v-model:coordinates="customMarkerCoordinates2">
        <img src="https://cdn.pixabay.com/animation/2022/10/11/23/03/23-03-06-809_512.gif" style="width:64px;height:64px">
      </x-map-marker>
      <x-map-marker v-model:coordinates="customMarkerCoordinates3">
        <Test1 />
      </x-map-marker>
    </x-map>
  </div>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'MarkerDemo',
  components: {
    Test1: {
      setup() {
        return () => h('div', { innerHTML: 'Vue Comp', style: { color: 'red', fontSize: '20px', fontWeight: 'bolder' } })
      },
    },
  },
  data() {
    return {
      defaultMarkerCoordinates: [116.38745, 39.91266],
      customMarkerCoordinates: [116.40123, 39.91266],
      customMarkerCoordinates2: [116.39123, 39.91266],
      customMarkerCoordinates3: [116.38123, 39.91266],
    }
  },
}
<\/script>
`,M=o("h1",{id:"地图标记-mapmarker",tabindex:"-1"},[r("地图标记（MapMarker） "),o("a",{class:"header-anchor",href:"#地图标记-mapmarker","aria-label":'Permalink to "地图标记（MapMarker）"'},"​")],-1),v={id:"示例",tabindex:"-1"},q=o("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),T=x("",11),N=JSON.parse('{"title":"地图标记（MapMarker）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map-marker/index.md"}'),S={name:"api/core/map-marker/index.md"},w=Object.assign(S,{setup(y){return(s,i)=>{const c=t("play");return F(),D("div",null,[M,o("h2",v,[r("示例 "),a(c,{"source-code":f(A)},null,8,["source-code"]),r(),q]),a(_),T])}}});export{N as __pageData,w as default};
