import{p as E,R as d,H as i,L as m,F as D,P as l,X as a,S as t,T as v,Q as e,W as B,a1 as F,af as I,V as b,$ as T,B as z,ag as $,a as j,o as S}from"./vue.85e091e9.js";import{g as N}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";import"./hongluan-icons.6cddbf05.js";const O=t(v("")),U=e("a",null,"\u4FEE\u6539",-1),M=E({setup(x){const o=d(!1),n=d([]),c=d(!1),p=d([{id:1,name:"\u8303\u67CF\u5E90",sex:"\u5973",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1",otherInfo:{age:20}},{id:2,name:"\u59DC\u519B\u7ED3",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08",otherInfo:{age:22}},{id:3,name:"\u738B\u949E\u6D0B",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08",otherInfo:{age:28}}]),u=d([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"3em"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u5E74\u9F84",prop:"otherInfo.age"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",align:"center",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),s=()=>{o.value?(n.value.splice(0,n.value.length),n.value.push(...p.value.map(_=>_.id)),c.value=!1):n.value.splice(0,n.value.length)},r=()=>{o.value=n.value.length===p.value.length,n.value.length>0&&o.value==!1?c.value=!0:c.value=!1},h=(_,C,g)=>{console.log("rowClicked",_,C,g)},f=(_,C,g,A,w)=>{console.log("cellClicked",_,C,g,A,w)};return(_,C)=>{const g=i("hl-checkbox"),A=i("hl-simple-table");return m(),D(A,{cols:u.value,data:p.value,onRowClick:h,onCellClick:f},{firstCol:l(()=>[a(g,{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=w=>o.value=w),indeterminate:c.value,onChange:s},null,8,["modelValue","indeterminate"])]),tableIndex:l(({row:w})=>[a(g,{modelValue:n.value,"onUpdate:modelValue":C[1]||(C[1]=y=>n.value=y),label:w.id,onChange:y=>r(w.id)},{default:l(()=>[O]),_:2},1032,["modelValue","label","onChange"])]),handle:l(()=>[U]),_:1},8,["cols","data"])}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const L=e("a",null,"\u4FEE\u6539",-1),P=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=d([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),p=d("borderless");return(u,s)=>{const r=i("hl-option"),h=i("hl-select"),f=i("hl-simple-table");return m(),B(F,null,[a(h,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=_=>p.value=_),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(m(!0),B(F,null,I(c.value,_=>(m(),B(F,null,[_.divider?(m(),D(r,{key:_.value,divider:""})):(m(),D(r,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(f,{cols:n.value,data:o.value,border:p.value,padding:"0"},{tableIndex:l(({rowIndex:_})=>[e("span",null,v(_+1),1)]),handle:l(()=>[L]),_:1},8,["cols","data","border"])],64)}}});var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const W=E({setup(x){const o=d([]),n=d([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),D(u,{cols:n.value,border:"border-x",data:o.value},null,8,["cols","data"])}}});var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const G=["onClick"],H=e("p",null,"\u624B\u5DE5\u5C55\u5F00\u6570\u636E",-1),K=E({setup(x){const o=d(),n=d([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=d([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=u=>{o.value.toggleExpand(u.id,"nameExpand")};return(u,s)=>{const r=i("hl-simple-table");return m(),D(r,{ref_key:"tableRef",ref:o,cols:c.value,data:n.value,"expand-row-keys":["1index","2nameExpand"]},{index:l(({row:h})=>[e("p",null,v(h.org)+" / "+v(h.des),1)]),name:l(({row:h})=>[e("a",{href:"javascript:;",onClick:f=>p(h)},"\u70B9\u6211\u5C55\u5F00",8,G),t(" / "+v(h.name),1)]),nameExpand:l(()=>[H]),des:l(({row:h})=>[e("p",null,v(h.sex)+" / "+v(h.des),1)]),_:1},8,["cols","data"])}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const X={class:"p-sm"},q=t("\u6761\u4EF61"),Y=t("\u6761\u4EF62"),Z=t("\u6761\u4EF63"),ee=t("\u786E\u5B9A"),te=t(" \u81EA\u5B9A\u4E49\u5217 "),ne={class:"p-sm"},le=t("\u6761\u4EF61"),oe=t("\u6761\u4EF62"),ue=t("\u6761\u4EF63"),ae=t("\u786E\u5B9A"),de=E({setup(x){const o=d([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),n=d([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=d([]);return(p,u)=>{const s=i("hl-checkbox"),r=i("hl-checkbox-group"),h=i("hl-button");return m(),D(b(N),{cols:n.value,data:o.value},{filterSlot:l(({close:f})=>[e("div",X,[a(r,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=_=>c.value=_),dir:"vertical",gap:"var(--md)",block:""},{default:l(()=>[a(s,{label:"1"},{default:l(()=>[q]),_:1}),a(s,{label:"2"},{default:l(()=>[Y]),_:1}),a(s,{label:"3"},{default:l(()=>[Z]),_:1})]),_:1},8,["modelValue"]),a(h,{type:"primary",size:"sm",class:"m-t-md",onClick:f},{default:l(()=>[ee]),_:2},1032,["onClick"])])]),index:l(()=>[te,a(b(N).FilterIcon,{placement:"right"},{default:l(({close:f})=>[e("div",ne,[a(r,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=_=>c.value=_),dir:"vertical",gap:"var(--md)",block:""},{default:l(()=>[a(s,{label:"1"},{default:l(()=>[le]),_:1}),a(s,{label:"2"},{default:l(()=>[oe]),_:1}),a(s,{label:"3"},{default:l(()=>[ue]),_:1})]),_:1},8,["modelValue"]),a(h,{type:"primary",size:"sm",class:"m-t-md",onClick:f},{default:l(()=>[ae]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["cols","data"])}}});var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});const re=t("\u4FEE\u6539"),ie=E({setup(x){const o=d([{id:1,name:"\u8D39\u6587\u8F69",sex:"\u7537",org:"18933867329",des:"\u5B89\u5FBD\u7701\u516D\u5B89\u5E02\u4E1C\u6E2F\u9547\u6E2F\u4E0B\u9521\u6E2F\u4E1C\u8DEF8\u680B1204\u5BA4"},{id:2,name:"\u5218\u6797",sex:"\u7537",org:"18981484641",des:"\u5185\u8499\u9521\u6797\u6D69\u7279\u5E02\u5317\u516D\u95E8\u6751\u5357\u6CB3\u88578\u680B1204\u5BA4"},{id:3,name:"\u91D1\u73A5\u50B2",sex:"\u7537",org:"13000688905",des:"\u9ED1\u9F99\u6C5F\u7701\u5317\u5B89\u5E02\u4E09\u5C94\u8DEF\u6D66\u6C85\u5BBF\u820D131\u53F7"},{id:4,name:"\u738B\u6B66",sex:"\u7537",org:"13102220035",des:"\u6E56\u5317\u7701\u6D2A\u6E56\u5E02\u4E1C\u4E94\u6761\u8DEF\u6797\u673A\u5C0F\u533A948\u53F7"},{id:5,name:"\u535E\u5609\u6021",sex:"\u5973",org:"17022218210",des:"\u5C71\u4E1C\u7701\u62DB\u8FDC\u5E02\u5E76\u5DDE\u5317\u8DEF2\u67618\u53F7"},{id:6,name:"\u548C\u6587\u6770",sex:"\u7537",org:"13548097666",des:"\u9655\u897F\u7701\u5B89\u5EB7\u5E02\u91D1\u56FD\u91CC506\u53F7517\u623F"},{id:7,name:"\u6F58\u745E\u5802",sex:"\u7537",org:"13065726257",des:"\u5B89\u5FBD\u7701\u5929\u957F\u5E02\u91D1\u971E\u8857\u9053\u56FD\u9645\u5546\u4E1A\u4E2D\u5FC3121\u53F7"},{id:8,name:"\u5173\u723D",sex:"\u5973",org:"13570593023",des:"\u56DB\u5DDD\u7701\u7B80\u9633\u5E02\u524D\u8FDB\u8DEF506\u53F7517\u623F"}]),n=d([{title:"#",prop:"",slotName:"tableIndex",minWidth:"4em"},{title:"\u59D3\u540D",prop:"name",minWidth:"7em",fixed:"left"},{title:"\u6027\u522B",prop:"sex",minWidth:"6em"},{title:"\u624B\u673A\u53F7",prop:"org",minWidth:"10em"},{title:"\u4F4F\u5740",prop:"des",minWidth:"26em"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(c,p)=>{const u=i("hl-button"),s=i("hl-simple-table"),r=i("hl-scrollbar");return m(),D(r,{height:"200px"},{default:l(()=>[a(s,{cols:n.value,data:o.value,border:"border-x","fixed-header":""},{tableIndex:l(({rowIndex:h})=>[e("span",null,v(h+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[re]),_:1})]),_:1},8,["cols","data"])]),_:1})}}});var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});const ce={class:"table-scroll scroll-column"},me=t("\u4FEE\u6539"),he=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",no:"478343",level:"P8",years:10,field1:"\u6D4B\u8BD5\u5B57\u6BB51",field2:"\u6D4B\u8BD5\u5B57\u6BB52",field3:"\u6D4B\u8BD5\u5B57\u6BB53"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD",no:"238343",level:"P6",years:3,field1:"\u6D4B\u8BD5\u5B57\u6BB51",field2:"\u6D4B\u8BD5\u5B57\u6BB52",field3:"\u6D4B\u8BD5\u5B57\u6BB53"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",no:"178343",level:"P7",years:5,field1:"\u6D4B\u8BD5\u5B57\u6BB51",field2:"\u6D4B\u8BD5\u5B57\u6BB52",field3:"\u6D4B\u8BD5\u5B57\u6BB53"}]),n=d([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left",minWidth:"50px"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,minWidth:"150px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5DE5\u53F7",prop:"no",showTooltip:!0,minWidth:"120px",fixed:{position:"left",distance:"auto"}},{title:"\u804C\u7EA7",prop:"level"},{title:"\u53F8\u9F84",prop:"years"},{title:"\u5B57\u6BB51",prop:"field1"},{title:"\u5B57\u6BB52",prop:"field2"},{title:"\u53F3\u81EA\u52A8\u56FA\u5B9A",prop:"field3",fixed:{position:"right",distance:"auto"}},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,minWidth:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,minWidth:"150px",fixed:{position:"right",distance:"auto"}},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(c,p)=>{const u=i("hl-button"),s=i("hl-simple-table");return m(),B("div",ce,[a(s,{cols:n.value,data:o.value,border:"border-x"},{tableIndex:l(({rowIndex:r})=>[e("span",null,v(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[me]),_:1})]),_:1},8,["cols","data"])])}}});var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he});const be={class:"table-scroll",style:{height:"200px"}},ge=t("\u4FEE\u6539"),xe=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"},{id:4,name:"\u674E\u56DB2",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:5,name:"\u674E\u56DB3",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:6,name:"\u674E\u56DB4",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),s=i("hl-simple-table");return m(),B("div",be,[a(s,{cols:n.value,data:o.value,border:"bordered","fixed-header":""},{tableIndex:l(({rowIndex:r})=>[e("span",null,v(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[ge]),_:1})]),_:1},8,["cols","data"])])}}});var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const fe={class:"table-scroll",style:{height:"200px"}},De=t("\u4FEE\u6539"),ve=E({setup(x){let o=0;const n={name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},c=d(new Array(22).fill(0).map(s=>Object.assign(JSON.parse(JSON.stringify(n)),{id:o++}))),p=d([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"100px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center"}]),u=({rowIndex:s})=>s%5===0?{backgroundColor:"var(--bg-light)",zIndex:10,position:"sticky",top:"48px"}:{};return(s,r)=>{const h=i("hl-button"),f=i("hl-simple-table");return m(),B("div",fe,[a(f,{cols:p.value,data:c.value,border:"border-x","fixed-header":"","cell-style":u},{tableIndex:l(({rowIndex:_})=>[e("span",null,v(_),1)]),handle:l(()=>[a(h,{type:"link"},{default:l(()=>[De]),_:1})]),_:1},8,["cols","data"])])}}});var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve});const Fe=e("tr",null,[e("td",{colspan:"2"},[e("strong",null,"\u5408\u8BA1")]),e("td",null,"\uFFE53232"),e("td",null,"\uFFE51212.22"),e("td",null,"\uFFE590.22")],-1),Ce=E({setup(x){const o=d([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),n=d([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),D(u,{cols:n.value,data:o.value,border:"bordered"},{foot:l(()=>[Fe]),_:1},8,["cols","data"])}}});var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});const Ae=t("\u4FEE\u6539"),ye=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),s=i("hl-simple-table");return m(),D(s,{cols:n.value,data:o.value,hover:"","show-header":!1},{tableIndex:l(({rowIndex:r})=>[e("span",null,v(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[Ae]),_:1})]),_:1},8,["cols","data"])}}});var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const Ne=e("a",null,"\u4FEE\u6539",-1),Se=e("br",null,null,-1),ke=e("br",null,null,-1),Te=t("\u9690\u85CF/\u663E\u793A\u7B2C3\u5217"),ze=E({setup(x){const o=d(),n=d([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025"},{id:2,name:"xxx",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=d([{title:"#",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=()=>{o.value.toggleColumn(2)};return(u,s)=>{const r=i("hl-simple-table"),h=i("hl-button");return m(),B(F,null,[a(r,{ref_key:"simpleTableRef",ref:o,cols:c.value,data:n.value},{handle:l(()=>[Ne]),_:1},8,["cols","data"]),Se,ke,a(h,{type:"primary",onClick:p},{default:l(()=>[Te]),_:1})],64)}}});var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze});const je=e("br",null,null,-1),Oe=t("\u9009\u4E2D\u7B2C\u4E00\u884C"),Ue=t("\u53D6\u6D88\u9009\u62E9"),Me=E({setup(x){const o=d(),n=d([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=d([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=(r,h)=>{console.log(r,h)},u=()=>{console.log("row-click")},s=r=>{o.value.setCurrentRow(r)};return(r,h)=>{const f=i("hl-simple-table"),_=i("hl-button");return m(),B(F,null,[a(f,{ref_key:"tableRef",ref:o,cols:c.value,data:n.value,"highlight-current-row":"",onCurrentChange:p,onRowClick:u},null,8,["cols","data"]),je,a(_,{class:"m-r-md",onClick:h[0]||(h[0]=C=>s(n.value[0]))},{default:l(()=>[Oe]),_:1}),a(_,{onClick:h[1]||(h[1]=C=>s())},{default:l(()=>[Ue]),_:1})],64)}}});var Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me});const Le=t("\u4FEE\u6539"),Pe=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),s=i("hl-simple-table");return m(),D(s,{cols:n.value,data:o.value,"cross-hover":"",hover:""},{tableIndex:l(({rowIndex:r})=>[e("span",null,v(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[Le]),_:1})]),_:1},8,["cols","data"])}}});var Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pe});const We={class:"table-scroll",style:{height:"200px"}},Je=e("a",null,"\u4FEE\u6539",-1),Ge=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"},{id:4,name:"\u674E\u56DB2",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD",icon:"Archive"},{id:5,name:"\u674E\u56DB3",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD",icon:"Archive"},{id:6,name:"\u674E\u56DB4",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD",icon:"Archive"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-icon"),s=i("hl-simple-table");return m(),B("div",We,[a(s,{cols:n.value,data:o.value,"gap-y":"var(--xs)",list:"","fixed-header":""},{tableIndex:l(({row:r})=>[a(u,{type:"danger",fill:"",radius:""},{default:l(()=>[(m(),D(T("Two"+r.icon)))]),_:2},1024)]),handle:l(()=>[Je]),_:1},8,["cols","data"])])}}});var He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ge});const Ke=t("\u4FEE\u6539"),Qe=e("span",null,"\u6B63\u5728\u52A0\u8F7D...",-1),Xe=E({setup(x){let o=1;function n(){return o++}const c=[{id:n(),name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:n(),name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:n(),name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}],p=d(!1),u=d(JSON.parse(JSON.stringify(c))),s=d([{title:"#",slotName:"tableIndex",width:"8%"},{title:"\u7528\u6237\u540D",prop:"name",width:"15%"},{title:"\u6027\u522B",prop:"sex",width:"8%"},{title:"\u5355\u4F4D",prop:"org",width:"20%"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"10%"}]),r=z(()=>u.value.length<12),h=()=>{p.value||!r.value||(p.value=!0,window.setTimeout(()=>{const f=JSON.parse(JSON.stringify(c));f.forEach(_=>{_.id=n(),_.name=_.name+_.id}),u.value.push(...f),p.value=!1},300))};return(f,_)=>{const C=i("hl-button"),g=i("hl-spinner"),A=i("hl-group"),w=i("hl-simple-table"),y=i("hl-scrollbar");return m(),D(y,{style:{height:"200px"},onAtEnd:h},{default:l(()=>[a(w,{cols:s.value,data:u.value,border:"border-x","fixed-header":""},$({tableIndex:l(({rowIndex:k})=>[e("span",null,v(k+1),1)]),handle:l(()=>[a(C,{type:"link"},{default:l(()=>[Ke]),_:1})]),_:2},[b(r)?{name:"more",fn:l(()=>[p.value?(m(),D(A,{key:0,align:"items-middle",gap:"var(--xs)"},{default:l(()=>[a(g,{size:"sm"}),Qe]),_:1})):j("",!0)])}:void 0]),1032,["cols","data"])]),_:1})}}});var qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xe});const Ye=e("a",null,"\u4FEE\u6539",-1),Ze=E({setup(x){const o=d([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),n=d([{title:"\u65E5\u671F",prop:"date"},{title:"\u914D\u9001\u4FE1\u606F",prop:"delivery",children:[{title:"\u59D3\u540D",prop:"name"},{title:"\u5730\u5740\u4FE1\u606F",prop:"address",children:[{title:"\u7701/\u5E02",prop:"state"},{title:"\u57CE\u5E02",prop:"city"},{title:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"zip",slotName:"handle"}]}]}]);return(c,p)=>{const u=i("hl-simple-table");return m(),D(u,{cols:n.value,data:o.value,border:"bordered"},{handle:l(()=>[Ye]),_:1},8,["cols","data"])}}});var et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze});const tt=t("\u4FEE\u6539"),nt=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=d([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),p=d("0"),u=d("0");return(s,r)=>{const h=i("hl-option"),f=i("hl-select"),_=i("hl-button"),C=i("hl-simple-table");return m(),B(F,null,[a(f,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=g=>p.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145",class:"m-b-md"},{default:l(()=>[(m(!0),B(F,null,I(c.value,g=>(m(),B(F,null,[g.divider?(m(),D(h,{key:g.value,divider:""})):(m(),D(h,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(f,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=g=>u.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145",class:"m-l-md m-b-md"},{default:l(()=>[(m(!0),B(F,null,I(c.value,g=>(m(),B(F,null,[g.divider?(m(),D(h,{key:g.value,divider:""})):(m(),D(h,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(C,{cols:n.value,data:o.value,border:"border-x",padding:p.value,"cell-padding":u.value},{tableIndex:l(({rowIndex:g})=>[e("span",null,v(g+1),1)]),handle:l(()=>[a(_,{type:"link"},{default:l(()=>[tt]),_:1})]),_:1},8,["cols","data","padding","cell-padding"])],64)}}});var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const ot=e("a",null,"\u4FEE\u6539",-1),ut=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex",width:"4em"},{title:"\u7528\u6237\u540D",prop:"name",width:"8em"},{title:"\u6027\u522B",prop:"sex",width:"4em"},{title:"\u5355\u4F4D",prop:"org",width:""},{title:"\u7B80\u4ECB",prop:"des",width:""},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"6em"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),D(u,{cols:n.value,data:o.value,border:"bordered",resize:""},{tableIndex:l(({rowIndex:s})=>[e("span",null,v(s+1),1)]),handle:l(()=>[ot]),_:1},8,["cols","data"])}}});var at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut});const dt=e("a",null,"\u4FEE\u6539",-1),st=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=d([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),p=d("md");return(u,s)=>{const r=i("hl-option"),h=i("hl-select"),f=i("hl-simple-table");return m(),B(F,null,[a(h,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=_=>p.value=_),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(m(!0),B(F,null,I(c.value,_=>(m(),B(F,null,[_.divider?(m(),D(r,{key:_.value,divider:""})):(m(),D(r,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(f,{cols:n.value,data:o.value,size:p.value,class:"borderless-last"},{tableIndex:l(({rowIndex:_})=>[e("span",null,v(_+1),1)]),handle:l(()=>[dt]),_:1},8,["cols","data","size"])],64)}}});var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});const it=t(" \u81EA\u5B9A\u4E49\u5217 "),pt=E({setup(x){const o=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],n=d(JSON.parse(JSON.stringify(o))),c=d([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]),p=(u,s)=>{console.log("soring...",u,s),s?n.value.sort((r,h)=>{const f=String(r[u]).localeCompare(String(h[u]));return s==="ascending"?f:f*-1}):n.value=JSON.parse(JSON.stringify(o))};return(u,s)=>(m(),D(b(N),{cols:c.value,data:n.value,onSortChange:p},{index:l(()=>[it,a(b(N).SortableIcon,{sortable:"",onSortChange:s[0]||(s[0]=r=>p("id",r))})]),_:1},8,["cols","data"]))}});var ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const mt=E({setup(x){const o=d([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),n=d([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]),c=({rowIndex:u,columnIndex:s})=>{if(u%2===0){if(s===0)return[1,2];if(s===1)return[0,0]}},p=({rowIndex:u,columnIndex:s})=>{if(s===0)return u%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}};return(u,s)=>{const r=i("hl-simple-table");return m(),B(F,null,[a(r,{cols:n.value,data:o.value,border:"bordered","span-method":c},null,8,["cols","data"]),a(r,{cols:n.value,data:o.value,border:"bordered",class:"m-t-md","span-method":p},null,8,["cols","data"])],64)}}});var ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const _t=t("\u4FEE\u6539"),bt=E({setup(x){const o=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),s=i("hl-simple-table");return m(),D(s,{cols:n.value,data:o.value,stripe:""},{tableIndex:l(({rowIndex:r})=>[e("span",null,v(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[_t]),_:1})]),_:1},8,["cols","data"])}}});var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const xt=e("a",null,"\u4FEE\u6539",-1),Et=e("br",null,null,-1),ft=e("br",null,null,-1),Dt=e("a",null,"\u4FEE\u6539",-1),vt=E({setup(x){let o=1e4;const n=d(),c=d([{title:"ID",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",width:"220px",showTooltip:!0},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=(u,s,r)=>{window.setTimeout(()=>{r([{id:o++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\u54E6\uFF01",hasChildren:!0},{id:o++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:o++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]}])},3e3)};return window.setTimeout(()=>{n.value=[{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\u554A\uFF01",children:[{id:11,name:"\u738B\u4E8C\u9EBB\u5B5011",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:111,name:"\u738B\u4E8C\u9EBB\u5B50111",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:112,name:"\u738B\u4E8C\u9EBB\u5B50112",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]},{id:12,name:"\u738B\u4E8C\u9EBB\u5B5012",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[]}]},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD",hasChildren:!0},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u67D0\u4E2A\u516C\u53F8",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]},100),(u,s)=>{const r=i("hl-simple-table");return m(),B(F,null,[a(r,{cols:c.value,data:n.value,load:p,"expand-row-keys":["1"]},{tableIndex:l(({row:h})=>[e("span",null,v(h.id),1)]),handle:l(()=>[xt]),_:1},8,["cols","data"]),Et,ft,a(r,{cols:c.value,data:n.value,load:p,"expand-row-keys":["1"],"first-column-index":1},{tableIndex:l(({row:h})=>[e("span",null,v(h.id),1)]),handle:l(()=>[Dt]),_:1},8,["cols","data"])],64)}}});var Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt});const Ft=e("p",{style:{"text-align":"center"}},"\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~",-1),Ct=E({setup(x){const o=d(null),n=d([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),D(u,{cols:n.value,border:"border-x",data:o.value},{unknown:l(()=>[Ft]),_:1},8,["cols","data"])}}});var wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ct});const At=S('<h1>SimpleTable \u7B80\u5355\u8868\u683C</h1><p>SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><h2 id="ji-chu-yang-shi"><a class="header-anchor" href="#ji-chu-yang-shi"></a> \u57FA\u7840\u6837\u5F0F</h2><p>\u6587\u672C\u6EA2\u51FA\u8BBE\u7F6E\u53C2\u8003</p>',5),yt=e("h2",{id:"bian-kuang-yang-shi"},[e("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),t(" \u8FB9\u6846\u6837\u5F0F")],-1),It=e("p",null,[e("code",null,"border"),t(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F")],-1),Nt=e("h2",{id:"jian-ju-she-zhi"},[e("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),t(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),St=e("p",null,[e("code",null,"padding"),t(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u5C3A\u5BF8\uFF0C \u540C\u65F6"),e("code",null,"cell-padding"),t(" \u53EF\u8BBE\u7F6ETD\u7684\u95F4\u8DDD\u5C3A\u5BF8")],-1),kt=e("h2",{id:"xuan-ting-yang-shi-hover"},[e("a",{class:"header-anchor",href:"#xuan-ting-yang-shi-hover"}),t(" \u60AC\u505C\u6837\u5F0F Hover")],-1),Tt=e("p",null,[e("code",null,"hover"),t(" \u5C5E\u6027\u53EF\u4EE5\u5728\u60AC\u505C\u5728\u67D0\u4E00\u884C\u65F6\uFF0C\u5448\u73B0\u80CC\u666F\u8272\u3002")],-1),zt=e("h2",{id:"tiao-wen-yang-shi"},[e("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),t(" \u6761\u7EB9\u6837\u5F0F")],-1),$t=e("p",null,[e("code",null,"stripe"),t("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),jt=e("div",null,[e("p",null,[t("stripe \u8FD8\u63A5\u6536 "),e("code",null,"even"),t(" \u6216\u8005 "),e("code",null,"odd"),t(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),e("code",null,"odd"),t(" \u5947\u6570")])],-1),Ot=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),t(" \u5C3A\u5BF8\u4FEE\u9970")],-1),Ut=e("p",null,[e("code",null,"size"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u7684\u5C3A\u5BF8\u3002")],-1),Mt=e("h2",{id:"tuo-zhuai-gai-bian-lie-kuan"},[e("a",{class:"header-anchor",href:"#tuo-zhuai-gai-bian-lie-kuan"}),t(" \u62D6\u62FD\u6539\u53D8\u5217\u5BBD")],-1),Rt=e("p",null,[e("code",null,"resize"),t(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),e("code",null,"true"),t("\uFF0C\u53EF\u4EE5\u62D6\u62FD\u8868\u683C\u5934\u7684\u5217\uFF0C\u4ECE\u800C\u6539\u53D8\u5217\u5BBD\u3002")],-1),Lt=e("h2",{id:"lie-biao-yang-shi"},[e("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),t(" \u5217\u8868\u6837\u5F0F")],-1),Pt=e("p",null,[e("code",null,"list"),t(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),Vt=e("div",null,[e("p",null,[t("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="var(--xs)"')])],-1),Wt=e("h2",{id:"gu-ding-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),t(" \u56FA\u5B9A\u8868\u5934")],-1),Jt=e("p",null,[t("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),e("code",null,"fixed-header"),t(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),Gt=S('<h2 id="gu-ding-lie"><a class="header-anchor" href="#gu-ding-lie"></a> \u56FA\u5B9A\u5217</h2><ul><li>\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 <code>fixed</code> \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 <code>left</code> <code>right</code> \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 <code>fixed: &#39;left&#39;</code>\u3002</li><li><code>fixed</code> \u5C5E\u6027\u8FD8\u53EF\u4EE5\u4E3A <code>object</code> \u7C7B\u578B\uFF0C\u8BE6\u7EC6\u63A7\u5236 <code>fixed</code> \u7684\u8DDD\u79BB\u3002\u5728 <code>fixed</code> \u4E3A <code>object</code> \u7C7B\u578B\u65F6\uFF0C<code>distance</code> \u5B57\u6BB5\u53EF\u4EE5\u8BBE\u7F6E\u6210 <code>auto</code>\uFF0C\u8FD9\u6837\u5C06\u4F1A\u6839\u636E\u5217\u5BBD\u81EA\u52A8\u8BA1\u7B97\u5E94\u56FA\u5B9A\u7684\u8DDD\u79BB\u3002</li><li>\u5EFA\u8BAE\u4F7F\u7528\u65F6\uFF0C<code>distance</code> \u8981\u4E48\u90FD\u8BBE\u7F6E\u5177\u4F53\u6570\u503C\uFF0C\u8981\u4E48\u90FD\u8BBE\u7F6E\u6210<code>auto</code>\uFF0C\u6DF7\u7528\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BA1\u7B97\u9519\u8BEF\u3002</li></ul>',2),Ht=e("h2",{id:"gu-ding-xing"},[e("a",{class:"header-anchor",href:"#gu-ding-xing"}),t(" \u56FA\u5B9A\u884C")],-1),Kt=e("p",null,[t("\u901A\u8FC7 "),e("code",null,"cellStyle"),t(" \u5C5E\u6027\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u56FA\u5B9A\u884C\u6548\u679C\u3002")],-1),Qt=e("h2",{id:"gu-ding-tou-he-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-tou-he-lie"}),t(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),Xt=e("p",null,"\u8868\u5934\u548C\u5217\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u56FA\u5B9A\u3002",-1),qt=e("h2",{id:"xia-la-jia-zai-geng-duo"},[e("a",{class:"header-anchor",href:"#xia-la-jia-zai-geng-duo"}),t(" \u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A")],-1),Yt=e("p",null,"\u914D\u5408 Scrollbar \u7EC4\u4EF6\u53EF\u5B9E\u73B0\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A\u3002",-1),Zt=e("h2",{id:"yi-chu-biao-tou"},[e("a",{class:"header-anchor",href:"#yi-chu-biao-tou"}),t(" \u79FB\u9664\u8868\u5934")],-1),en=e("p",null,[e("code",null,"show-header"),t(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664\u8868\u5934\uFF0C\u8BA9\u5176\u5C55\u793A\u4E3A\u4E00\u4E2A\u7EAF\u5217\u8868\u6837\u5F0F\u3002")],-1),tn=e("h2",{id:"pai-xu"},[e("a",{class:"header-anchor",href:"#pai-xu"}),t(" \u6392\u5E8F")],-1),nn=e("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u5728\u975Esetup\u8BED\u6CD5\u4E0B\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF1Bsetup\u8BED\u6CD5\u8BF7\u53C2\u8003\u5982\u4E0B\u6E90\u7801\u3002",-1),ln=e("div",null,[e("p",null,[t("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),e("code",null,"true / false / 'descending' / 'ascending'"),t(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),on=e("h2",{id:"shai-xuan"},[e("a",{class:"header-anchor",href:"#shai-xuan"}),t(" \u7B5B\u9009")],-1),un=e("p",null,"\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u5728\u975Esetup\u8BED\u6CD5\u4E0B\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA FilterIcon \u7EC4\u4EF6\uFF1Bsetup\u8BED\u6CD5\u8BF7\u53C2\u8003\u5982\u4E0B\u6E90\u7801\u3002",-1),an=e("div",null,[e("p",null,[t("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6E "),e("code",null,"filter"),t(" \u5BF9\u8C61\uFF0C\u63D0\u4F9B "),e("code",null,"slotName"),t("\uFF08\u5FC5\u9009\uFF09\u3001"),e("code",null,"placement"),t("\uFF08\u53C2\u8003Popover\u6587\u6863\uFF09\u3001"),e("code",null,"popperClass"),t(" \u5C5E\u6027\u3002slot\u4E2D\u63D0\u4F9B "),e("code",null,"close"),t(" \u65B9\u6CD5\u7528\u6765\u624B\u5DE5\u5173\u95ED\u5F39\u51FA\u6846\u3002")])],-1),dn=e("h2",{id:"gao-liang-xing"},[e("a",{class:"header-anchor",href:"#gao-liang-xing"}),t(" \u9AD8\u4EAE\u884C")],-1),sn=e("p",null,"\u9009\u62E9\u5355\u884C\u6570\u636E\u65F6\u4F7F\u7528\u8272\u5757\u8868\u793A\u3002",-1),rn=e("div",null,[e("p",null,[t("SimpleTable \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5355\u9009\u7684\u652F\u6301\uFF0C \u53EA\u9700\u8981\u914D\u7F6E"),e("code",null,"highlight-current-row"),t("\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5355\u9009\u3002 \u4E4B\u540E\u7531"),e("code",null,"current-change"),t("\u4E8B\u4EF6\u6765\u7BA1\u7406\u9009\u4E2D\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4F1A\u4F20\u5165 currentRow\uFF0ColdCurrentRow\u3002")])],-1),pn=e("h2",{id:"zhan-kai-xing"},[e("a",{class:"header-anchor",href:"#zhan-kai-xing"}),t(" \u5C55\u5F00\u884C")],-1),cn=e("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 SimpleTable \u5C55\u5F00\u884C\u529F\u80FD\u3002\u53EF\u4EE5\u5B9A\u4E49\u591A\u5217\u540C\u65F6\u5C55\u5F00\u3002",-1),mn=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E expand \u5BF9\u8C61 \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\u3002expand\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A"),e("code",null,"slotName"),t("\uFF0C"),e("code",null,"hideLabel"),t("\uFF0ChideLabel\u9ED8\u8BA4\u4E3Afalse")])],-1),hn=e("h2",{id:"shu-xing-shu-ju-yu-lan-jia-zai"},[e("a",{class:"header-anchor",href:"#shu-xing-shu-ju-yu-lan-jia-zai"}),t(" \u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D")],-1),_n=e("p",null,[t("\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B children \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6307\u5B9A row-key\u3002\u652F\u6301\u5B50\u8282\u70B9\u6570\u636E\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684\u52A0\u8F7D\u51FD\u6570 load \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684hasChildren\u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 children\u4E0EhasChildren\u90FD\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tree-props"),t(" \u914D\u7F6E\u3002"),e("code",null,"first-column-index"),t(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5C55\u5F00\u884C\u4E3A\u6240\u4F5C\u7528\u7684\u5217\u3002")],-1),bn=e("div",null,[e("p",null,[t("\u5F53children\u5B57\u6BB5\u6709\u6570\u7EC4\u503C\u65F6\uFF0C\u5C06\u4F1A\u5FFD\u7565hasChildren\u5B57\u6BB5\u3002"),e("em",null,[e("strong",null,[t("\u9700\u8981\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u4E00\u5B9A\u8981\u8C28\u614E\u8BBE\u7F6E"),e("code",null,"default-expand-all"),t("\u5C5E\u6027\u4E3Atrue\u503C")])])])],-1),gn=e("h2",{id:"he-bing-xing-huo-lie"},[e("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),t(" \u5408\u5E76\u884C\u6216\u5217")],-1),xn=e("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),En=e("div",null,[e("p",null,"\u901A\u8FC7\u7ED9 table \u4F20\u5165span-method\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C row\u3001\u5F53\u524D\u5217 column\u3001\u5F53\u524D\u884C\u53F7 rowIndex\u3001\u5F53\u524D\u5217\u53F7 columnIndex \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 rowspan\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 colspan\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A rowspan \u548C colspan \u7684\u5BF9\u8C61\u3002")],-1),fn=e("h2",{id:"duo-ji-biao-tou"},[e("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),t(" \u591A\u7EA7\u8868\u5934")],-1),Dn=e("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),vn=e("div",null,[e("p",null,[t("\u901A\u8FC7"),e("code",null,"cols"),t(" \u7684 "),e("code",null,"children"),t(" \u5C5E\u6027\u5D4C\u5957\u5B9E\u73B0\u591A\u7EA7\u8868\u5934")])],-1),Bn=e("h2",{id:"biao-wei-he-ji-xing"},[e("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),t(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),Fn=e("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),Cn=e("div",null,[e("p",null,[t("\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 "),e("code",null,"foot"),t(" slot\u5B9E\u73B0")])],-1),wn=e("h2",{id:"yin-cang-lie"},[e("a",{class:"header-anchor",href:"#yin-cang-lie"}),t(" \u9690\u85CF\u5217")],-1),An=e("p",null,[e("code",null,"toggleColumn"),t(" \u65B9\u6CD5\u652F\u6301\u5BF9\u5217\u7684\u9690\u85CF\u6216\u8005\u663E\u793A\u64CD\u4F5C\u3002")],-1),yn=e("div",null,[e("p",null,"\u6682\u4E0D\u652F\u6301\u5BF9\u591A\u7EA7\u8868\u5934\u4EE5\u53CA\u5B58\u5728\u5408\u5E76\u5355\u5143\u683C\u7684\u8868\u683C\u8FDB\u884C\u64CD\u4F5C")],-1),In=e("h2",{id:"kong-shu-ju"},[e("a",{class:"header-anchor",href:"#kong-shu-ju"}),t(" \u7A7A\u6570\u636E")],-1),Nn=e("h2",{id:"wei-zhi-shu-ju"},[e("a",{class:"header-anchor",href:"#wei-zhi-shu-ju"}),t(" \u672A\u77E5\u6570\u636E")],-1),Sn=e("div",null,[e("p",null,[t("\u5728\u4F20\u9012\u7684\u6570\u636E\u4E3A "),e("code",null,"null"),t(" \u6216\u8005 "),e("code",null,"undefined"),t(" \u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 "),e("code",null,"unknown"),t(" slot")])],-1),kn=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>cell-padding</td><td>\u8BBE\u7F6ETd\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u884C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>cross-hover</td><td>\u8868\u683C\u5217\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>auto-height</td><td>\u4F7FTh\u548CTd\u7684\u9AD8\u5EA6\u53D8\u4E3Aauto</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>fixed-footer</td><td>\u56FA\u5B9A\u8868\u5C3E</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>resize</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u62FD\u8868\u5934\u6539\u53D8\u5217\u5BBD</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scroll-container</td><td>\u8BBE\u7F6E\u56FA\u5B9A\u5217\u65F6\uFF0C\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u4E0D\u662F\u8868\u683C\u7684\u76F4\u63A5\u7236\u5143\u7D20\u6216\u8005Scrollbar\u7EC4\u4EF6\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u5C5E\u6027\uFF0C\u7528\u4EE5\u652F\u6301\u6EDA\u52A8\u65F6\u56FA\u5B9A\u5217\u9634\u5F71\u6548\u679C</td><td>string / HTMLElement</td><td>-</td><td>-</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>expand-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\uFF0C\u540C\u65F6\u9002\u7528\u884C\u5C55\u5F00\u4E0E\u6811\u5C55\u5F00\u3002\u884C\u5C55\u5F00\u65F6\u7528\u884CrowKey+slotName\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\uFF1B\u6811\u5C55\u5F00\u65F6\u4F7F\u7528rowKey\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\u3002<em><strong>\u6570\u7EC4\u503C\u4E00\u5B9A\u662F\u5B57\u7B26\u4E32\u3002</strong></em></td><td>array</td><td>-</td><td>-</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 SimpleTable \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>first-column-index</td><td>\u6811\u5F62\u5C55\u5F00\u64CD\u4F5C\u4F5C\u7528\u7684\u5217</td><td>number</td><td>-</td><td>0</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>-</td><td><code>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>function(row, treeNode, resolve)</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columnKey</td><td>\u5217key\uFF0C\u5982\u679C\u52A8\u6001\u5207\u6362\u8868\u683C\u5217\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u503C\u3002\u5426\u5219\u5217\u5BBD\u4F1A\u8BA1\u7B97\u9519\u8BEF</td><td>string</td><td></td><td></td></tr><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>minWidth</td><td>\u6700\u5C0F\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>maxWidth</td><td>\u6700\u5927\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string / object</td><td>left / right / { position: string; distance: string; }</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, rowIndex, columnIndex)</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr><tr><td>tree-expand</td><td>\u6811\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, row</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleExpand</td><td>\u5C55\u5F00/\u6298\u53E0\u884C\u3002\u7531\u4E8E\u6BCF\u884C\u53EF\u80FD\u6709\u591A\u4E2A\u5C55\u5F00\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u9700\u8981\u5C55\u5F00\u7684slotName</td><td>rowKey, slotName</td></tr><tr><td>toggleExpandTree</td><td>\u5C55\u5F00\u6811</td><td>row</td></tr><tr><td>toggleColumn</td><td>\u663E\u793A/\u9690\u85CF\u5217</td><td>index, show\uFF08show\u53EF\u9009\uFF09</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C \u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001</td><td>row</td></tr><tr><td>clearTooltip</td><td>\u9690\u85CFtooltip</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>unknown</td><td>\u8868\u683C\u6570\u636E\u4E3Anull\u6216\u8005undefined\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>more</td><td>\u4E0B\u62C9\u52A0\u8F7D\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr></tbody></table>',10),Un={setup(x){const o="simple-table",n={"../../../examples/simple-table/basic.vue":R,"../../../examples/simple-table/border.vue":V,"../../../examples/simple-table/empty.vue":J,"../../../examples/simple-table/expand.vue":Q,"../../../examples/simple-table/filter.vue":se,"../../../examples/simple-table/fixed-all.vue":pe,"../../../examples/simple-table/fixed-column.vue":_e,"../../../examples/simple-table/fixed-header.vue":Ee,"../../../examples/simple-table/fixed-row.vue":Be,"../../../examples/simple-table/foot.vue":we,"../../../examples/simple-table/header.vue":Ie,"../../../examples/simple-table/hide-column.vue":$e,"../../../examples/simple-table/highlight.vue":Re,"../../../examples/simple-table/hover.vue":Ve,"../../../examples/simple-table/list.vue":He,"../../../examples/simple-table/load-more.vue":qe,"../../../examples/simple-table/multi-header.vue":et,"../../../examples/simple-table/padding.vue":lt,"../../../examples/simple-table/resize.vue":at,"../../../examples/simple-table/size.vue":rt,"../../../examples/simple-table/sortable.vue":ct,"../../../examples/simple-table/span-method.vue":ht,"../../../examples/simple-table/stripe.vue":gt,"../../../examples/simple-table/tree.vue":Bt,"../../../examples/simple-table/unknown.vue":wt};return(c,p)=>{const u=i("demo-block"),s=i("right-nav");return m(),B(F,null,[e("section",null,[At,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/basic","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol>
      <hl-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <hl-checkbox v-model="selectedRows" :label="row.id" @change="selectRow(row.id)">{{ '' }}</hl-checkbox>
    </template>

    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const selectedAll = ref(false)
const selectedRows = ref([])
const isIndeterminate = ref(false)

const tableData = ref([
  {
    id: 1,
    name: '\u8303\u67CF\u5E90',
    sex: '\u5973',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1',
    otherInfo: {
      age: 20,
    },
  },
  {
    id: 2,
    name: '\u59DC\u519B\u7ED3',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
    otherInfo: {
      age: 22,
    },
  },
  {
    id: 3,
    name: '\u738B\u949E\u6D0B',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
    otherInfo: {
      age: 28,
    },
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u5E74\u9F84', prop: 'otherInfo.age' },
  { title: '\u5355\u4F4D', prop: 'org', align: 'center' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    align: 'center',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const selectAll = () => {
  if (selectedAll.value) {
    selectedRows.value.splice(0, selectedRows.value.length)
    selectedRows.value.push(...tableData.value.map(d => d.id))
    isIndeterminate.value = false
  } else {
    selectedRows.value.splice(0, selectedRows.value.length)
  }
}
const selectRow = () => {
  selectedAll.value = selectedRows.value.length === tableData.value.length
  if (selectedRows.value.length > 0 && selectedAll.value == false) {
    isIndeterminate.value = true
  } else {
    isIndeterminate.value = false
  }
}
const rowClicked = (row, rowIndex, event) => {
  console.log('rowClicked', row, rowIndex, event)
}
const cellClicked = (row, col, rowIndex, colIndex, event) => {
  console.log('cellClicked', row, col, rowIndex, colIndex, event)
}

<\/script>
`},null,8,["demos"]),yt,It,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/border","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table :cols="cols" :data="tableData" :border="value" padding="0">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
const options = ref([
  {
    value: 'borderless',
    label: 'borderless',
  },
  {
    value: 'border-x',
    label: 'border-x',
  },
  {
    value: 'border-y',
    label: 'border-y',
  },
  {
    value: 'bordered',
    label: 'bordered',
  },
])
const value = ref('borderless')

<\/script>
`},null,8,["demos"]),Nt,St,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/padding","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-select v-model="value2" clearable placeholder="\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145" class="m-l-md m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="border-x"
    :padding="value"
    :cell-padding="value2"
  >
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--sm)',
    label: 'sm',
  },
  {
    value: 'var(--md)',
    label: 'md',
  },
  {
    value: 'var(--lg)',
    label: 'lg',
  },
  {
    value: 'var(--xl)',
    label: 'xl',
  },
  {
    value: 'var(--xxl)',
    label: 'xxl',
  },
])
const value = ref('0')
const value2 = ref('0')

<\/script>
`},null,8,["demos"]),kt,Tt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/hover","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" cross-hover hover>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},null,8,["demos"]),zt,$t,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/stripe","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" stripe>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},{default:l(()=>[jt]),_:1},8,["demos"]),Ot,Ut,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/size","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :size="value"
    class="borderless-last"
  >
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
const options = ref([
  {
    value: 'sm',
    label: 'sm',
  },
  {
    value: 'md',
    label: 'md',
  },
  {
    value: 'lg',
    label: 'lg',
  },
])
const value = ref('md')

<\/script>
`},null,8,["demos"]),Mt,Rt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/resize","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" border="bordered" resize>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex', width:'4em' },
  { title: '\u7528\u6237\u540D', prop: 'name', width:'8em' },
  { title: '\u6027\u522B', prop: 'sex', width:'4em' },
  { title: '\u5355\u4F4D', prop: 'org', width:'' },
  { title: '\u7B80\u4ECB', prop: 'des', width:'' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width:'6em' },
])

