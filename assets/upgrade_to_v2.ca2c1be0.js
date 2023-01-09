import{I as p,L as x,W as v,Q as t,X as u,P as s,a3 as D,aN as f,T as n,o as e}from"./vue.8a077a47.js";import{_ as y}from"./index.3e39e2d9.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";import"./hongluan-icons.286a55ba.js";const A={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:b,resolveComponent:i,withCtx:B,createVNode:h,Fragment:F,openBlock:m,createElementBlock:a}=f,d=b(" Button ");function g(c,C){const j=i("hl-button"),E=i("hl-input");return m(),a(F,null,[h(j,{style:{"--button-radius":"8px","--button-padding-x":"20px","--button-padding-y":"4px","--button-height":"50px","--button-font-weight":"600","--button-font-size":"16px","--button-border-width":"2px","--button-font-color":"#8a9ab1","--button-font-color-hover":"var(--text-regular)","--button-font-color-active":"var(--text-title)","--button-bg-color":"transparent","--button-bg-color-hover":"rgba(255,255,255, 0.1)","--button-bg-color-active":"rgba(255,255,255, 0.15)","--button-border-color":"#364863","--button-border-color-hover":"#77869b","--button-border-color-active":"var(--success)"}},{default:B(()=>[d]),_:1}),h(E,{modelValue:c.input,"onUpdate:modelValue":C[0]||(C[0]=_=>c.input=_),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",class:"m-l-md",style:{"--input-radius":"8px","--input-height":"50px","--input-padding-x":"20px","--input-padding-y":"4px","--input-border-width":"2px","--input-font-size":"16px","--input-font-color":"#8a9ab1","--input-font-color-hover":"var(--text-regular)","--input-font-color-focus":"var(--success)","--input-border-color":"#364863","--input-border-color-hover":"#77869b","--input-border-color-focus":"var(--success)"}},null,8,["modelValue"])],64)}const{defineComponent:l,ref:r}=f,o=l({setup(){return{input:r("Input")}}});return{render:g,...o}}()}},w=t("h1",null,"\u4ECE V1 \u7248\u672C\u5347\u7EA7\u81F3 V2",-1),z=t("p",null,[n("Hongluan v2 \u7248\u672C\u5BF9 css \u6837\u5F0F\u7CFB\u7EDF\u8FDB\u884C\u4E86\u91CD\u6784\uFF0Cv2 \u7248\u5141\u8BB8\u4F60\u4F7F\u7528\u4EFB\u610F\u7684 css \u9884\u7F16\u8BD1\u5668 "),t("code",null,"Sass"),n("\u3001"),t("code",null,"Less"),n("\u3001"),t("code",null,"Stylus"),n("\uFF0C\u6216\u8005\u76F4\u63A5\u5BF9\u7EC4\u4EF6\u4F7F\u7528\u539F\u751F\u7684 "),t("code",null,"css"),n(" \u8FDB\u884C\u6837\u5F0F\u8C03\u6574\u3002")],-1),q=t("h4",{id:"shi-yong-yuan-sheng-css-jin-xing-diao-zheng"},[t("a",{class:"header-anchor",href:"#shi-yong-yuan-sheng-css-jin-xing-diao-zheng"}),n(" \u4F7F\u7528\u539F\u751F css \u8FDB\u884C\u8C03\u6574\uFF1A")],-1),k=n(" custom.css "),$=e(`<pre><code class="hljs language-scss"><span class="hljs-comment">// \u901A\u8FC7\u5BF9 root \u4E0B\u7684 css var\u53D8\u91CF\u8FDB\u884C\u5FEB\u901F\u8C03\u6574</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--bg-body</span>: <span class="hljs-number">#16202f</span>;
  <span class="hljs-attr">--bg-content</span>: <span class="hljs-number">#1c283b</span>;
  <span class="hljs-attr">--bg-light</span>: <span class="hljs-number">#182536</span>;
  <span class="hljs-attr">--bg-popup</span>: <span class="hljs-number">#16202f</span>;
  <span class="hljs-attr">--bg-element</span>: <span class="hljs-number">#213148</span>;
  <span class="hljs-attr">--bg-hover</span>: <span class="hljs-number">#1c283b</span>;
  <span class="hljs-attr">--bg-active</span>: <span class="hljs-number">#f6f9fb</span>;
  <span class="hljs-attr">--bg-header</span>: <span class="hljs-number">#16202f</span>;
  <span class="hljs-attr">--bg-backdrop</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.6</span>);
  ......
}
</code></pre><h4 id="ni-ke-yi-pei-zhi-zi-ji-de-yang-shi-wen-jian-lai-dui-quan-ju-yang-shi-jin-xing-xiu-gai-li-ru"><a class="header-anchor" href="#ni-ke-yi-pei-zhi-zi-ji-de-yang-shi-wen-jian-lai-dui-quan-ju-yang-shi-jin-xing-xiu-gai-li-ru"></a> \u4F60\u53EF\u4EE5\u914D\u7F6E\u81EA\u5DF1\u7684\u6837\u5F0F\u6587\u4EF6\u6765\u5BF9\u5168\u5C40\u6837\u5F0F\u8FDB\u884C\u4FEE\u6539\uFF0C\u4F8B\u5982\uFF1A</h4>`,2),V=n(" custom.less "),N=e(`<pre><code class="hljs language-less"><span class="hljs-comment">// \u5B9A\u4E49\u53D8\u91CF\u4E0E\u5C5E\u6027</span>
<span class="hljs-variable">@conf_bg_color:</span> {
  body: #16202f;
  <span class="hljs-attribute">content</span>: <span class="hljs-number">#1c283b</span>;
  light: #182536;
  popup: #16202f;
  element: #213148;
  hover: #1c283b;
  active: #f6f9fb;
  header: #16202f;
  backdrop: rgba(0, 0, 0, 0.6);
};

<span class="hljs-comment">// \u904D\u5386css\u53D8\u91CF</span>

<span class="hljs-selector-tag">each</span>(<span class="hljs-variable">@conf_bg_color</span>, {
  <span class="hljs-selector-tag">--bg-</span><span class="hljs-variable">@{key}</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-variable">@value</span>;
  }
})

<span class="hljs-comment">// \u8F93\u51FA\u5230</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--bg-body</span>: #16202f;
  <span class="hljs-attr">--bg-content</span>: #1c283b;
  <span class="hljs-attr">--bg-light</span>: #182536;
  <span class="hljs-attr">--bg-popup</span>: #16202f;
  <span class="hljs-attr">--bg-element</span>: #213148;
  <span class="hljs-attr">--bg-hover</span>: #1c283b;
  <span class="hljs-attr">--bg-active</span>: #f6f9fb;
  <span class="hljs-attr">--bg-header</span>: #16202f;
  <span class="hljs-attr">--bg-backdrop</span>: rgba(0, 0, 0, 0.6);
}
</code></pre><h4 id="dang-ran-wo-men-reng-ran-tui-jian-ni-shi-yong-scss-pei-zhi-wen-jian-jin-xing-ji-chu-ding-yi"><a class="header-anchor" href="#dang-ran-wo-men-reng-ran-tui-jian-ni-shi-yong-scss-pei-zhi-wen-jian-jin-xing-ji-chu-ding-yi"></a> \u5F53\u7136\uFF0C\u6211\u4EEC\u4ECD\u7136\u63A8\u8350\u4F60\u4F7F\u7528 Scss \u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u57FA\u7840\u5B9A\u4E49\uFF1A</h4><p>\u56E0\u4E3A hongluan \u7684\u6837\u5F0F\u90FD\u662F\u81EA\u52A8\u751F\u6210\u7684\uFF0C\u4F60\u53EA\u9700\u8981\u64CD\u7EB5 config.scss \u6587\u4EF6\u5373\u53EF\u5BF9\u6574\u4F53 UI \u8FDB\u884C\u6DF1\u5EA6\u4FEE\u6539\u3002\u5C31\u7B97\u5BF9 scss \u4E0D\u591F\u719F\u7EC3\u4E5F\u5B8C\u5168\u6CA1\u6709\u95EE\u9898\u3002</p>`,3),S=n(" config.scss "),I=e(`<pre><code class="hljs language-scss"><span class="hljs-comment">//--\u80CC\u666F\u8272</span>
<span class="hljs-variable">$conf_bg_color</span>: (
  <span class="hljs-string">&#39;body&#39;</span>: <span class="hljs-number">#16202f</span>,
  <span class="hljs-string">&#39;content&#39;</span>: <span class="hljs-number">#1c283b</span>,
  <span class="hljs-string">&#39;light&#39;</span>: <span class="hljs-number">#182536</span>,
  <span class="hljs-string">&#39;popup&#39;</span>: <span class="hljs-number">#16202f</span>,
  <span class="hljs-string">&#39;element&#39;</span>: <span class="hljs-number">#213148</span>,
  <span class="hljs-string">&#39;hover&#39;</span>: <span class="hljs-number">#1c283b</span>,
  <span class="hljs-string">&#39;active&#39;</span>: <span class="hljs-number">#f6f9fb</span>,
  <span class="hljs-string">&#39;header&#39;</span>: <span class="hljs-number">#16202f</span>,
  <span class="hljs-string">&#39;backdrop&#39;</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">#000000</span>, <span class="hljs-number">0.6</span>),
) !default;
</code></pre><h2 id="xin-zeng-zu-jian-ji-bian-liang"><a class="header-anchor" href="#xin-zeng-zu-jian-ji-bian-liang"></a> \u65B0\u589E\u7EC4\u4EF6\u7EA7\u53D8\u91CF</h2><p>\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5305\u542B\u4E86\u72EC\u7ACB\u7684\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u5B83\u7684\u6837\u5F0F\u8FDB\u884C\u6DF1\u5EA6\u8C03\u6574\uFF0C\u4E5F\u53EF\u4EE5\u50CF\u4E0A\u9762\u7684\u4ECB\u7ECD\u90A3\u6837\uFF0C\u901A\u8FC7\u4E00\u4E2A\u5355\u72EC\u7684 css \u6587\u4EF6\u6765\u5BF9\u5168\u5C40\u7EC4\u4EF6\u8FDB\u884C\u6837\u5F0F\u5B9A\u4E49\u3002</p>`,3),T=t("pre",null,[t("code",{class:"html"},`<hl-button
  style="
    --button-radius: 8px;
    --button-padding-x: 20px;
    --button-padding-y: 4px;
    --button-height: 50px;
    --button-font-weight: 600;
    --button-font-size: 16px;
    --button-border-width: 2px;
    --button-font-color: #8a9ab1;
    --button-font-color-hover: var(--text-regular);
    --button-font-color-active: var(--text-title);
    --button-bg-color: transparent;
    --button-bg-color-hover: rgba(255,255,255, 0.1);
    --button-bg-color-active: rgba(255,255,255, 0.15);
    --button-border-color: #364863;
    --button-border-color-hover: #77869b;
    --button-border-color-active: var(--success);
  "
>
  Button
</hl-button>

<hl-input
  v-model="input"
  placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
  class="m-l-md"
  style="
    --input-radius: 8px;
    --input-height: 50px;
    --input-padding-x: 20px;
    --input-padding-y: 4px;
    --input-border-width: 2px;
    --input-font-size: 16px;
    --input-font-color: #8a9ab1;
    --input-font-color-hover: var(--text-regular);
    --input-font-color-focus: var(--success);
    --input-border-color: #364863;
    --input-border-color-hover: #77869b;
    --input-border-color-focus: var(--success);
  "
/>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      return {
        input: ref('Input'),
      }
    },
  })
