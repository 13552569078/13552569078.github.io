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
`,O=r("h1",{id:"火焰效果",tabindex:"-1"},[i("火焰效果 "),r("a",{class:"header-anchor",href:"#火焰效果","aria-label":'Permalink to "火焰效果"'},"​")],-1),Z={id:"示例",tabindex:"-1"},U=r("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),G=R(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:500px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapZoom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:bearing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bearing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:pitch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pitch</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@created</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">createdHandler</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMesh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./firemesh</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Map3D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      mapCenter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">116.3466</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.8704</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      mapZoom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      bearing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      pitch</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">createdHandler</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">mapVm</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mapVm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">$map</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapboxgl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mapboxgl</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mixers</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">clock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Clock</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">loaderModels</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">loaderModels</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">loader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TextureLoader</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireTex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/fire.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireMesh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">FireMesh</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fireTex</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">wireframe</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">geometry</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshBasicMaterial</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        color </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Color</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0xff0000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        wireframe </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">multiplyScalar</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">PI</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">PI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">wireframe</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">multiplyScalar</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addThreeLayer</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">wireframe</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">addThreeLayer</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">fireMesh</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">wireframe</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">threeLayer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">mapboxgl</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">supermap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ThreeLayer</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">threeLayer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">initialized</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">render</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">self</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">light</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">renderer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getThreeRenderer</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#BABED8;">scene</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getScene</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#BABED8;">camera</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCamera</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// scene.background = new THREE.Color(&#39;black&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">light</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PointLight</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0xffffff</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.8</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">light</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">position</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">light</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AmbientLight</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0xffffff</span><span style="color:#F07178;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPosition</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">self</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPosition</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">wireframe</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">self</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mapCenter</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fireMesh</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// scene.add(wireframe)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">animate</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">delta</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">self</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">clock</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDelta</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#BABED8;">fireMesh</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">delta</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#BABED8;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">camera</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">animate</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//均匀光照，与相机位置同步</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">render</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">light</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">light</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">threeLayer</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">position</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addLayer</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">threeLayer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><h2 id="源码-mesh" tabindex="-1">源码-Mesh <a class="header-anchor" href="#源码-mesh" aria-label="Permalink to &quot;源码-Mesh&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMaterial</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./fireshader</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FireMesh</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Mesh</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">fireTex</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">color</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ShaderMaterial</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      vertexShader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">vertexShader</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      fragmentShader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">fragmentShader</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      uniforms</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      defines</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">defines</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      transparent     </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      depthWrite      </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      depthTest       </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      side</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">DoubleSide</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// initialize uniforms</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireTex</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">magFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireTex</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">minFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">LinearFilter</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireTex</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">wrapS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireTex</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">wrapT</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">ClampToEdgeWrapping</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">fireTex</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireTex</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">color</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Color</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">0xeeeeee</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">invModelMatrix</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Matrix4</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#F07178;">( </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">seed</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">19.19</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">super</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fireMaterial</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">update</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">time</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">invModelMatrix</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">material</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">invModelMatrix</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">updateMatrixWorld</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">invModelMatrix</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">matrixWorld</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invert</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">( </span><span style="color:#BABED8;">time</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">material</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">time</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">time</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">material</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">invModelMatrix</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">invModelMatrix</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">material</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">uniforms</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">scale</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMesh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="源码-shader" tabindex="-1">源码-Shader <a class="header-anchor" href="#源码-shader" aria-label="Permalink to &quot;源码-Shader&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> FireMaterial </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">defines</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">ITERATIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">    </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">OCTIVES</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">       </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">uniforms</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">fireTex</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">seed</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">invModelMatrix</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">noiseScale</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector4</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">magnitude</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2.5</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">lacunarity</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3.0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">gain</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0.6</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">vertexShader</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">      varying vec3 vWorldPos;</span></span>
<span class="line"><span style="color:#C3E88D;">      void main() {</span></span>
<span class="line"><span style="color:#C3E88D;">        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);</span></span>
<span class="line"><span style="color:#C3E88D;">        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;</span></span>
<span class="line"><span style="color:#C3E88D;">      }</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">fragmentShader</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  vec3 mod289(vec3 x) {</span></span>
<span class="line"><span style="color:#C3E88D;">    return x - floor(x * (1.0 / 289.0)) * 289.0;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  vec4 mod289(vec4 x) {</span></span>
<span class="line"><span style="color:#C3E88D;">    return x - floor(x * (1.0 / 289.0)) * 289.0;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  vec4 permute(vec4 x) {</span></span>
<span class="line"><span style="color:#C3E88D;">       return mod289(((x*34.0)+1.0)*x);</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  vec4 taylorInvSqrt(vec4 r)</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    return 1.79284291400159 - 0.85373472095314 * r;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  float snoise(vec3 v)</span></span>
<span class="line"><span style="color:#C3E88D;">    {</span></span>
<span class="line"><span style="color:#C3E88D;">    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;</span></span>
<span class="line"><span style="color:#C3E88D;">    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  // First corner</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 i  = floor(v + dot(v, C.yyy) );</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 x0 =   v - i + dot(i, C.xxx) ;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  // Other corners</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 g = step(x0.yzx, x0.xyz);</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 l = 1.0 - g;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 i1 = min( g.xyz, l.zxy );</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 i2 = max( g.xyz, l.zxy );</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    //   x0 = x0 - 0.0 + 0.0 * C.xxx;</span></span>
<span class="line"><span style="color:#C3E88D;">    //   x1 = x0 - i1  + 1.0 * C.xxx;</span></span>
<span class="line"><span style="color:#C3E88D;">    //   x2 = x0 - i2  + 2.0 * C.xxx;</span></span>
<span class="line"><span style="color:#C3E88D;">    //   x3 = x0 - 1.0 + 3.0 * C.xxx;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 x1 = x0 - i1 + C.xxx;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  // Permutations</span></span>
<span class="line"><span style="color:#C3E88D;">    i = mod289(i);</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 p = permute( permute( permute(</span></span>
<span class="line"><span style="color:#C3E88D;">               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))</span></span>
<span class="line"><span style="color:#C3E88D;">             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))</span></span>
<span class="line"><span style="color:#C3E88D;">             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  // Gradients: 7x7 points over a square, mapped onto an octahedron.</span></span>
<span class="line"><span style="color:#C3E88D;">  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)</span></span>
<span class="line"><span style="color:#C3E88D;">    float n_ = 0.142857142857; // 1.0/7.0</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3  ns = n_ * D.wyz - D.xzx;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 x_ = floor(j * ns.z);</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 x = x_ *ns.x + ns.yyyy;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 y = y_ *ns.x + ns.yyyy;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 h = 1.0 - abs(x) - abs(y);</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 b0 = vec4( x.xy, y.xy );</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 b1 = vec4( x.zw, y.zw );</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;</span></span>
<span class="line"><span style="color:#C3E88D;">    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 s0 = floor(b0)*2.0 + 1.0;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 s1 = floor(b1)*2.0 + 1.0;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 sh = -step(h, vec4(0.0));</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 p0 = vec3(a0.xy,h.x);</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 p1 = vec3(a0.zw,h.y);</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 p2 = vec3(a1.xy,h.z);</span></span>
<span class="line"><span style="color:#C3E88D;">    vec3 p3 = vec3(a1.zw,h.w);</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  //Normalise gradients</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));</span></span>
<span class="line"><span style="color:#C3E88D;">    p0 *= norm.x;</span></span>
<span class="line"><span style="color:#C3E88D;">    p1 *= norm.y;</span></span>
<span class="line"><span style="color:#C3E88D;">    p2 *= norm.z;</span></span>
<span class="line"><span style="color:#C3E88D;">    p3 *= norm.w;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  // Mix final noise value</span></span>
<span class="line"><span style="color:#C3E88D;">    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);</span></span>
<span class="line"><span style="color:#C3E88D;">    m = m * m;</span></span>
<span class="line"><span style="color:#C3E88D;">    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),</span></span>
<span class="line"><span style="color:#C3E88D;">                                  dot(p2,x2), dot(p3,x3) ) );</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    uniform vec3 color;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform float time;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform float seed;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform mat4 invModelMatrix;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform vec3 scale;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform vec4 noiseScale;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform float magnitude;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform float lacunarity;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform float gain;</span></span>
<span class="line"><span style="color:#C3E88D;">        uniform sampler2D fireTex;</span></span>
<span class="line"><span style="color:#C3E88D;">        varying vec3 vWorldPos;              </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        float turbulence(vec3 p) {</span></span>
<span class="line"><span style="color:#C3E88D;">          float sum = 0.0;</span></span>
<span class="line"><span style="color:#C3E88D;">          float freq = 1.0;</span></span>
<span class="line"><span style="color:#C3E88D;">          float amp = 1.0;</span></span>
<span class="line"><span style="color:#C3E88D;">          for(int i = 0; i &lt; OCTIVES; i++) {</span></span>
<span class="line"><span style="color:#C3E88D;">            sum += abs(snoise(p * freq)) * amp;</span></span>
<span class="line"><span style="color:#C3E88D;">            freq *= lacunarity;</span></span>
<span class="line"><span style="color:#C3E88D;">            amp *= gain;</span></span>
<span class="line"><span style="color:#C3E88D;">          }</span></span>
<span class="line"><span style="color:#C3E88D;">          return sum;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        vec4 samplerFire (vec3 p, vec4 scale) {</span></span>
<span class="line"><span style="color:#C3E88D;">          vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);</span></span>
<span class="line"><span style="color:#C3E88D;">          if(st.x &lt;= 0.0 || st.x &gt;= 1.0 || st.y &lt;= 0.0 || st.y &gt;= 1.0) return vec4(0.0);</span></span>
<span class="line"><span style="color:#C3E88D;">          p.y -= (seed + time) * scale.w;</span></span>
<span class="line"><span style="color:#C3E88D;">          p *= scale.xyz;</span></span>
<span class="line"><span style="color:#C3E88D;">          st.y += sqrt(st.y) * magnitude * turbulence(p);</span></span>
<span class="line"><span style="color:#C3E88D;">          if(st.y &lt;= 0.0 || st.y &gt;= 1.0) return vec4(0.0);</span></span>
<span class="line"><span style="color:#C3E88D;">          return texture2D(fireTex, st);</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        vec3 localize(vec3 p) {</span></span>
<span class="line"><span style="color:#C3E88D;">          return (invModelMatrix * vec4(p, 1.0)).xyz;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        void main() {</span></span>
<span class="line"><span style="color:#C3E88D;">          vec3 rayPos = vWorldPos;</span></span>
<span class="line"><span style="color:#C3E88D;">          vec3 rayDir = normalize(rayPos - cameraPosition);</span></span>
<span class="line"><span style="color:#C3E88D;">          float rayLen = 0.0288 * length(scale.xyz);</span></span>
<span class="line"><span style="color:#C3E88D;">          vec4 col = vec4(0.0);</span></span>
<span class="line"><span style="color:#C3E88D;">          for(int i = 0; i &lt; ITERATIONS; i++) {</span></span>
<span class="line"><span style="color:#C3E88D;">            rayPos += rayDir * rayLen;</span></span>
<span class="line"><span style="color:#C3E88D;">            vec3 lp = localize(rayPos);</span></span>
<span class="line"><span style="color:#C3E88D;">            lp.y += 0.5;</span></span>
<span class="line"><span style="color:#C3E88D;">            lp.xz *= 2.0;</span></span>
<span class="line"><span style="color:#C3E88D;">            col += samplerFire(lp, noiseScale);</span></span>
<span class="line"><span style="color:#C3E88D;">          }</span></span>
<span class="line"><span style="color:#C3E88D;">          col.a = col.r;</span></span>
<span class="line"><span style="color:#C3E88D;">          gl_FragColor = col;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FireMaterial</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br></div></div>`,6),Q=JSON.parse('{"title":"火焰效果","description":"","frontmatter":{},"headers":[],"relativePath":"threejs/iclient/effects/fire/index.md"}'),J={name:"threejs/iclient/effects/fire/index.md"},X=Object.assign(J,{setup(e){return(s,n)=>{const a=F("play");return B(),u("div",null,[O,r("h2",Z,[i("示例 "),t(a,{"source-code":q(N)},null,8,["source-code"]),i(),U]),t(W),G])}}});export{Q as __pageData,X as default};
