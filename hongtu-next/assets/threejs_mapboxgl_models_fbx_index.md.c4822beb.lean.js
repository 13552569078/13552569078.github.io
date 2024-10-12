import{C as b,l as A,w as E,ar as u,as as h,at as C,i as D,V as f}from"./chunks/three.module.f4768b42.js";import{F as x}from"./chunks/FBXLoader.338411e0.js";import{_ as g,B as i,f as B,h as d,x as t,D as y,z as T,k as m,u as v,N as _}from"./chunks/framework.5deb65a5.js";const M={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45,altitude:0}},methods:{createdHandler(s){this.map=s.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new b},add3DLayer(){this.loaderModels()},loaderModels(){const s=this.mapboxgl.MercatorCoordinate.fromLngLat(this.mapCenter,this.altitude),a={translateX:s.x,translateY:s.y,translateZ:s.z,scale:s.meterInMercatorCoordinateUnits()};new x().load("//bitjjj.github.io/hongtu-next/fbx/Samba Dancing.fbx",p=>{const n=new A(p);n.clipAction(p.animations[0]).play(),this.mixers.push(n),this.addThreeLayer(a,p)})},addThreeLayer(s,a){const e=this,p={id:"3d-model",type:"custom",renderingMode:"3d",onAdd:function(n,o){this.camera=new E,this.scene=new u,this.clock=new b,a.rotation.x=Math.PI/2,this.scene.add(a);{const r=new h(11657727,12155424,3);this.scene.add(r)}this.map=n,this.renderer=new C({canvas:n.getCanvas(),context:o,antialias:!0}),this.renderer.autoClear=!1},render:function(n,o){var c=new D().fromArray(o),F=new D().makeTranslation(s.translateX,s.translateY,s.translateZ).scale(new f(s.scale,-s.scale,s.scale));this.camera.projectionMatrix=c.clone().multiply(F),this.camera.matrixWorldInverse=new D,this.renderer.resetState();const l=this.clock.getDelta();for(let r=0;r<e.mixers.length;r++)e.mixers[r].update(l);this.renderer.render(this.scene,this.camera),this.map.triggerRepaint()}};this.map.addLayer(p)}}},w={style:{height:"500px"},class:"vw-full vh-full"},L={style:{height:"400px"}};function R(s,a,e,p,n,o){const c=i("x-tianditu-layer"),F=i("x-map");return B(),d("div",w,[t("div",L,[y(F,{zoom:n.mapZoom,"onUpdate:zoom":a[0]||(a[0]=l=>n.mapZoom=l),center:n.mapCenter,"onUpdate:center":a[1]||(a[1]=l=>n.mapCenter=l),bearing:n.bearing,"onUpdate:bearing":a[2]||(a[2]=l=>n.bearing=l),pitch:n.pitch,"onUpdate:pitch":a[3]||(a[3]=l=>n.pitch=l),onCreated:o.createdHandler},{default:T(()=>[y(c,{onCreated:o.add3DLayer},null,8,["onCreated"])]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const H=g(M,[["render",R]]),k=`<template>
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
      loader.load('//bitjjj.github.io/hongtu-next/' + 'fbx/Samba Dancing.fbx', dancer => {
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
`,S=t("h1",{id:"fbx格式",tabindex:"-1"},[m("FBX格式 "),t("a",{class:"header-anchor",href:"#fbx格式","aria-label":'Permalink to "FBX格式"'},"​")],-1),q={id:"示例",tabindex:"-1"},j=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),X=_("",2),z=JSON.parse('{"title":"FBX格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/mapboxgl/models/fbx/index.md"}'),V={name:"threejs/mapboxgl/models/fbx/index.md"},U=Object.assign(V,{setup(s){return(a,e)=>{const p=i("play");return B(),d("div",null,[S,t("h2",q,[m("示例 "),y(p,{"source-code":v(k)},null,8,["source-code"]),m(),j]),y(H),X])}}});export{z as __pageData,U as default};
