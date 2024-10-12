import{e as u,f as _,h as w,a5 as r,I as d,a6 as v,a7 as E,a8 as A,a9 as k,aa as P,ab as j,ac as C,ad as R,ae as I,af as S,l as O,o as L,d as T,ag as D,ah as H,ai as U,a1 as $}from"./chunks/framework.5deb65a5.js";import{t as B}from"./chunks/theme.8a45bb10.js";import{au as N}from"./chunks/three.module.f4768b42.js";import"./chunks/hongtu-draw.4ed993c7.js";function V(n){return btoa(unescape(encodeURIComponent(n)))}const F={core:{imports:{"hongtu-draw":"https://fastly.jsdelivr.net/npm/hongtu-draw@latest/dist/hongtu-draw.mjs","@hongtu-next/core":"https://fastly.jsdelivr.net/npm/@hongtu-next/core@latest/dist/index.mjs",axios:"https://fastly.jsdelivr.net/npm/axios@1.3.4/dist/esm/axios.js"}},deck:{}},M=`:root {
  --background-gradient: linear-gradient(30deg, #f39c12 30%, #f1c40f);
  --gray: #34495e;
  --darkgray: #2c3e50;
}

.map-container {
  height: 400px;
}
.map-container.black {
  background-color: #21416B;
}
.map-dark-bg {
  background-color: #21416B;
}
button.primary {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button.primary:disabled {
  cursor: default;
}

button.primary:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}

button.primary.play {
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #FA8B16;
}

select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: #fff;
  background-color: var(--darkgray);
  background-image: none;
  cursor: pointer;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: .25em;
  overflow: hidden;
}
/* Arrow */
.select::after {
  content: '\\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  background-color: #34495e;
  transition: .25s all ease;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}


.mr10 {
  margin-right: 10px;
}

.section {
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
}
.section .item {
  padding: 10px;
  background: rgb(247, 247, 247);
  border: 1px solid #EBEEF5;
  color: #303133;
}
.section .item span {
  padding-top: 14px;
  display: inline-block;
  cursor: pointer;
}
.section .item img{
  width: 246px;
  height: 227px;
}`,z=u({__name:"play",props:{sourceCode:String,package:{type:String,default:"core"}},setup(n){const e=n,t=()=>{const o=e.sourceCode,i=o.indexOf("<template>"),c=o.indexOf("</template>");let l=[...o.substring(i,c).matchAll(/<([a-zA-Z0-9$_\-]+)[^<>]*>/g)].map(a=>a[1]&&a[1].startsWith("x-")?a[1]:"").filter(a=>a).map(a=>a.replace(/-(.)/g,(nn,y)=>y.toUpperCase())).map(a=>a[0].toUpperCase()+a.substring(1));l=Array.from(new Set([...l]));const p=o.split(`
`),g=p.findIndex(a=>a.indexOf("<script")>-1),f=p.findIndex(a=>a.indexOf("name:")>-1);p.splice(g+1,0,`import { ${l.join(", ")} } from '@hongtu-next/core'`),p.splice(f+2,0,`  components: { ${l.join(", ")} },`);const h=`${p.join(`\r
`)}
<style>
@import 'https://fastly.jsdelivr.net/npm/hongtu-draw@latest/dist/hongtu-draw.css';
@import 'https://fastly.jsdelivr.net/npm/@hongtu-next/core@latest/dist/index.css';
@import 'https://fastly.jsdelivr.net/npm/@hongtu-next/core@latest/dist/mapbox-gl-enhance.css';
@import 'https://fastly.jsdelivr.net/npm/@hongtu-next/util@latest/dist/measure-util.css';
${M}
</style>
`,x={["App.vue"]:h,"import_map.json":JSON.stringify(F[e.package])},b=`//bitjjj.github.io/hongluan-play/#${V(JSON.stringify(x))}`;window.open(b,"_blank")};return(o,i)=>(_(),w("button",{class:"primary play",onClick:t},"Play"))}});const G=n=>n,J=G({...B,enhanceApp:async({app:n})=>{n.component("play",z);{window.THREE=N;const e=await r(()=>import("./chunks/index.02f82f80.js"),["assets/chunks/index.02f82f80.js","assets/chunks/index.cea82448.js","assets/chunks/index.a4a71ff6.js","assets/chunks/commonjsHelpers.725317a4.js","assets/chunks/hongtu-draw.e4f7d12d.js"]);n.config.globalProperties.GisUtil=e.default??e;const t=await r(()=>import("./chunks/index.aad6cbd7.js"),["assets/chunks/index.aad6cbd7.js","assets/chunks/mapbox-gl-enhance.811cc15a.js","assets/chunks/commonjsHelpers.725317a4.js","assets/chunks/framework.5deb65a5.js","assets/chunks/index.cea82448.js","assets/chunks/index.a4a71ff6.js","assets/chunks/index.6f00c6fe.js","assets/chunks/hongtu-draw.e4f7d12d.js"]);console.log("HongtuCore",t),n.use(t.default??t);const o=await r(()=>import("./chunks/index.0c23755a.js"),["assets/chunks/index.0c23755a.js","assets/chunks/cdeck.esm.min.31e773eb.js","assets/chunks/mapbox-layer.7bbd3cb5.js","assets/chunks/commonjsHelpers.725317a4.js","assets/chunks/mapbox-gl-enhance.811cc15a.js","assets/chunks/framework.5deb65a5.js"]);n.use(o.default??o);const i=await r(()=>import("./chunks/index.f48e2336.js"),["assets/chunks/index.f48e2336.js","assets/chunks/cdeck.esm.min.31e773eb.js","assets/chunks/mapbox-layer.7bbd3cb5.js","assets/chunks/commonjsHelpers.725317a4.js","assets/chunks/mapbox-gl-enhance.811cc15a.js","assets/chunks/framework.5deb65a5.js"]);n.use(i.default??i);const c=await r(()=>import("./chunks/index.e40461a4.js"),["assets/chunks/index.e40461a4.js","assets/chunks/mapbox-layer.7bbd3cb5.js","assets/chunks/commonjsHelpers.725317a4.js","assets/chunks/framework.5deb65a5.js"]);n.use(c.default??c)}}});function m(n){if(n.extends){const e=m(n.extends);return{...e,...n,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),n.enhanceApp&&await n.enhanceApp(t)}}}return n}const s=m(J),Z=u({name:"VitePressApp",setup(){const{site:n}=O();return L(()=>{T(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),D(),H(),U(),s.setup&&s.setup(),()=>$(s.Layout)}});async function W(){const n=q(),e=X();e.provide(E,n);const t=A(n.route);return e.provide(k,t),e.component("Content",P),e.component("ClientOnly",j),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:e,router:n,siteData:C}),{app:e,router:n,data:t}}function X(){return R(Z)}function q(){let n=d,e;return I(t=>{let o=S(t);return n&&(e=o),(n||e===o)&&(o=o.replace(/\.js$/,".lean.js")),d&&(n=!1),r(()=>import(o),[])},s.NotFound)}d&&W().then(({app:n,router:e,data:t})=>{e.go().then(()=>{v(e.route,t.site),n.mount("#app")})});export{W as createApp};
