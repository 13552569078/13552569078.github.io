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
`,w=n("h1",{id:"折线图层-polyinelayer",tabindex:"-1"},[o("折线图层（PolyineLayer） "),n("a",{class:"header-anchor",href:"#折线图层-polyinelayer","aria-label":'Permalink to "折线图层（PolyineLayer）"'},"​")],-1),P={id:"示例",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),k=m(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position:absolute;top:5px;left:5px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">colorIndex++</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">切换颜色</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-polyline-layer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polylineCoordinates</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:dash-array</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[2,1]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PolylineLayerDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      colors</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(255,125,0,0.5)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ec71a9</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      colorIndex</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      polylineCoordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">137.4609375</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.639537564366684</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">136.7578125</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">49.38237278700955</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">126.5625</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">54.77534585936447</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">103.35937499999999</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">53.9560855309879</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">83.3203125</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">47.040182144806664</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">66.796875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">34.59704151614417</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">73.47656249999999</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">21.94304553343818</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">87.5390625</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11.178401873711785</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">105.1171875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">8.754794702435618</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">115.6640625</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">13.581920900545844</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">114.9609375</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">25.48295117535531</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">93.8671875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">25.799891182088334</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">85.4296875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31.653381399664</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">91.0546875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.095962936305476</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">104.765625</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">41.50857729743935</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">114.9609375</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">41.50857729743935</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">121.28906250000001</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">37.71859032558816</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">127.265625</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">32.84267363195431</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">130.78125</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">28.92163128242129</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">47.8125</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">24.846565348219734</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">183.1640625</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">19.642587534013032</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">176.48437499999997</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">70.02058730174062</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">33.046875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">67.60922060496382</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">33.046875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">22.91792293614603</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            [</span><span style="color:#F78C6C;">31.9921875</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">26.11598592533351</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">computed</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">colorIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">colors</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,2),T={id:"动画示例",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#动画示例","aria-label":'Permalink to "动画示例 <play :source-code="Demo2Source" />"'},"​",-1),N=m(`<h2 id="源码-1" tabindex="-1">源码 <a class="header-anchor" href="#源码-1" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[116.33,39.91]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-polyline-layer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polylineCoordinates</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-polyline-layer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polylineCoordinates</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yellow</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:dash-array</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dashArray</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PolylineLayerDemo2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      step</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      dashArray</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      polylineCoordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.28</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.91</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.29</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.91</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.32</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.92</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.33</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.91</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.32</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.90</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.32</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.89</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.30</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.89</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.29</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.89</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.27</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">39.90</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ] </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      dashArraySequence</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">2.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">mounted</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">animate</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">animate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">timestamp</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newStep</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        (</span><span style="color:#BABED8;">timestamp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">dashArraySequence</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">newStep</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">step</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">dashArray</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">dashArraySequence</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">step</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">step</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newStep</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">animate</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>beforeId</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>dashArray</td><td style="text-align:left;">形成虚线的 实线段与间隙的长度。以线宽为单位</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td>color</td><td style="text-align:left;">颜色值 支持 &quot;#000000&quot; &quot;rgb(0,0,0)&quot; [255,0,0,1]等模式</td><td style="text-align:left;">string / array</td><td style="text-align:left;">#000000</td></tr><tr><td>data</td><td style="text-align:left;">矢量图层的数据 数组中每个对象需包含必需的coordinates属性以及可选的properties属性 每一个对象代表一个点/一条线/一个多边形</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td>geoJsonDataSource</td><td style="text-align:left;">geojson数据源，可设为geojson数据链接或geojson数据对象；<a href="https://www.oschina.net/translate/geojson-spec?cmp" target="_blank" rel="noreferrer">规范链接</a>， 若设置了本属性，则data属性失效</td><td style="text-align:left;">string / object</td><td style="text-align:left;">-</td></tr><tr><td>opacity</td><td style="text-align:left;">透明度</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td></tr><tr><td>lineCap</td><td style="text-align:left;">-</td><td style="text-align:left;">string(&quot;butt&quot; &quot;round&quot; &quot;square&quot;)</td><td style="text-align:left;">butt</td></tr><tr><td>lineJoin</td><td style="text-align:left;">-</td><td style="text-align:left;">string(&quot;bevel&quot; &quot;round&quot; &quot;miter&quot;)</td><td style="text-align:left;">miter</td></tr><tr><td>id</td><td style="text-align:left;">图层id</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>maxzoom</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">22</td></tr><tr><td>minzoom</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>pickable</td><td style="text-align:left;">图层是否响应拾取事件，若为false，则组件不会emit鼠标相关事件</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>show</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>sourceId</td><td style="text-align:left;">图层Source的id，若设置了本ID，则geoJsonDataSource与data属性都会失效</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>sourceLayerName</td><td style="text-align:left;">源数据中图层名称 设置sourceId时，此属性生效</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>translate</td><td style="text-align:left;">偏移量，正数表示 右/下</td><td style="text-align:left;">array</td><td style="text-align:left;">[0,0]</td></tr><tr><td>width</td><td style="text-align:left;">宽度，以像素值为单位</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr><tr><td>click</td><td style="text-align:left;">图层单击事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel、经纬度coordinate与选中元素的属性properties、originalEvent</td></tr><tr><td>mousemove</td><td style="text-align:left;">鼠标移动事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel、经纬度coordinate与选中元素的属性properties、originalEvent</td></tr><tr><td>mouseleave</td><td style="text-align:left;">鼠标移出元素事件</td><td style="text-align:left;">MapMouseEvent</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td>exportToGeoJson</td><td style="text-align:left;">将本图层数据导出为geojson格式数据文本 若图层数据源来自source组件或为url，则输出null</td><td style="text-align:left;"><code>（）=&gt; object | null</code></td></tr></tbody></table>`,11),O=JSON.parse('{"title":"折线图层（PolyineLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/polyline-layer/index.md"}'),j={name:"api/core/polyline-layer/index.md"},z=Object.assign(j,{setup(e){return(a,i)=>{const t=l("play");return y(),D("div",null,[w,n("h2",P,[o("示例 "),s(t,{"source-code":b(B)},null,8,["source-code"]),o(),I]),s(A),k,n("h2",T,[o("动画示例 "),s(t,{"source-code":b(S)},null,8,["source-code"]),o(),L]),s(v),N])}}});export{O as __pageData,z as default};