<\/script>
`},null,8,["demos"]),Lt,Pt,a(u,{fs:"",dark:"",demos:b(n),"component-id":o,"path-name":"simple-table/list","source-code":`<template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      gap-y="var(--xs)"
      list
      fixed-header
    >
      <template #tableIndex="{ row }">
        <hl-icon
          type="danger"
          fill
          radius
        >
          <component
            :is="'Two' + row.icon"
          />
        </hl-icon>
      </template>
      <template #handle>
        <a>\u4FEE\u6539</a>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
    icon: 'Briefcase',
  },
  {
    id: 2,
    name: '\u674E\u56DB',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD',
    icon: 'ChartPie',
  },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    icon: 'Archive',
  },
  { id: 4, name: '\u674E\u56DB2', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD', icon: 'Archive' },
  { id: 5, name: '\u674E\u56DB3', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD', icon: 'Archive' },
  { id: 6, name: '\u674E\u56DB4', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD', icon: 'Archive' },

])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},{default:l(()=>[Vt]),_:1},8,["demos"]),Wt,Jt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/fixed-header","source-code":`<template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="bordered"
      fixed-header
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
  { id: 4, name: '\u674E\u56DB2', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  { id: 5, name: '\u674E\u56DB3', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  { id: 6, name: '\u674E\u56DB4', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},null,8,["demos"]),Gt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/fixed-column","source-code":`<template>
  <div class="table-scroll scroll-column">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x">
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
    no: '478343',
    level: 'P8',
    years: 10,
    field1: '\u6D4B\u8BD5\u5B57\u6BB51',
    field2: '\u6D4B\u8BD5\u5B57\u6BB52',
    field3: '\u6D4B\u8BD5\u5B57\u6BB53',
  },
  {
    id: 2,
    name: '\u674E\u56DB',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD',
    no: '238343',
    level: 'P6',
    years: 3,
    field1: '\u6D4B\u8BD5\u5B57\u6BB51',
    field2: '\u6D4B\u8BD5\u5B57\u6BB52',
    field3: '\u6D4B\u8BD5\u5B57\u6BB53',
  },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    no: '178343',
    level: 'P7',
    years: 5,
    field1: '\u6D4B\u8BD5\u5B57\u6BB51',
    field2: '\u6D4B\u8BD5\u5B57\u6BB52',
    field3: '\u6D4B\u8BD5\u5B57\u6BB53',
  },
])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex', fixed: 'left', minWidth: '50px' },
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, minWidth: '150px' },
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },
  { title: '\u5DE5\u53F7', prop: 'no', showTooltip: true, minWidth: '120px', fixed: { position: 'left', distance: 'auto' } },
  { title: '\u804C\u7EA7', prop: 'level' },
  { title: '\u53F8\u9F84', prop: 'years' },
  { title: '\u5B57\u6BB51', prop: 'field1' },
  { title: '\u5B57\u6BB52', prop: 'field2' },
  { title: '\u53F3\u81EA\u52A8\u56FA\u5B9A', prop: 'field3', fixed: { position: 'right', distance: 'auto' } },
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, minWidth: '400px' },
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, minWidth: '150px', fixed: { position: 'right', distance: 'auto' } },
  {
    title: '\u64CD\u4F5C',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
])

