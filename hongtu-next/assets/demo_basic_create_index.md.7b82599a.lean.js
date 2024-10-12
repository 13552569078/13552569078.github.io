import{_ as u,B as r,f as c,h as F,D as t,z as B,x as o,k as y,N as A}from"./chunks/framework.5deb65a5.js";const E={name:"MapDemo",data(){return{mapCenter:[116.3466,39.8704],mapZoom:8,bearing:0,pitch:0,mousePosition:void 0}},methods:{createdHandler(n){this.$mapVm=n},mouseMoveHandler(n){this.mousePosition=n.coordinates},getTooltipContent(){return`地图中心:${this.mapCenter.map(n=>n.toFixed(3))} <br/> 
        缩放级别:${this.mapZoom.toFixed(3)} <br/> 
        方向角:${this.bearing.toFixed(3)} <br/> 
        倾角:${this.pitch.toFixed(3)} <br/> 
        鼠标位置:${this.mousePosition.map(n=>n.toFixed(3))}`},easeToRandomPos(){this.$mapVm.easeTo({center:[this.mapCenter[0]+e(-1,1),this.mapCenter[1]+e(-1,1)],duration:2e3}).then(()=>{})},flyToRandomPos(){this.$mapVm.flyTo({center:[e(-180,180),e(-90,90)],zoom:e(0,18)}).then(()=>{})}}};function e(n,s){return Math.random()*(s-n)+n}const d={style:{height:"400px",display:"flex","flex-direction":"column"}},C={style:{position:"absolute",top:"10px",left:"10px"}};function h(n,s,D,v,l,p){const i=r("x-map-tooltip"),m=r("x-tianditu-layer"),b=r("x-map");return c(),F("div",d,[t(b,{zoom:l.mapZoom,"onUpdate:zoom":s[2]||(s[2]=a=>l.mapZoom=a),center:l.mapCenter,"onUpdate:center":s[3]||(s[3]=a=>l.mapCenter=a),bearing:l.bearing,"onUpdate:bearing":s[4]||(s[4]=a=>l.bearing=a),pitch:l.pitch,"onUpdate:pitch":s[5]||(s[5]=a=>l.pitch=a),onMousemove:p.mouseMoveHandler,onCreated:p.createdHandler},{default:B(()=>[o("div",C,[o("button",{class:"primary mr10",onClick:s[0]||(s[0]=(...a)=>p.easeToRandomPos&&p.easeToRandomPos(...a))}," 地图平移至附近随机位置 "),o("button",{class:"primary",onClick:s[1]||(s[1]=(...a)=>p.flyToRandomPos&&p.flyToRandomPos(...a))}," 地图飞行至随机位置 ")]),t(i,{"get-content":p.getTooltipContent},null,8,["get-content"]),t(m)]),_:1},8,["zoom","center","bearing","pitch","onMousemove","onCreated"])])}const g=u(E,[["render",h]]),f=o("h1",{id:"创建地图",tabindex:"-1"},[y("创建地图 "),o("a",{class:"header-anchor",href:"#创建地图","aria-label":'Permalink to "创建地图"'},"​")],-1),x=o("h2",{id:"示例",tabindex:"-1"},[y("示例 "),o("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1),_=A("",2),P=JSON.parse('{"title":"创建地图","description":"","frontmatter":{},"headers":[],"relativePath":"demo/basic/create/index.md"}'),q={name:"demo/basic/create/index.md"},R=Object.assign(q,{setup(n){return(s,D)=>(c(),F("div",null,[f,x,t(g),_]))}});export{P as __pageData,R as default};