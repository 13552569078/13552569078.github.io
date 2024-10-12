var x=Object.defineProperty;var A=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var b=(e,o,t)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,E=(e,o)=>{for(var t in o||(o={}))v.call(o,t)&&b(e,t,o[t]);if(A)for(var t of A(o))k.call(o,t)&&b(e,t,o[t]);return e};import{H as d,L as w,W as y,Q as u,X as s,P as l,a1 as H,S as m,o as N,aR as p}from"./vue.85e091e9.js";import{_ as V}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:e,resolveComponent:o,withCtx:t,openBlock:c,createBlock:i}=p,r=e("div",{style:{width:"calc(var(--md) * 10)",height:"calc(var(--md) * 10)","--stripes-color":"#fff"},class:"display-flex items-center items-middle bg-stripes bg-primary light-1 border border-primary p-md"},[e("div",{class:"display-flex items-center items-middle w-full h-full bg-primary-light-1 text-inverse"},"border-box")],-1),a=e("div",{style:{width:"calc(var(--md) * 12)",height:"calc(var(--md) * 12)","--stripes-color":"rgba(var(--rgb-success), 0.7)"},class:"bg-stripes p-md border border-success dashed"},[e("div",{class:"display-flex items-center items-middle w-full h-full border border-success bg-success light-1 text-inverse"},"content-box")],-1);function n(B,_){const F=o("hl-group");return c(),i(F,{gap:"var(--xl)",align:"items-middle items-center",block:""},{default:t(()=>[r,a]),_:1})}return E({render:n},{})}(),"hl-demo1":function(){const{createElementVNode:e,resolveComponent:o,withCtx:t,openBlock:c,createBlock:i}=p,r=e("h1",{class:"show-height static"},"h1 Heading \u6807\u9898",-1),a=e("h2",{class:"show-height static"},"h1 Heading \u6807\u9898",-1),n=e("h3",{class:"show-height static"},"h1 Heading \u6807\u9898",-1),h=e("h4",{class:"show-height static"},"h1 Heading \u6807\u9898",-1),B=e("h5",{class:"show-height static"},"h1 Heading \u6807\u9898",-1),_=e("h6",{class:"show-height static"},"h1 Heading \u6807\u9898",-1);function F(D,C){const f=o("hl-group");return c(),i(f,{gap:"var(--md)",dir:"vertical"},{default:t(()=>[r,a,n,h,B,_]),_:1})}return E({render:F},{})}(),"hl-demo2":function(){const{createElementVNode:e,createTextVNode:o,Fragment:t,openBlock:c,createElementBlock:i}=p,r=o("\u5B9E\u7EBF "),a=e("hr",null,null,-1),n=o(" \u865A\u7EBF "),h=e("hr",{class:"dashed"},null,-1),B=o(" \u70B9\u7EBF "),_=e("hr",{class:"dotted"},null,-1);function F(D,C){return c(),i(t,null,[r,a,n,h,B,_],64)}return E({render:F},{})}(),"hl-demo3":function(){const{createElementVNode:e,openBlock:o,createElementBlock:t}=p,i=[e("p",null,"Hongluan\u7684\u7EC4\u4EF6\u6837\u5F0F\u5F0F\u7531Mixin\u751F\u6210\u7684\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6837\u5F0F\u751F\u6210\u6587\u4EF6\u3002",-1)];function r(n,h){return o(),t("blockquote",null,i)}return E({render:r},{})}(),"hl-demo4":function(){const{openBlock:e,createElementBlock:o}=p;function t(i,r){return e(),o("code",null," $conf_font_color: #FFFFFF; ")}return E({render:t},{})}(),"hl-demo5":function(){const{createElementVNode:e,createTextVNode:o,openBlock:t,createElementBlock:c}=p,n=[o("Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001"),e("mark",null,"\u9AD8\u53EF\u63A7",-1),o("\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002")];function h(_,F){return t(),c("p",null,n)}return E({render:h},{})}(),"hl-demo6":function(){const{createElementVNode:e,createTextVNode:o,createStaticVNode:t}=p,c=t('<ul><li>\u6240\u6709\u5217\u8868\u7684\u4E0A\u8FB9\u8DDD\u90FD\u5DF2\u5220\u9664</li><li>\u4ED6\u4EEC\u7684\u5E95\u8FB9\u8DDD\u6807\u51C6\u5316\u4E86</li><li>\u5D4C\u5957\u5217\u8868\u6CA1\u6709\u5E95\u8FB9\u8DDD</li><li>\u8FD9\u6837\u5B83\u4EEC\u7684\u5916\u89C2\u66F4\u5747\u5300 <ul><li>\u7279\u522B\u662F\u5F53\u540E\u9762\u8DDF\u7740\u66F4\u591A\u5217\u8868\u9879\u65F6</li><li>\u5DE6\u4FA7\u586B\u5145\u4E5F\u5DF2\u91CD\u7F6E</li></ul></li></ul><ol class="m-t-lg"><li>\u8FD9\u662F\u4E00\u4E2A\u6709\u5E8F\u5217\u8868</li><li>\u6709\u51E0\u4E2A\u5217\u8868\u9879</li><li>\u5B83\u5177\u6709\u76F8\u540C\u7684\u6574\u4F53\u5916\u89C2</li><li>\u4F5C\u4E3A\u4E4B\u524D\u7684\u65E0\u5E8F\u5217\u8868</li></ol>',2);function i(a,n){return c}return E({render:i},{})}()}},j=u("h1",null,"Reboot \u91CD\u6784",-1),q=u("p",null,"Reboot \u662F\u5355\u4E2A\u6587\u4EF6\u4E2D\u7279\u5B9A\u4E8E\u5143\u7D20\u7684 CSS \u66F4\u6539\u7684\u96C6\u5408\uFF0C\u7528\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u4F18\u96C5\u3001\u4E00\u81F4\u4E14\u7B80\u5355\u7684\u6807\u51C6\u6765\u6784\u5EFA\u3002",-1),T=u("h2",{id:"box-sizing-he-chi-cun"},[u("a",{class:"header-anchor",href:"#box-sizing-he-chi-cun"}),m(" Box-sizing \u76D2\u5C3A\u5BF8")],-1),M=u("p",null,[m("\u5168\u90E8\u5143\u7D20\uFF08\u5305\u542B ::before \u548C ::after\uFF09\u90FD\u8BBE\u7F6E\u4E3A "),u("code",null,"border-box"),m(" \u5C5E\u6027\uFF0C\u8FD9\u786E\u4FDD\u4E86\u5143\u7D20\u58F0\u660E\u7684\u5BBD\u5EA6\u6C38\u8FDC\u4E0D\u4F1A\u56E0\u4E3A\u586B\u5145\u6216\u8005\u8FB9\u6846\u800C\u8D85\u51FA\u4F60\u8BBE\u5B9A\u7684\u5C3A\u5BF8\u8303\u56F4\u3002")],-1),z=u("pre",null,[u("code",{class:"html"},`<hl-group gap="var(--xl)" align="items-middle items-center" block>
  <div style="width: calc(var(--md) * 10); height: calc(var(--md) * 10); --stripes-color: #fff;" class="display-flex items-center items-middle bg-stripes bg-primary light-1  border border-primary p-md">
    <div class="display-flex items-center items-middle w-full h-full bg-primary-light-1 text-inverse">border-box</div>
  </div>
  <div style="width: calc(var(--md) * 12); height: calc(var(--md) * 12); --stripes-color: rgba(var(--rgb-success), 0.7);" class="bg-stripes p-md border border-success dashed">
    <div class="display-flex items-center items-middle w-full h-full border border-success bg-success light-1 text-inverse">content-box</div>
  </div>
</hl-group>
`)],-1),$=N(`<h2 id="fonts-zi-ti-jia-zu"><a class="header-anchor" href="#fonts-zi-ti-jia-zu"></a> Fonts \u5B57\u4F53\u5BB6\u65CF</h2><p>\u5229\u7528&quot;\u7CFB\u7EDF\u5B57\u4F53\u5806\u6808&quot;\u5728\u6BCF\u4E2A\u8BBE\u5907\u548C\u64CD\u4F5C\u8BBE\u5907\u4E0A\u5B9E\u73B0\u6700\u4F73\u6587\u672C\u6E32\u67D3\u3002\u8FD9\u4E9B\u7CFB\u7EDF\u5B57\u4F53\u4E13\u4E3A\u5F53\u4ECA\u7684\u8BBE\u5907\u800C\u8BBE\u8BA1\uFF0C\u5177\u6709\u6539\u8FDB\u7684\u5C4F\u5E55\u6E32\u67D3\u3001\u53EF\u53D8\u5B57\u4F53\u652F\u6301\u7B49\u3002</p><pre><code class="hljs language-css"><span class="hljs-attribute">font-family</span>: {
  -apple-system,
  BlinkMacSystemFont,
  &#39;Segoe UI&#39;,
  Roboto,
  &#39;Helvetica Neue&#39;,
  Arial,
  &#39;Noto Sans&#39;,
  sans-serif,
  &#39;Apple <span class="hljs-attribute">Color</span> Emoji&#39;,
  &#39;Segoe UI Emoji&#39;,
  &#39;Segoe UI Symbol&#39;,
  &#39;Noto <span class="hljs-attribute">Color</span> Emoji&#39;
}
</code></pre><p>\u6211\u4EEC\u4E3A<code>&lt;body&gt;</code>\u6DFB\u52A0\u4E86\u9ED8\u8BA4\u5B57\u4F53\uFF0C\u5982\u679C\u4F60\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\uFF0C\u8BF7\u7F16\u8F91\u4F60\u9879\u76EE\u7684<code>config.scss</code>\u6587\u4EF6\u3002</p><h2 id="heading-biao-ti"><a class="header-anchor" href="#heading-biao-ti"></a> Heading \u6807\u9898</h2><p>Hongluan\u9ED8\u8BA4\u79FB\u9664\u4E86\u6807\u9898\u7684 margin \u5C5E\u6027\uFF0C\u4E3A\u4E86\u4FDD\u6301\u6574\u4E2A\u8BBE\u8BA1\u7CFB\u7EDF\u7684\u5C3A\u5BF8\u89C4\u8303\uFF0C\u5B83\u4EEC\u4E5F\u88AB\u9ED8\u8BA4\u7684\u52A0\u4E0A\u4E86<code>line-height</code>\u884C\u9AD8\u5C5E\u6027</p>`,6),L=u("pre",null,[u("code",{class:"html"},`<hl-group gap="var(--md)" dir="vertical">
  <h1 class="show-height static">h1 Heading \u6807\u9898</h1>
  <h2 class="show-height static">h1 Heading \u6807\u9898</h2>
  <h3 class="show-height static">h1 Heading \u6807\u9898</h3>
  <h4 class="show-height static">h1 Heading \u6807\u9898</h4>
  <h5 class="show-height static">h1 Heading \u6807\u9898</h5>
  <h6 class="show-height static">h1 Heading \u6807\u9898</h6>
</hl-group>
`)],-1),U=u("h2",{id:"hr-fen-ge-xian"},[u("a",{class:"header-anchor",href:"#hr-fen-ge-xian"}),m(" Hr \u5206\u9694\u7EBF")],-1),R=u("p",null,"\u9664\u4E86\u57FA\u7840\u7684\u5B9E\u7EBF\uFF0CHongluan\u8FD8\u65B0\u589E\u4E86\u865A\u7EBF\u548C\u70B9\u7EBF\u6837\u5F0F\u3002",-1),I=u("pre",null,[u("code",{class:"html"},`\u5B9E\u7EBF
<hr />
\u865A\u7EBF
<hr class="dashed" />
\u70B9\u7EBF
<hr class="dotted" />
`)],-1),P=u("h2",{id:"blockquote-yin-yong"},[u("a",{class:"header-anchor",href:"#blockquote-yin-yong"}),m(" Blockquote \u5F15\u7528")],-1),Q=u("pre",null,[u("code",{class:"html"},`<blockquote>
  <p>Hongluan\u7684\u7EC4\u4EF6\u6837\u5F0F\u5F0F\u7531Mixin\u751F\u6210\u7684\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6837\u5F0F\u751F\u6210\u6587\u4EF6\u3002</p>
</blockquote>
`)],-1),W=u("h2",{id:"code-dai-ma-pian-duan"},[u("a",{class:"header-anchor",href:"#code-dai-ma-pian-duan"}),m(" Code \u4EE3\u7801\u7247\u6BB5")],-1),X=u("pre",null,[u("code",{class:"html"},`<code>
$conf_font_color: #FFFFFF;
</code>
`)],-1),G=u("h2",{id:"mark-biao-ji"},[u("a",{class:"header-anchor",href:"#mark-biao-ji"}),m(" Mark \u6807\u8BB0")],-1),J=u("pre",null,[u("code",{class:"html"},`<p>Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001<mark>\u9AD8\u53EF\u63A7</mark>\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>

`)],-1),K=u("h2",{id:"list-lie-biao"},[u("a",{class:"header-anchor",href:"#list-lie-biao"}),m(" List \u5217\u8868")],-1),O=u("pre",null,[u("code",{class:"html"},`<ul>
  <li>\u6240\u6709\u5217\u8868\u7684\u4E0A\u8FB9\u8DDD\u90FD\u5DF2\u5220\u9664</li>
  <li>\u4ED6\u4EEC\u7684\u5E95\u8FB9\u8DDD\u6807\u51C6\u5316\u4E86</li>
  <li>\u5D4C\u5957\u5217\u8868\u6CA1\u6709\u5E95\u8FB9\u8DDD</li>
  <li>\u8FD9\u6837\u5B83\u4EEC\u7684\u5916\u89C2\u66F4\u5747\u5300
    <ul>
      <li>\u7279\u522B\u662F\u5F53\u540E\u9762\u8DDF\u7740\u66F4\u591A\u5217\u8868\u9879\u65F6</li>
      <li>\u5DE6\u4FA7\u586B\u5145\u4E5F\u5DF2\u91CD\u7F6E</li>
    </ul>
  </li>
</ul>


<ol class="m-t-lg">
  <li>\u8FD9\u662F\u4E00\u4E2A\u6709\u5E8F\u5217\u8868</li>
  <li>\u6709\u51E0\u4E2A\u5217\u8868\u9879</li>
  <li>\u5B83\u5177\u6709\u76F8\u540C\u7684\u6574\u4F53\u5916\u89C2</li>
  <li>\u4F5C\u4E3A\u4E4B\u524D\u7684\u65E0\u5E8F\u5217\u8868</li>
</ol>

`)],-1);function Y(e,o,t,c,i,r){const a=d("hl-demo0"),n=d("demo-block"),h=d("hl-demo1"),B=d("hl-demo2"),_=d("hl-demo3"),F=d("hl-demo4"),g=d("hl-demo5"),D=d("hl-demo6"),C=d("right-nav");return w(),y(H,null,[u("section",null,[j,q,T,M,s(n,{"source-code":`<hl-group gap="var(--xl)" align="items-middle items-center" block>
  <div style="width: calc(var(--md) * 10); height: calc(var(--md) * 10); --stripes-color: #fff;" class="display-flex items-center items-middle bg-stripes bg-primary light-1  border border-primary p-md">
    <div class="display-flex items-center items-middle w-full h-full bg-primary-light-1 text-inverse">border-box</div>
  </div>
  <div style="width: calc(var(--md) * 12); height: calc(var(--md) * 12); --stripes-color: rgba(var(--rgb-success), 0.7);" class="bg-stripes p-md border border-success dashed">
    <div class="display-flex items-center items-middle w-full h-full border border-success bg-success light-1 text-inverse">content-box</div>
  </div>
</hl-group>
`},{source:l(()=>[s(a)]),highlight:l(()=>[z]),_:1}),$,s(n,{"source-code":`<hl-group gap="var(--md)" dir="vertical">
  <h1 class="show-height static">h1 Heading \u6807\u9898</h1>
  <h2 class="show-height static">h1 Heading \u6807\u9898</h2>
  <h3 class="show-height static">h1 Heading \u6807\u9898</h3>
  <h4 class="show-height static">h1 Heading \u6807\u9898</h4>
  <h5 class="show-height static">h1 Heading \u6807\u9898</h5>
  <h6 class="show-height static">h1 Heading \u6807\u9898</h6>
</hl-group>
`},{source:l(()=>[s(h)]),highlight:l(()=>[L]),_:1}),U,R,s(n,{dark:"","source-code":`\u5B9E\u7EBF
<hr />
\u865A\u7EBF
<hr class="dashed" />
\u70B9\u7EBF
<hr class="dotted" />
`},{source:l(()=>[s(B)]),highlight:l(()=>[I]),_:1}),P,s(n,{"source-code":`<blockquote>
  <p>Hongluan\u7684\u7EC4\u4EF6\u6837\u5F0F\u5F0F\u7531Mixin\u751F\u6210\u7684\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6837\u5F0F\u751F\u6210\u6587\u4EF6\u3002</p>
</blockquote>
`},{source:l(()=>[s(_)]),highlight:l(()=>[Q]),_:1}),W,s(n,{"source-code":`<code>
$conf_font_color: #FFFFFF;
</code>
`},{source:l(()=>[s(F)]),highlight:l(()=>[X]),_:1}),G,s(n,{"source-code":`<p>Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001<mark>\u9AD8\u53EF\u63A7</mark>\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>

`},{source:l(()=>[s(g)]),highlight:l(()=>[J]),_:1}),K,s(n,{"source-code":`<ul>
  <li>\u6240\u6709\u5217\u8868\u7684\u4E0A\u8FB9\u8DDD\u90FD\u5DF2\u5220\u9664</li>
  <li>\u4ED6\u4EEC\u7684\u5E95\u8FB9\u8DDD\u6807\u51C6\u5316\u4E86</li>
  <li>\u5D4C\u5957\u5217\u8868\u6CA1\u6709\u5E95\u8FB9\u8DDD</li>
  <li>\u8FD9\u6837\u5B83\u4EEC\u7684\u5916\u89C2\u66F4\u5747\u5300
    <ul>
      <li>\u7279\u522B\u662F\u5F53\u540E\u9762\u8DDF\u7740\u66F4\u591A\u5217\u8868\u9879\u65F6</li>
      <li>\u5DE6\u4FA7\u586B\u5145\u4E5F\u5DF2\u91CD\u7F6E</li>
    </ul>
  </li>
</ul>


<ol class="m-t-lg">
  <li>\u8FD9\u662F\u4E00\u4E2A\u6709\u5E8F\u5217\u8868</li>
  <li>\u6709\u51E0\u4E2A\u5217\u8868\u9879</li>
  <li>\u5B83\u5177\u6709\u76F8\u540C\u7684\u6574\u4F53\u5916\u89C2</li>
  <li>\u4F5C\u4E3A\u4E4B\u524D\u7684\u65E0\u5E8F\u5217\u8868</li>
</ol>

`},{source:l(()=>[s(D)]),highlight:l(()=>[O]),_:1})]),s(C)],64)}var su=V(S,[["render",Y]]);export{su as default};
