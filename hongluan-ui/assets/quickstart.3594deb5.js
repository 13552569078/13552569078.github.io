import{H as t,L as o,W as r,Q as s,X as n,P as p,a1 as h,S as a,o as e}from"./vue.85e091e9.js";import{_ as i}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const u={},j=s("h1",null,"\u5FEB\u901F\u4E0A\u624B",-1),g=s("p",null,"\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Hongluan UI\u3002",-1),d=s("h2",{id:"yin-ru-hongluan-ui"},[s("a",{class:"header-anchor",href:"#yin-ru-hongluan-ui"}),a(" \u5F15\u5165 Hongluan UI")],-1),m=s("p",null,"\u4F60\u53EF\u4EE5\u5F15\u5165\u6574\u4E2A Hongluan UI\uFF0C\u6216\u662F\u6839\u636E\u9700\u8981\u4EC5\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5148\u4ECB\u7ECD\u5982\u4F55\u5F15\u5165\u5B8C\u6574\u7684 Hongluan UI Library\u3002",-1),f=s("h2",{id:"wan-zheng-yin-ru"},[s("a",{class:"header-anchor",href:"#wan-zheng-yin-ru"}),a(" \u5B8C\u6574\u5F15\u5165")],-1),y=s("p",null,"\u5728 main.ts \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A",-1),_=a("main.ts"),w=e(`<pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">import</span> <span class="hljs-title class_">HongluanUI</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>; <span class="hljs-comment">//\u5F15\u5165Hongluan</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-ui/dist/index.css&#39;</span>;  <span class="hljs-comment">//\u5F15\u5165\u6837\u5F0F\u6587\u4EF6</span>

<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">HongluanUI</span>)
app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre><p>\u4EE5\u4E0A\u4EE3\u7801\u4FBF\u5B8C\u6210\u4E86 Hongluan UI \u7684\u5F15\u5165\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\u3002</p><h2 id="volar-support"><a class="header-anchor" href="#volar-support"></a> Volar support</h2><p>\u5982\u679C\u60A8\u4F7F\u7528 Volar\uFF0C\u8BF7\u5728 <code>tsconfig.json</code> \u4E2D\u901A\u8FC7 <code>compilerOptions.type</code> \u6307\u5B9A\u5168\u5C40\u7EC4\u4EF6\u7C7B\u578B\u3002</p>`,4),b=a("tsconfig.json"),k=e(`<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;compilerOptions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-comment">// ...</span>
    <span class="hljs-attr">&quot;types&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;hongluan-ui/global&quot;</span><span class="hljs-punctuation">]</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre><h2 id="an-xu-yin-ru-zu-jian"><a class="header-anchor" href="#an-xu-yin-ru-zu-jian"></a> \u6309\u9700\u5F15\u5165\u7EC4\u4EF6</h2><p>HongluanUI \u7684 JavaScript \u4EE3\u7801\u9ED8\u8BA4\u652F\u6301\u57FA\u4E8E ES modules \u7684 <a href="https://webpack.js.org/guides/tree-shaking/">\u6447\u6811 tree shaking</a>\u3002</p>`,3),v=a("app.vue"),x=e(`<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">hl-button</span>&gt;</span>
    Hello hl-button
  <span class="hljs-tag">&lt;/<span class="hljs-name">hl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineComponent</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;app&#39;</span>
  <span class="hljs-attr">components</span>: {
    <span class="hljs-title class_">HlButton</span>,
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h2 id="yang-shi-de-yin-ru"><a class="header-anchor" href="#yang-shi-de-yin-ru"></a> \u6837\u5F0F\u7684\u5F15\u5165</h2><p>\u6211\u4EEC <strong>\u5F3A\u70C8\u5EFA\u8BAE\u76F4\u63A5\u5F15\u5165\u5168\u90E8\u7684\u6837\u5F0F\u6587\u4EF6</strong>\uFF0C\u867D\u7136\u8FD9\u770B\u8D77\u6765\u4F1A\u589E\u5927\u6574\u4E2A\u5E94\u7528\u7684\u4F53\u79EF\uFF0C\u4F46\u8FD9\u6837\u505A\u53EF\u4EE5\u907F\u514D\u5F15\u5165\u989D\u5916\u7684\u6253\u5305\u5DE5\u5177\u63D2\u4EF6\uFF08\u51CF\u5C11\u8D1F\u62C5\uFF09\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7 <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">CDN</a> \u7684\u65B9\u5F0F\u6765\u52A0\u8F7D\u6837\u5F0F\u6587\u4EF6\uFF0C\u4ECE\u800C\u4F7F\u5F97\u4F60\u7684\u5E94\u7528\u52A0\u8F7D\u66F4\u5FEB\u3002</p><h4 id="tong-guo-js-de-fang-shi-yin-ru"><a class="header-anchor" href="#tong-guo-js-de-fang-shi-yin-ru"></a> \u901A\u8FC7 JS \u7684\u65B9\u5F0F\u5F15\u5165</h4><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-ui/dist/index.css&#39;</span>
</code></pre><h4 id="tong-guo-html-de-tou-wen-jian-yin-ru"><a class="header-anchor" href="#tong-guo-html-de-tou-wen-jian-yin-ru"></a> \u901A\u8FC7 HTML \u7684\u5934\u6587\u4EF6\u5F15\u5165</h4><pre><code class="hljs language-html"><span class="hljs-comment">&lt;!-- index.html --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;//unpkg.com/hongluan-ui/dist/index.css&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
</code></pre><h3 id="zi-dong-dao-ru"><a class="header-anchor" href="#zi-dong-dao-ru"></a> \u81EA\u52A8\u5BFC\u5165</h3><p>\u9996\u5148\u9700\u8981\u5B89\u88C5 <code>unplugin-vue-components</code>\u3002</p><pre><code class="hljs language-shell"><span class="hljs-meta prompt_">$ </span><span class="language-bash">npm install unplugin-vue-components</span>
</code></pre><p>\u7136\u540E\u5C06\u4EE5\u4E0B\u4EE3\u7801\u6DFB\u52A0\u5230 <code>Vite</code> \u6216 <code>Webpack</code> \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u3002</p>`,11),H=a("vite.config.ts"),z=e(`<pre><code class="hljs language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title class_">Components</span>({
      <span class="hljs-attr">resolvers</span>: [
        <span class="hljs-comment">// example of importing Vant</span>
        <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          <span class="hljs-comment">// where \`name\` is always CapitalCase</span>
          <span class="hljs-keyword">if</span> (name.<span class="hljs-title function_">startsWith</span>(<span class="hljs-string">&#39;Hl&#39;</span>))
            <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span> }
        }
      ]
    }),
  ],
})
</code></pre>`,1),I=a("webpack.config.js"),q=e(`<pre><code class="hljs language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-comment">/* ... */</span>
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)({
      <span class="hljs-attr">resolvers</span>: [
        <span class="hljs-comment">// example of importing Vant</span>
        <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          <span class="hljs-comment">// where \`name\` is always CapitalCase</span>
          <span class="hljs-keyword">if</span> (name.<span class="hljs-title function_">startsWith</span>(<span class="hljs-string">&#39;Hl&#39;</span>))
            <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span> }
        }
      ]
    })
  ]
}
</code></pre>`,1),C=a("vue.config.js"),S=e(`<pre><code class="hljs language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">configureWebpack</span>: {
    <span class="hljs-attr">plugins</span>: [
      <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)({
        <span class="hljs-attr">resolvers</span>: [
          <span class="hljs-comment">// example of importing Vant</span>
          <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
            <span class="hljs-comment">// where \`name\` is always CapitalCase</span>
            <span class="hljs-keyword">if</span> (name.<span class="hljs-title function_">startsWith</span>(<span class="hljs-string">&#39;Hl&#39;</span>))
              <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span> }
          }
        ]
      }),
    ],
  },
}
</code></pre><h3 id="an-xu-jia-zai-yang-shi-vue-cli-js"><a class="header-anchor" href="#an-xu-jia-zai-yang-shi-vue-cli-js"></a> \u6309\u9700\u52A0\u8F7D\u6837\u5F0F\uFF1AVue CLI\uFF08JS\uFF09</h3><p>\u501F\u52A9 <a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53EA\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\uFF0C\u4EE5\u8FBE\u5230\u51CF\u5C0F\u9879\u76EE\u4F53\u79EF\u7684\u76EE\u7684\u3002</p><p>\u9996\u5148\uFF0C\u5B89\u88C5 babel-plugin-import:</p><pre><code class="hljs language-shell"><span class="hljs-meta prompt_">$ </span><span class="language-bash">npm install babel-plugin-import -D</span>
<span class="hljs-meta prompt_"># </span><span class="language-bash">\u6216\u8005</span>
<span class="hljs-meta prompt_">$ </span><span class="language-bash">yarn add babel-plugin-import -D</span>
</code></pre><p>\u7136\u540E\uFF0C\u5C06 babel.config.js \u4FEE\u6539\u4E3A\uFF1A</p><h4 id="yin-ru-.scss-yang-shi"><a class="header-anchor" href="#yin-ru-.scss-yang-shi"></a> \u5F15\u5165 <code>.scss</code> \u6837\u5F0F</h4><p>\u8BF7\u786E\u4FDD\u5DF2\u7ECF\u5B89\u88C5\u4E86 <code>sass</code> \u548C <code>sass-loader</code> \u4F9D\u8D56\u5E76\u5C06 <code>hongluan-ui/theme/scss/base.scss</code> \u6587\u4EF6\u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165</p><pre><code class="hljs language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&quot;import&quot;</span>,
      {
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span>,
        <span class="hljs-attr">customStyleName</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          name = name.<span class="hljs-title function_">slice</span>(<span class="hljs-number">3</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-string">\`hongluan-ui/theme/scss/<span class="hljs-subst">\${name}</span>.scss\`</span>;
        },
      },
    ],
  ],
};
</code></pre><h4 id="huo-zhe-yin-ru-.css-yang-shi"><a class="header-anchor" href="#huo-zhe-yin-ru-.css-yang-shi"></a> \u6216\u8005\u5F15\u5165 <code>.css</code> \u6837\u5F0F</h4><pre><code class="hljs language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&quot;import&quot;</span>,
      {
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span>,
        <span class="hljs-attr">customStyleName</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> <span class="hljs-string">\`hongluan-ui/theme/<span class="hljs-subst">\${name}</span>.css\`</span>;
        },
      },
    ],
  ],
};
</code></pre><h3 id="an-xu-jia-zai-yang-shi-vue-cli-ts"><a class="header-anchor" href="#an-xu-jia-zai-yang-shi-vue-cli-ts"></a> \u6309\u9700\u52A0\u8F7D\u6837\u5F0F\uFF1AVue CLI\uFF08TS\uFF09</h3><p>\u501F\u52A9 <a href="https://github.com/Brooooooklyn/ts-import-plugin">ts-import-plugin</a>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53EA\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\uFF0C\u4EE5\u8FBE\u5230\u51CF\u5C0F\u9879\u76EE\u4F53\u79EF\u7684\u76EE\u7684\u3002</p><p>\u5177\u4F53\u5B89\u88C5\u8FC7\u7A0B\u4EE5\u53CA\u4F7F\u7528\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF0C\u8FD9\u91CC\u4E0D\u5728\u8D58\u8FF0\uFF0C\u4E0B\u9762\u662Fvue.config.js\u4EE3\u7801\u914D\u7F6E\u793A\u4F8B:</p><pre><code class="hljs language-js"><span class="hljs-attr">chainWebpack</span>: <span class="hljs-function"><span class="hljs-params">config</span> =&gt;</span> {
  config.<span class="hljs-property">module</span>
    .<span class="hljs-title function_">rule</span>(<span class="hljs-string">&#39;ts&#39;</span>)
    .<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;ts-loader&#39;</span>)
      .<span class="hljs-title function_">loader</span>(<span class="hljs-string">&#39;ts-loader&#39;</span>)
      .<span class="hljs-title function_">tap</span>(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> {
          ...options,
          <span class="hljs-attr">getCustomTransformers</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-keyword">return</span> {
              <span class="hljs-attr">before</span>: [<span class="hljs-title function_">tsImportPluginFactory</span>({
                <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span>,
                <span class="hljs-attr">style</span>: <span class="hljs-literal">true</span>
              })]
            }
          },
        }
      })
}
</code></pre><h3 id="vite"><a class="header-anchor" href="#vite"></a> Vite</h3><p>\u9996\u5148\uFF0C\u5B89\u88C5 <a href="https://github.com/anncwb/vite-plugin-style-import">vite-plugin-style-import</a>:</p><pre><code class="hljs language-shell"><span class="hljs-meta prompt_">$ </span><span class="language-bash">npm install vite-plugin-style-import -D</span>
<span class="hljs-meta prompt_">#</span><span class="language-bash">\u6216\u8005</span>
<span class="hljs-meta prompt_">$ </span><span class="language-bash">yarn add vite-plugin-style-import -D</span>
</code></pre><p>\u7136\u540E\uFF0C\u5C06 vite.config.js \u4FEE\u6539\u4E3A\uFF1A</p><h4 id="yin-ru-.scss-yang-shi-2"><a class="header-anchor" href="#yin-ru-.scss-yang-shi-2"></a> \u5F15\u5165 <code>.scss</code> \u6837\u5F0F</h4><p>\u8BF7\u786E\u4FDD\u5DF2\u7ECF\u5B89\u88C5\u4E86 <code>sass</code> \u4F9D\u8D56\u5E76\u5C06 <code>hongluan-ui/theme/scss/base.scss</code> \u6587\u4EF6\u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165</p><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> styleImport <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite-plugin-style-import&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title function_">vue</span>(),
    <span class="hljs-title function_">styleImport</span>({
      <span class="hljs-attr">libs</span>: [{
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span>,
        <span class="hljs-attr">esModule</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">ensureStyleFile</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">resolveStyle</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          name = name.<span class="hljs-title function_">slice</span>(<span class="hljs-number">3</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-string">\`hongluan-ui/theme/scss/<span class="hljs-subst">\${name}</span>.scss\`</span>;
        },
        <span class="hljs-attr">resolveComponent</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> <span class="hljs-string">\`hongluan-ui/lib/<span class="hljs-subst">\${name}</span>\`</span>;
        },
      }]
    })
  ]
})
</code></pre><h4 id="huo-zhe-yin-ru-.css-yang-shi-2"><a class="header-anchor" href="#huo-zhe-yin-ru-.css-yang-shi-2"></a> \u6216\u8005\u5F15\u5165 <code>.css</code> \u6837\u5F0F</h4><p>\u8BF7\u786E\u4FDD <code>hongluan-ui/theme/base.css</code> \u6587\u4EF6\u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165</p><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> styleImport <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite-plugin-style-import&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title function_">vue</span>(),
    <span class="hljs-title function_">styleImport</span>({
      <span class="hljs-attr">libs</span>: [
        {
          <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;hongluan-ui&#39;</span>,
          <span class="hljs-attr">esModule</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">ensureStyleFile</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">resolveStyle</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-string">\`hongluan-ui/theme/<span class="hljs-subst">\${name}</span>.css\`</span>;
          },
          <span class="hljs-attr">resolveComponent</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-string">\`hongluan-ui/lib/<span class="hljs-subst">\${name}</span>\`</span>;
          },
        }
      ]
    })
  ]
})
</code></pre><p>\u63A5\u4E0B\u6765\uFF0C\u5982\u679C\u4F60\u53EA\u5E0C\u671B\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\uFF0C\u6BD4\u5982 Button \u548C Select\uFF0C\u90A3\u4E48\u9700\u8981\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlButton</span>, <span class="hljs-title class_">HlSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;
<span class="hljs-comment">// \u5982\u679C\u8981\u4F7F\u7528.scss\u6837\u5F0F\u6587\u4EF6\uFF0C\u5219\u9700\u8981\u5F15\u5165base.scss\u6587\u4EF6</span>
<span class="hljs-comment">// import &#39;hongluan-ui/theme/scss/base.scss&#39;</span>

<span class="hljs-comment">// \u5982\u679C\u8981\u4F7F\u7528.css\u6837\u5F0F\u6587\u4EF6\uFF0C\u5219\u9700\u8981\u5F15\u5165base.css\u6587\u4EF6</span>
<span class="hljs-comment">// import &#39;hongluan-ui/theme/base.css&#39;</span>

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">component</span>(<span class="hljs-title class_">HlButton</span>.<span class="hljs-property">name</span>, <span class="hljs-title class_">HlButton</span>); <span class="hljs-comment">// \u6CE8\u610F\uFF1A\u6B64\u79CD\u5F15\u5165\u65B9\u5F0F\u4E0B\uFF0Cname\u4E0D\u5E26\u6709\u524D\u7F00hl</span>
app.<span class="hljs-title function_">component</span>(<span class="hljs-title class_">HlSelect</span>.<span class="hljs-property">name</span>, <span class="hljs-title class_">HlSelect</span>); <span class="hljs-comment">// \u6CE8\u610F\uFF1A\u6B64\u79CD\u5F15\u5165\u65B9\u5F0F\u4E0B\uFF0Cname\u4E0D\u5E26\u6709\u524D\u7F00hl</span>

<span class="hljs-comment">/* or
 * app.use(HlButton) // \u6CE8\u610F\uFF1A\u6B64\u79CD\u5F15\u5165\u65B9\u5F0F\u4E0B\uFF0C\u5C06\u5E26\u6709\u524D\u7F00hl
 * app.use(HlSelect)
 */</span>

app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre><h2 id="quan-ju-pei-zhi"><a class="header-anchor" href="#quan-ju-pei-zhi"></a> \u5168\u5C40\u914D\u7F6E</h2><p>\u5728\u5F15\u5165 Hongluan UI \u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5168\u5C40\u914D\u7F6E\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u76EE\u524D\u652F\u6301 <code>size</code>\u3001<code>zIndex</code> \u4E0E <code>systemIcons</code> \u5B57\u6BB5\u3002<code>size(xs/sm/md/lg)</code> \u7528\u4E8E\u6539\u53D8\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C<code>zIndex</code> \u8BBE\u7F6E\u5F39\u6846\u7684\u521D\u59CB z-index\uFF08\u9ED8\u8BA4\u503C\uFF1A2000\uFF09\uFF0C<code>systemIcons</code> \u7528\u4E8E\u5B9A\u5236\u7CFB\u7EDF\u9ED8\u8BA4\u56FE\u6807\uFF0C\u5177\u4F53\u65B9\u5F0F\u8BF7\u53C2\u8003Icon\u6587\u6863\u3002\u6309\u9700\u5F15\u5165 Hongluan UI \u7684\u65B9\u5F0F\uFF0C\u5177\u4F53\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><h4 id="wan-zheng-yin-ru-hongluan-ui"><a class="header-anchor" href="#wan-zheng-yin-ru-hongluan-ui"></a> \u5B8C\u6574\u5F15\u5165 Hongluan UI\uFF1A</h4><pre><code class="hljs language-js"><span class="hljs-keyword">import</span> { createApp, h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">HongluanUI</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">HongluanUI</span>, {
  <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;sm&#39;</span>,
  <span class="hljs-attr">zIndex</span>: <span class="hljs-number">3000</span>,
  <span class="hljs-attr">systemIcons</span>: {
    <span class="hljs-title class_">SystemLoading</span>: <span class="hljs-title function_">h</span>(<span class="hljs-string">&#39;span&#39;</span>, { <span class="hljs-attr">innerHTML</span>: <span class="hljs-string">&#39;x&#39;</span> })
  }
});
</code></pre><h4 id="an-xu-yin-ru-hongluan-ui"><a class="header-anchor" href="#an-xu-yin-ru-hongluan-ui"></a> \u6309\u9700\u5F15\u5165 Hongluan UI\uFF1A</h4><pre><code class="hljs language-ts">&lt;template&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">hl-config-provider</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span> <span class="hljs-attr">:zIndex</span>=<span class="hljs-string">&quot;zIndex&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">app</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">hl-config-provider</span>&gt;</span></span>
&lt;/template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineComponent</span>({
  <span class="hljs-attr">components</span>: {
    <span class="hljs-title class_">HlConfigProvider</span>,
  },
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">zIndex</span>: <span class="hljs-number">3000</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;sm&#39;</span>,
    }
  },
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>

</code></pre><p>\u6309\u7167\u4EE5\u4E0A\u8BBE\u7F6E\uFF0C\u9879\u76EE\u4E2D\u6240\u6709\u62E5\u6709 <code>size</code> \u5C5E\u6027\u7684\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\u5747\u4E3A &#39;sm&#39;\uFF0C\u5F39\u6846\u7684\u521D\u59CB z-index \u4E3A 3000\u3002</p><h2 id="volar-support-2"><a class="header-anchor" href="#volar-support-2"></a> Volar support</h2><p>\u5982\u5B9E\u4F7F\u7528Volar\uFF0C \u8BF7\u628A <code>compilerOptions.types</code> \u6DFB\u52A0\u5230 <code>tsconfig.json</code>\u3002</p><pre><code class="hljs language-json"><span class="hljs-comment">// tsconfig.json</span>
<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;compilerOptions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-comment">// ...</span>
    <span class="hljs-attr">&quot;types&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;hongluan-ui/global&quot;</span><span class="hljs-punctuation">]</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre><h2 id="kai-shi-shi-yong"><a class="header-anchor" href="#kai-shi-shi-yong"></a> \u5F00\u59CB\u4F7F\u7528</h2><p>\u81F3\u6B64\uFF0C\u4E00\u4E2A\u57FA\u4E8E Vue3 \u548C Hongluan UI \u7684\u5F00\u53D1\u73AF\u5883\u5DF2\u7ECF\u642D\u5EFA\u5B8C\u6BD5\uFF0C\u73B0\u5728\u5C31\u53EF\u4EE5\u7F16\u5199\u4EE3\u7801\u4E86\u3002</p><p>\u5404\u4E2A\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u9605\u5B83\u4EEC\u5404\u81EA\u7684\u8BF4\u660E\u6587\u6863\u3002</p>`,40);function A(U,N){const l=t("hl-tag"),c=t("right-nav");return o(),r(h,null,[s("section",null,[j,g,d,m,f,y,s("p",null,[n(l,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:p(()=>[_]),_:1})]),w,s("p",null,[n(l,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:p(()=>[b]),_:1})]),k,s("p",null,[n(l,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:p(()=>[v]),_:1})]),x,s("p",null,[n(l,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:p(()=>[H]),_:1})]),z,s("p",null,[n(l,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:p(()=>[I]),_:1})]),q,s("p",null,[n(l,{type:"danger",effect:"light",class:"border-none border-left border-danger",style:{"--border-left-width":"4px"}},{default:p(()=>[C]),_:1})]),S]),n(c)],64)}var P=i(u,[["render",A]]);export{P as default};
