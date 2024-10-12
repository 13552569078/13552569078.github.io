import{_ as u,B as l,f as y,h as D,D as s,z as C,x as n,k as o,u as b,N as m}from"./chunks/framework.5deb65a5.js";const h={name:"PolylineLayerDemo",data(){return{colors:["rgba(255,125,0,0.5)","#ec71a9","red"],colorIndex:0,polylineCoordinates:[{coordinates:[[137.4609375,39.639537564366684],[136.7578125,49.38237278700955],[126.5625,54.77534585936447],[103.35937499999999,53.9560855309879],[83.3203125,47.040182144806664],[66.796875,34.59704151614417],[73.47656249999999,21.94304553343818],[87.5390625,11.178401873711785],[105.1171875,8.754794702435618],[115.6640625,13.581920900545844],[114.9609375,25.48295117535531],[93.8671875,25.799891182088334],[85.4296875,31.653381399664],[91.0546875,39.095962936305476],[104.765625,41.50857729743935],[114.9609375,41.50857729743935],[121.28906250000001,37.71859032558816],[127.265625,32.84267363195431],[130.78125,28.92163128242129]]},{coordinates:[[47.8125,-24.846565348219734],[183.1640625,-19.642587534013032],[176.48437499999997,70.02058730174062],[33.046875,67.60922060496382],[33.046875,-22.91792293614603],[31.9921875,-26.11598592533351]]}]}},computed:{color(){return this.colors[this.colorIndex%this.colors.length]}}},x={style:{height:"400px"},class:"vw-full vh-full"},g={style:{position:"absolute",top:"5px",left:"5px"}};function f(e,a,i,t,p,d){const c=l("x-tianditu-layer"),r=l("x-polyline-layer"),F=l("x-map");return y(),D("div",x,[s(F,null,{default:C(()=>[n("div",g,[n("button",{class:"primary",onClick:a[0]||(a[0]=V=>p.colorIndex++)},"切换颜色")]),s(c),s(r,{data:p.polylineCoordinates,width:3,color:d.color,"dash-array":[2,1]},null,8,["data","color"])]),_:1})])}const A=u(h,[["render",f]]),B=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <div style="position:absolute;top:5px;left:5px">
        <button class="primary" @click="colorIndex++">切换颜色</button>
      </div>
      <x-tianditu-layer />
      <x-polyline-layer
        :data="polylineCoordinates"
        :width="3"
        :color="color"
        :dash-array="[2,1]"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'PolylineLayerDemo',
  data(){
    return {
      colors:['rgba(255,125,0,0.5)','#ec71a9','red'],
      colorIndex:0,
      polylineCoordinates: [
        {
          coordinates: [
            [137.4609375, 39.639537564366684],
            [136.7578125, 49.38237278700955],
            [126.5625, 54.77534585936447],
            [103.35937499999999, 53.9560855309879],
            [83.3203125, 47.040182144806664],
            [66.796875, 34.59704151614417],
            [73.47656249999999, 21.94304553343818],
            [87.5390625, 11.178401873711785],
            [105.1171875, 8.754794702435618],
            [115.6640625, 13.581920900545844],
            [114.9609375, 25.48295117535531],
            [93.8671875, 25.799891182088334],
            [85.4296875, 31.653381399664],
            [91.0546875, 39.095962936305476],
            [104.765625, 41.50857729743935],
            [114.9609375, 41.50857729743935],
            [121.28906250000001, 37.71859032558816],
            [127.265625, 32.84267363195431],
            [130.78125, 28.92163128242129],
          ],
        },
        {
          coordinates: [
            [47.8125, -24.846565348219734],
            [183.1640625, -19.642587534013032],
            [176.48437499999997, 70.02058730174062],
            [33.046875, 67.60922060496382],
            [33.046875, -22.91792293614603],
            [31.9921875, -26.11598592533351],
          ],
        },
      ],
    }
  },
  computed:{
    color(){
      return this.colors[this.colorIndex % this.colors.length]
    },
  },
}
<\/script>
`,E={name:"PolylineLayerDemo2",data(){return{step:0,dashArray:[0,4,3],polylineCoordinates:[{coordinates:[[116.28,39.91],[116.29,39.91],[116.32,39.92],[116.33,39.91],[116.32,39.9],[116.32,39.89],[116.3,39.89],[116.29,39.89],[116.27,39.9]]}],dashArraySequence:[[0,4,3],[.5,4,2.5],[1,4,2],[1.5,4,1.5],[2,4,1],[2.5,4,.5],[3,4,0],[0,.5,3,3.5],[0,1,3,3],[0,1.5,3,2.5],[0,2,3,2],[0,2.5,3,1.5],[0,3,3,1],[0,3.5,3,.5]]}},mounted(){this.start()},methods:{start(){this.animate(0)},animate(e){const a=parseInt(e/50%this.dashArraySequence.length);a!==this.step&&(this.dashArray=this.dashArraySequence[this.step],this.step=a),requestAnimationFrame(this.animate)}}},_={style:{height:"400px"},class:"vw-full vh-full"};function q(e,a,i,t,p,d){const c=l("x-tianditu-layer"),r=l("x-polyline-layer"),F=l("x-map");return y(),D("div",_,[s(F,{center:[116.33,39.91],zoom:12},{default:C(()=>[s(c),s(r,{data:p.polylineCoordinates,width:6,color:"blue"},null,8,["data"]),s(r,{data:p.polylineCoordinates,width:6,color:"yellow","dash-array":p.dashArray},null,8,["data","dash-array"])]),_:1})])}const v=u(E,[["render",q]]),S=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[116.33,39.91]" :zoom="12">
      <x-tianditu-layer />
      <x-polyline-layer
        :data="polylineCoordinates"
        :width="6"
        color="blue"
      />
      <x-polyline-layer
        :data="polylineCoordinates"
        :width="6"
        color="yellow"
        :dash-array="dashArray"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'PolylineLayerDemo2',
  data(){
    return {
      step: 0,
      dashArray: [0, 4, 3],
      polylineCoordinates: [{ coordinates: [
        [116.28,39.91],
        [116.29,39.91],
        [116.32,39.92],
        [116.33,39.91],
        [116.32,39.90],
        [116.32,39.89],
        [116.30,39.89],
        [116.29,39.89],
        [116.27,39.90],
      ] }],
      dashArraySequence: [
        [0, 4, 3],
        [0.5, 4, 2.5],
        [1, 4, 2],
        [1.5, 4, 1.5],
        [2, 4, 1],
        [2.5, 4, 0.5],
        [3, 4, 0],
        [0, 0.5, 3, 3.5],
        [0, 1, 3, 3],
        [0, 1.5, 3, 2.5],
        [0, 2, 3, 2],
        [0, 2.5, 3, 1.5],
        [0, 3, 3, 1],
        [0, 3.5, 3, 0.5],
      ],
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    start() {
      this.animate(0)
    },
    animate(timestamp) {
      const newStep = parseInt(
        (timestamp / 50) % this.dashArraySequence.length,
      )

      if (newStep !== this.step) {
        this.dashArray = this.dashArraySequence[this.step]
        this.step = newStep
      }
      requestAnimationFrame(this.animate)
    },
  },
}
<\/script>
`,w=n("h1",{id:"折线图层-polyinelayer",tabindex:"-1"},[o("折线图层（PolyineLayer） "),n("a",{class:"header-anchor",href:"#折线图层-polyinelayer","aria-label":'Permalink to "折线图层（PolyineLayer）"'},"​")],-1),P={id:"示例",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),k=m("",2),T={id:"动画示例",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#动画示例","aria-label":'Permalink to "动画示例 <play :source-code="Demo2Source" />"'},"​",-1),N=m("",11),O=JSON.parse('{"title":"折线图层（PolyineLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/polyline-layer/index.md"}'),j={name:"api/core/polyline-layer/index.md"},z=Object.assign(j,{setup(e){return(a,i)=>{const t=l("play");return y(),D("div",null,[w,n("h2",P,[o("示例 "),s(t,{"source-code":b(B)},null,8,["source-code"]),o(),I]),s(A),k,n("h2",T,[o("动画示例 "),s(t,{"source-code":b(S)},null,8,["source-code"]),o(),L]),s(v),N])}}});export{O as __pageData,z as default};
