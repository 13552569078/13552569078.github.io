import{p as f,R as g,I as b,L as h,H as p,P as o,X as r,T as e,a0 as B,W as T,ag as D,U as x,V as c,a3 as C,Q as l,o as y}from"./vue.8a077a47.js";import{v as N}from"./hongluan-icons.286a55ba.js";const F=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),V=e("\u706B\u72D0\u6D4F\u89C8\u5668"),$=e("\u6B27\u670B\u6D4F\u89C8\u5668"),k=f({setup(m){const a=g("second"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[F]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[V]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[$]),_:1})]),_:1},8,["modelValue"])}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));const j=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),P=e("\u706B\u72D0\u6D4F\u89C8\u5668"),O=e("\u6B27\u670B\u6D4F\u89C8\u5668"),S=f({setup(m){const a=g("first"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),type:"button",onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[j]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[P]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[O]),_:1})]),_:1},8,["modelValue"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const q=f({setup(m){const a=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),i=(d,t)=>{if(t==="add"){let n=++a.tabIndex+"";a.editableTabs.push({title:"New Tab",name:n,content:"New Tab content"}),a.editableTabsValue=n}if(t==="remove"){let n=a.editableTabs,u=a.editableTabsValue;u===d&&n.forEach((s,v)=>{if(s.name===d){let _=n[v+1]||n[v-1];_&&(u=_.name)}}),a.editableTabsValue=u,a.editableTabs=n.filter(s=>s.name!==d)}};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:c(a).editableTabsValue,"onUpdate:modelValue":t[0]||(t[0]=s=>c(a).editableTabsValue=s),editable:"",onEdit:i},{default:o(()=>[(h(!0),T(C,null,D(c(a).editableTabs,s=>(h(),p(n,{key:s.name,label:s.title,name:s.name},{default:o(()=>[e(x(s.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var E=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const M=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),U=e("\u706B\u72D0\u6D4F\u89C8\u5668"),I=e("\u6B27\u670B\u6D4F\u89C8\u5668"),A=f({setup(m){const a=g("second"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),gap:"var(--md)",onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[M]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[U]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[I]),_:1})]),_:1},8,["modelValue"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const R=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),Q=e("\u706B\u72D0\u6D4F\u89C8\u5668"),W=e("\u6B27\u670B\u6D4F\u89C8\u5668"),X=f({setup(m){const a=g("first"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),type:"line",onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[R]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[Q]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[W]),_:1})]),_:1},8,["modelValue"])}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const H=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),J=e("\u706B\u72D0\u6D4F\u89C8\u5668"),K=e("\u6B27\u670B\u6D4F\u89C8\u5668"),Y=f({setup(m){const a=g("second"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),"nav-height":"80px",onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[H]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[J]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[K]),_:1})]),_:1},8,["modelValue"])}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const tt=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),et=e("\u706B\u72D0\u6D4F\u89C8\u5668"),at=e("\u6B27\u670B\u6D4F\u89C8\u5668"),nt=f({setup(m){const a=g("second"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),"nav-padding":"var(--xxl)",onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[tt]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[et]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[at]),_:1})]),_:1},8,["modelValue"])}}});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const ot=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),rt=e("\u706B\u72D0\u6D4F\u89C8\u5668"),dt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),st=f({setup(m){const a=g("second"),i=(d,t)=>{console.log(d,t)};return(d,t)=>{const n=b("hl-tab-pane"),u=b("hl-tabs");return h(),p(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),"pane-height":"calc(var(--xxl) * 6)",onTabClick:i},{default:o(()=>[r(n,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[ot]),_:1}),r(n,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[rt]),_:1}),r(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[dt]),_:1})]),_:1},8,["modelValue"])}}});var ut=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));const bt={style:{"margin-bottom":"20px"}},it=e(" add tab "),ct=f({setup(m){const a=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),i=()=>{let t=++a.tabIndex+"";a.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"}),a.editableTabsValue=t},d=t=>{let n=a.editableTabs,u=a.editableTabsValue;u===t&&n.forEach((s,v)=>{if(s.name===t){let _=n[v+1]||n[v-1];_&&(u=_.name)}}),a.editableTabsValue=u,a.editableTabs=n.filter(s=>s.name!==t)};return(t,n)=>{const u=b("hl-button"),s=b("hl-tab-pane"),v=b("hl-tabs");return h(),T(C,null,[l("div",bt,[r(u,{size:"sm",onClick:n[0]||(n[0]=_=>i())},{default:o(()=>[it]),_:1})]),r(v,{modelValue:c(a).editableTabsValue,"onUpdate:modelValue":n[1]||(n[1]=_=>c(a).editableTabsValue=_),type:"line",closable:"",onTabRemove:d},{default:o(()=>[(h(!0),T(C,null,D(c(a).editableTabs,_=>(h(),p(s,{key:_.name,label:_.title,name:_.name},{default:o(()=>[e(x(_.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])],64)}}});var ht=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"}));const _t=e("top"),mt=e("right"),pt=e("bottom"),ft=e("left"),vt=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),gt=e("\u706B\u72D0\u6D4F\u89C8\u5668"),Tt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),Ct=f({setup(m){const a=g("top");return(i,d)=>{const t=b("hl-radio"),n=b("hl-radio-group"),u=b("hl-tab-pane"),s=b("hl-tabs");return h(),T(C,null,[r(n,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=v=>a.value=v),style:{"margin-bottom":"30px"}},{default:o(()=>[r(t,{label:"top"},{default:o(()=>[_t]),_:1}),r(t,{label:"right"},{default:o(()=>[mt]),_:1}),r(t,{label:"bottom"},{default:o(()=>[pt]),_:1}),r(t,{label:"left"},{default:o(()=>[ft]),_:1})]),_:1},8,["modelValue"]),r(s,{"tab-position":a.value,type:"button",style:{height:"200px"}},{default:o(()=>[r(u,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668"},{default:o(()=>[vt]),_:1}),r(u,{label:"\u706B\u72D0\u6D4F\u89C8\u5668"},{default:o(()=>[gt]),_:1}),r(u,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:o(()=>[Tt]),_:1})]),_:1},8,["tab-position"])],64)}}});var Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));const Dt=e(" \u6211\u7684\u884C\u7A0B "),xt=e(" \u6211\u7684\u884C\u7A0B "),yt=e("\u6D88\u606F\u4E2D\u5FC3"),Nt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),Ft=f({setup(m){return(a,i)=>{const d=b("hl-icon"),t=b("hl-tab-pane"),n=b("hl-tabs");return h(),p(n,null,{default:o(()=>[r(t,null,{label:o(()=>[r(d,{class:"sm m-r-xs"},{default:o(()=>[r(c(N))]),_:1}),Dt]),default:o(()=>[xt]),_:1}),r(t,{label:"\u6D88\u606F\u4E2D\u5FC3"},{default:o(()=>[yt]),_:1}),r(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:o(()=>[Nt]),_:1})]),_:1})}}});var Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"}));const $t=l("h1",null,"Tabs \u6807\u7B7E\u9875",-1),kt=l("p",null,"Tabs \u7528\u4E8E\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),zt=l("div",null,[l("p",null,[e("Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u6807\u7B7E\u529F\u80FD\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),l("code",null,"value"),e(" \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u3002")])],-1),jt=l("h2",{id:"line-yang-shi"},[l("a",{class:"header-anchor",href:"#line-yang-shi"}),e(" Line \u6837\u5F0F")],-1),Pt=l("p",null,[e("\u53EA\u9700\u8981\u8BBE\u7F6E "),l("code",null,"type"),e(" \u5C5E\u6027\u4E3A "),l("code",null,"line"),e(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u7EBF\u6761\u98CE\u683C\u3002")],-1),Ot=l("h2",{id:"button-yang-shi"},[l("a",{class:"header-anchor",href:"#button-yang-shi"}),e(" Button \u6837\u5F0F")],-1),St=l("p",null,[e("\u53EA\u9700\u8981\u8BBE\u7F6E "),l("code",null,"type"),e(" \u5C5E\u6027\u4E3A "),l("code",null,"button"),e(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u6309\u94AE\u98CE\u683C\u3002")],-1),wt=l("h2",{id:"paddingshu-xing"},[l("a",{class:"header-anchor",href:"#paddingshu-xing"}),e(" Padding\u5C5E\u6027")],-1),qt=l("p",null,[l("code",null,"nav-padding"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u7684\u4E24\u4FA7\u586B\u5145\u5C3A\u5BF8\uFF0C\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Et=l("h2",{id:"gapshu-xing"},[l("a",{class:"header-anchor",href:"#gapshu-xing"}),e(" Gap\u5C5E\u6027")],-1),Mt=l("p",null,[l("code",null,"gap"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Ut=l("h2",{id:"biao-qian-gao-du-she-zhi"},[l("a",{class:"header-anchor",href:"#biao-qian-gao-du-she-zhi"}),e(" \u6807\u7B7E\u9AD8\u5EA6\u8BBE\u7F6E")],-1),It=l("p",null,[l("code",null,"nav-height"),e(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u6807\u7B7E\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),At=l("h2",{id:"nei-rong-qu-gao-du-she-zhi"},[l("a",{class:"header-anchor",href:"#nei-rong-qu-gao-du-she-zhi"}),e(" \u5185\u5BB9\u533A\u9AD8\u5EA6\u8BBE\u7F6E")],-1),Lt=l("p",null,[l("code",null,"pane-height"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Rt=l("h2",{id:"wei-zhi"},[l("a",{class:"header-anchor",href:"#wei-zhi"}),e(" \u4F4D\u7F6E")],-1),Qt=l("p",null,[e("\u53EF\u4EE5\u901A\u8FC7 "),l("code",null,"tab-position"),e(" \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E")],-1),Wt=l("div",null,[l("p",null,[e("\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E "),l("code",null,'tabPosition="left|right|top|bottom"')])],-1),Xt=l("h2",{id:"zi-ding-yi-biao-qian-ye"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian-ye"}),e(" \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875")],-1),Gt=l("p",null,[e("\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),l("code",null,"slot"),e(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u7684\u5185\u5BB9")],-1),Ht=l("h2",{id:"dong-tai-zeng-jian-biao-qian-ye"},[l("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-qian-ye"}),e(" \u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875")],-1),Jt=l("p",null,"\u589E\u51CF\u6807\u7B7E\u9875\u6309\u94AE\u53EA\u80FD\u5728\u6807\u7B7E\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u4E0B\u4F7F\u7528",-1),Kt=l("h2",{id:"zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"}),e(" \u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668")],-1),Yt=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u6807\u7B7E\u7684 name</td><td>string / number</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u6807\u7B7E\u7684 name</td></tr><tr><td>type</td><td>\u98CE\u683C\u7C7B\u578B</td><td>string</td><td>line</td><td>\u663E\u793A\u4E3A\u7EBF\u6761\u6837\u5F0F</td></tr><tr><td>nav-height</td><td>\u6807\u7B7E\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>nav-padding</td><td>\u6807\u7B7E\u7684\u586B\u5145\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u6807\u7B7E\u7684\u95F4\u9694\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pane-height</td><td>\u5185\u5BB9\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-pane</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>addable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tab-position</td><td>\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002</td><td>Function(activeName, oldActiveName)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr><tr><td>tab-change</td><td><code>activeName</code>\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(name: <code>TabPaneName</code>)</td></tr><tr><td>tab-remove</td><td>\u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name</td></tr><tr><td>tab-add</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>edit</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1</td><td>(targetName, action)</td></tr></tbody></table><h2 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes"></a> Tab Pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u4E0E\u6807\u7B7E\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u6807\u7B7E\u522B\u540D</td><td>string / number</td><td>\u2014</td><td>\u8BE5\u6807\u7B7E\u5728\u6807\u7B7E\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u6807\u7B7E\u5219\u4E3A&#39;1&#39;</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lazy</td><td>\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',6),ee={setup(m){const a={"../../../examples/tabs/basic.vue":z,"../../../examples/tabs/button.vue":w,"../../../examples/tabs/editable.vue":E,"../../../examples/tabs/gap.vue":L,"../../../examples/tabs/line.vue":G,"../../../examples/tabs/nav-height.vue":Z,"../../../examples/tabs/padding.vue":lt,"../../../examples/tabs/pane-height.vue":ut,"../../../examples/tabs/pane.vue":ht,"../../../examples/tabs/position.vue":Bt,"../../../examples/tabs/slot.vue":Vt};return(i,d)=>{const t=b("demo-block"),n=b("right-nav");return h(),T(C,null,[l("section",null,[$t,kt,r(t,{fs:"",demos:c(a),"path-name":"tabs/basic","source-code":`<template>\r
  <hl-tabs v-model="activeName" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('second')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
<\/script>\r
`},{default:o(()=>[zt]),_:1},8,["demos"]),jt,Pt,r(t,{fs:"",demos:c(a),"path-name":"tabs/line","source-code":`<template>\r
  <hl-tabs v-model="activeName" type="line" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('first')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Ot,St,r(t,{fs:"",demos:c(a),"path-name":"tabs/button","source-code":`<template>\r
  <hl-tabs v-model="activeName" type="button" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('first')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),wt,qt,r(t,{fs:"",demos:c(a),"path-name":"tabs/padding","source-code":`<template>\r
  <hl-tabs v-model="activeName" nav-padding="var(--xxl)" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('second')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Et,Mt,r(t,{fs:"",demos:c(a),"path-name":"tabs/gap","source-code":`<template>\r
  <hl-tabs v-model="activeName" gap="var(--md)" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('second')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Ut,It,r(t,{fs:"",demos:c(a),"path-name":"tabs/nav-height","source-code":`<template>\r
  <hl-tabs v-model="activeName" nav-height="80px" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('second')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),At,Lt,r(t,{fs:"",demos:c(a),"path-name":"tabs/pane-height","source-code":`<template>\r
  <hl-tabs v-model="activeName" pane-height="calc(var(--xxl) * 6)" @tab-click="handleClick">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('second')\r
const handleClick = (tab, event) => {\r
  console.log(tab, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Rt,Qt,r(t,{fs:"",demos:c(a),"path-name":"tabs/position","source-code":`<template>\r
  <hl-radio-group v-model="tabPosition" style="margin-bottom: 30px;">\r
    <hl-radio label="top">top</hl-radio>\r
    <hl-radio label="right">right</hl-radio>\r
    <hl-radio label="bottom">bottom</hl-radio>\r
    <hl-radio label="left">left</hl-radio>\r
  </hl-radio-group>\r
\r
  <hl-tabs :tab-position="tabPosition" type="button" style="height: 200px;">\r
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const tabPosition = ref('top')\r
<\/script>\r
`},{default:o(()=>[Wt]),_:1},8,["demos"]),Xt,Gt,r(t,{fs:"",demos:c(a),"path-name":"tabs/slot","source-code":`<template>\r
  <hl-tabs>\r
    <hl-tab-pane>\r
      <template #label>\r
        <hl-icon class="sm m-r-xs"><two-application /></hl-icon>\r
        \u6211\u7684\u884C\u7A0B\r
      </template>\r
      \u6211\u7684\u884C\u7A0B\r
    </hl-tab-pane>\r
    <hl-tab-pane label="\u6D88\u606F\u4E2D\u5FC3">\u6D88\u606F\u4E2D\u5FC3</hl-tab-pane>\r
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
<script lang="ts" setup>\r
\r
import { TwoApplication } from '@hongluan-ui/icons'\r
<\/script>\r
`},null,8,["demos"]),Ht,Jt,r(t,{fs:"",demos:c(a),"path-name":"tabs/editable","source-code":`<template>\r
  <hl-tabs v-model="state.editableTabsValue" editable @edit="handleTabsEdit">\r
    <hl-tab-pane\r
      v-for="item in state.editableTabs"\r
      :key="item.name"\r
      :label="item.title"\r
      :name="item.name"\r
    >\r
      {{ item.content }}\r
    </hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
const state = reactive({\r
  editableTabsValue: '2',\r
  editableTabs: [\r
    {\r
      title: 'Tab 1',\r
      name: '1',\r
      content: 'Tab 1 content',\r
    },\r
    {\r
      title: 'Tab 2',\r
      name: '2',\r
      content: 'Tab 2 content',\r
    },\r
  ],\r
  tabIndex: 2,\r
})\r
const handleTabsEdit = (targetName, action) => {\r
  if (action === 'add') {\r
    let newTabName = ++state.tabIndex + ''\r
    state.editableTabs.push({\r
      title: 'New Tab',\r
      name: newTabName,\r
      content: 'New Tab content',\r
    })\r
    state.editableTabsValue = newTabName\r
  }\r
  if (action === 'remove') {\r
    let tabs = state.editableTabs\r
    let activeName = state.editableTabsValue\r
    if (activeName === targetName) {\r
      tabs.forEach((tab, index) => {\r
        if (tab.name === targetName) {\r
          let nextTab = tabs[index + 1] || tabs[index - 1]\r
          if (nextTab) {\r
            activeName = nextTab.name\r
          }\r
        }\r
      })\r
    }\r
\r
    state.editableTabsValue = activeName\r
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)\r
  }\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Kt,r(t,{fs:"",demos:c(a),"path-name":"tabs/pane","source-code":`<template>\r
  <div style="margin-bottom: 20px;">\r
    <hl-button size="sm" @click="addTab()">\r
      add tab\r
    </hl-button>\r
  </div>\r
  <hl-tabs\r
    v-model="state.editableTabsValue"\r
    type="line"\r
    closable\r
    @tab-remove="removeTab"\r
  >\r
    <hl-tab-pane\r
      v-for="item in state.editableTabs"\r
      :key="item.name"\r
      :label="item.title"\r
      :name="item.name"\r
    >\r
      {{ item.content }}\r
    </hl-tab-pane>\r
  </hl-tabs>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
const state = reactive({\r
  editableTabsValue: '2',\r
  editableTabs: [\r
    {\r
      title: 'Tab 1',\r
      name: '1',\r
      content: 'Tab 1 content',\r
    },\r
    {\r
      title: 'Tab 2',\r
      name: '2',\r
      content: 'Tab 2 content',\r
    },\r
  ],\r
  tabIndex: 2,\r
})\r
\r
const addTab = () => {\r
  let newTabName = ++state.tabIndex + ''\r
  state.editableTabs.push({\r
    title: 'New Tab',\r
    name: newTabName,\r
    content: 'New Tab content',\r
  })\r
  state.editableTabsValue = newTabName\r
}\r
\r
const removeTab = targetName => {\r
  let tabs = state.editableTabs\r
  let activeName = state.editableTabsValue\r
  if (activeName === targetName) {\r
    tabs.forEach((tab, index) => {\r
      if (tab.name === targetName) {\r
        let nextTab = tabs[index + 1] || tabs[index - 1]\r
        if (nextTab) {\r
          activeName = nextTab.name\r
        }\r
      }\r
    })\r
  }\r
\r
  state.editableTabsValue = activeName\r
  state.editableTabs = tabs.filter(tab => tab.name !== targetName)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Yt]),r(n)],64)}}};export{ee as default};