<\/script>
`},null,8,["demos"]),Ht,Kt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/fixed-row","source-code":`<template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
      :cell-style="cellStyle"
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let idx = 0
const row = {
  name: '\u738B\u4E8C\u9EBB\u5B50',
  sex: '\u7537',
  org: '\u67D0\u4E2A\u516C\u53F8',
  des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
}
const tableData = ref(new Array(22).fill(0).map(_ => Object.assign(JSON.parse(JSON.stringify(row)), { id: idx++ })))
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '100px' },
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '150px' },
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },
  { title: '\u64CD\u4F5C', prop: '', slotName: 'handle', align: 'center' },
])

// \u56FA\u5B9A5\u500D\u6570\u7684\u884C
const cellStyle = ({ rowIndex }) => {
  return rowIndex % 5 === 0 ? {
    backgroundColor: 'var(--bg-light)',
    zIndex: 10,
    position: 'sticky',
    top: \`48px\`, // 48\u4E3A\u8868\u683C\u5934\u7684\u9AD8\u5EA6
  } : {}
}
<\/script>
`},null,8,["demos"]),Qt,Xt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/fixed-all","source-code":`<template>
  <hl-scrollbar height="200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  { id: 1, name: '\u8D39\u6587\u8F69', sex: '\u7537', org: '18933867329', des: '\u5B89\u5FBD\u7701\u516D\u5B89\u5E02\u4E1C\u6E2F\u9547\u6E2F\u4E0B\u9521\u6E2F\u4E1C\u8DEF8\u680B1204\u5BA4' },
  { id: 2, name: '\u5218\u6797', sex: '\u7537', org: '18981484641', des: '\u5185\u8499\u9521\u6797\u6D69\u7279\u5E02\u5317\u516D\u95E8\u6751\u5357\u6CB3\u88578\u680B1204\u5BA4' },
  { id: 3, name: '\u91D1\u73A5\u50B2', sex: '\u7537', org: '13000688905', des: '\u9ED1\u9F99\u6C5F\u7701\u5317\u5B89\u5E02\u4E09\u5C94\u8DEF\u6D66\u6C85\u5BBF\u820D131\u53F7' },
  { id: 4, name: '\u738B\u6B66', sex: '\u7537', org: '13102220035', des: '\u6E56\u5317\u7701\u6D2A\u6E56\u5E02\u4E1C\u4E94\u6761\u8DEF\u6797\u673A\u5C0F\u533A948\u53F7' },
  { id: 5, name: '\u535E\u5609\u6021', sex: '\u5973', org: '17022218210', des: '\u5C71\u4E1C\u7701\u62DB\u8FDC\u5E02\u5E76\u5DDE\u5317\u8DEF2\u67618\u53F7' },
  { id: 6, name: '\u548C\u6587\u6770', sex: '\u7537', org: '13548097666', des: '\u9655\u897F\u7701\u5B89\u5EB7\u5E02\u91D1\u56FD\u91CC506\u53F7517\u623F' },
  { id: 7, name: '\u6F58\u745E\u5802', sex: '\u7537', org: '13065726257', des: '\u5B89\u5FBD\u7701\u5929\u957F\u5E02\u91D1\u971E\u8857\u9053\u56FD\u9645\u5546\u4E1A\u4E2D\u5FC3121\u53F7' },
  { id: 8, name: '\u5173\u723D', sex: '\u5973', org: '13570593023', des: '\u56DB\u5DDD\u7701\u7B80\u9633\u5E02\u524D\u8FDB\u8DEF506\u53F7517\u623F' },
])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '#', prop: '', slotName: 'tableIndex', minWidth: '4em' },
  { title: '\u59D3\u540D', prop: 'name', minWidth: '7em', fixed: 'left' },
  { title: '\u6027\u522B', prop: 'sex', minWidth: '6em' },
  { title: '\u624B\u673A\u53F7', prop: 'org', minWidth: '10em' },
  { title: '\u4F4F\u5740', prop: 'des', minWidth: '26em' },
  {
    title: '\u64CD\u4F5C',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
])

