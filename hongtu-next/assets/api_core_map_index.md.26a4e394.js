import{_ as f,B as t,f as u,h as m,x as a,D as p,z as C,t as r,k as D,u as E,N as d}from"./chunks/framework.5deb65a5.js";const q={name:"MapDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:8,bearing:0,pitch:0,mousePosition:void 0}},methods:{createdHandler(l){this.$mapVm=l},mouseMoveHandler(l){this.mousePosition=l.coordinates},easeToRandomPos(){this.$mapVm.easeTo({center:[this.mapCenter[0]+c(-1,1),this.mapCenter[1]+c(-1,1)],duration:2e3}).then(()=>{})},flyToRandomPos(){this.$mapVm.flyTo({center:[c(-180,180),c(-90,90)],zoom:c(0,18)}).then(()=>{})}}};function c(l,n){return Math.random()*(n-l)+l}const _={style:{height:"500px"},class:"vw-full vh-full"},v={style:{height:"400px"}},k={style:{position:"absolute",top:"10px",left:"10px"}},S={style:{height:"60px",margin:"10px 0px"}},z={class:"text-muted"},P={class:"text-muted"},T={class:"text-muted"};function R(l,n,g,F,s,e){const y=t("x-tianditu-layer"),i=t("x-map");return u(),m("div",_,[a("div",v,[p(i,{zoom:s.mapZoom,"onUpdate:zoom":n[2]||(n[2]=o=>s.mapZoom=o),center:s.mapCenter,"onUpdate:center":n[3]||(n[3]=o=>s.mapCenter=o),bearing:s.bearing,"onUpdate:bearing":n[4]||(n[4]=o=>s.bearing=o),pitch:s.pitch,"onUpdate:pitch":n[5]||(n[5]=o=>s.pitch=o),onMousemove:e.mouseMoveHandler,onCreated:e.createdHandler},{default:C(()=>[a("div",k,[a("button",{class:"primary mr10",onClick:n[0]||(n[0]=(...o)=>e.easeToRandomPos&&e.easeToRandomPos(...o))}," 地图平移至附近随机位置 "),a("button",{class:"primary",onClick:n[1]||(n[1]=(...o)=>e.flyToRandomPos&&e.flyToRandomPos(...o))}," 地图飞行至随机位置 ")]),p(y)]),_:1},8,["zoom","center","bearing","pitch","onMousemove","onCreated"]),a("div",S,[a("p",z,"center:"+r(s.mapCenter)+" zoom:"+r(s.mapZoom),1),a("p",P,"bearing:"+r(s.bearing)+" pitch:"+r(s.pitch),1),a("p",T,"鼠标位置："+r(s.mousePosition),1)])])])}const V=f(q,[["render",R]]),j={name:"MapDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:10,symbolDataSource:[],symbolDataSource2:[],symbolDataSource3:[],polygon:[[116.17381,39.92155464],[116.25105956968257,40.02398993628292],[116.31591012802686,39.96769599504311]],images:[{name:"事件",type:"link",url:"//bitjjj.github.io/hongtu-next/images/common_toget.png"},{name:"事件2",type:"link",url:"//bitjjj.github.io/hongtu-next/images/eme_team_soc_toget.png"}],images2:[{name:"事件3",dir:"v",steps:3,duration:300,url:"//bitjjj.github.io/hongtu-next/images/v-steps.png"}]}},mounted(){this.symbolDataSource=[{coordinates:[116.45346681596038,39.90085772830014],properties:{icon:"事件"}},{coordinates:[...this.mapCenter],properties:{icon:"事件"}}],this.symbolDataSource2=[{coordinates:[116.46346681596,39.90085772830014],properties:{icon:"事件2"}},{coordinates:[...this.mapCenter],properties:{icon:"事件2"}}],this.symbolDataSource3=[{coordinates:[116.47346681596038,39.94085772830014],properties:{icon:"事件3",iconSize:.1}},{coordinates:[...this.mapCenter],properties:{icon:"事件3",iconSize:.1}}]},methods:{createdHandler(l){this.$mapVm=l},reorder(l){this.$mapVm.reorderLayers(l)}}},M={style:{height:"500px"},class:"vw-full vh-full"},w={style:{height:"400px"}},H={style:{position:"absolute",top:"10px",left:"10px"}};function I(l,n,g,F,s,e){const y=t("x-image-loader"),i=t("x-image-frame-loader"),o=t("x-tianditu-layer"),b=t("x-symbol-layer"),x=t("x-buffer-ellipse-layer"),A=t("x-buffer-sector-layer"),B=t("x-map");return u(),m("div",M,[a("div",w,[p(B,{zoom:s.mapZoom,center:s.mapCenter,onMousemove:l.mouseMoveHandler,onCreated:e.createdHandler},{default:C(()=>[p(y,{images:s.images},null,8,["images"]),p(i,{images:s.images2},null,8,["images"]),a("div",H,[a("button",{class:"primary mr10",onClick:n[0]||(n[0]=h=>e.reorder(["buffer2","s3","buffer1","s2","s1"]))}," 顺序：buffer2, s3, buffer1, s2, s1(上面) "),a("button",{class:"primary",onClick:n[1]||(n[1]=h=>e.reorder(["s2","s3","s1","buffer2","buffer1"]))}," 顺序：s2, s3, s1, buffer2, buffer1(上面) ")]),p(o),p(b,{id:"s1",data:s.symbolDataSource,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),p(x,{id:"buffer1",center:s.mapCenter,"x-semi-axis":10,"y-semi-axis":5,angle:0,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","center-radius":"6","resizer-color":"green","resizer-radius":"6","rotater-color":"black","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0,visible:l.visible},null,8,["center","visible"]),p(b,{id:"s2",data:s.symbolDataSource2,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],cluster:!0,spiderify:!0,"cluster-max-zoom":18,"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),p(b,{id:"s3",data:s.symbolDataSource3,"text-field":"label","icon-image-field":"icon","icon-size":.5,"text-offset":[0,-1],"icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"]),p(A,{id:"buffer2",polygon:s.polygon,radius:7,center:s.mapCenter,"border-color":"red","border-opacity":.5,"background-color":"red","center-color":"red","resizer-color":"blue","background-opacity":.1,closable:!0,countable:!0,draggable:!0,resizable:!0,rotatable:!0},null,8,["polygon","center"])]),_:1},8,["zoom","center","onMousemove","onCreated"])])])}const Z=f(j,[["render",I]]),L=`<template>
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
          url: '//bitjjj.github.io/hongtu-next/' + 'images/common_toget.png',
        },
        {
          name: '事件2',
          type: 'link',
          url: '//bitjjj.github.io/hongtu-next/' + 'images/eme_team_soc_toget.png',
        },
      ],
      images2: [
        {
          name: '事件3',
          dir: 'v',
          steps: 3,
          duration: 300,
          url: '//bitjjj.github.io/hongtu-next/' + 'images/v-steps.png',
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
`,O=d('<h1 id="地图-map" tabindex="-1">地图（Map） <a class="header-anchor" href="#地图-map" aria-label="Permalink to &quot;地图（Map）&quot;">​</a></h1><p>地图组件 交互方式：左键拖动，右键切换视角</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要在地图中显示字体时，一定要设置 <code>glyphs</code> 属性</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果要自定义坐标系，crs参数格式为：[name, wkt, extent];</p><ul><li>name：坐标系名称，必填</li><li>wkt：坐标系的WKT或者Proj4表述，必填。</li><li>extent: 当前坐标系范围，[左，下，右，上]</li></ul></div>',4),U={id:"示例",tabindex:"-1"},$=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),J=d(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:500px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapZoom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:bearing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bearing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:pitch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pitch</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@mousemove</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mouseMoveHandler</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@created</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">createdHandler</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position:absolute;top:10px;left:10px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary mr10</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">easeToRandomPos</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          &gt;</span></span>
<span class="line"><span style="color:#BABED8;">            地图平移至附近随机位置</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flyToRandomPos</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          &gt;</span></span>
<span class="line"><span style="color:#BABED8;">            地图飞行至随机位置</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:60px;margin:10px 0px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-muted</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">center:{{ mapCenter }} zoom:{{ mapZoom }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-muted</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">bearing:{{ bearing }} pitch:{{ pitch }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-muted</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">鼠标位置：{{ mousePosition }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MapDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      mapCenter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.3466</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.8704</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      mapZoom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      bearing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      pitch</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      mousePosition</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">createdHandler</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">mapVm</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$mapVm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mapVm</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">mouseMoveHandler</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">movement</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mousePosition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">movement</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">coordinates</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">easeToRandomPos</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$mapVm</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">easeTo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          center</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">//平移结束</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">flyToRandomPos</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$mapVm</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flyTo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          center</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">180</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">180</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">90</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">90</span><span style="color:#F07178;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          zoom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">18</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">//飞行结束</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">min</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">max</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">min</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">min</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,2),K={id:"图层重排",tabindex:"-1"},W=a("a",{class:"header-anchor",href:"#图层重排","aria-label":'Permalink to "图层重排 <play :source-code="Demo2Source" />"'},"​",-1),G=d(`<h2 id="源码-1" tabindex="-1">源码 <a class="header-anchor" href="#源码-1" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:500px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapZoom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@mousemove</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mouseMoveHandler</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@created</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">createdHandler</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-image-loader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:images</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-image-frame-loader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:images</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position:absolute;top:10px;left:10px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary mr10</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reorder([&#39;buffer2&#39;, &#39;s3&#39;, &#39;buffer1&#39;, &#39;s2&#39;, &#39;s1&#39;])</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          &gt;</span></span>
<span class="line"><span style="color:#BABED8;">            顺序：buffer2, s3, buffer1, s2, s1(上面)</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reorder([&#39;s2&#39;, &#39;s3&#39;, &#39;s1&#39;, &#39;buffer2&#39;, &#39;buffer1&#39;])</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          &gt;</span></span>
<span class="line"><span style="color:#BABED8;">            顺序：s2, s3, s1, buffer2, buffer1(上面)</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-symbol-layer</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbolDataSource</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">text-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">icon-image-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:icon-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:text-offset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, -1]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">icon-allow-overlap</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">text-allow-overlap</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-buffer-ellipse-layer</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">buffer1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:x-semi-axis</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:y-semi-axis</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:angle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">border-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:border-opacity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">background-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">center-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">center-radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">resizer-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">green</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">resizer-radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">rotater-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:background-opacity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:closable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:countable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:draggable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:resizable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:rotatable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-symbol-layer</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbolDataSource2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">text-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">icon-image-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:icon-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:text-offset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, -1]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:cluster</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:spiderify</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:cluster-max-zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">icon-allow-overlap</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">text-allow-overlap</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-symbol-layer</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbolDataSource3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">text-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">icon-image-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:icon-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:text-offset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, -1]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">icon-allow-overlap</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">text-allow-overlap</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-buffer-sector-layer</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">buffer2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:polygon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polygon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">border-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:border-opacity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">background-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">center-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">resizer-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:background-opacity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:closable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:countable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:draggable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:resizable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:rotatable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MapDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      mapCenter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.3466</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.8704</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      mapZoom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      symbolDataSource</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      symbolDataSource2</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      symbolDataSource3</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      polygon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.17381</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.92155464</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.25105956968257</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">40.02398993628292</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.31591012802686</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.96769599504311</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      images</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/common_toget.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/eme_team_soc_toget.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      images2</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          dir</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          steps</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/v-steps.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">symbolDataSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.45346681596038</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.90085772830014</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...this.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">symbolDataSource2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.46346681596</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.90085772830014</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...this.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">symbolDataSource3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.47346681596038</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.94085772830014</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        iconSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...this.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">事件3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        iconSize</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">createdHandler</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">mapVm</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$mapVm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mapVm</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">reorder</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">layerIds</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$mapVm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reorderLayers</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">layerIds</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getRandomArbitrary</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">min</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">max</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">min</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">min</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>antialias</td><td style="text-align:left;">是否开启抗锯齿模式； 关闭后性能将有所提升</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>bearing</td><td style="text-align:left;">地图初始化时的方位角（旋转角度）</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>bounds</td><td style="text-align:left;">地图初始化时的四至范围。如果设置了 bounds 将会覆盖掉 center 和 zoom 的设置 其值为rectangle的西南点与东北点，例如：[[-73.9876, 40.7661], [-73.9397, 40.8002]]</td><td style="text-align:left;">object / array</td><td style="text-align:left;">undefined</td></tr><tr><td>center</td><td style="text-align:left;">地图地理中心点坐标，采用经度、纬度的顺序</td><td style="text-align:left;">number[]</td><td style="text-align:left;">[116.38745, 39.91266]</td></tr><tr><td>mapStyle</td><td style="text-align:left;">地图样式信息 包括字体文件路径以及精灵图资源路径</td><td style="text-align:left;">object / string</td><td style="text-align:left;">{ version: 8, sources: {}, layers: [], glyphs: &#39;<a href="http://mapbox.front.etcc.group/static/fonts/%7Bfontstack%7D/%7Brange%7D.pbf" target="_blank" rel="noreferrer">http://mapbox.front.etcc.group/static/fonts/{fontstack}/{range}.pbf</a>&#39;, sprite: &quot;<a href="http://mapbox.front.etcc.group/static/sprites/sprite" target="_blank" rel="noreferrer">http://mapbox.front.etcc.group/static/sprites/sprite</a>&quot; }</td></tr><tr><td>glyphs</td><td style="text-align:left;">字体文件路径，可单独设置，会覆盖mapStyle中值</td><td style="text-align:left;">string</td><td style="text-align:left;"><a href="http://mapbox.front.etcc.group/static/fonts/%7Bfontstack%7D/%7Brange%7D.pbf" target="_blank" rel="noreferrer">http://mapbox.front.etcc.group/static/fonts/{fontstack}/{range}.pbf</a></td></tr><tr><td>sprite</td><td style="text-align:left;">雪碧图路径，可单独设置，会覆盖mapStyle中值</td><td style="text-align:left;">string</td><td style="text-align:left;"><a href="http://mapbox.front.etcc.group/static/sprites/sprite" target="_blank" rel="noreferrer">http://mapbox.front.etcc.group/static/sprites/sprite</a></td></tr><tr><td>maxBounds</td><td style="text-align:left;">设置之后，地图将限制在给定的最大范围内</td><td style="text-align:left;">object / array</td><td style="text-align:left;">undefined</td></tr><tr><td>maxzoom</td><td style="text-align:left;">地图最大缩放级别</td><td style="text-align:left;">number</td><td style="text-align:left;">22</td></tr><tr><td>minzoom</td><td style="text-align:left;">地图最小缩放级别</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>pitch</td><td style="text-align:left;">地图初始化时的倾角</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>zoom</td><td style="text-align:left;">地图缩放级别</td><td style="text-align:left;">number</td><td style="text-align:left;">2</td></tr><tr><td>backgroundColor</td><td style="text-align:left;">地图背景色</td><td style="text-align:left;">string</td><td style="text-align:left;">white</td></tr><tr><td>extendProps</td><td style="text-align:left;">扩展属性，可参见Mapbox文档</td><td style="text-align:left;">object</td><td style="text-align:left;">{}</td></tr><tr><td>crs</td><td style="text-align:left;">坐标系，优先级低于extendProps</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">map: mapVm — 组件实例，包含$map字段，mapbox实例</td></tr><tr><td>update:zoom</td><td style="text-align:left;">地图缩放级别变化事件</td><td style="text-align:left;">number</td></tr><tr><td>update:center</td><td style="text-align:left;">地图中心点变化事件</td><td style="text-align:left;">number[]</td></tr><tr><td>update:bearing</td><td style="text-align:left;">地图方位角变化事件</td><td style="text-align:left;">number</td></tr><tr><td>update:pitch</td><td style="text-align:left;">地图倾角变化事件</td><td style="text-align:left;">number</td></tr><tr><td>click</td><td style="text-align:left;">鼠标点击事件 每次点击都会触发</td><td style="text-align:left;">object — 包含屏幕坐标pixel与经纬度coordinate，originalEvent</td></tr><tr><td>dblclick</td><td style="text-align:left;">鼠标双击事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel与经纬度coordinate，originalEvent</td></tr><tr><td>singleclick</td><td style="text-align:left;">鼠标单击事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel与经纬度coordinate，originalEvent</td></tr><tr><td>mousemove</td><td style="text-align:left;">鼠标移动事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel与经纬度coordinate，originalEvent</td></tr><tr><td>mouseout</td><td style="text-align:left;">鼠标离开地图事件</td><td style="text-align:left;">MapMouseEvent</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td>default</td><td style="text-align:left;">默认插槽</td></tr></tbody></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td>moveLayer</td><td style="text-align:left;">将图层移动到beforeId所代表的图层前，若beforeId为空，则将图层移动至数组列表末尾（地图最顶层）</td><td style="text-align:left;"><code>id: string, beforeId: string | undefined</code></td></tr><tr><td>resize</td><td style="text-align:left;">根据其 container 元素的尺寸调整地图的大小</td><td style="text-align:left;">-</td></tr><tr><td>setCenter</td><td style="text-align:left;">设置地图中心点</td><td style="text-align:left;"><code>centerValue: number[] — 经纬度数组</code></td></tr><tr><td>jumpTo</td><td style="text-align:left;">不用动态转换的情况下改变中心点、 缩放级别、方位角和倾斜度。地图将保留 options 没有指定的当前值。</td><td style="text-align:left;"><code>options: object{center, zoom, bearing, pitch}</code></td></tr><tr><td>easeTo</td><td style="text-align:left;">使用动态转换，将中心点、缩放级别、方位角和倾斜度组合的原有数值改为新数值。地图将保留 options 没有指定的当前值。</td><td style="text-align:left;"><code>options: object{center, zoom, bearing, pitch, duration = 1000, easing, offset} =&gt; promise</code></td></tr><tr><td>flyTo</td><td style="text-align:left;">按照飞行曲线到移动到目标位置。</td><td style="text-align:left;"><code>options: object{center, zoom, bearing, pitch, duration, easing, offset, animate, curve=1.42, speed=1.2, maxDuration} =&gt; promise</code></td></tr><tr><td>stop</td><td style="text-align:left;">停止所有地图平移/飞行。</td><td style="text-align:left;">-</td></tr><tr><td>cameraForBounds</td><td style="text-align:left;">根据目标四至范围计算返回对应的镜头参数。</td><td style="text-align:left;"><code>bounds: number[] — 四至范围，其值的西南点与东北点，例如：[[-73.9876, 40.7661], [-73.9397, 40.8002]], options: object{padding,offset=[0,0]}</code></td></tr><tr><td>fitBounds</td><td style="text-align:left;">在指定的地理边界内平移和缩放地图，以包含其可见区域。</td><td style="text-align:left;"><code>bounds: number[] — 四至范围，其值的西南点与东北点，例如：[[-73.9876, 40.7661], [-73.9397, 40.8002]], options: object{padding,linear=false,offset=[0,0]}</code></td></tr><tr><td>project</td><td style="text-align:left;">返回一个表示像素坐标的Point，相对于地图的container，与指定的地理位置相对应。</td><td style="text-align:left;"><code>lnglatLike</code></td></tr><tr><td>reorderLayers</td><td style="text-align:left;">重排图层，参数为图层Id数组</td><td style="text-align:left;"><code>string[]</code></td></tr></tbody></table>`,11),Y=JSON.parse('{"title":"地图（Map）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map/index.md"}'),Q={name:"api/core/map/index.md"},ss=Object.assign(Q,{setup(l){return(n,g)=>{const F=t("play");return u(),m("div",null,[O,a("h2",U,[D("示例 "),p(F,{"source-code":E(L)},null,8,["source-code"]),D(),$]),p(V),J,a("h2",K,[D("图层重排 "),p(F,{"source-code":E(N)},null,8,["source-code"]),D(),W]),p(Z),G])}}});export{Y as __pageData,ss as default};
