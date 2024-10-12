import{p as $,R as h,H as c,L as b,F as x,P as d,X as a,Q as t,T as V,V as m,S as e,W as E,a1 as w,o as z}from"./vue.85e091e9.js";import{F as R,c as M}from"./hongluan-icons.6cddbf05.js";const q=$({setup(v){const o=h((()=>{const l=[];for(let n=1;n<=15;n++)l.push({key:n,label:`\u5907\u9009\u9879 ${n}`,disabled:n%4===0});return l})()),s=h([1,4]);return(l,n)=>{const r=c("hl-transfer");return b(),x(r,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=i=>s.value=i),data:o.value},null,8,["modelValue","data"])}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const L=$({setup(v){const o=h((()=>{const n=[],r=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733","\u5357\u4EAC","\u897F\u5B89","\u6210\u90FD"],i=["shanghai","beijing","guangzhou","shenzhen","nanjing","xian","chengdu"];return r.forEach((k,y)=>{n.push({label:k,key:y,spell:i[y]})}),n})()),s=h([]),l=(n,r)=>r.spell.indexOf(n)>-1;return(n,r)=>{const i=c("hl-transfer");return b(),x(i,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=k=>s.value=k),filterable:"","filter-method":l,"filter-props":{maxlength:10},"filter-placeholder":"\u8BF7\u8F93\u5165\u57CE\u5E02\u62FC\u97F3",data:o.value},null,8,["modelValue","data"])}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const B=$({setup(v){const o=h((()=>{const l=[];for(let n=1;n<=15;n++)l.push({value:n,desc:`\u5907\u9009\u9879 ${n}`,disabled:n%4===0});return l})()),s=h([]);return(l,n)=>{const r=c("hl-transfer");return b(),x(r,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=i=>s.value=i),props:{key:"value",label:"desc"},data:o.value},null,8,["modelValue","data"])}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const I=$({setup(v){const o=h((()=>{const l=[];for(let n=1;n<=15;n++)l.push({key:n,label:`\u5907\u9009\u9879 ${n}`,disabled:n%4===0});return l})()),s=h([1,4]);return(l,n)=>{const r=c("hl-transfer");return b(),x(r,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=i=>s.value=i),"left-default-checked":[1,4],titles:["Source","Target"],data:o.value,"show-buttons":!1,format:{noChecked:"${total}",hasChecked:"${total}"}},null,8,["modelValue","data"])}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const Q=t("p",null,"\u4F7F\u7528 render-content \u81EA\u5B9A\u4E49\u6570\u636E\u9879",-1),X=e("\u64CD\u4F5C"),K=e("\u64CD\u4F5C"),W=t("p",{class:"m-t-lg"},"\u4F7F\u7528 scoped-slot \u81EA\u5B9A\u4E49\u6570\u636E\u9879",-1),H=t("span",null,"\u59D3\u540D",-1),J=t("div",{style:{display:"none"}},null,-1),N=$({setup(v){const o=h((()=>{const p=[];for(let u=1;u<=15;u++)p.push({key:u,label:`\u5907\u9009\u9879 ${u}`,disabled:u%4===0});return p})()),s=h([1]),l=h([1]),n=h(null),r=(p,u)=>p("span",null,u.key," - ",u.label),i=()=>{n.value.addToRight()},k=()=>{n.value.addToLeft()},y=(p,u,_)=>{console.log(p,u,_)};return(p,u)=>{const _=c("hl-button"),C=c("hl-transfer"),D=c("hl-col"),F=c("hl-thumb"),T=c("hl-icon"),S=c("hl-group"),j=c("hl-row");return b(),x(j,null,{default:d(()=>[Q,a(D,{span:"md:col-24"},{default:d(()=>[a(C,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=g=>s.value=g),block:"",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":r,titles:["Source","Target"],"button-texts":["\u5230\u5DE6\u8FB9","\u5230\u53F3\u8FB9"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:o.value,onChange:y},{"left-footer":d(()=>[a(_,null,{default:d(()=>[X]),_:1})]),"right-footer":d(()=>[a(_,null,{default:d(()=>[K]),_:1})]),_:1},8,["modelValue","data"])]),_:1}),W,a(D,{span:"md:col-24"},{default:d(()=>[a(C,{ref_key:"transferRef",ref:n,modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=g=>l.value=g),block:"",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:o.value,onChange:y},{default:d(({option:g})=>[a(F,{round:"",type:"primary",size:"xs"},{default:d(()=>[H]),_:1}),t("span",null,V(g.key)+" - "+V(g.label),1)]),"left-footer":d(()=>[a(S,{full:"",align:"items-left"},{default:d(()=>[a(_,{equal:"","no-fill":"",onClick:i},{icon:d(()=>[a(T,null,{default:d(()=>[a(m(R))]),_:1})]),_:1})]),_:1})]),"right-footer":d(()=>[a(_,{type:"danger",equal:"","no-fill":"",onClick:k},{icon:d(()=>[a(T,null,{default:d(()=>[a(m(M))]),_:1})]),_:1})]),buttons:d(()=>[J]),_:1},8,["modelValue","data"])]),_:1})]),_:1})}}});var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const Y=t("h1",null,"Transfer \u7A7F\u68AD\u6846",-1),Z=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),e(" \u57FA\u7840\u7528\u6CD5")],-1),tt=t("div",null,[t("p",null,[e("Transfer \u7684\u6570\u636E\u901A\u8FC7 "),t("code",null,"data"),e(" \u5C5E\u6027\u4F20\u5165\u3002\u6570\u636E\u9700\u8981\u662F\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\uFF1A"),t("code",null,"key"),e(" \u4E3A\u6570\u636E\u7684\u552F\u4E00\u6027\u6807\u8BC6\uFF0C"),t("code",null,"label"),e(" \u4E3A\u663E\u793A\u6587\u672C\uFF0C"),t("code",null,"disabled"),e(" \u8868\u793A\u8BE5\u9879\u6570\u636E\u662F\u5426\u7981\u6B62\u8F6C\u79FB\u3002\u76EE\u6807\u5217\u8868\u4E2D\u7684\u6570\u636E\u9879\u4F1A\u540C\u6B65\u5230\u7ED1\u5B9A\u81F3 "),t("code",null,"v-model"),e(" \u7684\u53D8\u91CF\uFF0C\u503C\u4E3A\u6570\u636E\u9879\u7684 "),t("code",null,"key"),e(" \u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u5F53\u7136\uFF0C\u5982\u679C\u5E0C\u671B\u5728\u521D\u59CB\u72B6\u6001\u65F6\u76EE\u6807\u5217\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u53EF\u4EE5\u50CF\u672C\u4F8B\u4E00\u6837\u4E3A "),t("code",null,"v-model"),e(" \u7ED1\u5B9A\u7684\u53D8\u91CF\u8D4B\u4E88\u4E00\u4E2A\u521D\u59CB\u503C\u3002")])],-1),et=t("h2",{id:"qie-huan-dan-xuan-mo-shi"},[t("a",{class:"header-anchor",href:"#qie-huan-dan-xuan-mo-shi"}),e(" \u5207\u6362\u5355\u9009\u6A21\u5F0F")],-1),nt=t("div",null,[t("p",null,[e("\u5F53"),t("code",null,"show-buttons"),e("\u8BBE\u7F6E\u4E3A false \u65F6\uFF0C\u5DE6\u53F3\u4FA7\u9762\u677F\u4F1A\u53D8\u6210\u5355\u51FB\u9009\u62E9\u6A21\u5F0F\u5E76\u4E14\u5DE6\u53F3\u4FA7\u9ED8\u8BA4\u9009\u4E2D\u9879\u4E0D\u518D\u6709\u6548\u3002")])],-1),dt=t("h2",{id:"ke-sou-suo"},[t("a",{class:"header-anchor",href:"#ke-sou-suo"}),e(" \u53EF\u641C\u7D22")],-1),at=t("p",null,"\u5728\u6570\u636E\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u641C\u7D22\u548C\u8FC7\u6EE4\u3002",-1),lt=t("div",null,[t("p",null,[e("\u8BBE\u7F6E "),t("code",null,"filterable"),e(" \u4E3A "),t("code",null,"true"),e(" \u5373\u53EF\u5F00\u542F\u641C\u7D22\u6A21\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u82E5\u6570\u636E\u9879\u7684 "),t("code",null,"label"),e(" \u5C5E\u6027\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\uFF0C\u5219\u4F1A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"filter-method"),e(" \u5B9A\u4E49\u81EA\u5DF1\u7684\u641C\u7D22\u903B\u8F91\u3002"),t("code",null,"filter-method"),e(" \u63A5\u6536\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5F53\u641C\u7D22\u5173\u952E\u5B57\u53D8\u5316\u65F6\uFF0C\u4F1A\u5C06\u5F53\u524D\u7684\u5173\u952E\u5B57\u548C\u6BCF\u4E2A\u6570\u636E\u9879\u4F20\u7ED9\u8BE5\u65B9\u6CD5\u3002\u82E5\u65B9\u6CD5\u8FD4\u56DE "),t("code",null,"true"),e("\uFF0C\u5219\u4F1A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u5BF9\u5E94\u7684\u6570\u636E\u9879\u3002")])],-1),ot=t("h2",{id:"ke-zi-ding-yi"},[t("a",{class:"header-anchor",href:"#ke-zi-ding-yi"}),e(" \u53EF\u81EA\u5B9A\u4E49")],-1),rt=t("p",null,"\u53EF\u4EE5\u5BF9\u5217\u8868\u6807\u9898\u6587\u6848\u3001\u6309\u94AE\u6587\u6848\u3001\u6570\u636E\u9879\u7684\u6E32\u67D3\u51FD\u6570\u3001\u5217\u8868\u5E95\u90E8\u7684\u52FE\u9009\u72B6\u6001\u6587\u6848\u3001\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9\u533A\u7B49\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002",-1),st=t("div",null,[t("p",null,[e("\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"titles"),e("\u3001"),t("code",null,"button-texts"),e("\u3001"),t("code",null,"render-content"),e(" \u548C "),t("code",null,"format"),e(" \u5C5E\u6027\u5206\u522B\u5BF9\u5217\u8868\u6807\u9898\u6587\u6848\u3001\u6309\u94AE\u6587\u6848\u3001\u6570\u636E\u9879\u7684\u6E32\u67D3\u51FD\u6570\u548C\u5217\u8868\u9876\u90E8\u7684\u52FE\u9009\u72B6\u6001\u6587\u6848\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002\u6570\u636E\u9879\u7684\u6E32\u67D3\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"scoped-slot"),e(" \u8FDB\u884C\u81EA\u5B9A\u4E49\u3002\u5BF9\u4E8E\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9\u533A\uFF0C\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5177\u540D slot\uFF1A"),t("code",null,"left-footer"),e(" \u548C "),t("code",null,"right-footer"),e("\u3002\u6B64\u5916\uFF0C\u5982\u679C\u5E0C\u671B\u67D0\u4E9B\u6570\u636E\u9879\u5728\u521D\u59CB\u5316\u65F6\u5C31\u88AB\u52FE\u9009\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"left-default-checked"),e(" \u548C "),t("code",null,"right-default-checked"),e(" \u5C5E\u6027\u3002\u6700\u540E\uFF0C\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86 "),t("code",null,"change"),e(" \u4E8B\u4EF6\u7684\u7528\u6CD5\u3002\u6CE8\u610F\uFF1A\u7531\u4E8E jsfiddle \u4E0D\u652F\u6301 JSX \u8BED\u6CD5\uFF0C\u6240\u4EE5\u4F7F\u7528 "),t("code",null,"render-content"),e(" \u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u4F8B\u5B50\u5728 jsfiddle \u4E2D\u65E0\u6CD5\u8FD0\u884C\u3002\u4F46\u662F\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u53EA\u8981\u6B63\u786E\u5730\u914D\u7F6E\u4E86\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002")])],-1),ut=t("h2",{id:"shu-ju-xiang-shu-xing-bie-ming"},[t("a",{class:"header-anchor",href:"#shu-ju-xiang-shu-xing-bie-ming"}),e(" \u6570\u636E\u9879\u5C5E\u6027\u522B\u540D")],-1),ct=t("p",null,[e("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTransfer \u4EC5\u80FD\u8BC6\u522B\u6570\u636E\u9879\u4E2D\u7684 "),t("code",null,"key"),e("\u3001"),t("code",null,"label"),e(" \u548C "),t("code",null,"disabled"),e(" \u5B57\u6BB5\u3002\u5982\u679C\u4F60\u7684\u6570\u636E\u7684\u5B57\u6BB5\u540D\u4E0D\u540C\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"props"),e(" \u5C5E\u6027\u4E3A\u5B83\u4EEC\u8BBE\u7F6E\u522B\u540D\u3002")],-1),ht=t("div",null,[t("p",null,[e("\u672C\u4F8B\u4E2D\u7684\u6570\u636E\u6E90\u6CA1\u6709 "),t("code",null,"key"),e(" \u548C "),t("code",null,"label"),e(" \u5B57\u6BB5\uFF0C\u5728\u529F\u80FD\u4E0A\u4E0E\u5B83\u4EEC\u76F8\u540C\u7684\u5B57\u6BB5\u540D\u4E3A "),t("code",null,"value"),e(" \u548C "),t("code",null,"desc"),e("\u3002\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528"),t("code",null,"props"),e(" \u5C5E\u6027\u4E3A "),t("code",null,"key"),e(" \u548C "),t("code",null,"label"),e(" \u8BBE\u7F6E\u522B\u540D\u3002")])],-1),it=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>data</td><td>Transfer \u7684\u6570\u636E\u6E90</td><td>array[{ key, label, disabled }]</td><td>\u2014</td><td>[]</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filter-placeholder</td><td>\u641C\u7D22\u6846\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9</td></tr><tr><td>filter-props</td><td>\u641C\u7D22\u6846\u5C5E\u6027</td><td>object</td><td>\u2014</td><td>\u53C2\u89C1Input\u7EC4\u4EF6\u5C5E\u6027</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-method</td><td>\u5355\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u52A8\u5168\u90E8\u65F6\u7684\u786E\u8BA4\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A left/right\uFF0C\u8FD4\u56DE\u503C\u662F Promise</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>target-order</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565\uFF1A\u82E5\u4E3A <code>original</code>\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A <code>push</code>\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A <code>unshift</code>\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898</td><td>array</td><td>\u2014</td><td>[&#39;\u5217\u8868 1&#39;, &#39;\u5217\u8868 2&#39;]</td></tr><tr><td>button-texts</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>render-content</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\u6570</td><td>function(h, option)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format</td><td>\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848</td><td>object{noChecked, hasChecked}</td><td>\u2014</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D</td><td>object{key, label, disabled}</td><td>\u2014</td><td>\u2014</td></tr><tr><td>left-default-checked</td><td>\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>right-default-checked</td><td>\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>show-buttons</td><td>\u662F\u5426\u663E\u793A\u4E2D\u95F4\u64CD\u4F5C\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>gap</td><td>\u7A7F\u68AD\u6846\u9762\u677F\u4E4B\u95F4\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>list-gap</td><td>\u9009\u9879\u5361\u4E4B\u95F4\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>item-gap</td><td>\u9009\u9879\u5361\u5185\u90E8\u5143\u7D20\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>validate-event</td><td>\u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { option }</td></tr><tr><td>left-footer</td><td>\u5DE6\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>right-footer</td><td>\u53F3\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>buttons</td><td>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u64CD\u4F5C\u6309\u94AE\u533A\u57DF</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearQuery</td><td>\u6E05\u7A7A\u67D0\u4E2A\u9762\u677F\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td>&#39;left&#39; / &#39;right&#39;\uFF0C\u6307\u5B9A\u9700\u8981\u6E05\u7A7A\u7684\u9762\u677F</td></tr><tr><td>addToLeft</td><td>\u628A\u53F3\u4FA7\u9009\u4E2D\u9009\u9879\u6DFB\u52A0\u5230\u5DE6\u4FA7</td><td>-</td></tr><tr><td>addToRight</td><td>\u628A\u5DE6\u4FA7\u9009\u4E2D\u9009\u9879\u6DFB\u52A0\u5230\u53F3\u4FA7</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C\u3001\u6570\u636E\u79FB\u52A8\u7684\u65B9\u5411\uFF08&#39;left&#39; / &#39;right&#39;\uFF09\u3001\u53D1\u751F\u79FB\u52A8\u7684\u6570\u636E key \u6570\u7EC4</td></tr><tr><td>left-check-change</td><td>\u5DE6\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4</td></tr><tr><td>right-check-change</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4</td></tr></tbody></table>',8),mt={setup(v){const f="transfer",o={"../../../examples/transfer/basic.vue":A,"../../../examples/transfer/filterable.vue":O,"../../../examples/transfer/props.vue":U,"../../../examples/transfer/show-buttons.vue":P,"../../../examples/transfer/slot.vue":G};return(s,l)=>{const n=c("demo-block"),r=c("right-nav");return b(),E(w,null,[t("section",null,[Y,Z,a(n,{fs:"",demos:m(o),"component-id":f,"path-name":"transfer/basic","source-code":`<template>
  <hl-transfer v-model="value" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const value = ref([1, 4])

<\/script>
`},{default:d(()=>[tt]),_:1},8,["demos"]),et,a(n,{fs:"",demos:m(o),"component-id":f,"path-name":"transfer/show-buttons","source-code":`<template>
  <hl-transfer
    v-model="value"
    :left-default-checked="[1,4]"
    :titles="['Source', 'Target']"
    :data="data"
    :show-buttons="false"
    :format="{
      noChecked: '\${total}',
      hasChecked: '\${total}'
    }"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const value = ref([1, 4])
<\/script>
`},{default:d(()=>[nt]),_:1},8,["demos"]),dt,at,a(n,{fs:"",demos:m(o),"component-id":f,"path-name":"transfer/filterable","source-code":`<template>
  <hl-transfer
    v-model="value"
    filterable
    :filter-method="filterMethod"
    :filter-props="{ maxlength: 10 }"
    filter-placeholder="\u8BF7\u8F93\u5165\u57CE\u5E02\u62FC\u97F3"
    :data="data"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  const cities = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733', '\u5357\u4EAC', '\u897F\u5B89', '\u6210\u90FD']
  const spell = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
  cities.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      spell: spell[index],
    })
  })
  return data
}
const data = ref(generateData())
const value = ref([])
const filterMethod = (query, item) => {
  return item.spell.indexOf(query) > -1
}

