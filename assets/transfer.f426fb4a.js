import{p as $,R as c,I as u,L as b,H as x,P as d,X as l,Q as t,U as V,V as _,T as e,W as E,a3 as w,o as z}from"./vue.8a077a47.js";import{F as R,c as O}from"./hongluan-icons.286a55ba.js";const M=$({setup(v){const h=c((()=>{const r=[];for(let n=1;n<=15;n++)r.push({key:n,label:`\u5907\u9009\u9879 ${n}`,disabled:n%4===0});return r})()),a=c([1,4]);return(r,n)=>{const s=u("hl-transfer");return b(),x(s,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),data:h.value},null,8,["modelValue","data"])}}});var P=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const q=$({setup(v){const h=c((()=>{const n=[],s=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733","\u5357\u4EAC","\u897F\u5B89","\u6210\u90FD"],i=["shanghai","beijing","guangzhou","shenzhen","nanjing","xian","chengdu"];return s.forEach((k,y)=>{n.push({label:k,key:y,spell:i[y]})}),n})()),a=c([]),r=(n,s)=>s.spell.indexOf(n)>-1;return(n,s)=>{const i=u("hl-transfer");return b(),x(i,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=k=>a.value=k),filterable:"","filter-method":r,"filter-props":{maxlength:10},"filter-placeholder":"\u8BF7\u8F93\u5165\u57CE\u5E02\u62FC\u97F3",data:h.value},null,8,["modelValue","data"])}}});var A=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const L=$({setup(v){const h=c((()=>{const r=[];for(let n=1;n<=15;n++)r.push({value:n,desc:`\u5907\u9009\u9879 ${n}`,disabled:n%4===0});return r})()),a=c([]);return(r,n)=>{const s=u("hl-transfer");return b(),x(s,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),props:{key:"value",label:"desc"},data:h.value},null,8,["modelValue","data"])}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const B=$({setup(v){const h=c((()=>{const r=[];for(let n=1;n<=15;n++)r.push({key:n,label:`\u5907\u9009\u9879 ${n}`,disabled:n%4===0});return r})()),a=c([1,4]);return(r,n)=>{const s=u("hl-transfer");return b(),x(s,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=i=>a.value=i),"left-default-checked":[1,4],titles:["Source","Target"],data:h.value,"show-buttons":!1,format:{noChecked:"${total}",hasChecked:"${total}"}},null,8,["modelValue","data"])}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const Q=t("p",null,"\u4F7F\u7528 render-content \u81EA\u5B9A\u4E49\u6570\u636E\u9879",-1),X=e("\u64CD\u4F5C"),K=e("\u64CD\u4F5C"),W=t("p",{class:"m-t-lg"},"\u4F7F\u7528 scoped-slot \u81EA\u5B9A\u4E49\u6570\u636E\u9879",-1),H=t("span",null,"\u59D3\u540D",-1),J=t("div",{style:{display:"none"}},null,-1),N=$({setup(v){const h=c((()=>{const p=[];for(let o=1;o<=15;o++)p.push({key:o,label:`\u5907\u9009\u9879 ${o}`,disabled:o%4===0});return p})()),a=c([1]),r=c([1]),n=c(null),s=(p,o)=>p("span",null,o.key," - ",o.label),i=()=>{n.value.addToRight()},k=()=>{n.value.addToLeft()},y=(p,o,m)=>{console.log(p,o,m)};return(p,o)=>{const m=u("hl-button"),C=u("hl-transfer"),D=u("hl-col"),j=u("hl-thumb"),T=u("hl-icon"),F=u("hl-group"),S=u("hl-row");return b(),x(S,null,{default:d(()=>[Q,l(D,{span:"md:col-24"},{default:d(()=>[l(C,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=g=>a.value=g),block:"",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":s,titles:["Source","Target"],"button-texts":["\u5230\u5DE6\u8FB9","\u5230\u53F3\u8FB9"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:h.value,onChange:y},{"left-footer":d(()=>[l(m,null,{default:d(()=>[X]),_:1})]),"right-footer":d(()=>[l(m,null,{default:d(()=>[K]),_:1})]),_:1},8,["modelValue","data"])]),_:1}),W,l(D,{span:"md:col-24"},{default:d(()=>[l(C,{ref_key:"transferRef",ref:n,modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=g=>r.value=g),block:"",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:h.value,onChange:y},{default:d(({option:g})=>[l(j,{round:"",type:"primary",size:"xs"},{default:d(()=>[H]),_:1}),t("span",null,V(g.key)+" - "+V(g.label),1)]),"left-footer":d(()=>[l(F,{full:"",align:"items-left"},{default:d(()=>[l(m,{equal:"","no-fill":"",onClick:i},{icon:d(()=>[l(T,null,{default:d(()=>[l(_(R))]),_:1})]),_:1})]),_:1})]),"right-footer":d(()=>[l(m,{type:"danger",equal:"","no-fill":"",onClick:k},{icon:d(()=>[l(T,null,{default:d(()=>[l(_(O))]),_:1})]),_:1})]),buttons:d(()=>[J]),_:1},8,["modelValue","data"])]),_:1})]),_:1})}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const Y=t("h1",null,"Transfer \u7A7F\u68AD\u6846",-1),Z=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),e(" \u57FA\u7840\u7528\u6CD5")],-1),tt=t("div",null,[t("p",null,[e("Transfer \u7684\u6570\u636E\u901A\u8FC7 "),t("code",null,"data"),e(" \u5C5E\u6027\u4F20\u5165\u3002\u6570\u636E\u9700\u8981\u662F\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\uFF1A"),t("code",null,"key"),e(" \u4E3A\u6570\u636E\u7684\u552F\u4E00\u6027\u6807\u8BC6\uFF0C"),t("code",null,"label"),e(" \u4E3A\u663E\u793A\u6587\u672C\uFF0C"),t("code",null,"disabled"),e(" \u8868\u793A\u8BE5\u9879\u6570\u636E\u662F\u5426\u7981\u6B62\u8F6C\u79FB\u3002\u76EE\u6807\u5217\u8868\u4E2D\u7684\u6570\u636E\u9879\u4F1A\u540C\u6B65\u5230\u7ED1\u5B9A\u81F3 "),t("code",null,"v-model"),e(" \u7684\u53D8\u91CF\uFF0C\u503C\u4E3A\u6570\u636E\u9879\u7684 "),t("code",null,"key"),e(" \u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u5F53\u7136\uFF0C\u5982\u679C\u5E0C\u671B\u5728\u521D\u59CB\u72B6\u6001\u65F6\u76EE\u6807\u5217\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u53EF\u4EE5\u50CF\u672C\u4F8B\u4E00\u6837\u4E3A "),t("code",null,"v-model"),e(" \u7ED1\u5B9A\u7684\u53D8\u91CF\u8D4B\u4E88\u4E00\u4E2A\u521D\u59CB\u503C\u3002")])],-1),et=t("h2",{id:"qie-huan-dan-xuan-mo-shi"},[t("a",{class:"header-anchor",href:"#qie-huan-dan-xuan-mo-shi"}),e(" \u5207\u6362\u5355\u9009\u6A21\u5F0F")],-1),nt=t("div",null,[t("p",null,[e("\u5F53"),t("code",null,"show-buttons"),e("\u8BBE\u7F6E\u4E3A false \u65F6\uFF0C\u5DE6\u53F3\u4FA7\u9762\u677F\u4F1A\u53D8\u6210\u5355\u51FB\u9009\u62E9\u6A21\u5F0F\u5E76\u4E14\u5DE6\u53F3\u4FA7\u9ED8\u8BA4\u9009\u4E2D\u9879\u4E0D\u518D\u6709\u6548\u3002")])],-1),rt=t("h2",{id:"ke-sou-suo"},[t("a",{class:"header-anchor",href:"#ke-sou-suo"}),e(" \u53EF\u641C\u7D22")],-1),dt=t("p",null,"\u5728\u6570\u636E\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u641C\u7D22\u548C\u8FC7\u6EE4\u3002",-1),lt=t("div",null,[t("p",null,[e("\u8BBE\u7F6E "),t("code",null,"filterable"),e(" \u4E3A "),t("code",null,"true"),e(" \u5373\u53EF\u5F00\u542F\u641C\u7D22\u6A21\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u82E5\u6570\u636E\u9879\u7684 "),t("code",null,"label"),e(" \u5C5E\u6027\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\uFF0C\u5219\u4F1A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"filter-method"),e(" \u5B9A\u4E49\u81EA\u5DF1\u7684\u641C\u7D22\u903B\u8F91\u3002"),t("code",null,"filter-method"),e(" \u63A5\u6536\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5F53\u641C\u7D22\u5173\u952E\u5B57\u53D8\u5316\u65F6\uFF0C\u4F1A\u5C06\u5F53\u524D\u7684\u5173\u952E\u5B57\u548C\u6BCF\u4E2A\u6570\u636E\u9879\u4F20\u7ED9\u8BE5\u65B9\u6CD5\u3002\u82E5\u65B9\u6CD5\u8FD4\u56DE "),t("code",null,"true"),e("\uFF0C\u5219\u4F1A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u5BF9\u5E94\u7684\u6570\u636E\u9879\u3002")])],-1),at=t("h2",{id:"ke-zi-ding-yi"},[t("a",{class:"header-anchor",href:"#ke-zi-ding-yi"}),e(" \u53EF\u81EA\u5B9A\u4E49")],-1),ot=t("p",null,"\u53EF\u4EE5\u5BF9\u5217\u8868\u6807\u9898\u6587\u6848\u3001\u6309\u94AE\u6587\u6848\u3001\u6570\u636E\u9879\u7684\u6E32\u67D3\u51FD\u6570\u3001\u5217\u8868\u5E95\u90E8\u7684\u52FE\u9009\u72B6\u6001\u6587\u6848\u3001\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9\u533A\u7B49\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002",-1),st=t("div",null,[t("p",null,[e("\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"titles"),e("\u3001"),t("code",null,"button-texts"),e("\u3001"),t("code",null,"render-content"),e(" \u548C "),t("code",null,"format"),e(" \u5C5E\u6027\u5206\u522B\u5BF9\u5217\u8868\u6807\u9898\u6587\u6848\u3001\u6309\u94AE\u6587\u6848\u3001\u6570\u636E\u9879\u7684\u6E32\u67D3\u51FD\u6570\u548C\u5217\u8868\u9876\u90E8\u7684\u52FE\u9009\u72B6\u6001\u6587\u6848\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002\u6570\u636E\u9879\u7684\u6E32\u67D3\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"scoped-slot"),e(" \u8FDB\u884C\u81EA\u5B9A\u4E49\u3002\u5BF9\u4E8E\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9\u533A\uFF0C\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5177\u540D slot\uFF1A"),t("code",null,"left-footer"),e(" \u548C "),t("code",null,"right-footer"),e("\u3002\u6B64\u5916\uFF0C\u5982\u679C\u5E0C\u671B\u67D0\u4E9B\u6570\u636E\u9879\u5728\u521D\u59CB\u5316\u65F6\u5C31\u88AB\u52FE\u9009\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"left-default-checked"),e(" \u548C "),t("code",null,"right-default-checked"),e(" \u5C5E\u6027\u3002\u6700\u540E\uFF0C\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86 "),t("code",null,"change"),e(" \u4E8B\u4EF6\u7684\u7528\u6CD5\u3002\u6CE8\u610F\uFF1A\u7531\u4E8E jsfiddle \u4E0D\u652F\u6301 JSX \u8BED\u6CD5\uFF0C\u6240\u4EE5\u4F7F\u7528 "),t("code",null,"render-content"),e(" \u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u4F8B\u5B50\u5728 jsfiddle \u4E2D\u65E0\u6CD5\u8FD0\u884C\u3002\u4F46\u662F\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u53EA\u8981\u6B63\u786E\u5730\u914D\u7F6E\u4E86\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002")])],-1),ut=t("h2",{id:"shu-ju-xiang-shu-xing-bie-ming"},[t("a",{class:"header-anchor",href:"#shu-ju-xiang-shu-xing-bie-ming"}),e(" \u6570\u636E\u9879\u5C5E\u6027\u522B\u540D")],-1),ct=t("p",null,[e("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTransfer \u4EC5\u80FD\u8BC6\u522B\u6570\u636E\u9879\u4E2D\u7684 "),t("code",null,"key"),e("\u3001"),t("code",null,"label"),e(" \u548C "),t("code",null,"disabled"),e(" \u5B57\u6BB5\u3002\u5982\u679C\u4F60\u7684\u6570\u636E\u7684\u5B57\u6BB5\u540D\u4E0D\u540C\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"props"),e(" \u5C5E\u6027\u4E3A\u5B83\u4EEC\u8BBE\u7F6E\u522B\u540D\u3002")],-1),ht=t("div",null,[t("p",null,[e("\u672C\u4F8B\u4E2D\u7684\u6570\u636E\u6E90\u6CA1\u6709 "),t("code",null,"key"),e(" \u548C "),t("code",null,"label"),e(" \u5B57\u6BB5\uFF0C\u5728\u529F\u80FD\u4E0A\u4E0E\u5B83\u4EEC\u76F8\u540C\u7684\u5B57\u6BB5\u540D\u4E3A "),t("code",null,"value"),e(" \u548C "),t("code",null,"desc"),e("\u3002\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528"),t("code",null,"props"),e(" \u5C5E\u6027\u4E3A "),t("code",null,"key"),e(" \u548C "),t("code",null,"label"),e(" \u8BBE\u7F6E\u522B\u540D\u3002")])],-1),it=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>data</td><td>Transfer \u7684\u6570\u636E\u6E90</td><td>array[{ key, label, disabled }]</td><td>\u2014</td><td>[]</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filter-placeholder</td><td>\u641C\u7D22\u6846\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9</td></tr><tr><td>filter-props</td><td>\u641C\u7D22\u6846\u5C5E\u6027</td><td>object</td><td>\u2014</td><td>\u53C2\u89C1Input\u7EC4\u4EF6\u5C5E\u6027</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-method</td><td>\u5355\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u52A8\u5168\u90E8\u65F6\u7684\u786E\u8BA4\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A left/right\uFF0C\u8FD4\u56DE\u503C\u662F Promise</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>target-order</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565\uFF1A\u82E5\u4E3A <code>original</code>\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A <code>push</code>\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A <code>unshift</code>\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898</td><td>array</td><td>\u2014</td><td>[&#39;\u5217\u8868 1&#39;, &#39;\u5217\u8868 2&#39;]</td></tr><tr><td>button-texts</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>render-content</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\u6570</td><td>function(h, option)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format</td><td>\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848</td><td>object{noChecked, hasChecked}</td><td>\u2014</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D</td><td>object{key, label, disabled}</td><td>\u2014</td><td>\u2014</td></tr><tr><td>left-default-checked</td><td>\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>right-default-checked</td><td>\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>show-buttons</td><td>\u662F\u5426\u663E\u793A\u4E2D\u95F4\u64CD\u4F5C\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>gap</td><td>\u7A7F\u68AD\u6846\u9762\u677F\u4E4B\u95F4\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>list-gap</td><td>\u9009\u9879\u5361\u4E4B\u95F4\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>item-gap</td><td>\u9009\u9879\u5361\u5185\u90E8\u5143\u7D20\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>validate-event</td><td>\u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { option }</td></tr><tr><td>left-footer</td><td>\u5DE6\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>right-footer</td><td>\u53F3\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>buttons</td><td>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u64CD\u4F5C\u6309\u94AE\u533A\u57DF</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearQuery</td><td>\u6E05\u7A7A\u67D0\u4E2A\u9762\u677F\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td>&#39;left&#39; / &#39;right&#39;\uFF0C\u6307\u5B9A\u9700\u8981\u6E05\u7A7A\u7684\u9762\u677F</td></tr><tr><td>addToLeft</td><td>\u628A\u53F3\u4FA7\u9009\u4E2D\u9009\u9879\u6DFB\u52A0\u5230\u5DE6\u4FA7</td><td>-</td></tr><tr><td>addToRight</td><td>\u628A\u5DE6\u4FA7\u9009\u4E2D\u9009\u9879\u6DFB\u52A0\u5230\u53F3\u4FA7</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C\u3001\u6570\u636E\u79FB\u52A8\u7684\u65B9\u5411\uFF08&#39;left&#39; / &#39;right&#39;\uFF09\u3001\u53D1\u751F\u79FB\u52A8\u7684\u6570\u636E key \u6570\u7EC4</td></tr><tr><td>left-check-change</td><td>\u5DE6\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4</td></tr><tr><td>right-check-change</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4</td></tr></tbody></table>',8),_t={setup(v){const f={"../../../examples/transfer/basic.vue":P,"../../../examples/transfer/filterable.vue":A,"../../../examples/transfer/props.vue":U,"../../../examples/transfer/show-buttons.vue":I,"../../../examples/transfer/slot.vue":G};return(h,a)=>{const r=u("demo-block"),n=u("right-nav");return b(),E(w,null,[t("section",null,[Y,Z,l(r,{fs:"",demos:_(f),"path-name":"transfer/basic","source-code":`<template>\r
  <hl-transfer v-model="value" :data="data" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const generateData = () => {\r
  const data = []\r
  for (let i = 1; i <= 15; i++) {\r
    data.push({\r
      key: i,\r
      label: \`\u5907\u9009\u9879 \${i}\`,\r
      disabled: i % 4 === 0,\r
    })\r
  }\r
  return data\r
}\r
const data = ref(generateData())\r
const value = ref([1, 4])\r
\r
<\/script>\r
`},{default:d(()=>[tt]),_:1},8,["demos"]),et,l(r,{fs:"",demos:_(f),"path-name":"transfer/show-buttons","source-code":`<template>\r
  <hl-transfer\r
    v-model="value"\r
    :left-default-checked="[1,4]"\r
    :titles="['Source', 'Target']"\r
    :data="data"\r
    :show-buttons="false"\r
    :format="{\r
      noChecked: '\${total}',\r
      hasChecked: '\${total}'\r
    }"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const generateData = () => {\r
  const data = []\r
  for (let i = 1; i <= 15; i++) {\r
    data.push({\r
      key: i,\r
      label: \`\u5907\u9009\u9879 \${i}\`,\r
      disabled: i % 4 === 0,\r
    })\r
  }\r
  return data\r
}\r
const data = ref(generateData())\r
const value = ref([1, 4])\r
<\/script>\r
`},{default:d(()=>[nt]),_:1},8,["demos"]),rt,dt,l(r,{fs:"",demos:_(f),"path-name":"transfer/filterable","source-code":`<template>\r
  <hl-transfer\r
    v-model="value"\r
    filterable\r
    :filter-method="filterMethod"\r
    :filter-props="{ maxlength: 10 }"\r
    filter-placeholder="\u8BF7\u8F93\u5165\u57CE\u5E02\u62FC\u97F3"\r
    :data="data"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const generateData = () => {\r
  const data = []\r
  const cities = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733', '\u5357\u4EAC', '\u897F\u5B89', '\u6210\u90FD']\r
  const spell = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']\r
  cities.forEach((city, index) => {\r
    data.push({\r
      label: city,\r
      key: index,\r
      spell: spell[index],\r
    })\r
  })\r
  return data\r
}\r
const data = ref(generateData())\r
const value = ref([])\r
const filterMethod = (query, item) => {\r
  return item.spell.indexOf(query) > -1\r
}\r
\r
<\/script>\r
`},{default:d(()=>[lt]),_:1},8,["demos"]),at,ot,l(r,{fs:"",demos:_(f),"path-name":"transfer/slot","source-code":`<template>\r
  <hl-row>\r
    <p>\u4F7F\u7528 render-content \u81EA\u5B9A\u4E49\u6570\u636E\u9879</p>\r
    <hl-col span="md:col-24">\r
      <hl-transfer\r
        v-model="leftValue"\r
        block\r
        filterable\r
        :left-default-checked="[2, 3]"\r
        :right-default-checked="[1]"\r
        :render-content="renderFunc"\r
        :titles="['Source', 'Target']"\r
        :button-texts="['\u5230\u5DE6\u8FB9', '\u5230\u53F3\u8FB9']"\r
        :format="{\r
          noChecked: '\${total}',\r
          hasChecked: '\${checked}/\${total}'\r
        }"\r
        :data="data"\r
        @change="handleChange"\r
      >\r
        <template #left-footer>\r
          <hl-button>\u64CD\u4F5C</hl-button>\r
        </template>\r
        <template #right-footer>\r
          <hl-button>\u64CD\u4F5C</hl-button>\r
        </template>\r
      </hl-transfer>\r
    </hl-col>\r
    <p class="m-t-lg">\u4F7F\u7528 scoped-slot \u81EA\u5B9A\u4E49\u6570\u636E\u9879</p>\r
    <hl-col span="md:col-24">\r
      <hl-transfer\r
        ref="transferRef"\r
        v-model="rightValue"\r
        block\r
        filterable\r
        :left-default-checked="[2, 3]"\r
        :right-default-checked="[1]"\r
        :titles="['Source', 'Target']"\r
        :format="{\r
          noChecked: '\${total}',\r
          hasChecked: '\${checked}/\${total}'\r
        }"\r
        :data="data"\r
        @change="handleChange"\r
      >\r
        <template #default="{option}">\r
          <hl-thumb round type="primary" size="xs">\r
            <span>\u59D3\u540D</span>\r
          </hl-thumb>\r
          <span>{{ option.key }} - {{ option.label }}</span>\r
        </template>\r
        <template #left-footer>\r
          <hl-group full align="items-left">\r
            <hl-button equal no-fill @click="addToRight">\r
              <template #icon>\r
                <hl-icon>\r
                  <two-folder-in />\r
                </hl-icon>\r
              </template>\r
            </hl-button>\r
          </hl-group>\r
        </template>\r
        <template #right-footer>\r
          <hl-button type="danger" equal no-fill @click="addToLeft">\r
            <template #icon>\r
              <hl-icon>\r
                <two-delete />\r
              </hl-icon>\r
            </template>\r
          </hl-button>\r
        </template>\r
        <template #buttons>\r
          <div style="display: none"></div>\r
        </template>\r
      </hl-transfer>\r
    </hl-col>\r
  </hl-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { TwoFolderIn, TwoDelete } from '@hongluan-ui/icons'\r
\r
\r
const generateData = () => {\r
  const data = []\r
  for (let i = 1; i <= 15; i++) {\r
    data.push({\r
      key: i,\r
      label: \`\u5907\u9009\u9879 \${i}\`,\r
      disabled: i % 4 === 0,\r
    })\r
  }\r
  return data\r
}\r
const data = ref(generateData())\r
const leftValue = ref([1])\r
const rightValue = ref([1])\r
const transferRef = ref(null)\r
\r
const renderFunc = (h, option) => {\r
  return h('span', null, option.key, ' - ', option.label)\r
}\r
const addToRight = () => {\r
  transferRef.value.addToRight()\r
}\r
const addToLeft = () => {\r
  transferRef.value.addToLeft()\r
}\r
const handleChange = (value, direction, movedKeys) => {\r
  console.log(value, direction, movedKeys)\r
}\r
\r
\r
<\/script>\r
\r
`},{default:d(()=>[st]),_:1},8,["demos"]),ut,ct,l(r,{fs:"",demos:_(f),"path-name":"transfer/props","source-code":`<template>\r
  <hl-transfer\r
    v-model="value"\r
    :props="{\r
      key: 'value',\r
      label: 'desc'\r
    }"\r
    :data="data"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const generateData = () => {\r
  const data = []\r
  for (let i = 1; i <= 15; i++) {\r
    data.push({\r
      value: i,\r
      desc: \`\u5907\u9009\u9879 \${i}\`,\r
      disabled: i % 4 === 0,\r
    })\r
  }\r
  return data\r
}\r
const data = ref(generateData())\r
const value = ref([])\r
\r
<\/script>\r
`},{default:d(()=>[ht]),_:1},8,["demos"]),it]),l(n)],64)}}};export{_t as default};
