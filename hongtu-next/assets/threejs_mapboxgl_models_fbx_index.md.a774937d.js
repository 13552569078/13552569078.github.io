import{C as b,l as A,w as E,ar as u,as as h,at as C,i as D,V as f}from"./chunks/three.module.f4768b42.js";import{F as x}from"./chunks/FBXLoader.338411e0.js";import{_ as g,B as i,f as B,h as d,x as t,D as y,z as T,k as m,u as v,N as _}from"./chunks/framework.5deb65a5.js";const M={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45,altitude:0}},methods:{createdHandler(s){this.map=s.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new b},add3DLayer(){this.loaderModels()},loaderModels(){const s=this.mapboxgl.MercatorCoordinate.fromLngLat(this.mapCenter,this.altitude),a={translateX:s.x,translateY:s.y,translateZ:s.z,scale:s.meterInMercatorCoordinateUnits()};new x().load("//hongluan-ui.github.io/hongtu-next/fbx/Samba Dancing.fbx",p=>{const n=new A(p);n.clipAction(p.animations[0]).play(),this.mixers.push(n),this.addThreeLayer(a,p)})},addThreeLayer(s,a){const e=this,p={id:"3d-model",type:"custom",renderingMode:"3d",onAdd:function(n,o){this.camera=new E,this.scene=new u,this.clock=new b,a.rotation.x=Math.PI/2,this.scene.add(a);{const r=new h(11657727,12155424,3);this.scene.add(r)}this.map=n,this.renderer=new C({canvas:n.getCanvas(),context:o,antialias:!0}),this.renderer.autoClear=!1},render:function(n,o){var c=new D().fromArray(o),F=new D().makeTranslation(s.translateX,s.translateY,s.translateZ).scale(new f(s.scale,-s.scale,s.scale));this.camera.projectionMatrix=c.clone().multiply(F),this.camera.matrixWorldInverse=new D,this.renderer.resetState();const l=this.clock.getDelta();for(let r=0;r<e.mixers.length;r++)e.mixers[r].update(l);this.renderer.render(this.scene,this.camera),this.map.triggerRepaint()}};this.map.addLayer(p)}}},w={style:{height:"500px"},class:"vw-full vh-full"},L={style:{height:"400px"}};function R(s,a,e,p,n,o){const c=i("x-tianditu-layer"),F=i("x-map");return B(),d("div",w,[t("div",L,[y(F,{zoom:n.mapZoom,"onUpdate:zoom":a[0]||(a[0]=l=>n.mapZoom=l),center:n.mapCenter,"onUpdate:center":a[1]||(a[1]=l=>n.mapCenter=l),bearing:n.bearing,"onUpdate:bearing":a[2]||(a[2]=l=>n.bearing=l),pitch:n.pitch,"onUpdate:pitch":a[3]||(a[3]=l=>n.pitch=l),onCreated:o.createdHandler},{default:T(()=>[y(c,{onCreated:o.add3DLayer},null,8,["onCreated"])]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const H=g(M,[["render",R]]),k=`<template>
  <div style="height:500px" class="vw-full vh-full">
    <div style="height:400px">
      <x-map
        v-model:zoom="mapZoom"
        v-model:center="mapCenter"
        v-model:bearing="bearing"
        v-model:pitch="pitch"
        @created="createdHandler"
      >
        <x-tianditu-layer @created="add3DLayer" />
      </x-map>
    </div>
  </div>
</template>
<script>
import * as THREE from 'three'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'

export default {
  name: 'Map3D',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 16,
      bearing: 0,
      pitch: 45,
      altitude: 0,
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.map = mapVm.$map
      this.mapboxgl = this.map.mapboxgl
      this.mixers = []
      this.clock = new THREE.Clock()
    },
    add3DLayer() {
      this.loaderModels()
    },
    loaderModels() {
      const modelAsMercatorCoordinate = this.mapboxgl.MercatorCoordinate.fromLngLat(
        this.mapCenter, this.altitude,
      )

      // transformation parameters to position, rotate and scale the 3D model onto the map
      const modelTransform = {
        translateX: modelAsMercatorCoordinate.x,
        translateY: modelAsMercatorCoordinate.y,
        translateZ: modelAsMercatorCoordinate.z,
        /* Since our 3D model is in real world meters, a scale transform needs to be
        * applied since the CustomLayerInterface expects units in MercatorCoordinates.
        */
        scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
      }

      const loader = new FBXLoader()
      loader.load('//hongluan-ui.github.io/hongtu-next/' + 'fbx/Samba Dancing.fbx', dancer => {
        // dancer.scale.multiplyScalar(1)
        const mixer = new THREE.AnimationMixer(dancer)
        const action = mixer.clipAction(dancer.animations[0])
        action.play()

        this.mixers.push( mixer )

        this.addThreeLayer(modelTransform, dancer)
      })
    },
    addThreeLayer(modelTransform, dancer) {
      const self = this
      const threeLayer = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function(map, gl) {
          this.camera = new THREE.PerspectiveCamera()
          this.scene = new THREE.Scene()
          this.clock = new THREE.Clock()

          dancer.rotation.x = Math.PI / 2
          this.scene.add(dancer)

          {
            const skyColor = 0xB1E1FF // light blue
            const groundColor = 0xB97A20 // brownish orange
            const intensity = 3
            const light = new THREE.HemisphereLight( skyColor, groundColor, intensity )
            this.scene.add( light )
          }

          this.map = map

          // use the Mapbox GL JS map canvas for three.js
          this.renderer = new THREE.WebGLRenderer({
            canvas: map.getCanvas(),
            context: gl,
            antialias: true,
          })

          this.renderer.autoClear = false
        },
        render: function(gl, matrix) {
          var m = new THREE.Matrix4().fromArray(matrix)
          var l = new THREE.Matrix4()
            .makeTranslation(
              modelTransform.translateX,
              modelTransform.translateY,
              modelTransform.translateZ,
            )
            .scale(
              new THREE.Vector3(
                modelTransform.scale,
                -modelTransform.scale,
                modelTransform.scale,
              ),
            )

          this.camera.projectionMatrix = m.clone().multiply(l)
          this.camera.matrixWorldInverse = new THREE.Matrix4()
          this.renderer.resetState()

          const delta = this.clock.getDelta()
          for (let i = 0; i < self.mixers.length; i++) {
            self.mixers[i].update(delta)
          }

          this.renderer.render(this.scene, this.camera)

          this.map.triggerRepaint()
        },
      }
      this.map.addLayer(threeLayer)
    },
  },
}
<\/script>
`,S=t("h1",{id:"fbx格式",tabindex:"-1"},[m("FBX格式 "),t("a",{class:"header-anchor",href:"#fbx格式","aria-label":'Permalink to "FBX格式"'},"​")],-1),q={id:"示例",tabindex:"-1"},X=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),V=_(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:500px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapZoom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:bearing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bearing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:pitch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pitch</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@created</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">createdHandler</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@created</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add3DLayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FBXLoader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three/addons/loaders/FBXLoader.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Map3D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      mapCenter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.3466</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.8704</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      mapZoom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      bearing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      pitch</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      altitude</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">createdHandler</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">mapVm</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mapVm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">$map</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapboxgl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mapboxgl</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mixers</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">clock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Clock</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">add3DLayer</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">loaderModels</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">loaderModels</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">modelAsMercatorCoordinate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapboxgl</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">MercatorCoordinate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromLngLat</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">altitude</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// transformation parameters to position, rotate and scale the 3D model onto the map</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">modelTransform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        translateX</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">modelAsMercatorCoordinate</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">x</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        translateY</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">modelAsMercatorCoordinate</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        translateZ</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">modelAsMercatorCoordinate</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">z</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">/* Since our 3D model is in real world meters, a scale transform needs to be</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        * applied since the CustomLayerInterface expects units in MercatorCoordinates.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        */</span></span>
<span class="line"><span style="color:#F07178;">        scale</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">modelAsMercatorCoordinate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">meterInMercatorCoordinateUnits</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">loader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">FBXLoader</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fbx/Samba Dancing.fbx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">dancer</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// dancer.scale.multiplyScalar(1)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mixer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AnimationMixer</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">dancer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mixer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clipAction</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">dancer</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">animations</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">action</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mixers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">( </span><span style="color:#BABED8;">mixer</span><span style="color:#F07178;"> )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addThreeLayer</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">dancer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">addThreeLayer</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">modelTransform</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">dancer</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">self</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">threeLayer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3d-model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        renderingMode</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">onAdd</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">map</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">gl</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">camera</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">scene</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">clock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Clock</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#BABED8;">dancer</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">PI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">dancer</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">skyColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0xB1E1FF</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// light blue</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">groundColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0xB97A20</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// brownish orange</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">intensity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">light</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HemisphereLight</span><span style="color:#F07178;">( </span><span style="color:#BABED8;">skyColor</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">groundColor</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">intensity</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">( </span><span style="color:#BABED8;">light</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">map</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// use the Mapbox GL JS map canvas for three.js</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">renderer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            canvas</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCanvas</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            context</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">gl</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            antialias</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">autoClear</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">gl</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">matrix</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">m</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Matrix4</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromArray</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">matrix</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Matrix4</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">makeTranslation</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">translateX</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">translateY</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">translateZ</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            )</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scale</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#BABED8;">modelTransform</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">              )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">projectionMatrix</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">m</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">multiply</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">l</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">matrixWorldInverse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Matrix4</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resetState</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">delta</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">clock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDelta</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">self</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mixers</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">self</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mixers</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">delta</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">camera</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">triggerRepaint</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addLayer</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">threeLayer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br></div></div>`,2),z=JSON.parse('{"title":"FBX格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/mapboxgl/models/fbx/index.md"}'),I={name:"threejs/mapboxgl/models/fbx/index.md"},U=Object.assign(I,{setup(s){return(a,e)=>{const p=i("play");return B(),d("div",null,[S,t("h2",q,[m("示例 "),y(p,{"source-code":v(k)},null,8,["source-code"]),m(),X]),y(H),V])}}});export{z as __pageData,U as default};
