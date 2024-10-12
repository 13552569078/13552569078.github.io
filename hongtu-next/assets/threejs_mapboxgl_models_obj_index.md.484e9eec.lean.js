import{ap as b,w as u,ar as h,C,as as f,at as g,i as D,V as x}from"./chunks/three.module.f4768b42.js";import{M,O as L}from"./chunks/MTLLoader.72c8e4f6.js";import{_ as j,B as i,f as d,h as A,x as c,D as F,z as T,k as m,u as _,N as w}from"./chunks/framework.5deb65a5.js";const v={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:14,bearing:0,pitch:45,altitude:0}},methods:{createdHandler(s){this.map=s.$map,this.mapboxgl=this.map.mapboxgl},add3DLayer(){this.loaderModels()},loaderModels(){const s=this.mapboxgl.MercatorCoordinate.fromLngLat(this.mapCenter,this.altitude),a={translateX:s.x,translateY:s.y,translateZ:s.z,scale:s.meterInMercatorCoordinateUnits()};new M(new b).load("//bitjjj.github.io/hongtu-next/obj/windmill_2/windmill-fixed.mtl",p=>{p.preload();const n=new L(new b);n.setMaterials(p),n.load("//bitjjj.github.io/hongtu-next/obj/windmill_2/windmill.obj",t=>{t.traverse(function(l){l.isMesh&&l.geometry.computeVertexNormals()});const e=t;e.scale.multiplyScalar(.15);const r=e.children[0].clone();r.scale.multiplyScalar(.2),this.addThreeLayer(a,s,e,r)},null,null,null,!1)})},addThreeLayer(s,a,o,p){const n=this,t={id:"3d-model",type:"custom",renderingMode:"3d",onAdd:function(e,r){this.camera=new u,this.scene=new h,this.clock=new C;const[l,y]=n.getThreePoint(a,n.mapCenter.map(B=>B-=.0015));o.translateZ(300),p.translateX(l),p.translateY(-y),p.rotation.x=Math.PI/2,o.rotation.x=Math.PI/2,this.scene.add(o),this.scene.add(p);{const E=new f(11657727,12155424,3);this.scene.add(E)}this.map=e,this.renderer=new g({canvas:e.getCanvas(),context:r,antialias:!0}),this.renderer.autoClear=!1},render:function(e,r){var l=new D().fromArray(r),y=new D().makeTranslation(s.translateX,s.translateY,s.translateZ).scale(new x(s.scale,-s.scale,s.scale));this.camera.projectionMatrix=l.clone().multiply(y),this.camera.matrixWorldInverse=new D,this.renderer.resetState(),this.renderer.render(this.scene,this.camera)}};this.map.addLayer(t)},getThreePoint(s,a){const o=this.mapboxgl.MercatorCoordinate.fromLngLat(a,this.altitude),p=(o.x-s.x)/s.meterInMercatorCoordinateUnits(),n=(o.y-s.y)/s.meterInMercatorCoordinateUnits();return[p,n]}}},R={style:{height:"500px"},class:"vw-full vh-full"},H={style:{height:"400px"}};function P(s,a,o,p,n,t){const e=i("x-tianditu-layer"),r=i("x-map");return d(),A("div",R,[c("div",H,[F(r,{zoom:n.mapZoom,"onUpdate:zoom":a[0]||(a[0]=l=>n.mapZoom=l),center:n.mapCenter,"onUpdate:center":a[1]||(a[1]=l=>n.mapCenter=l),bearing:n.bearing,"onUpdate:bearing":a[2]||(a[2]=l=>n.bearing=l),pitch:n.pitch,"onUpdate:pitch":a[3]||(a[3]=l=>n.pitch=l),onCreated:t.createdHandler},{default:T(()=>[F(e,{onCreated:t.add3DLayer},null,8,["onCreated"])]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const S=j(v,[["render",P]]),k=`<template>
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
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'

export default {
  name: 'Map3D',
  data() {
    return {
      mapCenter: [116.3466, 39.8704],
      mapZoom: 14,
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

      const mtlLoader = new MTLLoader(new THREE.LoadingManager())

      mtlLoader.load('//bitjjj.github.io/hongtu-next/' + 'obj/windmill_2/windmill-fixed.mtl', materials => {
        materials.preload()
        const objLoader = new OBJLoader(new THREE.LoadingManager())
        objLoader.setMaterials(materials)

        objLoader.load('//bitjjj.github.io/hongtu-next/' + 'obj/windmill_2/windmill.obj', obj => {
          obj.traverse(function (child) {
            if (child.isMesh) child.geometry.computeVertexNormals()
          })
          const meshes = obj
          meshes.scale.multiplyScalar(.15)

          const otherObj = meshes.children[0].clone()
          otherObj.scale.multiplyScalar(.2)

          this.addThreeLayer(modelTransform, modelAsMercatorCoordinate, meshes, otherObj)
        },
        null,
        null,
        null,
        false,
        )
      })
    },
    addThreeLayer(modelTransform, modelAsMercatorCoordinate, obj1, obj2) {
      const self = this
      const threeLayer = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function(map, gl) {
          this.camera = new THREE.PerspectiveCamera()
          this.scene = new THREE.Scene()
          this.clock = new THREE.Clock()

          const [x, y] = self.getThreePoint(modelAsMercatorCoordinate, self.mapCenter.map(c => c -= 0.0015))
          obj1.translateZ(300)

          obj2.translateX(x)
          obj2.translateY(-y)
          obj2.rotation.x = Math.PI / 2
          obj1.rotation.x = Math.PI / 2
          this.scene.add(obj1)
          this.scene.add(obj2)

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
  },
}
<\/script>
`,I=c("h1",{id:"obj格式",tabindex:"-1"},[m("OBJ格式 "),c("a",{class:"header-anchor",href:"#obj格式","aria-label":'Permalink to "OBJ格式"'},"​")],-1),O={id:"示例",tabindex:"-1"},q=c("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),U=w("",2),Y=JSON.parse('{"title":"OBJ格式","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/mapboxgl/models/obj/index.md"}'),V={name:"threejs/mapboxgl/models/obj/index.md"},W=Object.assign(V,{setup(s){return(a,o)=>{const p=i("play");return d(),A("div",null,[I,c("h2",O,[m("示例 "),F(p,{"source-code":_(k)},null,8,["source-code"]),m(),q]),F(S),U])}}});export{Y as __pageData,W as default};
