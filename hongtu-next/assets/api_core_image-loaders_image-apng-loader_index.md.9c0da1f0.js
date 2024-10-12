import{_ as u,B as a,f as o,h as t,D as n,z as b,x as s,k as p,u as d,N as h}from"./chunks/framework.5deb65a5.js";const g={name:"ImageLoaderDemo",data(){return{tiandituTypes:["vec","cia"],images:[{name:"firefox",url:"//hongluan-ui.github.io/hongtu-next/images/firefox.png"}],symbolDataSource:[{coordinates:[115.124368,29.216049],properties:{icon:"firefox"}},{coordinates:[115.124368,29.246049],properties:{icon:"firefox"}},{coordinates:[115.124368,29.186049],properties:{icon:"firefox"}},{coordinates:[115.324368,29.216049],properties:{icon:"firefox"}}]}}},f={style:{height:"400px"},class:"vw-full vh-full"};function x(r,c,F,e,l,T){const i=a("x-tianditu-layer"),D=a("x-image-apng-loader"),y=a("x-symbol-layer"),m=a("x-map");return o(),t("div",f,[n(m,{center:[115.124368,29.216049],zoom:10},{default:b(()=>[n(i,{types:l.tiandituTypes},null,8,["types"]),n(D,{images:l.images},null,8,["images"]),n(y,{id:"symbol",data:l.symbolDataSource,"icon-size":.2,"icon-image-field":"icon","icon-rotation-alignment":"map"},null,8,["data"])]),_:1})])}const _=u(g,[["render",x]]),C=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[115.124368, 29.216049]" :zoom="10">
      <x-tianditu-layer :types="tiandituTypes" />
      <x-image-apng-loader :images="images" />
      <x-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        :icon-size="0.2"
        icon-image-field="icon"
        icon-rotation-alignment="map"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'ImageLoaderDemo',
  data() {
    return {
      tiandituTypes: ['vec', 'cia'],
      images: [
        {
          name: 'firefox',
          url: '//hongluan-ui.github.io/hongtu-next/' + 'images/firefox.png',
        },
      ],
      symbolDataSource: [{
        coordinates: [115.124368, 29.216049],
        properties: {
          icon: 'firefox',
        },
      }, {
        coordinates: [115.124368, 29.246049],
        properties: {
          icon: 'firefox',
        },
      }, {
        coordinates: [115.124368, 29.186049],
        properties: {
          icon: 'firefox',
        },
      }, {
        coordinates: [115.324368, 29.216049],
        properties: {
          icon: 'firefox',
        },
      }],
    }
  },
}
<\/script>
`,E=s("h1",{id:"apng图片加载器-imageapngloader",tabindex:"-1"},[p("APNG图片加载器（ImageApngLoader） "),s("a",{class:"header-anchor",href:"#apng图片加载器-imageapngloader","aria-label":'Permalink to "APNG图片加载器（ImageApngLoader）"'},"​")],-1),q=s("p",null,[s("em",null,[s("strong",null,"版本：>=2.3.2")])],-1),A=s("p",null,"ImageApngLoader 提供预加载APNG图标",-1),B={id:"示例",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),S=h(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[115.124368, 29.216049]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:types</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tiandituTypes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-image-apng-loader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:images</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-symbol-layer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbol</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbolDataSource</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:icon-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">icon-image-field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">icon-rotation-alignment</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">map</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ImageLoaderDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      tiandituTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vec</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cia</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      images</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/firefox.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      symbolDataSource</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">115.124368</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">29.216049</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">115.124368</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">29.246049</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">115.124368</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">29.186049</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">115.324368</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">29.216049</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>images</td><td style="text-align:left;">图片属性数组 数组中每个对象需包含必需的name属性以及图片相关信息</td><td style="text-align:left;"><code>array&lt;{ name: string; url: string; size: number[]; requestInit?: RequestInit }&gt;</code></td><td style="text-align:left;">-</td></tr></tbody></table><p>组件使用fetch去请求图片数据，如果是跨域请求，请在服务端配置CORS头部，requestInit为fetch的第二个参数</p><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead></table>`,12),N=JSON.parse('{"title":"APNG图片加载器（ImageApngLoader）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-loaders/image-apng-loader/index.md"}'),P={name:"api/core/image-loaders/image-apng-loader/index.md"},k=Object.assign(P,{setup(r){return(c,F)=>{const e=a("play");return o(),t("div",null,[E,q,A,s("h2",B,[p("示例 "),n(e,{"source-code":d(C)},null,8,["source-code"]),p(),v]),n(_),S])}}});export{N as __pageData,k as default};
