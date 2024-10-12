import{_ as b,B as a,f as o,h as r,D as n,z as u,x as s,k as t,u as m,N as g}from"./chunks/framework.5deb65a5.js";const x={name:"PolygonLayerDemo",data(){return{colors:["rgba(255,125,0,0.5)","#ec71a9","red"],colorIndex:0,polygonCoordinates:[{coordinates:[[110.56640625,39.639537564366684],[107.22656249999999,36.527294814546245],[107.57812499999999,32.39851580247402],[112.5,30.600093873550072],[117.42187500000001,32.02670629333614],[117.24609374999999,36.94989178681327],[114.697265625,39.70718665682654],[110.56640625,39.639537564366684]]},{coordinates:[[82.08984375,32.47269502206151],[90.966796875,32.47269502206151],[90.966796875,38.685509760012],[82.08984375,38.685509760012],[82.08984375,32.47269502206151]]}]}},computed:{color(){return this.colors[this.colorIndex%this.colors.length]}}},h={style:{height:"400px"},class:"vw-full vh-full"},f={style:{position:"absolute",top:"5px",left:"5px"}};function C(c,l,y,e,p,i){const F=a("x-tianditu-layer"),D=a("x-polygon-layer"),d=a("x-map");return o(),r("div",h,[n(d,null,{default:u(()=>[s("div",f,[s("button",{class:"primary",onClick:l[0]||(l[0]=S=>p.colorIndex++)},"切换颜色")]),n(F),n(D,{data:p.polygonCoordinates,color:i.color,"outline-color":"yellow"},null,8,["data","color"])]),_:1})])}const _=b(x,[["render",C]]),E=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <div style="position:absolute;top:5px;left:5px">
        <button class="primary" @click="colorIndex++">切换颜色</button>
      </div>
      <x-tianditu-layer />
      <x-polygon-layer
        :data="polygonCoordinates"
        :color="color"
        outline-color="yellow"
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'PolygonLayerDemo',
  data(){
    return {
      colors:['rgba(255,125,0,0.5)','#ec71a9','red'],
      colorIndex:0,
      polygonCoordinates:[
        { coordinates:[
          [
            110.56640625,
            39.639537564366684,
          ],
          [
            107.22656249999999,
            36.527294814546245,
          ],
          [
            107.57812499999999,
            32.39851580247402,
          ],
          [
            112.5,
            30.600093873550072,
          ],
          [
            117.42187500000001,
            32.02670629333614,
          ],
          [
            117.24609374999999,
            36.94989178681327,
          ],
          [
            114.697265625,
            39.70718665682654,
          ],
          [
            110.56640625,
            39.639537564366684,
          ],
        ] },
        { coordinates:[
          [
            82.08984375,
            32.47269502206151,
          ],
          [
            90.966796875,
            32.47269502206151,
          ],
          [
            90.966796875,
            38.685509760012,
          ],
          [
            82.08984375,
            38.685509760012,
          ],
          [
            82.08984375,
            32.47269502206151,
          ],
        ] },

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
`,B=s("h1",{id:"多边形图层-polygonlayer",tabindex:"-1"},[t("多边形图层（PolygonLayer） "),s("a",{class:"header-anchor",href:"#多边形图层-polygonlayer","aria-label":'Permalink to "多边形图层（PolygonLayer）"'},"​")],-1),v={id:"示例",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),q=g(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vw-full vh-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position:absolute;top:5px;left:5px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">colorIndex++</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">切换颜色</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-tianditu-layer</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-polygon-layer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">polygonCoordinates</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">outline-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yellow</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PolygonLayerDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      colors</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(255,125,0,0.5)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ec71a9</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      colorIndex</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      polygonCoordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">110.56640625</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">39.639537564366684</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">107.22656249999999</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">36.527294814546245</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">107.57812499999999</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">32.39851580247402</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">112.5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">30.600093873550072</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">117.42187500000001</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">32.02670629333614</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">117.24609374999999</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">36.94989178681327</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">114.697265625</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">39.70718665682654</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">110.56640625</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">39.639537564366684</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        ] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> coordinates</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">82.08984375</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">32.47269502206151</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">90.966796875</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">32.47269502206151</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">90.966796875</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">38.685509760012</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">82.08984375</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">38.685509760012</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">82.08984375</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">32.47269502206151</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        ] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
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
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>beforeId</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>color</td><td style="text-align:left;">颜色值 支持 &quot;#000000&quot; &quot;rgb(0,0,0)&quot; [255,0,0,1]等模式</td><td style="text-align:left;">string / array</td><td style="text-align:left;">#000000</td></tr><tr><td>data</td><td style="text-align:left;">矢量图层的数据 数组中每个对象需包含必需的coordinates属性以及可选的properties属性 每一个对象代表一个点/一条线/一个多边形</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td>geoJsonDataSource</td><td style="text-align:left;">geojson数据源，可设为geojson数据链接或geojson数据对象；<a href="https://www.oschina.net/translate/geojson-spec?cmp" target="_blank" rel="noreferrer">规范链接</a>， 若设置了本属性，则data属性失效</td><td style="text-align:left;">string / object</td><td style="text-align:left;">-</td></tr><tr><td>opacity</td><td style="text-align:left;">透明度</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td></tr><tr><td>outlineColor</td><td style="text-align:left;">边框颜色</td><td style="text-align:left;">string / array</td><td style="text-align:left;">#000</td></tr><tr><td>id</td><td style="text-align:left;">图层id</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>maxzoom</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">22</td></tr><tr><td>minzoom</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>pickable</td><td style="text-align:left;">图层是否响应拾取事件，若为false，则组件不会emit鼠标相关事件</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>show</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>sourceId</td><td style="text-align:left;">图层Source的id，若设置了本ID，则geoJsonDataSource与data属性都会失效</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>sourceLayerName</td><td style="text-align:left;">源数据中图层名称 设置sourceId时，此属性生效</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>translate</td><td style="text-align:left;">偏移量，正数表示 右/下</td><td style="text-align:left;">array</td><td style="text-align:left;">[0,0]</td></tr><tr><td>pattern</td><td style="text-align:left;">图片纹理，通过ImageLoader加载的图片名称，设置此值后，color属性无效</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">地图初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr><tr><td>click</td><td style="text-align:left;">图层单击事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel、经纬度coordinate与选中元素的属性properties、originalEvent</td></tr><tr><td>mousemove</td><td style="text-align:left;">鼠标移动事件</td><td style="text-align:left;">object — 包含屏幕坐标pixel、经纬度coordinate与选中元素的属性properties、originalEvent</td></tr><tr><td>mouseleave</td><td style="text-align:left;">鼠标移出元素事件</td><td style="text-align:left;">MapMouseEvent</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td>exportToGeoJson</td><td style="text-align:left;">将本图层数据导出为geojson格式数据文本 若图层数据源来自source组件或为url，则输出null</td><td style="text-align:left;"><code>（）=&gt; object | null</code></td></tr></tbody></table>`,11),I=JSON.parse('{"title":"多边形图层（PolygonLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/polygon-layer/index.md"}'),P={name:"api/core/polygon-layer/index.md"},T=Object.assign(P,{setup(c){return(l,y)=>{const e=a("play");return o(),r("div",null,[B,s("h2",v,[t("示例 "),n(e,{"source-code":m(E)},null,8,["source-code"]),t(),A]),n(_),q])}}});export{I as __pageData,T as default};
