import{p as g,R as b,I as f,L as v,H as N,V as p,W as M,X as y,a3 as $,P as D,Q as e,F as C,U as w,T as m,o as j}from"./vue.8a077a47.js";const A=g({setup(x){const i=(t,d)=>`${t}-${d}`,h=(t,d,s,o=1,n="node")=>{let r=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*d),a=i(n,++r);return{id:a,label:a,children:c?h(t,d,c,o+1,a):void 0}})},u=h(4,30,40),l=b({value:"id",label:"label",children:"children"});return(t,d)=>{const s=f("hl-tree-v2");return v(),N(s,{data:p(u),props:l.value,height:208},null,8,["data","props"])}}});var O=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const P=g({setup(x){const i=(n,r)=>`${n}-${r}`,h=(n,r,c,a=1,k="node")=>{let T=0;return new Array(c).fill(a).map(()=>{const K=a===n?0:Math.round(Math.random()*r),_=i(k,++T);return{id:_,label:_,children:K?h(n,r,K,a+1,_):void 0}})},u=h(4,30,40),l=[],t=[];for(let n=0;n<u.length;++n){const r=u[n].children;if(r){t.push(u[n].id),l.push(r[0].id);break}}const d=b({value:"id",label:"label",children:"children"}),s=l,o=t;return(n,r)=>{const c=f("hl-tree-v2");return v(),N(c,{data:p(u),height:208,props:d.value,"show-checkbox":"","default-checked-keys":p(s),"default-expanded-keys":p(o)},null,8,["data","props","default-checked-keys","default-expanded-keys"])}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const S=g({setup(x){const i=(t,d)=>`${t}-${d}`,h=(t,d,s,o=1,n="node")=>{let r=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*d),a=i(n,++r);return{id:a,label:a,disabled:Math.random()>.6,children:c?h(t,d,c,o+1,a):void 0}})},u=h(4,30,40),l=b({value:"id",label:"label",children:"children",disabled:"disabled"});return(t,d)=>{const s=f("hl-tree-v2");return v(),N(s,{data:p(u),props:l.value,"show-checkbox":"",height:208},null,8,["data","props"])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const E=g({setup(x){const i=(n,r)=>`${n}-${r}`,h=(n,r,c,a=1,k="node")=>{let T=0;return new Array(c).fill(a).map(()=>{const K=a===n?0:Math.round(Math.random()*r),_=i(k,++T);return{id:_,label:_,children:K?h(n,r,K,a+1,_):void 0}})},u=b(null),l=h(4,30,5),t=b(""),d=b({value:"id",label:"label",children:"children"}),s=n=>{const r=u.value;r==null||r.filter(n)},o=(n,r)=>r.label.indexOf(n)!==-1;return(n,r)=>{const c=f("hl-input"),a=f("hl-tree-v2");return v(),M($,null,[y(c,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=k=>t.value=k),placeholder:"Please enter keyword",block:"",onInput:s},null,8,["modelValue"]),y(a,{ref_key:"treeRef",ref:u,data:p(l),props:d.value,"filter-method":o,height:208},null,8,["data","props"])],64)}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const R=g({setup(x){const i=(t,d)=>`${t}-${d}`,h=(t,d,s,o=1,n="node")=>{let r=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*d),a=i(n,++r);return{id:a,label:a,children:c?h(t,d,c,o+1,a):void 0}})},u=h(4,30,40),l=b({value:"id",label:"label",children:"children"});return(t,d)=>{const s=f("hl-tree-v2");return v(),N(s,{data:p(u),props:l.value,"show-checkbox":"",height:208},null,8,["data","props"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const Q=g({setup(x){const i=(t,d)=>`${t}-${d}`,h=(t,d,s,o=1,n="node")=>{let r=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*d),a=i(n,++r);return{id:a,label:a,children:c?h(t,d,c,o+1,a):void 0}})},u=h(4,30,40),l=b({value:"id",label:"label",children:"children"});return(t,d)=>{const s=f("hl-tree-v2");return v(),N(s,{data:p(u),props:l.value,height:208},{default:D(({node:o})=>[e("span",{class:C(["prefix text-primary",{"is-leaf":o.isLeaf}])},"TreeV2\xA0\xA0",2),e("span",null,w(o.label),1)]),_:1},8,["data","props"])}}});var H=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));const F=e("h1",null,"Tree V2 \u865A\u62DF\u6811",-1),I=e("p",null,"\u4E0D\u8BBA\u4F60\u7684\u6570\u636E\u91CF\u591A\u5927\uFF0C\u865A\u62DF\u6811\u90FD\u80FD\u6BEB\u65E0\u538B\u529B\u5730\u5904\u7406\u3002",-1),U=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),m(" \u57FA\u7840\u7528\u6CD5")],-1),W=e("p",null,"\u57FA\u7840\u7684\u6811\u5F62\u7ED3\u6784\u5C55\u793A",-1),X=e("h2",{id:"ke-xuan-ze-de-xu-ni-shu"},[e("a",{class:"header-anchor",href:"#ke-xuan-ze-de-xu-ni-shu"}),m(" \u53EF\u9009\u62E9\u7684\u865A\u62DF\u6811")],-1),B=e("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002",-1),G=e("h2",{id:"jin-yong-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#jin-yong-fu-xuan-kuang"}),m(" \u7981\u7528\u590D\u9009\u6846")],-1),J=e("p",null,"\u8282\u70B9\u7684\u590D\u9009\u6846\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u7981\u7528\u3002",-1),Y=e("div",null,[e("p",null,[m("\u5728\u793A\u4F8B\u4E2D\uFF0C\u5C5E\u6027\u5728 "),e("code",null,"defaultProps"),m(" \u4E2D\u58F0\u660E\u4E86 "),e("code",null,"disabled"),m("\uFF0C\u4E00\u4E9B\u8282\u70B9\u88AB\u8BBE\u7F6E\u4E3A "),e("code",null,"disable\uFF1Atrue"),m("\u3002 \u76F8\u5E94\u7684\u590D\u9009\u6846\u5DF2\u7981\u7528\uFF0C\u4E0D\u80FD\u70B9\u51FB\u3002")])],-1),Z=e("h2",{id:"mo-ren-kuo-zhan-he-mo-ren-jian-cha"},[e("a",{class:"header-anchor",href:"#mo-ren-kuo-zhan-he-mo-ren-jian-cha"}),m(" \u9ED8\u8BA4\u6269\u5C55\u548C\u9ED8\u8BA4\u68C0\u67E5")],-1),ee=e("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u9636\u6BB5\u88AB\u8BBE\u7F6E\u4E3A\u5C55\u5F00\u6216\u9009\u4E2D\u3002",-1),te=e("div",null,[e("p",null,[m("\u5206\u522B\u901A\u8FC7 "),e("code",null,"default-expanded-keys"),m(" \u548C "),e("code",null,"default-checked-keys"),m(" \u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002")])],-1),re=e("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),m(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),ne=e("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),de=e("h2",{id:"jie-dian-guo-lu"},[e("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),m(" \u8282\u70B9\u8FC7\u6EE4")],-1),ae=e("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u8FC7\u6EE4",-1),oe=e("div",null,[e("p",null,"\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684filter\u65B9\u6CD5\uFF0C \u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Efilter-method\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")],-1),le=j('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E data</td><td>array</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>string</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9</td><td>boolean</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td></tr><tr><td>filter-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data)</td><td>\u2014</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>16</td></tr><tr><td>item-size</td><td>\u8282\u70B9\u9AD8\u5EA6</td><td>number</td><td>40</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> Props</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u5728\u6574\u68F5\u6811\u4E2D\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string, number</td><td>id</td></tr><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>label</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>children</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>disabled</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> has the following method, which returns the currently selected array of nodes.</p><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>(query: string)</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373show-checkbox\u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9</td><td>(keys: TreeKey[])</td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001</td><td>(key: TreeKey, checked: boolean)</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001</td><td>(key: TreeKey)</td></tr><tr><td>setData</td><td>\u5F53\u6570\u636E\u91CF\u975E\u5E38\u5E9E\u5927\u7684\u65F6\u5019\uFF0C\u4F7F\u7528reactive\u6570\u636E\u5C06\u5BFC\u81F4\u6027\u80FD\u975E\u5E38\u4F4E\u4E0B\uFF0C\u6240\u4EE5\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u80FD\u591F\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\u7684\u65B9\u6CD5</td><td>(data: TreeData)</td></tr><tr><td>getNode</td><td>\u901A\u8FC7key\u6216\u8005data\u83B7\u53D6\u8282\u70B9</td><td><code>(data: TreeKey \\| TreeNodeData)</code></td></tr><tr><td>expandNode</td><td>\u5C55\u5F00\u6307\u5B9A\u8282\u70B9</td><td><code>(node: TreeNode)</code></td></tr><tr><td>collapseNode</td><td>\u6298\u53E0\u6307\u5B9A\u8282\u70B9</td><td><code>(node: TreeNode)</code></td></tr><tr><td>setExpandedKeys</td><td>\u8BBE\u7F6E\u7279\u5B9A\u8282\u70B9\u4E3A\u5C55\u5F00\u72B6\u6001</td><td><code>(keys: TreeKey[])</code></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>node-click</td><td>\u5F53\u8282\u70B9\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, node: TreeNode, e: MouseEvent)</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>(e: Event, data: TreeNodeData, node: TreeNode)</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>(data: TreeNodeData, checked: boolean)</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u6536\u8D77\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9. \u53C2\u6570\u4E3A\uFF1A { node: TreeNode, data: TreeNodeData }</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u5C55\u5F00\u6536\u8D77\u56FE\u6807\uFF0C\u53C2\u6570\u4E3A { expanded, isLeaf }</td></tr></tbody></table>',11),ce={setup(x){const i={"../../../examples/tree-v2/basic.vue":O,"../../../examples/tree-v2/default.vue":z,"../../../examples/tree-v2/disabled.vue":q,"../../../examples/tree-v2/filter.vue":V,"../../../examples/tree-v2/selectable.vue":L,"../../../examples/tree-v2/slot.vue":H};return(h,u)=>{const l=f("demo-block"),t=f("right-nav");return v(),M($,null,[e("section",null,[F,I,U,W,y(l,{fs:"",demos:p(i),"path-name":"tree-v2/basic","source-code":`<template>\r
  <hl-tree-v2 :data="data" :props="props" :height="208" />\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const getKey = (prefix, id) => {\r
  return \`\${prefix}-\${id}\`\r
}\r
\r
const createData = (\r
  maxDeep,\r
  maxChildren,\r
  minNodesNumber,\r
  deep = 1,\r
  key = 'node',\r
) => {\r
  let id = 0\r
  return new Array(minNodesNumber).fill(deep).map(() => {\r
    const childrenNumber =\r
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)\r
    const nodeKey = getKey(key, ++id)\r
    return {\r
      id: nodeKey,\r
      label: nodeKey,\r
      children: childrenNumber\r
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)\r
        : undefined,\r
    }\r
  })\r
}\r
\r
const data = createData(4, 30, 40)\r
const props = ref({\r
  value: 'id',\r
  label: 'label',\r
  children: 'children',\r
})\r
\r
<\/script>\r
`},null,8,["demos"]),X,B,y(l,{fs:"",demos:p(i),"path-name":"tree-v2/selectable","source-code":`<template>\r
  <hl-tree-v2\r
    :data="data"\r
    :props="props"\r
    show-checkbox\r
    :height="208"\r
  />\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const getKey = (prefix, id) => {\r
  return \`\${prefix}-\${id}\`\r
}\r
\r
const createData = (\r
  maxDeep,\r
  maxChildren,\r
  minNodesNumber,\r
  deep = 1,\r
  key = 'node',\r
) => {\r
  let id = 0\r
  return new Array(minNodesNumber).fill(deep).map(() => {\r
    const childrenNumber =\r
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)\r
    const nodeKey = getKey(key, ++id)\r
    return {\r
      id: nodeKey,\r
      label: nodeKey,\r
      children: childrenNumber\r
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)\r
        : undefined,\r
    }\r
  })\r
}\r
\r
const data = createData(4, 30, 40)\r
const props = ref({\r
  value: 'id',\r
  label: 'label',\r
  children: 'children',\r
})\r
\r
<\/script>\r
`},null,8,["demos"]),G,J,y(l,{fs:"",demos:p(i),"path-name":"tree-v2/disabled","source-code":`<template>\r
  <hl-tree-v2\r
    :data="data"\r
    :props="props"\r
    show-checkbox\r
    :height="208"\r
  />\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const getKey = (prefix, id) => {\r
  return \`\${prefix}-\${id}\`\r
}\r
\r
const createData = (\r
  maxDeep,\r
  maxChildren,\r
  minNodesNumber,\r
  deep = 1,\r
  key = 'node',\r
) => {\r
  let id = 0\r
  return new Array(minNodesNumber).fill(deep).map(() => {\r
    const childrenNumber =\r
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)\r
    const nodeKey = getKey(key, ++id)\r
    return {\r
      id: nodeKey,\r
      label: nodeKey,\r
      disabled: Math.random() > 0.6,\r
      children: childrenNumber\r
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)\r
        : undefined,\r
    }\r
  })\r
}\r
\r
const data = createData(4, 30, 40)\r
const props = ref({\r
  value: 'id',\r
  label: 'label',\r
  children: 'children',\r
  disabled: 'disabled',\r
})\r
\r
<\/script>\r
`},{default:D(()=>[Y]),_:1},8,["demos"]),Z,ee,y(l,{fs:"",demos:p(i),"path-name":"tree-v2/default","source-code":`<template>\r
  <hl-tree-v2\r
    :data="data"\r
    :height="208"\r
    :props="props"\r
    show-checkbox\r
    :default-checked-keys="defaultCheckedKeys"\r
    :default-expanded-keys="defaultExpandedKeys"\r
  />\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const getKey = (prefix, id) => {\r
  return \`\${prefix}-\${id}\`\r
}\r
\r
const createData = (\r
  maxDeep,\r
  maxChildren,\r
  minNodesNumber,\r
  deep = 1,\r
  key = 'node',\r
) => {\r
  let id = 0\r
  return new Array(minNodesNumber).fill(deep).map(() => {\r
    const childrenNumber =\r
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)\r
    const nodeKey = getKey(key, ++id)\r
    return {\r
      id: nodeKey,\r
      label: nodeKey,\r
      children: childrenNumber\r
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)\r
        : undefined,\r
    }\r
  })\r
}\r
\r
const data = createData(4, 30, 40)\r
const checkedKeys = []\r
const expanedKeys = []\r
for (let i = 0; i < data.length; ++i) {\r
  const children = data[i].children\r
  if (children) {\r
    expanedKeys.push(data[i].id)\r
    checkedKeys.push(children[0].id)\r
    break\r
  }\r
}\r
\r
const props = ref({\r
  value: 'id',\r
  label: 'label',\r
  children: 'children',\r
})\r
const defaultCheckedKeys = checkedKeys\r
const defaultExpandedKeys = expanedKeys\r
\r
<\/script>\r
`},{default:D(()=>[te]),_:1},8,["demos"]),re,ne,y(l,{fs:"",demos:p(i),"path-name":"tree-v2/slot","source-code":`<template>\r
  <hl-tree-v2 :data="data" :props="props" :height="208">\r
    <template #default="{ node }">\r
      <span\r
        class="prefix text-primary"\r
        :class="{ 'is-leaf': node.isLeaf }"\r
      >TreeV2&nbsp;&nbsp;</span>\r
      <span>{{ node.label }}</span>\r
    </template>\r
  </hl-tree-v2>\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const getKey = (prefix, id) => {\r
  return \`\${prefix}-\${id}\`\r
}\r
\r
const createData = (\r
  maxDeep,\r
  maxChildren,\r
  minNodesNumber,\r
  deep = 1,\r
  key = 'node',\r
) => {\r
  let id = 0\r
  return new Array(minNodesNumber).fill(deep).map(() => {\r
    const childrenNumber =\r
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)\r
    const nodeKey = getKey(key, ++id)\r
    return {\r
      id: nodeKey,\r
      label: nodeKey,\r
      children: childrenNumber\r
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)\r
        : undefined,\r
    }\r
  })\r
}\r
\r
const data = createData(4, 30, 40)\r
const props = ref({\r
  value: 'id',\r
  label: 'label',\r
  children: 'children',\r
})\r
\r
<\/script>\r
\r
`},null,8,["demos"]),de,ae,y(l,{fs:"",demos:p(i),"path-name":"tree-v2/filter","source-code":`<template>\r
  <hl-input\r
    v-model="query"\r
    placeholder="Please enter keyword"\r
    block\r
    @input="onQueryChanged"\r
  />\r
  <hl-tree-v2\r
    ref="treeRef"\r
    :data="data"\r
    :props="props"\r
    :filter-method="filterMethod"\r
    :height="208"\r
  />\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const getKey = (prefix, id) => {\r
  return \`\${prefix}-\${id}\`\r
}\r
\r
const createData = (\r
  maxDeep,\r
  maxChildren,\r
  minNodesNumber,\r
  deep = 1,\r
  key = 'node',\r
) => {\r
  let id = 0\r
  return new Array(minNodesNumber).fill(deep).map(() => {\r
    const childrenNumber =\r
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)\r
    const nodeKey = getKey(key, ++id)\r
    return {\r
      id: nodeKey,\r
      label: nodeKey,\r
      children: childrenNumber\r
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)\r
        : undefined,\r
    }\r
  })\r
}\r
\r
const treeRef = ref(null)\r
const data = createData(4, 30, 5)\r
const query = ref('')\r
const props = ref({\r
  value: 'id',\r
  label: 'label',\r
  children: 'children',\r
})\r
const onQueryChanged = (query: string) => {\r
  const tree = treeRef.value\r
  tree?.filter(query)\r
}\r
const filterMethod = (query, node) => {\r
  return node.label.indexOf(query) !== -1\r
}\r
<\/script>\r
`},{default:D(()=>[oe]),_:1},8,["demos"]),le]),y(t)],64)}}};export{ce as default};