<\/script>
`},null,8,["demos"]),qt,Yt,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/load-more","source-code":`<template>
  <hl-scrollbar style="height: 200px" @at-end="loadMore">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
      <template v-if="hadMoreData" #more>
        <template v-if="loading">
          <hl-group align="items-middle" gap="var(--xs)">
            <hl-spinner size="sm" />
            <span>\u6B63\u5728\u52A0\u8F7D...</span>
          </hl-group>
        </template>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

let count = 1
function id() {
  return count++
}
const data = [
  {
    id: id(),
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: id(), name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: id(),
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
]

const loading = ref(false)
const tableData = ref(JSON.parse(JSON.stringify(data)))
const cols = ref([
  { title: '#', slotName: 'tableIndex', width: '8%' },
  { title: '\u7528\u6237\u540D', prop: 'name', width: '15%' },
  { title: '\u6027\u522B', prop: 'sex', width: '8%' },
  { title: '\u5355\u4F4D', prop: 'org', width: '20%' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width: '10%' },
])

const hadMoreData = computed(() => tableData.value.length < 12)
const loadMore = () => {
  if (loading.value || !hadMoreData.value) return
  loading.value = true
  window.setTimeout(() => {
    const moreData = JSON.parse(JSON.stringify(data))
    moreData.forEach(d => {
      d.id = id()
      d.name = d.name + d.id
    })
    tableData.value.push(...moreData)
    loading.value = false
  }, 300)
}

<\/script>
`},null,8,["demos"]),Zt,en,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/header","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" hover :show-header="false">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u67D0\u4E2A\u516C\u53F8', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
<\/script>
`},null,8,["demos"]),tn,nn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/sortable","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    @sort-change="sortChange"
  >
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <HlSimpleTable.SortableIcon sortable @sort-change="val => sortChange('id', val)" />
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HlSimpleTable } from 'hongluan-ui'

