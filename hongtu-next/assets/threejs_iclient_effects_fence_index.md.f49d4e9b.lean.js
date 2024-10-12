import{C as x,c as T,A as w,V as E,d as P,e as m,T as v,R as h,M as _,D as L,a as R}from"./chunks/three.module.f4768b42.js";import{_ as H,B,f as d,h as C,x as D,D as i,z as M,k as A,u as V,N as q}from"./chunks/framework.5deb65a5.js";const k={name:"Map3D",data(){return{mapCenter:[116.390799,39.915876],mapZoom:13,bearing:0,pitch:45}},methods:{createdHandler(e){this.map=e.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new x,this.loaderModels()},loaderModels(){const e=[[116.385394,39.92098],[116.38591,39.911632],[116.389942,39.911565],[116.390457,39.908734],[116.392174,39.908733],[116.39226,39.911959],[116.396294,39.911894],[116.395691,39.921438],[116.385394,39.92098]];this.addThreeLayer(e)},addThreeLayer(e){const s=new this.mapboxgl.supermap.ThreeLayer("threeLayer");s.on("initialized",l);let a;const t=this;function l(){const r=s.getThreeRenderer(),o=s.getScene(),y=s.getCamera();a=new T(16777215,.8),a.position.copy(y.position),o.add(a),o.add(new w(16777215));let c=this.getCoordinatesCenter(e),b=this.lngLatToPosition(c),F=e.map(n=>this.lngLatToPosition({lng:n[0],lat:n[1]}).sub(b));const p=t.addFencing(F.map(n=>[n.x,0,n.y]));p.rotation.x=Math.PI/2,p.rotation.y=Math.PI*2.98,s.setPosition(p,[116.390714,39.916535]),o.add(p),r.render(o,y)}s.on("render",function(){a&&a.position.copy(s.renderer.camera.position)}),this.map.addLayer(s)},addFencing(e){const a=[],t=e.reduce((F,p,n)=>{let u=0;if(n>0){let g=new E(...e[n-1]),f=new E(...p);u=g.distanceTo(f)}return F+=u,a.push(F),F},0),l=new P,r=[],o=[];e.forEach((F,p)=>{if(p==0)return;const n=e[p-1];r.push(...n),o.push(a[p-1]/t,0),r.push(...F),o.push(a[p]/t,0),r.push(n[0],n[1]+1500,n[2]),o.push(a[p-1]/t,1),r.push(...F),o.push(a[p]/t,0),r.push(F[0],F[1]+1500,F[2]),o.push(a[p]/t,1),r.push(n[0],n[1]+1500,n[2]),o.push(a[p-1]/t,1)}),l.setAttribute("position",new m(new Float32Array(r),3)),l.setAttribute("uv",new m(new Float32Array(o),2)),l.computeVertexNormals();const y=new v().load("//hongluan-ui.github.io/hongtu-next/images/wall.png");y.wrapS=h,y.wrapT=h;const c=new _({color:65280,map:y,transparent:!0,opacity:.9,depthWrite:!1,side:L});return new R(l,c)}}},S={style:{height:"500px"},class:"vw-full vh-full"},N={style:{height:"400px"}};function z(e,s,a,t,l,r){const o=B("x-tianditu-layer"),y=B("x-map");return d(),C("div",S,[D("div",N,[i(y,{zoom:l.mapZoom,"onUpdate:zoom":s[0]||(s[0]=c=>l.mapZoom=c),center:l.mapCenter,"onUpdate:center":s[1]||(s[1]=c=>l.mapCenter=c),bearing:l.bearing,"onUpdate:bearing":s[2]||(s[2]=c=>l.bearing=c),pitch:l.pitch,"onUpdate:pitch":s[3]||(s[3]=c=>l.pitch=c),onCreated:r.createdHandler},{default:M(()=>[i(o)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const I=H(k,[["render",z]]),W=`<template>
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
      mapCenter: [116.390799,39.915876],
      mapZoom: 13,
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
      const boundary1 = [
        [116.385394,39.920980],
        [116.385910,39.911632],
        [116.389942,39.911565],
        [116.390457,39.908734],
        [116.392174,39.908733],
        [116.392260,39.911959],
        [116.396294,39.911894],
        [116.395691,39.921438],
        [116.385394,39.920980],
      ]

      this.addThreeLayer(boundary1)
    },
    addThreeLayer(boundary1) {
      const threeLayer = new this.mapboxgl.supermap.ThreeLayer('threeLayer')
      threeLayer.on('initialized', render)
      let light
      const self = this
      function render() {
        const renderer = threeLayer.getThreeRenderer(),
          scene = threeLayer.getScene(),
          camera = threeLayer.getCamera()
        // scene.background = new THREE.Color('black')

        light = new THREE.PointLight(0xffffff, 0.8)
        light.position.copy(camera.position)
        scene.add(light)
        scene.add(new THREE.AmbientLight(0xffffff))

        let centerBoundary = this.getCoordinatesCenter(boundary1)
        let centerPoint = this.lngLatToPosition(centerBoundary)
        let outer = boundary1.map(coords => this.lngLatToPosition({
          lng: coords[0],
          lat: coords[1],
        }).sub(centerPoint))

        const polygonMesh = self.addFencing(outer.map(p => [p.x, 0, p.y]))
        polygonMesh.rotation.x = Math.PI / 2
        polygonMesh.rotation.y = Math.PI * 2.98

        threeLayer.setPosition(polygonMesh, [116.390714,39.916535])

        scene.add(polygonMesh)
        renderer.render(scene, camera)
      }

      //均匀光照，与相机位置同步
      threeLayer.on('render', function() {
        light && light.position.copy(threeLayer.renderer.camera.position)
      })
      this.map.addLayer(threeLayer)
    },
    addFencing(points) {
      const height = 1500 // 高度
      // 围栏距离
      const pointDistance = []
      const distance = points.reduce((totalDistance, point, index) => {
        let segmentDistance = 0
        if (index > 0) {
          let lastPoint = new THREE.Vector3(...points[index - 1])
          let currPoint = new THREE.Vector3(...point)
          segmentDistance = lastPoint.distanceTo(currPoint)
        }
        totalDistance += segmentDistance
        pointDistance.push(totalDistance)
        return totalDistance
      }, 0)

      // 几何体
      const geometry = new THREE.BufferGeometry() // 缓冲几何体
      const posArr = []
      const uvArr = []
      // 遍历坐标
      points.forEach((point, index) => {
        if (index == 0) return
        const lastPoint = points[index - 1]

        // 三角面1
        posArr.push(...lastPoint)
        uvArr.push(pointDistance[index - 1] / distance, 0)
        posArr.push(...point)
        uvArr.push(pointDistance[index] / distance, 0)
        posArr.push(lastPoint[0], lastPoint[1] + height, lastPoint[2])
        uvArr.push(pointDistance[index - 1] / distance, 1)

        // 三角面2
        posArr.push(...point)
        uvArr.push(pointDistance[index] / distance, 0)
        posArr.push(point[0], point[1] + height, point[2])
        uvArr.push(pointDistance[index] / distance, 1)
        posArr.push(lastPoint[0], lastPoint[1] + height, lastPoint[2])
        uvArr.push(pointDistance[index - 1] / distance, 1)
      })
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(posArr), 3))
      geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvArr), 2))
      geometry.computeVertexNormals()
      // 纹理
      const texture = new THREE.TextureLoader().load('//hongluan-ui.github.io/hongtu-next/' + 'images/wall.png')
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping

      // 材质
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        map: texture,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        side: THREE.DoubleSide,
      })

      // 围栏
      const mesh = new THREE.Mesh(geometry, material)
      return mesh
    },
  },
}
<\/script>
`,Z=D("h1",{id:"电子围栏效果",tabindex:"-1"},[A("电子围栏效果 "),D("a",{class:"header-anchor",href:"#电子围栏效果","aria-label":'Permalink to "电子围栏效果"'},"​")],-1),U={id:"示例",tabindex:"-1"},j=D("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),G=q("",2),K=JSON.parse('{"title":"电子围栏效果","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/effects/fence/index.md"}'),O={name:"threejs/iclient/effects/fence/index.md"},Q=Object.assign(O,{setup(e){return(s,a)=>{const t=B("play");return d(),C("div",null,[Z,D("h2",U,[A("示例 "),i(t,{"source-code":V(W)},null,8,["source-code"]),A(),j]),i(I),G])}}});export{K as __pageData,Q as default};