<\/script>
`},{default:d(()=>[lt]),_:1},8,["demos"]),ot,rt,a(n,{fs:"",demos:m(o),"component-id":f,"path-name":"transfer/slot","source-code":`<template>
  <hl-row>
    <p>\u4F7F\u7528 render-content \u81EA\u5B9A\u4E49\u6570\u636E\u9879</p>
    <hl-col span="md:col-24">
      <hl-transfer
        v-model="leftValue"
        block
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['\u5230\u5DE6\u8FB9', '\u5230\u53F3\u8FB9']"
        :format="{
          noChecked: '\${total}',
          hasChecked: '\${checked}/\${total}'
        }"
        :data="data"
        @change="handleChange"
      >
        <template #left-footer>
          <hl-button>\u64CD\u4F5C</hl-button>
        </template>
        <template #right-footer>
          <hl-button>\u64CD\u4F5C</hl-button>
        </template>
      </hl-transfer>
    </hl-col>
    <p class="m-t-lg">\u4F7F\u7528 scoped-slot \u81EA\u5B9A\u4E49\u6570\u636E\u9879</p>
    <hl-col span="md:col-24">
      <hl-transfer
        ref="transferRef"
        v-model="rightValue"
        block
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :format="{
          noChecked: '\${total}',
          hasChecked: '\${checked}/\${total}'
        }"
        :data="data"
        @change="handleChange"
      >
        <template #default="{option}">
          <hl-thumb round type="primary" size="xs">
            <span>\u59D3\u540D</span>
          </hl-thumb>
          <span>{{ option.key }} - {{ option.label }}</span>
        </template>
        <template #left-footer>
          <hl-group full align="items-left">
            <hl-button equal no-fill @click="addToRight">
              <template #icon>
                <hl-icon>
                  <two-folder-in />
                </hl-icon>
              </template>
            </hl-button>
          </hl-group>
        </template>
        <template #right-footer>
          <hl-button type="danger" equal no-fill @click="addToLeft">
            <template #icon>
              <hl-icon>
                <two-delete />
              </hl-icon>
            </template>
          </hl-button>
        </template>
        <template #buttons>
          <div style="display: none"></div>
        </template>
      </hl-transfer>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoFolderIn, TwoDelete } from '@hongluan-ui/icons'


const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const leftValue = ref([1])
const rightValue = ref([1])
const transferRef = ref(null)

const renderFunc = (h, option) => {
  return h('span', null, option.key, ' - ', option.label)
}
const addToRight = () => {
  transferRef.value.addToRight()
}
const addToLeft = () => {
  transferRef.value.addToLeft()
}
const handleChange = (value, direction, movedKeys) => {
  console.log(value, direction, movedKeys)
}


<\/script>

`},{default:d(()=>[st]),_:1},8,["demos"]),ut,ct,a(n,{fs:"",demos:m(o),"component-id":f,"path-name":"transfer/props","source-code":`<template>
  <hl-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const value = ref([])

<\/script>
`},{default:d(()=>[ht]),_:1},8,["demos"]),it]),a(r)],64)}}};export{mt as default};
