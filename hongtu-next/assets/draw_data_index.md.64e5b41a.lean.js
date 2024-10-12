import{$ as b}from"./chunks/hongtu-draw.e4f7d12d.js";import{_ as d,B as c,f as F,h as D,x as p,k as e,a2 as m,a3 as B,D as t,F as E,N as y,u as A}from"./chunks/framework.5deb65a5.js";const g={name:"MapDrawDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:8,bearing:0,pitch:0,mode:"",features:{},savedData:[]}},methods:{createdHandler(a){this.draw=new b(a.$map,{userProperties:!0}),a.$map.on("draw.create",s=>{this.features[s.features[0].id]=s.features[0]})},changeMode(){this.mode==="draw_text"?this.draw.changeMode(this.mode,{text:"测试","text-color":"white","text-size":20}):this.mode==="draw_image"?this.draw.changeMode(this.mode,{imageId:"logo",imageUrl:"/logo.png"}):this.draw.changeMode(this.mode)},clearData(){this.draw.changeMode("simple_select");for(const a of Object.keys(this.features))this.draw.delete([a])},exportData(){const a=JSON.stringify(Object.values(this.features));this.savedData=a,window.alert(a)},importData(){JSON.parse(this.savedData).forEach(a=>this.draw.add(a))}}},C={class:"actions"},_=y('<optgroup label="文本"><option value="draw_text">文本</option></optgroup><optgroup label="线状"><option value="draw_line_string">折线</option><option value="draw_curve">曲线</option><option value="draw_arc">弧线</option></optgroup><optgroup label="面状"><option value="draw_polygon">多边形</option><option value="draw_circle">圆</option><option value="draw_ellipse">椭圆</option><option value="draw_rectangle">矩形</option><option value="draw_sector">扇形</option><option value="draw_lune">弓形</option><option value="draw_closed_curve">闭合曲面</option></optgroup><optgroup label="箭头"><option value="draw_fine_arrow">细直箭头</option><option value="draw_assault_direction">突击方向</option><option value="draw_double_arrow">钳击</option><option value="draw_attack_arrow">进攻箭头</option><option value="draw_tailed_attack_arrow">燕尾进攻箭头</option><option value="draw_squad_combat">战斗小队</option></optgroup><optgroup label="图片"><option value="draw_image">图片</option></optgroup>',5),w=[_],h={class:"map-container black"};function v(a,s,i,r,l,o){const u=c("x-map");return F(),D(E,null,[p("div",C,[e(" 请选择模式： "),m(p("select",{"onUpdate:modelValue":s[0]||(s[0]=n=>l.mode=n),style:{width:"150px"},onChange:s[1]||(s[1]=(...n)=>o.changeMode&&o.changeMode(...n))},w,544),[[B,l.mode]]),e("   "),p("a",{href:"javascript:;",onClick:s[2]||(s[2]=(...n)=>o.clearData&&o.clearData(...n))},"清屏"),e("   "),p("a",{href:"javascript:;",onClick:s[3]||(s[3]=(...n)=>o.exportData&&o.exportData(...n))},"导出数据"),e("   "),p("a",{href:"javascript:;",onClick:s[4]||(s[4]=(...n)=>o.importData&&o.importData(...n))},"导入数据"),e("   ")]),p("div",h,[t(u,{zoom:l.mapZoom,"onUpdate:zoom":s[5]||(s[5]=n=>l.mapZoom=n),center:l.mapCenter,"onUpdate:center":s[6]||(s[6]=n=>l.mapCenter=n),bearing:l.bearing,"onUpdate:bearing":s[7]||(s[7]=n=>l.bearing=n),pitch:l.pitch,"onUpdate:pitch":s[8]||(s[8]=n=>l.pitch=n),onCreated:o.createdHandler},null,8,["zoom","center","bearing","pitch","onCreated"])])],64)}const f=d(g,[["render",v]]),q=`<template>
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
    </select>&nbsp;&nbsp;
    <a href="javascript:;" @click="clearData">清屏</a>&nbsp;&nbsp;
    <a href="javascript:;" @click="exportData">导出数据</a>&nbsp;&nbsp;
    <a href="javascript:;" @click="importData">导入数据</a>&nbsp;&nbsp;
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
      savedData: [],
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.draw = new MapboxDraw(mapVm.$map, {
        userProperties: true,
      })
      mapVm.$map.on('draw.create', e => {
        this.features[e.features[0].id] = e.features[0]
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
    clearData() {
      this.draw.changeMode('simple_select')
      for (const featureId of Object.keys(this.features)) {
        //删除图上元素
        this.draw.delete([featureId])
      }
    },
    exportData() {
      const data = JSON.stringify(Object.values(this.features))
      this.savedData = data
      window.alert(data)
    },
    importData() {
      JSON.parse(this.savedData).forEach(d => this.draw.add(d))
    },
  },
}
<\/script>
<style>
.actions {
  margin-bottom: 5px;
}
</style>
`,x=p("h1",{id:"导入-导出数据",tabindex:"-1"},[e("导入/导出数据 "),p("a",{class:"header-anchor",href:"#导入-导出数据","aria-label":'Permalink to "导入/导出数据"'},"​")],-1),k={id:"示例",tabindex:"-1"},M=p("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),j=y("",2),V=JSON.parse('{"title":"导入/导出数据","description":"","frontmatter":{},"headers":[],"relativePath":"draw/data/index.md"}'),O={name:"draw/data/index.md"},I=Object.assign(O,{setup(a){return(s,i)=>{const r=c("play");return F(),D("div",null,[x,p("h2",k,[e("示例 "),t(r,{"source-code":A(q)},null,8,["source-code"]),e(),M]),t(f),j])}}});export{V as __pageData,I as default};