<\/script>
`)],-1),H=t("h2",{id:"pei-zhi-wen-jian-de-bian-hua"},[t("a",{class:"header-anchor",href:"#pei-zhi-wen-jian-de-bian-hua"}),n(" \u914D\u7F6E\u6587\u4EF6\u7684\u53D8\u5316")],-1),P=t("p",null,[n("config.scss \u914D\u7F6E\u6587\u4EF6\u5DF2\u7ECF\u5B8C\u5168\u91CD\u6784\u4E3A "),t("a",{href:"https://sass-lang.com/documentation/values/maps"},"Scss:Maps"),n(" \u5F62\u5F0F\uFF0C \u6240\u4EE5\u4F60\u9700\u8981\u5C06\u4F60\u9879\u76EE\u7684 config \u91CC\u5BF9\u5E94\u7684\u503C\u5168\u90E8\u8FC1\u79FB\u81F3\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\u3002")],-1),R=n(" v1x \u7248\u672C config.scss "),L=e(`<pre><code class="hljs language-scss"><span class="hljs-variable">$tagRadius</span>: <span class="hljs-variable">$pageRadius-Md</span> !default;
<span class="hljs-variable">$tagPadding</span>: <span class="hljs-number">2px</span> <span class="hljs-variable">$sm</span> !default;
<span class="hljs-variable">$tagFontSize</span>: <span class="hljs-variable">$pageFontSize-Md</span> !default;
<span class="hljs-variable">$tagHeight</span>: <span class="hljs-variable">$pageFormHeight-Sm</span> !default;
<span class="hljs-variable">$tagBgColor</span>: <span class="hljs-built_in">darken</span>(<span class="hljs-variable">$pageBG-Hover</span>, <span class="hljs-number">3%</span>) !default;
<span class="hljs-variable">$tagBorderColor</span>: <span class="hljs-variable">$pageBorderColor</span> !default;
<span class="hljs-variable">$tagFontColor</span>: <span class="hljs-variable">$pageFontColor</span> !default;
</code></pre>`,1),M=n(" v2x \u7248\u672C config.scss "),G=e(`<pre><code class="hljs language-scss"><span class="hljs-variable">$conf_tag</span>: (
  <span class="hljs-string">&#39;radius&#39;</span>: <span class="hljs-built_in">var</span>(--radius-md),
  <span class="hljs-string">&#39;padding-y&#39;</span>: <span class="hljs-number">2px</span>,
  <span class="hljs-string">&#39;padding-x&#39;</span>: <span class="hljs-built_in">var</span>(--sm),
  <span class="hljs-string">&#39;height&#39;</span>: <span class="hljs-built_in">var</span>(--form-sm),
  <span class="hljs-string">&#39;font-size&#39;</span>: <span class="hljs-built_in">var</span>(--font-md),
  <span class="hljs-string">&#39;font-color&#39;</span>: <span class="hljs-built_in">var</span>(--text-regular),
  <span class="hljs-string">&#39;border-color&#39;</span>: <span class="hljs-built_in">var</span>(--border-regular),
  <span class="hljs-string">&#39;bg-color&#39;</span>: <span class="hljs-built_in">var</span>(--bg-hover),
) !default;
</code></pre><div class="doc-tip"><p>\u6211\u4EEC\u5C06\u5E38\u7528\u989C\u8272\u3001\u5C3A\u5BF8\u90FD\u8F93\u51FA\u6210 <code>css var</code> \u5F62\u5F0F\uFF0C\u4F60\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u4E5F\u53EF\u4EE5\u8C03\u7528 \u4F8B\u5982\uFF1A<code>&#39;bg-color&#39;: var(--bg-hover)</code></p></div><h2 id="yang-shi-ming-cheng-bian-hua"><a class="header-anchor" href="#yang-shi-ming-cheng-bian-hua"></a> \u6837\u5F0F\u540D\u79F0\u53D8\u5316</h2><p>\u4E3A\u4E86\u907F\u514D\u6837\u5F0F\u51B2\u7A81\u548C\u547D\u540D\u89C4\u8303\u5316\uFF0C\u6211\u4EEC\u5C06\u5C11\u91CF\u7684 class \u540D\u79F0\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u4F8B\u5982\uFF1A</p><h4 id="align-shu-xing-de-ming-ming-xiu-gai"><a class="header-anchor" href="#align-shu-xing-de-ming-ming-xiu-gai"></a> align \u5C5E\u6027\u7684\u547D\u540D\u4FEE\u6539</h4><p>\u9664\u4E86 left \\ center \\ right \\ top \\ middle \\ bottom \\ between \u4EE5\u5916\uFF0Cv2 \u7248\u8FD8\u8865\u5168\u4E86 flex \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u76F8\u5173\u6587\u6863\u8BF7\u67E5\u770B <a href="/2x/#/zh-CN/style/flex">flex \u5F39\u6027\u5E03\u5C40</a></p>`,6),Q=n(' align="center" '),U=n(' align="items-center" '),W=e(`<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">hl-group</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;items-middle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">hl-group</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">hl-row</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;items-middle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">hl-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">hl-form</span> <span class="hljs-attr">:label-position</span>=<span class="hljs-string">&quot;[&#39;items-right&#39;, &#39;items-middle&#39;]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">hl-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">hl-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6D3B\u52A8\u5F62\u5F0F&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;items-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">hl-form-item</span>&gt;</span>
</code></pre><h4 id="grid-zu-jian-zhong-de-ming-ming-xiu-gai"><a class="header-anchor" href="#grid-zu-jian-zhong-de-ming-ming-xiu-gai"></a> Grid \u7EC4\u4EF6\u4E2D\u7684\u547D\u540D\u4FEE\u6539</h4>`,2),X=n(" grid-row-span-lg-* "),J=n(" row-span-lg-* "),K=e(`<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">hl-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;col row-span-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">hl-col</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">hl-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;col col-span-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">hl-col</span>&gt;</span>
</code></pre><h2 id="xiang-ying-shi-de-sheng-ming-zai-qian"><a class="header-anchor" href="#xiang-ying-shi-de-sheng-ming-zai-qian"></a> \u54CD\u5E94\u5F0F\u7684\u58F0\u660E\u5728\u524D</h2><p>v2 \u7248\u672C\u7684\u54CD\u5E94\u5F0F\u58F0\u660E\u6807\u7B7E\u5199\u5728\u5E38\u89C4\u7C7B\u7684\u524D\u9762\uFF0C\u8FD9\u6837\u66F4\u6709\u52A9\u4E8E\u7406\u89E3\u3002 \u4F8B\u5982\uFF1Am-t-<ins>md</ins> \u4E2D\u7684 <code>&quot;md&quot;</code> \u4EE3\u8868\u5C3A\u5BF8\uFF0C \u800C col-<ins>md</ins>-12 \u4E2D\u7684 <code>&quot;md&quot;</code> \u4EE3\u8868\u6D4F\u89C8\u5668\u54CD\u5E94\u7684\u65AD\u70B9\uFF0C\u8FD9\u5F88\u5BB9\u6613\u5F15\u8D77\u8BEF\u89E3\u3002\u6240\u4EE5 v2 \u7248\u672C\u5B66\u4E60\u4E86 tailwind \u7684\u65B9\u6CD5\u5E76\u4F18\u5316\u4E86\u8868\u8FBE\u65B9\u5F0F\u3002</p>`,3),O=n(" col-md-6 "),Y=n(" md:col-6 "),Z=e(`<pre><code class="hljs language-scss"><span class="hljs-comment">// v1 \u7248\u672C\u4E2D\u4F7F\u7528\u5230\u7684\u54CD\u5E94\u65AD\u70B9\u7C7B\u578B\u6709\uFF1A sm\u3001 md\u3001 lg\u3001 xl\u3001 xxl, \u6BD4\u4F8B\u5C3A\u5BF8\u4E3A\uFF1A 1 \u81F3 24</span>
<span class="hljs-comment">// \u8BF7\u6839\u636E\u4E0B\u9762\u7684\u5217\u8868\u4F9D\u6B21\u66FF\u6362</span>

