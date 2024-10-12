import{_ as f,B as t,f as u,h as m,x as a,D as p,z as C,t as r,k as D,u as E,N as d}from"./chunks/framework.5deb65a5.js";const q={name:"MapDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:8,bearing:0,pitch:0,mousePosition:void 0}},methods:{createdHandler(l){this.$mapVm=l},mouseMoveHandler(l){this.mousePosition=l.coordinates},easeToRandomPos(){this.$mapVm.easeTo({center:[this.mapCenter[0]+c(-1,1),this.mapCenter[1]+c(-1,1)],duration:2e3}).then(()=>{})},flyToRandomPos(){this.$mapVm.flyTo({center:[c(-180,180),c(-90,90)],zoom:c(0,18)}).then(()=>{})}}};function c(l,n){return Math.random()*(n-l)+l}const _={style:{height:"500px"},class:"vw-full vh-full"},v={style:{height:"400px"}},k={style:{position:"absolute",top:"10px",left:"10px"}},S={style:{height:"60px",margin:"10px 0px"}},z={class:"text-muted"},P={class:"text-muted"},T={class:"text-muted"};function R(l,n,g,F,s,e){const y=t("x-tianditu-layer"),i=t("x-map");return u(),m("div",_,[a("div",v,[p(i,{zoom:s.mapZoom,"onUpdate:zoom":n[2]||(n[2]=o=>s.mapZoom=o),center:s.mapCenter,"onUpdate:center":n[3]||(n[3]=o=>s.mapCenter=o),bearing:s.bearing,"onUpdate:bearing":n[4]||(n[4]=o=>s.bearing=o),pitch:s.pitch,"onUpdate:pitch":n[5]||(n[5]=o=>s.pitch=o),onMousemove:e.mouseMoveHandler,onCreated:e.createdHandler},{default:C(()=>[a("div",k,[a("button",{class:"primary mr10",onClick:n[0]||(n[0]=(...o)=>e.easeToRandomPos&&e.easeToRandomPos(...o))}," 地图平移至附近随机位置 "),a("button",{class:"primary",onClick:n[1]||(n[1]=(...o)=>e.flyToRandomPos&&e.flyToRandomPos(...o))}," 地图飞行至随机位置 ")]),p(y)]),_:1},8,["zoom","center","bearing","pitch","onMousemove","onCreated"]),a("div",S,[a("p",z,"center:"+r(s.mapCenter)+" zoom:"+r(s.mapZoom),1),a("p",P,"bearing:"+r(s.bearing)+" pitch:"+r(s.pitch),1),a("p",T,"鼠标位置："+r(s.mousePosition),1)])])])}const V=f(q,[["render",R]]),M={name:"MapDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:10,symbolDataSource:[],symbolDataSource2:[],symbolDataSource3:[],polygon:[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311]],images:[{name:"事件",type:"link",url:"//hongluan-ui.github.io/hongtu-next/images/common_toget.png"},{name:"事件2",type:"link",url:"//hongluan-ui.github.io/hongtu-next/images/eme_team_soc_toget.png"}],images2:[{name:"事件3",dir:"v",steps:3,duration:300,url:"//hongluan-ui.github.io/hongtu-next/images/v-steps.png"}]}},mounted(){this.symbolDataSource=[{coordinates:[116.45346681596038,39.90085772830014],properties:{icon:"事件"}},{coordinates:[...this.mapCenter],properties:{icon:"事件"}}],this.symbolDataSource2=[{coordinates:[116.46346681596,39.90085772830014],properties:{icon:"事件2"}},{coordinates:[...this.mapCenter],properties:{icon:"事件2"}}],this.symbolDataSource3=[{coordinates:[116.47346681596038,39.94085772830014],properties:{icon:"事件3",iconSize:.1}},{coordinates:[...this.mapCenter],properties:{icon:"事件3",iconSize:.1}}]},methods:{createdHandler(l){this.$mapVm=l},reorder(l){this.$mapVm.reorderLayers(l)}}},w={style:{height:"500px"},class:"vw-full vh-full"},H={style:{height:"400px"}},j={style:{position:"absolute",top:"10px",left:"10px"}};function I(l,n,g,F,s,e){const y=t("x-image-loader"),i=t("x-image-frame-loader"),o=t("x-tianditu-layer"),b=t("x-symbol-layer"),x=t("x-buffer-ellipse-layer"),A=t("x-buffer-sector-layer"),B=t("x-map");return u(),m("div",w,[a("div",H,[p(B,{zoom:s.mapZoom,center:s.mapCenter,onMousemove:l.mouseMoveHandler,onCreated:e.createdHandler},{default:C(()=>[p(y,{images:s.images},null,8,["images"]),p(i,{images:s.images2},null,8,["images"]),a("div",j,[a("button",{class:"primary mr10",onClick:n[0]||(n[0]=h=>e.reorder(["buffer2","s3","buffer1","s2","s1"]))}," 顺序：buffer2, s3, buffer1, s2, s1(上面) "),a("button",{class:"primary",onClick:n[1]||(n[1]=h=>e.reorder(["s2","s3","s1","buffer2","buffer1"]))}," 顺序：s2, s3, s1, buffer2, buffer1(上面) ")]),p(o),p(b,{id:"s1",data:s.symbolDataSource,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),p(x,{id:"buffer1",center:s.mapCenter,"x-semi-axis":10,"y-semi-axis":5,angle:0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","center-radius":"6","resizer-color":"green","resizer-radius":"6","rotater-color":"black","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0,visible:l.visible},null,8,["center","visible"]),p(b,{id:"s2",data:s.symbolDataSource2,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],cluster:!0,spiderify:!0,"cluster-max-zoom":18,"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),p(b,{id:"s3",data:s.symbolDataSource3,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),p(A,{id:"buffer2",polygon:s.polygon,radius:7,center:s.mapCenter,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0},null,8,["polygon","center"])]),_:1},8,["zoom","center","onMousemove","onCreated"])])])}const Z=f(M,[["render",I]]),L=`<template>
  <div style="height:500px" class="vw-full vh-full">
    <div style="height:400px">
      <x-map
        v-model:zoom="mapZoom"
        v-model:center="mapCenter"
        v-model:bearing="bearing"
        v-model:pitch="pitch"
        @mousemove="mouseMoveHandler"
        @created="createdHandler"
      >
        <div style="position:absolute;top:10px;left:10px">
          <button
            class="primary mr10"
            @click="easeToRandomPos"
          >
            地图平移至附近随机位置
          </button>
          <button
            class="primary"
            @click="flyToRandomPos"
          >
            地图飞行至随机位置
          </button>
        </div>
        <x-tianditu-layer />
      </x-map>
      <div style="height:60px;margin:10px 0px;">
        <p class="text-muted">center:{{ mapCenter }} zoom:{{ mapZoom }}</p>
        <p class="text-muted">bearing:{{ bearing }} pitch:{{ pitch }}</p>
        <p class="text-muted">鼠标位置：{{ mousePosition }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MapDemo',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 8,
      bearing: 0,
      pitch: 0,
      mousePosition: undefined,
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.$mapVm = mapVm
    },
    mouseMoveHandler(movement) {
      this.mousePosition = movement.coordinates
    },
    easeToRandomPos() {
      this.$mapVm
        .easeTo({
          center: [
            this.mapCenter[0] + getRandomArbitrary(-1, 1),
            this.mapCenter[1] + getRandomArbitrary(-1, 1),
          ],
          duration: 2000,
        })
        .then(() => {
          //平移结束
        })
    },
    flyToRandomPos() {
      this.$mapVm
        .flyTo({
          center: [getRandomArbitrary(-180, 180), getRandomArbitrary(-90, 90)],
          zoom: getRandomArbitrary(0, 18),
        })
        .then(() => {
          //飞行结束
        })
    },
  },
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
<\/script>
`,N=`<template>
  <div style="height:500px" class="vw-full vh-full">
    <div style="height:400px">
      <x-map
        :zoom="mapZoom"
        :center="mapCenter"
        @mousemove="mouseMoveHandler"
        @created="createdHandler"
      >
        <x-image-loader :images="images" />
        <x-image-frame-loader :images="images2" />
        <div style="position:absolute;top:10px;left:10px">
          <button
            class="primary mr10"
            @click="reorder(['buffer2', 's3', 'buffer1', 's2', 's1'])"
          >
            顺序：buffer2, s3, buffer1, s2, s1(上面)
          </button>
          <button
            class="primary"
            @click="reorder(['s2', 's3', 's1', 'buffer2', 'buffer1'])"
          >
            顺序：s2, s3, s1, buffer2, buffer1(上面)
          </button>
        </div>
        <x-tianditu-layer />
        <x-symbol-layer
          id="s1"
          :data="symbolDataSource"
          text-field="label"
          icon-image-field="icon"
          :icon-size="0.5"
          :text-offset="[0, -1]"
          icon-allow-overlap
          text-allow-overlap
        />
        <x-buffer-ellipse-layer
          id="buffer1"
          :center="mapCenter"
          :x-semi-axis="10"
          :y-semi-axis="5"
          :angle="0"
          border-color="red"
          :border-opacity="0.5"
          background-color="red"
          center-color="red"
          center-radius="6"
          resizer-color="green"
          resizer-radius="6"
          rotater-color="black"
          :background-opacity="0.1"
          :closable="true"
          :countable="true"
          :draggable="true"
          :resizable="true"
          :rotatable="true"
          :visible="visible"
        />
        <x-symbol-layer
          id="s2"
          :data="symbolDataSource2"
          text-field="label"
          icon-image-field="icon"
          :icon-size="0.5"
          :text-offset="[0, -1]"
          :cluster="true"
          :spiderify="true"
          :cluster-max-zoom="18"
          icon-allow-overlap
          text-allow-overlap
        />
        <x-symbol-layer
          id="s3"
          :data="symbolDataSource3"
          text-field="label"
          icon-image-field="icon"
          :icon-size="0.5"
          :text-offset="[0, -1]"
          icon-allow-overlap
          text-allow-overlap
        />
        <x-buffer-sector-layer
          id="buffer2"
          :polygon="polygon"
          :radius="7"
          :center="mapCenter"
          border-color="red"
          :border-opacity="0.5"
          background-color="red"
          center-color="red"
          resizer-color="blue"
          :background-opacity="0.1"
          :closable="true"
          :countable="true"
          :draggable="true"
          :resizable="true"
          :rotatable="true"
        />
      </x-map>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MapDemo',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 10,
      symbolDataSource: [],
      symbolDataSource2: [],
      symbolDataSource3: [],
      polygon: [
        [116.17381, 39.92155464],
        [116.25105956968257, 40.02398993628292],
        [116.31591012802686, 39.96769599504311],
      ],
      images: [
        {
          name: '事件',
          type: 'link',
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/common_toget.png',
        },
        {
          name: '事件2',
          type: 'link',
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/eme_team_soc_toget.png',
        },
      ],
      images2: [
        {
          name: '事件3',
          dir: 'v',
          steps: 3,
          duration: 300,
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/v-steps.png',
        },
      ],
    }
  },
  mounted() {
    this.symbolDataSource = [{
      coordinates: [116.45346681596038, 39.90085772830014],
      properties: {
        icon: '事件',
      },
    }, {
      coordinates: [...this.mapCenter],
      properties: {
        icon: '事件',
      },
    }]
    this.symbolDataSource2 = [{
      coordinates: [116.46346681596, 39.90085772830014],
      properties: {
        icon: '事件2',
      },
    }, {
      coordinates: [...this.mapCenter],
      properties: {
        icon: '事件2',
      },
    }]
    this.symbolDataSource3 = [{
      coordinates: [116.47346681596038, 39.94085772830014],
      properties: {
        icon: '事件3',
        iconSize: 0.1,
      },
    }, {
      coordinates: [...this.mapCenter],
      properties: {
        icon: '事件3',
        iconSize: 0.1,
      },
    }]
  },
  methods: {
    createdHandler(mapVm) {
      this.$mapVm = mapVm
    },
    reorder(layerIds) {
      this.$mapVm.reorderLayers(layerIds)
    },
  },
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
<\/script>
`,O=d("",4),U={id:"示例",tabindex:"-1"},$=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),J=d("",2),K={id:"图层重排",tabindex:"-1"},W=a("a",{class:"header-anchor",href:"#图层重排","aria-label":'Permalink to "图层重排 <play :source-code="Demo2Source" />"'},"​",-1),G=d("",11),Y=JSON.parse('{"title":"地图（Map）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map/index.md"}'),Q={name:"api/core/map/index.md"},ss=Object.assign(Q,{setup(l){return(n,g)=>{const F=t("play");return u(),m("div",null,[O,a("h2",U,[D("示例 "),p(F,{"source-code":E(L)},null,8,["source-code"]),D(),$]),p(V),J,a("h2",K,[D("图层重排 "),p(F,{"source-code":E(N)},null,8,["source-code"]),D(),W]),p(Z),G])}}});export{Y as __pageData,ss as default};
