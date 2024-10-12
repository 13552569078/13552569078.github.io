import{_ as d,B as n,f as o,h as p,D as s,z as u,x as a,k as l,u as h,N as b}from"./chunks/framework.5deb65a5.js";const m={name:"VideoLayerDemo",data(){return{urls:["//bitjjj.github.io/hongtu-next/videos/cestc-demo1.mp4"],coordinates:[[116.3594627380371,39.93632920085673],[116.4228057861328,39.93632920085673],[116.4228057861328,39.89735776851477],[116.3594627380371,39.89735776851477]]}}},_={style:{height:"400px"},class:"vw-full vh-full"};function x(r,c,i,t,e,S){const y=n("x-tianditu-layer"),F=n("x-video-layer"),D=n("x-map");return o(),p("div",_,[s(D,{zoom:12,pitch:40},{default:u(()=>[s(y),s(F,{urls:e.urls,coordinates:e.coordinates},null,8,["urls","coordinates"])]),_:1})])}const f=d(m,[["render",x]]),g=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="12" :pitch="40">
      <x-tianditu-layer />
      <x-video-layer :urls="urls" :coordinates="coordinates" />
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'VideoLayerDemo',
  data() {
    return {
      urls: ['//bitjjj.github.io/hongtu-next/' + 'videos/cestc-demo1.mp4'],
      coordinates: [
        [116.3594627380371, 39.93632920085673],
        [116.4228057861328, 39.93632920085673],
        [116.4228057861328, 39.89735776851477],
        [116.3594627380371, 39.89735776851477],
      ],
    }
  },
}
<\/script>
`,C=a("h1",{id:"视频图层-videolayer",tabindex:"-1"},[l("视频图层（VideoLayer） "),a("a",{class:"header-anchor",href:"#视频图层-videolayer","aria-label":'Permalink to "视频图层（VideoLayer）"'},"​")],-1),E=a("p",null,"视频图层，可以将视频按照目标经纬度范围贴到地图上",-1),v={id:"示例",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=b(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:pitch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">40</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-video-layer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:urls</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:coordinates</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coordinates</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VideoLayerDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      urls</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">videos/cestc-demo1.mp4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.3594627380371</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.93632920085673</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.4228057861328</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.93632920085673</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.4228057861328</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.89735776851477</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#F78C6C;">116.3594627380371</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">39.89735776851477</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>coordinates</td><td style="text-align:left;">图片四个角的经纬度数组，顺序：左上、右上、右下、左下 eg:[ [-80.425, 46.437], [-71.516, 46.437], [-71.516, 37.936], [-80.425, 37.936] ]</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td>urls</td><td style="text-align:left;">视频资源路径 数组中可添加多个视频地址，以便对不同浏览器进行兼容</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td>beforeId</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>id</td><td style="text-align:left;">图层id</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>show</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead></table>`,11),V=JSON.parse('{"title":"视频图层（VideoLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/video-layer/index.md"}'),A={name:"api/core/video-layer/index.md"},T=Object.assign(A,{setup(r){return(c,i)=>{const t=n("play");return o(),p("div",null,[C,E,a("h2",v,[l("示例 "),s(t,{"source-code":h(g)},null,8,["source-code"]),l(),B]),s(f),q])}}});export{V as __pageData,T as default};