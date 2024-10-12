import{_ as F,B as o,f as r,h as c,D as e,z as D,x as s,k as i,N as m}from"./chunks/framework.5deb65a5.js";const b={name:"TripLayerDemo",data(){return{mapCenter:[-73.9,40.7],tripsData:"//hongluan-ui.github.io/hongtu-next/json/trips.json",currentTime:0}},mounted(){const t=a=>{this.currentTime=a/10%1900,requestAnimationFrame(t)};t()}},u={style:{height:"400px"}};function g(p,t,a,C,n,A){const y=o("x-trips-layer"),d=o("x-map");return r(),c("div",u,[e(d,{zoom:10,pitch:40,center:n.mapCenter},{default:D(()=>[e(y,{data:n.tripsData,"get-path":l=>l.path,"get-timestamps":l=>l.timestamps,"trail-length":200,"current-time":n.currentTime},null,8,["data","get-path","get-timestamps","current-time"])]),_:1},8,["center"])])}const h=F(b,[["render",g]]),f=s("h1",{id:"轨迹线路图层-tripslayer",tabindex:"-1"},[i("轨迹线路图层（TripsLayer） "),s("a",{class:"header-anchor",href:"#轨迹线路图层-tripslayer","aria-label":'Permalink to "轨迹线路图层（TripsLayer）"'},"​")],-1),x=s("h2",{id:"示例",tabindex:"-1"},[i("示例 "),s("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1),E=m(`<h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height: 400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:pitch</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">40</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mapCenter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-trips-layer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tripsData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:get-path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(d) =&gt; d.path</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:get-timestamps</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(d) =&gt; d.timestamps</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:trail-length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:current-time</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currentTime</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TripLayerDemo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      mapCenter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">73.9</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">40.7</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      tripsData</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">__RESOURCE_URL__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">json/trips.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      currentTime</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">loop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1900</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">animate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">timestamp</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">currentTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">timestamp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">loop</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">animate</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">animate</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">PROPS <a class="header-anchor" href="#props" aria-label="Permalink to &quot;PROPS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td>autoHighlight</td><td style="text-align:left;">本属性为true且pickable为true时，则会将鼠标悬浮选中的对象设为高亮</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td>currentTime</td><td style="text-align:left;">当前时间</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>data</td><td style="text-align:left;">图层源数据</td><td style="text-align:left;">array / object / promise / string</td><td style="text-align:left;">[]</td></tr><tr><td>getColor</td><td style="text-align:left;">-</td><td style="text-align:left;">string / function / array</td><td style="text-align:left;">black</td></tr><tr><td>getTimestamps</td><td style="text-align:left;">-</td><td style="text-align:left;">function</td><td style="text-align:left;">-</td></tr><tr><td>getPath</td><td style="text-align:left;">-</td><td style="text-align:left;">function</td><td style="text-align:left;">object =&gt; object.path</td></tr><tr><td>getWidth</td><td style="text-align:left;">-</td><td style="text-align:left;">number / function</td><td style="text-align:left;">100</td></tr><tr><td>highlightColor</td><td style="text-align:left;">要与高亮对象原始颜色进行混合(blend)的颜色值</td><td style="text-align:left;">string / array</td><td style="text-align:left;">[255, 255, 128, 1]</td></tr><tr><td>highlightedObjectIndex</td><td style="text-align:left;">高亮元素序号</td><td style="text-align:left;">number</td><td style="text-align:left;">-1</td></tr><tr><td>id</td><td style="text-align:left;">图层Id</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td>miterLimit</td><td style="text-align:left;">rounded为false时生效</td><td style="text-align:left;">number</td><td style="text-align:left;">4</td></tr><tr><td>opacity</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td></tr><tr><td>pickable</td><td style="text-align:left;">图层是否会响应鼠标事件，若为false，则组件不会emit鼠标相关事件</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td>rounded</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td>show</td><td style="text-align:left;">-</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td>trailLength</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">120</td></tr><tr><td>widthMaxPixels</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">Number.MAX_SAFE_INTEGER</td></tr><tr><td>widthMinPixels</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td>widthScale</td><td style="text-align:left;">-</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td></tr><tr><td>widthUnits</td><td style="text-align:left;">-</td><td style="text-align:left;">string</td><td style="text-align:left;">meters</td></tr></tbody></table><h2 id="events" tabindex="-1">EVENTS <a class="header-anchor" href="#events" aria-label="Permalink to &quot;EVENTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>created</td><td style="text-align:left;">初始化完成事件</td><td style="text-align:left;">vm — 组件实例</td></tr><tr><td>mousemove</td><td style="text-align:left;">-</td><td style="text-align:left;">Object — 经纬度值为鼠标所在位置的经纬度值</td></tr><tr><td>mouseleave</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td>click</td><td style="text-align:left;">-</td><td style="text-align:left;">Object — 经纬度值为鼠标所在位置的经纬度值</td></tr></tbody></table><h2 id="slots" tabindex="-1">SLOTS <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;SLOTS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th></tr></thead></table><h2 id="methods" tabindex="-1">METHODS <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;METHODS&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">定义</th></tr></thead></table>`,11),q=JSON.parse('{"title":"轨迹线路图层（TripsLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/deck/trips/index.md"}'),_={name:"api/deck/trips/index.md"},T=Object.assign(_,{setup(p){return(t,a)=>(r(),c("div",null,[f,x,e(h),E]))}});export{q as __pageData,T as default};