col-{\u65AD\u70B9\u7C7B\u578B}-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}           -&gt;        {\u65AD\u70B9\u7C7B\u578B}:col-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}
offset-{\u65AD\u70B9\u7C7B\u578B}-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}        -&gt;        {\u65AD\u70B9\u7C7B\u578B}:offset-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}
count-{\u65AD\u70B9\u7C7B\u578B}-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}         -&gt;        {\u65AD\u70B9\u7C7B\u578B}:count-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}
<span class="hljs-attribute">grid</span>-col-<span class="hljs-selector-tag">span</span>-{\u65AD\u70B9\u7C7B\u578B}-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>} -&gt;        {\u65AD\u70B9\u7C7B\u578B}:col-span-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}
<span class="hljs-attribute">grid-row</span>-<span class="hljs-selector-tag">span</span>-{\u65AD\u70B9\u7C7B\u578B}-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>} -&gt;        {\u65AD\u70B9\u7C7B\u578B}:row-span-{<span class="hljs-number">1</span>-<span class="hljs-number">24</span>}
</code></pre><h2 id="zhuang-tai-de-sheng-ming-zai-qian"><a class="header-anchor" href="#zhuang-tai-de-sheng-ming-zai-qian"></a> \u72B6\u6001\u7684\u58F0\u660E\u5728\u524D</h2><p>\u540C\u6837\u7684\u89C4\u8303\u4E0B\uFF0Cv2 \u7248\u5C06\u4EA4\u4E92\u72B6\u6001\u7684\u58F0\u660E\u4E5F\u653E\u5728\u7C7B\u540D\u7684\u524D\u9762\u3002\u4F8B\u5982\u8868\u8FBE <code>bg-hover</code> \u7C7B\u540D\u7684 <code>hover</code> \u72B6\u6001</p>`,3),uu=n(" bg-hover-hover "),su=n(" hover:bg-hover "),nu=e(`<pre><code class="hljs language-scss">
<span class="hljs-comment">// v1 \u7248\u672C\u4E2D\u4F7F\u7528\u5230\u7684\u72B6\u6001\u7C7B\u578B\u6709\uFF1Achecked\u3001 active\u3001 hover</span>
<span class="hljs-comment">// \u8BF7\u6839\u636E\u4E0B\u9762\u7684\u5217\u8868\u4F9D\u6B21\u66FF\u6362</span>

