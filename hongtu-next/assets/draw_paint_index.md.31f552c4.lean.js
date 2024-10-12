import{$ as d}from"./chunks/hongtu-draw.e4f7d12d.js";import{_ as m,B as c,f as F,h as D,x as l,k as p,a2 as b,a3 as B,D as t,F as g,N as y,u as E}from"./chunks/framework.5deb65a5.js";const _={name:"MapDrawDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:8,bearing:0,pitch:0,mode:"",features:{}}},methods:{createdHandler(o){this.draw=new d(o.$map,{userProperties:!0})},changeMode(){this.mode==="draw_text"?this.draw.changeMode(this.mode,{text:"测试","text-color":"white","text-size":20}):this.mode==="draw_image"?this.draw.changeMode(this.mode,{imageId:"logo",imageUrl:"/logo.png"}):this.draw.changeMode(this.mode)}}},A={class:"actions"},C=y('<optgroup label="文本"><option value="draw_text">文本</option></optgroup><optgroup label="线状"><option value="draw_line_string">折线</option><option value="draw_curve">曲线</option><option value="draw_arc">弧线</option></optgroup><optgroup label="面状"><option value="draw_polygon">多边形</option><option value="draw_circle">圆</option><option value="draw_ellipse">椭圆</option><option value="draw_rectangle">矩形</option><option value="draw_sector">扇形</option><option value="draw_lune">弓形</option><option value="draw_closed_curve">闭合曲面</option></optgroup><optgroup label="箭头"><option value="draw_fine_arrow">细直箭头</option><option value="draw_assault_direction">突击方向</option><option value="draw_double_arrow">钳击</option><option value="draw_attack_arrow">进攻箭头</option><option value="draw_tailed_attack_arrow">燕尾进攻箭头</option><option value="draw_squad_combat">战斗小队</option></optgroup><optgroup label="图片"><option value="draw_image">图片</option></optgroup>',5),w=[C],v={class:"map-container black"};function h(o,s,i,r,a,e){const u=c("x-map");return F(),D(g,null,[l("div",A,[p(" 请选择模式： "),b(l("select",{"onUpdate:modelValue":s[0]||(s[0]=n=>a.mode=n),style:{width:"150px"},onChange:s[1]||(s[1]=(...n)=>e.changeMode&&e.changeMode(...n))},w,544),[[B,a.mode]])]),l("div",v,[t(u,{zoom:a.mapZoom,"onUpdate:zoom":s[2]||(s[2]=n=>a.mapZoom=n),center:a.mapCenter,"onUpdate:center":s[3]||(s[3]=n=>a.mapCenter=n),bearing:a.bearing,"onUpdate:bearing":s[4]||(s[4]=n=>a.bearing=n),pitch:a.pitch,"onUpdate:pitch":s[5]||(s[5]=n=>a.pitch=n),onCreated:e.createdHandler},null,8,["zoom","center","bearing","pitch","onCreated"])])],64)}const q=m(_,[["render",h]]),x=`<template>
  <div class="actions">
    请选择模式：
    <select v-model="mode" style="width: 150px;" @change="changeMode">
      <optgroup label="文本">
        <option value="draw_text">文本</option>
      </optgroup>
      <optgroup label="线状">
        <option value="draw_line_string">折线</option>
        <option value="draw_curve">曲线</option>
        <option value="draw_arc">弧线</option>
      </optgroup>
      <optgroup label="面状">
        <option value="draw_polygon">多边形</option>
        <option value="draw_circle">圆</option>
        <option value="draw_ellipse">椭圆</option>
        <option value="draw_rectangle">矩形</option>
        <option value="draw_sector">扇形</option>
        <option value="draw_lune">弓形</option>
        <option value="draw_closed_curve">闭合曲面</option>
      </optgroup>
      <optgroup label="箭头">
        <option value="draw_fine_arrow">细直箭头</option>
        <option value="draw_assault_direction">突击方向</option>
        <option value="draw_double_arrow">钳击</option>
        <option value="draw_attack_arrow">进攻箭头</option>
        <option value="draw_tailed_attack_arrow">燕尾进攻箭头</option>
        <option value="draw_squad_combat">战斗小队</option>
      </optgroup>
      <optgroup label="图片">
        <option value="draw_image">图片</option>
      </optgroup>
    </select>
  </div>
  <div class="map-container black">
    <x-map
      v-model:zoom="mapZoom"
      v-model:center="mapCenter"
      v-model:bearing="bearing"
      v-model:pitch="pitch"
      @created="createdHandler"
    >
      <!-- <x-tianditu-layer /> -->
    </x-map>
  </div>
</template>
<script>
import MapboxDraw from 'hongtu-draw'

export default {
  name: 'MapDrawDemo',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 8,
      bearing: 0,
      pitch: 0,
      mode: '',
      features: {},
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.draw = new MapboxDraw(mapVm.$map, {
        userProperties: true,
      })
    },
    changeMode() {
      if (this.mode === 'draw_text') {
        this.draw.changeMode(this.mode, { text: '测试', 'text-color': 'white', 'text-size': 20 })
      } else if (this.mode === 'draw_image') {
        this.draw.changeMode(this.mode, { imageId: 'logo',imageUrl: '/logo.png' })
      } else {
        this.draw.changeMode(this.mode)
      }
    },
  },
}
<\/script>
<style>
.actions {
  margin-bottom: 5px;
}
</style>
`,f=l("h1",{id:"标绘",tabindex:"-1"},[p("标绘 "),l("a",{class:"header-anchor",href:"#标绘","aria-label":'Permalink to "标绘"'},"​")],-1),M={id:"示例",tabindex:"-1"},k=l("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),V=y("",2),U=JSON.parse('{"title":"标绘","description":"","frontmatter":{},"headers":[],"relativePath":"draw/paint/index.md"}'),P={name:"draw/paint/index.md"},N=Object.assign(P,{setup(o){return(s,i)=>{const r=c("play");return F(),D("div",null,[f,l("h2",M,[p("示例 "),t(r,{"source-code":E(x)},null,8,["source-code"]),p(),k]),t(q),V])}}});export{U as __pageData,N as default};
