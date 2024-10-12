import{C as A,l as d,c as E,A as u}from"./chunks/three.module.f4768b42.js";import{G as h}from"./chunks/GLTFLoader.37b39c6e.js";import{_ as f,B as D,f as m,h as B,x as r,D as c,z as g,k as i,u as C,N as x}from"./chunks/framework.5deb65a5.js";const L={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45}},methods:{createdHandler(p){this.map=p.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new A,this.loaderModels()},loaderModels(){new h().load("//hongluan-ui.github.io/hongtu-next/gltf/Flamingo/Flamingo.glb",s=>{const n=s.scene;n.scale.multiplyScalar(150),n.rotation.y=-1,n.rotation.x=Math.PI*1.5;const a=new d(s.scene.children[0]);a.clipAction(s.animations[0]).setDuration(1).play(),this.mixers.push(a),this.addThreeLayer(n)})},addThreeLayer(p){const s=new this.mapboxgl.supermap.ThreeLayer("threeLayer");s.on("initialized",l);const n=this;let a;function l(){const F=s.getThreeRenderer(),e=s.getScene(),t=s.getCamera();a=new E(16777215,.8),a.position.copy(t.position),e.add(a),e.add(new u(16777215)),s.setPosition(p,n.mapCenter),p.translateY(500),e.add(p),function o(){p.rotation.y+=.01;const b=n.clock.getDelta();for(let y=0;y<n.mixers.length;y++)n.mixers[y].update(b);F.render(e,t),requestAnimationFrame(o)}()}s.on("render",function(){a&&a.position.copy(s.renderer.camera.position)}),this.map.addLayer(s)}}},_={style:{height:"500px"},class:"vw-full vh-full"},T={style:{height:"400px"}};function v(p,s,n,a,l,F){const e=D("x-tianditu-layer"),t=D("x-map");return m(),B("div",_,[r("div",T,[c(t,{zoom:l.mapZoom,"onUpdate:zoom":s[0]||(s[0]=o=>l.mapZoom=o),center:l.mapCenter,"onUpdate:center":s[1]||(s[1]=o=>l.mapCenter=o),bearing:l.bearing,"onUpdate:bearing":s[2]||(s[2]=o=>l.bearing=o),pitch:l.pitch,"onUpdate:pitch":s[3]||(s[3]=o=>l.pitch=o),onCreated:F.createdHandler},{default:g(()=>[c(e)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const w=f(L,[["render",v]]),q=`<template>
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
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

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
      const loader = new GLTFLoader()
      loader.load('//hongluan-ui.github.io/hongtu-next/' + 'gltf/Flamingo/Flamingo.glb', gltf => {
        const bird = gltf.scene

        bird.scale.multiplyScalar(150)
        bird.rotation.y = -1
        bird.rotation.x = Math.PI * 1.5

        const mixer = new THREE.AnimationMixer(gltf.scene.children[0])
        mixer.clipAction(gltf.animations[0]).setDuration(1).play()
        this.mixers.push(mixer)

        this.addThreeLayer(bird)
      })
    },
    addThreeLayer(bird) {
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

        threeLayer.setPosition(bird, self.mapCenter)
        bird.translateY(500)

        scene.add(bird)

        ;(function animate() {
          bird.rotation.y += 0.01

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
`,k=r("h1",{id:"glb或gltf格式",tabindex:"-1"},[i("GLB或GLTF格式 "),r("a",{class:"header-anchor",href:"#glb或gltf格式","aria-label":'Permalink to "GLB或GLTF格式"'},"​")],-1),R={id:"示例",tabindex:"-1"},H=r("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),M=x("",2),z=JSON.parse('{"title":"GLB或GLTF格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/models/glb/index.md"}'),P={name:"threejs/iclient/models/glb/index.md"},N=Object.assign(P,{setup(p){return(s,n)=>{const a=D("play");return m(),B("div",null,[k,r("h2",R,[i("示例 "),c(a,{"source-code":C(q)},null,8,["source-code"]),i(),H]),c(w),M])}}});export{z as __pageData,N as default};