bg-transparent-{\u72B6\u6001\u7C7B\u578B}       -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-transparent
bg-body-{\u72B6\u6001\u7C7B\u578B}              -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-body
bg-content-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-content
bg-light-{\u72B6\u6001\u7C7B\u578B}             -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-light
bg-element-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-element
bg-hover-{\u72B6\u6001\u7C7B\u578B}             -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-hover
bg-active-{\u72B6\u6001\u7C7B\u578B}            -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-active
bg-title-{\u72B6\u6001\u7C7B\u578B}             -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-title
bg-mask-{\u72B6\u6001\u7C7B\u578B}              -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-mask

text-regular-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-regular
text-secondary-{\u72B6\u6001\u7C7B\u578B}       -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-secondary
text-light-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-light
text-lightest-{\u72B6\u6001\u7C7B\u578B}        -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-lightest
text-title-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-title
text-link-{\u72B6\u6001\u7C7B\u578B}            -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-link
text-hover-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-hover
text-inverse-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-inverse
text-inherit-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-inherit
text-current-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-current

border-transparent-{\u72B6\u6001\u7C7B\u578B    -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-transparent
border-regular-{\u72B6\u6001\u7C7B\u578B}       -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-regular
border-light-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-light
border-dark-{\u72B6\u6001\u7C7B\u578B}          -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-dark

bg-primary-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-primary
bg-warning-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-warning
bg-success-{\u72B6\u6001\u7C7B\u578B}           -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-success
bg-danger-{\u72B6\u6001\u7C7B\u578B}            -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-danger
bg-info-{\u72B6\u6001\u7C7B\u578B}              -&gt;        {\u72B6\u6001\u7C7B\u578B}:bg-info

text-primary-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-primary
text-warning-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-warning
text-success-{\u72B6\u6001\u7C7B\u578B}         -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-success
text-danger-{\u72B6\u6001\u7C7B\u578B}          -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-danger
text-info-{\u72B6\u6001\u7C7B\u578B}            -&gt;        {\u72B6\u6001\u7C7B\u578B}:text-info

border-primary-{\u72B6\u6001\u7C7B\u578B}       -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-primary
border-warning-{\u72B6\u6001\u7C7B\u578B}       -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-warning
border-success-{\u72B6\u6001\u7C7B\u578B}       -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-success
border-danger-{\u72B6\u6001\u7C7B\u578B}        -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-danger
border-info-{\u72B6\u6001\u7C7B\u578B}          -&gt;        {\u72B6\u6001\u7C7B\u578B}:border-info

</code></pre><h2 id="chi-cun-bian-liang-xiu-gai"><a class="header-anchor" href="#chi-cun-bian-liang-xiu-gai"></a> \u5C3A\u5BF8\u53D8\u91CF\u4FEE\u6539</h2><p>\u5C3A\u5BF8\u53D8\u91CF\u4E0D\u518D\u4F7F\u7528<code>scss\u53D8\u91CF</code>\u65B9\u5F0F\uFF0C\u53D6\u800C\u4EE3\u4E4B\u7684\u662F <code>css var()</code>\u53D8\u91CF</p>`,3),au=n(" $md "),tu=n(" var(--md) ");function eu(b,i,B,h,F,m){const a=p("hl-tag"),d=p("hl-demo0"),g=p("demo-block"),l=p("TwoArrowRight"),r=p("hl-icon"),o=p("hl-group"),c=p("right-nav");return x(),v(D,null,[t("section",null,[w,z,q,u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger m-b-sm",style:{"--border-left-width":"4px"}},{default:s(()=>[k]),_:1}),$,u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger m-b-sm",style:{"--border-left-width":"4px"}},{default:s(()=>[V]),_:1}),N,u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger m-b-sm",style:{"--border-left-width":"4px"}},{default:s(()=>[S]),_:1}),I,u(g,{"source-code":`<hl-button
  style="
    --button-radius: 8px;
    --button-padding-x: 20px;
    --button-padding-y: 4px;
    --button-height: 50px;
    --button-font-weight: 600;
    --button-font-size: 16px;
    --button-border-width: 2px;
    --button-font-color: #8a9ab1;
    --button-font-color-hover: var(--text-regular);
    --button-font-color-active: var(--text-title);
    --button-bg-color: transparent;
    --button-bg-color-hover: rgba(255,255,255, 0.1);
    --button-bg-color-active: rgba(255,255,255, 0.15);
    --button-border-color: #364863;
    --button-border-color-hover: #77869b;
    --button-border-color-active: var(--success);
  "
>
  Button
</hl-button>

<hl-input
  v-model="input"
  placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
  class="m-l-md"
  style="
    --input-radius: 8px;
    --input-height: 50px;
    --input-padding-x: 20px;
    --input-padding-y: 4px;
    --input-border-width: 2px;
    --input-font-size: 16px;
    --input-font-color: #8a9ab1;
    --input-font-color-hover: var(--text-regular);
    --input-font-color-focus: var(--success);
    --input-border-color: #364863;
    --input-border-color-hover: #77869b;
    --input-border-color-focus: var(--success);
  "
/>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      return {
        input: ref('Input'),
      }
    },
  })
