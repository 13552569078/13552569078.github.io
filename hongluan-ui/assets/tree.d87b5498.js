import{p as v,R as i,H as u,L as g,F as y,W as x,X as a,P as h,a1 as A,S as o,Z as w,V as m,Q as e,T,o as D}from"./vue.85e091e9.js";import{a5 as j,a6 as S,a7 as $}from"./hongluan-icons.6cddbf05.js";const F=v({setup(k){const d=i([{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]),l=i({children:"children",label:"label"}),c=r=>{console.log(r)};return(r,n)=>{const t=u("hl-tree");return g(),y(t,{data:d.value,props:l.value,accordion:"",onNodeClick:c},null,8,["data","props"])}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const O=v({setup(k){const d=i([{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]),l=i({children:"children",label:"label"}),c=r=>{console.log(r)};return(r,n)=>{const t=u("hl-tree");return g(),y(t,{data:d.value,props:l.value,onNodeClick:c},null,8,["data","props"])}}});var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const M=v({setup(k){const d=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),l=i({children:"children",label:"label"});return(c,r)=>{const n=u("hl-tree");return g(),y(n,{data:d.value,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:l.value},null,8,["data","props"])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const B=o("\u5168\u5C40\u7981\u7528"),q=v({setup(k){const d=i(!1),l=i([{id:1,label:"\u4E00\u7EA7 2",children:[{id:3,label:"\u4E8C\u7EA7 2-1",children:[{id:4,label:"\u4E09\u7EA7 3-1-1"},{id:5,label:"\u4E09\u7EA7 3-1-2",disabled:!0}]},{id:2,label:"\u4E8C\u7EA7 2-2",disabled:!0,children:[{id:6,label:"\u4E09\u7EA7 3-2-1"},{id:7,label:"\u4E09\u7EA7 3-2-2",disabled:!0}]}]}]);return i({children:"children",label:"label"}),(c,r)=>{const n=u("hl-button"),t=u("hl-tree");return g(),x(A,null,[a(n,{type:"primary",onClick:r[0]||(r[0]=s=>d.value=!d.value)},{default:h(()=>[B]),_:1}),a(t,{data:l.value,"show-checkbox":"","checkbox-disabled":d.value,"node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5]},null,8,["data","checkbox-disabled"])],64)}}});var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const Q=v({setup(k){const d=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2",children:[{id:11,label:"\u4E09\u7EA7 3-2-1"},{id:12,label:"\u4E09\u7EA7 3-2-2"},{id:13,label:"\u4E09\u7EA7 3-2-3"}]}]}]);i({children:"children",label:"label"});const l=(f,p)=>{console.log("drag start",f)},c=(f,p,b)=>{console.log("tree drag enter: ",p.label)},r=(f,p,b)=>{console.log("tree drag leave: ",p.label)},n=(f,p,b)=>{console.log("tree drag over: ",p.label)},t=(f,p,b,C)=>{console.log("tree drag end: ",p&&p.label,b)},s=(f,p,b,C)=>{console.log("tree drop: ",p.label,b)},_=(f,p,b)=>p.data.label==="\u4E8C\u7EA7 3-1"?b!=="inner":!0,E=f=>f.data.label.indexOf("\u4E09\u7EA7 3-2-2")===-1;return(f,p)=>{const b=u("hl-tree");return g(),y(b,{data:d.value,"node-key":"id","default-expand-all":"",draggable:"","show-checkbox":"","allow-drop":_,"allow-drag":E,onNodeDragStart:l,onNodeDragEnter:c,onNodeDragLeave:r,onNodeDragOver:n,onNodeDragEnd:t,onNodeDrop:s},null,8,["data"])}}});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const H=v({setup(k){const d=i(""),l=i(null),c=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),r=i({children:"children",label:"label"}),n=(t,s)=>t?s.label.indexOf(t)!==-1:!0;return w(d,t=>{l.value.filter(t)}),(t,s)=>{const _=u("hl-input"),E=u("hl-tree");return g(),x(A,null,[a(_,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=f=>d.value=f),placeholder:"\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4"},null,8,["modelValue"]),a(E,{ref_key:"tree",ref:l,class:"filter-tree",data:c.value,props:r.value,"default-expand-all":"","filter-node-method":n},null,8,["data","props"])],64)}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const X=o("\u901A\u8FC7 node \u83B7\u53D6"),R=o("\u901A\u8FC7 key \u83B7\u53D6"),Z=o("\u901A\u8FC7 node \u8BBE\u7F6E"),J=o("\u901A\u8FC7 key \u8BBE\u7F6E"),U=o("\u6E05\u7A7A"),G=v({setup(k){const d=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),l=i({children:"children",label:"label"}),c=i(null),r=()=>{console.log(c.value.getCheckedNodes())},n=()=>{console.log(c.value.getCheckedKeys())},t=()=>{c.value.setCheckedNodes([{id:5,label:"\u4E8C\u7EA7 2-1"},{id:9,label:"\u4E09\u7EA7 1-1-1"}])},s=()=>{c.value.setCheckedKeys([3])},_=()=>{c.value.setCheckedKeys([])};return(E,f)=>{const p=u("hl-tree"),b=u("hl-button"),C=u("hl-group");return g(),x(A,null,[a(p,{ref_key:"tree",ref:c,data:d.value,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:l.value},null,8,["data","props"]),a(C,{"gap-x":"var(--md)",class:"buttons"},{default:h(()=>[a(b,{onClick:r},{default:h(()=>[X]),_:1}),a(b,{onClick:n},{default:h(()=>[R]),_:1}),a(b,{onClick:t},{default:h(()=>[Z]),_:1}),a(b,{onClick:s},{default:h(()=>[J]),_:1}),a(b,{onClick:_},{default:h(()=>[U]),_:1})]),_:1})],64)}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const ee=v({setup(k){const d=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),l=i({children:"children",label:"label"});return(c,r)=>{const n=u("hl-icon"),t=u("hl-tree");return g(),y(t,{data:d.value,"node-key":"id","default-expanded-keys":[2,3],props:l.value},{icon:h(({expanded:s})=>[a(n,null,{default:h(()=>[s?(g(),y(m(j),{key:0})):(g(),y(m(S),{key:1}))]),_:2},1024)]),_:1},8,["data","props"])}}});var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const te=v({setup(k){const d=i({label:"name",children:"zones",isLeaf:"leaf"}),l=(c,r)=>{if(c.level===0)return r([{name:"region"}]);if(c.level>1)return r([]);setTimeout(()=>{r([{name:"leaf",leaf:!0},{name:"zone"}])},2e3)};return(c,r)=>{const n=u("hl-tree");return g(),y(n,{props:d.value,load:l,lazy:"","show-checkbox":""},null,8,["props"])}}});var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const le=v({setup(k){const d={label:"name",children:"zones",isLeaf:"leaf"};let l=0;const c=(r,n,t)=>{if(r.level===0)return n([{name:"region"}]);l++,r.level>=1&&setTimeout(()=>l>3?n([{name:"zone1",leaf:!0},{name:"zone2",leaf:!0},{name:"zone3",leaf:!0}]):t(),3e3)};return(r,n)=>{const t=u("hl-tree");return g(),y(t,{style:{"max-width":"600px"},props:d,load:c,lazy:""})}}});var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const oe=v({setup(k){const d=i({label:"name",children:"zones",hideCheckbox:"hideCheckbox"}),l=i(1),c=(n,t,s)=>{console.log(n,t,s)},r=(n,t)=>{if(n.level===0)return t([{name:"region1"},{name:"region2",disabled:!0}]);if(n.level>3)return t([]);var s;n.data.name==="region1"?s=!0:n.data.name==="region2"?s=!1:s=Math.random()>.5,setTimeout(()=>{var _;s?_=[{name:"zone-"+l.value++,hideCheckbox:!0},{name:"zone"+l.value++}]:_=[],t(_)},500)};return(n,t)=>{const s=u("hl-tree");return g(),y(s,{props:d.value,load:r,lazy:"","show-checkbox":"",onCheckChange:c},null,8,["props"])}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});const ce={class:"custom-tree-container"},se={class:"block"},ie=e("p",null,"\u4F7F\u7528 render-content",-1),ue={class:"block"},he=e("p",null,"\u4F7F\u7528 slot",-1),pe={class:"text-ellipsis w-full"},be=v({setup(k){let d=1e3;const l=i([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),c=t=>{const s={id:d++,label:"testtest",children:[]};t.children||(t.children=[]),t.children.push(s)},r=(t,s)=>{const _=t.parent,E=_.data.children||_.data,f=E.findIndex(p=>p.id===p.id);E.splice(f,1)},n=(t,{node:s,data:_,store:E})=>t("div",{class:"hl-group w-full items-between overflow-hidden"},t("span",{class:"text-ellipsis w-full"},null,s.label),t("span",{class:"gap-xxs"},null,t("a",{onClick:()=>c(_)},"\u6DFB\u52A0 "),t("a",{onClick:()=>r(s)},"\u5220\u9664")));return(t,s)=>{const _=u("hl-tree"),E=u("hl-icon"),f=u("two-plus"),p=u("two-remove"),b=u("hl-group");return g(),x("div",ce,[e("div",se,[ie,a(_,{data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":n},null,8,["data"])]),e("div",ue,[he,a(_,{data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:h(({node:C,data:N})=>[a(b,{full:"",class:"w-full overflow-hidden",gap:"var(--xs)",align:"items-middle items-between"},{default:h(()=>[a(E,{size:"xs",class:"static"},{default:h(()=>[a(m($))]),_:1}),e("div",pe,T(C.label),1),a(b,{class:"static p-r-sm",align:"items-middle",gap:"var(--xs)"},{default:h(()=>[a(E,{type:"primary",onClick:z=>c(N)},{default:h(()=>[a(f)]),_:2},1032,["onClick"]),a(E,{type:"primary",onClick:z=>r(C)},{default:h(()=>[a(p)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data"])])])}}});var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:be});const fe=e("h1",null,"Tree \u6811\u5F62\u63A7\u4EF6",-1),me=e("p",null,"\u7528\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\u5C55\u793A\u4FE1\u606F\uFF0C\u53EF\u5C55\u5F00\u6216\u6298\u53E0\u3002",-1),ge=e("h2",{id:"ke-xuan-ze"},[e("a",{class:"header-anchor",href:"#ke-xuan-ze"}),o(" \u53EF\u9009\u62E9")],-1),ke=e("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86\u52A8\u6001\u52A0\u8F7D\u8282\u70B9\u6570\u636E\u7684\u65B9\u6CD5\u3002",-1),Ee=e("h2",{id:"lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"},[e("a",{class:"header-anchor",href:"#lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"}),o(" \u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u53F6\u5B50\u8282\u70B9")],-1),ve=e("div",null,[e("p",null,"\u7531\u4E8E\u5728\u70B9\u51FB\u8282\u70B9\u65F6\u624D\u8FDB\u884C\u8BE5\u5C42\u6570\u636E\u7684\u83B7\u53D6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Tree \u65E0\u6CD5\u9884\u77E5\u67D0\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u6240\u4EE5\u4F1A\u4E3A\u6BCF\u4E2A\u8282\u70B9\u6DFB\u52A0\u4E00\u4E2A\u4E0B\u62C9\u6309\u94AE\uFF0C\u5982\u679C\u8282\u70B9\u6CA1\u6709\u4E0B\u5C42\u6570\u636E\uFF0C\u5219\u70B9\u51FB\u540E\u4E0B\u62C9\u6309\u94AE\u4F1A\u6D88\u5931\u3002\u540C\u65F6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u63D0\u524D\u544A\u77E5 Tree \u67D0\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4ECE\u800C\u907F\u514D\u5728\u53F6\u5B50\u8282\u70B9\u524D\u6E32\u67D3\u4E0B\u62C9\u6309\u94AE\u3002")],-1),ye=e("h2",{id:"mo-ren-zhan-kai-he-mo-ren-xuan-zhong"},[e("a",{class:"header-anchor",href:"#mo-ren-zhan-kai-he-mo-ren-xuan-zhong"}),o(" \u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D")],-1),Ce=e("p",null,"\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u5C55\u5F00\u6216\u9ED8\u8BA4\u9009\u4E2D",-1),xe=e("div",null,[e("p",null,[o("\u5206\u522B\u901A\u8FC7"),e("code",null,"default-expanded-keys"),o("\u548C"),e("code",null,"default-checked-keys"),o("\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E"),e("code",null,"node-key"),o("\uFF0C\u5176\u503C\u4E3A\u8282\u70B9\u6570\u636E\u4E2D\u7684\u4E00\u4E2A\u5B57\u6BB5\u540D\uFF0C\u8BE5\u5B57\u6BB5\u5728\u6574\u68F5\u6811\u4E2D\u662F\u552F\u4E00\u7684\u3002")])],-1),Ae=e("h2",{id:"duo-ci-lan-jia-zai"},[e("a",{class:"header-anchor",href:"#duo-ci-lan-jia-zai"}),o(" \u591A\u6B21\u61D2\u52A0\u8F7D")],-1),Ne=e("div",null,[e("p",null,"\u5F53\u8FDC\u7A0B\u61D2\u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u61D2\u52A0\u8F7D\u53EF\u80FD\u5931\u8D25\u591A\u6B21\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8C03\u7528reject\u4FDD\u6301\u8282\u70B9\u72B6\u6001\u5E76\u672A\u540E\u7EED\u7EE7\u7EED\u6267\u884C\u61D2\u52A0\u8F7D\u64CD\u4F5C\u3002")],-1),ze=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),o(" \u7981\u7528\u72B6\u6001")],-1),we=e("p",null,"\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001",-1),Te=e("div",null,[e("p",null,[o("\u901A\u8FC7"),e("code",null,"disabled"),o("\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\u3002")])],-1),De=e("h2",{id:"shu-jie-dian-de-xuan-ze"},[e("a",{class:"header-anchor",href:"#shu-jie-dian-de-xuan-ze"}),o(" \u6811\u8282\u70B9\u7684\u9009\u62E9")],-1),je=e("div",null,[e("p",null,[o("\u672C\u4F8B\u5C55\u793A\u5982\u4F55\u83B7\u53D6\u548C\u8BBE\u7F6E\u9009\u4E2D\u8282\u70B9\u3002\u83B7\u53D6\u548C\u8BBE\u7F6E\u5404\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7 node \u6216\u901A\u8FC7 key\u3002\u5982\u679C\u9700\u8981\u901A\u8FC7 key \u6765\u83B7\u53D6\u6216\u8BBE\u7F6E\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E"),e("code",null,"node-key"),o("\u3002")])],-1),Se=e("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),o(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),$e=e("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),Fe=e("div",null,[e("p",null,[o("\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u6CD5\u8FDB\u884C\u6811\u8282\u70B9\u5185\u5BB9\u7684\u81EA\u5B9A\u4E49\uFF1A"),e("code",null,"render-content"),o("\u548C scoped slot\u3002\u4F7F\u7528"),e("code",null,"render-content"),o("\u6307\u5B9A\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u9700\u8981\u7684\u8282\u70B9\u533A\u5185\u5BB9\u5373\u53EF\u3002\u6E32\u67D3\u51FD\u6570\u7684\u7528\u6CD5\u8BF7\u53C2\u8003 Vue \u6587\u6863\u3002\u4F7F\u7528 scoped slot \u4F1A\u4F20\u5165\u4E24\u4E2A\u53C2\u6570"),e("code",null,"node"),o("\u548C"),e("code",null,"data"),o("\uFF0C\u5206\u522B\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\u3002\u6CE8\u610F\uFF1A\u7531\u4E8E jsfiddle \u4E0D\u652F\u6301 JSX \u8BED\u6CD5\uFF0C\u6240\u4EE5"),e("code",null,"render-content"),o("\u793A\u4F8B\u5728 jsfiddle \u4E2D\u65E0\u6CD5\u8FD0\u884C\u3002\u4F46\u662F\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u53EA\u8981\u6B63\u786E\u5730\u914D\u7F6E\u4E86\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002")])],-1),Pe=e("h2",{id:"jie-dian-guo-lu"},[e("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),o(" \u8282\u70B9\u8FC7\u6EE4")],-1),Oe=e("p",null,"\u901A\u8FC7\u5173\u952E\u5B57\u8FC7\u6EE4\u6811\u8282\u70B9",-1),Ke=e("div",null,[e("p",null,[o("\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684"),e("code",null,"filter"),o("\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6E"),e("code",null,"filter-node-method"),o("\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")])],-1),Me=e("h2",{id:"shou-feng-qin-mo-shi"},[e("a",{class:"header-anchor",href:"#shou-feng-qin-mo-shi"}),o(" \u624B\u98CE\u7434\u6A21\u5F0F")],-1),Le=e("p",null,"\u5BF9\u4E8E\u540C\u4E00\u7EA7\u7684\u8282\u70B9\uFF0C\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A",-1),Be=e("h2",{id:"ke-tuo-zhuai-jie-dian"},[e("a",{class:"header-anchor",href:"#ke-tuo-zhuai-jie-dian"}),o(" \u53EF\u62D6\u62FD\u8282\u70B9")],-1),qe=e("p",null,"\u901A\u8FC7 draggable \u5C5E\u6027\u53EF\u8BA9\u8282\u70B9\u53D8\u4E3A\u53EF\u62D6\u62FD\u3002",-1),Ve=e("h2",{id:"zi-ding-yi-zhan-kai-shou-qi-tu-biao"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-zhan-kai-shou-qi-tu-biao"}),o(" \u81EA\u5B9A\u4E49\u5C55\u5F00\u6536\u8D77\u56FE\u6807")],-1),Qe=D('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>node-key</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>render-after-expand</td><td>\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u6811\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 lazy \u5C5E\u6027\u4E3A true \u65F6\u751F\u6548</td><td>function(node, resolve)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>render-content</td><td>\u6811\u8282\u70B9\u7684\u5185\u5BB9\u533A\u7684\u6E32\u67D3 Function</td><td>Function(h, { node, data, store })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u662F false\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-node-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>\u2014</td><td>16</td></tr><tr><td>icon-class</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E load \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>draggable</td><td>\u662F\u5426\u5F00\u542F\u62D6\u62FD\u8282\u70B9\u529F\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>allow-drag</td><td>\u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD</td><td>Function(node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>allow-drop</td><td>\u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002<code>type</code> \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A&#39;prev&#39;\u3001&#39;inner&#39; \u548C &#39;next&#39;\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E</td><td>Function(draggingNode, dropNode, type)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>gap</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>checkbox-disabled</td><td>\u5168\u5C40\u7981\u7528checkbox</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>isLeaf</td><td>\u6307\u5B9A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4EC5\u5728\u6307\u5B9A\u4E86 lazy \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u751F\u6548</td><td>boolean, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>class</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9class</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hideCheckbox</td><td>\u5355\u72EC\u9690\u85CF\u6307\u5B9A\u8282\u70B9\u7684\u9009\u62E9\u6846</td><td>string</td><td>\u2014</td><td>hideCheckbox</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> \u5185\u90E8\u4F7F\u7528\u4E86 Node \u7C7B\u578B\u7684\u5BF9\u8C61\u6765\u5305\u88C5\u7528\u6237\u4F20\u5165\u7684\u6570\u636E\uFF0C\u7528\u6765\u4FDD\u5B58\u76EE\u524D\u8282\u70B9\u7684\u72B6\u6001\u3002 <code>Tree</code> \u62E5\u6709\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>\u63A5\u6536\u4E00\u4E2A\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u4F1A\u5728 filter-node-method \u4E2D\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570</td></tr><tr><td>updateKeyChildren</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u8282\u70B9\u5B50\u5143\u7D20\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key, data) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8282\u70B9 key 2. \u8282\u70B9\u6570\u636E\u7684\u6570\u7EC4</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly, includeHalfChecked) \u63A5\u6536\u4E24\u4E2A boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C1. \u662F\u5426\u53EA\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code> 2. \u662F\u5426\u5305\u542B\u534A\u9009\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setCheckedNodes</td><td>\u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(nodes) \u63A5\u6536\u52FE\u9009\u8282\u70B9\u6570\u636E\u7684\u6570\u7EC4</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly) \u63A5\u6536\u4E00\u4E2A boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u82E5\u4E3A <code>true</code> \u5219\u4EC5\u8FD4\u56DE\u88AB\u9009\u4E2D\u7684\u53F6\u5B50\u8282\u70B9\u7684 keys\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(keys, leafOnly) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u52FE\u9009\u8282\u70B9\u7684 key \u7684\u6570\u7EC4 2. boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u82E5\u4E3A <code>true</code> \u5219\u4EC5\u8BBE\u7F6E\u53F6\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key / data \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key/data, checked, deep) \u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF0C1. \u52FE\u9009\u8282\u70B9\u7684 key \u6216\u8005 data 2. boolean \u7C7B\u578B\uFF0C\u8282\u70B9\u662F\u5426\u9009\u4E2D 3. boolean \u7C7B\u578B\uFF0C\u662F\u5426\u8BBE\u7F6E\u5B50\u8282\u70B9 \uFF0C\u9ED8\u8BA4\u4E3A false</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE null</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE null</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key, shouldAutoExpandParent=true) 1. \u5F85\u88AB\u9009\u8282\u70B9\u7684 key\uFF0C\u82E5\u4E3A null \u5219\u53D6\u6D88\u5F53\u524D\u9AD8\u4EAE\u7684\u8282\u70B9 2. \u662F\u5426\u6269\u5C55\u7236\u8282\u70B9</td></tr><tr><td>setCurrentNode</td><td>\u901A\u8FC7 node \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(node, shouldAutoExpandParent=true) 1. \u5F85\u88AB\u9009\u8282\u70B9\u7684 node 2. \u662F\u5426\u6269\u5C55\u7236\u8282\u70B9</td></tr><tr><td>getNode</td><td>\u6839\u636E data \u6216\u8005 key \u62FF\u5230 Tree \u7EC4\u4EF6\u4E2D\u7684 node</td><td>(data) \u8981\u83B7\u5F97 node \u7684 key \u6216\u8005 data</td></tr><tr><td>getNodePath</td><td>\u6839\u636E data \u6216\u8005 key \u62FF\u5230 Tree \u7EC4\u4EF6\u4E2D\u7684 node \u5B8C\u6574\u8DEF\u5F84</td><td>(data) \u8981\u83B7\u5F97 node \u7684 data \u6570\u7EC4</td></tr><tr><td>remove</td><td>\u5220\u9664 Tree \u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(data) \u8981\u5220\u9664\u7684\u8282\u70B9\u7684 data \u6216\u8005 node</td></tr><tr><td>append</td><td>\u4E3A Tree \u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\u8FFD\u52A0\u4E00\u4E2A\u5B50\u8282\u70B9</td><td>(data, parentNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u8FFD\u52A0\u7684\u5B50\u8282\u70B9\u7684 data 2. \u5B50\u8282\u70B9\u7684 parent \u7684 data\u3001key \u6216\u8005 node</td></tr><tr><td>insertBefore</td><td>\u4E3A Tree \u7684\u4E00\u4E2A\u8282\u70B9\u7684\u524D\u9762\u589E\u52A0\u4E00\u4E2A\u8282\u70B9</td><td>(data, refNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684 data 2. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9\u7684 data\u3001key \u6216\u8005 node</td></tr><tr><td>insertAfter</td><td>\u4E3A Tree \u7684\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762\u589E\u52A0\u4E00\u4E2A\u8282\u70B9</td><td>(data, refNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684 data 2. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\u7684 data\u3001key \u6216\u8005 node</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>node-click</td><td>\u8282\u70B9\u88AB\u70B9\u51FB\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3001\u4E8B\u4EF6\u5BF9\u8C61\u3002</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u67D0\u4E00\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1Aevent\u3001\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3002</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u672C\u8EAB\u662F\u5426\u88AB\u9009\u4E2D\u3001\u8282\u70B9\u7684\u5B50\u6811\u4E2D\u662F\u5426\u6709\u88AB\u9009\u4E2D\u7684\u8282\u70B9</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u6811\u76EE\u524D\u7684\u9009\u4E2D\u72B6\u6001\u5BF9\u8C61\uFF0C\u5305\u542B checkedNodes\u3001checkedKeys\u3001halfCheckedNodes\u3001halfCheckedKeys \u56DB\u4E2A\u5C5E\u6027</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\uFF0C\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-drag-start</td><td>\u8282\u70B9\u5F00\u59CB\u62D6\u62FD\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-enter</td><td>\u62D6\u62FD\u8FDB\u5165\u5176\u4ED6\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-leave</td><td>\u62D6\u62FD\u79BB\u5F00\u67D0\u4E2A\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u79BB\u5F00\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-over</td><td>\u5728\u62D6\u62FD\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF08\u7C7B\u4F3C\u6D4F\u89C8\u5668\u7684 mouseover \u4E8B\u4EF6\uFF09</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u5F53\u524D\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-end</td><td>\u62D6\u62FD\u7ED3\u675F\u65F6\uFF08\u53EF\u80FD\u672A\u6210\u529F\uFF09\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\uFF08\u53EF\u80FD\u4E3A\u7A7A\uFF09\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr><tr><td>node-drop</td><td>\u62D6\u62FD\u6210\u529F\u5B8C\u6210\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u5C55\u5F00\u6536\u8D77\u56FE\u6807\uFF0C\u53C2\u6570\u4E3A { expanded, isLeaf }</td></tr><tr><td>empty</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u4E3A\u7A7A\u65F6\u7684\u5185\u5BB9</td></tr></tbody></table>',11),Ie={setup(k){const d="tree",l={"../../../examples/tree/accordion.vue":P,"../../../examples/tree/basic.vue":K,"../../../examples/tree/default.vue":L,"../../../examples/tree/disabled.vue":V,"../../../examples/tree/draggable.vue":W,"../../../examples/tree/filter.vue":I,"../../../examples/tree/highlight-current.vue":Y,"../../../examples/tree/icon.vue":ne,"../../../examples/tree/lazy.vue":de,"../../../examples/tree/multiple-times-load.vue":ae,"../../../examples/tree/show-checkbox.vue":re,"../../../examples/tree/slot.vue":_e};return(c,r)=>{const n=u("demo-block"),t=u("right-nav");return g(),x(A,null,[e("section",null,[fe,me,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/basic","source-code":`<template>
  <hl-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    label: '\u4E00\u7EA7 1',
    children: [
      {
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            label: '\u4E09\u7EA7 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: '\u4E00\u7EA7 2',
    children: [
      {
        label: '\u4E8C\u7EA7 2-1',
        children: [
          {
            label: '\u4E09\u7EA7 2-1-1',
          },
        ],
      },
      {
        label: '\u4E8C\u7EA7 2-2',
        children: [
          {
            label: '\u4E09\u7EA7 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: '\u4E00\u7EA7 3',
    children: [
      {
        label: '\u4E8C\u7EA7 3-1',
        children: [
          {
            label: '\u4E09\u7EA7 3-1-1',
          },
        ],
      },
      {
        label: '\u4E8C\u7EA7 3-2',
        children: [
          {
            label: '\u4E09\u7EA7 3-2-1',
          },
        ],
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})
const handleNodeClick = data => {
  console.log(data)
}

<\/script>
`},null,8,["demos"]),ge,ke,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/show-checkbox","source-code":`<template>
  <hl-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = ref({
  label: 'name',
  children: 'zones',
  hideCheckbox: 'hideCheckbox',
})
const count = ref(1)

const handleCheckChange = (data, checked, indeterminate) => {
  console.log(data, checked, indeterminate)
}
const handleNodeClick = data => {
  console.log(data)
}
const loadNode = (node, resolve) => {
  if (node.level === 0) {
    return resolve([{ name: 'region1' }, { name: 'region2', disabled: true }])
  }
  if (node.level > 3) return resolve([])

  var hasChild
  if (node.data.name === 'region1') {
    hasChild = true
  } else if (node.data.name === 'region2') {
    hasChild = false
  } else {
    hasChild = Math.random() > 0.5
  }

  setTimeout(() => {
    var data
    if (hasChild) {
      data = [
        {
          name: 'zone-' + count.value++,
          hideCheckbox: true,
        },
        {
          name: 'zone' + count.value++,
        },
      ]
    } else {
      data = []
    }

    resolve(data)
  }, 500)
}

<\/script>
`},null,8,["demos"]),Ee,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/lazy","source-code":`<template>
  <hl-tree :props="props" :load="loadNode" lazy show-checkbox />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = ref({
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
})
const loadNode = (node, resolve) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  if (node.level > 1) return resolve([])

  setTimeout(() => {
    const data = [
      {
        name: 'leaf',
        leaf: true,
      },
      {
        name: 'zone',
      },
    ]

    resolve(data)
  }, 2000)
}
<\/script>
`},{default:h(()=>[ve]),_:1},8,["demos"]),ye,Ce,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/default","source-code":`<template>
  <hl-tree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 1',
    children: [
      {
        id: 4,
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            id: 9,
            label: '\u4E09\u7EA7 1-1-1',
          },
          {
            id: 10,
            label: '\u4E09\u7EA7 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 5,
        label: '\u4E8C\u7EA7 2-1',
      },
      {
        id: 6,
        label: '\u4E8C\u7EA7 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '\u4E00\u7EA7 3',
    children: [
      {
        id: 7,
        label: '\u4E8C\u7EA7 3-1',
      },
      {
        id: 8,
        label: '\u4E8C\u7EA7 3-2',
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

<\/script>
`},{default:h(()=>[xe]),_:1},8,["demos"]),Ae,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/multiple-times-load","source-code":`<template>
  <hl-tree style="max-width: 600px" :props="props" :load="loadNode" lazy />
</template>

<script lang="ts" setup>
interface Tree {
  name: string
  leaf?: boolean
}

const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

let time = 0
const loadNode = (
  node: any,
  resolve: (data: Tree[]) => void,
  reject: () => void,
) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  time++
  if (node.level >= 1) {
    setTimeout(() => {
      if (time > 3) {
        return resolve([
          { name: 'zone1', leaf: true },
          { name: 'zone2', leaf: true },
          { name: 'zone3', leaf: true },
        ])
      } else {
        return reject()
      }
    }, 3000)
  }
}
<\/script>
`},{default:h(()=>[Ne]),_:1},8,["demos"]),ze,we,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/disabled","source-code":`<template>
  <hl-button type="primary" @click="checkboxDisabled=!checkboxDisabled">\u5168\u5C40\u7981\u7528</hl-button>
  <hl-tree
    :data="data"
    show-checkbox
    :checkbox-disabled="checkboxDisabled"
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkboxDisabled = ref(false)
const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 3,
        label: '\u4E8C\u7EA7 2-1',
        children: [
          {
            id: 4,
            label: '\u4E09\u7EA7 3-1-1',
          },
          {
            id: 5,
            label: '\u4E09\u7EA7 3-1-2',
            disabled: true,
          },
        ],
      },
      {
        id: 2,
        label: '\u4E8C\u7EA7 2-2',
        disabled: true,
        children: [
          {
            id: 6,
            label: '\u4E09\u7EA7 3-2-1',
          },
          {
            id: 7,
            label: '\u4E09\u7EA7 3-2-2',
            disabled: true,
          },
        ],
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

<\/script>
`},{default:h(()=>[Te]),_:1},8,["demos"]),De,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/highlight-current","source-code":`<template>
  <hl-tree
    ref="tree"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    highlight-current
    :props="defaultProps"
  />

  <hl-group gap-x="var(--md)" class="buttons">
    <hl-button @click="getCheckedNodes">\u901A\u8FC7 node \u83B7\u53D6</hl-button>
    <hl-button @click="getCheckedKeys">\u901A\u8FC7 key \u83B7\u53D6</hl-button>
    <hl-button @click="setCheckedNodes">\u901A\u8FC7 node \u8BBE\u7F6E</hl-button>
    <hl-button @click="setCheckedKeys">\u901A\u8FC7 key \u8BBE\u7F6E</hl-button>
    <hl-button @click="resetChecked">\u6E05\u7A7A</hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 1',
    children: [
      {
        id: 4,
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            id: 9,
            label: '\u4E09\u7EA7 1-1-1',
          },
          {
            id: 10,
            label: '\u4E09\u7EA7 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 5,
        label: '\u4E8C\u7EA7 2-1',
      },
      {
        id: 6,
        label: '\u4E8C\u7EA7 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '\u4E00\u7EA7 3',
    children: [
      {
        id: 7,
        label: '\u4E8C\u7EA7 3-1',
      },
      {
        id: 8,
        label: '\u4E8C\u7EA7 3-2',
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})
const tree = ref(null)

const getCheckedNodes = () => {
  console.log(tree.value.getCheckedNodes())
}
const getCheckedKeys = () => {
  console.log(tree.value.getCheckedKeys())
}
const setCheckedNodes = () => {
  tree.value.setCheckedNodes([
    {
      id: 5,
      label: '\u4E8C\u7EA7 2-1',
    },
    {
      id: 9,
      label: '\u4E09\u7EA7 1-1-1',
    },
  ])
}
const setCheckedKeys = () => {
  tree.value.setCheckedKeys([3])
}
const resetChecked = () => {
  tree.value.setCheckedKeys([])
}

<\/script>
`},{default:h(()=>[je]),_:1},8,["demos"]),Se,$e,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/slot","source-code":`<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>\u4F7F\u7528 render-content</p>
      <hl-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
      />
    </div>


    <div class="block">
      <p>\u4F7F\u7528 slot</p>
      <hl-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <template #default="{ node, data }">
          <hl-group full class="w-full overflow-hidden" gap="var(--xs)" align="items-middle items-between">
            <hl-icon size="xs" class="static">
              <two-folder />
            </hl-icon>
            <div class="text-ellipsis w-full">{{ node.label }}</div>
            <hl-group class="static p-r-sm" align="items-middle" gap="var(--xs)">
              <hl-icon type="primary" @click="append(data)">
                <two-plus />
              </hl-icon>
              <hl-icon type="primary" @click="remove(node, data)">
                <two-remove />
              </hl-icon>
            </hl-group>
          </hl-group>
        </template>
      </hl-tree>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoFolder } from '@hongluan-ui/icons'

let id = 1000
const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 1',
    children: [
      {
        id: 4,
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            id: 9,
            label: '\u4E09\u7EA7 1-1-1',
          },
          {
            id: 10,
            label: '\u4E09\u7EA7 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 5,
        label: '\u4E8C\u7EA7 2-1',
      },
      {
        id: 6,
        label: '\u4E8C\u7EA7 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '\u4E00\u7EA7 3',
    children: [
      {
        id: 7,
        label: '\u4E8C\u7EA7 3-1',
      },
      {
        id: 8,
        label: '\u4E8C\u7EA7 3-2',
      },
    ],
  },
])

const append = d => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!d.children) {
    d.children = []
  }
  d.children.push(newChild)
}
const remove = (node, d) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex(d => d.id === d.id)
  children.splice(index, 1)
}
const renderContent = (h, { node, data, store }) => {
  return h(
    'div',
    {
      class: 'hl-group w-full items-between overflow-hidden',
    },
    h('span', {
      class: 'text-ellipsis w-full',
    }, null, node.label),
    h(
      'span',
      {
        class: 'gap-xxs',
      },
      null,
      h(
        'a',
        {
          onClick: () => append(data),
        },
        '\u6DFB\u52A0 ',
      ),
      h(
        'a',
        {
          onClick: () => remove(node, data),
        },
        '\u5220\u9664',
      ),
    ),
  )
}
<\/script>


`},{default:h(()=>[Fe]),_:1},8,["demos"]),Pe,Oe,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/filter","source-code":`<template>
  <hl-input v-model="filterText" placeholder="\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4" />

  <hl-tree
    ref="tree"
    class="filter-tree"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const filterText = ref('')
const tree = ref(null)
const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 1',
    children: [
      {
        id: 4,
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            id: 9,
            label: '\u4E09\u7EA7 1-1-1',
          },
          {
            id: 10,
            label: '\u4E09\u7EA7 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 5,
        label: '\u4E8C\u7EA7 2-1',
      },
      {
        id: 6,
        label: '\u4E8C\u7EA7 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '\u4E00\u7EA7 3',
    children: [
      {
        id: 7,
        label: '\u4E8C\u7EA7 3-1',
      },
      {
        id: 8,
        label: '\u4E8C\u7EA7 3-2',
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

const filterNode = (value, data) => {
  if (!value) return true
  return data.label.indexOf(value) !== -1
}

watch(filterText, val => {
  tree.value.filter(val)
})

<\/script>
`},{default:h(()=>[Ke]),_:1},8,["demos"]),Me,Le,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/accordion","source-code":`<template>
  <hl-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    label: '\u4E00\u7EA7 1',
    children: [
      {
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            label: '\u4E09\u7EA7 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: '\u4E00\u7EA7 2',
    children: [
      {
        label: '\u4E8C\u7EA7 2-1',
        children: [
          {
            label: '\u4E09\u7EA7 2-1-1',
          },
        ],
      },
      {
        label: '\u4E8C\u7EA7 2-2',
        children: [
          {
            label: '\u4E09\u7EA7 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: '\u4E00\u7EA7 3',
    children: [
      {
        label: '\u4E8C\u7EA7 3-1',
        children: [
          {
            label: '\u4E09\u7EA7 3-1-1',
          },
        ],
      },
      {
        label: '\u4E8C\u7EA7 3-2',
        children: [
          {
            label: '\u4E09\u7EA7 3-2-1',
          },
        ],
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

const handleNodeClick = data => {
  console.log(data)
}

<\/script>
`},null,8,["demos"]),Be,qe,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/draggable","source-code":`<template>
  <hl-tree
    :data="data"
    node-key="id"
    default-expand-all
    draggable
    show-checkbox
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter"
    @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd"
    @node-drop="handleDrop"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 1',
    children: [
      {
        id: 4,
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            id: 9,
            label: '\u4E09\u7EA7 1-1-1',
          },
          {
            id: 10,
            label: '\u4E09\u7EA7 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 5,
        label: '\u4E8C\u7EA7 2-1',
      },
      {
        id: 6,
        label: '\u4E8C\u7EA7 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '\u4E00\u7EA7 3',
    children: [
      {
        id: 7,
        label: '\u4E8C\u7EA7 3-1',
      },
      {
        id: 8,
        label: '\u4E8C\u7EA7 3-2',
        children: [
          {
            id: 11,
            label: '\u4E09\u7EA7 3-2-1',
          },
          {
            id: 12,
            label: '\u4E09\u7EA7 3-2-2',
          },
          {
            id: 13,
            label: '\u4E09\u7EA7 3-2-3',
          },
        ],
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

const handleDragStart = (node, ev) => {
  console.log('drag start', node)
}
const handleDragEnter = (draggingNode, dropNode, ev) => {
  console.log('tree drag enter: ', dropNode.label)
}
const handleDragLeave = (draggingNode, dropNode, ev) => {
  console.log('tree drag leave: ', dropNode.label)
}
const handleDragOver = (draggingNode, dropNode, ev) => {
  console.log('tree drag over: ', dropNode.label)
}
const handleDragEnd = (draggingNode, dropNode, dropType, ev) => {
  console.log('tree drag end: ', dropNode && dropNode.label, dropType)
}
const handleDrop = (draggingNode, dropNode, dropType, ev) => {
  console.log('tree drop: ', dropNode.label, dropType)
}
const allowDrop = (draggingNode, dropNode, type) => {
  if (dropNode.data.label === '\u4E8C\u7EA7 3-1') {
    return type !== 'inner'
  } else {
    return true
  }
}
const allowDrag = draggingNode => {
  return draggingNode.data.label.indexOf('\u4E09\u7EA7 3-2-2') === -1
}

<\/script>
`},null,8,["demos"]),Ve,a(n,{fs:"",demos:m(l),"component-id":d,"path-name":"tree/icon","source-code":`<template>
  <hl-tree
    :data="data"
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :props="defaultProps"
  >
    <template #icon="{ expanded }">
      <hl-icon>
        <FillQq v-if="expanded" />
        <FillWechat v-else />
      </hl-icon>
    </template>
  </hl-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FillWechat, FillQq } from '@hongluan-ui/icons'

const data = ref([
  {
    id: 1,
    label: '\u4E00\u7EA7 1',
    children: [
      {
        id: 4,
        label: '\u4E8C\u7EA7 1-1',
        children: [
          {
            id: 9,
            label: '\u4E09\u7EA7 1-1-1',
          },
          {
            id: 10,
            label: '\u4E09\u7EA7 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '\u4E00\u7EA7 2',
    children: [
      {
        id: 5,
        label: '\u4E8C\u7EA7 2-1',
      },
      {
        id: 6,
        label: '\u4E8C\u7EA7 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '\u4E00\u7EA7 3',
    children: [
      {
        id: 7,
        label: '\u4E8C\u7EA7 3-1',
      },
      {
        id: 8,
        label: '\u4E8C\u7EA7 3-2',
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

<\/script>
`},null,8,["demos"]),Qe]),a(t)],64)}}};export{Ie as default};
