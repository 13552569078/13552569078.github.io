import{V as A,d as M,e as d,T,R as h,M as w,D as v,a as R,w as P,ar as _,C as H,as as L,at as S,i as m}from"./chunks/three.module.f4768b42.js";import{_ as k,B as b,f as C,h as f,x as i,D as B,z as V,k as u,u as q,N as I}from"./chunks/framework.5deb65a5.js";const U={name:"Map3D",data(){return{mapCenter:[116.390714,39.916535],mapZoom:13,bearing:0,pitch:45,altitude:0}},methods:{createdHandler(s){this.map=s.$map,this.mapboxgl=this.map.mapboxgl},add3DLayer(){this.loaderModels()},loaderModels(){const s=this.mapboxgl.MercatorCoordinate.fromLngLat(this.mapCenter,this.altitude),a={translateX:s.x,translateY:s.y,translateZ:s.z,scale:s.meterInMercatorCoordinateUnits()};this.addThreeLayer(a,s)},addThreeLayer(s,a){const l=this,o={id:"3d-model",type:"custom",renderingMode:"3d",onAdd:function(n,p){this.camera=new P,this.scene=new _,this.clock=new H;const y=[[116.385394,39.92098],[116.38591,39.911632],[116.389942,39.911565],[116.390457,39.908734],[116.392174,39.908733],[116.39226,39.911959],[116.396294,39.911894],[116.395691,39.921438],[116.385394,39.92098]].map(D=>l.getThreePoint(a,D)).map(D=>[D[0],-D[1],0]),r=l.addFencing(y);r.translateY(-200),this.scene.add(r);{const t=new L(11657727,12155424,3);this.scene.add(t)}this.map=n,this.renderer=new S({canvas:n.getCanvas(),context:p,antialias:!0}),this.renderer.autoClear=!1},render:function(n,p){var e=new m().fromArray(p),y=new m().makeTranslation(s.translateX,s.translateY,s.translateZ).scale(new A(s.scale,-s.scale,s.scale));this.camera.projectionMatrix=e.clone().multiply(y),this.camera.matrixWorldInverse=new m,this.renderer.resetState(),this.renderer.render(this.scene,this.camera)}};this.map.addLayer(o)},getThreePoint(s,a){const l=this.mapboxgl.MercatorCoordinate.fromLngLat(a,this.altitude),o=(l.x-s.x)/s.meterInMercatorCoordinateUnits(),n=(l.y-s.y)/s.meterInMercatorCoordinateUnits();return[o,n]},addFencing(s){const l=[],o=s.reduce((F,c,t)=>{let E=0;if(t>0){let g=new A(...s[t-1]),x=new A(...c);E=g.distanceTo(x)}return F+=E,l.push(F),F},0),n=new M,p=[],e=[];s.forEach((F,c)=>{if(c==0)return;const t=s[c-1];p.push(...t),e.push(l[c-1]/o,0),p.push(...F),e.push(l[c]/o,0),p.push(t[0],t[1],t[2]+500),e.push(l[c-1]/o,1),p.push(...F),e.push(l[c]/o,0),p.push(F[0],F[1],F[2]+500),e.push(l[c]/o,1),p.push(t[0],t[1],t[2]+500),e.push(l[c-1]/o,1)}),n.setAttribute("position",new d(new Float32Array(p),3)),n.setAttribute("uv",new d(new Float32Array(e),2)),n.computeVertexNormals();const y=new T().load("//hongluan-ui.github.io/hongtu-next/images/wall.png");y.wrapS=h,y.wrapT=h;const r=new w({color:65280,map:y,transparent:!0,opacity:.9,depthWrite:!1,side:v});return new R(n,r)}}},W={style:{height:"500px"},class:"vw-full vh-full"},Z={style:{height:"400px"}};function N(s,a,l,o,n,p){const e=b("x-tianditu-layer"),y=b("x-map");return C(),f("div",W,[i("div",Z,[B(y,{zoom:n.mapZoom,"onUpdate:zoom":a[0]||(a[0]=r=>n.mapZoom=r),center:n.mapCenter,"onUpdate:center":a[1]||(a[1]=r=>n.mapCenter=r),bearing:n.bearing,"onUpdate:bearing":a[2]||(a[2]=r=>n.bearing=r),pitch:n.pitch,"onUpdate:pitch":a[3]||(a[3]=r=>n.pitch=r),onCreated:p.createdHandler},{default:V(()=>[B(e,{onCreated:p.add3DLayer},null,8,["onCreated"])]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const z=k(U,[["render",N]]),Y=`<template>
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

export default {
  name: 'Map3D',
  data() {
    return {
      mapCenter: [116.390714,39.916535],
      mapZoom: 13,
      bearing: 0,
      pitch: 45,
      altitude: 0,
    }
  },
  methods: {
    createdHandler(mapVm) {
      this.map = mapVm.$map
      this.mapboxgl = this.map.mapboxgl
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
      this.addThreeLayer(modelTransform, modelAsMercatorCoordinate)
    },
    addThreeLayer(modelTransform, modelAsMercatorCoordinate) {
      const self = this
      const threeLayer = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function(map, gl) {
          this.camera = new THREE.PerspectiveCamera()
          this.scene = new THREE.Scene()
          this.clock = new THREE.Clock()

          // 电子围栏
          const boundaryArr = [
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

          const outer = boundaryArr.map(b => self.getThreePoint(modelAsMercatorCoordinate, b)).map(p => [p[0], -p[1], 0])
          const polygonMesh = self.addFencing(outer)
          polygonMesh.translateY(-200)
          this.scene.add(polygonMesh)

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

          this.renderer.render(this.scene, this.camera)

          // this.map.triggerRepaint()
        },
      }
      this.map.addLayer(threeLayer)
    },
    getThreePoint(modelAsMercatorCoordinate, anotherPoint) {
      const anotherPointModel = this.mapboxgl.MercatorCoordinate.fromLngLat(anotherPoint, this.altitude)
      const x = (anotherPointModel.x - modelAsMercatorCoordinate.x) / modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
      const y = (anotherPointModel.y - modelAsMercatorCoordinate.y) / modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
      return [x, y]
    },
    addFencing(points) {
      const height = 500 // 高度
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
        posArr.push(lastPoint[0], lastPoint[1], lastPoint[2] + height)
        uvArr.push(pointDistance[index - 1] / distance, 1)

        // 三角面2
        posArr.push(...point)
        uvArr.push(pointDistance[index] / distance, 0)
        posArr.push(point[0], point[1], point[2] + height)
        uvArr.push(pointDistance[index] / distance, 1)
        posArr.push(lastPoint[0], lastPoint[1], lastPoint[2] + height)
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
`,j=i("h1",{id:"电子围栏效果",tabindex:"-1"},[u("电子围栏效果 "),i("a",{class:"header-anchor",href:"#电子围栏效果","aria-label":'Permalink to "电子围栏效果"'},"​")],-1),G={id:"示例",tabindex:"-1"},X=i("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),J=I("",2),$=JSON.parse('{"title":"电子围栏效果","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/mapboxgl/effects/fence/index.md"}'),O={name:"threejs/mapboxgl/effects/fence/index.md"},ss=Object.assign(O,{setup(s){return(a,l)=>{const o=b("play");return C(),f("div",null,[j,i("h2",G,[u("示例 "),B(o,{"source-code":q(Y)},null,8,["source-code"]),u(),X]),B(z),J])}}});export{$ as __pageData,ss as default};