const defaultData = [
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
]
const tableData = ref(JSON.parse(JSON.stringify(defaultData)))
const cols = ref([
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
  { title: '\u7528\u6237\u540D', prop: 'name', sortable: true },
  { title: '\u6027\u522B', prop: 'sex', sortable: false },
  { title: '\u5355\u4F4D', prop: 'org', sortable: 'descending' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    sortable: 'ascending',
  },
])

const sortChange = (prop, sort) => { // \u4EC5\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5B9E\u9645\u9879\u76EE\u9700\u8981\u901A\u8FC7\u8C03\u53D6\u540E\u53F0API\u5B9E\u73B0
  console.log('soring...', prop, sort)
  if (sort) {
    tableData.value.sort((d1, d2) => {
      const result = String(d1[prop]).localeCompare(String(d2[prop]))
      return sort === 'ascending' ? result : result * -1
    })
  } else {
    tableData.value = JSON.parse(JSON.stringify(defaultData))
  }
}

<\/script>
`},{default:l(()=>[ln]),_:1},8,["demos"]),on,un,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/filter","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
  >
    <template #filterSlot="{ close }">
      <div class="p-sm">
        <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>
          <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>
          <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>
          <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>
        </hl-checkbox-group>
        <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>
      </div>
    </template>
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <HlSimpleTable.FilterIcon placement="right">
        <template #default="{ close }">
          <div class="p-sm">
            <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>
              <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>
              <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>
              <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>
            </hl-checkbox-group>
            <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>
          </div>
        </template>
      </HlSimpleTable.FilterIcon>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HlSimpleTable } from 'hongluan-ui'

const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
  {
    title: '\u7528\u6237\u540D',
    prop: 'name',
    sortable: true,
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const selectedItems = ref([])

<\/script>
`},{default:l(()=>[an]),_:1},8,["demos"]),dn,sn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/highlight","source-code":`<template>
  <hl-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    highlight-current-row
    @current-change="currentChange"
    @row-click="rowClick"
  />
  <br>
  <hl-button class="m-r-md" @click="setCurrent(tableData[0])">\u9009\u4E2D\u7B2C\u4E00\u884C</hl-button>
  <hl-button @click="setCurrent()">\u53D6\u6D88\u9009\u62E9</hl-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'


