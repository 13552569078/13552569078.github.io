import{a0 as a,L as c,W as r,Q as s,a4 as n,a1 as o,ab as h,aX as p,a5 as l}from"./vue.42779483.js";import{_ as i}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.58a96039.js";const u={},j=p(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u9E3F\u9E3E\u6269\u5C55\u7EC4\u4EF6UI\u3002</p><pre><code class="hljs">\u6CE8\u610F\uFF1A\u9E3F\u9E3E\u6269\u5C55\u7EC4\u4EF6\u5E93\u4F9D\u8D56\u4E8E\u9E3F\u9E3E\u57FA\u7840\u7EC4\u4EF6\u5E93\uFF0C\u60A8\u9700\u8981\u540C\u65F6\u53C2\u8003\u9E3F\u9E3E\u57FA\u7840\u7EC4\u4EF6\u5E93\u7684\u5F15\u5165\u65B9\u6CD5\uFF0C\u5148\u5F15\u5165hongluan-ui
</code></pre><h2 id="yin-ru-hongluan-business-ui"><a class="header-anchor" href="#yin-ru-hongluan-business-ui"></a> \u5F15\u5165 Hongluan Business UI</h2><p>\u4F60\u53EF\u4EE5\u5F15\u5165\u6574\u4E2A Hongluan Business UI\uFF0C\u6216\u662F\u6839\u636E\u9700\u8981\u4EC5\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\u3002\u6211\u4EEC\u5148\u4ECB\u7ECD\u5982\u4F55\u5F15\u5165\u5B8C\u6574\u7684 Hongluan Business UI Library\u3002</p><h2 id="wan-zheng-yin-ru"><a class="header-anchor" href="#wan-zheng-yin-ru"></a> \u5B8C\u6574\u5F15\u5165</h2><p>\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> HongluanBusinessUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-business-ui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-business-ui/dist/index.css&#39;</span>;
<span class="hljs-comment">// import &#39;hongluan-business-ui/dist/index-dark.css&#39;;</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp(App)
app.use(HongluanBusinessUI)
app.mount(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre><p>\u4EE5\u4E0A\u4EE3\u7801\u4FBF\u5B8C\u6210\u4E86 Hongluan Business UI \u7684\u5F15\u5165\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\u3002</p><h2 id="volar-support"><a class="header-anchor" href="#volar-support"></a> Volar support</h2><p>\u5982\u679C\u60A8\u4F7F\u7528 Volar\uFF0C\u8BF7\u5728 <code>tsconfig.json</code> \u4E2D\u901A\u8FC7 <code>compilerOptions.type</code> \u6307\u5B9A\u5168\u5C40\u7EC4\u4EF6\u7C7B\u578B\u3002</p><pre><code class="hljs language-json"><span class="hljs-comment">// tsconfig.json</span>
{
  <span class="hljs-attr">&quot;compilerOptions&quot;</span>: {
    <span class="hljs-comment">// ...</span>
    <span class="hljs-attr">&quot;types&quot;</span>: [<span class="hljs-string">&quot;hongluan-business-ui/global&quot;</span>]
  }
}
</code></pre><h2 id="an-xu-yin-ru-zu-jian"><a class="header-anchor" href="#an-xu-yin-ru-zu-jian"></a> \u6309\u9700\u5F15\u5165\u7EC4\u4EF6</h2><p><code>HongluanBusinessUI</code>\u7684 JS \u4EE3\u7801\u9ED8\u8BA4\u652F\u6301\u57FA\u4E8E ES modules \u7684 <a href="https://webpack.js.org/guides/tree-shaking/">\u6447\u6811 tree shaking</a>\u3002</p><blockquote><p>App.vue</p></blockquote><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">hb-avatar-list</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;avatarList&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">hb-avatar-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { HbAvatarList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-business-ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;app&#39;</span>
  <span class="hljs-attr">components</span>: {
    HbAvatarList,
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> avatarList = ref([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a&#39;</span>,
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a&#39;</span>,
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5934\u50CF\u4E8C&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4&#39;</span>,
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5934\u50CF\u4E09&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1&#39;</span>,
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5934\u50CF\u56DB&#39;</span>
      },
    ])
    <span class="hljs-keyword">return</span> {
      avatarList
    }
  }
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h2 id="yang-shi-de-yin-ru"><a class="header-anchor" href="#yang-shi-de-yin-ru"></a> \u6837\u5F0F\u7684\u5F15\u5165</h2><p>\u6211\u4EEC<strong>\u5F3A\u70C8\u5EFA\u8BAE\u76F4\u63A5\u5F15\u5165\u5168\u90E8\u7684\u6837\u5F0F\u6587\u4EF6</strong>\uFF0C\u867D\u7136\u8FD9\u770B\u8D77\u6765\u4F1A\u589E\u5927\u6574\u4E2A\u5E94\u7528\u7684\u4F53\u79EF\uFF0C\u4F46\u8FD9\u6837\u505A\u53EF\u4EE5\u907F\u514D\u5F15\u5165\u989D\u5916\u7684\u6253\u5305\u5DE5\u5177\u63D2\u4EF6\uFF08\u51CF\u5C11\u8D1F\u62C5\uFF09\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7 <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">CDN</a> \u7684\u65B9\u5F0F\u6765\u52A0\u8F7D\u6837\u5F0F\u6587\u4EF6\uFF0C\u4ECE\u800C\u4F7F\u5F97\u4F60\u7684\u5E94\u7528\u52A0\u8F7D\u66F4\u5FEB\u3002</p><p>\u901A\u8FC7 JS \u7684\u65B9\u5F0F\u5F15\u5165</p><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-business-ui/dist/index.css&#39;</span>
<span class="hljs-comment">// import &#39;hongluan-business-ui/dist/index-dark.css&#39;</span>
</code></pre><p>\u901A\u8FC7 HTML \u7684\u5934\u6587\u4EF6\u5F15\u5165</p><pre><code class="hljs language-html"><span class="hljs-comment">&lt;!-- index.html --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;//unpkg.com/hongluan-business-ui/dist/index.css&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
</code></pre>`,22),d={id:"zi-dong-dao-ru-tui-jian"},g=s("a",{class:"header-anchor",href:"#zi-dong-dao-ru-tui-jian"},null,-1),m=l(" \u81EA\u52A8\u5BFC\u5165 "),f=l("\u63A8\u8350"),b=p(`<p>\u9996\u5148\u9700\u8981\u5B89\u88C5 <code>unplugin-vue-components</code>\u3002</p><pre><code class="hljs language-shell">npm install unplugin-vue-components
</code></pre><p>\u7136\u540E\u5C06\u4EE5\u4E0B\u4EE3\u7801\u6DFB\u52A0\u5230 <code>Vite</code> \u6216 <code>Webpack</code> \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u3002</p><h4 id="vite"><a class="header-anchor" href="#vite"></a> Vite</h4><pre><code class="hljs language-ts"><span class="hljs-comment">// vite.config.ts</span>
<span class="hljs-keyword">import</span> Components <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">plugins</span>: [
    Components({
      <span class="hljs-attr">resolvers</span>: [
        <span class="hljs-comment">// example of importing Vant</span>
        <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          <span class="hljs-comment">// where \`name\` is always CapitalCase</span>
          <span class="hljs-keyword">if</span> (name.startsWith(<span class="hljs-string">&#39;Hb&#39;</span>))
            <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-business-ui&#39;</span> }
        }
      ]
    }),
  ],
})

