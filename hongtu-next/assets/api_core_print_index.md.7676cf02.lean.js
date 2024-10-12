import{_ as g,B as a,f as o,h as u,x as t,D as p,z as _,y as F,A as D,k as y,u as h,N as m}from"./chunks/framework.5deb65a5.js";let i=null;const x={name:"MapPrintDemo",data(){return{mapCenter:[120.30782359643746,31.49292271319491],mapZoom:11,showLayer:!1,geoJsonSource:{type:"geojson",data:"//hongluan-ui.github.io/hongtu-next/geojson/wuxi.geojson"}}},methods:{mapCreatedHandler(l){i=l.$map},print(){const l=i.getCanvas().toDataURL("image/png"),s=document.createElement("a");s.setAttribute("href",l),s.setAttribute("download","test.png"),document.body.appendChild(s),s.click()}}},f={style:{height:"400px"},class:"vw-full vh-full"};function q(l,s,b,r,n,e){const d=a("x-tianditu-layer"),B=a("x-polygon-layer"),E=a("x-polyline-layer"),A=a("x-source"),C=a("x-map");return o(),u("div",f,[t("button",{class:"primary",onClick:s[0]||(s[0]=(...c)=>e.print&&e.print(...c))},"打印"),p(C,{zoom:n.mapZoom,center:n.mapCenter,"extend-props":{preserveDrawingBuffer:!0},onCreated:e.mapCreatedHandler},{default:_(()=>[p(d),n.showLayer?(o(),F(B,{key:0,"source-id":"wuxiSource",opacity:.1,color:"blue"})):D("",!0),n.showLayer?(o(),F(E,{key:1,"source-id":"wuxiSource",color:"blue"})):D("",!0),p(A,{id:"wuxiSource","geo-json-source":n.geoJsonSource,onSourceAdded:s[1]||(s[1]=c=>n.showLayer=!0)},null,8,["geo-json-source"])]),_:1},8,["zoom","center","onCreated"])])}const w=g(x,[["render",q]]),v=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <button class="primary" @click="print">打印</button>
    <x-map
      :zoom="mapZoom"
      :center="mapCenter"
      :extend-props="{ preserveDrawingBuffer: true }"
      @created="mapCreatedHandler"
    >
      <x-tianditu-layer />
      <x-polygon-layer
        v-if="showLayer"
        source-id="wuxiSource"
        :opacity=".1"
        color="blue"
      />
      <x-polyline-layer
        v-if="showLayer"
        source-id="wuxiSource"
        color="blue"
      />
      <x-source id="wuxiSource" :geo-json-source="geoJsonSource" @source-added="showLayer=true" />
    </x-map>
  </div>
</template>
<script>
let $map = null
export default {
  name: 'MapPrintDemo',
  data() {
    return {
      mapCenter: [120.30782359643746, 31.49292271319491],
      mapZoom: 11,
      showLayer: false,
      geoJsonSource: { 'type': 'geojson', data: '//hongluan-ui.github.io/hongtu-next/' + 'geojson/wuxi.geojson' },
    }
  },
  methods: {
    mapCreatedHandler(mapVM) {
      $map = mapVM.$map
    },
    print() {
      const img = $map.getCanvas().toDataURL('image/png')
      const link = document.createElement('a')
      link.setAttribute('href', img)
      link.setAttribute('download', 'test.png')
      document.body.appendChild(link)
      link.click()
    },
  },
}
<\/script>
`,k=m("",4),S={id:"示例",tabindex:"-1"},P=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),L=m("",2),V=JSON.parse('{"title":"地图打印（Print）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/print/index.md"}'),j={name:"api/core/print/index.md"},R=Object.assign(j,{setup(l){return(s,b)=>{const r=a("play");return o(),u("div",null,[k,t("h2",S,[y("示例 "),p(r,{"source-code":h(v)},null,8,["source-code"]),y(),P]),p(w),L])}}});export{V as __pageData,R as default};
