import{p as F,R as u,I as a,L as h,W as g,X as t,P as e,a3 as v,T as r,B as $,H as D,V as m,Q as n,ag as w,M as T,o as P}from"./vue.8a077a47.js";import{_ as R,H as z,C as O}from"./index.3e39e2d9.js";import{W as j}from"./hongluan-icons.286a55ba.js";import{j as V}from"./hongluan.a075e642.js";import"./highlight.171c852c.js";const M=r("hover \u6FC0\u6D3B"),A=r("click \u6FC0\u6D3B"),H=r("focus \u6FC0\u6D3B"),W=r("\u53F3\u952E\u6FC0\u6D3B"),L=r("\u624B\u5DE5\u6FC0\u6D3B"),I=F({setup(_){const s=u(!1);return(l,o)=>{const c=a("hl-button"),d=a("hl-popover");return h(),g(v,null,[t(d,{placement:"top-start",title:"\u6807\u9898",width:200,trigger:"hover",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[M]),_:1})]),_:1}),t(d,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[A]),_:1})]),_:1}),t(d,{ref:"popover",placement:"right",title:"\u6807\u9898",width:200,trigger:"focus",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[H]),_:1})]),_:1},512),t(d,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"contextmenu",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[W]),_:1})]),_:1}),t(d,{visible:s.value,placement:"bottom",title:"Title",width:200,content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(c,{class:"m-r-md",onClick:o[0]||(o[0]=i=>s.value=!s.value)},{default:e(()=>[L]),_:1})]),_:1},8,["visible"])],64)}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const N={},G=r("Dark"),Q=r("Default");function X(_,s){const l=a("hl-button"),o=a("hl-popover");return h(),g(v,null,[t(o,{effect:"dark",content:"Top Center",placement:"top"},{reference:e(()=>[t(l,{class:"m-r-md"},{default:e(()=>[G]),_:1})]),_:1}),t(o,{content:"Bottom Center",placement:"bottom"},{reference:e(()=>[t(l,{class:"m-r-md"},{default:e(()=>[Q]),_:1})]),_:1})],64)}var q=R(N,[["render",X]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const K=r("click \u6FC0\u6D3B"),Y=F({setup(_){const s=u(),l=u(),o=u(),c=u(""),d=u(""),i=u(""),f=$(()=>{var b,p,B;return[(b=s.value)==null?void 0:b.popperPaneRef,(p=o.value)==null?void 0:p.popperPaneRef,(B=l.value)==null?void 0:B.popperPaneRef]});return(b,p)=>{const B=a("hl-button"),k=a("hl-option"),E=a("hl-select"),x=a("hl-time-select"),C=a("hl-date-picker"),S=a("hl-popover");return h(),D(S,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click","outside-ignore":m(f)},{reference:e(()=>[t(B,{class:"m-r-md"},{default:e(()=>[K]),_:1})]),default:e(()=>[t(E,{ref_key:"selecRef",ref:s,modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=y=>c.value=y),class:"m-b-md"},{default:e(()=>[t(k,{value:"1",label:"1"}),t(k,{value:"2",label:"2"}),t(k,{value:"3",label:"3"})]),_:1},8,["modelValue"]),t(x,{ref_key:"timeSelecRef",ref:l,modelValue:d.value,"onUpdate:modelValue":p[1]||(p[1]=y=>d.value=y),class:"m-b-md"},null,8,["modelValue"]),t(C,{ref_key:"timePickerRef",ref:o,modelValue:i.value,"onUpdate:modelValue":p[2]||(p[2]=y=>i.value=y),class:"m-b-md"},null,8,["modelValue"])]),_:1},8,["outside-ignore"])}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const tt={},et=r("\u4E0A\u5DE6"),rt=r("\u4E0A\u4E2D"),nt=r("\u4E0A\u53F3"),ot=r("\u53F3\u4E0A"),lt=r("\u53F3\u4E2D"),ct=r("\u53F3\u4E0B"),st=r("\u5DE6\u4E0A"),dt=r("\u5DE6\u4E2D"),at=r("\u5DE6\u4E0B"),pt=r("\u4E0B\u5DE6"),it=r("\u4E0B\u4E2D"),ut=r("\u4E0B\u53F3");function mt(_,s){const l=a("hl-button"),o=a("hl-popover"),c=a("hl-group"),d=a("hl-col"),i=a("hl-row");return h(),D(i,{align:"center middle",gap:"var(--lg)"},{default:e(()=>[t(d,{span:"col-12",class:"display-flex items-right items-bottom"},{default:e(()=>[t(c,{merge:"",indent:""},{default:e(()=>[t(o,{class:"item",trigger:"click",content:"top-start",effect:"dark",placement:"top-start"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[et]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"top",effect:"dark",placement:"top"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[rt]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"top-end",effect:"dark",placement:"top-end"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[nt]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{span:"col-12",class:"display-flex"},{default:e(()=>[t(c,{dir:"vertical",merge:"",indent:""},{default:e(()=>[t(o,{class:"item",trigger:"click",content:"right-start",effect:"dark",placement:"right-start"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[ot]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"right",effect:"dark",placement:"right"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[lt]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"right-end",effect:"dark",placement:"right-end"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[ct]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{span:"col-12",class:"display-flex items-right"},{default:e(()=>[t(c,{dir:"vertical",merge:"",indent:""},{default:e(()=>[t(o,{class:"item",trigger:"click",content:"left-start",effect:"dark",placement:"left-start"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[st]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"left",effect:"dark",placement:"left"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[dt]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"left-end",effect:"dark",placement:"left-end"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[at]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{span:"col-12",class:"display-flex"},{default:e(()=>[t(c,{merge:"",indent:""},{default:e(()=>[t(o,{class:"item",trigger:"click",content:"bottom-start",effect:"dark",placement:"bottom-start"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[pt]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"bottom",effect:"dark",placement:"bottom"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[it]),_:1})]),_:1}),t(o,{class:"item",trigger:"click",content:"bottom-end",effect:"dark",placement:"bottom-end"},{reference:e(()=>[t(l,{class:"group-item"},{default:e(()=>[ut]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var ht=R(tt,[["render",mt]]),ft=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));const _t=r(" Click to open tooltip "),gt=n("span",null," Some content ",-1),vt=F({setup(_){const s=u(),l=u(),o=u(!1);return(c,d)=>{const i=a("hl-button"),f=a("hl-popover");return h(),g(v,null,[n("div",null,[(h(),g(v,null,w(3,b=>t(i,{key:b,class:"m-r-md",onMouseover:d[0]||(d[0]=p=>s.value=p.currentTarget),onClick:d[1]||(d[1]=p=>o.value=!o.value)},{default:e(()=>[_t]),_:2},1024)),64))]),t(f,{ref_key:"tooltipRef",ref:l,visible:o.value,"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":s.value,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{default:e(()=>[gt]),_:1},8,["visible","virtual-ref"])],64)}}});var bt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"}));const kt=r("\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1"),Bt=n("h5",null,"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",-1),yt=n("div",null,"\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002",-1),Ft=r("\u53D6\u6D88"),Et=r("\u786E\u5B9A"),Dt=r("\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1"),Pt=F({setup(_){const s=u(!1),l=u([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"}]),o=()=>{s.value=!1,z("\u5220\u9664\u6210\u529F")};return(c,d)=>{const i=a("hl-button"),f=a("hl-table-column"),b=a("hl-table"),p=a("hl-popover"),B=a("hl-icon"),k=a("hl-group");return h(),g(v,null,[t(p,{placement:"right",width:400,trigger:"click",class:"m-r-lg"},{reference:e(()=>[t(i,{class:"m-r-md"},{default:e(()=>[kt]),_:1})]),default:e(()=>[t(b,{data:l.value,stripe:"",class:"compact"},{default:e(()=>[t(f,{width:"120",property:"date",label:"\u65E5\u671F"}),t(f,{width:"100",property:"name",label:"\u59D3\u540D"}),t(f,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1}),t(p,{visible:s.value,placement:"top"},{reference:e(()=>[t(i,{onClick:d[1]||(d[1]=E=>s.value=!0)},{default:e(()=>[Dt]),_:1})]),default:e(()=>[t(k,{align:"items-top",gap:"var(--md)"},{default:e(()=>[t(B,{type:"warning",size:"lg",class:"no-shrink"},{default:e(()=>[t(m(j))]),_:1}),t(k,{dir:"vertical",gap:"var(--xxs)"},{default:e(()=>[Bt,yt,t(k,{block:"",full:"",align:"items-right",class:"m-t-md"},{default:e(()=>[t(i,{type:"link",size:"sm",class:"static",onClick:d[0]||(d[0]=E=>s.value=!1)},{default:e(()=>[Ft]),_:1}),t(i,{type:"primary",size:"sm",class:"static",onClick:o},{default:e(()=>[Et]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["visible"])],64)}}});var Rt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));const xt={},Ct=r("Light"),St=r("Dark");function $t(_,s){const l=a("hl-button"),o=a("hl-popover");return h(),g(v,null,[t(o,{trigger:"hover",content:"Top Center",placement:"top",tooltip:""},{reference:e(()=>[t(l,{class:"m-r-md"},{default:e(()=>[Ct]),_:1})]),_:1}),t(o,{trigger:"hover",effect:"dark",content:"Top center",placement:"top",tooltip:""},{reference:e(()=>[t(l,{class:"m-r-md"},{default:e(()=>[St]),_:1})]),_:1})],64)}var wt=R(xt,[["render",$t]]),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"}));const zt=r(" Click me "),Ot=n("span",null," Some content ",-1),jt=F({setup(_){const s=u(),l=u(),o=()=>{var c,d;(d=(c=m(l).popperRef)==null?void 0:c.delayHide)==null||d.call(c)};return console.log(V({a:1})),(c,d)=>{const i=a("hl-button"),f=a("hl-popover");return h(),g(v,null,[T((h(),D(i,{ref_key:"buttonRef",ref:s},{default:e(()=>[zt]),_:1})),[[m(O),o]]),t(f,{ref_key:"popoverRef",ref:l,"virtual-ref":s.value,trigger:"click",title:"With title","virtual-triggering":""},{default:e(()=>[Ot]),_:1},8,["virtual-ref"])],64)}}});var Vt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"}));const Mt=P('<h1>Popover \u6C14\u6CE1\u5F39\u6846</h1><p>\u70B9\u51FB/\u9F20\u6807\u79FB\u5165\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><div class="doc-tip"><p><em><strong>\u63D0\u793A</strong></em></p><p>Popover \u5185\u4E0D\u652F\u6301 router-link \u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528 vm.$router.push \u4EE3\u66FF\u3002</p><p>Popover \u5185\u4E0D\u652F\u6301 disabled form \u5143\u7D20\uFF0C\u53C2\u8003 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>\uFF0C \u8BF7\u5728 disabled form \u5143\u7D20\u5916\u5C42\u6DFB\u52A0\u4E00\u5C42\u5305\u88F9\u5143\u7D20\u3002</p></div>',4),At=n("div",null,[n("p",null,[n("code",null,"trigger"),r("\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u4F55\u65F6\u89E6\u53D1 Popover\uFF0C\u652F\u6301\u56DB\u79CD\u89E6\u53D1\u65B9\u5F0F\uFF1A"),n("code",null,"hover"),r("\uFF0C"),n("code",null,"click"),r("\uFF0C"),n("code",null,"focus"),r(" \u548C "),n("code",null,"contextmenu"),r("\u3002\u5982\u679C\u4F60\u60F3\u624B\u52A8\u63A7\u5236\u5B83\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E "),n("code",null,":visible"),r("\u3002\u5BF9\u4E8E\u89E6\u53D1 Popover \u7684\u5143\u7D20\uFF0C\u6709\u4E24\u79CD\u5199\u6CD5\uFF1A\u4F7F\u7528 "),n("code",null,"#reference"),r(" \u7684\u5177\u540D\u63D2\u69FD\uFF0C\u6216\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4"),n("code",null,"v-popover"),r("\u6307\u5411 Popover \u7684\u7D22\u5F15"),n("code",null,"ref"),r("\u3002")])],-1),Ht=P('<h2 id="xu-ni-chu-fa"><a class="header-anchor" href="#xu-ni-chu-fa"></a> \u865A\u62DF\u89E6\u53D1</h2><p>Popover \u53EF\u4EE5\u7531\u865A\u62DF\u5143\u7D20\u89E6\u53D1\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5C31\u5F88\u9002\u5408\u4F7F\u7528\u5728\u89E6\u53D1\u5143\u7D20\u548C\u5C55\u793A\u5185\u5BB9\u5143\u7D20\u662F\u5206\u5F00\u7684\u573A\u666F\u3002\u901A\u5E38\u6211\u4EEC\u4F7F\u7528 <code>#reference</code> \u6765\u653E\u7F6E\u6211\u4EEC\u7684\u89E6\u53D1\u5143\u7D20\uFF0C \u7528 <code>triggering-element</code> API\uFF0C\u60A8\u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E\u60A8\u7684\u89E6\u53D1\u5143\u7D20 \u4F46\u6CE8\u610F\u5230\u89E6\u53D1\u5143\u7D20\u5E94\u8BE5\u662F\u63A5\u53D7 <code>mouse</code> \u548C <code>keyboard</code> \u4E8B\u4EF6\u7684\u5143\u7D20\u3002</p><div class="doc-tip warning"><p>\u8B66\u544A\uFF1A v-popover \u5C06\u88AB\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 virtual-ref \u4F5C\u4E3A\u66FF\u4EE3\u3002</p></div><div class="doc-tip"><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u865A\u62DF\u89E6\u53D1\u7684 tooltip \u662F\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u4F60\u5FC5\u987B\u81EA\u5DF1\u53BB\u63A7\u5236 tooltip \u662F\u5426\u663E\u793A\uFF0C\u4F60\u5C06\u65E0\u6CD5\u901A\u8FC7\u70B9\u51FB\u7A7A\u767D\u5904\u6765\u5173\u95ED tooltip\u3002</p></div>',4),Wt=n("h2",{id:"fang-wei"},[n("a",{class:"header-anchor",href:"#fang-wei"}),r(" \u65B9\u4F4D")],-1),Lt=n("p",null,"\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B 9 \u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5B8C\u6574\u793A\u4F8B\u6765\u9009\u62E9\u4F60\u60F3\u8981\u7684\u6548\u679C\u3002",-1),It=n("div",null,[n("p",null,[r("\u4F7F\u7528"),n("code",null,"content"),r("\u5C5E\u6027\u6765\u51B3\u5B9A"),n("code",null,"hover"),r("\u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002\u7531"),n("code",null,"placement"),r("\u5C5E\u6027\u51B3\u5B9A\u5C55\u793A\u6548\u679C\uFF1A"),n("code",null,"placement"),r("\u5C5E\u6027\u503C\u4E3A\uFF1A"),n("code",null,"\u65B9\u5411-\u5BF9\u9F50\u4F4D\u7F6E"),r("\uFF1B\u56DB\u4E2A\u65B9\u5411\uFF1A"),n("code",null,"top"),r("\u3001"),n("code",null,"left"),r("\u3001"),n("code",null,"right"),r("\u3001"),n("code",null,"bottom"),r("\uFF1B\u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E\uFF1A"),n("code",null,"start"),r(", "),n("code",null,"end"),r("\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u5982"),n("code",null,'placement="left-end"'),r("\uFF0C\u5219\u63D0\u793A\u4FE1\u606F\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u7684\u5DE6\u4FA7\uFF0C\u4E14\u63D0\u793A\u4FE1\u606F\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5E95\u90E8\u5BF9\u9F50\u3002")])],-1),Ut=n("h2",{id:"shen-se-yang-shi"},[n("a",{class:"header-anchor",href:"#shen-se-yang-shi"}),r(" \u6DF1\u8272\u6837\u5F0F")],-1),Nt=n("p",null,[r("\u901A\u8FC7\u8BBE\u7F6E"),n("code",null,"effect"),r("\u5C5E\u6027 \u4E3A "),n("code",null,"dark"),r(" \u6765\u6539\u53D8\u4E3A\u6DF1\u8272\u6837\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u8868\u73B0 Tooltip \u7684\u6548\u679C\u3002")],-1),Gt=n("h2",{id:"tooltip-wen-zi-ti-shi"},[n("a",{class:"header-anchor",href:"#tooltip-wen-zi-ti-shi"}),r(" Tooltip \u6587\u5B57\u63D0\u793A")],-1),Qt=n("p",null,[r("Popover \u517C\u5177 Tooltip \u7684\u529F\u80FD\uFF0C\u4F7F\u7528"),n("code",null,"tooltip"),r(" \u5C5E\u6027\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A Tooltip\u3002")],-1),Xt=n("h2",{id:"zi-ding-yi-nei-rong"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),r(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),qt=n("p",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u591A\u79CD\u7C7B\u578B\u4FE1\u606F\uFF0C\u4EE5\u4E0B\u4E3A\u5D4C\u5957\u8868\u683C\u7684\u4F8B\u5B50\u3002",-1),Jt=n("div",null,[n("p",null,[r("\u5229\u7528\u5206\u53D1\u53D6\u4EE3"),n("code",null,"content"),r("\u5C5E\u6027")])],-1),Kt=n("h2",{id:"dan-li-mo-shi"},[n("a",{class:"header-anchor",href:"#dan-li-mo-shi"}),r(" \u5355\u4F8B\u6A21\u5F0F")],-1),Yt=n("p",null,"Popover \u53EF\u4EE5\u4F5C\u4E3A\u5355\u4F8B\uFF0C\u4E5F\u5C31\u662F\u662F\u8BF4\u4F60\u53EF\u4EE5\u540C\u65F6\u6709\u591A\u4E2A\u89E6\u53D1\u540C\u4E00\u4E2A popover \u7684\u89E6\u53D1\u5143\u7D20\uFF0C\u8FD9\u4E2A\u529F\u80FD\u662F\u5728 \u865A\u62DF\u89E6\u53D1 \u7684\u57FA\u7840\u4E0A\u5F00\u53D1\u7684\u3002",-1),Zt=n("div",{class:"doc-tip"},[n("p",null,"\u5DF2\u77E5\u95EE\u9898\uFF1A\u5F53\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u65F6\uFF0Ctooltip \u7684\u89E6\u53D1\u5143\u7D20\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u53D1\u751F\u5F39\u8DF3\u3002")],-1),te=n("h2",{id:"zu-zhi-dan-chuang-zi-dong-yin-cang"},[n("a",{class:"header-anchor",href:"#zu-zhi-dan-chuang-zi-dong-yin-cang"}),r(" \u963B\u6B62\u5F39\u7A97\u81EA\u52A8\u9690\u85CF")],-1),ee=n("p",null,[r("Popover \u5185\u5D4C\u5165Select\uFF0CDatePicker\uFF0CTimeSelect\u7B49\u5177\u6709"),n("code",null,"body"),r("\u5185\u5F39\u7A97\u7684\u7EC4\u4EF6\u65F6\uFF0C\u70B9\u51FB\u5F39\u7A97\u5185\u5BB9\u4F1A\u5BFC\u81F4Popover\u81EA\u52A8\u9690\u85CF\u3002\u4E3A\u6B64\u60A8\u67092\u79CD\u65B9\u6CD5\uFF1A1\uFF09\u8BBE\u7F6Eteleported\u5C5E\u6027\u4E3Afalse\uFF1B2\uFF09\u901A\u8FC7\u8BBE\u7F6E"),n("code",null,"outside-ignore"),r("\u5C5E\u6027\u4EE5\u963B\u6B62\u6B64\u884C\u4E3A\u3002")],-1),re=n("div",null,[n("p",null,[n("code",null,"outside-ignore"),r("\u5C5E\u6027\u6F14\u793A")])],-1),ne=P('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u65B9\u5F0F\u3002</td><td>string</td><td>click/focus/hover/contextmenu</td><td>click</td></tr><tr><td>effect</td><td>\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898</td><td>string</td><td>dark/light</td><td>light</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tooltip</td><td>\u662F\u5426\u4E3A tooltip\u3002\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0Ctrigger\u81EA\u52A8\u53D8\u66F4\u4E3Ahover\uFF0C\u4E0D\u53EF\u66F4\u6539\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>content</td><td>\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>slot</code> \u4F20\u5165 DOM</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u6700\u5C0F\u5BBD\u5EA6 150px</td></tr><tr><td>placement</td><td>\u51FA\u73B0\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover \u662F\u5426\u53EF\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>\u72B6\u6001\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>transition</td><td>\u5B9A\u4E49\u6E10\u53D8\u52A8\u753B</td><td>string</td><td>\u2014</td><td>fade-in</td></tr><tr><td>show-arrow</td><td>\u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/">popper.js</a> \u7684\u53C2\u6570</td><td>Object</td><td>\u53C2\u8003 <a href="https://popper.js.org/docs/v2/">popper.js</a> \u6587\u6863</td><td><code>{modifiers: [{name: &#39;computeStyles&#39;,options: {gpuAcceleration: false}}]}</code></td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-style</td><td>\u4E3A popper \u6DFB\u52A0\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-after</td><td>\u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>200</td></tr><tr><td>auto-close</td><td>Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>teleported</td><td>Popover\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>virtual-triggering</td><td>\u662F\u5426\u4E3A\u865A\u62DF\u89E6\u53D1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>virtual-ref</td><td>\u89E6\u53D1\u5F39\u7A97\u7684\u5143\u7D20\u5F15\u7528</td><td>HTMLElement</td><td>\u2014</td><td>-</td></tr><tr><td>outside-ignore</td><td>\u963B\u6B62\u64CD\u4F5C\u5F39\u7A97\u5185\u5143\u7D20\u5BFC\u81F4\u5F39\u7A97\u81EA\u52A8\u9690\u85CF</td><td>MaybeElementRef[]</td><td>\u2014</td><td>[]</td></tr><tr><td>tabindex</td><td>Popover \u7EC4\u4EF6\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>\u2014</td><td>-</td></tr><tr><td>trigger-keys</td><td>\u89E6\u53D1\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u540E\uFF0C\u5B9A\u4E49\u663E\u793A\u5F39\u7A97\u7684\u952E\u76D8\u952E\u503C</td><td>Array</td><td>\u2014</td><td><code>[&#39;Enter&#39;,&#39;Space&#39;]</code></td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Popover \u5185\u5D4C HTML \u6587\u672C</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6),ae={setup(_){const s={"../../../examples/popover/basic.vue":U,"../../../examples/popover/effect.vue":J,"../../../examples/popover/keep-visible.vue":Z,"../../../examples/popover/placement.vue":ft,"../../../examples/popover/single.vue":bt,"../../../examples/popover/slot.vue":Rt,"../../../examples/popover/tooltip.vue":Tt,"../../../examples/popover/virtual-trigger.vue":Vt};return(l,o)=>{const c=a("demo-block"),d=a("right-nav");return h(),g(v,null,[n("section",null,[Mt,t(c,{fs:"",demos:m(s),"path-name":"popover/basic","source-code":`<template>\r
  <hl-popover placement="top-start" title="\u6807\u9898" :width="200" trigger="hover" content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002">\r
    <template #reference>\r
      <hl-button class="m-r-md">hover \u6FC0\u6D3B</hl-button>\r
    </template>\r
  </hl-popover>\r
\r
  <hl-popover placement="bottom" title="\u6807\u9898" :width="200" trigger="click" content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002">\r
    <template #reference>\r
      <hl-button class="m-r-md">click \u6FC0\u6D3B</hl-button>\r
    </template>\r
  </hl-popover>\r
\r
  <hl-popover\r
    ref="popover"\r
    placement="right"\r
    title="\u6807\u9898"\r
    :width="200"\r
    trigger="focus"\r
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"\r
  >\r
    <template #reference>\r
      <hl-button class="m-r-md">focus \u6FC0\u6D3B</hl-button>\r
    </template>\r
  </hl-popover>\r
\r
  <hl-popover\r
    placement="bottom"\r
    title="\u6807\u9898"\r
    :width="200"\r
    trigger="contextmenu"\r
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"\r
  >\r
    <template #reference>\r
      <hl-button class="m-r-md">\u53F3\u952E\u6FC0\u6D3B</hl-button>\r
    </template>\r
  </hl-popover>\r
  <hl-popover\r
    :visible="visible"\r
    placement="bottom"\r
    title="Title"\r
    :width="200"\r
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"\r
  >\r
    <template #reference>\r
      <hl-button class="m-r-md" @click="visible = !visible">\u624B\u5DE5\u6FC0\u6D3B</hl-button>\r
    </template>\r
  </hl-popover>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const visible = ref(false)\r
\r
<\/script>\r
`},{default:e(()=>[At]),_:1},8,["demos"]),Ht,t(c,{fs:"",demos:m(s),"path-name":"popover/virtual-trigger","source-code":`<template>\r
  <hl-button\r
    ref="buttonRef"\r
    v-click-outside="onClickOutside"\r
  >\r
    Click me\r
  </hl-button>\r
\r
  <hl-popover\r
    ref="popoverRef"\r
    :virtual-ref="buttonRef"\r
    trigger="click"\r
    title="With title"\r
    virtual-triggering\r
  >\r
    <span> Some content </span>\r
  </hl-popover>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, unref } from 'vue'\r
import { cloneDeep } from 'lodash-unified'\r
import { ClickOutside as vClickOutside } from 'hongluan-ui'\r
\r
const buttonRef = ref()\r
const popoverRef = ref()\r
const onClickOutside = () => {\r
  unref(popoverRef).popperRef?.delayHide?.()\r
}\r
\r
console.log(cloneDeep({ a:1 }))\r
<\/script>\r
`},null,8,["demos"]),Wt,Lt,t(c,{fs:"",demos:m(s),"path-name":"popover/placement","source-code":`<template>\r
  <hl-row align="center middle" gap="var(--lg)">\r
    <hl-col span="col-12" class="display-flex items-right items-bottom">\r
      <hl-group merge indent>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="top-start"\r
          effect="dark"\r
          placement="top-start"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u4E0A\u5DE6</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover class="item" trigger="click" content="top" effect="dark" placement="top">\r
          <template #reference>\r
            <hl-button class="group-item">\u4E0A\u4E2D</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="top-end"\r
          effect="dark"\r
          placement="top-end"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u4E0A\u53F3</hl-button>\r
          </template>\r
        </hl-popover>\r
      </hl-group>\r
    </hl-col>\r
\r
    <hl-col span="col-12" class="display-flex">\r
      <hl-group dir="vertical" merge indent>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="right-start"\r
          effect="dark"\r
          placement="right-start"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u53F3\u4E0A</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover class="item" trigger="click" content="right" effect="dark" placement="right">\r
          <template #reference>\r
            <hl-button class="group-item">\u53F3\u4E2D</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="right-end"\r
          effect="dark"\r
          placement="right-end"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u53F3\u4E0B</hl-button>\r
          </template>\r
        </hl-popover>\r
      </hl-group>\r
    </hl-col>\r
\r
    <hl-col span="col-12" class="display-flex items-right">\r
      <hl-group dir="vertical" merge indent>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="left-start"\r
          effect="dark"\r
          placement="left-start"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u5DE6\u4E0A</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover class="item" trigger="click" content="left" effect="dark" placement="left">\r
          <template #reference>\r
            <hl-button class="group-item">\u5DE6\u4E2D</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="left-end"\r
          effect="dark"\r
          placement="left-end"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u5DE6\u4E0B</hl-button>\r
          </template>\r
        </hl-popover>\r
      </hl-group>\r
    </hl-col>\r
\r
    <hl-col span="col-12" class="display-flex">\r
      <hl-group merge indent>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="bottom-start"\r
          effect="dark"\r
          placement="bottom-start"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u4E0B\u5DE6</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover class="item" trigger="click" content="bottom" effect="dark" placement="bottom">\r
          <template #reference>\r
            <hl-button class="group-item">\u4E0B\u4E2D</hl-button>\r
          </template>\r
        </hl-popover>\r
        <hl-popover\r
          class="item"\r
          trigger="click"\r
          content="bottom-end"\r
          effect="dark"\r
          placement="bottom-end"\r
        >\r
          <template #reference>\r
            <hl-button class="group-item">\u4E0B\u53F3</hl-button>\r
          </template>\r
        </hl-popover>\r
      </hl-group>\r
    </hl-col>\r
  </hl-row>\r
</template>\r
`},{default:e(()=>[It]),_:1},8,["demos"]),Ut,Nt,t(c,{fs:"",demos:m(s),"path-name":"popover/effect","source-code":`<template>\r
  <hl-popover effect="dark" content="Top Center" placement="top">\r
    <template #reference>\r
      <hl-button class="m-r-md">Dark</hl-button>\r
    </template>\r
  </hl-popover>\r
  <hl-popover content="Bottom Center" placement="bottom">\r
    <template #reference>\r
      <hl-button class="m-r-md">Default</hl-button>\r
    </template>\r
  </hl-popover>\r
</template>\r
`},null,8,["demos"]),Gt,Qt,t(c,{fs:"",demos:m(s),"path-name":"popover/tooltip","source-code":`<template>\r
  <hl-popover trigger="hover" content="Top Center" placement="top" tooltip>\r
    <template #reference>\r
      <hl-button class="m-r-md">Light</hl-button>\r
    </template>\r
  </hl-popover>\r
\r
  <hl-popover trigger="hover" effect="dark" content="Top center" placement="top" tooltip>\r
    <template #reference>\r
      <hl-button class="m-r-md">Dark</hl-button>\r
    </template>\r
  </hl-popover>\r
</template>\r
`},null,8,["demos"]),Xt,qt,t(c,{fs:"",demos:m(s),"path-name":"popover/slot","source-code":`<template>\r
  <hl-popover placement="right" :width="400" trigger="click" class="m-r-lg">\r
    <template #reference>\r
      <hl-button class="m-r-md">\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1</hl-button>\r
    </template>\r
    <hl-table :data="gridData" stripe class="compact">\r
      <hl-table-column width="120" property="date" label="\u65E5\u671F" />\r
      <hl-table-column width="100" property="name" label="\u59D3\u540D" />\r
      <hl-table-column property="address" label="\u5730\u5740" />\r
    </hl-table>\r
  </hl-popover>\r
\r
  <hl-popover :visible="visible" placement="top">\r
    <hl-group align="items-top" gap="var(--md)">\r
      <hl-icon type="warning" size="lg" class="no-shrink">\r
        <two-warning />\r
      </hl-icon>\r
      <hl-group dir="vertical" gap="var(--xxs)">\r
        <h5>\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F</h5>\r
        <div>\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002</div>\r
        <hl-group block full align="items-right" class="m-t-md">\r
          <hl-button type="link" size="sm" class="static" @click="visible = false">\u53D6\u6D88</hl-button>\r
          <hl-button type="primary" size="sm" class="static" @click="btnClick">\u786E\u5B9A</hl-button>\r
        </hl-group>\r
      </hl-group>\r
    </hl-group>\r
\r
    <template #reference>\r
      <hl-button @click="visible = true">\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1</hl-button>\r
    </template>\r
  </hl-popover>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { HlMessage } from 'hongluan-ui'\r
import { TwoWarning } from '@hongluan-ui/icons'\r
\r
const visible = ref(false)\r
const gridData = ref([\r
  {\r
    date: '2016-05-02',\r
    name: '\u738B\u5C0F\u864E',\r
    address: '\u4E0A\u6D77\u5E02',\r
  },\r
  {\r
    date: '2016-05-04',\r
    name: '\u738B\u5C0F\u864E',\r
    address: '\u4E0A\u6D77\u5E02',\r
  },\r
  {\r
    date: '2016-05-01',\r
    name: '\u738B\u5C0F\u864E',\r
    address: '\u4E0A\u6D77\u5E02',\r
  },\r
  {\r
    date: '2016-05-03',\r
    name: '\u738B\u5C0F\u864E',\r
    address: '\u4E0A\u6D77\u5E02',\r
  },\r
])\r
\r
const btnClick = () => {\r
  visible.value = false\r
  HlMessage('\u5220\u9664\u6210\u529F')\r
}\r
\r
<\/script>\r
`},{default:e(()=>[Jt]),_:1},8,["demos"]),Kt,Yt,Zt,t(c,{fs:"",demos:m(s),"path-name":"popover/single","source-code":`<template>\r
  <div>\r
    <hl-button\r
      v-for="i in 3"\r
      :key="i"\r
      class="m-r-md"\r
      @mouseover="(e) => (buttonRef = e.currentTarget)"\r
      @click="visible = !visible"\r
    >\r
      Click to open tooltip\r
    </hl-button>\r
  </div>\r
\r
  <hl-popover\r
    ref="tooltipRef"\r
    :visible="visible"\r
    :popper-options="{\r
      modifiers: [\r
        {\r
          name: 'computeStyles',\r
          options: {\r
            adaptive: false,\r
            enabled: false,\r
          },\r
        },\r
      ],\r
    }"\r
    :virtual-ref="buttonRef"\r
    virtual-triggering\r
    trigger="click"\r
    popper-class="singleton-tooltip"\r
  >\r
    <span> Some content </span>\r
  </hl-popover>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
\r
const buttonRef = ref()\r
const tooltipRef = ref()\r
\r
const visible = ref(false)\r
\r
<\/script>\r
\r
`},null,8,["demos"]),te,ee,t(c,{fs:"",demos:m(s),"path-name":"popover/keep-visible","source-code":`<template>\r
  <hl-popover\r
    placement="bottom"\r
    title="\u6807\u9898"\r
    :width="200"\r
    trigger="click"\r
    :outside-ignore="outsideIgnore"\r
  >\r
    <template #reference>\r
      <hl-button class="m-r-md">click \u6FC0\u6D3B</hl-button>\r
    </template>\r
    <hl-select ref="selecRef" v-model="selectVal" class="m-b-md">\r
      <hl-option value="1" label="1" />\r
      <hl-option value="2" label="2" />\r
      <hl-option value="3" label="3" />\r
    </hl-select>\r
    <hl-time-select ref="timeSelecRef" v-model="timeSelectVal" class="m-b-md" />\r
    <hl-date-picker ref="timePickerRef" v-model="timePickerVal" class="m-b-md" />\r
  </hl-popover>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
\r
const selecRef = ref()\r
const timeSelecRef = ref()\r
const timePickerRef = ref()\r
const selectVal = ref('')\r
const timeSelectVal = ref('')\r
const timePickerVal = ref('')\r
\r
const outsideIgnore = computed(() => [\r
  selecRef.value?.popperPaneRef,\r
  timePickerRef.value?.popperPaneRef,\r
  timeSelecRef.value?.popperPaneRef,\r
])\r
<\/script>\r
`},{default:e(()=>[re]),_:1},8,["demos"]),ne]),t(d)],64)}}};export{ae as default};
