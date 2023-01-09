import{p as D,R as a,I as p,L as m,H as x,P as n,X as o,T as t,U as F,Q as e,W as v,a3 as B,ag as I,V as _,$ as T,B as j,ah as O,a as $,o as S}from"./vue.8a077a47.js";import{g as N}from"./index.3e39e2d9.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";import"./hongluan-icons.286a55ba.js";const z=t(F("")),P=e("a",null,"\u4FEE\u6539",-1),U=D({setup(g){const r=a(!1),u=a([]),c=a(!1),l=a([{id:1,name:"\u8303\u67CF\u5E90",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1"},{id:2,name:"\u59DC\u519B\u7ED3",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u949E\u6D0B",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),s=a([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"3em"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),d=()=>{r.value?(u.value.splice(0,u.value.length),u.value.push(...l.value.map(b=>b.id)),c.value=!1):u.value.splice(0,u.value.length)},i=()=>{r.value=u.value.length===l.value.length,u.value.length>0&&r.value==!1?c.value=!0:c.value=!1},h=(b,C,E)=>{console.log("rowClicked",b,C,E)},f=(b,C,E,y,w)=>{console.log("cellClicked",b,C,E,y,w)};return(b,C)=>{const E=p("hl-checkbox"),y=p("hl-simple-table");return m(),x(y,{cols:s.value,data:l.value,onRowClick:h,onCellClick:f},{firstCol:n(()=>[o(E,{modelValue:r.value,"onUpdate:modelValue":C[0]||(C[0]=w=>r.value=w),indeterminate:c.value,onChange:d},null,8,["modelValue","indeterminate"])]),tableIndex:n(({row:w})=>[o(E,{modelValue:u.value,"onUpdate:modelValue":C[1]||(C[1]=A=>u.value=A),label:w.id,onChange:A=>i(w.id)},{default:n(()=>[z]),_:2},1032,["modelValue","label","onChange"])]),handle:n(()=>[P]),_:1},8,["cols","data"])}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const R=e("a",null,"\u4FEE\u6539",-1),L=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=a([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),l=a("borderless");return(s,d)=>{const i=p("hl-option"),h=p("hl-select"),f=p("hl-simple-table");return m(),v(B,null,[o(h,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=b=>l.value=b),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:n(()=>[(m(!0),v(B,null,I(c.value,b=>(m(),v(B,null,[b.divider?(m(),x(i,{key:b.value,divider:""})):(m(),x(i,{key:b.value,label:b.label,value:b.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),o(f,{cols:u.value,data:r.value,border:l.value,padding:"0"},{tableIndex:n(({rowIndex:b})=>[e("span",null,F(b+1),1)]),handle:n(()=>[R]),_:1},8,["cols","data","border"])],64)}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const J=D({setup(g){const r=a([]),u=a([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return(c,l)=>{const s=p("hl-simple-table");return m(),x(s,{cols:u.value,border:"border-x",data:r.value},null,8,["cols","data"])}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));const W=["onClick"],H=e("p",null,"\u624B\u5DE5\u5C55\u5F00\u6570\u636E",-1),K=D({setup(g){const r=a(),u=a([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=a([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),l=s=>{r.value.toggleExpand(s.id,"nameExpand")};return(s,d)=>{const i=p("hl-simple-table");return m(),x(i,{ref_key:"tableRef",ref:r,cols:c.value,data:u.value,"expand-row-keys":["1index","2nameExpand"]},{index:n(({row:h})=>[e("p",null,F(h.org)+" / "+F(h.des),1)]),name:n(({row:h})=>[e("a",{href:"javascript:;",onClick:f=>l(h)},"\u70B9\u6211\u5C55\u5F00",8,W),t(" / "+F(h.name),1)]),nameExpand:n(()=>[H]),des:n(({row:h})=>[e("p",null,F(h.sex)+" / "+F(h.des),1)]),_:1},8,["cols","data"])}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const X=t("\u6761\u4EF61"),q=t("\u6761\u4EF62"),Y=t("\u6761\u4EF63"),Z=t("\u786E\u5B9A"),ee=t(" \u81EA\u5B9A\u4E49\u5217 "),te=t("\u6761\u4EF61"),ne=t("\u6761\u4EF62"),re=t("\u6761\u4EF63"),le=t("\u786E\u5B9A"),oe=D({setup(g){const r=a([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),u=a([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=a([]);return(l,s)=>{const d=p("hl-checkbox"),i=p("hl-checkbox-group"),h=p("hl-button");return m(),x(_(N),{cols:u.value,data:r.value},{filterSlot:n(({close:f})=>[o(i,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=b=>c.value=b),dir:"vertical",gap:"var(--md)",block:""},{default:n(()=>[o(d,{label:"1"},{default:n(()=>[X]),_:1}),o(d,{label:"2"},{default:n(()=>[q]),_:1}),o(d,{label:"3"},{default:n(()=>[Y]),_:1})]),_:1},8,["modelValue"]),o(h,{type:"primary",size:"sm",class:"m-t-md",onClick:f},{default:n(()=>[Z]),_:2},1032,["onClick"])]),index:n(()=>[ee,o(_(N).FilterIcon,{placement:"right"},{default:n(({close:f})=>[o(i,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=b=>c.value=b),dir:"vertical",gap:"var(--md)",block:""},{default:n(()=>[o(d,{label:"1"},{default:n(()=>[te]),_:1}),o(d,{label:"2"},{default:n(()=>[ne]),_:1}),o(d,{label:"3"},{default:n(()=>[re]),_:1})]),_:1},8,["modelValue"]),o(h,{type:"primary",size:"sm",class:"m-t-md",onClick:f},{default:n(()=>[le]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["cols","data"])}}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));const ae=t("\u4FEE\u6539"),se=D({setup(g){const r=a([{id:1,name:"\u8D39\u6587\u8F69",sex:"\u7537",org:"18933867329",des:"\u5B89\u5FBD\u7701\u516D\u5B89\u5E02\u4E1C\u6E2F\u9547\u6E2F\u4E0B\u9521\u6E2F\u4E1C\u8DEF8\u680B1204\u5BA4"},{id:2,name:"\u5218\u6797",sex:"\u7537",org:"18981484641",des:"\u5185\u8499\u9521\u6797\u6D69\u7279\u5E02\u5317\u516D\u95E8\u6751\u5357\u6CB3\u88578\u680B1204\u5BA4"},{id:3,name:"\u91D1\u73A5\u50B2",sex:"\u7537",org:"13000688905",des:"\u9ED1\u9F99\u6C5F\u7701\u5317\u5B89\u5E02\u4E09\u5C94\u8DEF\u6D66\u6C85\u5BBF\u820D131\u53F7"},{id:4,name:"\u738B\u6B66",sex:"\u7537",org:"13102220035",des:"\u6E56\u5317\u7701\u6D2A\u6E56\u5E02\u4E1C\u4E94\u6761\u8DEF\u6797\u673A\u5C0F\u533A948\u53F7"},{id:5,name:"\u535E\u5609\u6021",sex:"\u5973",org:"17022218210",des:"\u5C71\u4E1C\u7701\u62DB\u8FDC\u5E02\u5E76\u5DDE\u5317\u8DEF2\u67618\u53F7"},{id:6,name:"\u548C\u6587\u6770",sex:"\u7537",org:"13548097666",des:"\u9655\u897F\u7701\u5B89\u5EB7\u5E02\u91D1\u56FD\u91CC506\u53F7517\u623F"},{id:7,name:"\u6F58\u745E\u5802",sex:"\u7537",org:"13065726257",des:"\u5B89\u5FBD\u7701\u5929\u957F\u5E02\u91D1\u971E\u8857\u9053\u56FD\u9645\u5546\u4E1A\u4E2D\u5FC3121\u53F7"},{id:8,name:"\u5173\u723D",sex:"\u5973",org:"13570593023",des:"\u56DB\u5DDD\u7701\u7B80\u9633\u5E02\u524D\u8FDB\u8DEF506\u53F7517\u623F"}]),u=a([{title:"#",prop:"",slotName:"tableIndex",minWidth:"4em"},{title:"\u59D3\u540D",prop:"name",minWidth:"7em",fixed:"left"},{title:"\u6027\u522B",prop:"sex",minWidth:"6em"},{title:"\u624B\u673A\u53F7",prop:"org",minWidth:"10em"},{title:"\u4F4F\u5740",prop:"des",minWidth:"26em"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(c,l)=>{const s=p("hl-button"),d=p("hl-simple-table"),i=p("hl-scrollbar");return m(),x(i,{height:"200px"},{default:n(()=>[o(d,{cols:u.value,data:r.value,border:"border-x","fixed-header":""},{tableIndex:n(({rowIndex:h})=>[e("span",null,F(h+1),1)]),handle:n(()=>[o(s,{type:"link"},{default:n(()=>[ae]),_:1})]),_:1},8,["cols","data"])]),_:1})}}});var de=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));const ie={class:"table-scroll scroll-column"},pe=t("\u4FEE\u6539"),ce=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",no:"478343",level:"P8",years:10},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",no:"238343",level:"P6",years:3},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",no:"178343",level:"P7",years:5}]),u=a([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left",width:"50px"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5DE5\u53F7",prop:"no",showTooltip:!0,width:"120px",fixed:{position:"left",distance:"50px"}},{title:"\u804C\u7EA7",prop:"level",showTooltip:!0},{title:"\u53F8\u9F84",prop:"years",showTooltip:!0},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"150px",fixed:{position:"right",distance:"70px"}},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(c,l)=>{const s=p("hl-button"),d=p("hl-simple-table");return m(),v("div",ie,[o(d,{cols:u.value,data:r.value,border:"border-x"},{tableIndex:n(({rowIndex:i})=>[e("span",null,F(i+1),1)]),handle:n(()=>[o(s,{type:"link"},{default:n(()=>[pe]),_:1})]),_:1},8,["cols","data"])])}}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const he={class:"table-scroll",style:{height:"200px"}},be=t("\u4FEE\u6539"),_e=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,l)=>{const s=p("hl-button"),d=p("hl-simple-table");return m(),v("div",he,[o(d,{cols:u.value,data:r.value,border:"bordered","fixed-header":""},{tableIndex:n(({rowIndex:i})=>[e("span",null,F(i+1),1)]),handle:n(()=>[o(s,{type:"link"},{default:n(()=>[be]),_:1})]),_:1},8,["cols","data"])])}}});var Ee=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"}));const ge={class:"table-scroll",style:{height:"200px"}},xe=t("\u4FEE\u6539"),De=D({setup(g){let r=0;const u={name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},c=a(new Array(22).fill(0).map(d=>Object.assign(JSON.parse(JSON.stringify(u)),{id:r++}))),l=a([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"100px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center"}]),s=({rowIndex:d})=>d%5===0?{backgroundColor:"var(--bg-light)",zIndex:10,position:"sticky",top:"48px"}:{};return(d,i)=>{const h=p("hl-button"),f=p("hl-simple-table");return m(),v("div",ge,[o(f,{cols:l.value,data:c.value,border:"border-x","fixed-header":"","cell-style":s},{tableIndex:n(({rowIndex:b})=>[e("span",null,F(b),1)]),handle:n(()=>[o(h,{type:"link"},{default:n(()=>[xe]),_:1})]),_:1},8,["cols","data"])])}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));const Fe=e("tr",null,[e("td",{colspan:"2"},[e("strong",null,"\u5408\u8BA1")]),e("td",null,"\uFFE53232"),e("td",null,"\uFFE51212.22"),e("td",null,"\uFFE590.22")],-1),ve=D({setup(g){const r=a([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),u=a([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return(c,l)=>{const s=p("hl-simple-table");return m(),x(s,{cols:u.value,data:r.value,border:"bordered"},{foot:n(()=>[Fe]),_:1},8,["cols","data"])}}});var Be=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));const Ce=t("\u4FEE\u6539"),we=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,l)=>{const s=p("hl-button"),d=p("hl-simple-table");return m(),x(d,{cols:u.value,data:r.value,hover:"","show-header":!1},{tableIndex:n(({rowIndex:i})=>[e("span",null,F(i+1),1)]),handle:n(()=>[o(s,{type:"link"},{default:n(()=>[Ce]),_:1})]),_:1},8,["cols","data"])}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const Ae=e("a",null,"\u4FEE\u6539",-1),Ie=e("br",null,null,-1),Ne=e("br",null,null,-1),Se=t("\u9690\u85CF/\u663E\u793A\u7B2C3\u5217"),ke=D({setup(g){const r=a(),u=a([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=a([{title:"#",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),l=()=>{r.value.toggleColumn(2)};return(s,d)=>{const i=p("hl-simple-table"),h=p("hl-button");return m(),v(B,null,[o(i,{ref_key:"simpleTableRef",ref:r,cols:c.value,data:u.value},{handle:n(()=>[Ae]),_:1},8,["cols","data"]),Ie,Ne,o(h,{type:"primary",onClick:l},{default:n(()=>[Se]),_:1})],64)}}});var Te=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));const je=e("br",null,null,-1),Oe=t("\u9009\u4E2D\u7B2C\u4E00\u884C"),$e=t("\u53D6\u6D88\u9009\u62E9"),ze=D({setup(g){const r=a(),u=a([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=a([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),l=(i,h)=>{console.log(i,h)},s=()=>{console.log("row-click")},d=i=>{r.value.setCurrentRow(i)};return(i,h)=>{const f=p("hl-simple-table"),b=p("hl-button");return m(),v(B,null,[o(f,{ref_key:"tableRef",ref:r,cols:c.value,data:u.value,"highlight-current-row":"",onCurrentChange:l,onRowClick:s},null,8,["cols","data"]),je,o(b,{class:"m-r-md",onClick:h[0]||(h[0]=C=>d(u.value[0]))},{default:n(()=>[Oe]),_:1}),o(b,{onClick:h[1]||(h[1]=C=>d())},{default:n(()=>[$e]),_:1})],64)}}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));const Ue=t("\u4FEE\u6539"),Me=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,l)=>{const s=p("hl-button"),d=p("hl-simple-table");return m(),x(d,{cols:u.value,data:r.value,hover:""},{tableIndex:n(({rowIndex:i})=>[e("span",null,F(i+1),1)]),handle:n(()=>[o(s,{type:"link"},{default:n(()=>[Ue]),_:1})]),_:1},8,["cols","data"])}}});var Re=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));const Le=e("a",null,"\u4FEE\u6539",-1),Ve=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,l)=>{const s=p("hl-icon"),d=p("hl-simple-table");return m(),x(d,{cols:u.value,data:r.value,list:"","gap-y":"var(--xs)"},{tableIndex:n(({row:i})=>[o(s,{type:"danger",fill:"",radius:""},{default:n(()=>[(m(),x(T("Two"+i.icon)))]),_:2},1024)]),handle:n(()=>[Le]),_:1},8,["cols","data"])}}});var Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));const Ge=t("\u4FEE\u6539"),We=e("span",null,"\u6B63\u5728\u52A0\u8F7D...",-1),He=D({setup(g){let r=1;function u(){return r++}const c=[{id:u(),name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:u(),name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:u(),name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}],l=a(!1),s=a(JSON.parse(JSON.stringify(c))),d=a([{title:"#",slotName:"tableIndex",width:"8%"},{title:"\u7528\u6237\u540D",prop:"name",width:"15%"},{title:"\u6027\u522B",prop:"sex",width:"8%"},{title:"\u5355\u4F4D",prop:"org",width:"20%"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"10%"}]),i=j(()=>s.value.length<12),h=()=>{l.value||!i.value||(l.value=!0,window.setTimeout(()=>{const f=JSON.parse(JSON.stringify(c));f.forEach(b=>{b.id=u(),b.name=b.name+b.id}),s.value.push(...f),l.value=!1},300))};return(f,b)=>{const C=p("hl-button"),E=p("hl-spinner"),y=p("hl-group"),w=p("hl-simple-table"),A=p("hl-scrollbar");return m(),x(A,{style:{height:"200px"},onAtEnd:h},{default:n(()=>[o(w,{cols:d.value,data:s.value,border:"border-x","fixed-header":""},O({tableIndex:n(({rowIndex:k})=>[e("span",null,F(k+1),1)]),handle:n(()=>[o(C,{type:"link"},{default:n(()=>[Ge]),_:1})]),_:2},[_(i)?{name:"more",fn:n(()=>[l.value?(m(),x(y,{key:0,align:"items-middle",gap:"var(--xs)"},{default:n(()=>[o(E,{size:"sm"}),We]),_:1})):$("",!0)])}:void 0]),1032,["cols","data"])]),_:1})}}});var Ke=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));const Qe=e("a",null,"\u4FEE\u6539",-1),Xe=D({setup(g){const r=a([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),u=a([{title:"\u65E5\u671F",prop:"date"},{title:"\u914D\u9001\u4FE1\u606F",prop:"delivery",children:[{title:"\u59D3\u540D",prop:"name"},{title:"\u5730\u5740\u4FE1\u606F",prop:"address",children:[{title:"\u7701/\u5E02",prop:"state"},{title:"\u57CE\u5E02",prop:"city"},{title:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"zip",slotName:"handle"}]}]}]);return(c,l)=>{const s=p("hl-simple-table");return m(),x(s,{cols:u.value,data:r.value,border:"bordered"},{handle:n(()=>[Qe]),_:1},8,["cols","data"])}}});var qe=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));const Ye=t("\u4FEE\u6539"),Ze=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=a([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),l=a("0"),s=a("0");return(d,i)=>{const h=p("hl-option"),f=p("hl-select"),b=p("hl-button"),C=p("hl-simple-table");return m(),v(B,null,[o(f,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=E=>l.value=E),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145",class:"m-b-md"},{default:n(()=>[(m(!0),v(B,null,I(c.value,E=>(m(),v(B,null,[E.divider?(m(),x(h,{key:E.value,divider:""})):(m(),x(h,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),o(f,{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=E=>s.value=E),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145",class:"m-l-md m-b-md"},{default:n(()=>[(m(!0),v(B,null,I(c.value,E=>(m(),v(B,null,[E.divider?(m(),x(h,{key:E.value,divider:""})):(m(),x(h,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),o(C,{cols:u.value,data:r.value,border:"border-x",padding:l.value,"cell-padding":s.value},{tableIndex:n(({rowIndex:E})=>[e("span",null,F(E+1),1)]),handle:n(()=>[o(b,{type:"link"},{default:n(()=>[Ye]),_:1})]),_:1},8,["cols","data","padding","cell-padding"])],64)}}});var et=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));const tt=e("a",null,"\u4FEE\u6539",-1),nt=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex",width:"4em"},{title:"\u7528\u6237\u540D",prop:"name",width:"8em"},{title:"\u6027\u522B",prop:"sex",width:"4em"},{title:"\u5355\u4F4D",prop:"org",width:""},{title:"\u7B80\u4ECB",prop:"des",width:""},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"6em"}]);return(c,l)=>{const s=p("hl-simple-table");return m(),x(s,{cols:u.value,data:r.value,border:"bordered",resize:""},{tableIndex:n(({rowIndex:d})=>[e("span",null,F(d+1),1)]),handle:n(()=>[tt]),_:1},8,["cols","data"])}}});var rt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const lt=e("a",null,"\u4FEE\u6539",-1),ot=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=a([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),l=a("md");return(s,d)=>{const i=p("hl-option"),h=p("hl-select"),f=p("hl-simple-table");return m(),v(B,null,[o(h,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=b=>l.value=b),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:n(()=>[(m(!0),v(B,null,I(c.value,b=>(m(),v(B,null,[b.divider?(m(),x(i,{key:b.value,divider:""})):(m(),x(i,{key:b.value,label:b.label,value:b.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),o(f,{cols:u.value,data:r.value,size:l.value,class:"borderless-last"},{tableIndex:n(({rowIndex:b})=>[e("span",null,F(b+1),1)]),handle:n(()=>[lt]),_:1},8,["cols","data","size"])],64)}}});var ut=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));const at=t(" \u81EA\u5B9A\u4E49\u5217 "),st=D({setup(g){const r=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],u=a(JSON.parse(JSON.stringify(r))),c=a([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]),l=(s,d)=>{console.log("soring...",s,d),d?u.value.sort((i,h)=>{const f=String(i[s]).localeCompare(String(h[s]));return d==="ascending"?f:f*-1}):u.value=JSON.parse(JSON.stringify(r))};return(s,d)=>(m(),x(_(N),{cols:c.value,data:u.value,onSortChange:l},{index:n(()=>[at,o(_(N).SortableIcon,{sortable:"",onSortChange:d[0]||(d[0]=i=>l("id",i))})]),_:1},8,["cols","data"]))}});var dt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));const it=D({setup(g){const r=a([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),u=a([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]),c=({rowIndex:s,columnIndex:d})=>{if(s%2===0){if(d===0)return[1,2];if(d===1)return[0,0]}},l=({rowIndex:s,columnIndex:d})=>{if(d===0)return s%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}};return(s,d)=>{const i=p("hl-simple-table");return m(),v(B,null,[o(i,{cols:u.value,data:r.value,border:"bordered","span-method":c},null,8,["cols","data"]),o(i,{cols:u.value,data:r.value,border:"bordered",class:"m-t-md","span-method":l},null,8,["cols","data"])],64)}}});var pt=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));const ct=t("\u4FEE\u6539"),mt=D({setup(g){const r=a([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=a([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,l)=>{const s=p("hl-button"),d=p("hl-simple-table");return m(),x(d,{cols:u.value,data:r.value,stripe:""},{tableIndex:n(({rowIndex:i})=>[e("span",null,F(i+1),1)]),handle:n(()=>[o(s,{type:"link"},{default:n(()=>[ct]),_:1})]),_:1},8,["cols","data"])}}});var ht=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));const bt=e("a",null,"\u4FEE\u6539",-1),_t=e("br",null,null,-1),Et=e("br",null,null,-1),gt=e("a",null,"\u4FEE\u6539",-1),xt=D({setup(g){let r=1e4;const u=a(),c=a([{title:"ID",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",width:"220px",showTooltip:!0},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),l=(s,d,i)=>{window.setTimeout(()=>{i([{id:r++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",hasChildren:!0},{id:r++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:r++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]}])},3e3)};return window.setTimeout(()=>{u.value=[{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:11,name:"\u738B\u4E8C\u9EBB\u5B5011",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:111,name:"\u738B\u4E8C\u9EBB\u5B50111",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:112,name:"\u738B\u4E8C\u9EBB\u5B50112",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]},{id:12,name:"\u738B\u4E8C\u9EBB\u5B5012",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[]}]},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",hasChildren:!0},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]},100),(s,d)=>{const i=p("hl-simple-table");return m(),v(B,null,[o(i,{cols:c.value,data:u.value,load:l,"expand-row-keys":["1"]},{tableIndex:n(({row:h})=>[e("span",null,F(h.id),1)]),handle:n(()=>[bt]),_:1},8,["cols","data"]),_t,Et,o(i,{cols:c.value,data:u.value,load:l,"expand-row-keys":["1"],"first-column-index":1},{tableIndex:n(({row:h})=>[e("span",null,F(h.id),1)]),handle:n(()=>[gt]),_:1},8,["cols","data"])],64)}}});var Dt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));const ft=e("p",{style:{"text-align":"center"}},"\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~",-1),Ft=D({setup(g){const r=a(null),u=a([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return(c,l)=>{const s=p("hl-simple-table");return m(),x(s,{cols:u.value,border:"border-x",data:r.value},{unknown:n(()=>[ft]),_:1},8,["cols","data"])}}});var vt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"}));const Bt=e("h1",null,"SimpleTable \u7B80\u5355\u8868\u683C",-1),Ct=e("p",null,"SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),wt=e("div",{class:"doc-tip"},[e("p",null,[t("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),e("code",null,"<client-only></client-only>"),t(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),e("a",{href:"https://nuxt.com/v3"},"Nuxt"),t(") \u548C SSG (eg: "),e("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),t(")\u3002")])],-1),yt=e("h2",{id:"bian-kuang-yang-shi"},[e("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),t(" \u8FB9\u6846\u6837\u5F0F")],-1),At=e("p",null,[e("code",null,"border"),t(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F")],-1),It=e("h2",{id:"jian-ju-she-zhi"},[e("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),t(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),Nt=e("p",null,[e("code",null,"padding"),t(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u5C3A\u5BF8\uFF0C \u540C\u65F6"),e("code",null,"cell-padding"),t(" \u53EF\u8BBE\u7F6ETD\u7684\u95F4\u8DDD\u5C3A\u5BF8")],-1),St=e("h2",{id:"xuan-ting-yang-shi-hover"},[e("a",{class:"header-anchor",href:"#xuan-ting-yang-shi-hover"}),t(" \u60AC\u505C\u6837\u5F0F Hover")],-1),kt=e("p",null,[e("code",null,"hover"),t(" \u5C5E\u6027\u53EF\u4EE5\u5728\u60AC\u505C\u5728\u67D0\u4E00\u884C\u65F6\uFF0C\u5448\u73B0\u80CC\u666F\u8272\u3002")],-1),Tt=e("h2",{id:"tiao-wen-yang-shi"},[e("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),t(" \u6761\u7EB9\u6837\u5F0F")],-1),jt=e("p",null,[e("code",null,"stripe"),t("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),Ot=e("div",null,[e("p",null,[t("stripe \u8FD8\u63A5\u6536 "),e("code",null,"even"),t(" \u6216\u8005 "),e("code",null,"odd"),t(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),e("code",null,"odd"),t(" \u5947\u6570")])],-1),$t=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),t(" \u5C3A\u5BF8\u4FEE\u9970")],-1),zt=e("p",null,[e("code",null,"size"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u7684\u5C3A\u5BF8\u3002")],-1),Pt=e("h2",{id:"tuo-zhuai-gai-bian-lie-kuan"},[e("a",{class:"header-anchor",href:"#tuo-zhuai-gai-bian-lie-kuan"}),t(" \u62D6\u62FD\u6539\u53D8\u5217\u5BBD")],-1),Ut=e("p",null,[e("code",null,"resize"),t(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),e("code",null,"true"),t("\uFF0C\u53EF\u4EE5\u62D6\u62FD\u8868\u683C\u5934\u7684\u5217\uFF0C\u4ECE\u800C\u6539\u53D8\u5217\u5BBD\u3002")],-1),Mt=e("h2",{id:"lie-biao-yang-shi"},[e("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),t(" \u5217\u8868\u6837\u5F0F")],-1),Rt=e("p",null,[e("code",null,"list"),t(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),Lt=e("div",null,[e("p",null,[t("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="var(--xs)"')])],-1),Vt=e("h2",{id:"gu-ding-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),t(" \u56FA\u5B9A\u8868\u5934")],-1),Jt=e("p",null,[t("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),e("code",null,"fixed-header"),t(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),Gt=S('<h2 id="gu-ding-lie"><a class="header-anchor" href="#gu-ding-lie"></a> \u56FA\u5B9A\u5217</h2><p>\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 <code>fixed</code> \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 <code>left</code> <code>right</code> \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 <code>fixed: &#39;left&#39;</code>\u3002<code>fixed</code> \u5C5E\u6027\u8FD8\u53EF\u4EE5\u4E3A <code>object</code> \u7C7B\u578B\uFF0C\u8BE6\u7EC6\u63A7\u5236 <code>fixed</code> \u7684\u8DDD\u79BB\u3002</p>',2),Wt=e("h2",{id:"gu-ding-xing"},[e("a",{class:"header-anchor",href:"#gu-ding-xing"}),t(" \u56FA\u5B9A\u884C")],-1),Ht=e("p",null,[t("\u901A\u8FC7 "),e("code",null,"cellStyle"),t(" \u5C5E\u6027\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u56FA\u5B9A\u884C\u6548\u679C\u3002")],-1),Kt=e("h2",{id:"gu-ding-tou-he-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-tou-he-lie"}),t(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),Qt=e("p",null,"\u8868\u5934\u548C\u5217\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u56FA\u5B9A\u3002",-1),Xt=e("h2",{id:"xia-la-jia-zai-geng-duo"},[e("a",{class:"header-anchor",href:"#xia-la-jia-zai-geng-duo"}),t(" \u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A")],-1),qt=e("p",null,"\u914D\u5408 Scrollbar \u7EC4\u4EF6\u53EF\u5B9E\u73B0\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A\u3002",-1),Yt=e("h2",{id:"yi-chu-biao-tou"},[e("a",{class:"header-anchor",href:"#yi-chu-biao-tou"}),t(" \u79FB\u9664\u8868\u5934")],-1),Zt=e("p",null,[e("code",null,"show-header"),t(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664\u8868\u5934\uFF0C\u8BA9\u5176\u5C55\u793A\u4E3A\u4E00\u4E2A\u7EAF\u5217\u8868\u6837\u5F0F\u3002")],-1),en=e("h2",{id:"pai-xu"},[e("a",{class:"header-anchor",href:"#pai-xu"}),t(" \u6392\u5E8F")],-1),tn=e("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u5728\u975Esetup\u8BED\u6CD5\u4E0B\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF1Bsetup\u8BED\u6CD5\u8BF7\u53C2\u8003\u5982\u4E0B\u6E90\u7801\u3002",-1),nn=e("div",null,[e("p",null,[t("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),e("code",null,"true / false / 'descending' / 'ascending'"),t(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),rn=e("h2",{id:"shai-xuan"},[e("a",{class:"header-anchor",href:"#shai-xuan"}),t(" \u7B5B\u9009")],-1),ln=e("p",null,"\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u5728\u975Esetup\u8BED\u6CD5\u4E0B\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA FilterIcon \u7EC4\u4EF6\uFF1Bsetup\u8BED\u6CD5\u8BF7\u53C2\u8003\u5982\u4E0B\u6E90\u7801\u3002",-1),on=e("div",null,[e("p",null,[t("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6E "),e("code",null,"filter"),t(" \u5BF9\u8C61\uFF0C\u63D0\u4F9B "),e("code",null,"slotName"),t("\uFF08\u5FC5\u9009\uFF09\u3001"),e("code",null,"placement"),t("\uFF08\u53C2\u8003Popover\u6587\u6863\uFF09\u3001"),e("code",null,"popperClass"),t(" \u5C5E\u6027\u3002slot\u4E2D\u63D0\u4F9B "),e("code",null,"close"),t(" \u65B9\u6CD5\u7528\u6765\u624B\u5DE5\u5173\u95ED\u5F39\u51FA\u6846\u3002")])],-1),un=e("h2",{id:"gao-liang-xing"},[e("a",{class:"header-anchor",href:"#gao-liang-xing"}),t(" \u9AD8\u4EAE\u884C")],-1),an=e("p",null,"\u9009\u62E9\u5355\u884C\u6570\u636E\u65F6\u4F7F\u7528\u8272\u5757\u8868\u793A\u3002",-1),sn=e("div",null,[e("p",null,[t("SimpleTable \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5355\u9009\u7684\u652F\u6301\uFF0C \u53EA\u9700\u8981\u914D\u7F6E"),e("code",null,"highlight-current-row"),t("\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5355\u9009\u3002 \u4E4B\u540E\u7531"),e("code",null,"current-change"),t("\u4E8B\u4EF6\u6765\u7BA1\u7406\u9009\u4E2D\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4F1A\u4F20\u5165 currentRow\uFF0ColdCurrentRow\u3002")])],-1),dn=e("h2",{id:"zhan-kai-xing"},[e("a",{class:"header-anchor",href:"#zhan-kai-xing"}),t(" \u5C55\u5F00\u884C")],-1),pn=e("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 SimpleTable \u5C55\u5F00\u884C\u529F\u80FD\u3002\u53EF\u4EE5\u5B9A\u4E49\u591A\u5217\u540C\u65F6\u5C55\u5F00\u3002",-1),cn=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E expand \u5BF9\u8C61 \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\u3002expand\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A"),e("code",null,"slotName"),t("\uFF0C"),e("code",null,"hideLabel"),t("\uFF0ChideLabel\u9ED8\u8BA4\u4E3Afalse")])],-1),mn=e("h2",{id:"shu-xing-shu-ju-yu-lan-jia-zai"},[e("a",{class:"header-anchor",href:"#shu-xing-shu-ju-yu-lan-jia-zai"}),t(" \u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D")],-1),hn=e("p",null,[t("\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B children \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6307\u5B9A row-key\u3002\u652F\u6301\u5B50\u8282\u70B9\u6570\u636E\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684\u52A0\u8F7D\u51FD\u6570 load \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684hasChildren\u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 children\u4E0EhasChildren\u90FD\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tree-props"),t(" \u914D\u7F6E\u3002"),e("code",null,"first-column-index"),t(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5C55\u5F00\u884C\u4E3A\u6240\u4F5C\u7528\u7684\u5217\u3002")],-1),bn=e("div",null,[e("p",null,[t("\u5F53children\u5B57\u6BB5\u6709\u6570\u7EC4\u503C\u65F6\uFF0C\u5C06\u4F1A\u5FFD\u7565hasChildren\u5B57\u6BB5\u3002"),e("em",null,[e("strong",null,[t("\u9700\u8981\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u4E00\u5B9A\u8981\u8C28\u614E\u8BBE\u7F6E"),e("code",null,"default-expand-all"),t("\u5C5E\u6027\u4E3Atrue\u503C")])])])],-1),_n=e("h2",{id:"he-bing-xing-huo-lie"},[e("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),t(" \u5408\u5E76\u884C\u6216\u5217")],-1),En=e("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),gn=e("div",null,[e("p",null,"\u901A\u8FC7\u7ED9 table \u4F20\u5165span-method\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C row\u3001\u5F53\u524D\u5217 column\u3001\u5F53\u524D\u884C\u53F7 rowIndex\u3001\u5F53\u524D\u5217\u53F7 columnIndex \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 rowspan\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 colspan\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A rowspan \u548C colspan \u7684\u5BF9\u8C61\u3002")],-1),xn=e("h2",{id:"duo-ji-biao-tou"},[e("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),t(" \u591A\u7EA7\u8868\u5934")],-1),Dn=e("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),fn=e("div",null,[e("p",null,[t("\u901A\u8FC7"),e("code",null,"cols"),t(" \u7684 "),e("code",null,"children"),t(" \u5C5E\u6027\u5D4C\u5957\u5B9E\u73B0\u591A\u7EA7\u8868\u5934")])],-1),Fn=e("h2",{id:"biao-wei-he-ji-xing"},[e("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),t(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),vn=e("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),Bn=e("div",null,[e("p",null,[t("\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 "),e("code",null,"foot"),t(" slot\u5B9E\u73B0")])],-1),Cn=e("h2",{id:"yin-cang-lie"},[e("a",{class:"header-anchor",href:"#yin-cang-lie"}),t(" \u9690\u85CF\u5217")],-1),wn=e("p",null,[e("code",null,"toggleColumn"),t(" \u65B9\u6CD5\u652F\u6301\u5BF9\u5217\u7684\u9690\u85CF\u6216\u8005\u663E\u793A\u64CD\u4F5C\u3002")],-1),yn=e("div",null,[e("p",null,"\u6682\u4E0D\u652F\u6301\u5BF9\u591A\u7EA7\u8868\u5934\u4EE5\u53CA\u5B58\u5728\u5408\u5E76\u5355\u5143\u683C\u7684\u8868\u683C\u8FDB\u884C\u64CD\u4F5C")],-1),An=e("h2",{id:"kong-shu-ju"},[e("a",{class:"header-anchor",href:"#kong-shu-ju"}),t(" \u7A7A\u6570\u636E")],-1),In=e("h2",{id:"wei-zhi-shu-ju"},[e("a",{class:"header-anchor",href:"#wei-zhi-shu-ju"}),t(" \u672A\u77E5\u6570\u636E")],-1),Nn=e("div",null,[e("p",null,[t("\u5728\u4F20\u9012\u7684\u6570\u636E\u4E3A "),e("code",null,"null"),t(" \u6216\u8005 "),e("code",null,"undefined"),t(" \u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 "),e("code",null,"unknown"),t(" slot")])],-1),Sn=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>cell-padding</td><td>\u8BBE\u7F6ETd\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>auto-height</td><td>\u4F7FTh\u548CTd\u7684\u9AD8\u5EA6\u53D8\u4E3Aauto</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>fixed-footer</td><td>\u56FA\u5B9A\u8868\u5C3E</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>resize</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u62FD\u8868\u5934\u6539\u53D8\u5217\u5BBD</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scroll-container</td><td>\u8BBE\u7F6E\u56FA\u5B9A\u5217\u65F6\uFF0C\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u4E0D\u662F\u8868\u683C\u7684\u76F4\u63A5\u7236\u5143\u7D20\u6216\u8005Scrollbar\u7EC4\u4EF6\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u5C5E\u6027\uFF0C\u7528\u4EE5\u652F\u6301\u6EDA\u52A8\u65F6\u56FA\u5B9A\u5217\u9634\u5F71\u6548\u679C</td><td>string / HTMLElement</td><td>-</td><td>-</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>expand-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\uFF0C\u540C\u65F6\u9002\u7528\u884C\u5C55\u5F00\u4E0E\u6811\u5C55\u5F00\u3002\u884C\u5C55\u5F00\u65F6\u7528\u884CrowKey+slotName\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\uFF1B\u6811\u5C55\u5F00\u65F6\u4F7F\u7528rowKey\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\u3002<em><strong>\u6570\u7EC4\u503C\u4E00\u5B9A\u662F\u5B57\u7B26\u4E32\u3002</strong></em></td><td>array</td><td>-</td><td>-</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 SimpleTable \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>first-column-index</td><td>\u6811\u5F62\u5C55\u5F00\u64CD\u4F5C\u4F5C\u7528\u7684\u5217</td><td>number</td><td>-</td><td>0</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>-</td><td><code>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>function(row, treeNode, resolve)</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columnKey</td><td>\u5217key\uFF0C\u5982\u679C\u52A8\u6001\u5207\u6362\u8868\u683C\u5217\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u503C\u3002\u5426\u5219\u5217\u5BBD\u4F1A\u8BA1\u7B97\u9519\u8BEF</td><td>string</td><td></td><td></td></tr><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>min-width</td><td>\u6700\u5C0F\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>max-width</td><td>\u6700\u5927\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string / object</td><td>left / right / { position: string; distance: string; }</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, rowIndex, columnIndex)</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr><tr><td>tree-expand</td><td>\u6811\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, row</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleExpand</td><td>\u5C55\u5F00/\u6298\u53E0\u884C\u3002\u7531\u4E8E\u6BCF\u884C\u53EF\u80FD\u6709\u591A\u4E2A\u5C55\u5F00\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u9700\u8981\u5C55\u5F00\u7684slotName</td><td>rowKey, slotName</td></tr><tr><td>toggleExpandTree</td><td>\u5C55\u5F00\u6811</td><td>row</td></tr><tr><td>toggleColumn</td><td>\u663E\u793A/\u9690\u85CF\u5217</td><td>index, show\uFF08show\u53EF\u9009\uFF09</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C \u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001</td><td>row</td></tr><tr><td>clearTooltip</td><td>\u9690\u85CFtooltip</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>unknown</td><td>\u8868\u683C\u6570\u636E\u4E3Anull\u6216\u8005undefined\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>more</td><td>\u4E0B\u62C9\u52A0\u8F7D\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr></tbody></table>',10),zn={setup(g){const r={"../../../examples/simple-table/basic.vue":M,"../../../examples/simple-table/border.vue":V,"../../../examples/simple-table/empty.vue":G,"../../../examples/simple-table/expand.vue":Q,"../../../examples/simple-table/filter.vue":ue,"../../../examples/simple-table/fixed-all.vue":de,"../../../examples/simple-table/fixed-column.vue":me,"../../../examples/simple-table/fixed-header.vue":Ee,"../../../examples/simple-table/fixed-row.vue":fe,"../../../examples/simple-table/foot.vue":Be,"../../../examples/simple-table/header.vue":ye,"../../../examples/simple-table/hide-column.vue":Te,"../../../examples/simple-table/highlight.vue":Pe,"../../../examples/simple-table/hover.vue":Re,"../../../examples/simple-table/list.vue":Je,"../../../examples/simple-table/load-more.vue":Ke,"../../../examples/simple-table/multi-header.vue":qe,"../../../examples/simple-table/padding.vue":et,"../../../examples/simple-table/resize.vue":rt,"../../../examples/simple-table/size.vue":ut,"../../../examples/simple-table/sortable.vue":dt,"../../../examples/simple-table/span-method.vue":pt,"../../../examples/simple-table/stripe.vue":ht,"../../../examples/simple-table/tree.vue":Dt,"../../../examples/simple-table/unknown.vue":vt};return(u,c)=>{const l=p("demo-block"),s=p("right-nav");return m(),v(B,null,[e("section",null,[Bt,Ct,wt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/basic","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    @row-click="rowClicked"\r
    @cell-click="cellClicked"\r
  >\r
    <template #firstCol>\r
      <hl-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" @change="selectAll" />\r
    </template>\r
    <template #tableIndex="{ row }">\r
      <hl-checkbox v-model="selectedRows" :label="row.id" @change="selectRow(row.id)">{{ '' }}</hl-checkbox>\r
    </template>\r
\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const selectedAll = ref(false)\r
const selectedRows = ref([])\r
const isIndeterminate = ref(false)\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u8303\u67CF\u5E90',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1',\r
  },\r
  {\r
    id: 2,\r
    name: '\u59DC\u519B\u7ED3',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u738B\u949E\u6D0B',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org', align: 'center' },\r
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
const selectAll = () => {\r
  if (selectedAll.value) {\r
    selectedRows.value.splice(0, selectedRows.value.length)\r
    selectedRows.value.push(...tableData.value.map(d => d.id))\r
    isIndeterminate.value = false\r
  } else {\r
    selectedRows.value.splice(0, selectedRows.value.length)\r
  }\r
}\r
const selectRow = () => {\r
  selectedAll.value = selectedRows.value.length === tableData.value.length\r
  if (selectedRows.value.length > 0 && selectedAll.value == false) {\r
    isIndeterminate.value = true\r
  } else {\r
    isIndeterminate.value = false\r
  }\r
}\r
const rowClicked = (row, rowIndex, event) => {\r
  console.log('rowClicked', row, rowIndex, event)\r
}\r
const cellClicked = (row, col, rowIndex, colIndex, event) => {\r
  console.log('cellClicked', row, col, rowIndex, colIndex, event)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),yt,At,o(l,{fs:"",demos:_(r),"path-name":"simple-table/border","source-code":`<template>\r
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">\r
    <template v-for="item in options">\r
      <hl-option v-if="item.divider" :key="item.value" divider />\r
      <hl-option\r
        v-else\r
        :key="item.value"\r
        :label="item.label"\r
        :value="item.value"\r
      />\r
    </template>\r
  </hl-select>\r
\r
  <hl-simple-table :cols="cols" :data="tableData" :border="value" padding="0">\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
const options = ref([\r
  {\r
    value: 'borderless',\r
    label: 'borderless',\r
  },\r
  {\r
    value: 'border-x',\r
    label: 'border-x',\r
  },\r
  {\r
    value: 'border-y',\r
    label: 'border-y',\r
  },\r
  {\r
    value: 'bordered',\r
    label: 'bordered',\r
  },\r
])\r
const value = ref('borderless')\r
\r
<\/script>\r
`},null,8,["demos"]),It,Nt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/padding","source-code":`<template>\r
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145" class="m-b-md">\r
    <template v-for="item in options">\r
      <hl-option v-if="item.divider" :key="item.value" divider />\r
      <hl-option\r
        v-else\r
        :key="item.value"\r
        :label="item.label"\r
        :value="item.value"\r
      />\r
    </template>\r
  </hl-select>\r
\r
  <hl-select v-model="value2" clearable placeholder="\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145" class="m-l-md m-b-md">\r
    <template v-for="item in options">\r
      <hl-option v-if="item.divider" :key="item.value" divider />\r
      <hl-option\r
        v-else\r
        :key="item.value"\r
        :label="item.label"\r
        :value="item.value"\r
      />\r
    </template>\r
  </hl-select>\r
\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    border="border-x"\r
    :padding="value"\r
    :cell-padding="value2"\r
  >\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <hl-button type="link">\u4FEE\u6539</hl-button>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
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
    label: 'sm',\r
  },\r
  {\r
    value: 'var(--md)',\r
    label: 'md',\r
  },\r
  {\r
    value: 'var(--lg)',\r
    label: 'lg',\r
  },\r
  {\r
    value: 'var(--xl)',\r
    label: 'xl',\r
  },\r
  {\r
    value: 'var(--xxl)',\r
    label: 'xxl',\r
  },\r
])\r
const value = ref('0')\r
const value2 = ref('0')\r
\r
<\/script>\r
`},null,8,["demos"]),St,kt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/hover","source-code":`<template>\r
  <hl-simple-table :cols="cols" :data="tableData" hover>\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <hl-button type="link">\u4FEE\u6539</hl-button>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Tt,jt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/stripe","source-code":`<template>\r
  <hl-simple-table :cols="cols" :data="tableData" stripe>\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <hl-button type="link">\u4FEE\u6539</hl-button>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
<\/script>\r
`},{default:n(()=>[Ot]),_:1},8,["demos"]),$t,zt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/size","source-code":`<template>\r
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">\r
    <template v-for="item in options">\r
      <hl-option v-if="item.divider" :key="item.value" divider />\r
      <hl-option\r
        v-else\r
        :key="item.value"\r
        :label="item.label"\r
        :value="item.value"\r
      />\r
    </template>\r
  </hl-select>\r
\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    :size="value"\r
    class="borderless-last"\r
  >\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
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
const value = ref('md')\r
\r
<\/script>\r
`},null,8,["demos"]),Pt,Ut,o(l,{fs:"",demos:_(r),"path-name":"simple-table/resize","source-code":`<template>\r
  <hl-simple-table :cols="cols" :data="tableData" border="bordered" resize>\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex', width:'4em' },\r
  { title: '\u7528\u6237\u540D', prop: 'name', width:'8em' },\r
  { title: '\u6027\u522B', prop: 'sex', width:'4em' },\r
  { title: '\u5355\u4F4D', prop: 'org', width:'' },\r
  { title: '\u7B80\u4ECB', prop: 'des', width:'' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width:'6em' },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Mt,Rt,o(l,{fs:"",dark:"",demos:_(r),"path-name":"simple-table/list","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    list\r
    gap-y="var(--xs)"\r
  >\r
    <template #tableIndex="{ row }">\r
      <hl-icon\r
        type="danger"\r
        fill\r
        radius\r
      >\r
        <component\r
          :is="'Two' + row.icon"\r
        />\r
      </hl-icon>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
    icon: 'Briefcase',\r
  },\r
  {\r
    id: 2,\r
    name: '\u674E\u56DB',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD',\r
    icon: 'ChartPie',\r
  },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
    icon: 'Archive',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
<\/script>\r
`},{default:n(()=>[Lt]),_:1},8,["demos"]),Vt,Jt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/fixed-header","source-code":`<template>\r
  <div class="table-scroll" style="height: 200px">\r
    <hl-simple-table\r
      :cols="cols"\r
      :data="tableData"\r
      border="bordered"\r
      fixed-header\r
    >\r
      <template #tableIndex="{ rowIndex }">\r
        <span>{{ rowIndex + 1 }}</span>\r
      </template>\r
      <template #handle>\r
        <hl-button type="link">\u4FEE\u6539</hl-button>\r
      </template>\r
    </hl-simple-table>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Gt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/fixed-column","source-code":`<template>\r
  <div class="table-scroll scroll-column">\r
    <hl-simple-table :cols="cols" :data="tableData" border="border-x">\r
      <template #tableIndex="{ rowIndex }">\r
        <span>{{ rowIndex + 1 }}</span>\r
      </template>\r
      <template #handle>\r
        <hl-button type="link">\u4FEE\u6539</hl-button>\r
      </template>\r
    </hl-simple-table>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
    no: '478343',\r
    level: 'P8',\r
    years: 10,\r
  },\r
  {\r
    id: 2,\r
    name: '\u674E\u56DB',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD',\r
    no: '238343',\r
    level: 'P6',\r
    years: 3,\r
  },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
    no: '178343',\r
    level: 'P7',\r
    years: 5,\r
  },\r
])\r
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex', fixed: 'left', width: '50px' },\r
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '150px' },\r
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },\r
  { title: '\u5DE5\u53F7', prop: 'no', showTooltip: true, width: '120px', fixed: { position: 'left', distance: '50px' } },\r
  { title: '\u804C\u7EA7', prop: 'level', showTooltip: true },\r
  { title: '\u53F8\u9F84', prop: 'years', showTooltip: true },\r
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },\r
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '150px', fixed: { position: 'right', distance: '70px' } },\r
  {\r
    title: '\u64CD\u4F5C',\r
    prop: '',\r
    slotName: 'handle',\r
    align: 'center',\r
    fixed: 'right',\r
  },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Wt,Ht,o(l,{fs:"",demos:_(r),"path-name":"simple-table/fixed-row","source-code":`<template>\r
  <div class="table-scroll" style="height: 200px">\r
    <hl-simple-table\r
      :cols="cols"\r
      :data="tableData"\r
      border="border-x"\r
      fixed-header\r
      :cell-style="cellStyle"\r
    >\r
      <template #tableIndex="{ rowIndex }">\r
        <span>{{ rowIndex }}</span>\r
      </template>\r
      <template #handle>\r
        <hl-button type="link">\u4FEE\u6539</hl-button>\r
      </template>\r
    </hl-simple-table>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
let idx = 0\r
const row = {\r
  name: '\u738B\u4E8C\u9EBB\u5B50',\r
  sex: '\u7537',\r
  org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
  des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
}\r
const tableData = ref(new Array(22).fill(0).map(_ => Object.assign(JSON.parse(JSON.stringify(row)), { id: idx++ })))\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },\r
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '100px' },\r
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },\r
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '150px' },\r
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },\r
  { title: '\u64CD\u4F5C', prop: '', slotName: 'handle', align: 'center' },\r
])\r
\r
// \u56FA\u5B9A5\u500D\u6570\u7684\u884C\r
const cellStyle = ({ rowIndex }) => {\r
  return rowIndex % 5 === 0 ? {\r
    backgroundColor: 'var(--bg-light)',\r
    zIndex: 10,\r
    position: 'sticky',\r
    top: \`48px\`, // 48\u4E3A\u8868\u683C\u5934\u7684\u9AD8\u5EA6\r
  } : {}\r
}\r
<\/script>\r
`},null,8,["demos"]),Kt,Qt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/fixed-all","source-code":`<template>\r
  <hl-scrollbar height="200px">\r
    <hl-simple-table\r
      :cols="cols"\r
      :data="tableData"\r
      border="border-x"\r
      fixed-header\r
    >\r
      <template #tableIndex="{ rowIndex }">\r
        <span>{{ rowIndex + 1 }}</span>\r
      </template>\r
      <template #handle>\r
        <hl-button type="link">\u4FEE\u6539</hl-button>\r
      </template>\r
    </hl-simple-table>\r
  </hl-scrollbar>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  { id: 1, name: '\u8D39\u6587\u8F69', sex: '\u7537', org: '18933867329', des: '\u5B89\u5FBD\u7701\u516D\u5B89\u5E02\u4E1C\u6E2F\u9547\u6E2F\u4E0B\u9521\u6E2F\u4E1C\u8DEF8\u680B1204\u5BA4' },\r
  { id: 2, name: '\u5218\u6797', sex: '\u7537', org: '18981484641', des: '\u5185\u8499\u9521\u6797\u6D69\u7279\u5E02\u5317\u516D\u95E8\u6751\u5357\u6CB3\u88578\u680B1204\u5BA4' },\r
  { id: 3, name: '\u91D1\u73A5\u50B2', sex: '\u7537', org: '13000688905', des: '\u9ED1\u9F99\u6C5F\u7701\u5317\u5B89\u5E02\u4E09\u5C94\u8DEF\u6D66\u6C85\u5BBF\u820D131\u53F7' },\r
  { id: 4, name: '\u738B\u6B66', sex: '\u7537', org: '13102220035', des: '\u6E56\u5317\u7701\u6D2A\u6E56\u5E02\u4E1C\u4E94\u6761\u8DEF\u6797\u673A\u5C0F\u533A948\u53F7' },\r
  { id: 5, name: '\u535E\u5609\u6021', sex: '\u5973', org: '17022218210', des: '\u5C71\u4E1C\u7701\u62DB\u8FDC\u5E02\u5E76\u5DDE\u5317\u8DEF2\u67618\u53F7' },\r
  { id: 6, name: '\u548C\u6587\u6770', sex: '\u7537', org: '13548097666', des: '\u9655\u897F\u7701\u5B89\u5EB7\u5E02\u91D1\u56FD\u91CC506\u53F7517\u623F' },\r
  { id: 7, name: '\u6F58\u745E\u5802', sex: '\u7537', org: '13065726257', des: '\u5B89\u5FBD\u7701\u5929\u957F\u5E02\u91D1\u971E\u8857\u9053\u56FD\u9645\u5546\u4E1A\u4E2D\u5FC3121\u53F7' },\r
  { id: 8, name: '\u5173\u723D', sex: '\u5973', org: '13570593023', des: '\u56DB\u5DDD\u7701\u7B80\u9633\u5E02\u524D\u8FDB\u8DEF506\u53F7517\u623F' },\r
])\r
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip\r
const cols = ref([\r
  { title: '#', prop: '', slotName: 'tableIndex', minWidth: '4em' },\r
  { title: '\u59D3\u540D', prop: 'name', minWidth: '7em', fixed: 'left' },\r
  { title: '\u6027\u522B', prop: 'sex', minWidth: '6em' },\r
  { title: '\u624B\u673A\u53F7', prop: 'org', minWidth: '10em' },\r
  { title: '\u4F4F\u5740', prop: 'des', minWidth: '26em' },\r
  {\r
    title: '\u64CD\u4F5C',\r
    prop: '',\r
    slotName: 'handle',\r
    align: 'center',\r
    fixed: 'right',\r
  },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),Xt,qt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/load-more","source-code":`<template>\r
  <hl-scrollbar style="height: 200px" @at-end="loadMore">\r
    <hl-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>\r
      <template #tableIndex="{ rowIndex }">\r
        <span>{{ rowIndex + 1 }}</span>\r
      </template>\r
      <template #handle>\r
        <hl-button type="link">\u4FEE\u6539</hl-button>\r
      </template>\r
      <template v-if="hadMoreData" #more>\r
        <template v-if="loading">\r
          <hl-group align="items-middle" gap="var(--xs)">\r
            <hl-spinner size="sm" />\r
            <span>\u6B63\u5728\u52A0\u8F7D...</span>\r
          </hl-group>\r
        </template>\r
      </template>\r
    </hl-simple-table>\r
  </hl-scrollbar>\r
</template>\r
<script setup lang="ts">\r
import { computed, ref } from 'vue'\r
\r
let count = 1\r
function id() {\r
  return count++\r
}\r
const data = [\r
  {\r
    id: id(),\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: id(), name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: id(),\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
]\r
\r
const loading = ref(false)\r
const tableData = ref(JSON.parse(JSON.stringify(data)))\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex', width: '8%' },\r
  { title: '\u7528\u6237\u540D', prop: 'name', width: '15%' },\r
  { title: '\u6027\u522B', prop: 'sex', width: '8%' },\r
  { title: '\u5355\u4F4D', prop: 'org', width: '20%' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width: '10%' },\r
])\r
\r
const hadMoreData = computed(() => tableData.value.length < 12)\r
const loadMore = () => {\r
  if (loading.value || !hadMoreData.value) return\r
  loading.value = true\r
  window.setTimeout(() => {\r
    const moreData = JSON.parse(JSON.stringify(data))\r
    moreData.forEach(d => {\r
      d.id = id()\r
      d.name = d.name + d.id\r
    })\r
    tableData.value.push(...moreData)\r
    loading.value = false\r
  }, 300)\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),Yt,Zt,o(l,{fs:"",demos:_(r),"path-name":"simple-table/header","source-code":`<template>\r
  <hl-simple-table :cols="cols" :data="tableData" hover :show-header="false">\r
    <template #tableIndex="{ rowIndex }">\r
      <span>{{ rowIndex + 1 }}</span>\r
    </template>\r
    <template #handle>\r
      <hl-button type="link">\u4FEE\u6539</hl-button>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u738B\u4E8C\u9EBB\u5B50',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
  },\r
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },\r
  {\r
    id: 3,\r
    name: '\u5F20\u4E09',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des' },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
<\/script>\r
`},null,8,["demos"]),en,tn,o(l,{fs:"",demos:_(r),"path-name":"simple-table/sortable","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    @sort-change="sortChange"\r
  >\r
    <template #index>\r
      \u81EA\u5B9A\u4E49\u5217\r
      <HlSimpleTable.SortableIcon sortable @sort-change="val => sortChange('id', val)" />\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { HlSimpleTable } from 'hongluan-ui'\r
\r
const defaultData = [\r
  {\r
    id: 1,\r
    name: '\u8303\u767D\u9732',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',\r
  },\r
  {\r
    id: 2,\r
    name: 'xxx',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u738B\u671D\u9633',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
]\r
const tableData = ref(JSON.parse(JSON.stringify(defaultData)))\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },\r
  { title: '\u7528\u6237\u540D', prop: 'name', sortable: true },\r
  { title: '\u6027\u522B', prop: 'sex', sortable: false },\r
  { title: '\u5355\u4F4D', prop: 'org', sortable: 'descending' },\r
  {\r
    title: '\u7B80\u4ECB',\r
    prop: 'des',\r
    showTooltip: true,\r
    width: '40%',\r
    tooltipProps: { width: '200px', popperClass: 'test-tip' },\r
    sortable: 'ascending',\r
  },\r
])\r
\r
const sortChange = (prop, sort) => { // \u4EC5\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5B9E\u9645\u9879\u76EE\u9700\u8981\u901A\u8FC7\u8C03\u53D6\u540E\u53F0API\u5B9E\u73B0\r
  console.log('soring...', prop, sort)\r
  if (sort) {\r
    tableData.value.sort((d1, d2) => {\r
      const result = String(d1[prop]).localeCompare(String(d2[prop]))\r
      return sort === 'ascending' ? result : result * -1\r
    })\r
  } else {\r
    tableData.value = JSON.parse(JSON.stringify(defaultData))\r
  }\r
}\r
\r
<\/script>\r
`},{default:n(()=>[nn]),_:1},8,["demos"]),rn,ln,o(l,{fs:"",demos:_(r),"path-name":"simple-table/filter","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
  >\r
    <template #filterSlot="{ close }">\r
      <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>\r
        <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>\r
        <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>\r
        <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>\r
      </hl-checkbox-group>\r
      <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>\r
    </template>\r
    <template #index>\r
      \u81EA\u5B9A\u4E49\u5217\r
      <HlSimpleTable.FilterIcon placement="right">\r
        <template #default="{ close }">\r
          <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>\r
            <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>\r
            <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>\r
            <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>\r
          </hl-checkbox-group>\r
          <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>\r
        </template>\r
      </HlSimpleTable.FilterIcon>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { HlSimpleTable } from 'hongluan-ui'\r
\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u8303\u767D\u9732',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',\r
  },\r
  {\r
    id: 2,\r
    name: 'xxx',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u738B\u671D\u9633',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
])\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },\r
  {\r
    title: '\u7528\u6237\u540D',\r
    prop: 'name',\r
    sortable: true,\r
    filter: {\r
      slotName: 'filterSlot',\r
      placement: 'top',\r
      popperClass: 'test-filter-slot',\r
    },\r
  },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  {\r
    title: '\u7B80\u4ECB',\r
    prop: 'des',\r
    showTooltip: true,\r
    width: '40%',\r
    tooltipProps: { width: '200px', popperClass: 'test-tip' },\r
    filter: { slotName: 'filterSlot' },\r
  },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
const selectedItems = ref([])\r
\r
<\/script>\r
`},{default:n(()=>[on]),_:1},8,["demos"]),un,an,o(l,{fs:"",demos:_(r),"path-name":"simple-table/highlight","source-code":`<template>\r
  <hl-simple-table\r
    ref="tableRef"\r
    :cols="cols"\r
    :data="tableData"\r
    highlight-current-row\r
    @current-change="currentChange"\r
    @row-click="rowClick"\r
  />\r
  <br>\r
  <hl-button class="m-r-md" @click="setCurrent(tableData[0])">\u9009\u4E2D\u7B2C\u4E00\u884C</hl-button>\r
  <hl-button @click="setCurrent()">\u53D6\u6D88\u9009\u62E9</hl-button>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
\r
const tableRef = ref()\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u8303\u767D\u9732',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',\r
  },\r
  {\r
    id: 2,\r
    name: 'xxx',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u738B\u671D\u9633',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
])\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },\r
  {\r
    title: '\u7528\u6237\u540D',\r
    prop: 'name',\r
    sortable: true,\r
    filter: {\r
      slotName: 'filterSlot',\r
      placement: 'top',\r
      popperClass: 'test-filter-slot',\r
    },\r
  },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  {\r
    title: '\u7B80\u4ECB',\r
    prop: 'des',\r
    showTooltip: true,\r
    width: '40%',\r
    tooltipProps: { width: '200px', popperClass: 'test-tip' },\r
    filter: { slotName: 'filterSlot' },\r
  },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
const currentChange = (now, old) => {\r
  console.log(now, old)\r
}\r
const rowClick = () => {\r
  console.log('row-click')\r
}\r
const setCurrent = row => {\r
  tableRef.value.setCurrentRow(row)\r
}\r
\r
<\/script>\r
`},{default:n(()=>[sn]),_:1},8,["demos"]),dn,pn,o(l,{fs:"",demos:_(r),"path-name":"simple-table/expand","source-code":`<template>\r
  <hl-simple-table\r
    ref="tableRef"\r
    :cols="cols"\r
    :data="tableData"\r
    :expand-row-keys="['1index', '2nameExpand']"\r
  >\r
    <template #index="{ row }">\r
      <p>{{ row.org }} / {{ row.des }}</p>\r
    </template>\r
    <template #name="{ row }">\r
      <a href="javascript:;" @click="expand(row)">\u70B9\u6211\u5C55\u5F00</a> / {{ row.name }}\r
    </template>\r
    <template #nameExpand>\r
      <p>\u624B\u5DE5\u5C55\u5F00\u6570\u636E</p>\r
    </template>\r
    <template #des="{ row }">\r
      <p>{{ row.sex }} / {{ row.des }}</p>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableRef = ref()\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u8303\u767D\u9732',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',\r
  },\r
  {\r
    id: 2,\r
    name: 'xxx',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u738B\u671D\u9633',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', prop: 'id', expand: { slotName: 'index', hideLabel: true } },\r
  { title: '\u7528\u6237\u540D', prop: 'name', slotName: 'name', expand: { slotName: 'nameExpand' } },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  {\r
    title: '\u7B80\u4ECB',\r
    prop: 'des',\r
    showTooltip: true,\r
    width: '40%',\r
    expand: { slotName: 'des' },\r
    tooltipProps: { width: '200px', popperClass: 'test-tip' },\r
  },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
const expand = row => {\r
  tableRef.value.toggleExpand(row.id, 'nameExpand')\r
}\r
\r
<\/script>\r
`},{default:n(()=>[cn]),_:1},8,["demos"]),mn,hn,o(l,{fs:"",demos:_(r),"path-name":"simple-table/tree","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    :load="load"\r
    :expand-row-keys="['1']"\r
  >\r
    <template #tableIndex="{ row }">\r
      <span>{{ row.id }}</span>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
  <br><br>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    :load="load"\r
    :expand-row-keys="['1']"\r
    :first-column-index="1"\r
  >\r
    <template #tableIndex="{ row }">\r
      <span>{{ row.id }}</span>\r
    </template>\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
let count = 10000\r
const tableData = ref()\r
const cols = ref([\r
  { title: 'ID', slotName: 'tableIndex' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org' },\r
  { title: '\u7B80\u4ECB', prop: 'des', width: '220px', showTooltip: true },\r
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },\r
])\r
\r
const load = (row, node, resolve) => {\r
  window.setTimeout(() => {\r
    resolve([\r
      {\r
        id: count++,\r
        name: '\u738B\u4E8C\u9EBB\u5B50',\r
        sex: '\u7537',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
        hasChildren: true,\r
      },\r
      {\r
        id: count++,\r
        name: '\u738B\u4E8C\u9EBB\u5B50',\r
        sex: '\u7537',\r
        org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
        children: [\r
          {\r
            id: count++,\r
            name: '\u738B\u4E8C\u9EBB\u5B50',\r
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
window.setTimeout(() => {\r
  tableData.value = [\r
    {\r
      id: 1,\r
      name: '\u738B\u4E8C\u9EBB\u5B50',\r
      sex: '\u7537',\r
      org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
      des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
      children: [\r
        {\r
          id: 11,\r
          name: '\u738B\u4E8C\u9EBB\u5B5011',\r
          sex: '\u7537',\r
          org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
          children: [\r
            {\r
              id: 111,\r
              name: '\u738B\u4E8C\u9EBB\u5B50111',\r
              sex: '\u7537',\r
              org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
            },\r
            {\r
              id: 112,\r
              name: '\u738B\u4E8C\u9EBB\u5B50112',\r
              sex: '\u7537',\r
              org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
            },\r
          ],\r
        },\r
        {\r
          id: 12,\r
          name: '\u738B\u4E8C\u9EBB\u5B5012',\r
          sex: '\u7537',\r
          org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',\r
          children: [],\r
        },\r
      ],\r
    },\r
    {\r
      id: 2,\r
      name: '\u674E\u56DB',\r
      sex: '\u7537',\r
      org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
      des: '\u6765\u81EA\u4E2D\u56FD',\r
      hasChildren: true,\r
    },\r
    {\r
      id: 3,\r
      name: '\u5F20\u4E09',\r
      sex: '\u7537',\r
      org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
      des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',\r
    },\r
  ]\r
}, 100)\r
\r
<\/script>\r
`},{default:n(()=>[bn]),_:1},8,["demos"]),_n,En,o(l,{fs:"",demos:_(r),"path-name":"simple-table/span-method","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    border="bordered"\r
    :span-method="arraySpanMethod"\r
  />\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    border="bordered"\r
    class="m-t-md"\r
    :span-method="objectSpanMethod"\r
  />\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: '12987122',\r
    name: 'Tom',\r
    amount1: '234',\r
    amount2: '3.2',\r
    amount3: 10,\r
  },\r
  {\r
    id: '12987123',\r
    name: 'Tom',\r
    amount1: '165',\r
    amount2: '4.43',\r
    amount3: 12,\r
  },\r
  {\r
    id: '12987124',\r
    name: 'Tom',\r
    amount1: '324',\r
    amount2: '1.9',\r
    amount3: 9,\r
  },\r
  {\r
    id: '12987125',\r
    name: 'Tom',\r
    amount1: '621',\r
    amount2: '2.2',\r
    amount3: 17,\r
  },\r
  {\r
    id: '12987126',\r
    name: 'Tom',\r
    amount1: '539',\r
    amount2: '4.1',\r
    amount3: 15,\r
  },\r
])\r
const cols = ref([\r
  { title: 'id', prop: 'id' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: 'Amount1', prop: 'amount1' },\r
  { title: 'Amount2', prop: 'amount2' },\r
  { title: 'Amount3', prop: 'amount3' },\r
])\r
\r
const arraySpanMethod = ({ rowIndex, columnIndex }) => {\r
  if (rowIndex % 2 === 0) {\r
    if (columnIndex === 0) {\r
      return [1, 2]\r
    } else if (columnIndex === 1) {\r
      return [0, 0]\r
    }\r
  }\r
}\r
\r
const objectSpanMethod = ({ rowIndex, columnIndex }) => {\r
  if (columnIndex === 0) {\r
    if (rowIndex % 2 === 0) {\r
      return {\r
        rowspan: 2,\r
        colspan: 1,\r
      }\r
    } else {\r
      return {\r
        rowspan: 0,\r
        colspan: 0,\r
      }\r
    }\r
  }\r
}\r
\r
<\/script>\r
`},{default:n(()=>[gn]),_:1},8,["demos"]),xn,Dn,o(l,{fs:"",demos:_(r),"path-name":"simple-table/multi-header","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    border="bordered"\r
  >\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    date: '2016-05-03',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
  {\r
    date: '2016-05-02',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
  {\r
    date: '2016-05-04',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
  {\r
    date: '2016-05-01',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
  {\r
    date: '2016-05-08',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
  {\r
    date: '2016-05-06',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
  {\r
    date: '2016-05-07',\r
    name: 'Tom',\r
    state: 'California',\r
    city: 'Los Angeles',\r
    address: 'No. 189, Grove St, Los Angeles',\r
    zip: 'CA 90036',\r
  },\r
])\r
const cols = ref([\r
  { title: '\u65E5\u671F', prop: 'date' },\r
  {\r
    title: '\u914D\u9001\u4FE1\u606F',\r
    prop: 'delivery',\r
    children: [\r
      { title: '\u59D3\u540D', prop: 'name' },\r
      {\r
        title: '\u5730\u5740\u4FE1\u606F',\r
        prop: 'address',\r
        children: [\r
          { title: '\u7701/\u5E02', prop: 'state' },\r
          { title: '\u57CE\u5E02', prop: 'city' },\r
          { title: '\u5730\u5740', prop: 'address' },\r
          { title: '\u64CD\u4F5C', prop: 'zip', slotName: 'handle' },\r
        ],\r
      },\r
    ],\r
  },\r
])\r
\r
<\/script>\r
`},{default:n(()=>[fn]),_:1},8,["demos"]),Fn,vn,o(l,{fs:"",demos:_(r),"path-name":"simple-table/foot","source-code":`<template>\r
  <hl-simple-table\r
    :cols="cols"\r
    :data="tableData"\r
    border="bordered"\r
  >\r
    <template #foot>\r
      <tr>\r
        <td colspan="2"><strong>\u5408\u8BA1</strong></td>\r
        <td>\uFFE53232</td>\r
        <td>\uFFE51212.22</td>\r
        <td>\uFFE590.22</td>\r
      </tr>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([\r
  {\r
    id: '12987122',\r
    name: 'Tom',\r
    amount1: '234',\r
    amount2: '3.2',\r
    amount3: 10,\r
  },\r
  {\r
    id: '12987123',\r
    name: 'Tom',\r
    amount1: '165',\r
    amount2: '4.43',\r
    amount3: 12,\r
  },\r
  {\r
    id: '12987124',\r
    name: 'Tom',\r
    amount1: '324',\r
    amount2: '1.9',\r
    amount3: 9,\r
  },\r
  {\r
    id: '12987125',\r
    name: 'Tom',\r
    amount1: '621',\r
    amount2: '2.2',\r
    amount3: 17,\r
  },\r
  {\r
    id: '12987126',\r
    name: 'Tom',\r
    amount1: '539',\r
    amount2: '4.1',\r
    amount3: 15,\r
  },\r
])\r
const cols = ref([\r
  { title: 'id', prop: 'id' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: 'Amount1', prop: 'amount1' },\r
  { title: 'Amount2', prop: 'amount2' },\r
  { title: 'Amount3', prop: 'amount3' },\r
])\r
<\/script>\r
`},{default:n(()=>[Bn]),_:1},8,["demos"]),Cn,wn,o(l,{fs:"",demos:_(r),"path-name":"simple-table/hide-column","source-code":`<template>\r
  <hl-simple-table\r
    ref="simpleTableRef"\r
    :cols="cols"\r
    :data="tableData"\r
  >\r
    <template #handle>\r
      <a>\u4FEE\u6539</a>\r
    </template>\r
  </hl-simple-table>\r
  <br><br>\r
  <hl-button type="primary" @click="toggleColumn">\u9690\u85CF/\u663E\u793A\u7B2C3\u5217</hl-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
\r
const simpleTableRef = ref()\r
const tableData = ref([\r
  {\r
    id: 1,\r
    name: '\u8303\u767D\u9732',\r
    sex: '\u5973',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',\r
  },\r
  {\r
    id: 2,\r
    name: 'xxx',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',\r
  },\r
  {\r
    id: 3,\r
    name: '\u738B\u671D\u9633',\r
    sex: '\u7537',\r
    org: '\u4E2D\u56FD\u7CFB\u7EDF',\r
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',\r
  },\r
])\r
const cols = ref([\r
  { title: '#', prop: 'id' },\r
  { title: '\u7528\u6237\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u5355\u4F4D', prop: 'org', align: 'center' },\r
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
const toggleColumn = () => {\r
  simpleTableRef.value.toggleColumn(2)\r
}\r
\r
<\/script>\r
`},{default:n(()=>[yn]),_:1},8,["demos"]),An,o(l,{fs:"",demos:_(r),"path-name":"simple-table/empty","source-code":`<template>\r
  <hl-simple-table :cols="cols" border="border-x" :data="tableData" />\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref([])\r
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },\r
  { title: '\u59D3\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },\r
])\r
\r
<\/script>\r
`},null,8,["demos"]),In,o(l,{fs:"",demos:_(r),"path-name":"simple-table/unknown","source-code":`<template>\r
  <hl-simple-table :cols="cols" border="border-x" :data="tableData">\r
    <template #unknown>\r
      <p style="text-align: center;">\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~</p>\r
    </template>\r
  </hl-simple-table>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const tableData = ref(null)\r
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip\r
const cols = ref([\r
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },\r
  { title: '\u59D3\u540D', prop: 'name' },\r
  { title: '\u6027\u522B', prop: 'sex' },\r
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },\r
])\r
\r
<\/script>\r
`},{default:n(()=>[Nn]),_:1},8,["demos"]),Sn]),o(s)],64)}}};export{zn as default};
