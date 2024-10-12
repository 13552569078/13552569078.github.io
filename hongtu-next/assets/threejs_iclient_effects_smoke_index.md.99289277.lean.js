import{C as g,T as x,d as _,e as D,j as w,k as v,c as T,A as z}from"./chunks/three.module.f4768b42.js";import{_ as L,B as m,f as E,h,x as A,D as b,z as S,k as u,u as P,N as R}from"./chunks/framework.5deb65a5.js";const H={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45}},methods:{createdHandler(y){this.map=y.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new g,this.loaderModels()},async loaderModels(){const y=new Promise(s=>{new x().load("//hongluan-ui.github.io/hongtu-next/images/smoke.png",function(e){s(e)})}),[p,o]=await y.then(s=>[!0,s,null],s=>[!1,null,s]);if(!p)return;const a=new _;a.setAttribute("position",new D(new Float32Array([]),3)),a.setAttribute("a_opacity",new D(new Float32Array([]),1)),a.setAttribute("a_size",new D(new Float32Array([]),1)),a.setAttribute("a_scale",new D(new Float32Array([]),1));const n=new w({color:"#333",map:o,transparent:!0,depthWrite:!1});n.onBeforeCompile=function(s){const e=`
              attribute float a_opacity;
              attribute float a_size;
              attribute float a_scale;
              varying float v_opacity;
              void main() {
                v_opacity = a_opacity;
              `,c=`
              gl_PointSize = a_size * a_scale;
              `;s.vertexShader=s.vertexShader.replace("void main() {",e),s.vertexShader=s.vertexShader.replace("gl_PointSize = size;",c);const t=`
              varying float v_opacity;
              void main() {          
            `,r=`
              gl_FragColor = vec4( outgoingLight, diffuseColor.a * v_opacity );         
            `;s.fragmentShader=s.fragmentShader.replace("void main() {",t),s.fragmentShader=s.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );",r)};const i=new v(a,n),B=i.clone();i.rotation.z=Math.PI,B.rotation.z=Math.PI,B.rotation.x=-Math.PI/4,this.addThreeLayer(i,B);class F{constructor(e=10,c={x:0,y:0,z:0}){this.range=e,this.center=c,this.life=5e3,this.createTime=Date.now(),this.updateTime=Date.now(),this.size=500,this.opacityFactor=1,this.opacity=1*this.opacityFactor,this.scaleFactor=3,this.scale=1+this.scaleFactor*(this.updateTime-this.createTime)/this.life,this.position={x:Math.random()*2*this.range+this.center.x-this.range,y:this.center.y,z:Math.random()*2*this.range+this.center.z-this.range};let t=Math.random()*40;t<20&&(t-=50),t>20&&(t+=10),this.speed={x:t,y:Math.random()*100+300,z:t}}update(){const e=Date.now(),c=e-this.updateTime;this.position.x+=this.speed.x*c/1e3,this.position.y+=this.speed.y*c/1e3,this.position.z+=this.speed.z*c/1e3,this.opacity=1-(e-this.createTime)/this.life,this.opacity*=this.opacityFactor,this.opacity<0&&(this.opacity=0),this.scale=1+this.scaleFactor*(e-this.createTime)/this.life,this.scale>1+this.scaleFactor&&(this.scale=1+this.scaleFactor),this.updateTime=e}}let l=[];setInterval(()=>{l.push(new F(10,{x:0,y:100,z:0}))},500),setInterval(()=>{if(l=l.filter(r=>(r.update(),!(r.updateTime-r.createTime>r.life))),!l.length)return;const s=[],e=[],c=[],t=[];l.forEach(r=>{const{x:d,y:f,z:C}=r.position;s.push(d,f,C),e.push(r.opacity),c.push(r.scale),t.push(r.size)}),a.setAttribute("position",new D(new Float32Array(s),3)),a.setAttribute("a_opacity",new D(new Float32Array(e),1)),a.setAttribute("a_scale",new D(new Float32Array(c),1)),a.setAttribute("a_size",new D(new Float32Array(t),1))},20)},addThreeLayer(y,p){const o=new this.mapboxgl.supermap.ThreeLayer("threeLayer");o.on("initialized",i);const a=this;let n;function i(){const B=o.getThreeRenderer(),F=o.getScene(),l=o.getCamera();n=new T(16777215,.8),n.position.copy(l.position),F.add(n),F.add(new z(16777215)),o.setPosition(y,a.mapCenter),o.setPosition(p,[a.mapCenter[0]+.002,a.mapCenter[1]]),F.add(y),F.add(p),function s(){B.render(F,l),requestAnimationFrame(s)}()}o.on("render",function(){n&&n.position.copy(o.renderer.camera.position)}),this.map.addLayer(o)}}},M={style:{height:"500px"},class:"vw-full vh-full"},k={style:{height:"400px"}};function q(y,p,o,a,n,i){const B=m("x-tianditu-layer"),F=m("x-map");return E(),h("div",M,[A("div",k,[b(F,{zoom:n.mapZoom,"onUpdate:zoom":p[0]||(p[0]=l=>n.mapZoom=l),center:n.mapCenter,"onUpdate:center":p[1]||(p[1]=l=>n.mapCenter=l),bearing:n.bearing,"onUpdate:bearing":p[2]||(p[2]=l=>n.bearing=l),pitch:n.pitch,"onUpdate:pitch":p[3]||(p[3]=l=>n.pitch=l),onCreated:i.createdHandler},{default:S(()=>[b(B)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const I=L(H,[["render",q]]),V=`<template>
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
    async loaderModels() {
      // 加载纹理图
      const promiseStar = new Promise(resolve => {
        new THREE.TextureLoader().load('//hongluan-ui.github.io/hongtu-next/' + 'images/smoke.png', function (texture) {
          resolve(texture)
        })
      })
      const [state, textureStar] = await promiseStar.then(rs => [true, rs, null], err => [false, null, err])
      if (!state) return


      // 先创建一个空的缓冲几何体
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([]), 3)) // 一个顶点由3个坐标构成
      geometry.setAttribute('a_opacity', new THREE.BufferAttribute(new Float32Array([]), 1)) // 点的透明度，用1个浮点数表示
      geometry.setAttribute('a_size', new THREE.BufferAttribute(new Float32Array([]), 1)) // 点的初始大小，用1个浮点数表示
      geometry.setAttribute('a_scale', new THREE.BufferAttribute(new Float32Array([]), 1)) // 点的放大量，用1个浮点数表示


      // 创建材质
      const material = new THREE.PointsMaterial({
        color: '#333',
        map: textureStar, // 纹理图
        transparent: true,// 开启透明度
        depthWrite: false, // 禁止深度写入
      })


      // 修正着色器
      material.onBeforeCompile = function (shader) {
        const vertexShaderAttribute = \`
              attribute float a_opacity;
              attribute float a_size;
              attribute float a_scale;
              varying float v_opacity;
              void main() {
                v_opacity = a_opacity;
              \`
        const vertexShaderSize = \`
              gl_PointSize = a_size * a_scale;
              \`
        shader.vertexShader = shader.vertexShader.replace('void main() {', vertexShaderAttribute)
        shader.vertexShader = shader.vertexShader.replace('gl_PointSize = size;', vertexShaderSize)

        const fragmentShaderVarying = \`
              varying float v_opacity;
              void main() {          
            \`
        const fragmentShaderOpacity = \`
              gl_FragColor = vec4( outgoingLight, diffuseColor.a * v_opacity );         
            \`
        shader.fragmentShader = shader.fragmentShader.replace('void main() {', fragmentShaderVarying)
        shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4( outgoingLight, diffuseColor.a );', fragmentShaderOpacity)
      }

      // 创建点，并添加进场景
      const points = new THREE.Points(geometry, material)
      const points2 = points.clone()

      points.rotation.z = Math.PI
      points2.rotation.z = Math.PI
      points2.rotation.x = -Math.PI / 4
      this.addThreeLayer(points, points2)

      // 定义Partical类
      class Partical {
        constructor(range = 10, center = { x: 0, y: 0, z: 0 }) {
          this.range = range // 粒子的分布半径
          this.center = center // 粒子的分布中心
          this.life = 5000 // 粒子的存活时间，毫秒
          this.createTime = Date.now() // 粒子创建时间
          this.updateTime = Date.now() // 上次更新时间
          this.size = 500 // 粒子大小

          // 粒子透明度，及系数
          this.opacityFactor = 1
          this.opacity = 1 * this.opacityFactor

          // 粒子放大量，及放大系数
          this.scaleFactor = 3
          this.scale = 1 + this.scaleFactor * (this.updateTime - this.createTime) / this.life // 初始1，到达生命周期时为3

          // 粒子位置
          this.position = {
            x: Math.random() * 2 * this.range + this.center.x - this.range,
            y: this.center.y,
            z: Math.random() * 2 * this.range + this.center.z - this.range,
          }

          // 水平方向的扩散
          let speedAround = Math.random() * 40
          if (speedAround < 20) speedAround -= 50
          if (speedAround > 20) speedAround += 10

          // 粒子的扩散速度
          this.speed = {
            x: speedAround,
            y: Math.random() * 100 + 300,
            z: speedAround,
          }

        }

        // 更新粒子
        update() {
          const now = Date.now()
          const time = now - this.updateTime

          // 更新位置
          this.position.x += this.speed.x * time / 1000
          this.position.y += this.speed.y * time / 1000
          this.position.z += this.speed.z * time / 1000

          // 计算粒子透明度
          this.opacity = 1 - (now - this.createTime) / this.life
          this.opacity *= this.opacityFactor
          if (this.opacity < 0) this.opacity = 0

          // 计算放大量
          this.scale = 1 + this.scaleFactor * (now - this.createTime) / this.life
          if (this.scale > 1 + this.scaleFactor) this.scale = 1 + this.scaleFactor

          // 重置更新时间
          this.updateTime = now
        }
      }


      // 创建粒子
      let particals = []
      setInterval(() => {
        particals.push(new Partical(10, { x: 0, y: 100, z: 0 }))
      }, 500)

      // 校验粒子，并更新粒子位置等数据
      setInterval(() => {
        particals = particals.filter(partical => {
          partical.update()
          if (partical.updateTime - partical.createTime > partical.life) {
            return false
          } else {
            return true
          }
        })
        if (!particals.length) return

        // 遍历粒子,收集属性
        const positionList = []
        const opacityList = []
        const scaleList = []
        const sizeList = []
        particals.forEach(partical => {
          const { x, y, z } = partical.position
          positionList.push(x, y, z)
          opacityList.push(partical.opacity)
          scaleList.push(partical.scale)
          sizeList.push(partical.size)
        })
        // 粒子属性写入
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionList), 3))
        geometry.setAttribute('a_opacity', new THREE.BufferAttribute(new Float32Array(opacityList), 1))
        geometry.setAttribute('a_scale', new THREE.BufferAttribute(new Float32Array(scaleList), 1))
        geometry.setAttribute('a_size', new THREE.BufferAttribute(new Float32Array(sizeList), 1))

      }, 20)
    },
    addThreeLayer(points, points2) {
      const threeLayer = new this.mapboxgl.supermap.ThreeLayer('threeLayer')
      threeLayer.on('initialized', render)
      const self = this
      let light
      function render() {
        const renderer = threeLayer.getThreeRenderer(),
          scene = threeLayer.getScene(),
          camera = threeLayer.getCamera()
        // scene.background = new THREE.Color('black')

        light = new THREE.PointLight(0xffffff, 0.8)
        light.position.copy(camera.position)
        scene.add(light)
        scene.add(new THREE.AmbientLight(0xffffff))

        threeLayer.setPosition(points, self.mapCenter)
        threeLayer.setPosition(points2, [self.mapCenter[0] + 0.002, self.mapCenter[1]])

        scene.add(points)
        scene.add(points2)

        ;(function animate() {
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
`,O=A("h1",{id:"黑烟效果",tabindex:"-1"},[u("黑烟效果 "),A("a",{class:"header-anchor",href:"#黑烟效果","aria-label":'Permalink to "黑烟效果"'},"​")],-1),N={id:"示例",tabindex:"-1"},Z=A("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),U=R("",2),J=JSON.parse('{"title":"黑烟效果","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/effects/smoke/index.md"}'),j={name:"threejs/iclient/effects/smoke/index.md"},$=Object.assign(j,{setup(y){return(p,o)=>{const a=m("play");return E(),h("div",null,[O,A("h2",N,[u("示例 "),b(a,{"source-code":P(V)},null,8,["source-code"]),u(),Z]),b(I),U])}}});export{J as __pageData,$ as default};
