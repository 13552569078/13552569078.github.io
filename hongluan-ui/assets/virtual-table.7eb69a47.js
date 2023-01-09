import{p as F,R as m,I as g,L as B,H as _,P as h,Q as t,U as p,B as w,V as D,W as y,X as x,a3 as S,o as C,T as c}from"./vue.8a077a47.js";const N=t("a",null,"\u4FEE\u6539",-1),I=F({setup(f){let r=3e3;const i=m([{id:1,name:"\u59D3\u540D1",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94"},{id:2,name:"\u59D3\u540D2",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08",children:[{id:102,name:"\u59D3\u540D102",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:103,name:"\u59D3\u540D103",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"}]},{id:3,name:"\u59D3\u540D3",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"},...new Array(50).fill(0).map((l,n)=>{const e=JSON.parse(JSON.stringify({id:n+4,name:"\u59D3\u540D"+(n+4),sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA"}));return(n+4)%5===0&&(e.children=[{id:1e3+e.id,name:"\u59D3\u540D",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"}]),(n+4)%4===0&&(e.hasChildren=!0),e})]),u=m([{title:"#",prop:"id",expand:{slotName:"indexExpand",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex",align:"center"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),a=(l,n,e)=>{window.setTimeout(()=>{e([{id:r++,name:"\u59D3\u540D1",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",hasChildren:!0},{id:r++,name:"\u59D3\u540D2",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:r++,name:"\u738B\u4E8C21",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]}])},3e3)};return(l,n)=>{const e=g("hl-virtual-table");return B(),_(e,{cols:u.value,data:i.value,"first-column-index":1,load:a},{indexExpand:h(({row:d})=>[t("p",null,p(d.id)+" / "+p(d.des),1)]),handle:h(()=>[N]),_:1},8,["cols","data"])}}});var j=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const T=t("a",null,"\u4FEE\u6539",-1),U={class:"text-center"},O=t("td",{colspan:"2"},[t("strong",null,"\u7EDF\u8BA1\uFF1A")],-1),P={colspan:"4"},k=F({setup(f){let r=1021;const i=new Set(new Array(20).fill(0).map((d,s)=>s)),u=m([{id:1,name:"\u59D3\u540D1",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94"},{id:2,name:"\u59D3\u540D2",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u59D3\u540D3",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"},...new Array(17).fill(0).map((d,s)=>JSON.parse(JSON.stringify({id:s+4,name:"\u59D3\u540D"+(s+4),sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA"})))]),a=m([{title:"#",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex",align:"center"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),l=w(()=>u.value.filter(d=>d&&d.sex==="\u7537").length),n=w(()=>u.value.filter(d=>d&&d.sex==="\u5973").length),e=(d,s,E,b)=>{window.setTimeout((A,v)=>{for(let o=A;o<=v;o++)i.has(o)||(u.value[o]={id:r++,name:"\u59D3\u540D",sex:o%2===0?"\u7537":"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:o%5===0?"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94":"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},i.add(o))},3e3,E,b)};return(d,s)=>{const E=g("hl-virtual-table");return B(),_(E,{cols:a.value,data:u.value,total:200,onItemRendered:e},{handle:h(()=>[T]),loading:h(({rowIndex:b})=>[t("p",U,"\u52A0\u8F7D\u6570\u636E\u4E2D: \u7B2C"+p(b+1)+"\u6761",1)]),foot:h(()=>[O,t("td",P,"\u6027\u522B\uFF08\u7537 / \u5973\uFF09\u6BD4\u4F8B\uFF1A"+p(D(l))+" / "+p(D(n)),1)]),_:1},8,["cols","data"])}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));const J=C('<h1>VirtualTable \u865A\u62DF\u8868\u683C</h1><p>VirtualTable \u662F\u57FA\u4E8ESimpleTable\u5C01\u88C5\u7684\uFF0C\u7528\u4EE5\u5C55\u793A\u5927\u89C4\u6A21\u6570\u636E\u7684\u8868\u683C\u3002\u9664\u4E86\u4E0B\u9762\u6CE8\u610F\u7684\u51E0\u70B9\u5916\uFF0CSimpleTable\u7684\u529F\u80FD\u540C\u6837\u652F\u6301\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><blockquote><h5>\u865A\u62DF\u8868\u683C\u7684\u51E0\u4E2A\u6CE8\u610F\u4E8B\u9879\uFF1A</h5><ul><li class="m-b-sm"><strong class="text-danger">\u7279\u522B\u6CE8\u610F\uFF1A\u5728\u5904\u7406\u5C55\u5F00\u884C\u4EE5\u53CA\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u865A\u62DF\u8868\u683C\u4F1A\u76F4\u63A5\u4FEE\u6539\u4F20\u5165\u7684data\u503C\uFF08\u52A0\u884C\uFF0C\u52A0\u884C\u5C5E\u6027\u7B49\uFF09\uFF0C\u8BF7\u6CE8\u610F\u6B64\u70B9\uFF01</strong></li><li class="m-b-sm">\u7531\u4E8E\u865A\u62DF\u8868\u683C\u5728\u5904\u7406\u5C55\u5F00\u884C\u4EE5\u53CA\u6811\u5F62\u7ED3\u6784\u65F6\u4F1A\u4FEE\u6539data\u503C\uFF0C\u4F7F\u7528\u8005\u8FDB\u884C\u8868\u683C\u64CD\u4F5C\u65F6\uFF1A\u4F8B\u5982\u5220\u9664\u884C\uFF0C\u589E\u52A0\u884C\uFF0C<strong class="text-primary">\u9700\u8981\u4E00\u5E76\u5904\u7406\u88AB\u4FEE\u6539\u540E\u7684\u6570\u636E</strong>\u3002\u6240\u4EE5\uFF0C\u5EFA\u8BAE\u865A\u62DF\u8868\u683C\u53EA\u7528\u6765\u5C55\u793A\u5927\u89C4\u6A21\u5C5E\u6027\uFF0C\u800C\u4E0D\u8FDB\u884C\u6570\u636E\u64CD\u4F5C</li><li class="m-b-sm"><code>height</code>\u4E0E<code>item-size</code>\u5C5E\u6027\u9700\u8981\u8BBE\u7F6E\u503C\uFF0C\u4E0D\u652F\u6301\u8868\u683C\u884C\u52A8\u6001\u9AD8\u5EA6</li><li class="m-b-sm">\u4E0D\u652F\u6301<code>expand-row-keys</code>\u4E0E<code>default-expand-all</code>\u5C5E\u6027</li><li>\u4E0D\u652F\u6301\u62D6\u62FD\u8868\u5934\u6539\u53D8\u5217\u5BBD</li></ul></blockquote><h2 id="ji-ben"><a class="header-anchor" href="#ji-ben"></a> \u57FA\u672C</h2>',5),R=t("h2",{id:"dong-tai-jia-zai-shu-ju"},[t("a",{class:"header-anchor",href:"#dong-tai-jia-zai-shu-ju"}),c(" \u52A8\u6001\u52A0\u8F7D\u6570\u636E")],-1),V=t("p",null,[c("\u53EF\u4EE5\u8BBE\u7F6E "),t("code",null,"total"),c(" \u5C5E\u6027\u503C\u5927\u4E8E\u5B9E\u9645\u7684 "),t("code",null,"data"),c(" \u6570\u7EC4\u957F\u5EA6\uFF0C\u7136\u540E\u5229\u7528 "),t("code",null,"item-rendered"),c(" \u4E8B\u4EF6\u52A8\u6001\u52A0\u8F7D\u6570\u636E")],-1),L=C('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>cell-padding</td><td>\u8BBE\u7F6ETd\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>auto-height</td><td>\u4F7FTh\u548CTd\u7684\u9AD8\u5EA6\u53D8\u4E3Aauto</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>first-column-index</td><td>\u6811\u5F62\u5C55\u5F00\u64CD\u4F5C\u4F5C\u7528\u7684\u5217</td><td>number</td><td>-</td><td>0</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>-</td><td><code>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>function(row, treeNode, resolve)</td><td>-</td><td>-</td></tr><tr><td>height</td><td>\u8868\u683C\u5373\u89C6\u7A97\u9AD8\u5EA6</td><td>number / string</td><td>-</td><td>300</td></tr><tr><td>item-size</td><td><em><strong>\u884C\u9AD8\uFF0C\u56FA\u5B9A\u503C\uFF0C\u5355\u4F4D\u50CF\u7D20\u3002</strong></em></td><td>number</td><td>-</td><td>48</td></tr><tr><td>total</td><td>\u6570\u636E\u603B\u6761\u6570</td><td>number</td><td>-</td><td>-</td></tr><tr><td>scrollbar-always-on</td><td>\u662F\u5426\u4E00\u76F4\u663E\u793A\u6EDA\u52A8\u6761</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>cache</td><td>\u5217\u8868\u4E0A\uFF0C\u4E0B\u7F13\u5B58\u7684\u6570\u91CF</td><td>number</td><td>-</td><td>2</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string / object</td><td>left / right / { position: string; distance: string; }</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, rowIndex, columnIndex)</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr><tr><td>tree-expand</td><td>\u6811\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, row</td></tr><tr><td>item-rendered</td><td>\u884C\u52A8\u6001\u6E32\u67D3\u4E8B\u4EF6</td><td>cacheStart, cacheEnd, visibleStart, visibleEnd\uFF0C\u8868\u683C\u6570\u636E\u7684\u7D22\u5F15\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleColumn</td><td>\u663E\u793A/\u9690\u85CF\u5217</td><td>index, show\uFF08show\u53EF\u9009\uFF09</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C \u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001</td><td>row</td></tr><tr><td>clearTooltip</td><td>\u9690\u85CFtooltip</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>unknown</td><td>\u8868\u683C\u6570\u636E\u4E3Anull\u6216\u8005undefined\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr><tr><td>loading</td><td>\u5B9A\u5236\u52A8\u6001\u52A0\u8F7D\u8868\u683C\u884C\u7684\u5185\u5BB9\uFF0C\u53C2\u6570rowIndex</td></tr></tbody></table>',10),M={setup(f){const r={"../../../examples/virtual-table/basic.vue":j,"../../../examples/virtual-table/loading.vue":z};return(i,u)=>{const a=g("demo-block"),l=g("right-nav");return B(),y(S,null,[t("section",null,[J,x(a,{fs:"",demos:D(r),"path-name":"virtual-table/basic","source-code":`<template>\r
  <hl-virtual-table\r
    :cols="cols"\r
    :data="tableData"\r
    :first-column-index="1"\r
    :load="load"\r
  >\r
    <template #indexExpand="{ row }">\r
      <p>{{ row.id }} / {{ row.des }}</p>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-virtual-table>\r
</template>\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
let count = 3000\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u59D3\u540D1',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94',\r
  },\r
  {\r
    id: 2,\r
    name: '\u59D3\u540D2',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
    children: [\r
      {\r
        id: 102,\r
        name: '\u59D3\u540D102',\r
        sex: '\u7537',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
      },\r
      {\r
        id: 103,\r
        name: '\u59D3\u540D103',\r
        sex: '\u7537',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
      },\r
    ],\r
  },\r
  {\r
    id: 3,\r
    name: '\u59D3\u540D3',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
  ...new Array(50).fill(0).map((_, i) => {\r
    const d = JSON.parse(JSON.stringify({\r
      id: i + 4,\r
      name: '\u59D3\u540D' + (i + 4),\r
      sex: '\u5973',\r
      org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
      des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA',\r
    }))\r
    if ((i + 4) % 5 === 0 ) {\r
      d.children = [\r
        {\r
          id: 1000 + d.id,\r
          name: '\u59D3\u540D',\r
          sex: '\u7537',\r
          org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
          des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
        },\r
      ]\r
    }\r
    if ((i + 4) % 4 === 0 ) {\r
      d.hasChildren = true\r
    }\r
    return d\r
  }),\r
])\r
const cols = ref([\r
  { title: '#', prop: 'id', expand: { slotName: 'indexExpand', hideLabel: true } },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex', align: 'center' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  {\r
    title: '\u7B80\u4ECB',\r
    prop: 'des',\r
    showTooltip: true,\r
    width: '40%',\r
    tooltipProps: { width: '200px', popperClass: 'test-tip' },\r
  },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
const load = (row, node, resolve) => {\r
  window.setTimeout(() => {\r
    resolve([\r
      {\r
        id: count++,\r
        name: '\u59D3\u540D1',\r
        sex: '\u7537',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
        hasChildren: true,\r
      },\r
      {\r
        id: count++,\r
        name: '\u59D3\u540D2',\r
        sex: '\u7537',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
        children: [\r
          {\r
            id: count++,\r
            name: '\u738B\u4E8C21',\r
            sex: '\u7537',\r
            org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
            des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
          },\r
        ],\r
      },\r
    ])\r
  }, 3000)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),R,V,x(a,{fs:"",demos:D(r),"path-name":"virtual-table/loading","source-code":`<template>\r
  <hl-virtual-table\r
    :cols="cols"\r
    :data="tableData"\r
    :total="200"\r
    @item-rendered="loadData"\r
  >\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
    <template #loading="{ rowIndex }">\r
      <p class="text-center">\u52A0\u8F7D\u6570\u636E\u4E2D: \u7B2C{{ rowIndex + 1 }}\u6761</p>\r
    </template>\r
    <template #foot>\r
      <td colspan="2"><strong>\u7EDF\u8BA1\uFF1A</strong></td>\r
      <td colspan="4">\u6027\u522B\uFF08\u7537 / \u5973\uFF09\u6BD4\u4F8B\uFF1A{{ maleCount }} / {{ femaleCount }}</td>\r
    </template>\r
  </hl-virtual-table>\r
</template>\r
<script lang="ts" setup>\r
import { ref, computed } from 'vue'\r
\r
let indexCounter = 1021\r
const existedIndex = new Set(new Array(20).fill(0).map((_, i) => i)) // \u8BB0\u5F55\u5DF2\u7ECF\u52A0\u8F7D\u6570\u636E\u7684\u6570\u7EC4\u7D22\u5F15\u503C\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u59D3\u540D1',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94',\r
  },\r
  {\r
    id: 2,\r
    name: '\u59D3\u540D2',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u59D3\u540D3',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
  ...new Array(17).fill(0).map((_, i) => {\r
    const d = JSON.parse(JSON.stringify({\r
      id: i + 4,\r
      name: '\u59D3\u540D' + (i + 4),\r
      sex: '\u5973',\r
      org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
      des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA',\r
    }))\r
    return d\r
  }),\r
])\r
const cols = ref([\r
  { title: '#', prop: 'id' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex', align: 'center' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  {\r
    title: '\u7B80\u4ECB',\r
    prop: 'des',\r
    showTooltip: true,\r
    width: '40%',\r
    tooltipProps: { width: '200px', popperClass: 'test-tip' },\r
  },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
const maleCount = computed(() => tableData.value.filter(d => d && d.sex === '\u7537').length)\r
const femaleCount = computed(() => tableData.value.filter(d => d && d.sex === '\u5973').length)\r
\r
const loadData = (_, __, visibleStart, visibleEnd) => {\r
  window.setTimeout((start, end) => {\r
    for(let i = start; i <= end; i++) {\r
      if (existedIndex.has(i)) continue // \u5DF2\u7ECF\u5B58\u5728\u4E86\uFF0C\u4E0D\u9700\u8981\u518D\u52A0\u8F7D\r
      tableData.value[i] = {\r
        id: indexCounter++,\r
        name: '\u59D3\u540D',\r
        sex: i % 2 === 0 ? '\u7537' : '\u5973',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: i % 5 === 0 ? '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94' : '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
      }\r
      existedIndex.add(i) // \u6DFB\u52A0\u5DF2\u52A0\u8F7D\u6570\u636E\u7D22\u5F15\u503C\r
    }\r
  }, 3000, visibleStart, visibleEnd)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),L]),x(l)],64)}}};export{M as default};
