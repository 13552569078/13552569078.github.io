import{a0 as n,L as a,W as l,a4 as e,ab as p,aX as o}from"./vue.42779483.js";import{_ as c}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.58a96039.js";const t={},h=o(`<section><h1>\u81EA\u5B9A\u4E49\u4E3B\u9898</h1><p>Hongluan Business UI \u4F7F\u7528 Hongluan UI \u7684\u6837\u5F0F\u53D8\u91CF\u914D\u7F6E\uFF0C\u5F53\u66F4\u6539 Hongluan UI \u7684\u914D\u7F6E\u65F6\uFF0CHongluan Business UI \u4E3B\u9898\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002</p><h2 id="zai-xiang-mu-zhong-gai-bian-scss-bian-liang"><a class="header-anchor" href="#zai-xiang-mu-zhong-gai-bian-scss-bian-liang"></a> \u5728\u9879\u76EE\u4E2D\u6539\u53D8 SCSS \u53D8\u91CF</h2><pre><code class="hljs language-scss"><span class="hljs-comment">// \u6539\u53D8\u4E3B\u8981\u9875\u9762\u989C\u8272\u53D8\u91CF</span>
<span class="hljs-variable">$pageFontColor</span>: teal;
<span class="hljs-comment">// \u8FD9\u91CC\u5FC5\u987B\u5148\u5F15\u5165 Hongluan UI \u7684index.scss\u6587\u4EF6</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/index&#39;</span>;
<span class="hljs-comment">// \u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199</span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/config&#39;;</span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/components&#39;;</span>

<span class="hljs-comment">// \u7136\u540E\u5728\u5F15\u5165 Hongluan Business UI \u7684components.scss\u6587\u4EF6</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-business-ui/theme/scss/components&#39;</span>;
</code></pre><p>\u4E4B\u540E\uFF0C\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u76F4\u63A5\u5F15\u5165\u4EE5\u4E0A\u6837\u5F0F\u6587\u4EF6\u5373\u53EF\uFF08\u65E0\u9700\u5F15\u5165 Hongluan UI \u548C Hongluan Business UI \u7F16\u8BD1\u597D\u7684 CSS \u6587\u4EF6\uFF09\uFF1A</p><pre><code class="hljs language-JS"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> HongluanUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
<span class="hljs-keyword">import</span> HongluanBusinessUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-business-ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./theme-variables.scss&#39;</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp(App)
app.use(HongluanUI)
app.use(HongluanBusinessUI)
</code></pre><h2 id="an-se-zhu-ti"><a class="header-anchor" href="#an-se-zhu-ti"></a> \u6697\u8272\u4E3B\u9898</h2><p>\u9E3F\u9E3E\u9ED8\u8BA4\u63D0\u4F9B\u4E00\u5957\u6697\u8272\u4E3B\u9898</p><pre><code class="hljs language-scss"><span class="hljs-comment">// \u6539\u53D8\u4E3B\u8981\u9875\u9762\u989C\u8272\u53D8\u91CF</span>
<span class="hljs-variable">$pageFontColor</span>: teal;
<span class="hljs-comment">// \u8FD9\u91CC\u5FC5\u987B\u5148\u5F15\u5165 Hongluan UI \u7684config-dark.scss\u4E0Ecomponents.scss\u6587\u4EF6</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/config-dark&#39;</span>;
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/components&#39;</span>;
<span class="hljs-comment">// \u7136\u540E\u5728\u5F15\u5165 Hongluan Business UI \u7684components.scss\u6587\u4EF6</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-business-ui/theme/scss/components&#39;</span>;
</code></pre><h2 id="ke-ding-zhi-de-bian-liang"><a class="header-anchor" href="#ke-ding-zhi-de-bian-liang"></a> \u53EF\u5B9A\u5236\u7684\u53D8\u91CF</h2><pre><code class="hljs language-scss"><span class="hljs-comment">// \u53C2\u89C1 Hongluan UI \u6587\u6863</span>
</code></pre></section>`,1);function r(i,m){const s=n("right-nav");return a(),l(p,null,[h,e(s)],64)}var k=c(t,[["render",r]]);export{k as default};
