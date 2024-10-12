import{C as A,l as d,c as u,A as E}from"./chunks/three.module.f4768b42.js";import{F as h}from"./chunks/FBXLoader.338411e0.js";import{_ as f,B as D,f as m,h as B,x as r,D as c,z as g,k as i,u as C,N as x}from"./chunks/framework.5deb65a5.js";const _={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45}},methods:{createdHandler(o){this.map=o.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new A,this.loaderModels()},loaderModels(){new h().load("//hongluan-ui.github.io/hongtu-next/fbx/Samba Dancing.fbx",s=>{s.scale.multiplyScalar(4),s.rotation.x=Math.PI*1.5;const a=new d(s);a.clipAction(s.animations[0]).play(),this.mixers.push(a),this.addThreeLayer(s)})},addThreeLayer(o){const s=new this.mapboxgl.supermap.ThreeLayer("threeLayer");s.on("initialized",n);const a=this;let l;function n(){const F=s.getThreeRenderer(),e=s.getScene(),t=s.getCamera();l=new u(16777215,.8),l.position.copy(t.position),e.add(l),e.add(new E(16777215)),s.setPosition(o,a.mapCenter),e.add(o),function p(){const b=a.clock.getDelta();for(let y=0;y<a.mixers.length;y++)a.mixers[y].update(b);F.render(e,t),requestAnimationFrame(p)}()}s.on("render",function(){l&&l.position.copy(s.renderer.camera.position)}),this.map.addLayer(s)}}},L={style:{height:"500px"},class:"vw-full vh-full"},v={style:{height:"400px"}};function T(o,s,a,l,n,F){const e=D("x-tianditu-layer"),t=D("x-map");return m(),B("div",L,[r("div",v,[c(t,{zoom:n.mapZoom,"onUpdate:zoom":s[0]||(s[0]=p=>n.mapZoom=p),center:n.mapCenter,"onUpdate:center":s[1]||(s[1]=p=>n.mapCenter=p),bearing:n.bearing,"onUpdate:bearing":s[2]||(s[2]=p=>n.bearing=p),pitch:n.pitch,"onUpdate:pitch":s[3]||(s[3]=p=>n.pitch=p),onCreated:F.createdHandler},{default:g(()=>[c(e)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const w=f(_,[["render",T]]),q=`<template>
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
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'

export default {
  name: 'Map3D',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 16,
      bearing: 0,
      pitch: 45,
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.map = mapVm.$map
      this.mapboxgl = this.map.mapboxgl
      this.mixers = []
      this.clock = new THREE.Clock()
      this.loaderModels()
    },
    loaderModels() {
      const loader = new FBXLoader()
      loader.load('//hongluan-ui.github.io/hongtu-next/' + 'fbx/Samba Dancing.fbx', dancer => {
        dancer.scale.multiplyScalar(4)
        dancer.rotation.x = Math.PI * 1.5
        const mixer = new THREE.AnimationMixer(dancer)
        const action = mixer.clipAction(dancer.animations[0])
        action.play()

        this.mixers.push( mixer )

        this.addThreeLayer(dancer)
      })
    },
    addThreeLayer(dancer) {
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

        threeLayer.setPosition(dancer, self.mapCenter)

        scene.add(dancer)

        ;(function animate() {
          const delta = self.clock.getDelta()
          for (let i = 0; i < self.mixers.length; i++) {
            self.mixers[i].update(delta)
          }
          renderer.render(scene, camera)

          requestAnimationFrame(animate)
        })()
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
`,k=r("h1",{id:"fbx格式",tabindex:"-1"},[i("FBX格式 "),r("a",{class:"header-anchor",href:"#fbx格式","aria-label":'Permalink to "FBX格式"'},"​")],-1),R={id:"示例",tabindex:"-1"},H=r("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),S=x("",2),z=JSON.parse('{"title":"FBX格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/models/fbx/index.md"}'),M={name:"threejs/iclient/models/fbx/index.md"},N=Object.assign(M,{setup(o){return(s,a)=>{const l=D("play");return m(),B("div",null,[k,r("h2",R,[i("示例 "),c(l,{"source-code":C(q)},null,8,["source-code"]),i(),H]),c(w),S])}}});export{z as __pageData,N as default};