const tableRef = ref()
const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
  {
    title: '\u7528\u6237\u540D',
    prop: 'name',
    sortable: true,
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const currentChange = (now, old) => {
  console.log(now, old)
}
const rowClick = () => {
  console.log('row-click')
}
const setCurrent = row => {
  tableRef.value.setCurrentRow(row)
}

<\/script>
`},{default:l(()=>[rn]),_:1},8,["demos"]),pn,cn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/expand","source-code":`<template>
  <hl-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    :expand-row-keys="['1index', '2nameExpand']"
  >
    <template #index="{ row }">
      <p>{{ row.org }} / {{ row.des }}</p>
    </template>
    <template #name="{ row }">
      <a href="javascript:;" @click="expand(row)">\u70B9\u6211\u5C55\u5F00</a> / {{ row.name }}
    </template>
    <template #nameExpand>
      <p>\u624B\u5DE5\u5C55\u5F00\u6570\u636E</p>
    </template>
    <template #des="{ row }">
      <p>{{ row.sex }} / {{ row.des }}</p>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableRef = ref()
const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '#', prop: 'id', expand: { slotName: 'index', hideLabel: true } },
  { title: '\u7528\u6237\u540D', prop: 'name', slotName: 'name', expand: { slotName: 'nameExpand' } },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    expand: { slotName: 'des' },
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const expand = row => {
  tableRef.value.toggleExpand(row.id, 'nameExpand')
}

