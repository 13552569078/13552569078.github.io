import{C as E,P as u,M as d,T as h,D as f,a as m,B as C,b,c as g,A as x}from"./chunks/three.module.f4768b42.js";import{_ as T,B as y,f as B,h as A,x as r,D as t,z as _,k as D,u as L,N as w}from"./chunks/framework.5deb65a5.js";const R={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45}},methods:{createdHandler(p){this.map=p.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new E,this.loaderModels()},loaderModels(){const p=new u(300,300),a=new d({map:new h().load("//bitjjj.github.io/hongtu-next/images/firefox.png"),transparent:!0,side:f}),e=new m(p,a);e.rotation.x=-Math.PI/2,e.name="plane";const s=new m(new C(300,300,300),new b);s.name="cube";const n=s.clone();n.material=new b,n.name="cube1",this.addThreeLayer(e,s,n)},addThreeLayer(p,a,e){const s=new this.mapboxgl.supermap.ThreeLayer("threeLayer");s.on("initialized",c);const n=this;let o;function c(){const F=s.getThreeRenderer(),l=s.getScene(),i=s.getCamera();o=new g(16777215,.8),o.position.copy(i.position),l.add(o),l.add(new x(16777215)),s.setPosition(p,n.mapCenter),s.setPosition(a,n.mapCenter),s.setPosition(e,n.mapCenter),p.translateY(340),a.translateX(800),l.add(p),l.add(a),l.add(e),F.render(l,i)}s.on("render",function(){o&&o.position.copy(s.renderer.camera.position)}),this.map.addLayer(s)}}},H={style:{height:"500px"},class:"vw-full vh-full"},M={style:{height:"400px"}};function v(p,a,e,s,n,o){const c=y("x-tianditu-layer"),F=y("x-map");return B(),A("div",H,[r("div",M,[t(F,{zoom:n.mapZoom,"onUpdate:zoom":a[0]||(a[0]=l=>n.mapZoom=l),center:n.mapCenter,"onUpdate:center":a[1]||(a[1]=l=>n.mapCenter=l),bearing:n.bearing,"onUpdate:bearing":a[2]||(a[2]=l=>n.bearing=l),pitch:n.pitch,"onUpdate:pitch":a[3]||(a[3]=l=>n.pitch=l),onCreated:o.createdHandler},{default:_(()=>[t(c)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const P=T(R,[["render",v]]),q=`<template>
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
      const geometry = new THREE.PlaneGeometry(300, 300)
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('//bitjjj.github.io/hongtu-next/' + 'images/firefox.png'),
        transparent: true,
        // color: 0xffff00,
        side: THREE.DoubleSide,
      })
      const plane = new THREE.Mesh( geometry, material )
      plane.rotation.x = -Math.PI / 2
      plane.name = 'plane'

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(300, 300, 300),
        new THREE.MeshNormalMaterial(),
      )
      cube.name = 'cube'

      const cube1 = cube.clone()
      cube1.material = new THREE.MeshNormalMaterial()
      cube1.name = 'cube1'

      this.addThreeLayer(plane, cube, cube1)
    },
    addThreeLayer(plane, cube, cube1) {
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

        threeLayer.setPosition(plane, self.mapCenter)
        threeLayer.setPosition(cube, self.mapCenter)
        threeLayer.setPosition(cube1, self.mapCenter)

        plane.translateY(340)
        cube.translateX(800)
        scene.add(plane)
        scene.add(cube)
        scene.add(cube1)

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
`,k=r("h1",{id:"常规three对象",tabindex:"-1"},[D("常规Three对象 "),r("a",{class:"header-anchor",href:"#常规three对象","aria-label":'Permalink to "常规Three对象"'},"​")],-1),S={id:"示例",tabindex:"-1"},N=r("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),V=w("",2),G=JSON.parse('{"title":"常规Three对象","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/common/index.md"}'),j={name:"threejs/iclient/common/index.md"},U=Object.assign(j,{setup(p){return(a,e)=>{const s=y("play");return B(),A("div",null,[k,r("h2",S,[D("示例 "),t(s,{"source-code":L(q)},null,8,["source-code"]),D(),N]),t(P),V])}}});export{G as __pageData,U as default};
