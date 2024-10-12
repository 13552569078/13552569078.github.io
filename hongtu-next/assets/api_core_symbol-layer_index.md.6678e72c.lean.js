import{_ as d,B as e,f as i,h as u,x as o,D as n,z as m,t as E,k as r,u as b,N as B}from"./chunks/framework.5deb65a5.js";import{b as A}from"./chunks/index.6f00c6fe.js";import{p as f}from"./chunks/index.cea82448.js";const x={name:"SymbolLayerDemo",data(){return{symbolDataSource:[],lng:void 0,lat:void 0,properties:void 0,mapCenter:[107.5,37.5],mapZoom:3.5}},created(){function a(s,t){return Math.random()*(t-s)+s}const l=[];for(let s=0;s<2e3;s++)l.push({coordinates:[a(95,120),a(30,42)],properties:{label:`测试-${s}`,icon:"airport-15"}});this.symbolDataSource=l},methods:{mapCreatedHandler(a){a.$map.rotateTo(180,{duration:1e4})},clickLayerHandler(a){this.lng=a.coordinates[0],this.lat=a.coordinates[1],this.properties=a.properties},leaveLayerHandler(){this.lng="",this.lat="",this.properties=""}}},_={style:{height:"500px"}},q={style:{height:"400px"}},S={style:{height:"60px",margin:"10px 10px"}},v=o("p",null,"选中元素的信息：",-1),j={class:"text-muted"},k={class:"text-muted"};function R(a,l,s,t,p,c){const y=e("x-tianditu-layer"),D=e("x-symbol-layer"),F=e("x-map");return i(),u("div",_,[o("div",q,[n(F,{zoom:p.mapZoom,center:p.mapCenter,glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf",sprite:"//bitjjj.github.io/hongtu-next/sprites/sprite",onCreated:c.mapCreatedHandler},{default:m(()=>[n(y,{types:["vec"]}),n(D,{data:p.symbolDataSource,"text-field":"label","icon-image-field":"icon","text-halo-color":"#9e9e9e","text-halo-width":1,"text-offset":[0,-1],cluster:!1,onMousemove:c.clickLayerHandler,onMouseleave:c.leaveLayerHandler},null,8,["data","onMousemove","onMouseleave"])]),_:1},8,["zoom","center","glyphs","sprite","onCreated"])]),o("div",S,[v,o("p",j,"lng:"+E(p.lng)+" lat:"+E(p.lat),1),o("p",k,"properties："+E(JSON.stringify(p.properties)),1)])])}const w=d(x,[["render",R]]),L={name:"SymbolLayerDemo2",data(){return{symbolDataSource:[]}},created(){function a(s,t){return Math.random()*(t-s)+s}const l=[];for(let s=0;s<2e3;s++)l.push({coordinates:[a(95,120),a(30,42)],properties:{label:`测试-${s}`,icon:"airport-15"}});for(let s=0;s<13;s++)l.push({coordinates:[116.678,31.456],properties:{label:`same-${s}`,icon:"airport-15"}});this.symbolDataSource=l}},T={style:{height:"400px"},class:"vw-full vh-full"};function z(a,l,s,t,p,c){const y=e("x-tianditu-layer"),D=e("x-symbol-layer"),F=e("x-map");return i(),u("div",T,[n(F,{zoom:4,center:[107.5,37.5],glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf",sprite:"//bitjjj.github.io/hongtu-next/sprites/sprite"},{default:m(()=>[n(y,{types:["vec"]}),n(D,{data:p.symbolDataSource,"text-field":"label","icon-image-field":"icon","text-offset":[0,-1],cluster:!0,spiderify:!0},null,8,["data"])]),_:1},8,["glyphs","sprite"])])}const P=d(L,[["render",z]]),I={name:"SymbolLayerDemo3",data(){return{images:[{name:"cluster-icon",type:"link",url:"//bitjjj.github.io/hongtu-next/images/common_toget.png"},{name:"cluster-icon2",type:"link",url:"//bitjjj.github.io/hongtu-next/images/eme_team_soc_toget.png"}],clusterIcons:[{textColor:"white",textSize:12,iconName:"cluster-icon"}],clusterIcons2:[{textColor:"white",textSize:16,iconName:"cluster-icon2"}],symbolDataSource:[],symbolDataSource2:[]}},created(){const a=[],l=[];for(let s=0;s<13;s++)a.push({coordinates:[116.678,31.456],properties:{label:`same-${s}`,icon:"airport-15"}}),l.push({coordinates:[113.788,31.956],properties:{label:`same2-${s}`,icon:"airport-15"}});for(let s=0;s<5;s++)a.push({coordinates:[116.688,31.456],properties:{label:`same-2-${s}`,icon:"airport-15"}}),l.push({coordinates:[113.798,31.956],properties:{label:`same-2-${s}`,icon:"airport-15"}});this.symbolDataSource=a,this.symbolDataSource2=l}},$={style:{height:"400px"},class:"vw-full vh-full"};function O(a,l,s,t,p,c){const y=e("x-tianditu-layer"),D=e("x-image-loader"),F=e("x-symbol-layer"),g=e("x-map");return i(),u("div",$,[n(g,{zoom:4,center:[116.678,31.456],glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf",sprite:"//bitjjj.github.io/hongtu-next/sprites/sprite"},{default:m(()=>[n(y,{types:["vec"]}),n(D,{images:p.images},null,8,["images"]),n(F,{data:p.symbolDataSource,"text-field":"label","icon-image-field":"icon","cluster-icons":p.clusterIcons,"cluster-icon-size":.5,"cluster-icon-offset":[1,5],cluster:!0,spiderify:!0},null,8,["data","cluster-icons"]),n(F,{data:p.symbolDataSource2,"text-field":"label","icon-image-field":"icon","cluster-icons":p.clusterIcons2,"cluster-icon-size":.5,"cluster-icon-offset":[1,45],cluster:!0,spiderify:!0},null,8,["data","cluster-icons"])]),_:1},8,["glyphs","sprite"])])}const N=d(I,[["render",O]]),U={name:"SymbolLayerDemo4",data(){return{images:[{name:"cluster-icon",type:"link",url:"//bitjjj.github.io/hongtu-next/images/common_toget.png"},{name:"cluster-icon2",type:"link",url:"//bitjjj.github.io/hongtu-next/images/eme_team_soc_toget.png"}],counter:0,steps:9,polylineCoordinates:[{coordinates:[[116.28,39.91],[116.29,39.91],[116.32,39.92],[116.33,39.91],[116.32,39.9],[116.32,39.89],[116.3,39.89],[116.29,39.89],[116.27,39.9]]}],symbolDataSource:[{coordinates:[116.28,39.91],properties:{label:"",icon:"cluster-icon",iconSize:.5,bearing:0}}]}},methods:{start(){this.counter=0,this.animate()},animate(){const a=this.polylineCoordinates[0].coordinates[this.counter>=this.steps?this.counter-1:this.counter],l=this.polylineCoordinates[0].coordinates[this.counter>=this.steps?this.counter:this.counter+1];if(!a||!l||this.counter>this.steps){this.counter=0;return}this.symbolDataSource[0].coordinates=this.polylineCoordinates[0].coordinates[this.counter],this.symbolDataSource[0].properties.bearing=A(f(a),f(l)),this.counter<this.steps&&window.setTimeout(this.animate,1500),this.counter++}}},H={style:{height:"400px"},class:"vw-full vh-full"},V={style:{position:"absolute",top:"5px",left:"5px"}};function M(a,l,s,t,p,c){const y=e("x-tianditu-layer"),D=e("x-image-loader"),F=e("x-polyline-layer"),g=e("x-symbol-layer"),h=e("x-map");return i(),u("div",H,[n(h,{zoom:11,center:[116.32,39.9],glyphs:"//bitjjj.github.io/hongtu-next/fonts/{fontstack}/{range}.pbf",sprite:"//bitjjj.github.io/hongtu-next/sprites/sprite"},{default:m(()=>[o("div",V,[o("button",{class:"primary",onClick:l[0]||(l[0]=(...C)=>c.start&&c.start(...C))},"重新开始")]),n(y,{types:["vec"]}),n(D,{images:p.images},null,8,["images"]),n(F,{data:p.polylineCoordinates,width:3,color:"blue"},null,8,["data"]),n(g,{data:p.symbolDataSource,"icon-image-field":"icon","icon-anchor":"center","icon-size":.5,"icon-rotation-alignment":"map","icon-allow-overlap":"","icon-rotate":["get","bearing"],"icon-ignore-placement":""},null,8,["data"])]),_:1},8,["glyphs","sprite"])])}const J=d(U,[["render",M]]),Z=`<template>
  <div style="height:500px">
    <div style="height:400px">
      <x-map :zoom="mapZoom" :center="mapCenter" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'" :sprite="'//bitjjj.github.io/hongtu-next/' + 'sprites/sprite'" @created="mapCreatedHandler">
        <x-tianditu-layer :types="['vec']" />
        <x-symbol-layer
          :data="symbolDataSource"
          text-field="label"
          icon-image-field="icon"
          text-halo-color="#9e9e9e"
          :text-halo-width="1"
          :text-offset="[0, -1]"
          :cluster="false"
          @mousemove="clickLayerHandler"
          @mouseleave="leaveLayerHandler"
        />
      </x-map>
    </div>
    <div style="height:60px;margin:10px 10px;">
      <p>选中元素的信息：</p>
      <p class="text-muted">lng:{{ lng }} lat:{{ lat }}</p>
      <p class="text-muted">properties：{{ JSON.stringify(properties) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SymbolLayerDemo',
  data() {
    return {
      symbolDataSource: [],
      lng: undefined,
      lat: undefined,
      properties: undefined,
      mapCenter: [107.5, 37.5],
      mapZoom: 3.5,
    }
  },
  created() {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min
    }
    const data = []
    for (let i = 0; i < 2000; i++) {
      data.push({
        coordinates: [getRandomArbitrary(95, 120), getRandomArbitrary(30, 42)],
        properties: {
          label: \`测试-\${i}\`,
          icon: 'airport-15',
        },
      })
    }
    this.symbolDataSource = data
  },
  methods: {
    mapCreatedHandler(mapVm) {
      mapVm.$map.rotateTo(180, { duration: 10000 })
    },
    clickLayerHandler(payload) {
      this.lng = payload.coordinates[0]
      this.lat = payload.coordinates[1]
      this.properties = payload.properties
    },
    leaveLayerHandler(){
      this.lng = ''
      this.lat = ''
      this.properties = ''
    },
  },
}
<\/script>
`,W=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="4" :center="[107.5, 37.5]" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'" :sprite="'//bitjjj.github.io/hongtu-next/' + 'sprites/sprite'">
      <x-tianditu-layer :types="['vec']" />
      <x-symbol-layer
        :data="symbolDataSource"
        text-field="label"
        icon-image-field="icon"
        :text-offset="[0, -1]"
        :cluster="true"
        :spiderify="true"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'SymbolLayerDemo2',
  data() {
    return {
      symbolDataSource: [],
    }
  },
  created() {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min
    }
    const data = []
    for (let i = 0; i < 2000; i++) {
      data.push({
        coordinates: [getRandomArbitrary(95, 120), getRandomArbitrary(30, 42)],
        properties: {
          label: \`测试-\${i}\`,
          icon: 'airport-15',
        },
      })
    }
    for (let i = 0; i < 13; i++) {
      data.push({
        coordinates: [116.678, 31.456],
        properties: {
          label: \`same-\${i}\`,
          icon: 'airport-15',
        },
      })
    }
    this.symbolDataSource = data
  },
}
<\/script>
`,G=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="4" :center="[116.678, 31.456]" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'" :sprite="'//bitjjj.github.io/hongtu-next/' + 'sprites/sprite'">
      <x-tianditu-layer :types="['vec']" />
      <x-image-loader :images="images" />
      <x-symbol-layer
        :data="symbolDataSource"
        text-field="label"
        icon-image-field="icon"
        :cluster-icons="clusterIcons"
        :cluster-icon-size="0.5"
        :cluster-icon-offset="[1, 5]"
        :cluster="true"
        :spiderify="true"
      />
      <x-symbol-layer
        :data="symbolDataSource2"
        text-field="label"
        icon-image-field="icon"
        :cluster-icons="clusterIcons2"
        :cluster-icon-size="0.5"
        :cluster-icon-offset="[1, 45]"
        :cluster="true"
        :spiderify="true"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'SymbolLayerDemo3',
  data() {
    return {
      images: [
        {
          name: 'cluster-icon',
          type: 'link',
          url: '//bitjjj.github.io/hongtu-next/' + 'images/common_toget.png',
        },
        {
          name: 'cluster-icon2',
          type: 'link',
          url: '//bitjjj.github.io/hongtu-next/' + 'images/eme_team_soc_toget.png',
        },
      ],
      clusterIcons: [
        {
          textColor: 'white',
          textSize: 12,
          iconName: 'cluster-icon',
        },
      ],
      clusterIcons2: [
        {
          textColor: 'white',
          textSize: 16,
          iconName: 'cluster-icon2',
        },
      ],
      symbolDataSource: [],
      symbolDataSource2: [],
    }
  },
  created() {
    const data = [], data2 = []
    for (let i = 0; i < 13; i++) {
      data.push({
        coordinates: [116.678, 31.456],
        properties: {
          label: \`same-\${i}\`,
          icon: 'airport-15',
        },
      })
      data2.push({
        coordinates: [113.788, 31.956],
        properties: {
          label: \`same2-\${i}\`,
          icon: 'airport-15',
        },
      })
    }
    for (let i = 0; i < 5; i++) {
      data.push({
        coordinates: [116.688, 31.456],
        properties: {
          label: \`same-2-\${i}\`,
          icon: 'airport-15',
        },
      })
      data2.push({
        coordinates: [113.798, 31.956],
        properties: {
          label: \`same-2-\${i}\`,
          icon: 'airport-15',
        },
      })
    }
    this.symbolDataSource = data
    this.symbolDataSource2 = data2
  },
}
<\/script>
`,K=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="11" :center="[116.32,39.90]" :glyphs="'//bitjjj.github.io/hongtu-next/' + 'fonts/{fontstack}/{range}.pbf'" :sprite="'//bitjjj.github.io/hongtu-next/' + 'sprites/sprite'">
      <div style="position:absolute;top:5px;left:5px">
        <button class="primary" @click="start">重新开始</button>
      </div>
      <x-tianditu-layer :types="['vec']" />
      <x-image-loader :images="images" />
      <x-polyline-layer
        :data="polylineCoordinates"
        :width="3"
        color="blue"
      />
      <x-symbol-layer
        :data="symbolDataSource"
        icon-image-field="icon"
        icon-anchor="center"
        :icon-size="0.5"
        icon-rotation-alignment="map"
        icon-allow-overlap
        :icon-rotate="['get', 'bearing']"
        icon-ignore-placement
      />
    </x-map>
  </div>
</template>

<script>
import * as turf from '@turf/turf'

export default {
  name: 'SymbolLayerDemo4',
  data() {
    return {
      images: [
        {
          name: 'cluster-icon',
          type: 'link',
          url: '//bitjjj.github.io/hongtu-next/' + 'images/common_toget.png',
        },
        {
          name: 'cluster-icon2',
          type: 'link',
          url: '//bitjjj.github.io/hongtu-next/' + 'images/eme_team_soc_toget.png',
        },
      ],
      counter: 0,
      steps: 9,
      polylineCoordinates: [{ coordinates: [
        [116.28,39.91],
        [116.29,39.91],
        [116.32,39.92],
        [116.33,39.91],
        [116.32,39.90],
        [116.32,39.89],
        [116.30,39.89],
        [116.29,39.89],
        [116.27,39.90],
      ] }],
      symbolDataSource: [{
        coordinates: [116.28,39.91],
        properties: {
          label: \`\`,
          icon: 'cluster-icon',
          iconSize: 0.5,
          bearing: 0,
        },
      }],
    }
  },
  methods: {
    start() {
      this.counter = 0
      this.animate()
    },
    animate() {
      const start =
          this.polylineCoordinates[0].coordinates[
            this.counter >= this.steps ? this.counter - 1 : this.counter
          ]
      const end =
          this.polylineCoordinates[0].coordinates[
            this.counter >= this.steps ? this.counter : this.counter + 1
          ]
      if (!start || !end || this.counter > this.steps) {
        this.counter = 0
        return
      }
      // Update point geometry to a new position based on counter denoting
      // the index to access the arc
      this.symbolDataSource[0].coordinates = this.polylineCoordinates[0].coordinates[this.counter]

      // Calculate the bearing to ensure the icon is rotated to match the route arc
      // The bearing is calculated between the current point and the next point, except
      // at the end of the arc, which uses the previous point and the current point
      this.symbolDataSource[0].properties.bearing = turf.bearing(
        turf.point(start),
        turf.point(end),
      )

      // Request the next frame of animation as long as the end has not been reached
      if (this.counter < this.steps) {
        // requestAnimationFrame(this.animate);
        window.setTimeout(this.animate, 1500)
      }

      this.counter++
    },
  },
}
<\/script>
`,Q=o("h1",{id:"符号图层-symbollayer",tabindex:"-1"},[r("符号图层（SymbolLayer） "),o("a",{class:"header-anchor",href:"#符号图层-symbollayer","aria-label":'Permalink to "符号图层（SymbolLayer）"'},"​")],-1),X=o("p",null,"用来加载点位信息，可设置icon以及text,另还可实现聚合功能",-1),Y={id:"非聚合示例",tabindex:"-1"},ss=o("a",{class:"header-anchor",href:"#非聚合示例","aria-label":'Permalink to "非聚合示例 <play :source-code="DemoSource1" />"'},"​",-1),ns=B("",2),as={id:"聚合示例",tabindex:"-1"},ls=o("a",{class:"header-anchor",href:"#聚合示例","aria-label":'Permalink to "聚合示例 <play :source-code="DemoSource2" />"'},"​",-1),ps=B("",2),os={id:"点避让示例",tabindex:"-1"},es=o("a",{class:"header-anchor",href:"#点避让示例","aria-label":'Permalink to "点避让示例 <play :source-code="DemoSource3" />"'},"​",-1),ts=B("",5),rs={id:"动画示例",tabindex:"-1"},cs=o("a",{class:"header-anchor",href:"#动画示例","aria-label":'Permalink to "动画示例 <play :source-code="DemoSource4" />"'},"​",-1),Fs=B("",11),bs=JSON.parse('{"title":"符号图层（SymbolLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/symbol-layer/index.md"}'),ys={name:"api/core/symbol-layer/index.md"},ds=Object.assign(ys,{setup(a){return(l,s)=>{const t=e("play");return i(),u("div",null,[Q,X,o("h2",Y,[r("非聚合示例 "),n(t,{"source-code":b(Z)},null,8,["source-code"]),r(),ss]),n(w),ns,o("h2",as,[r("聚合示例 "),n(t,{"source-code":b(W)},null,8,["source-code"]),r(),ls]),n(P),ps,o("h2",os,[r("点避让示例 "),n(t,{"source-code":b(G)},null,8,["source-code"]),r(),es]),n(N),ts,o("h2",rs,[r("动画示例 "),n(t,{"source-code":b(K)},null,8,["source-code"]),r(),cs]),n(J),Fs])}}});export{bs as __pageData,ds as default};