<\/script>
`},{default:l(()=>[mn]),_:1},8,["demos"]),hn,_n,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/tree","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :load="load"
    :expand-row-keys="['1']"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
  <br><br>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :load="load"
    :expand-row-keys="['1']"
    :first-column-index="1"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let count = 10000
const tableData = ref()
const cols = ref([
  { title: 'ID', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des', width: '220px', showTooltip: true },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const load = (row, node, resolve) => {
  window.setTimeout(() => {
    resolve([
      {
        id: count++,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u67D0\u4E2A\u516C\u53F8',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\u54E6\uFF01',
        hasChildren: true,
      },
      {
        id: count++,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u67D0\u4E2A\u516C\u53F8',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        children: [
          {
            id: count++,
            name: '\u738B\u4E8C\u9EBB\u5B50',
            sex: '\u7537',
            org: '\u67D0\u4E2A\u516C\u53F8',
            des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          },
        ],
      },
    ])
  }, 3000)
}

window.setTimeout(() => {
  tableData.value = [
    {
      id: 1,
      name: '\u738B\u4E8C\u9EBB\u5B50',
      sex: '\u7537',
      org: '\u67D0\u4E2A\u516C\u53F8',
      des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\u554A\uFF01',
      children: [
        {
          id: 11,
          name: '\u738B\u4E8C\u9EBB\u5B5011',
          sex: '\u7537',
          org: '\u67D0\u4E2A\u516C\u53F8',
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          children: [
            {
              id: 111,
              name: '\u738B\u4E8C\u9EBB\u5B50111',
              sex: '\u7537',
              org: '\u67D0\u4E2A\u516C\u53F8',
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
            },
            {
              id: 112,
              name: '\u738B\u4E8C\u9EBB\u5B50112',
              sex: '\u7537',
              org: '\u67D0\u4E2A\u516C\u53F8',
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
            },
          ],
        },
        {
          id: 12,
          name: '\u738B\u4E8C\u9EBB\u5B5012',
          sex: '\u7537',
          org: '\u67D0\u4E2A\u516C\u53F8',
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          children: [],
        },
      ],
    },
    {
      id: 2,
      name: '\u674E\u56DB',
      sex: '\u7537',
      org: '\u67D0\u4E2A\u516C\u53F8',
      des: '\u6765\u81EA\u4E2D\u56FD',
      hasChildren: true,
    },
    {
      id: 3,
      name: '\u5F20\u4E09',
      sex: '\u7537',
      org: '\u67D0\u4E2A\u516C\u53F8',
      des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    },
  ]
}, 100)

<\/script>
`},{default:l(()=>[bn]),_:1},8,["demos"]),gn,xn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/span-method","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
    :span-method="arraySpanMethod"
  />
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
    class="m-t-md"
    :span-method="objectSpanMethod"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
])

