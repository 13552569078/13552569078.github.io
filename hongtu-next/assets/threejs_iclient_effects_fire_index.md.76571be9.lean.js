import{f as d,a as b,S as C,D as f,L as x,g as v,h as m,i as h,V as g,B as M,C as w,T,M as z,c as _,A as S}from"./chunks/three.module.f4768b42.js";import{_ as L,B as F,f as B,h as u,x as r,D as t,z as P,k as i,u as q,N as R}from"./chunks/framework.5deb65a5.js";const c={defines:{ITERATIONS:10,OCTIVES:3},uniforms:{fireTex:{type:"t",value:null},color:{type:"c",value:null},time:{type:"f",value:0},seed:{type:"f",value:0},invModelMatrix:{type:"m4",value:null},scale:{type:"v3",value:null},noiseScale:{type:"v4",value:new d(1,2,1,.3)},magnitude:{type:"f",value:2.5},lacunarity:{type:"f",value:3},gain:{type:"f",value:.6}},vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      }`,fragmentShader:`
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 permute(vec4 x) {
       return mod289(((x*34.0)+1.0)*x);
  }
  
  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  float snoise(vec3 v)
    {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;
  
  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
  
    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
  
  // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  
  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;
  
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
  
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
  
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
  
    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
  
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
  
  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
  
  // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
    }

    uniform vec3 color;
        uniform float time;
        uniform float seed;
        uniform mat4 invModelMatrix;
        uniform vec3 scale;
        uniform vec4 noiseScale;
        uniform float magnitude;
        uniform float lacunarity;
        uniform float gain;
        uniform sampler2D fireTex;
        varying vec3 vWorldPos;              

        float turbulence(vec3 p) {
          float sum = 0.0;
          float freq = 1.0;
          float amp = 1.0;
          for(int i = 0; i < OCTIVES; i++) {
            sum += abs(snoise(p * freq)) * amp;
            freq *= lacunarity;
            amp *= gain;
          }
          return sum;
        }

        vec4 samplerFire (vec3 p, vec4 scale) {
          vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);
          if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          p.y -= (seed + time) * scale.w;
          p *= scale.xyz;
          st.y += sqrt(st.y) * magnitude * turbulence(p);
          if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          return texture2D(fireTex, st);
        }

        vec3 localize(vec3 p) {
          return (invModelMatrix * vec4(p, 1.0)).xyz;
        }

        void main() {
          vec3 rayPos = vWorldPos;
          vec3 rayDir = normalize(rayPos - cameraPosition);
          float rayLen = 0.0288 * length(scale.xyz);
          vec4 col = vec4(0.0);
          for(int i = 0; i < ITERATIONS; i++) {
            rayPos += rayDir * rayLen;
            vec3 lp = localize(rayPos);
            lp.y += 0.5;
            lp.xz *= 2.0;
            col += samplerFire(lp, noiseScale);
          }
          col.a = col.r;
          gl_FragColor = col;
        }

  `};class H extends b{constructor(s,n){const a=new C({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:c.uniforms,defines:c.defines,transparent:!0,depthWrite:!1,depthTest:!1,side:f});s.magFilter=s.minFilter=x,s.wrapS=s.wrapT=v,a.uniforms.fireTex.value=s,a.uniforms.color.value=n||new m(15658734),a.uniforms.invModelMatrix.value=new h,a.uniforms.scale.value=new g(1,1,1),a.uniforms.seed.value=Math.random()*19.19,super(new M(1,1,1),a)}update(s){const n=this.material.uniforms.invModelMatrix.value;this.updateMatrixWorld(),n.copy(this.matrixWorld).invert(),s!==void 0&&(this.material.uniforms.time.value+=s),this.material.uniforms.invModelMatrix.value=n,this.material.uniforms.scale.value=this.scale}}const k={name:"Map3D",data(){return{mapCenter:[116.3466,39.8704],mapZoom:16,bearing:0,pitch:45}},methods:{createdHandler(e){this.map=e.$map,this.mapboxgl=this.map.mapboxgl,this.mixers=[],this.clock=new w,this.loaderModels()},loaderModels(){const s=new T().load("//bitjjj.github.io/hongtu-next/images/fire.png"),n=new H(s),a=new b(n.geometry,new z({color:new m(16711680),wireframe:!0}));n.scale.multiplyScalar(1e3),n.rotation.z=Math.PI,n.rotation.x=Math.PI/4,a.scale.multiplyScalar(1e3),this.addThreeLayer(n,a)},addThreeLayer(e,s){const n=new this.mapboxgl.supermap.ThreeLayer("threeLayer");n.on("initialized",y);const a=this;let l;function y(){const D=n.getThreeRenderer(),o=n.getScene(),p=n.getCamera();l=new _(16777215,.8),l.position.copy(p.position),o.add(l),o.add(new S(16777215)),n.setPosition(e,a.mapCenter),n.setPosition(s,a.mapCenter),o.add(e),function E(){const A=a.clock.getDelta();e.update(A),D.render(o,p),requestAnimationFrame(E)}()}n.on("render",function(){l&&l.position.copy(n.renderer.camera.position)}),this.map.addLayer(n)}}},I={style:{height:"500px"},class:"vw-full vh-full"},j={style:{height:"400px"}};function V(e,s,n,a,l,y){const D=F("x-tianditu-layer"),o=F("x-map");return B(),u("div",I,[r("div",j,[t(o,{zoom:l.mapZoom,"onUpdate:zoom":s[0]||(s[0]=p=>l.mapZoom=p),center:l.mapCenter,"onUpdate:center":s[1]||(s[1]=p=>l.mapCenter=p),bearing:l.bearing,"onUpdate:bearing":s[2]||(s[2]=p=>l.bearing=p),pitch:l.pitch,"onUpdate:pitch":s[3]||(s[3]=p=>l.pitch=p),onCreated:y.createdHandler},{default:P(()=>[t(D)]),_:1},8,["zoom","center","bearing","pitch","onCreated"])])])}const W=L(k,[["render",V]]),N=`<template>
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
import { FireMesh } from './firemesh'

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
      const loader = new THREE.TextureLoader()

      const fireTex = loader.load('//bitjjj.github.io/hongtu-next/' + 'images/fire.png')

      const fireMesh = new FireMesh(fireTex)
      const wireframe = new THREE.Mesh(fireMesh.geometry, new THREE.MeshBasicMaterial({
        color : new THREE.Color(0xff0000),
        wireframe : true,
      }))

      fireMesh.scale.multiplyScalar(1000)
      fireMesh.rotation.z = Math.PI
      fireMesh.rotation.x = Math.PI / 4
      wireframe.scale.multiplyScalar(1000)

      this.addThreeLayer(fireMesh, wireframe)
    },
    addThreeLayer(fireMesh, wireframe) {
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

        threeLayer.setPosition(fireMesh, self.mapCenter)
        threeLayer.setPosition(wireframe, self.mapCenter)

        scene.add(fireMesh)
        // scene.add(wireframe)

        ;(function animate() {
          const delta = self.clock.getDelta()
          fireMesh.update(delta)
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
`,O=r("h1",{id:"火焰效果",tabindex:"-1"},[i("火焰效果 "),r("a",{class:"header-anchor",href:"#火焰效果","aria-label":'Permalink to "火焰效果"'},"​")],-1),Z={id:"示例",tabindex:"-1"},U=r("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),G=R("",6),Q=JSON.parse('{"title":"火焰效果","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/effects/fire/index.md"}'),J={name:"threejs/iclient/effects/fire/index.md"},X=Object.assign(J,{setup(e){return(s,n)=>{const a=F("play");return B(),u("div",null,[O,r("h2",Z,[i("示例 "),t(a,{"source-code":q(N)},null,8,["source-code"]),i(),U]),t(W),G])}}});export{Q as __pageData,X as default};