</code></pre><h4 id="webpack"><a class="header-anchor" href="#webpack"></a> Webpack</h4><pre><code class="hljs language-js"><span class="hljs-comment">// webpack.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-comment">/* ... */</span>
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)({
      <span class="hljs-attr">resolvers</span>: [
        <span class="hljs-comment">// example of importing Vant</span>
        <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          <span class="hljs-comment">// where \`name\` is always CapitalCase</span>
          <span class="hljs-keyword">if</span> (name.startsWith(<span class="hljs-string">&#39;Hb&#39;</span>))
            <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-business-ui&#39;</span> }
        }
      ]
    })
  ]
}
</code></pre><h4 id="vue-cli"><a class="header-anchor" href="#vue-cli"></a> Vue CLI</h4><pre><code class="hljs language-js"><span class="hljs-comment">// vue.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">configureWebpack</span>: {
    <span class="hljs-attr">plugins</span>: [
      <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)({
        <span class="hljs-attr">resolvers</span>: [
          <span class="hljs-comment">// example of importing Vant</span>
          <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
            <span class="hljs-comment">// where \`name\` is always CapitalCase</span>
            <span class="hljs-keyword">if</span> (name.startsWith(<span class="hljs-string">&#39;Hb&#39;</span>))
              <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-business-ui&#39;</span> }
          }
        ]
      }),
    ],
  },
}
</code></pre><p>For more bundlers (<a href="https://rollupjs.org/">Rollup</a>, <a href="https://cli.vuejs.org/">Vue CLI</a>) and configs please reference <a href="https://github.com/antfu/unplugin-vue-components#readme">unplugin-vue-components</a>.</p><h2 id="kai-shi-shi-yong"><a class="header-anchor" href="#kai-shi-shi-yong"></a> \u5F00\u59CB\u4F7F\u7528</h2><p>\u81F3\u6B64\uFF0C\u4E00\u4E2A\u57FA\u4E8E Vue3 \u548C Hongluan Business UI \u7684\u5F00\u53D1\u73AF\u5883\u5DF2\u7ECF\u642D\u5EFA\u5B8C\u6BD5\uFF0C\u73B0\u5728\u5C31\u53EF\u4EE5\u7F16\u5199\u4EE3\u7801\u4E86\u3002</p><p>\u5404\u4E2A\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u9605\u5B83\u4EEC\u5404\u81EA\u7684\u8BF4\u660E\u6587\u6863\u3002</p>`,13);function k(y,w){const e=a("hl-tag"),t=a("right-nav");return c(),r(h,null,[s("section",null,[j,s("h3",d,[g,m,n(e,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"sm"},{default:o(()=>[f]),_:1})]),b]),n(t)],64)}var H=i(u,[["render",k]]);export{H as default};
