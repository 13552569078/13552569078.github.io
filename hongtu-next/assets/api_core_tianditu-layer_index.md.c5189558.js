import{_ as h,B as o,f as a,h as e,D as r,z as f,x as t,a2 as x,a3 as g,F as y,K as F,y as _,k as i,u as v,N as D}from"./chunks/framework.5deb65a5.js";const E={name:"TiandituLayerDemo",data(){return{layerOptions:[{label:"矢量底图",layerTypes:["vec"]},{label:"矢量底图+注记",layerTypes:["vec","cva"]},{label:"影像底图",layerTypes:["img"]},{label:"影像底图+注记",layerTypes:["img","cia"]},{label:"地形晕渲",layerTypes:["ter"]},{label:"地形晕渲+注记",layerTypes:["ter","cta"]}],layerIndex:1}}},C={style:{height:"400px"},class:"vw-full vh-full"},T={style:{position:"absolute",top:"5px",left:"5px"}},q=["label","value"];function A(d,p,u,c,n,V){const b=o("x-tianditu-layer"),m=o("x-map");return a(),e("div",C,[r(m,null,{default:f(()=>[t("div",T,[x(t("select",{"onUpdate:modelValue":p[0]||(p[0]=s=>n.layerIndex=s),placeholder:"请选择"},[(a(!0),e(y,null,F(n.layerOptions,(s,l)=>(a(),e("option",{key:s.layerTypes[0]+l,label:s.label,value:l},null,8,q))),128))],512),[[g,n.layerIndex]])]),(a(!0),e(y,null,F(n.layerOptions,(s,l)=>(a(),_(b,{key:s.layerTypes[0]+l,types:s.layerTypes,show:n.layerIndex===l},null,8,["types","show"]))),128))]),_:1})])}const B=h(E,[["render",A]]),S=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <div style="position:absolute;top:5px;left:5px">
        <select v-model="layerIndex" placeholder="请选择">
          <option
            v-for="(item,index) in layerOptions"
            :key="item.layerTypes[0]+index"
            :label="item.label"
            :value="index"
          ></option>
        </select>
      </div>
      <x-tianditu-layer v-for="(item,index) in layerOptions" :key="item.layerTypes[0]+index" :types="item.layerTypes" :show="layerIndex===index" />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'TiandituLayerDemo',
  data(){
    return {
      layerOptions:[
        {
          label:'矢量底图',
          layerTypes:['vec'],
        },{
          label:'矢量底图+注记',
          layerTypes:['vec','cva'],
        },{
          label:'影像底图',
          layerTypes:['img'],
        },{
          label:'影像底图+注记',
          layerTypes:['img','cia'],
        },{
          label:'地形晕渲',
          layerTypes:['ter'],
        },{
          label:'地形晕渲+注记',
          layerTypes:['ter','cta'],
        },
      ],
      layerIndex:1,
    }
  },
}
<\/script>
`,k=D('<h1 id="天地图图层-tianditulayer" tabindex="-1">天地图图层（TiandituLayer） <a class="header-anchor" href="#天地图图层-tianditulayer" aria-label="Permalink to &quot;天地图图层（TiandituLayer）&quot;">​</a></h1><p>天地图图层，支持天地图图所有瓦片服务 无偏</p><ul><li><a href="http://t0.tianditu.gov.cn/vec_w/wmts?tk=82d822a61cefc9898e63a0c51e933f5a&amp;layer=cva&amp;style=default&amp;tilematrixset=w&amp;Service=WMTS&amp;Request=GetCapabilities" target="_blank" rel="noreferrer">矢量底图vec </a></li><li><a href="http://t0.tianditu.gov.cn/cva_w/wmts?tk=82d822a61cefc9898e63a0c51e933f5a&amp;layer=cva&amp;style=default&amp;tilematrixset=w&amp;Service=WMTS&amp;Request=GetCapabilities" target="_blank" rel="noreferrer">矢量注记cva </a></li><li><a href="http://t0.tianditu.gov.cn/img_w/wmts?tk=82d822a61cefc9898e63a0c51e933f5a&amp;layer=cva&amp;style=default&amp;tilematrixset=w&amp;Service=WMTS&amp;Request=GetCapabilities" target="_blank" rel="noreferrer">影像底图img </a></li><li><a href="http://t0.tianditu.gov.cn/cia_w/wmts?tk=82d822a61cefc9898e63a0c51e933f5a&amp;layer=cva&amp;style=default&amp;tilematrixset=w&amp;Service=WMTS&amp;Request=GetCapabilities" target="_blank" rel="noreferrer">影像注记cia </a></li><li><a href="http://t0.tianditu.gov.cn/ter_w/wmts?tk=82d822a61cefc9898e63a0c51e933f5a&amp;layer=cva&amp;style=default&amp;tilematrixset=w&amp;Service=WMTS&amp;Request=GetCapabilities" target="_blank" rel="noreferrer">地形晕渲ter </a></li><li><a href="http://t0.tianditu.gov.cn/cta_w/wmts?tk=82d822a61cefc9898e63a0c51e933f5a&amp;layer=cva&amp;style=default&amp;tilematrixset=w&amp;Service=WMTS&amp;Request=GetCapabilities" target="_blank" rel="noreferrer">地形注记cta </a></li></ul>',3),w={id:"示例",tabindex:"-1"},P=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),I=D(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position:absolute;top:5px;left:5px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">layerIndex</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(item,index) in layerOptions</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.layerTypes[0]+index</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">:label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          &gt;&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(item,index) in layerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.layerTypes[0]+index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:types</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.layerTypes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">layerIndex===index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TiandituLayerDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      layerOptions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">矢量底图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          layerTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vec</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#F07178;">          label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">矢量底图+注记</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          layerTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vec</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cva</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#F07178;">          label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">影像底图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          layerTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#F07178;">          label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">影像底图+注记</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          layerTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cia</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#F07178;">          label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">地形晕渲</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          layerTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#F07178;">          label</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">地形晕渲+注记</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          layerTypes</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cta</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      layerIndex</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>beforeId</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>token</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>id</td><td style="text-align:left;">图层id</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>maxzoom</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">22</td></tr><tr><td>minzoom</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>show</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>types</td><td style="text-align:left;">矢量底图:&#39;vec&#39; 矢量注记:&#39;cva&#39; 影像底图:&#39;img&#39; 影像注记:&#39;cia&#39; 地形晕渲:&#39;ter&#39; 地形注记&#39;cta&#39;</td><td style="text-align:left;">array</td><td style="text-align:left;">[&quot;vec&quot;, &quot;cva&quot;]</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead></table>`,11),R=JSON.parse('{"title":"天地图图层（TiandituLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/tianditu-layer/index.md"}'),O={name:"api/core/tianditu-layer/index.md"},L=Object.assign(O,{setup(d){return(p,u)=>{const c=o("play");return a(),e("div",null,[k,t("h2",w,[i("示例 "),r(c,{"source-code":v(S)},null,8,["source-code"]),i(),P]),r(B),I])}}});export{R as __pageData,L as default};