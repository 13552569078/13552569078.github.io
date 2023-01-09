import{p as k,R as i,I as h,L as E,H as y,Z as N,W as x,X as a,a3 as A,P as f,T as d,V as g,Q as e,U as z,o as w}from"./vue.8a077a47.js";import{Z as j,_ as T,$ as D}from"./hongluan-icons.286a55ba.js";const P=k({setup(m){const r=i([{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]),s=i({children:"children",label:"label"}),l=n=>{console.log(n)};return(n,o)=>{const t=h("hl-tree");return E(),y(t,{data:r.value,props:s.value,accordion:"",onNodeClick:l},null,8,["data","props"])}}});var O=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const S=k({setup(m){const r=i([{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]),s=i({children:"children",label:"label"}),l=n=>{console.log(n)};return(n,o)=>{const t=h("hl-tree");return E(),y(t,{data:r.value,props:s.value,onNodeClick:l},null,8,["data","props"])}}});var $=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const F=k({setup(m){const r=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),s=i({children:"children",label:"label"});return(l,n)=>{const o=h("hl-tree");return E(),y(o,{data:r.value,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:s.value},null,8,["data","props"])}}});var K=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const M=k({setup(m){const r=i([{id:1,label:"\u4E00\u7EA7 2",children:[{id:3,label:"\u4E8C\u7EA7 2-1",children:[{id:4,label:"\u4E09\u7EA7 3-1-1"},{id:5,label:"\u4E09\u7EA7 3-1-2",disabled:!0}]},{id:2,label:"\u4E8C\u7EA7 2-2",disabled:!0,children:[{id:6,label:"\u4E09\u7EA7 3-2-1"},{id:7,label:"\u4E09\u7EA7 3-2-2",disabled:!0}]}]}]);return i({children:"children",label:"label"}),(s,l)=>{const n=h("hl-tree");return E(),y(n,{data:r.value,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5]},null,8,["data"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const B=k({setup(m){const r=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2",children:[{id:11,label:"\u4E09\u7EA7 3-2-1"},{id:12,label:"\u4E09\u7EA7 3-2-2"},{id:13,label:"\u4E09\u7EA7 3-2-3"}]}]}]);i({children:"children",label:"label"});const s=(_,u)=>{console.log("drag start",_)},l=(_,u,p)=>{console.log("tree drag enter: ",u.label)},n=(_,u,p)=>{console.log("tree drag leave: ",u.label)},o=(_,u,p)=>{console.log("tree drag over: ",u.label)},t=(_,u,p,C)=>{console.log("tree drag end: ",u&&u.label,p)},c=(_,u,p,C)=>{console.log("tree drop: ",u.label,p)},b=(_,u,p)=>u.data.label==="\u4E8C\u7EA7 3-1"?p!=="inner":!0,v=_=>_.data.label.indexOf("\u4E09\u7EA7 3-2-2")===-1;return(_,u)=>{const p=h("hl-tree");return E(),y(p,{data:r.value,"node-key":"id","default-expand-all":"",draggable:"","allow-drop":b,"allow-drag":v,onNodeDragStart:s,onNodeDragEnter:l,onNodeDragLeave:n,onNodeDragOver:o,onNodeDragEnd:t,onNodeDrop:c},null,8,["data"])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const V=k({setup(m){const r=i(""),s=i(null),l=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),n=i({children:"children",label:"label"}),o=(t,c)=>t?c.label.indexOf(t)!==-1:!0;return N(r,t=>{s.value.filter(t)}),(t,c)=>{const b=h("hl-input"),v=h("hl-tree");return E(),x(A,null,[a(b,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=_=>r.value=_),placeholder:"\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4"},null,8,["modelValue"]),a(v,{ref_key:"tree",ref:s,class:"filter-tree",data:l.value,props:n.value,"default-expand-all":"","filter-node-method":o},null,8,["data","props"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const W=d("\u901A\u8FC7 node \u83B7\u53D6"),H=d("\u901A\u8FC7 key \u83B7\u53D6"),I=d("\u901A\u8FC7 node \u8BBE\u7F6E"),X=d("\u901A\u8FC7 key \u8BBE\u7F6E"),Z=d("\u6E05\u7A7A"),R=k({setup(m){const r=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),s=i({children:"children",label:"label"}),l=i(null),n=()=>{console.log(l.value.getCheckedNodes())},o=()=>{console.log(l.value.getCheckedKeys())},t=()=>{l.value.setCheckedNodes([{id:5,label:"\u4E8C\u7EA7 2-1"},{id:9,label:"\u4E09\u7EA7 1-1-1"}])},c=()=>{l.value.setCheckedKeys([3])},b=()=>{l.value.setCheckedKeys([])};return(v,_)=>{const u=h("hl-tree"),p=h("hl-button"),C=h("hl-group");return E(),x(A,null,[a(u,{ref_key:"tree",ref:l,data:r.value,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:s.value},null,8,["data","props"]),a(C,{"gap-x":"var(--md)",class:"buttons"},{default:f(()=>[a(p,{onClick:n},{default:f(()=>[W]),_:1}),a(p,{onClick:o},{default:f(()=>[H]),_:1}),a(p,{onClick:t},{default:f(()=>[I]),_:1}),a(p,{onClick:c},{default:f(()=>[X]),_:1}),a(p,{onClick:b},{default:f(()=>[Z]),_:1})]),_:1})],64)}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const J=k({setup(m){const r=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),s=i({children:"children",label:"label"});return(l,n)=>{const o=h("hl-icon"),t=h("hl-tree");return E(),y(t,{data:r.value,"node-key":"id","default-expanded-keys":[2,3],props:s.value},{icon:f(({expanded:c})=>[a(o,null,{default:f(()=>[c?(E(),y(g(j),{key:0})):(E(),y(g(T),{key:1}))]),_:2},1024)]),_:1},8,["data","props"])}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));const Y=k({setup(m){const r=i({label:"name",children:"zones",isLeaf:"leaf"}),s=(l,n)=>{if(l.level===0)return n([{name:"region"}]);if(l.level>1)return n([]);setTimeout(()=>{n([{name:"leaf",leaf:!0},{name:"zone"}])},2e3)};return(l,n)=>{const o=h("hl-tree");return E(),y(o,{props:r.value,load:s,lazy:"","show-checkbox":""},null,8,["props"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const ne=k({setup(m){const r=i({label:"name",children:"zones"}),s=i(1),l=(o,t,c)=>{console.log(o,t,c)},n=(o,t)=>{if(o.level===0)return t([{name:"region1"},{name:"region2"}]);if(o.level>3)return t([]);var c;o.data.name==="region1"?c=!0:o.data.name==="region2"?c=!1:c=Math.random()>.5,setTimeout(()=>{var b;c?b=[{name:"zone"+s.value++},{name:"zone"+s.value++}]:b=[],t(b)},500)};return(o,t)=>{const c=h("hl-tree");return E(),y(c,{props:r.value,load:n,lazy:"","show-checkbox":"",onCheckChange:l},null,8,["props"])}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));const te={class:"custom-tree-container"},de={class:"block"},le=e("p",null,"\u4F7F\u7528 render-content",-1),ae={class:"block"},oe=e("p",null,"\u4F7F\u7528 slot",-1),ce={class:"text-ellipsis w-full"},se={class:"static"},ie=["onClick"],ue=["onClick"],he=k({setup(m){let r=1e3;const s=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),l=t=>{const c={id:r++,label:"testtest",children:[]};t.children||(t.children=[]),t.children.push(c)},n=(t,c)=>{const b=t.parent,v=b.data.children||b.data,_=v.findIndex(u=>u.id===u.id);v.splice(_,1)},o=(t,{node:c,data:b,store:v})=>t("span",{class:"custom-tree-node"},t("span",{style:"overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"},null,c.label),t("span",null,t("a",{onClick:()=>l(b)},"Append "),t("a",{onClick:()=>n(c)},"Delete")));return(t,c)=>{const b=h("hl-tree"),v=h("hl-icon"),_=h("hl-group");return E(),x("div",te,[e("div",de,[le,a(b,{data:s.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":o},null,8,["data"])]),e("div",ae,[oe,a(b,{data:s.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:f(({node:u,data:p})=>[a(_,{full:"",class:"w-full",gap:"var(--xs)",align:"items-middle items-between"},{default:f(()=>[a(v,{size:"xs",class:"static"},{default:f(()=>[a(g(D))]),_:1}),e("div",ce,z(u.label),1),e("div",se,[e("a",{onClick:C=>l(p)},"Append",8,ie),e("a",{onClick:C=>n(u)},"Delete",8,ue)])]),_:2},1024)]),_:1},8,["data"])])])}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));const be=e("h1",null,"Tree \u6811\u5F62\u63A7\u4EF6",-1),_e=e("p",null,"\u7528\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\u5C55\u793A\u4FE1\u606F\uFF0C\u53EF\u5C55\u5F00\u6216\u6298\u53E0\u3002",-1),fe=e("h2",{id:"ke-xuan-ze"},[e("a",{class:"header-anchor",href:"#ke-xuan-ze"}),d(" \u53EF\u9009\u62E9")],-1),ge=e("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86\u52A8\u6001\u52A0\u8F7D\u8282\u70B9\u6570\u636E\u7684\u65B9\u6CD5\u3002",-1),Ee=e("h2",{id:"lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"},[e("a",{class:"header-anchor",href:"#lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"}),d(" \u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u53F6\u5B50\u8282\u70B9")],-1),me=e("div",null,[e("p",null,"\u7531\u4E8E\u5728\u70B9\u51FB\u8282\u70B9\u65F6\u624D\u8FDB\u884C\u8BE5\u5C42\u6570\u636E\u7684\u83B7\u53D6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Tree \u65E0\u6CD5\u9884\u77E5\u67D0\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u6240\u4EE5\u4F1A\u4E3A\u6BCF\u4E2A\u8282\u70B9\u6DFB\u52A0\u4E00\u4E2A\u4E0B\u62C9\u6309\u94AE\uFF0C\u5982\u679C\u8282\u70B9\u6CA1\u6709\u4E0B\u5C42\u6570\u636E\uFF0C\u5219\u70B9\u51FB\u540E\u4E0B\u62C9\u6309\u94AE\u4F1A\u6D88\u5931\u3002\u540C\u65F6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u63D0\u524D\u544A\u77E5 Tree \u67D0\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4ECE\u800C\u907F\u514D\u5728\u53F6\u5B50\u8282\u70B9\u524D\u6E32\u67D3\u4E0B\u62C9\u6309\u94AE\u3002")],-1),ke=e("h2",{id:"mo-ren-zhan-kai-he-mo-ren-xuan-zhong"},[e("a",{class:"header-anchor",href:"#mo-ren-zhan-kai-he-mo-ren-xuan-zhong"}),d(" \u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D")],-1),ve=e("p",null,"\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u5C55\u5F00\u6216\u9ED8\u8BA4\u9009\u4E2D",-1),ye=e("div",null,[e("p",null,[d("\u5206\u522B\u901A\u8FC7"),e("code",null,"default-expanded-keys"),d("\u548C"),e("code",null,"default-checked-keys"),d("\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E"),e("code",null,"node-key"),d("\uFF0C\u5176\u503C\u4E3A\u8282\u70B9\u6570\u636E\u4E2D\u7684\u4E00\u4E2A\u5B57\u6BB5\u540D\uFF0C\u8BE5\u5B57\u6BB5\u5728\u6574\u68F5\u6811\u4E2D\u662F\u552F\u4E00\u7684\u3002")])],-1),Ce=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),xe=e("p",null,"\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001",-1),Ae=e("div",null,[e("p",null,[d("\u901A\u8FC7"),e("code",null,"disabled"),d("\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\u3002")])],-1),Ne=e("h2",{id:"shu-jie-dian-de-xuan-ze"},[e("a",{class:"header-anchor",href:"#shu-jie-dian-de-xuan-ze"}),d(" \u6811\u8282\u70B9\u7684\u9009\u62E9")],-1),ze=e("div",null,[e("p",null,[d("\u672C\u4F8B\u5C55\u793A\u5982\u4F55\u83B7\u53D6\u548C\u8BBE\u7F6E\u9009\u4E2D\u8282\u70B9\u3002\u83B7\u53D6\u548C\u8BBE\u7F6E\u5404\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7 node \u6216\u901A\u8FC7 key\u3002\u5982\u679C\u9700\u8981\u901A\u8FC7 key \u6765\u83B7\u53D6\u6216\u8BBE\u7F6E\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E"),e("code",null,"node-key"),d("\u3002")])],-1),we=e("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),d(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),je=e("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),Te=e("div",null,[e("p",null,[d("\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u6CD5\u8FDB\u884C\u6811\u8282\u70B9\u5185\u5BB9\u7684\u81EA\u5B9A\u4E49\uFF1A"),e("code",null,"render-content"),d("\u548C scoped slot\u3002\u4F7F\u7528"),e("code",null,"render-content"),d("\u6307\u5B9A\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u9700\u8981\u7684\u8282\u70B9\u533A\u5185\u5BB9\u5373\u53EF\u3002\u6E32\u67D3\u51FD\u6570\u7684\u7528\u6CD5\u8BF7\u53C2\u8003 Vue \u6587\u6863\u3002\u4F7F\u7528 scoped slot \u4F1A\u4F20\u5165\u4E24\u4E2A\u53C2\u6570"),e("code",null,"node"),d("\u548C"),e("code",null,"data"),d("\uFF0C\u5206\u522B\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\u3002\u6CE8\u610F\uFF1A\u7531\u4E8E jsfiddle \u4E0D\u652F\u6301 JSX \u8BED\u6CD5\uFF0C\u6240\u4EE5"),e("code",null,"render-content"),d("\u793A\u4F8B\u5728 jsfiddle \u4E2D\u65E0\u6CD5\u8FD0\u884C\u3002\u4F46\u662F\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u53EA\u8981\u6B63\u786E\u5730\u914D\u7F6E\u4E86\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002")])],-1),De=e("h2",{id:"jie-dian-guo-lu"},[e("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),d(" \u8282\u70B9\u8FC7\u6EE4")],-1),Pe=e("p",null,"\u901A\u8FC7\u5173\u952E\u5B57\u8FC7\u6EE4\u6811\u8282\u70B9",-1),Oe=e("div",null,[e("p",null,[d("\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684"),e("code",null,"filter"),d("\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6E"),e("code",null,"filter-node-method"),d("\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")])],-1),Se=e("h2",{id:"shou-feng-qin-mo-shi"},[e("a",{class:"header-anchor",href:"#shou-feng-qin-mo-shi"}),d(" \u624B\u98CE\u7434\u6A21\u5F0F")],-1),$e=e("p",null,"\u5BF9\u4E8E\u540C\u4E00\u7EA7\u7684\u8282\u70B9\uFF0C\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A",-1),Fe=e("h2",{id:"ke-tuo-zhuai-jie-dian"},[e("a",{class:"header-anchor",href:"#ke-tuo-zhuai-jie-dian"}),d(" \u53EF\u62D6\u62FD\u8282\u70B9")],-1),Ke=e("p",null,"\u901A\u8FC7 draggable \u5C5E\u6027\u53EF\u8BA9\u8282\u70B9\u53D8\u4E3A\u53EF\u62D6\u62FD\u3002",-1),Me=e("h2",{id:"zi-ding-yi-zhan-kai-shou-qi-tu-biao"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-zhan-kai-shou-qi-tu-biao"}),d(" \u81EA\u5B9A\u4E49\u5C55\u5F00\u6536\u8D77\u56FE\u6807")],-1),Le=w('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>node-key</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>render-after-expand</td><td>\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u6811\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 lazy \u5C5E\u6027\u4E3A true \u65F6\u751F\u6548</td><td>function(node, resolve)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>render-content</td><td>\u6811\u8282\u70B9\u7684\u5185\u5BB9\u533A\u7684\u6E32\u67D3 Function</td><td>Function(h, { node, data, store })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u662F false\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-node-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>\u2014</td><td>16</td></tr><tr><td>icon-class</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E load \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>draggable</td><td>\u662F\u5426\u5F00\u542F\u62D6\u62FD\u8282\u70B9\u529F\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>allow-drag</td><td>\u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD</td><td>Function(node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>allow-drop</td><td>\u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002<code>type</code> \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A&#39;prev&#39;\u3001&#39;inner&#39; \u548C &#39;next&#39;\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E</td><td>Function(draggingNode, dropNode, type)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>gap</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>isLeaf</td><td>\u6307\u5B9A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4EC5\u5728\u6307\u5B9A\u4E86 lazy \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u751F\u6548</td><td>boolean, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>class</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9class</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> \u5185\u90E8\u4F7F\u7528\u4E86 Node \u7C7B\u578B\u7684\u5BF9\u8C61\u6765\u5305\u88C5\u7528\u6237\u4F20\u5165\u7684\u6570\u636E\uFF0C\u7528\u6765\u4FDD\u5B58\u76EE\u524D\u8282\u70B9\u7684\u72B6\u6001\u3002 <code>Tree</code> \u62E5\u6709\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>\u63A5\u6536\u4E00\u4E2A\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u4F1A\u5728 filter-node-method \u4E2D\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570</td></tr><tr><td>updateKeyChildren</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u8282\u70B9\u5B50\u5143\u7D20\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key, data) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8282\u70B9 key 2. \u8282\u70B9\u6570\u636E\u7684\u6570\u7EC4</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly, includeHalfChecked) \u63A5\u6536\u4E24\u4E2A boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C1. \u662F\u5426\u53EA\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code> 2. \u662F\u5426\u5305\u542B\u534A\u9009\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setCheckedNodes</td><td>\u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(nodes) \u63A5\u6536\u52FE\u9009\u8282\u70B9\u6570\u636E\u7684\u6570\u7EC4</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly) \u63A5\u6536\u4E00\u4E2A boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u82E5\u4E3A <code>true</code> \u5219\u4EC5\u8FD4\u56DE\u88AB\u9009\u4E2D\u7684\u53F6\u5B50\u8282\u70B9\u7684 keys\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(keys, leafOnly) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u52FE\u9009\u8282\u70B9\u7684 key \u7684\u6570\u7EC4 2. boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u82E5\u4E3A <code>true</code> \u5219\u4EC5\u8BBE\u7F6E\u53F6\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key / data \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key/data, checked, deep) \u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF0C1. \u52FE\u9009\u8282\u70B9\u7684 key \u6216\u8005 data 2. boolean \u7C7B\u578B\uFF0C\u8282\u70B9\u662F\u5426\u9009\u4E2D 3. boolean \u7C7B\u578B\uFF0C\u662F\u5426\u8BBE\u7F6E\u5B50\u8282\u70B9 \uFF0C\u9ED8\u8BA4\u4E3A false</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE null</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE null</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key, shouldAutoExpandParent=true) 1. \u5F85\u88AB\u9009\u8282\u70B9\u7684 key\uFF0C\u82E5\u4E3A null \u5219\u53D6\u6D88\u5F53\u524D\u9AD8\u4EAE\u7684\u8282\u70B9 2. \u662F\u5426\u6269\u5C55\u7236\u8282\u70B9</td></tr><tr><td>setCurrentNode</td><td>\u901A\u8FC7 node \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(node, shouldAutoExpandParent=true) 1. \u5F85\u88AB\u9009\u8282\u70B9\u7684 node 2. \u662F\u5426\u6269\u5C55\u7236\u8282\u70B9</td></tr><tr><td>getNode</td><td>\u6839\u636E data \u6216\u8005 key \u62FF\u5230 Tree \u7EC4\u4EF6\u4E2D\u7684 node</td><td>(data) \u8981\u83B7\u5F97 node \u7684 key \u6216\u8005 data</td></tr><tr><td>getNodePath</td><td>\u6839\u636E data \u6216\u8005 key \u62FF\u5230 Tree \u7EC4\u4EF6\u4E2D\u7684 node \u5B8C\u6574\u8DEF\u5F84</td><td>(data) \u8981\u83B7\u5F97 node \u7684 data \u6570\u7EC4</td></tr><tr><td>remove</td><td>\u5220\u9664 Tree \u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(data) \u8981\u5220\u9664\u7684\u8282\u70B9\u7684 data \u6216\u8005 node</td></tr><tr><td>append</td><td>\u4E3A Tree \u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\u8FFD\u52A0\u4E00\u4E2A\u5B50\u8282\u70B9</td><td>(data, parentNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u8FFD\u52A0\u7684\u5B50\u8282\u70B9\u7684 data 2. \u5B50\u8282\u70B9\u7684 parent \u7684 data\u3001key \u6216\u8005 node</td></tr><tr><td>insertBefore</td><td>\u4E3A Tree \u7684\u4E00\u4E2A\u8282\u70B9\u7684\u524D\u9762\u589E\u52A0\u4E00\u4E2A\u8282\u70B9</td><td>(data, refNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684 data 2. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9\u7684 data\u3001key \u6216\u8005 node</td></tr><tr><td>insertAfter</td><td>\u4E3A Tree \u7684\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762\u589E\u52A0\u4E00\u4E2A\u8282\u70B9</td><td>(data, refNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684 data 2. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\u7684 data\u3001key \u6216\u8005 node</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>node-click</td><td>\u8282\u70B9\u88AB\u70B9\u51FB\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3001\u4E8B\u4EF6\u5BF9\u8C61\u3002</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u67D0\u4E00\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1Aevent\u3001\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3002</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u672C\u8EAB\u662F\u5426\u88AB\u9009\u4E2D\u3001\u8282\u70B9\u7684\u5B50\u6811\u4E2D\u662F\u5426\u6709\u88AB\u9009\u4E2D\u7684\u8282\u70B9</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u6811\u76EE\u524D\u7684\u9009\u4E2D\u72B6\u6001\u5BF9\u8C61\uFF0C\u5305\u542B checkedNodes\u3001checkedKeys\u3001halfCheckedNodes\u3001halfCheckedKeys \u56DB\u4E2A\u5C5E\u6027</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\uFF0C\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-drag-start</td><td>\u8282\u70B9\u5F00\u59CB\u62D6\u62FD\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-enter</td><td>\u62D6\u62FD\u8FDB\u5165\u5176\u4ED6\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-leave</td><td>\u62D6\u62FD\u79BB\u5F00\u67D0\u4E2A\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u79BB\u5F00\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-over</td><td>\u5728\u62D6\u62FD\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF08\u7C7B\u4F3C\u6D4F\u89C8\u5668\u7684 mouseover \u4E8B\u4EF6\uFF09</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u5F53\u524D\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-end</td><td>\u62D6\u62FD\u7ED3\u675F\u65F6\uFF08\u53EF\u80FD\u672A\u6210\u529F\uFF09\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\uFF08\u53EF\u80FD\u4E3A\u7A7A\uFF09\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr><tr><td>node-drop</td><td>\u62D6\u62FD\u6210\u529F\u5B8C\u6210\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u5C55\u5F00\u6536\u8D77\u56FE\u6807\uFF0C\u53C2\u6570\u4E3A { expanded, isLeaf }</td></tr></tbody></table>',11),Ve={setup(m){const r={"../../../examples/tree/accordion.vue":O,"../../../examples/tree/basic.vue":$,"../../../examples/tree/default.vue":K,"../../../examples/tree/disabled.vue":L,"../../../examples/tree/draggable.vue":q,"../../../examples/tree/filter.vue":Q,"../../../examples/tree/highlight-current.vue":U,"../../../examples/tree/icon.vue":G,"../../../examples/tree/lazy.vue":ee,"../../../examples/tree/show-checkbox.vue":re,"../../../examples/tree/slot.vue":pe};return(s,l)=>{const n=h("demo-block"),o=h("right-nav");return E(),x(A,null,[e("section",null,[be,_e,a(n,{fs:"",demos:g(r),"path-name":"tree/basic","source-code":`<template>\r
  <hl-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const data = ref([\r
  {\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        label: '\u4E8C\u7EA7 2-1',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 2-1-1',\r
          },\r
        ],\r
      },\r
      {\r
        label: '\u4E8C\u7EA7 2-2',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 2-2-1',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        label: '\u4E8C\u7EA7 3-1',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 3-1-1',\r
          },\r
        ],\r
      },\r
      {\r
        label: '\u4E8C\u7EA7 3-2',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 3-2-1',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
const handleNodeClick = data => {\r
  console.log(data)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),fe,ge,a(n,{fs:"",demos:g(r),"path-name":"tree/show-checkbox","source-code":`<template>\r
  <hl-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const props = ref({\r
  label: 'name',\r
  children: 'zones',\r
})\r
const count = ref(1)\r
\r
const handleCheckChange = (data, checked, indeterminate) => {\r
  console.log(data, checked, indeterminate)\r
}\r
const handleNodeClick = data => {\r
  console.log(data)\r
}\r
const loadNode = (node, resolve) => {\r
  if (node.level === 0) {\r
    return resolve([{ name: 'region1' }, { name: 'region2' }])\r
  }\r
  if (node.level > 3) return resolve([])\r
\r
  var hasChild\r
  if (node.data.name === 'region1') {\r
    hasChild = true\r
  } else if (node.data.name === 'region2') {\r
    hasChild = false\r
  } else {\r
    hasChild = Math.random() > 0.5\r
  }\r
\r
  setTimeout(() => {\r
    var data\r
    if (hasChild) {\r
      data = [\r
        {\r
          name: 'zone' + count.value++,\r
        },\r
        {\r
          name: 'zone' + count.value++,\r
        },\r
      ]\r
    } else {\r
      data = []\r
    }\r
\r
    resolve(data)\r
  }, 500)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Ee,a(n,{fs:"",demos:g(r),"path-name":"tree/lazy","source-code":`<template>\r
  <hl-tree :props="props" :load="loadNode" lazy show-checkbox />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const props = ref({\r
  label: 'name',\r
  children: 'zones',\r
  isLeaf: 'leaf',\r
})\r
const loadNode = (node, resolve) => {\r
  if (node.level === 0) {\r
    return resolve([{ name: 'region' }])\r
  }\r
  if (node.level > 1) return resolve([])\r
\r
  setTimeout(() => {\r
    const data = [\r
      {\r
        name: 'leaf',\r
        leaf: true,\r
      },\r
      {\r
        name: 'zone',\r
      },\r
    ]\r
\r
    resolve(data)\r
  }, 2000)\r
}\r
<\/script>\r
`},{default:f(()=>[me]),_:1},8,["demos"]),ke,ve,a(n,{fs:"",demos:g(r),"path-name":"tree/default","source-code":`<template>\r
  <hl-tree\r
    :data="data"\r
    show-checkbox\r
    node-key="id"\r
    :default-expanded-keys="[2, 3]"\r
    :default-checked-keys="[5]"\r
    :props="defaultProps"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        id: 4,\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            id: 9,\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
          {\r
            id: 10,\r
            label: '\u4E09\u7EA7 1-1-2',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    id: 2,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 5,\r
        label: '\u4E8C\u7EA7 2-1',\r
      },\r
      {\r
        id: 6,\r
        label: '\u4E8C\u7EA7 2-2',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        id: 7,\r
        label: '\u4E8C\u7EA7 3-1',\r
      },\r
      {\r
        id: 8,\r
        label: '\u4E8C\u7EA7 3-2',\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
\r
<\/script>\r
`},{default:f(()=>[ye]),_:1},8,["demos"]),Ce,xe,a(n,{fs:"",demos:g(r),"path-name":"tree/disabled","source-code":`<template>\r
  <hl-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 3,\r
        label: '\u4E8C\u7EA7 2-1',\r
        children: [\r
          {\r
            id: 4,\r
            label: '\u4E09\u7EA7 3-1-1',\r
          },\r
          {\r
            id: 5,\r
            label: '\u4E09\u7EA7 3-1-2',\r
            disabled: true,\r
          },\r
        ],\r
      },\r
      {\r
        id: 2,\r
        label: '\u4E8C\u7EA7 2-2',\r
        disabled: true,\r
        children: [\r
          {\r
            id: 6,\r
            label: '\u4E09\u7EA7 3-2-1',\r
          },\r
          {\r
            id: 7,\r
            label: '\u4E09\u7EA7 3-2-2',\r
            disabled: true,\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
\r
<\/script>\r
`},{default:f(()=>[Ae]),_:1},8,["demos"]),Ne,a(n,{fs:"",demos:g(r),"path-name":"tree/highlight-current","source-code":`<template>\r
  <hl-tree\r
    ref="tree"\r
    :data="data"\r
    show-checkbox\r
    default-expand-all\r
    node-key="id"\r
    highlight-current\r
    :props="defaultProps"\r
  />\r
\r
  <hl-group gap-x="var(--md)" class="buttons">\r
    <hl-button @click="getCheckedNodes">\u901A\u8FC7 node \u83B7\u53D6</hl-button>\r
    <hl-button @click="getCheckedKeys">\u901A\u8FC7 key \u83B7\u53D6</hl-button>\r
    <hl-button @click="setCheckedNodes">\u901A\u8FC7 node \u8BBE\u7F6E</hl-button>\r
    <hl-button @click="setCheckedKeys">\u901A\u8FC7 key \u8BBE\u7F6E</hl-button>\r
    <hl-button @click="resetChecked">\u6E05\u7A7A</hl-button>\r
  </hl-group>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        id: 4,\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            id: 9,\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
          {\r
            id: 10,\r
            label: '\u4E09\u7EA7 1-1-2',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    id: 2,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 5,\r
        label: '\u4E8C\u7EA7 2-1',\r
      },\r
      {\r
        id: 6,\r
        label: '\u4E8C\u7EA7 2-2',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        id: 7,\r
        label: '\u4E8C\u7EA7 3-1',\r
      },\r
      {\r
        id: 8,\r
        label: '\u4E8C\u7EA7 3-2',\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
const tree = ref(null)\r
\r
const getCheckedNodes = () => {\r
  console.log(tree.value.getCheckedNodes())\r
}\r
const getCheckedKeys = () => {\r
  console.log(tree.value.getCheckedKeys())\r
}\r
const setCheckedNodes = () => {\r
  tree.value.setCheckedNodes([\r
    {\r
      id: 5,\r
      label: '\u4E8C\u7EA7 2-1',\r
    },\r
    {\r
      id: 9,\r
      label: '\u4E09\u7EA7 1-1-1',\r
    },\r
  ])\r
}\r
const setCheckedKeys = () => {\r
  tree.value.setCheckedKeys([3])\r
}\r
const resetChecked = () => {\r
  tree.value.setCheckedKeys([])\r
}\r
\r
<\/script>\r
`},{default:f(()=>[ze]),_:1},8,["demos"]),we,je,a(n,{fs:"",demos:g(r),"path-name":"tree/slot","source-code":`<template>\r
  <div class="custom-tree-container">\r
    <div class="block">\r
      <p>\u4F7F\u7528 render-content</p>\r
      <hl-tree\r
        :data="data"\r
        show-checkbox\r
        node-key="id"\r
        default-expand-all\r
        :expand-on-click-node="false"\r
        :render-content="renderContent"\r
      />\r
    </div>\r
\r
\r
    <div class="block">\r
      <p>\u4F7F\u7528 slot</p>\r
      <hl-tree\r
        :data="data"\r
        show-checkbox\r
        node-key="id"\r
        default-expand-all\r
        :expand-on-click-node="false"\r
      >\r
        <template #default="{ node, data }">\r
          <hl-group full class="w-full" gap="var(--xs)" align="items-middle items-between">\r
            <hl-icon size="xs" class="static">\r
              <two-folder />\r
            </hl-icon>\r
            <div class="text-ellipsis w-full">{{ node.label }}</div>\r
            <div class="static">\r
              <a @click="append(data)">Append</a>\r
              <a @click="remove(node, data)">Delete</a>\r
            </div>\r
          </hl-group>\r
        </template>\r
      </hl-tree>\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { TwoFolder } from '@hongluan-ui/icons'\r
\r
let id = 1000\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        id: 4,\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            id: 9,\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
          {\r
            id: 10,\r
            label: '\u4E09\u7EA7 1-1-2',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    id: 2,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 5,\r
        label: '\u4E8C\u7EA7 2-1',\r
      },\r
      {\r
        id: 6,\r
        label: '\u4E8C\u7EA7 2-2',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        id: 7,\r
        label: '\u4E8C\u7EA7 3-1',\r
      },\r
      {\r
        id: 8,\r
        label: '\u4E8C\u7EA7 3-2',\r
      },\r
    ],\r
  },\r
])\r
\r
const append = d => {\r
  const newChild = { id: id++, label: 'testtest', children: [] }\r
  if (!d.children) {\r
    d.children = []\r
  }\r
  d.children.push(newChild)\r
}\r
const remove = (node, d) => {\r
  const parent = node.parent\r
  const children = parent.data.children || parent.data\r
  const index = children.findIndex(d => d.id === d.id)\r
  children.splice(index, 1)\r
}\r
const renderContent = (h, { node, data, store }) => {\r
  return h(\r
    'span',\r
    {\r
      class: 'custom-tree-node',\r
    },\r
    h('span', {\r
      style: 'overflow: hidden; white-space: nowrap; text-overflow: ellipsis;',\r
    }, null, node.label),\r
    h(\r
      'span',\r
      null,\r
      h(\r
        'a',\r
        {\r
          onClick: () => append(data),\r
        },\r
        'Append ',\r
      ),\r
      h(\r
        'a',\r
        {\r
          onClick: () => remove(node, data),\r
        },\r
        'Delete',\r
      ),\r
    ),\r
  )\r
}\r
<\/script>\r
\r
<style>\r
.custom-tree-node {\r
  flex: 1;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  font-size: 14px;\r
  padding-right: 8px;\r
}\r
</style>\r
`},{default:f(()=>[Te]),_:1},8,["demos"]),De,Pe,a(n,{fs:"",demos:g(r),"path-name":"tree/filter","source-code":`<template>\r
  <hl-input v-model="filterText" placeholder="\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4" />\r
\r
  <hl-tree\r
    ref="tree"\r
    class="filter-tree"\r
    :data="data"\r
    :props="defaultProps"\r
    default-expand-all\r
    :filter-node-method="filterNode"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref, watch } from 'vue'\r
\r
const filterText = ref('')\r
const tree = ref(null)\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        id: 4,\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            id: 9,\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
          {\r
            id: 10,\r
            label: '\u4E09\u7EA7 1-1-2',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    id: 2,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 5,\r
        label: '\u4E8C\u7EA7 2-1',\r
      },\r
      {\r
        id: 6,\r
        label: '\u4E8C\u7EA7 2-2',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        id: 7,\r
        label: '\u4E8C\u7EA7 3-1',\r
      },\r
      {\r
        id: 8,\r
        label: '\u4E8C\u7EA7 3-2',\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
\r
const filterNode = (value, data) => {\r
  if (!value) return true\r
  return data.label.indexOf(value) !== -1\r
}\r
\r
watch(filterText, val => {\r
  tree.value.filter(val)\r
})\r
\r
<\/script>\r
`},{default:f(()=>[Oe]),_:1},8,["demos"]),Se,$e,a(n,{fs:"",demos:g(r),"path-name":"tree/accordion","source-code":`<template>\r
  <hl-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const data = ref([\r
  {\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        label: '\u4E8C\u7EA7 2-1',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 2-1-1',\r
          },\r
        ],\r
      },\r
      {\r
        label: '\u4E8C\u7EA7 2-2',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 2-2-1',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        label: '\u4E8C\u7EA7 3-1',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 3-1-1',\r
          },\r
        ],\r
      },\r
      {\r
        label: '\u4E8C\u7EA7 3-2',\r
        children: [\r
          {\r
            label: '\u4E09\u7EA7 3-2-1',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
\r
const handleNodeClick = data => {\r
  console.log(data)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Fe,Ke,a(n,{fs:"",demos:g(r),"path-name":"tree/draggable","source-code":`<template>\r
  <hl-tree\r
    :data="data"\r
    node-key="id"\r
    default-expand-all\r
    draggable\r
    :allow-drop="allowDrop"\r
    :allow-drag="allowDrag"\r
    @node-drag-start="handleDragStart"\r
    @node-drag-enter="handleDragEnter"\r
    @node-drag-leave="handleDragLeave"\r
    @node-drag-over="handleDragOver"\r
    @node-drag-end="handleDragEnd"\r
    @node-drop="handleDrop"\r
  />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        id: 4,\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            id: 9,\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
          {\r
            id: 10,\r
            label: '\u4E09\u7EA7 1-1-2',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    id: 2,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 5,\r
        label: '\u4E8C\u7EA7 2-1',\r
      },\r
      {\r
        id: 6,\r
        label: '\u4E8C\u7EA7 2-2',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        id: 7,\r
        label: '\u4E8C\u7EA7 3-1',\r
      },\r
      {\r
        id: 8,\r
        label: '\u4E8C\u7EA7 3-2',\r
        children: [\r
          {\r
            id: 11,\r
            label: '\u4E09\u7EA7 3-2-1',\r
          },\r
          {\r
            id: 12,\r
            label: '\u4E09\u7EA7 3-2-2',\r
          },\r
          {\r
            id: 13,\r
            label: '\u4E09\u7EA7 3-2-3',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
\r
const handleDragStart = (node, ev) => {\r
  console.log('drag start', node)\r
}\r
const handleDragEnter = (draggingNode, dropNode, ev) => {\r
  console.log('tree drag enter: ', dropNode.label)\r
}\r
const handleDragLeave = (draggingNode, dropNode, ev) => {\r
  console.log('tree drag leave: ', dropNode.label)\r
}\r
const handleDragOver = (draggingNode, dropNode, ev) => {\r
  console.log('tree drag over: ', dropNode.label)\r
}\r
const handleDragEnd = (draggingNode, dropNode, dropType, ev) => {\r
  console.log('tree drag end: ', dropNode && dropNode.label, dropType)\r
}\r
const handleDrop = (draggingNode, dropNode, dropType, ev) => {\r
  console.log('tree drop: ', dropNode.label, dropType)\r
}\r
const allowDrop = (draggingNode, dropNode, type) => {\r
  if (dropNode.data.label === '\u4E8C\u7EA7 3-1') {\r
    return type !== 'inner'\r
  } else {\r
    return true\r
  }\r
}\r
const allowDrag = draggingNode => {\r
  return draggingNode.data.label.indexOf('\u4E09\u7EA7 3-2-2') === -1\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Me,a(n,{fs:"",demos:g(r),"path-name":"tree/icon","source-code":`<template>\r
  <hl-tree\r
    :data="data"\r
    node-key="id"\r
    :default-expanded-keys="[2, 3]"\r
    :props="defaultProps"\r
  >\r
    <template #icon="{ expanded }">\r
      <hl-icon>\r
        <FillQq v-if="expanded" />\r
        <FillWechat v-else />\r
      </hl-icon>\r
    </template>\r
  </hl-tree>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { FillWechat, FillQq } from '@hongluan-ui/icons'\r
\r
const data = ref([\r
  {\r
    id: 1,\r
    label: '\u4E00\u7EA7 1',\r
    children: [\r
      {\r
        id: 4,\r
        label: '\u4E8C\u7EA7 1-1',\r
        children: [\r
          {\r
            id: 9,\r
            label: '\u4E09\u7EA7 1-1-1',\r
          },\r
          {\r
            id: 10,\r
            label: '\u4E09\u7EA7 1-1-2',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    id: 2,\r
    label: '\u4E00\u7EA7 2',\r
    children: [\r
      {\r
        id: 5,\r
        label: '\u4E8C\u7EA7 2-1',\r
      },\r
      {\r
        id: 6,\r
        label: '\u4E8C\u7EA7 2-2',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    label: '\u4E00\u7EA7 3',\r
    children: [\r
      {\r
        id: 7,\r
        label: '\u4E8C\u7EA7 3-1',\r
      },\r
      {\r
        id: 8,\r
        label: '\u4E8C\u7EA7 3-2',\r
      },\r
    ],\r
  },\r
])\r
const defaultProps = ref({\r
  children: 'children',\r
  label: 'label',\r
})\r
\r
<\/script>\r
`},null,8,["demos"]),Le]),a(o)],64)}}};export{Ve as default};
