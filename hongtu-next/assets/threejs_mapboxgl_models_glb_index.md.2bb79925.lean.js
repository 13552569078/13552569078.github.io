import{C as b,l as A,w as E,ar as u,as as h,at as C,i as D,V as g}from"./chunks/three.module.f4768b42.js";import{G as f}from"./chunks/GLTFLoader.37b39c6e.js";import{_ as x,B as i,f as B,h as d,x as t,D as y,z as T,k as m,u as L,N as v}from"./chunks/framework.5deb65a5.js";const _={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:15,bearing:0,pitch:45,altitude:200}},methods:{createdHandler(n){this.map=n.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new b},add3DLayer(){this.loaderModels()},loaderModels(){const n=this.mapboxgl.MercatorCoordinate.fromLngLat(this.mapCenter,this.altitude),a={translateX:n.x,translateY:n.y,translateZ:n.z,scale:n.meterInMercatorCoordinateUnits()};new f().load("//hongluan-ui.github.io/hongtu-next/gltf/Flamingo/Flamingo.glb",o=>{const s=o.scene;s.scale.multiplyScalar(80),s.rotation.y=-1,s.rotation.x=Math.PI/2;const p=new A(o.scene.children[0]);p.clipAction(o.animations[0]).setDuration(1).play(),this.mixers.push(p),this.addThreeLayer(a,s)})},addThreeLayer(n,a){const e=this,o={id:"3d-model",type:"custom",renderingMode:"3d",onAdd:function(s,p){this.camera=new E,this.scene=new u,this.clock=new b,this.scene.add(a);{const r=new h(11657727,12155424,3);this.scene.add(r)}this.map=s,this.renderer=new C({canvas:s.getCanvas(),context:p,antialias:!0}),this.renderer.autoClear=!1},render:function(s,p){var c=new D().fromArray(p),F=new D().makeTranslation(n.translateX,n.translateY,n.translateZ).scale(new g(n.scale,-n.scale,n.scale));this.camera.projectionMatrix=c.clone().multiply(F),this.camera.matrixWorldInverse=new D,this.renderer.resetState();const l=this.clock.getDelta();for(let r=0;r<e.mixers.length;r++)e.mixers[r].update(l);this.renderer.render(this.scene,this.camera),this.map.triggerRepaint()}};this.map.addLayer(o)}}},M={style:{height:"500px"},class:"vw-full vh-full"},w={style:{height:"400px"}};function R(n,a,e,o,s,p){const c=i("x-tianditu-layer"),F=i("x-map");return B(),d("div",M,[t("div",w,[y(F,{zoom:s.mapZoom,"onUpdate:zoom":a[0]||(a[0]=l=>s.mapZoom=l),center:s.mapCenter,"onUpdate:center":a[1]||(a[1]=l=>s.mapCenter=l),bearing:s.bearing,"onUpdate:bearing":a[2]||(a[2]=l=>s.bearing=l),pitch:s.pitch,"onUpdate:pitch":a[3]||(a[3]=l=>s.pitch=l),onCreated:p.createdHandler},{default:T(()=>[y(c,{onCreated:p.add3DLayer},null,8,["onCreated"])]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const H=x(_,[["render",R]]),k=`<template>
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
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default {
  name: 'Map3D',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 15,
      bearing: 0,
      pitch: 45,
      altitude: 200,
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

      const loader = new GLTFLoader()
      loader.load('//hongluan-ui.github.io/hongtu-next/' + 'gltf/Flamingo/Flamingo.glb', gltf => {
        const bird = gltf.scene

        bird.scale.multiplyScalar(80)
        bird.rotation.y = -1
        bird.rotation.x = Math.PI / 2

        const mixer = new THREE.AnimationMixer(gltf.scene.children[0])
        mixer.clipAction(gltf.animations[0]).setDuration(1).play()
        this.mixers.push(mixer)

        this.addThreeLayer(modelTransform, bird)
      })
    },
    addThreeLayer(modelTransform, bird) {
      const self = this
      const threeLayer = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function(map, gl) {
          this.camera = new THREE.PerspectiveCamera()
          this.scene = new THREE.Scene()
          this.clock = new THREE.Clock()

          this.scene.add(bird)

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
`,S=t("h1",{id:"glb或gltf格式",tabindex:"-1"},[m("GLB或GLTF格式 "),t("a",{class:"header-anchor",href:"#glb或gltf格式","aria-label":'Permalink to "GLB或GLTF格式"'},"​")],-1),q={id:"示例",tabindex:"-1"},G=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),V=v("",2),z=JSON.parse('{"title":"GLB或GLTF格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/mapboxgl/models/glb/index.md"}'),I={name:"threejs/mapboxgl/models/glb/index.md"},U=Object.assign(I,{setup(n){return(a,e)=>{const o=i("play");return B(),d("div",null,[S,t("h2",q,[m("示例 "),y(o,{"source-code":L(k)},null,8,["source-code"]),m(),G]),y(H),V])}}});export{z as __pageData,U as default};
