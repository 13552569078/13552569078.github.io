import{H as a,L as n,W as l,X as p,a1 as t,o as e}from"./vue.85e091e9.js";import{_ as c}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const r={},o=e(`<section><h1>\u670D\u52A1\u7AEF\u6E32\u67D3 (SSR)</h1><p>\u5F53\u4F7F\u7528 Hongluan UI \u5728 SSR \u573A\u666F\u4E0B\u5F00\u53D1\u65F6\uFF0C\u60A8\u9700\u8981\u5728 SSR \u671F\u95F4\u8FDB\u884C\u7279\u6B8A\u5904\u7406\uFF0C\u4EE5\u907F\u514D\u6C34\u5408\u9519\u8BEF\u3002</p><h2 id="ti-gong-yi-ge-id"><a class="header-anchor" href="#ti-gong-yi-ge-id"></a> \u63D0\u4F9B\u4E00\u4E2AID</h2><p>\u63D0\u4F9B\u7684\u503C\u7528\u4E8E\u751F\u6210 Hongluan UI \u4E2D\u7684\u552F\u4E00ID\u3002 \u56E0\u4E3A\u4E0D\u540C\u7684 IDs \u5BB9\u6613\u53D1\u751FSSR\u4E2D\u7684\u6C34\u5408\u7387\u9519\u8BEF\uFF0C \u4E3A\u4E86\u786E\u4FDD\u670D\u52A1\u5668\u7AEF\u548C\u5BA2\u6237\u7AEF\u751F\u6210\u76F8\u540C\u7684ID\uFF0C \u6211\u4EEC\u9700\u8981\u5C06 ID_injection_key \u6CE8\u5165\u5230 Vue\u3002</p><pre><code class="hljs language-ts"><span class="hljs-comment">// src/main.js (irrelevant code omitted)</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ID_INJECTION_KEY</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">provide</span>(<span class="hljs-variable constant_">ID_INJECTION_KEY</span>, {
  <span class="hljs-attr">prefix</span>: <span class="hljs-number">1024</span>,
  <span class="hljs-attr">current</span>: <span class="hljs-number">0</span>,
})
</code></pre><h2 id="provide-zindex"><a class="header-anchor" href="#provide-zindex"></a> Provide ZIndex</h2><p>When you using SSR for development, you may encounter hydration errors caused by <code>z-index</code>. In this case, we recommend injecting an initial value to avoid such errors.</p><pre><code class="hljs language-ts"><span class="hljs-comment">// src/main.js (irrelevant code omitted)</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ZINDEX_INJECTION_KEY</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">provide</span>(<span class="hljs-variable constant_">ZINDEX_INJECTION_KEY</span>, { <span class="hljs-attr">current</span>: <span class="hljs-number">0</span> })
</code></pre><h2 id="teleports"><a class="header-anchor" href="#teleports"></a> Teleports</h2><p><a href="https://vuejs.org/guide/scaling-up/ssr.html#teleports">Teleport</a> \u88AB\u5143\u7D20\u52A0\u5143\u4EF6\u4E2D\u7684\u591A\u4E2A\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528 (\u4F8B\u5982) HlDialog, HlPopover, HlDropdown, HlSelect, HlDatePicker ...)\uFF0C\u6240\u4EE5\u5728SSR\u671F\u95F4\u9700\u8981\u7279\u6B8A\u5904\u7406\u3002</p><h3 id="zai-gua-zai-shi-xuan-ran-teleport"><a class="header-anchor" href="#zai-gua-zai-shi-xuan-ran-teleport"></a> \u5728\u6302\u8F7D\u65F6\u6E32\u67D3 Teleport</h3><p>\u5728\u6302\u8F7D\u65F6\u6E32\u67D3 Teleport</p><p>\u4F8B\u5982\uFF0C\u5728Nuxt\u4E2D\u4F7F\u7528 <code>ClientOnly</code> \u8FD9\u4E2A\u7EC4\u4EF6\u3002</p><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">client-only</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">hl-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;the tooltip content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">hl-button</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">hl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">hl-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">client-only</span>&gt;</span>
</code></pre><p>\u6216</p><pre><code class="hljs language-ts">&lt;script setup&gt;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> isClient = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)

<span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
  isClient.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>
})
&lt;/script&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">hl-tooltip</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isClient&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;the tooltip content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">hl-button</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">hl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">hl-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
</code></pre><h3 id="zhu-ru-teleport-biao-ji"><a class="header-anchor" href="#zhu-ru-teleport-biao-ji"></a> \u6CE8\u5165 Teleport \u6807\u8BB0</h3><p>\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u5C06\u4F20\u9001\u6807\u8BB0\u6CE8\u5165\u5230\u4F60\u7684 HTML \u9875\u9762\u672B\u5C3E\u7684\u6B63\u786E\u4F4D\u7F6E\u3002</p><div class="doc-tip warning"><p>Teleport \u53EF\u80FD\u4F1A\u6709\u4E00\u4E9B <a href="https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+">SSR\u95EE\u9898</a>\uFF0C\u6240\u4EE5\u4F60\u5E94\u8BE5\u7279\u522B\u6CE8\u610F\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u3002</p><ol><li>\u57FA\u4E8E HlPopover \u7684 <code>teleported</code> \u7684\u5C5E\u6027\u5E94\u8BE5\u662F\u4E00\u81F4\u7684\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002</li><li>HlDialog \u7684 <code>append-to-body</code> \u5C5E\u6027\u503C\u5E94\u8BE5\u662F\u4E00\u81F4\u7684\uFF0C\u5EFA\u8BAE\u542F\u7528 <code>append-to-body</code>\u3002</li><li>HlSubMenu\u7EC4\u4EF6\u6709\u591A\u5C42\u5F39\u51FA\u7A97\u53E3\uFF0C\u5EFA\u8BAE\u542F\u7528 <code>popper-append-to-body</code></li></ol></div><p>\u60A8\u9700\u8981\u6CE8\u5165\u9760\u8FD1 <code>&lt;body&gt;</code> \u6807\u7B7E\u7684\u4F20\u9001\u6807\u8BB0\u3002</p><pre><code class="hljs language-html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Hongluan UI<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
    <span class="hljs-comment">&lt;!--preload-links--&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-comment">&lt;!--app-teleports--&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span><span class="hljs-comment">&lt;!--app-html--&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/src/entry-client.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><div class="doc-tip"><p>\u5982\u679C\u60A8\u4FEE\u6539\u4E86 <a href="./namespace.md">Namespace</a> \u6216 <code>append-to</code> \u5C5E\u6027\uFF0C\u60A8\u9700\u8981\u8C03\u6574 <code>#hl-popper-container-</code> \u503C\u3002</p></div><pre><code class="hljs language-js"><span class="hljs-comment">// src/entry-server.js (irrelevant code omitted)</span>
<span class="hljs-keyword">import</span> { renderToString } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue/server-renderer&#39;</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./main&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">render</span>(<span class="hljs-params">url, manifest</span>) {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-keyword">const</span> ctx = {}
  <span class="hljs-keyword">const</span> html = <span class="hljs-keyword">await</span> <span class="hljs-title function_">renderToString</span>(app, ctx)
  <span class="hljs-keyword">const</span> preloadLinks = <span class="hljs-title function_">renderPreloadLinks</span>(ctx.<span class="hljs-property">modules</span>, manifest)
  <span class="hljs-keyword">const</span> teleports = <span class="hljs-title function_">renderTeleports</span>(ctx.<span class="hljs-property">teleports</span>)

  <span class="hljs-keyword">return</span> [html, preloadLinks, teleports]
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">renderTeleports</span>(<span class="hljs-params">teleports</span>) {
  <span class="hljs-keyword">if</span> (!teleports) <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;&#39;</span>
  <span class="hljs-keyword">return</span> <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">entries</span>(teleports).<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">all, [key, value]</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (key.<span class="hljs-title function_">startsWith</span>(<span class="hljs-string">&#39;#hl-popper-container-&#39;</span>)) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${all}</span>&lt;div id=&quot;<span class="hljs-subst">\${key.slice(<span class="hljs-number">1</span>)}</span>&quot;&gt;<span class="hljs-subst">\${value}</span>&lt;/div&gt;\`</span>
    }
    <span class="hljs-keyword">return</span> all
  }, teleports.<span class="hljs-property">body</span> || <span class="hljs-string">&#39;&#39;</span>)
}
</code></pre><pre><code class="hljs language-js"><span class="hljs-comment">// server.js or prerender.js (irrelevant code omitted)</span>
<span class="hljs-keyword">const</span> [appHtml, preloadLinks, teleports] = <span class="hljs-keyword">await</span> <span class="hljs-title function_">render</span>(url, manifest)

<span class="hljs-keyword">const</span> html = template
  .<span class="hljs-title function_">replace</span>(<span class="hljs-string">&#39;&lt;!--preload-links--&gt;&#39;</span>, preloadLinks)
  .<span class="hljs-title function_">replace</span>(<span class="hljs-string">&#39;&lt;!--app-html--&gt;&#39;</span>, appHtml)
  .<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/(\\n|\\r\\n)\\s*&lt;!--app-teleports--&gt;/</span>, teleports)
</code></pre></section>`,1);function h(i,j){const s=a("right-nav");return n(),l(t,null,[o,p(s)],64)}var f=c(r,[["render",h]]);export{f as default};
