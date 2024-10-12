import{ap as i,c as A,A as d}from"./chunks/three.module.f4768b42.js";import{M as E,O as u}from"./chunks/MTLLoader.72c8e4f6.js";import{_ as h,B as y,f as m,h as B,x as c,D as F,z as f,k as D,u as C,N as g}from"./chunks/framework.5deb65a5.js";const L={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:15,bearing:0,pitch:45}},methods:{createdHandler(p){this.map=p.$map,this.mapboxgl=this.map.mapboxgl,this.loaderModels()},loaderModels(){new E(new i).load("//hongluan-ui.github.io/hongtu-next/obj/windmill_2/windmill-fixed.mtl",n=>{n.preload();const a=new u(new i);a.setMaterials(n),a.load("//hongluan-ui.github.io/hongtu-next/obj/windmill_2/windmill.obj",o=>{o.traverse(function(t){t.isMesh&&t.geometry.computeVertexNormals()});const s=o;s.rotation.x=-Math.PI/2,s.rotation.y=1.4*Math.PI/5,s.scale.multiplyScalar(.5);const e=s.children[0].clone();e.rotation.x=-Math.PI/2,e.rotation.y=1.4*Math.PI/5,e.scale.multiplyScalar(.5),this.addThreeLayer(s,e)},null,null,null,!1)})},addThreeLayer(p,n){const a=new this.mapboxgl.supermap.ThreeLayer("threeLayer");a.on("initialized",e);const o=this;let s;function e(){const t=a.getThreeRenderer(),r=a.getScene(),l=a.getCamera();s=new A(16777215,.8),s.position.copy(l.position),r.add(s),r.add(new d(16777215)),a.setPosition(p,o.mapCenter),a.setPosition(n,o.mapCenter.map(b=>b-=.0015)),p.translateY(300),r.add(p),r.add(n),t.render(r,l)}a.on("render",function(){s&&s.position.copy(a.renderer.camera.position)}),this.map.addLayer(a)}}},_={style:{height:"500px"},class:"vw-full vh-full"},x={style:{height:"400px"}};function j(p,n,a,o,s,e){const t=y("x-tianditu-layer"),r=y("x-map");return m(),B("div",_,[c("div",x,[F(r,{zoom:s.mapZoom,"onUpdate:zoom":n[0]||(n[0]=l=>s.mapZoom=l),center:s.mapCenter,"onUpdate:center":n[1]||(n[1]=l=>s.mapCenter=l),bearing:s.bearing,"onUpdate:bearing":n[2]||(n[2]=l=>s.bearing=l),pitch:s.pitch,"onUpdate:pitch":n[3]||(n[3]=l=>s.pitch=l),onCreated:e.createdHandler},{default:f(()=>[F(t)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const w=h(L,[["render",j]]),M=`<template>
  <div style="height:500px" class="vw-full vh-full">
    <div style="height:400px">
      <x-map
        v-model:zoom="mapZoom"
        v-model:center="mapCenter"
        v-model:bearing="bearing"
        v-model:pitch="pitch"
        @created="createdHandler"
      >
        <x-tianditu-layer />
      </x-map>
    </div>
  </div>
</template>
<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'

export default {
  name: 'Map3D',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 15,
      bearing: 0,
      pitch: 45,
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.map = mapVm.$map
      this.mapboxgl = this.map.mapboxgl
      this.loaderModels()
    },
    loaderModels() {
      const mtlLoader = new MTLLoader(new THREE.LoadingManager())

      mtlLoader.load('//hongluan-ui.github.io/hongtu-next/' + 'obj/windmill_2/windmill-fixed.mtl', materials => {
        materials.preload()
        const objLoader = new OBJLoader(new THREE.LoadingManager())
        objLoader.setMaterials(materials)

        objLoader.load('//hongluan-ui.github.io/hongtu-next/' + 'obj/windmill_2/windmill.obj', obj => {
          obj.traverse(function (child) {
            if (child.isMesh) child.geometry.computeVertexNormals()
          })
          const meshes = obj
          meshes.rotation.x = -Math.PI / 2
          meshes.rotation.y = (1.4 * Math.PI) / 5
          meshes.scale.multiplyScalar(.5)

          const otherObj = meshes.children[0].clone()
          otherObj.rotation.x = -Math.PI / 2
          otherObj.rotation.y = (1.4 * Math.PI) / 5
          otherObj.scale.multiplyScalar(.5)

          this.addThreeLayer(meshes, otherObj)
        },
        null,
        null,
        null,
        false,
        )
      })
    },
    addThreeLayer(obj1, obj2) {
      const threeLayer = new this.mapboxgl.supermap.ThreeLayer('threeLayer')
      threeLayer.on('initialized', render)
      const self = this
      let light
      function render() {
        const renderer = threeLayer.getThreeRenderer(),
          scene = threeLayer.getScene(),
          camera = threeLayer.getCamera()
        // scene.background = new THREE.Color('skyblue')
        light = new THREE.PointLight(0xffffff, 0.8)
        light.position.copy(camera.position)
        scene.add(light)
        scene.add(new THREE.AmbientLight(0xffffff))

        threeLayer.setPosition(obj1, self.mapCenter)
        threeLayer.setPosition(obj2, self.mapCenter.map(c => c -= 0.0015))
        obj1.translateY(300)

        scene.add(obj1)
        scene.add(obj2)
        renderer.render(scene, camera)
      }

      //均匀光照，与相机位置同步
      threeLayer.on('render', function() {
        light && light.position.copy(threeLayer.renderer.camera.position)
      })
      this.map.addLayer(threeLayer)
    },
  },
}
<\/script>
`,T=c("h1",{id:"obj格式",tabindex:"-1"},[D("OBJ格式 "),c("a",{class:"header-anchor",href:"#obj格式","aria-label":'Permalink to "OBJ格式"'},"​")],-1),v={id:"示例",tabindex:"-1"},P=c("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),O=g("",2),I=JSON.parse('{"title":"OBJ格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/models/obj/index.md"}'),R={name:"threejs/iclient/models/obj/index.md"},V=Object.assign(R,{setup(p){return(n,a)=>{const o=y("play");return m(),B("div",null,[T,c("h2",v,[D("示例 "),F(o,{"source-code":C(M)},null,8,["source-code"]),D(),P]),F(w),O])}}});export{I as __pageData,V as default};
