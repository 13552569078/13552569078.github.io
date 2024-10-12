import{_ as b,B as p,f as D,h as y,D as l,z as o,x as n,k as e,u as h,N as m}from"./chunks/framework.5deb65a5.js";const f={name:"PopupDemo",data(){return{showCustomPopup:!0,showDefaultPopup:!0}}},x={style:{height:"400px"},class:"vw-full vh-full"},g=n("div",{style:{width:"100px",height:"100px",background:"#81adb0d9"}},[n("p",null,"自定义Popup")],-1);function E(i,s,F,r,a,v){const u=p("x-tianditu-layer"),c=p("x-map-popup"),d=p("x-map");return D(),y("div",x,[l(d,{zoom:14,pitch:40},{default:o(()=>[n("button",{style:{position:"absolute",top:"5px",left:"5px"},onClick:s[0]||(s[0]=t=>{a.showCustomPopup=!0,a.showDefaultPopup=!0})}," 显示弹窗 "),l(u,{types:["img"]}),l(c,{show:a.showCustomPopup,"onUpdate:show":s[1]||(s[1]=t=>a.showCustomPopup=t),coordinates:[116.388,39.91266],anchor:"bottom"},{default:o(()=>[g]),_:1},8,["show"]),l(c,{show:a.showDefaultPopup,"onUpdate:show":s[2]||(s[2]=t=>a.showDefaultPopup=t),coordinates:[116.4,39.91266],"hide-on-click":!1},{content:o(()=>[e(" 默认Popup ")]),_:1},8,["show"])]),_:1})])}const B=b(f,[["render",E]]),C=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="14" :pitch="40">
      <button
        style="position:absolute;top:5px;left:5px"
        @click="
          showCustomPopup = true;
          showDefaultPopup = true;
        "
      >
        显示弹窗
      </button>
      <x-tianditu-layer :types="['img']" />
      <x-map-popup
        v-model:show="showCustomPopup"
        :coordinates="[116.388, 39.91266]"
        anchor="bottom"
      >
        <div style="width:100px;height:100px;background:#81adb0d9;">
          <p>自定义Popup</p>
        </div>
      </x-map-popup>

      <x-map-popup
        v-model:show="showDefaultPopup"
        :coordinates="[116.40, 39.91266]"
        :hide-on-click="false"
      >
        <template #content>
          默认Popup
        </template>
      </x-map-popup>
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'PopupDemo',
  data() {
    return { showCustomPopup: true, showDefaultPopup: true }
  },
}
<\/script>
`,_=n("h1",{id:"气泡弹窗-mappopup",tabindex:"-1"},[e("气泡弹窗（MapPopup） "),n("a",{class:"header-anchor",href:"#气泡弹窗-mappopup","aria-label":'Permalink to "气泡弹窗（MapPopup）"'},"​")],-1),P={id:"示例",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),w=m(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">14</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:pitch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">40</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position:absolute;top:5px;left:5px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">          showCustomPopup = true;</span></span>
<span class="line"><span style="color:#C3E88D;">          showDefaultPopup = true;</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        显示弹窗</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:types</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;img&#39;]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map-popup</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showCustomPopup</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:coordinates</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[116.388, 39.91266]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">anchor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width:100px;height:100px;background:#81adb0d9;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">自定义Popup</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map-popup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map-popup</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showDefaultPopup</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:coordinates</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[116.40, 39.91266]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:hide-on-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          默认Popup</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map-popup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PopupDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> showCustomPopup</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> showDefaultPopup</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>anchor</td><td style="text-align:left;">表示标记的哪个部位距离坐标点最近</td><td style="text-align:left;">string（&#39;center&#39;, &#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;right&#39;, &#39;top-left&#39;, &#39;top-right&#39;, &#39;bottom-left&#39;, &#39;bottom-right&#39;）</td><td style="text-align:left;">bottom</td></tr><tr><td>className</td><td style="text-align:left;">添加到popup dom元素上的Class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>coordinates</td><td style="text-align:left;">marker的经纬度位置</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td>hideOnClick</td><td style="text-align:left;">点击地图时是否自动关闭气泡弹窗</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td>hideOnMove</td><td style="text-align:left;">鼠标在地图移动时是否自动关闭气泡弹窗</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td>offset</td><td style="text-align:left;">popup偏移量 正向为右/下</td><td style="text-align:left;">number / array</td><td style="text-align:left;">[0,0]</td></tr><tr><td>show</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>showTip</td><td style="text-align:left;">是否自动添加气泡指向三角形</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>tipColor</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">#fff</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr><tr><td>update:show</td><td style="text-align:left;">显示隐藏事件</td><td style="text-align:left;">visible</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td>default</td><td style="text-align:left;">默认插槽</td></tr><tr><td>content</td><td style="text-align:left;">内容插槽</td></tr></tbody></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead></table>`,11),S=JSON.parse('{"title":"气泡弹窗（MapPopup）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map-popup/index.md"}'),q={name:"api/core/map-popup/index.md"},T=Object.assign(q,{setup(i){return(s,F)=>{const r=p("play");return D(),y("div",null,[_,n("h2",P,[e("示例 "),l(r,{"source-code":h(C)},null,8,["source-code"]),e(),A]),l(B),w])}}});export{S as __pageData,T as default};