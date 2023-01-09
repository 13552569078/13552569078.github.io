import{I as s,L as p,W as o,Q as a,X as n,P as t,a3 as r,T as l,o as h}from"./vue.8a077a47.js";import{_ as d}from"./index.3e39e2d9.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";import"./hongluan-icons.286a55ba.js";const m={},g=l("\u6697\u9ED1\u6A21\u5F0F"),i=l("2.2.0"),j=h(`<p>\u6211\u4EEC\u63D0\u53D6\u5E76\u6574\u7406\u4E86\u6240\u6709\u7684\u8BBE\u8BA1\u53D8\u91CF\uFF0C\u5E76\u901A\u8FC7 CSS Vars \u6280\u672F\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u4E3B\u9898\u3002</p><h2 id="ru-he-qi-yong"><a class="header-anchor" href="#ru-he-qi-yong"></a> \u5982\u4F55\u542F\u7528\uFF1F</h2><p>\u9996\u5148\u4F60\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5F00\u5173\u6765\u63A7\u5236 <code>\u6697\u9ED1\u6A21\u5F0F</code> \u7684 class \u7C7B\u540D\u3002</p><blockquote><p>\u5982\u679C\u60A8\u53EA\u9700\u8981\u6697\u8272\u6A21\u5F0F\uFF0C\u53EA\u9700\u5728 html \u4E0A\u6DFB\u52A0\u4E00\u4E2A\u540D\u4E3A <code>dark-mode</code> \u7684\u7C7B \u3002</p></blockquote><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dark-mode&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><blockquote><p>\u5982\u679C\u60A8\u60F3\u52A8\u6001\u5207\u6362\uFF0C\u5EFA\u8BAE\u4F7F\u7528 <a href="https://vueuse.org/core/useDark/">useDark | VueUse</a>.</p></blockquote><p>\u53EA\u9700\u8981\u5982\u4E0B\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4FEE\u6539\u4E00\u884C\u4EE3\u7801\uFF1A</p><pre><code class="hljs language-ts"><span class="hljs-comment">// main.ts</span>
<span class="hljs-comment">// \u5982\u679C\u53EA\u60F3\u5BFC\u5165css\u53D8\u91CF</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-ui/theme/dark/colors.css&#39;</span>
</code></pre><h2 id="zi-ding-yi-bian-liang"><a class="header-anchor" href="#zi-ding-yi-bian-liang"></a> \u81EA\u5B9A\u4E49\u53D8\u91CF</h2><h3 id="tong-guo-css"><a class="header-anchor" href="#tong-guo-css"></a> \u901A\u8FC7 CSS</h3><p>\u76F4\u63A5\u8986\u76D6\u5BF9\u5E94\u7684 css \u53D8\u91CF\u5373\u53EF</p><p>\u50CF\u8FD9\u6837\uFF0C\u65B0\u5EFA\u4E00\u4E2A <code>styles/dark/colors.css</code> \u6587\u4EF6:</p><pre><code class="hljs language-css"><span class="hljs-selector-tag">html</span><span class="hljs-selector-class">.dark-mode</span> {
  <span class="hljs-comment">/* \u81EA\u5B9A\u4E49\u6DF1\u8272\u80CC\u666F\u989C\u8272 */</span>
  <span class="hljs-attr">--bg-color</span>: <span class="hljs-number">#626aef</span>;
}
</code></pre><p>\u5728 Hongluan UI \u7684\u6837\u5F0F\u4E4B\u540E\u5BFC\u5165\u5B83:</p><pre><code class="hljs language-ts"><span class="hljs-comment">// main.ts</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-ui/theme/dark/colors.css&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./styles/dark/colors.css&#39;</span>
</code></pre><h3 id="tong-guo-scss"><a class="header-anchor" href="#tong-guo-scss"></a> \u901A\u8FC7 SCSS</h3><p>\u5982\u679C\u60A8\u4F7F\u7528 scss\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u5BFC\u5165 scss \u6587\u4EF6\u6765\u5B9E\u73B0\u4E00\u6837\u7684\u6548\u679C</p><pre><code class="hljs language-scss"><span class="hljs-comment">// styles/theme/index.scss</span>
<span class="hljs-comment">/* \u8986\u76D6\u4F60\u9700\u8981\u7684\u53D8\u91CF */</span>
<span class="hljs-keyword">@forward</span> <span class="hljs-string">&#39;hongluan-ui/theme/src/dark/colors.scss&#39;</span> with (
  <span class="hljs-variable">$conf_bg_color</span>: (
    <span class="hljs-string">&#39;body&#39;</span>: <span class="hljs-number">#0a0a0a</span>,
    <span class="hljs-string">&#39;content&#39;</span>: <span class="hljs-number">#626aef</span>,
    <span class="hljs-string">&#39;light&#39;</span>: <span class="hljs-number">#1d1e1f</span>,
  )
);
</code></pre><pre><code class="hljs language-ts"><span class="hljs-comment">// main.ts</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./styles/theme/index.scss&#39;</span>

<span class="hljs-comment">// \u53EA\u60F3\u5BFC\u5165scss?</span>
<span class="hljs-comment">// import &#39;hongluan-ui/theme/src/dark/colors.scss&#39;</span>
</code></pre>`,19);function u(_,k){const c=s("hl-tag"),e=s("right-nav");return p(),o(r,null,[a("section",null,[a("h1",null,[g,n(c,{type:"primary",size:"sm",class:"m-l-xs"},{default:t(()=>[i]),_:1})]),j]),n(e)],64)}var S=d(m,[["render",u]]);export{S as default};
