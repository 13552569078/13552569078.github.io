import{C as b,P as h,M as C,T as g,D as x,a as A,B as f,b as E,w as M,ar as T,as as w,at as v,i as D,V as _}from"./chunks/three.module.f4768b42.js";import{_ as H,B as i,f as d,h as u,x as c,D as y,z as R,k as m,u as L,N as k}from"./chunks/framework.5deb65a5.js";const P={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:14,bearing:0,pitch:45,altitude:0}},methods:{createdHandler(n){this.map=n.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new b},add3DLayer(){this.loaderModels()},loaderModels(){const n=this.mapboxgl.MercatorCoordinate.fromLngLat(this.mapCenter,this.altitude),s={translateX:n.x,translateY:n.y,translateZ:n.z,scale:n.meterInMercatorCoordinateUnits()},e=new h(200,200),r=new C({map:new g().load("//hongluan-ui.github.io/hongtu-next/images/firefox.png"),transparent:!0,side:x}),a=new A(e,r);a.name="plane";const l=new A(new f(200,200,200),new E);l.name="cube";const o=l.clone();o.material=new E,o.name="cube1",this.addThreeLayer(s,a,l,o)},addThreeLayer(n,s,e,r){const a={id:"3d-model",type:"custom",renderingMode:"3d",onAdd:function(l,o){this.camera=new M,this.scene=new T,this.clock=new b,this.mixers=[],s.translateZ(200),e.translateX(400),s.rotation.x=-Math.PI/2,this.scene.add(s),this.scene.add(e),this.scene.add(r);{const t=new w(11657727,12155424,3);this.scene.add(t)}this.map=l,this.renderer=new v({canvas:l.getCanvas(),context:o,antialias:!0}),this.renderer.autoClear=!1},render:function(l,o){var F=new D().fromArray(o),p=new D().makeTranslation(n.translateX,n.translateY,n.translateZ).scale(new _(n.scale,-n.scale,n.scale));this.camera.projectionMatrix=F.clone().multiply(p),this.camera.matrixWorldInverse=new D,this.renderer.resetState();const B=this.clock.getDelta();for(let t=0;t<this.mixers.length;t++)this.mixers[t].update(B);this.renderer.render(this.scene,this.camera)}};this.map.addLayer(a)},getThreePoint(n){const s=this.mapboxgl.MercatorCoordinate.fromLngLat(n,modelAltitude),e=(s.x-modelAsMercatorCoordinate.x)/modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),r=(s.y-modelAsMercatorCoordinate.y)/modelAsMercatorCoordinate.meterInMercatorCoordinateUnits();return[e,r]}}},S={style:{height:"500px"},class:"vw-full vh-full"},q={style:{height:"400px"}};function I(n,s,e,r,a,l){const o=i("x-tianditu-layer"),F=i("x-map");return d(),u("div",S,[c("div",q,[y(F,{zoom:a.mapZoom,"onUpdate:zoom":s[0]||(s[0]=p=>a.mapZoom=p),center:a.mapCenter,"onUpdate:center":s[1]||(s[1]=p=>a.mapCenter=p),bearing:a.bearing,"onUpdate:bearing":s[2]||(s[2]=p=>a.bearing=p),pitch:a.pitch,"onUpdate:pitch":s[3]||(s[3]=p=>a.pitch=p),onCreated:l.createdHandler},{default:R(()=>[y(o,{onCreated:l.add3DLayer},null,8,["onCreated"])]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const Z=H(P,[["render",I]]),U=`<template>
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
      mapCenter: [116.3466, 39.8704],
      mapZoom: 14,
      bearing: 0,
      pitch: 45,
      altitude: 0, // 离地面高度
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

      const geometry = new THREE.PlaneGeometry(200, 200)
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('//hongluan-ui.github.io/hongtu-next/' + 'images/firefox.png'),
        transparent: true,
        // color: 0xffff00,
        side: THREE.DoubleSide,
      })
      const plane = new THREE.Mesh( geometry, material )
      plane.name = 'plane'

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(200, 200, 200),
        new THREE.MeshNormalMaterial(),
      )
      cube.name = 'cube'

      const cube1 = cube.clone()
      cube1.material = new THREE.MeshNormalMaterial()
      cube1.name = 'cube1'

      this.addThreeLayer(modelTransform, plane, cube, cube1)
    },
    addThreeLayer(modelTransform, plane, cube, cube1) {
      const threeLayer = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function(map, gl) {
          this.camera = new THREE.PerspectiveCamera()
          this.scene = new THREE.Scene()
          this.clock = new THREE.Clock()
          this.mixers = []

          plane.translateZ(200)
          cube.translateX(400)
          plane.rotation.x = -Math.PI / 2

          this.scene.add(plane)
          this.scene.add(cube)
          this.scene.add(cube1)

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
          for (let i = 0; i < this.mixers.length; i++) {
            this.mixers[i].update(delta)
          }

          this.renderer.render(this.scene, this.camera)

          // this.map.triggerRepaint()
        },
      }
      this.map.addLayer(threeLayer)
    },
    getThreePoint(anotherPoint) {
      const anotherPointModel = this.mapboxgl.MercatorCoordinate.fromLngLat(anotherPoint, modelAltitude)
      const x = (anotherPointModel.x - modelAsMercatorCoordinate.x) / modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
      const y = (anotherPointModel.y - modelAsMercatorCoordinate.y) / modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
      return [x, y]
    },
  },
}
<\/script>
`,V=c("h1",{id:"常规three对象",tabindex:"-1"},[m("常规Three对象 "),c("a",{class:"header-anchor",href:"#常规three对象","aria-label":'Permalink to "常规Three对象"'},"​")],-1),N={id:"示例",tabindex:"-1"},G=c("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),z=k("",2),Y=JSON.parse('{"title":"常规Three对象","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/mapboxgl/common/index.md"}'),X={name:"threejs/mapboxgl/common/index.md"},J=Object.assign(X,{setup(n){return(s,e)=>{const r=i("play");return d(),u("div",null,[V,c("h2",N,[m("示例 "),y(r,{"source-code":L(U)},null,8,["source-code"]),m(),G]),y(Z),z])}}});export{Y as __pageData,J as default};
