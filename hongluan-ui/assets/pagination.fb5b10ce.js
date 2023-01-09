import{I as r,L as o,H as p,P as s,X as l,Q as e,p as z,R as f,W as _,a3 as b,ag as j,V as v,T as t,o as S}from"./vue.8a077a47.js";import{_ as y}from"./index.3e39e2d9.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";import"./hongluan-icons.286a55ba.js";const w={};function V(h,n){const a=r("hl-pagination"),i=r("hl-col"),d=r("hl-row");return o(),p(d,{align:"items-center"},{default:s(()=>[l(i,{span:"lg:col-16",class:"dom-area","data-name":"left"},{default:s(()=>[l(a,{layout:"prev, pager, next",total:50,align:"items-left",block:""})]),_:1}),l(i,{span:"lg:col-16",class:"m-t-xxl dom-area","data-name":"center"},{default:s(()=>[l(a,{layout:"prev, pager, next",total:50,align:"items-center",block:""})]),_:1}),l(i,{span:"lg:col-16",class:"m-t-xxl dom-area","data-name":"right"},{default:s(()=>[l(a,{layout:"prev, pager, next",total:50,align:"items-right",block:""})]),_:1}),l(i,{span:"lg:col-16",class:"m-t-xxl dom-area","data-name":"between"},{default:s(()=>[l(a,{line:"",layout:"prev, pager, next",total:50,align:"items-between",block:""})]),_:1})]),_:1})}var $=y(w,[["render",V]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const O={},C=e("p",null,"\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C",-1),T=e("p",null,"\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C",-1);function M(h,n){const a=r("hl-pagination"),i=r("hl-col"),d=r("hl-row");return o(),p(d,null,{default:s(()=>[l(i,{span:"col-24"},{default:s(()=>[C,l(a,{layout:"prev, pager, next",total:50})]),_:1}),l(i,{span:"col-24",class:"m-t-lg"},{default:s(()=>[T,l(a,{layout:"prev, pager, next",total:1e3})]),_:1})]),_:1})}var E=y(O,[["render",M]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const U={};function A(h,n){const a=r("hl-pagination");return o(),p(a,{block:"",layout:"prev, pager, next",total:50})}var F=y(U,[["render",A]]),q=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const B=e("div",{style:{width:"100%",padding:"0 12px"}},[e("a",null,"\u81EA\u5B9A\u4E49\u5143\u7D20")],-1),D=z({setup(h){const n=f(1),a=f(100),i=c=>{console.log(`\u6BCF\u9875 ${c} \u6761`),a.value=c},d=c=>{console.log(`\u5F53\u524D\u9875: ${c}`),n.value=c};return(c,m)=>{const x=r("hl-pagination"),g=r("hl-col"),k=r("hl-row");return o(),p(k,null,{default:s(()=>[l(g,{span:"col-24",class:"m-t-xxl"},{default:s(()=>[l(x,{"current-page":n.value,"page-sizes":[100,200,300,400],"page-size":a.value,layout:"total, slot, prev, pager, next, sizes, jumper",total:400,align:"items-between",onSizeChange:i,onCurrentChange:d},{default:s(()=>[B]),_:1},8,["current-page","page-size"])]),_:1})]),_:1})}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const N=z({setup(h){const n=f([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),a=f(""),i=f("");return(d,c)=>{const m=r("hl-option"),x=r("hl-select"),g=r("hl-group"),k=r("hl-pagination");return o(),_(b,null,[l(g,{gap:"var(--md)",class:"m-b-md"},{default:s(()=>[l(x,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),clearable:"",placeholder:"\u9009\u62E9\u5206\u9875\u5143\u7D20\u95F4\u9699"},{default:s(()=>[(o(!0),_(b,null,j(n.value,u=>(o(),_(b,null,[u.divider?(o(),p(m,{key:u.value,divider:""})):(o(),p(m,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),l(x,{modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=u=>i.value=u),clearable:"",placeholder:"\u9009\u62E9\u5206\u9875\u6307\u793A\u5668\u95F4\u9699"},{default:s(()=>[(o(!0),_(b,null,j(n.value,u=>(o(),_(b,null,[u.divider?(o(),p(m,{key:u.value,divider:""})):(o(),p(m,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),l(k,{layout:"total, slot, prev, pager, next, sizes, jumper",total:50,gap:a.value,"pager-gap":i.value,block:""},null,8,["gap","pager-gap"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const R={};function W(h,n){const a=r("hl-pagination");return o(),p(a,{line:"",layout:"prev, pager, next",total:50})}var X=y(R,[["render",W]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const I={};function J(h,n){const a=r("hl-pagination");return o(),p(a,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}var K=y(I,[["render",J]]),Y=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const Z={class:"m-b-md"},ee=z({setup(h){const n=f(!1);return(a,i)=>{const d=r("hl-switch"),c=r("hl-pagination");return o(),_("div",null,[e("p",Z,[l(d,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=m=>n.value=m),style:{}},null,8,["modelValue"])]),l(c,{"hide-on-single-page":n.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));const le=z({setup(h){const n=f([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),a=f("");return(i,d)=>{const c=r("hl-option"),m=r("hl-select"),x=r("hl-pagination");return o(),_(b,null,[l(m,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=g=>a.value=g),clearable:"",placeholder:"\u9009\u62E9\u5C3A\u5BF8",class:"m-b-md"},{default:s(()=>[(o(!0),_(b,null,j(n.value,g=>(o(),_(b,null,[g.divider?(o(),p(c,{key:g.value,divider:""})):(o(),p(c,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),l(x,{layout:"total, slot, prev, pager, next, sizes, jumper",total:50,size:a.value,"pager-gap":i.pagerGapValue,block:""},null,8,["size","pager-gap"])],64)}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));const ae=e("h1",null,"Pagination \u5206\u9875",-1),re=e("p",null,"\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002",-1),oe=e("div",null,[e("p",null,[t("\u8BBE\u7F6E"),e("code",null,"layout"),t("\uFF0C\u8868\u793A\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5E03\u5C40\u5143\u7D20\u4F1A\u4F9D\u6B21\u663E\u793A\u3002"),e("code",null,"prev"),t("\u8868\u793A\u4E0A\u4E00\u9875\uFF0C"),e("code",null,"next"),t("\u4E3A\u4E0B\u4E00\u9875\uFF0C"),e("code",null,"pager"),t("\u8868\u793A\u5206\u9875\u6307\u793A\u5668\u7684\u5217\u8868\uFF0C\u9664\u6B64\u4EE5\u5916\u8FD8\u63D0\u4F9B\u4E86"),e("code",null,"jumper"),t("\u548C"),e("code",null,"total"),t("\uFF0C"),e("code",null,"size"),t("\u548C\u7279\u6B8A\u7684\u5E03\u5C40\u7B26\u53F7"),e("code",null,"->"),t("\uFF0C"),e("code",null,"->"),t("\u540E\u7684\u5143\u7D20\u4F1A\u9760\u53F3\u663E\u793A\uFF0C"),e("code",null,"jumper"),t("\u8868\u793A\u8DF3\u9875\u5143\u7D20\uFF0C"),e("code",null,"total"),t("\u8868\u793A\u603B\u6761\u76EE\u6570\uFF0C"),e("code",null,"size"),t("\u7528\u4E8E\u8BBE\u7F6E\u6BCF\u9875\u663E\u793A\u7684\u9875\u7801\u6570\u91CF\u3002")])],-1),de=e("h2",{id:"she-zhi-zui-da-ye-ma-an-niu-shu"},[e("a",{class:"header-anchor",href:"#she-zhi-zui-da-ye-ma-an-niu-shu"}),t(" \u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570")],-1),se=e("p",null,[t("\u901A\u8FC7"),e("code",null,"pager-count"),t("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570\u3002")],-1),ie=e("div",null,[e("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7 7 \u9875\u65F6 Pagination \u4F1A\u6298\u53E0\u591A\u4F59\u7684\u9875\u7801\u6309\u94AE\u3002")],-1),ce=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),t(" \u5C3A\u5BF8\u4FEE\u9970")],-1),ue=e("p",null,[t("\u901A\u8FC7"),e("code",null,"size"),t("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5206\u9875\u7684\u5C3A\u5BF8\u3002")],-1),pe=e("div",null,[e("p",null,[t("\u5B83\u7684\u5C3A\u5BF8\u4E0E"),e("code",null,"button"),t("\u3001"),e("code",null,"input"),t("\u7B49form\u8868\u5355\u5143\u7D20\u7684\u5C3A\u5BF8\u4FDD\u6301\u4E00\u81F4")])],-1),ge=e("h2",{id:"jian-ge"},[e("a",{class:"header-anchor",href:"#jian-ge"}),t(" \u95F4\u9694")],-1),_e=e("p",null,[t("\u901A\u8FC7"),e("code",null,"gap"),t("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5206\u9875\u5143\u7D20\u7684\u95F4\u9694\u3002")],-1),he=e("div",null,[e("p",null,[e("code",null,"pager-gap"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5206\u9875\u6307\u793A\u5668\u76F4\u63A5\u7684\u95F4\u9694")])],-1),me=e("h2",{id:"line-yang-shi"},[e("a",{class:"header-anchor",href:"#line-yang-shi"}),t(" Line \u6837\u5F0F")],-1),ve=e("p",null,"\u5728\u7A7A\u95F4\u6709\u9650\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684\u5C0F\u578B\u5206\u9875\u3002",-1),be=e("h2",{id:"man-kuan-yu-pai-lie-fang-shi"},[e("a",{class:"header-anchor",href:"#man-kuan-yu-pai-lie-fang-shi"}),t(" \u6EE1\u5BBD\u4E0E\u6392\u5217\u65B9\u5F0F")],-1),fe=e("p",null,[t("\u4F7F\u7528 "),e("code",null,"block"),t(" \u5C5E\u6027\u4F1A\u4F7F\u5206\u9875\u7EC4\u4EF6\u53D8\u4E3A\u5757\u7EA7\u6837\u5F0F\u3002")],-1),xe=e("h2",{id:"pai-lie-fang-shi"},[e("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),t(" \u6392\u5217\u65B9\u5F0F")],-1),ye=e("p",null,[t("\u4F7F\u7528 "),e("code",null,"align"),t(" \u5C5E\u6027\u80FD\u591F\u8BBE\u7F6E\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),ze=e("h2",{id:"fu-jia-gong-neng"},[e("a",{class:"header-anchor",href:"#fu-jia-gong-neng"}),t(" \u9644\u52A0\u529F\u80FD")],-1),ke=e("p",null,[t("\u6839\u636E\u4F7F\u7528\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u5143\u7D20\u548C "),e("code",null,"align"),t(" \u5C5E\u6027\u6765\u5E03\u5C40\u4E00\u4E2A\u4E24\u7AEF\u5BF9\u9F50\u7684\u5206\u9875\u7EC4\u4EF6\u3002")],-1),je=e("div",null,[e("p",null,[t("\u6B64\u4F8B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7528\u4F8B\uFF0C\u4F7F\u7528\u4E86"),e("code",null,"size-change"),t("\u548C"),e("code",null,"current-change"),t("\u4E8B\u4EF6\u6765\u5904\u7406\u9875\u7801\u5927\u5C0F\u548C\u5F53\u524D\u9875\u53D8\u52A8\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002"),e("code",null,"page-sizes"),t("\u63A5\u53D7\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u4E3A\u5C55\u793A\u7684\u9009\u62E9\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u7684\u9009\u9879\uFF0C"),e("code",null,"[100, 200, 300, 400]"),t("\u8868\u793A\u56DB\u4E2A\u9009\u9879\uFF0C\u6BCF\u9875\u663E\u793A 100 \u4E2A\uFF0C200 \u4E2A\uFF0C300 \u4E2A\u6216\u8005 400 \u4E2A\u3002")])],-1),Se=e("h2",{id:"dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"},[e("a",{class:"header-anchor",href:"#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"}),t(" \u5F53\u53EA\u6709\u4E00\u9875\u65F6\u9690\u85CF\u5206\u9875")],-1),we=e("p",null,[t("\u5F53\u53EA\u6709\u4E00\u9875\u65F6\uFF0C\u901A\u8FC7\u8BBE\u7F6E "),e("code",null,"hide-on-single-page"),t(" \u5C5E\u6027\u6765\u9690\u85CF\u5206\u9875\u3002")],-1),Ve=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>line</td><td>\u662F\u5426\u4F7F\u7528\u7EBF\u6761\u5206\u9875\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>align</td><td>\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F</td><td>string</td><td><code>left</code>, <code>center</code>, <code>right</code>, <code>around</code>, <code>between</code></td><td>left</td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u5206\u9875\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td><code>sm</code>, <code>md</code>, <code>lg</code></td><td>md</td></tr><tr><td>page-size</td><td>\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A</td><td>number</td><td>\u2014</td><td>10</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E\u5206\u9875\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pager-gap</td><td>\u8BBE\u7F6E\u5206\u9875\u6307\u793A\u5668\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>total</td><td>\u603B\u6761\u76EE\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>page-count</td><td>\u603B\u9875\u6570\uFF0Ctotal \u548C page-count \u8BBE\u7F6E\u4EFB\u610F\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FBE\u5230\u663E\u793A\u9875\u7801\u7684\u529F\u80FD\uFF1B\u5982\u679C\u8981\u652F\u6301 page-sizes \u7684\u66F4\u6539\uFF0C\u5219\u9700\u8981\u4F7F\u7528 total \u5C5E\u6027</td><td>Number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>pager-count</td><td>\u5206\u9875\u6307\u793A\u5668\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0</td><td>number</td><td>\u5927\u4E8E\u7B49\u4E8E 5 \u4E14\u5C0F\u4E8E\u7B49\u4E8E 21 \u7684\u5947\u6570</td><td>7</td></tr><tr><td>current-page</td><td>\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A\u7B26</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>layout</td><td>\u7EC4\u4EF6\u5E03\u5C40\uFF0C\u5B50\u7EC4\u4EF6\u540D\u7528\u9017\u53F7\u5206\u9694</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, total&#39;</td></tr><tr><td>page-sizes</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td><td>number[]</td><td>\u2014</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u4E0B\u62C9\u6846\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prev-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>next-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF</td><td>boolean</td><td>\u2014</td><td>-</td></tr><tr><td>block</td><td>\u5757\u7EA7\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><blockquote class="m-t-md"><p><em><strong>\u7EC4\u4EF6\u73B0\u5728\u4F1A\u68C0\u67E5\u4E00\u4E9B\u4E0D\u5408\u7406\u7684\u7528\u6CD5\uFF0C\u5982\u679C\u53D1\u73B0\u5206\u9875\u5668\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u6838\u5BF9\u662F\u5426\u8FDD\u53CD\u4EE5\u4E0B\u60C5\u5F62\uFF1A</strong></em></p><ul><li>total \u548C page-count \u5FC5\u987B\u4F20\u4E00\u4E2A\uFF0C\u4E0D\u7136\u7EC4\u4EF6\u65E0\u6CD5\u5224\u65AD\u603B\u9875\u6570\uFF1B\u4F18\u5148\u4F7F\u7528 page-count;</li><li>\u5982\u679C\u4F20\u5165\u4E86 current-page \u5FC5\u987B\u76D1\u542C current-page \u53D8\u66F4\u7684\u4E8B\u4EF6\uFF08onUpdate:currentPage\uFF09\uFF1B\u5426\u5219\u5206\u9875\u5207\u6362\u4E0D\u8D77\u4F5C\u7528\uFF1B</li><li>\u5982\u679C\u4F20\u5165\u4E86 page-size\uFF0C\u4E14\u5E03\u5C40\u5305\u542B page-size \u9009\u62E9\u5668\uFF08\u5373 layout \u5305\u542B sizes\uFF09\uFF0C\u5FC5\u987B\u76D1\u542C page-size \u53D8\u66F4\u7684\u4E8B\u4EF6\uFF08onUpdate:pageSize\uFF09\uFF0C\u5426\u5219 page-size \u5207\u6362\u4E0D\u8D77\u4F5C\u7528\uFF1B</li></ul></blockquote><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u6BCF\u9875\u6761\u6570</td></tr><tr><td>current-change</td><td>currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>prev-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>next-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr></tbody></table><blockquote class="m-t-md"><p><em><strong>\u4EE5\u4E0A\u4E8B\u4EF6\u4E0D\u63A8\u8350\u4F7F\u7528\uFF08\u4F46\u7531\u4E8E\u517C\u5BB9\u7684\u539F\u56E0\u4ECD\u7136\u652F\u6301\uFF0C\u5728\u4EE5\u540E\u7684\u7248\u672C\u4E2D\u5C06\u4F1A\u88AB\u5220\u9664\uFF09\uFF1B\u5982\u679C\u8981\u76D1\u542C current-page \u548C page-size \u7684\u6539\u53D8\uFF0C\u4F7F\u7528 v-model \u53CC\u5411\u7ED1\u5B9A\u662F\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u3002</strong></em></p></blockquote><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u9700\u8981\u5728 <code>layout</code> \u4E2D\u5217\u51FA <code>slot</code></td></tr><tr><td>prev-icon</td><td>\u81EA\u5B9A\u4E49prev\u56FE\u6807</td></tr><tr><td>next-icon</td><td>\u81EA\u5B9A\u4E49next\u56FE\u6807</td></tr></tbody></table>',8),Me={setup(h){const n={"../../../examples/pagination/align.vue":P,"../../../examples/pagination/basic.vue":G,"../../../examples/pagination/block.vue":q,"../../../examples/pagination/extra.vue":L,"../../../examples/pagination/gap.vue":Q,"../../../examples/pagination/line.vue":H,"../../../examples/pagination/pager-count.vue":Y,"../../../examples/pagination/single-page.vue":te,"../../../examples/pagination/size.vue":ne};return(a,i)=>{const d=r("demo-block"),c=r("right-nav");return o(),_(b,null,[e("section",null,[ae,re,l(d,{fs:"",demos:v(n),"path-name":"pagination/basic","source-code":`<template>\r
  <hl-row>\r
    <hl-col span="col-24">\r
      <p>\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C</p>\r
      <hl-pagination layout="prev, pager, next" :total="50" />\r
    </hl-col>\r
    <hl-col span="col-24" class="m-t-lg">\r
      <p>\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C</p>\r
      <hl-pagination layout="prev, pager, next" :total="1000" />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
`},{default:s(()=>[oe]),_:1},8,["demos"]),de,se,l(d,{fs:"",demos:v(n),"path-name":"pagination/pager-count","source-code":`<template>\r
  <hl-pagination\r
    :page-size="20"\r
    :pager-count="11"\r
    layout="prev, pager, next"\r
    :total="1000"\r
  />\r
</template>\r
`},{default:s(()=>[ie]),_:1},8,["demos"]),ce,ue,l(d,{fs:"",demos:v(n),"path-name":"pagination/size","source-code":`<template>\r
  <hl-select v-model="value" clearable placeholder="\u9009\u62E9\u5C3A\u5BF8" class="m-b-md">\r
    <template v-for="item in options">\r
      <hl-option v-if="item.divider" :key="item.value" divider />\r
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />\r
    </template>\r
  </hl-select>\r
  <hl-pagination\r
    layout="total, slot, prev, pager, next, sizes, jumper"\r
    :total="50"\r
    :size="value"\r
    :pager-gap="pagerGapValue"\r
    block\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const options = ref([\r
  {\r
    value: 'sm',\r
    label: 'sm',\r
  },\r
  {\r
    value: 'md',\r
    label: 'md',\r
  },\r
  {\r
    value: 'lg',\r
    label: 'lg',\r
  },\r
])\r
const value = ref('')\r
\r
<\/script>\r
`},{default:s(()=>[pe]),_:1},8,["demos"]),ge,_e,l(d,{fs:"",demos:v(n),"path-name":"pagination/gap","source-code":`<template>\r
  <hl-group gap="var(--md)" class="m-b-md">\r
    <hl-select v-model="gapValue" clearable placeholder="\u9009\u62E9\u5206\u9875\u5143\u7D20\u95F4\u9699">\r
      <template v-for="item in options">\r
        <hl-option v-if="item.divider" :key="item.value" divider />\r
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />\r
      </template>\r
    </hl-select>\r
\r
    <hl-select v-model="pagerGapValue" clearable placeholder="\u9009\u62E9\u5206\u9875\u6307\u793A\u5668\u95F4\u9699">\r
      <template v-for="item in options">\r
        <hl-option v-if="item.divider" :key="item.value" divider />\r
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />\r
      </template>\r
    </hl-select>\r
  </hl-group>\r
  <hl-pagination\r
    layout="total, slot, prev, pager, next, sizes, jumper"\r
    :total="50"\r
    :gap="gapValue"\r
    :pager-gap="pagerGapValue"\r
    block\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const options = ref([\r
  {\r
    value: '0',\r
    label: 'none',\r
  },\r
  {\r
    divider: true,\r
  },\r
  {\r
    value: 'var(--sm)',\r
    label: 'var(--sm)',\r
  },\r
  {\r
    value: 'var(--md)',\r
    label: 'var(--md)',\r
  },\r
  {\r
    value: 'var(--lg)',\r
    label: 'var(--lg)',\r
  },\r
  {\r
    value: 'var(--xl)',\r
    label: 'var(--xl)',\r
  },\r
  {\r
    value: 'var(--xxl)',\r
    label: 'var(--xxl)',\r
  },\r
])\r
const gapValue = ref('')\r
const pagerGapValue = ref('')\r
\r
<\/script>\r
`},{default:s(()=>[he]),_:1},8,["demos"]),me,ve,l(d,{fs:"",demos:v(n),"path-name":"pagination/line","source-code":`<template>\r
  <hl-pagination line layout="prev, pager, next" :total="50" />\r
</template>\r
`},null,8,["demos"]),be,fe,l(d,{fs:"",demos:v(n),"path-name":"pagination/block","source-code":`<template>\r
  <hl-pagination block layout="prev, pager, next" :total="50" />\r
</template>\r
`},null,8,["demos"]),xe,ye,l(d,{fs:"",demos:v(n),"path-name":"pagination/align","source-code":`<template>\r
  <hl-row align="items-center">\r
    <hl-col span="lg:col-16" class="dom-area" data-name="left">\r
      <hl-pagination layout="prev, pager, next" :total="50" align="items-left" block />\r
    </hl-col>\r
    <hl-col span="lg:col-16" class="m-t-xxl dom-area" data-name="center">\r
      <hl-pagination layout="prev, pager, next" :total="50" align="items-center" block />\r
    </hl-col>\r
\r
    <hl-col span="lg:col-16" class="m-t-xxl dom-area" data-name="right">\r
      <hl-pagination layout="prev, pager, next" :total="50" align="items-right" block />\r
    </hl-col>\r
\r
    <hl-col span="lg:col-16" class="m-t-xxl dom-area" data-name="between">\r
      <hl-pagination line layout="prev, pager, next" :total="50" align="items-between" block />\r
    </hl-col>\r
  </hl-row>\r
</template>\r
`},null,8,["demos"]),ze,ke,l(d,{fs:"",demos:v(n),"path-name":"pagination/extra","source-code":`<template>\r
  <hl-row>\r
    <hl-col span="col-24" class="m-t-xxl">\r
      <hl-pagination\r
        :current-page="currentPage"\r
        :page-sizes="[100, 200, 300, 400]"\r
        :page-size="pageSize"\r
        layout="total, slot, prev, pager, next, sizes, jumper"\r
        :total="400"\r
        align="items-between"\r
        @size-change="handleSizeChange"\r
        @current-change="handleCurrentChange"\r
      >\r
        <div style="width:100%; padding: 0 12px">\r
          <a>\u81EA\u5B9A\u4E49\u5143\u7D20</a>\r
        </div>\r
      </hl-pagination>\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const currentPage = ref(1)\r
const pageSize = ref(100)\r
\r
const handleSizeChange = val => {\r
  console.log(\`\u6BCF\u9875 \${val} \u6761\`)\r
  pageSize.value = val\r
}\r
const handleCurrentChange = val => {\r
  console.log(\`\u5F53\u524D\u9875: \${val}\`)\r
  currentPage.value = val\r
}\r
<\/script>\r
`},{default:s(()=>[je]),_:1},8,["demos"]),Se,we,l(d,{fs:"",demos:v(n),"path-name":"pagination/single-page","source-code":`<template>\r
  <div>\r
    <p class="m-b-md">\r
      <hl-switch v-model="value" style="" />\r
    </p>\r
    <hl-pagination\r
      :hide-on-single-page="value"\r
      :total="5"\r
      layout="prev, pager, next"\r
    />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
\r
<\/script>\r
`},null,8,["demos"]),Ve]),l(c)],64)}}};export{Me as default};
