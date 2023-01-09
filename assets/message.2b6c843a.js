import{p as _,I as c,L as i,W as b,X as n,P as s,a3 as F,T as t,J as f,H,Q as e,V as h,o as y}from"./vue.8a077a47.js";import{H as l,d as C}from"./index.3e39e2d9.js";import{A as k}from"./hongluan-icons.286a55ba.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";const v=t("\u5C45\u5DE6\u5BF9\u9F50\u65B9\u5F0F"),j=t("\u5C45\u4E2D\u5BF9\u9F50\u65B9\u5F0F"),D=t("\u5C45\u53F3\u5BF9\u9F50\u65B9\u5F0F"),E=_({setup(p){const o=a=>{l({message:"\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F",textAlign:a})};return(a,u)=>{const r=c("hl-button");return i(),b(F,null,[n(r,{class:"m-r-md",onClick:u[0]||(u[0]=d=>o("left"))},{default:s(()=>[v]),_:1}),n(r,{class:"m-r-md",onClick:u[1]||(u[1]=d=>o("center"))},{default:s(()=>[j]),_:1}),n(r,{onClick:u[2]||(u[2]=d=>o("right"))},{default:s(()=>[D]),_:1})],64)}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const A=t("\u6253\u5F00\u6D88\u606F\u63D0\u793A"),T=t("VNode"),$=_({setup(p){const o=()=>{l("\u53EA\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")},a=()=>{l({message:f("p",null,[f("span",null,"\u5185\u5BB9\u53EF\u4EE5\u662F "),f("i",{style:"color: teal"},"VNode")])})};return(u,r)=>{const d=c("hl-button");return i(),b(F,null,[n(d,{class:"m-r-md",onClick:o},{default:s(()=>[A]),_:1}),n(d,{onClick:a},{default:s(()=>[T]),_:1})],64)}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const x=t("\u6D88\u606F"),L=t("\u6210\u529F"),S=t("\u8B66\u544A"),z=t("\u9519\u8BEF"),N=_({setup(p){const o=()=>{l({showClose:!0,message:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A",duration:3e5})},a=()=>{l({showClose:!0,message:"\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F",type:"success"})},u=()=>{l({showClose:!0,message:"\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F",type:"warning"})},r=()=>{l({showClose:!0,message:"\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F",type:"error"})};return(d,M)=>{const g=c("hl-button");return i(),b(F,null,[n(g,{class:"m-r-md",onClick:o},{default:s(()=>[x]),_:1}),n(g,{class:"m-r-md",onClick:a},{default:s(()=>[L]),_:1}),n(g,{class:"m-r-md",onClick:u},{default:s(()=>[S]),_:1}),n(g,{onClick:r},{default:s(()=>[z]),_:1})],64)}}});var O=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const V=t("\u6253\u5F00\u6D88\u606F\u63D0\u793A"),P=_({setup(p){const o=()=>{l({message:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F.",grouping:!0,type:"success",duration:5e3})};return(a,u)=>{const r=c("hl-button");return i(),H(r,{class:"m-r-md",onClick:o},{default:s(()=>[V]),_:1})}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const U=t("\u4F7F\u7528 HTML \u7247\u6BB5"),q=_({setup(p){const o=()=>{l({dangerouslyUseHTMLString:!0,message:"<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>"})};return(a,u)=>{const r=c("hl-button");return i(),H(r,{onClick:o},{default:s(()=>[U]),_:1})}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const J=t("\u6210\u529F"),Q=t("\u8B66\u544A"),W=t("\u6D88\u606F"),G=t("\u9519\u8BEF"),K=t("\u81EA\u5B9A\u4E49icon"),R=_({setup(p){const o=()=>{l({type:"success",duration:5e3,showClose:!0,message:"\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F"})},a=()=>{l.warning({message:"\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F"})},u=()=>{l("\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")},r=()=>{l.error("\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F")},d=()=>{l({duration:5e3,icon:f(C,{size:"xl"},{default:()=>[f(k)]}),message:"\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6D88\u606F"})};return(M,g)=>{const m=c("hl-button");return i(),b(F,null,[n(m,{class:"m-r-md",onClick:o},{default:s(()=>[J]),_:1}),n(m,{class:"m-r-md",onClick:a},{default:s(()=>[Q]),_:1}),n(m,{class:"m-r-md",onClick:u},{default:s(()=>[W]),_:1}),n(m,{class:"m-r-md",onClick:r},{default:s(()=>[G]),_:1}),n(m,{onClick:d},{default:s(()=>[K]),_:1})],64)}}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const Z=e("h1",null,"Message \u6D88\u606F\u63D0\u793A",-1),ee=e("p",null,"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002\u4E0E Notification \u7684\u533A\u522B\u662F\u540E\u8005\u66F4\u591A\u7528\u4E8E\u7CFB\u7EDF\u7EA7\u901A\u77E5\u7684\u88AB\u52A8\u63D0\u9192\u3002",-1),te=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),t(" \u57FA\u7840\u7528\u6CD5")],-1),ne=e("p",null,"\u4ECE\u9876\u90E8\u51FA\u73B0\uFF0C3 \u79D2\u540E\u81EA\u52A8\u6D88\u5931\u3002",-1),se=e("div",null,[e("p",null,[t("Message \u5728\u914D\u7F6E\u4E0A\u4E0E Notification \u975E\u5E38\u7C7B\u4F3C\uFF0C\u6240\u4EE5\u90E8\u5206 options \u5728\u6B64\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\uFF0C\u6587\u672B\u6709 options \u5217\u8868\uFF0C\u53EF\u4EE5\u7ED3\u5408 Notification \u7684\u6587\u6863\u7406\u89E3\u5B83\u4EEC\u3002Hongluan UI \u6CE8\u518C\u4E86\u4E00\u4E2A"),e("code",null,"$message"),t("\u65B9\u6CD5\u7528\u4E8E\u8C03\u7528\uFF0CMessage \u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A VNode \u4F5C\u4E3A\u53C2\u6570\uFF0C\u5B83\u4F1A\u88AB\u663E\u793A\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")])],-1),oe=e("h2",{id:"bu-tong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#bu-tong-zhuang-tai"}),t(" \u4E0D\u540C\u72B6\u6001")],-1),re=e("p",null,"\u7528\u6765\u663E\u793A\u300C\u6210\u529F\u3001\u8B66\u544A\u3001\u6D88\u606F\u3001\u9519\u8BEF\u300D\u7C7B\u7684\u64CD\u4F5C\u53CD\u9988\u3002",-1),ue=e("div",null,[e("p",null,[t("\u5F53\u9700\u8981\u81EA\u5B9A\u4E49\u66F4\u591A\u5C5E\u6027\u65F6\uFF0CMessage \u4E5F\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u4E3A\u53C2\u6570\u3002\u6BD4\u5982\uFF0C\u8BBE\u7F6E"),e("code",null,"type"),t("\u5B57\u6BB5\u53EF\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A"),e("code",null,"info"),t("\u3002\u6B64\u65F6\u6B63\u6587\u5185\u5BB9\u4EE5"),e("code",null,"message"),t("\u7684\u503C\u4F20\u5165\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E3A Message \u7684\u5404\u79CD type \u6CE8\u518C\u4E86\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E0D\u4F20\u5165"),e("code",null,"type"),t("\u5B57\u6BB5\u7684\u60C5\u51B5\u4E0B\u50CF"),e("code",null,"open4"),t("\u51FD\u6570\u90A3\u6837\u76F4\u63A5\u8C03\u7528\u3002")])],-1),le=e("h2",{id:"ke-guan-bi"},[e("a",{class:"header-anchor",href:"#ke-guan-bi"}),t(" \u53EF\u5173\u95ED")],-1),ae=e("p",null,"\u53EF\u4EE5\u6DFB\u52A0\u5173\u95ED\u6309\u94AE\u3002",-1),de=e("div",null,[e("p",null,[t("\u9ED8\u8BA4\u7684 Message \u662F\u4E0D\u53EF\u4EE5\u88AB\u4EBA\u5DE5\u5173\u95ED\u7684\uFF0C\u5982\u679C\u9700\u8981\u53EF\u624B\u52A8\u5173\u95ED\u7684 Message\uFF0C\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"showClose"),t("\u5B57\u6BB5\u3002\u6B64\u5916\uFF0C\u548C Notification \u4E00\u6837\uFF0CMessage \u62E5\u6709\u53EF\u63A7\u7684"),e("code",null,"duration"),t("\uFF0C\u8BBE\u7F6E"),e("code",null,"0"),t("\u4E3A\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED\uFF0C\u9ED8\u8BA4\u4E3A 3000 \u6BEB\u79D2\u3002")])],-1),ce=e("h2",{id:"wen-zi-dui-qi-fang-shi"},[e("a",{class:"header-anchor",href:"#wen-zi-dui-qi-fang-shi"}),t(" \u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F")],-1),ie=e("p",null,[t("\u4F7F\u7528 "),e("code",null,"textAlign"),t("\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A"),e("code",null,"left"),t(","),e("code",null,"right"),t(","),e("code",null,"center"),t("\uFF0C\u9ED8\u8BA4\u503C\u4E3A"),e("code",null,"left")],-1),pe=e("h2",{id:"shi-yong-html-pian-duan"},[e("a",{class:"header-anchor",href:"#shi-yong-html-pian-duan"}),t(" \u4F7F\u7528 HTML \u7247\u6BB5")],-1),he=e("p",null,[e("code",null,"message"),t(" \u5C5E\u6027\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5")],-1),_e=e("div",null,[e("p",null,[t("\u5C06"),e("code",null,"dangerouslyUseHTMLString"),t("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),e("code",null,"message"),t(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")])],-1),ge=y('<div class="doc-tip warning"><p><code>message</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u56E0\u6B64\u5728 <code>dangerouslyUseHTMLString</code> \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD <code>message</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>message</code> \u5C5E\u6027\u3002</p></div><h2 id="fen-zu-he-bing"><a class="header-anchor" href="#fen-zu-he-bing"></a> \u5206\u7EC4\u5408\u5E76</h2><p>\u76F8\u540C\u5185\u5BB9\u7684Message\u4FE1\u606F\u53EF\u4EE5\u5408\u5E76</p>',3),me=e("div",null,[e("p",null,[t("\u8BBE\u7F6E "),e("code",null,"grouping"),t(" \u4E3A true\uFF0C\u76F8\u540C\u5185\u5BB9\u7684 "),e("code",null,"message"),t(" \u5C06\u4F1A\u88AB\u5408\u5E76\u3002")])],-1),fe=y(`<h2 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa"></a> \u5168\u5C40\u65B9\u6CD5</h2><p>Hongluan UI \u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u4E86\u5168\u5C40\u65B9\u6CD5 $message\u3002\u56E0\u6B64\u5728 vue instance \u4E2D\u53EF\u4EE5\u91C7\u7528\u5728 method \u4E2D\u8C03\u7528 <code>this.$message</code> \u65B9\u6CD5\u5524\u8D77 <code>HlMessage</code>\u3002</p><h2 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong"></a> \u5355\u72EC\u5F15\u7528</h2><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlMessage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>;
</code></pre><p>\u6B64\u65F6\u8C03\u7528\u65B9\u6CD5\u4E3A <code>HlMessage(options)</code>\u3002\u6211\u4EEC\u4E5F\u4E3A\u6BCF\u4E2A type \u5B9A\u4E49\u4E86\u5404\u81EA\u7684\u65B9\u6CD5\uFF0C\u5982 <code>HlMessage.success(options)</code>\u3002\u5E76\u4E14\u53EF\u4EE5\u8C03\u7528 <code>HlMessage.closeAll()</code> \u624B\u52A8\u5173\u95ED\u6240\u6709\u5B9E\u4F8B\u3002</p>`,5),be={id:"app-shang-xia-wen-ji-cheng-1.5.7"},Fe=e("a",{class:"header-anchor",href:"#app-shang-xia-wen-ji-cheng-1.5.7"},null,-1),Me=t(" App \u4E0A\u4E0B\u6587\u7EE7\u627F "),ye=t("> 1.5.7"),He=y(`<div class="doc-tip"><p>\u5982\u679C\u5168\u5C40\u6CE8\u518C HlMessage \u7EC4\u4EF6, \u4F1A\u81EA\u52A8\u7EE7\u627Fapp\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002</p></div><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlMessage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>

<span class="hljs-comment">// in your setup method</span>
<span class="hljs-keyword">const</span> { appContext } = <span class="hljs-title function_">getCurrentInstance</span>()!
<span class="hljs-title class_">HlMessage</span>({}, appContext)
</code></pre><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u6D88\u606F\u6587\u5B57</td><td>string / VNode / () =&gt; VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u4E3B\u9898</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>customClass</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>duration</td><td>\u663E\u793A\u65F6\u95F4, \u6BEB\u79D2\u3002\u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>\u2014</td><td>3000</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>textAlign</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570\u4E3A\u88AB\u5173\u95ED\u7684 message \u5B9E\u4F8B</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>offset</td><td>Message \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>16</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etype\u5B9A\u4E49\u7684icon</td><td>VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>appendTo</td><td>\u6DFB\u52A0Message\u7684\u6839DOM\u5143\u7D20</td><td>string / HTMLElement</td><td>-</td><td>document.body</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p>\u8C03\u7528 <code>HlMessage</code> \u6216 <code>this.$message</code> \u4F1A\u8FD4\u56DE\u5F53\u524D Message \u7684\u5B9E\u4F8B\u3002\u5982\u679C\u9700\u8981\u624B\u52A8\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528\u5B83\u7684 <code>close</code> \u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5F53\u524D\u7684 Message</td></tr></tbody></table>`,7),Ee={setup(p){const o={"../../../examples/message/align.vue":w,"../../../examples/message/basic.vue":B,"../../../examples/message/close.vue":O,"../../../examples/message/grouping.vue":I,"../../../examples/message/html.vue":X,"../../../examples/message/type.vue":Y};return(a,u)=>{const r=c("demo-block"),d=c("hl-tag"),M=c("right-nav");return i(),b(F,null,[e("section",null,[Z,ee,te,ne,n(r,{fs:"",demos:h(o),"path-name":"message/basic","source-code":`<template>\r
  <hl-button class="m-r-md" @click="open">\u6253\u5F00\u6D88\u606F\u63D0\u793A</hl-button>\r
  <hl-button @click="openVn">VNode</hl-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { h } from 'vue'\r
import { HlMessage } from 'hongluan-ui'\r
\r
const open = () => {\r
  HlMessage('\u53EA\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A')\r
}\r
const openVn = () => {\r
  HlMessage({\r
    message: h('p', null, [\r
      h('span', null, '\u5185\u5BB9\u53EF\u4EE5\u662F '),\r
      h('i', { style: 'color: teal' }, 'VNode'),\r
    ]),\r
  })\r
}\r
\r
<\/script>\r
`},{default:s(()=>[se]),_:1},8,["demos"]),oe,re,n(r,{fs:"",demos:h(o),"path-name":"message/type","source-code":`<template>\r
  <hl-button class="m-r-md" @click="open1">\u6210\u529F</hl-button>\r
  <hl-button class="m-r-md" @click="open2">\u8B66\u544A</hl-button>\r
  <hl-button class="m-r-md" @click="open3">\u6D88\u606F</hl-button>\r
  <hl-button class="m-r-md" @click="open4">\u9519\u8BEF</hl-button>\r
  <hl-button @click="open5">\u81EA\u5B9A\u4E49icon</hl-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { h } from 'vue'\r
import { HlMessage, HlIcon } from 'hongluan-ui'\r
import { TwoAirplay } from '@hongluan-ui/icons'\r
\r
const open1 = () => {\r
  HlMessage({\r
    type: 'success',\r
    duration: 5000,\r
    showClose: true,\r
    message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',\r
  })\r
}\r
const open2 = () => {\r
  HlMessage.warning({\r
    message: '\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F',\r
  })\r
}\r
const open3 = () => {\r
  HlMessage('\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A')\r
}\r
const open4 = () => {\r
  HlMessage.error('\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F')\r
}\r
const open5 = () => {\r
  HlMessage({\r
    duration: 5000,\r
    icon: h(HlIcon, {\r
      size: 'xl',\r
    }, {\r
      default: () => [h(TwoAirplay)],\r
    }),\r
    message: '\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6D88\u606F',\r
  })\r
}\r
\r
<\/script>\r
`},{default:s(()=>[ue]),_:1},8,["demos"]),le,ae,n(r,{fs:"",demos:h(o),"path-name":"message/close","source-code":`<template>\r
  <hl-button class="m-r-md" @click="open1">\u6D88\u606F</hl-button>\r
  <hl-button class="m-r-md" @click="open2">\u6210\u529F</hl-button>\r
  <hl-button class="m-r-md" @click="open3">\u8B66\u544A</hl-button>\r
  <hl-button @click="open4">\u9519\u8BEF</hl-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { HlMessage } from 'hongluan-ui'\r
\r
const open1 = () => {\r
  HlMessage({\r
    showClose: true,\r
    message: '\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A',\r
    duration: 300000,\r
  })\r
}\r
\r
const open2 = () => {\r
  HlMessage({\r
    showClose: true,\r
    message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',\r
    type: 'success',\r
  })\r
}\r
\r
const open3 = () => {\r
  HlMessage({\r
    showClose: true,\r
    message: '\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F',\r
    type: 'warning',\r
  })\r
}\r
\r
const open4 = () => {\r
  HlMessage({\r
    showClose: true,\r
    message: '\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F',\r
    type: 'error',\r
  })\r
}\r
\r
<\/script>\r
`},{default:s(()=>[de]),_:1},8,["demos"]),ce,ie,n(r,{fs:"",demos:h(o),"path-name":"message/align","source-code":`<template>\r
  <hl-button class="m-r-md" @click="openCenter('left')">\u5C45\u5DE6\u5BF9\u9F50\u65B9\u5F0F</hl-button>\r
  <hl-button class="m-r-md" @click="openCenter('center')">\u5C45\u4E2D\u5BF9\u9F50\u65B9\u5F0F</hl-button>\r
  <hl-button @click="openCenter('right')">\u5C45\u53F3\u5BF9\u9F50\u65B9\u5F0F</hl-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { HlMessage } from 'hongluan-ui'\r
\r
const openCenter = align => {\r
  HlMessage({\r
    message: \`\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\`,\r
    textAlign: align,\r
  })\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),pe,he,n(r,{fs:"",demos:h(o),"path-name":"message/html","source-code":`<template>\r
  <hl-button @click="openHTML">\u4F7F\u7528 HTML \u7247\u6BB5</hl-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { HlMessage } from 'hongluan-ui'\r
\r
const openHTML = () => {\r
  HlMessage({\r
    dangerouslyUseHTMLString: true,\r
    message: '<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>',\r
  })\r
}\r
\r
<\/script>\r
`},{default:s(()=>[_e]),_:1},8,["demos"]),ge,n(r,{fs:"",demos:h(o),"path-name":"message/grouping","source-code":`<template>\r
  <hl-button class="m-r-md" @click="open">\u6253\u5F00\u6D88\u606F\u63D0\u793A</hl-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { HlMessage } from 'hongluan-ui'\r
\r
const open = () => {\r
  HlMessage({\r
    message: '\u8FD9\u662F\u4E00\u6761\u6D88\u606F.',\r
    grouping: true,\r
    type: 'success',\r
    duration: 5000,\r
  })\r
}\r
<\/script>\r
`},{default:s(()=>[me]),_:1},8,["demos"]),fe,e("h2",be,[Fe,Me,n(d,null,{default:s(()=>[ye]),_:1})]),He]),n(M)],64)}}};export{Ee as default};