<\/script>
`},{source:s(()=>[u(d)]),highlight:s(()=>[T]),_:1}),H,P,u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger m-b-sm",style:{"--border-left-width":"4px"}},{default:s(()=>[R]),_:1}),L,u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger m-t-xl m-b-sm",style:{"--border-left-width":"4px"}},{default:s(()=>[M]),_:1}),G,u(o,{gap:"var(--md)",align:"items-middle",class:"m-b-sm"},{default:s(()=>[u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:s(()=>[Q]),_:1}),u(r,{size:"xs"},{default:s(()=>[u(l)]),_:1}),u(a,{type:"success",effect:"light",class:"border-none border-left border-success",style:{"--border-left-width":"4px"}},{default:s(()=>[U]),_:1})]),_:1}),W,u(o,{gap:"var(--md)",align:"items-middle",class:"m-b-sm"},{default:s(()=>[u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:s(()=>[X]),_:1}),u(r,{size:"xs"},{default:s(()=>[u(l)]),_:1}),u(a,{type:"success",effect:"light",class:"border-none border-left border-success",style:{"--border-left-width":"4px"}},{default:s(()=>[J]),_:1})]),_:1}),K,u(o,{gap:"var(--md)",align:"items-middle",class:"m-b-sm"},{default:s(()=>[u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:s(()=>[O]),_:1}),u(r,{size:"xs"},{default:s(()=>[u(l)]),_:1}),u(a,{type:"success",effect:"light",class:"border-none border-left border-success",style:{"--border-left-width":"4px"}},{default:s(()=>[Y]),_:1})]),_:1}),Z,u(o,{gap:"var(--md)",align:"items-middle",class:"m-b-sm"},{default:s(()=>[u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:s(()=>[uu]),_:1}),u(r,{size:"xs"},{default:s(()=>[u(l)]),_:1}),u(a,{type:"success",effect:"light",class:"border-none border-left border-success",style:{"--border-left-width":"4px"}},{default:s(()=>[su]),_:1})]),_:1}),nu,u(o,{gap:"var(--md)",align:"items-middle",class:"m-b-sm"},{default:s(()=>[u(a,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:s(()=>[au]),_:1}),u(r,{size:"xs"},{default:s(()=>[u(l)]),_:1}),u(a,{type:"success",effect:"light",class:"border-none border-left border-success",style:{"--border-left-width":"4px"}},{default:s(()=>[tu]),_:1})]),_:1})]),u(c)],64)}var iu=y(A,[["render",eu]]);export{iu as default};
