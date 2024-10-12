import{_ as b,B as a,f as o,h as r,D as n,z as u,x as s,k as t,u as m,N as g}from"./chunks/framework.5deb65a5.js";const x={name:"PolygonLayerDemo",data(){return{colors:["rgba(255,125,0,0.5)","#ec71a9","red"],colorIndex:0,polygonCoordinates:[{coordinates:[[110.56640625,39.639537564366684],[107.22656249999999,36.527294814546245],[107.57812499999999,32.39851580247402],[112.5,30.600093873550072],[117.42187500000001,32.02670629333614],[117.24609374999999,36.94989178681327],[114.697265625,39.70718665682654],[110.56640625,39.639537564366684]]},{coordinates:[[82.08984375,32.47269502206151],[90.966796875,32.47269502206151],[90.966796875,38.685509760012],[82.08984375,38.685509760012],[82.08984375,32.47269502206151]]}]}},computed:{color(){return this.colors[this.colorIndex%this.colors.length]}}},h={style:{height:"400px"},class:"vw-full vh-full"},f={style:{position:"absolute",top:"5px",left:"5px"}};function C(c,l,y,e,p,i){const F=a("x-tianditu-layer"),D=a("x-polygon-layer"),d=a("x-map");return o(),r("div",h,[n(d,null,{default:u(()=>[s("div",f,[s("button",{class:"primary",onClick:l[0]||(l[0]=S=>p.colorIndex++)},"切换颜色")]),n(F),n(D,{data:p.polygonCoordinates,color:i.color,"outline-color":"yellow"},null,8,["data","color"])]),_:1})])}const _=b(x,[["render",C]]),E=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <div style="position:absolute;top:5px;left:5px">
        <button class="primary" @click="colorIndex++">切换颜色</button>
      </div>
      <x-tianditu-layer />
      <x-polygon-layer
        :data="polygonCoordinates"
        :color="color"
        outline-color="yellow"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'PolygonLayerDemo',
  data(){
    return {
      colors:['rgba(255,125,0,0.5)','#ec71a9','red'],
      colorIndex:0,
      polygonCoordinates:[
        { coordinates:[
          [
            110.56640625,
            39.639537564366684,
          ],
          [
            107.22656249999999,
            36.527294814546245,
          ],
          [
            107.57812499999999,
            32.39851580247402,
          ],
          [
            112.5,
            30.600093873550072,
          ],
          [
            117.42187500000001,
            32.02670629333614,
          ],
          [
            117.24609374999999,
            36.94989178681327,
          ],
          [
            114.697265625,
            39.70718665682654,
          ],
          [
            110.56640625,
            39.639537564366684,
          ],
        ] },
        { coordinates:[
          [
            82.08984375,
            32.47269502206151,
          ],
          [
            90.966796875,
            32.47269502206151,
          ],
          [
            90.966796875,
            38.685509760012,
          ],
          [
            82.08984375,
            38.685509760012,
          ],
          [
            82.08984375,
            32.47269502206151,
          ],
        ] },

      ],
    }
  },
  computed:{
    color(){
      return this.colors[this.colorIndex % this.colors.length]
    },
  },
}
<\/script>
`,B=s("h1",{id:"多边形图层-polygonlayer",tabindex:"-1"},[t("多边形图层（PolygonLayer） "),s("a",{class:"header-anchor",href:"#多边形图层-polygonlayer","aria-label":'Permalink to "多边形图层（PolygonLayer）"'},"​")],-1),v={id:"示例",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=g("",11),I=JSON.parse('{"title":"多边形图层（PolygonLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/polygon-layer/index.md"}'),P={name:"api/core/polygon-layer/index.md"},T=Object.assign(P,{setup(c){return(l,y)=>{const e=a("play");return o(),r("div",null,[B,s("h2",v,[t("示例 "),n(e,{"source-code":m(E)},null,8,["source-code"]),t(),A]),n(_),q])}}});export{I as __pageData,T as default};