const arraySpanMethod = ({ rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({ rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}

<\/script>
`},{default:l(()=>[En]),_:1},8,["demos"]),fn,Dn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/multi-header","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
  >
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])
const cols = ref([
  { title: '\u65E5\u671F', prop: 'date' },
  {
    title: '\u914D\u9001\u4FE1\u606F',
    prop: 'delivery',
    children: [
      { title: '\u59D3\u540D', prop: 'name' },
      {
        title: '\u5730\u5740\u4FE1\u606F',
        prop: 'address',
        children: [
          { title: '\u7701/\u5E02', prop: 'state' },
          { title: '\u57CE\u5E02', prop: 'city' },
          { title: '\u5730\u5740', prop: 'address' },
          { title: '\u64CD\u4F5C', prop: 'zip', slotName: 'handle' },
        ],
      },
    ],
  },
])

<\/script>
`},{default:l(()=>[vn]),_:1},8,["demos"]),Bn,Fn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/foot","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
  >
    <template #foot>
      <tr>
        <td colspan="2"><strong>\u5408\u8BA1</strong></td>
        <td>\uFFE53232</td>
        <td>\uFFE51212.22</td>
        <td>\uFFE590.22</td>
      </tr>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
])
<\/script>
`},{default:l(()=>[Cn]),_:1},8,["demos"]),wn,An,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/hide-column","source-code":`<template>
  <hl-simple-table
    ref="simpleTableRef"
    :cols="cols"
    :data="tableData"
  >
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
  <br><br>
  <hl-button type="primary" @click="toggleColumn">\u9690\u85CF/\u663E\u793A\u7B2C3\u5217</hl-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const simpleTableRef = ref()
const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u67D0\u4E2A\u516C\u53F8',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '#', prop: 'id' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org', align: 'center' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const toggleColumn = () => {
  simpleTableRef.value.toggleColumn(2)
}

<\/script>
`},{default:l(()=>[yn]),_:1},8,["demos"]),In,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/empty","source-code":`<template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },
])

<\/script>
`},null,8,["demos"]),Nn,a(u,{fs:"",demos:b(n),"component-id":o,"path-name":"simple-table/unknown","source-code":`<template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData">
    <template #unknown>
      <p style="text-align: center;">\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~</p>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref(null)
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },
])

<\/script>
`},{default:l(()=>[Sn]),_:1},8,["demos"]),kn]),a(s)],64)}}};export{Un as default};
