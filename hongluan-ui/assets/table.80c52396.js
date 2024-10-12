import{p as f,H as i,L as _,F as A,P as d,X as t,Y as G,W as w,V as h,a1 as T,Q as e,T as C,S as n,R as v,B as D,a7 as z,J as F,o as L}from"./vue.85e091e9.js";import{E as k}from"./hongluan-icons.6cddbf05.js";import{b as $}from"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";const E=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles.No. 189, Grove St, Los Angeles.No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,style:{width:"100%"}},{default:d(()=>[t(s,{prop:"date",label:"Date"}),t(s,{prop:"name",label:"Name"}),t(s,{prop:"address",label:"Address",width:"280","show-overflow-tooltip":""})]),_:1})}}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const O=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,border:"",style:{width:"100%"}},{default:d(()=>[t(s,{prop:"date",label:"Date",width:"180"}),t(s,{prop:"name",label:"Name",width:"180"}),t(s,{prop:"address",label:"Address"})]),_:1})}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const U=f({setup(g){const o=G({checkStrictly:!1}),r=s=>![1,31].includes(s.id),m=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}];return(s,l)=>{const a=i("hl-radio-button"),c=i("hl-radio-group"),u=i("hl-table-column"),p=i("hl-table");return _(),w(T,null,[t(c,{modelValue:h(o).checkStrictly,"onUpdate:modelValue":l[0]||(l[0]=b=>h(o).checkStrictly=b)},{default:d(()=>[t(a,{value:!0,label:"true"}),t(a,{value:!1,label:"false"})]),_:1},8,["modelValue"]),t(p,{data:m,"tree-props":h(o),"row-key":"id","default-expand-all":""},{default:d(()=>[t(u,{type:"selection",width:"55",selectable:r}),t(u,{prop:"date",label:"Date"}),t(u,{prop:"name",label:"Name"}),t(u,{prop:"address",label:"Address"})]),_:1},8,["tree-props"])],64)}}});var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const R={style:{display:"flex","align-items":"center"}},H={style:{"margin-left":"10px"}},B=n(" Edit "),V=n(" Delete "),J=f({setup(g){const o=(s,l)=>{console.log(s,l)},r=(s,l)=>{console.log(s,l)},m=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(s,l)=>{const a=i("hl-icon"),c=i("hl-table-column"),u=i("hl-tag"),p=i("hl-popover"),b=i("hl-button"),y=i("hl-table");return _(),A(y,{data:m,style:{width:"100%"}},{default:d(()=>[t(c,{label:"Date",width:"180"},{default:d(S=>[e("div",R,[t(a,null,{default:d(()=>[t(h(k))]),_:1}),e("span",H,C(S.row.date),1)])]),_:1}),t(c,{label:"Name",width:"180"},{default:d(S=>[t(p,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:d(()=>[e("div",null,"name: "+C(S.row.name),1),e("div",null,"address: "+C(S.row.address),1)]),reference:d(()=>[t(u,null,{default:d(()=>[n(C(S.row.name),1)]),_:2},1024)]),_:2},1024)]),_:1}),t(c,{label:"Operations"},{default:d(S=>[t(b,{size:"sm",class:"m-r-sm",onClick:N=>o(S.$index,S.row)},{default:d(()=>[B]),_:2},1032,["onClick"]),t(b,{size:"sm",type:"danger",onClick:N=>r(S.$index,S.row)},{default:d(()=>[V]),_:2},1032,["onClick"])]),_:1})]),_:1})}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const Z=n(" Edit "),Y=n(" Delete "),K=f({setup(g){const o=v(""),r=D(()=>l.filter(a=>!o.value||a.name.toLowerCase().includes(o.value.toLowerCase()))),m=(a,c)=>{console.log(a,c)},s=(a,c)=>{console.log(a,c)},l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"John",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Morgan",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Jessy",address:"No. 189, Grove St, Los Angeles"}];return(a,c)=>{const u=i("hl-table-column"),p=i("hl-input"),b=i("hl-button"),y=i("hl-table");return _(),A(y,{data:h(r),style:{width:"100%"}},{default:d(()=>[t(u,{label:"Date",prop:"date"}),t(u,{label:"Name",prop:"name"}),t(u,{align:"right"},{header:d(()=>[t(p,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=S=>o.value=S),size:"sm",placeholder:"Type to search"},null,8,["modelValue"])]),default:d(S=>[t(b,{size:"sm",class:"m-r-sm",onClick:N=>m(S.$index,S.row)},{default:d(()=>[Z]),_:2},1032,["onClick"]),t(b,{size:"sm",type:"danger",onClick:N=>s(S.$index,S.row)},{default:d(()=>[Y]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}}});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const Q=n(" switch parent border: "),X=n(" switch child border: "),q={m:"4"},ee={m:"t-0 b-2"},te={m:"t-0 b-2"},ne={m:"t-0 b-2"},ae={m:"t-0 b-2"},oe=e("h3",null,"Family",-1),le=f({setup(g){const o=v(!1),r=v(!1),m=[{date:"2016-05-03",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-02",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-04",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-01",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-08",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-06",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-07",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]}];return(s,l)=>{const a=i("hl-switch"),c=i("hl-table-column"),u=i("hl-table");return _(),w(T,null,[Q,t(a,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=p=>o.value=p)},null,8,["modelValue"]),X,t(a,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=p=>r.value=p)},null,8,["modelValue"]),t(u,{data:m,border:o.value,style:{width:"100%"}},{default:d(()=>[t(c,{type:"expand"},{default:d(p=>[e("div",q,[e("p",ee,"State: "+C(p.row.state),1),e("p",te,"City: "+C(p.row.city),1),e("p",ne,"Address: "+C(p.row.address),1),e("p",ae,"Zip: "+C(p.row.zip),1),oe,t(u,{data:p.row.family,border:r.value},{default:d(()=>[t(c,{label:"Name",prop:"name"}),t(c,{label:"State",prop:"state"}),t(c,{label:"City",prop:"city"}),t(c,{label:"Address",prop:"address"}),t(c,{label:"Zip",prop:"zip"})]),_:2},1032,["data","border"])])]),_:1}),t(c,{label:"Date",prop:"date"}),t(c,{label:"Name",prop:"name"})]),_:1},8,["border"])],64)}}});var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const se=n("reset date filter"),re=n("reset all filters"),ie=f({setup(g){const o=v(),r=()=>{o.value.clearFilter(["date"])},m=()=>{o.value.clearFilter()},s=(u,p)=>u.address,l=(u,p)=>p.tag===u,a=(u,p,b)=>{const y=b.property;return p[y]===u},c=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}];return(u,p)=>{const b=i("hl-button"),y=i("hl-table-column"),S=i("hl-tag"),N=i("hl-table");return _(),w(T,null,[t(b,{class:"m-r-sm",onClick:r},{default:d(()=>[se]),_:1}),t(b,{onClick:m},{default:d(()=>[re]),_:1}),t(N,{ref_key:"tableRef",ref:o,"row-key":"date",data:c,style:{width:"100%"}},{default:d(()=>[t(y,{prop:"date",label:"Date",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":a}),t(y,{prop:"name",label:"Name",width:"180"}),t(y,{prop:"address",label:"Address",formatter:s}),t(y,{prop:"tag",label:"Tag",width:"100",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],"filter-method":l,"filter-placement":"bottom-end"},{default:d(x=>[t(S,{type:x.row.tag==="Home"?"":"success","disable-transitions":""},{default:d(()=>[n(C(x.row.tag),1)]),_:2},1032,["type"])]),_:1})]),_:1},512)],64)}}});var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});const me=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,style:{width:"100%"},height:"250"},{default:d(()=>[t(s,{fixed:"",prop:"date",label:"Date",width:"150"}),t(s,{prop:"name",label:"Name",width:"120"}),t(s,{prop:"state",label:"State",width:"120"}),t(s,{prop:"city",label:"City",width:"320"}),t(s,{prop:"address",label:"Address",width:"600"}),t(s,{prop:"zip",label:"Zip",width:"120"})]),_:1})}}});var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const pe=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,style:{width:"100%"},height:"250"},{default:d(()=>[t(s,{prop:"date",label:"Date",width:"150"}),t(s,{prop:"name",label:"Name",width:"150"}),t(s,{prop:"zip",label:"Zip",width:"150"}),t(s,{label:"Address Info",fixed:"right"},{default:d(()=>[t(s,{prop:"state",label:"State",width:"100"}),t(s,{prop:"city",label:"City",width:"120"}),t(s,{prop:"address",label:"Address",width:"250"})]),_:1})]),_:1})}}});var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});const be=n(" Detail "),_e=n("Edit"),ge=f({setup(g){const o=()=>{console.log("click")},r=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(m,s)=>{const l=i("hl-table-column"),a=i("hl-link"),c=i("hl-table");return _(),A(c,{data:r,style:{width:"100%"}},{default:d(()=>[t(l,{fixed:"",prop:"date",label:"Date",width:"150"}),t(l,{prop:"name",label:"Name",width:"120"}),t(l,{prop:"state",label:"State",width:"120"}),t(l,{prop:"city",label:"City",width:"120"}),t(l,{prop:"address",label:"Address",width:"600"}),t(l,{prop:"zip",label:"Zip",width:"120"}),t(l,{fixed:"right",label:"Operations",width:"120"},{default:d(()=>[t(a,{type:"primary",size:"sm",class:"m-r-sm",onClick:o},{default:d(()=>[be]),_:1}),t(a,{type:"primary",size:"sm"},{default:d(()=>[_e]),_:1})]),_:1})]),_:1})}}});var fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge});const Se=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,height:"250",style:{width:"100%"}},{default:d(()=>[t(s,{prop:"date",label:"Date",width:"180"}),t(s,{prop:"name",label:"Name",width:"180"}),t(s,{prop:"address",label:"Address"})]),_:1})}}});var ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se});const Ae={class:"m-t-md"},ve=n("Select second row"),we=n("Clear selection"),Ce=f({setup(g){const o=v(),r=v(),m=a=>{r.value.setCurrentRow(a)},s=a=>{o.value=a},l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(a,c)=>{const u=i("hl-table-column"),p=i("hl-table"),b=i("hl-button");return _(),w(T,null,[t(p,{ref_key:"singleTableRef",ref:r,data:l,"highlight-current-row":"",style:{width:"100%"},onCurrentChange:s},{default:d(()=>[t(u,{type:"index",width:"50"}),t(u,{property:"date",label:"Date",width:"120"}),t(u,{property:"name",label:"Name",width:"120"}),t(u,{property:"address",label:"Address"})]),_:1},512),e("div",Ae,[t(b,{class:"m-r-sm",onClick:c[0]||(c[0]=y=>m(l[1]))},{default:d(()=>[ve]),_:1}),t(b,{onClick:c[1]||(c[1]=y=>m())},{default:d(()=>[we]),_:1})])],64)}}});var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});const Ne=f({setup(g){const o=m=>m*2,r=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(m,s)=>{const l=i("hl-table-column"),a=i("hl-table");return _(),A(a,{data:r,style:{width:"100%"}},{default:d(()=>[t(l,{type:"index",index:o}),t(l,{prop:"date",label:"Date",width:"180"}),t(l,{prop:"name",label:"Name",width:"180"}),t(l,{prop:"address",label:"Address"})]),_:1})}}});var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ne});const Le=f({setup(g){const o=[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,list:""},{default:d(()=>[t(s,{prop:"date",label:"\u65E5\u671F",width:"150"}),t(s,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(s,{prop:"address","show-overflow-tooltip":"",label:"\u5730\u5740"})]),_:1})}}});var Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le});const De=n(" Remove "),ze=n(" Add Item "),Fe=f({setup(g){const o=new Date,r=v([{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),m=l=>{r.value.splice(l,1)},s=()=>{o.setDate(o.getDate()+1),r.value.push({date:$(o).format("YYYY-MM-DD"),name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})};return(l,a)=>{const c=i("hl-table-column"),u=i("hl-link"),p=i("hl-table"),b=i("hl-button");return _(),w(T,null,[t(p,{data:r.value,style:{width:"100%"},"max-height":"250"},{default:d(()=>[t(c,{fixed:"",prop:"date",label:"Date",width:"150"}),t(c,{prop:"name",label:"Name",width:"120"}),t(c,{prop:"state",label:"State",width:"120"}),t(c,{prop:"city",label:"City",width:"120"}),t(c,{prop:"address",label:"Address",width:"600"}),t(c,{prop:"zip",label:"Zip",width:"120"}),t(c,{fixed:"right",label:"Operations",width:"120"},{default:d(y=>[t(u,{type:"primary",size:"",onClick:z(S=>m(y.$index),["prevent"])},{default:d(()=>[De]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(b,{class:"m-t-sm",style:{width:"100%"},onClick:s},{default:d(()=>[ze]),_:1})],64)}}});var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fe});const $e=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,style:{width:"100%"}},{default:d(()=>[t(s,{prop:"date",label:"Date",width:"150"}),t(s,{label:"Delivery Info"},{default:d(()=>[t(s,{prop:"name",label:"Name",width:"120"}),t(s,{label:"Address Info"},{default:d(()=>[t(s,{prop:"state",label:"State",width:"120"}),t(s,{prop:"city",label:"City",width:"120"}),t(s,{prop:"address",label:"Address"}),t(s,{prop:"zip",label:"Zip",width:"120"})]),_:1})]),_:1})]),_:1})}}});var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const je=f({setup(g){const o=v([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),r=({rowIndex:m})=>m===1?"warning-row":m===3?"success-row":"";return(m,s)=>{const l=i("hl-table-column"),a=i("hl-table");return _(),A(a,{data:o.value,style:{width:"100%"},"row-class-name":r},{default:d(()=>[t(l,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(l,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(l,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])}}});var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:je});const Ie={class:"m-t-md"},Ue=n(" Toggle selection status of second and third rows "),Me=n("Clear selection"),Re=f({setup(g){const o=v(),r=v([]),m=a=>{a?a.forEach(c=>{o.value.toggleRowSelection(c,void 0)}):o.value.clearSelection()},s=a=>{r.value=a},l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(a,c)=>{const u=i("hl-table-column"),p=i("hl-table"),b=i("hl-button");return _(),w(T,null,[t(p,{ref_key:"multipleTableRef",ref:o,data:l,style:{width:"100%"},onSelectionChange:s},{default:d(()=>[t(u,{type:"selection",width:"55"}),t(u,{label:"Date",width:"120"},{default:d(y=>[n(C(y.row.date),1)]),_:1}),t(u,{property:"name",label:"Name",width:"120"}),t(u,{property:"address",label:"Address","show-overflow-tooltip":""})]),_:1},512),e("div",Ie,[t(b,{class:"m-r-sm",onClick:c[0]||(c[0]=y=>m([l[1],l[2]]))},{default:d(()=>[Ue]),_:1}),t(b,{onClick:c[1]||(c[1]=y=>m())},{default:d(()=>[Me]),_:1})])],64)}}});var He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re});const Be=f({setup(g){const o=(m,s)=>m.address,r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(m,s)=>{const l=i("hl-table-column"),a=i("hl-table");return _(),A(a,{data:r,"default-sort":{prop:"date",order:"descending"},style:{width:"100%"}},{default:d(()=>[t(l,{prop:"date",label:"Date",sortable:"",width:"180"}),t(l,{prop:"name",label:"Name",width:"180"}),t(l,{prop:"address",label:"Address",formatter:o})]),_:1})}}});var Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be});const Je=f({setup(g){const o=({row:s,column:l,rowIndex:a,columnIndex:c})=>{if(a%2===0){if(c===0)return[1,2];if(c===1)return[0,0]}},r=({row:s,column:l,rowIndex:a,columnIndex:c})=>{if(c===0)return a%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},m=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(s,l)=>{const a=i("hl-table-column"),c=i("hl-table");return _(),w("div",null,[t(c,{data:m,"span-method":o,border:"",style:{width:"100%"}},{default:d(()=>[t(a,{prop:"id",label:"ID",width:"180"}),t(a,{prop:"name",label:"Name"}),t(a,{prop:"amount1",sortable:"",label:"Amount 1"}),t(a,{prop:"amount2",sortable:"",label:"Amount 2"}),t(a,{prop:"amount3",sortable:"",label:"Amount 3"})]),_:1}),t(c,{data:m,"span-method":r,border:"",style:{width:"100%","margin-top":"20px"}},{default:d(()=>[t(a,{prop:"id",label:"ID",width:"180"}),t(a,{prop:"name",label:"Name"}),t(a,{prop:"amount1",label:"Amount 1"}),t(a,{prop:"amount2",label:"Amount 2"}),t(a,{prop:"amount3",label:"Amount 3"})]),_:1})])}}});var Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je});const Ze=f({setup(g){const o=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(r,m)=>{const s=i("hl-table-column"),l=i("hl-table");return _(),A(l,{data:o,stripe:"",style:{width:"100%"}},{default:d(()=>[t(s,{prop:"date",label:"Date",width:"180"}),t(s,{prop:"name",label:"Name",width:"180"}),t(s,{prop:"address",label:"Address"})]),_:1})}}});var Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze});const Ke=f({setup(g){const o=m=>{const{columns:s,data:l}=m,a=[];return s.forEach((c,u)=>{if(u===0){a[u]=F("div",{style:{textDecoration:"underline"}},["Total Cost"]);return}const p=l.map(b=>Number(b[c.property]));p.every(b=>Number.isNaN(b))?a[u]="N/A":a[u]=`$ ${p.reduce((b,y)=>{const S=Number(y);return Number.isNaN(S)?b:b+y},0)}`}),a},r=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(m,s)=>{const l=i("hl-table-column"),a=i("hl-table");return _(),w(T,null,[t(a,{data:r,border:"","show-summary":"",style:{width:"100%"}},{default:d(()=>[t(l,{prop:"id",label:"ID",width:"180"}),t(l,{prop:"name",label:"Name"}),t(l,{prop:"amount1",sortable:"",label:"Amount 1"}),t(l,{prop:"amount2",sortable:"",label:"Amount 2"}),t(l,{prop:"amount3",sortable:"",label:"Amount 3"})]),_:1}),t(a,{data:r,border:"",height:"200","summary-method":o,"show-summary":"",style:{width:"100%","margin-top":"20px"}},{default:d(()=>[t(l,{prop:"id",label:"ID",width:"180"}),t(l,{prop:"name",label:"Name"}),t(l,{prop:"amount1",label:"Cost 1 ($)"}),t(l,{prop:"amount2",label:"Cost 2 ($)"}),t(l,{prop:"amount3",label:"Cost 3 ($)"})]),_:1})],64)}}});var We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ke});const Qe=f({setup(g){const o=v("fixed"),r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(m,s)=>{const l=i("hl-radio"),a=i("hl-radio-group"),c=i("hl-table-column"),u=i("hl-table");return _(),w(T,null,[t(a,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=p=>o.value=p),gap:"var(--sm)"},{default:d(()=>[t(l,{label:"fixed"}),t(l,{label:"auto"})]),_:1},8,["modelValue"]),t(u,{data:r,"table-layout":o.value},{default:d(()=>[t(c,{prop:"date",label:"Date"}),t(c,{prop:"name",label:"Name"}),t(c,{prop:"address",label:"Address"})]),_:1},8,["table-layout"])],64)}}});var Xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const qe=f({setup(g){const o=(s,l,a)=>{setTimeout(()=>{a([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},r=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],m=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}];return(s,l)=>{const a=i("hl-table-column"),c=i("hl-table");return _(),w("div",null,[t(c,{data:r,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":""},{default:d(()=>[t(a,{prop:"date",label:"Date",sortable:""}),t(a,{prop:"name",label:"Name",sortable:""}),t(a,{prop:"address",label:"Address",sortable:""})]),_:1}),t(c,{data:m,style:{width:"100%"},"row-key":"id",border:"",lazy:"",load:o,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:d(()=>[t(a,{prop:"date",label:"Date"}),t(a,{prop:"name",label:"Name"}),t(a,{prop:"address",label:"Address"})]),_:1})])}}});var et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qe});const tt=n("Table \u8868\u683C "),nt=n(">2.2.6"),at=L('<p>\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C \u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002</p><div class="doc-tip"><p>\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: <a href="https://nuxt.com/v3">Nuxt</a>) \u548C SSG (eg: <a href="https://vitepress.vuejs.org/">VitePress</a>)\u3002</p></div><h2 id="ji-chu-biao-ge"><a class="header-anchor" href="#ji-chu-biao-ge"></a> \u57FA\u7840\u8868\u683C</h2><p>\u57FA\u7840\u7684\u8868\u683C\u5C55\u793A\u7528\u6CD5\u3002</p>',4),ot=e("div",null,[e("p",null,[n("\u5F53 "),e("code",null,"hl-table"),n(" \u5143\u7D20\u4E2D\u6CE8\u5165 data \u5BF9\u8C61\u6570\u7EC4\u540E\uFF0C\u5728 "),e("code",null,"hl-table-column"),n(" \u4E2D\u7528 prop \u5C5E\u6027\u6765\u5BF9\u5E94\u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u5373\u53EF\u586B\u5165\u6570\u636E\uFF0C\u7528 label \u5C5E\u6027\u6765\u5B9A\u4E49\u8868\u683C\u7684\u5217\u540D\u3002 \u53EF\u4EE5\u4F7F\u7528 width \u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u5BBD\u3002")])],-1),lt=e("h2",{id:"dai-ban-ma-wen-biao-ge"},[e("a",{class:"header-anchor",href:"#dai-ban-ma-wen-biao-ge"}),n(" \u5E26\u6591\u9A6C\u7EB9\u8868\u683C")],-1),dt=e("p",null,"\u4F7F\u7528\u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C\uFF0C\u53EF\u4EE5\u66F4\u5BB9\u6613\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002",-1),st=e("div",null,[e("p",null,[n("stripe \u8FD8\u63A5\u6536 "),e("code",null,"even"),n(" \u6216\u8005 "),e("code",null,"odd"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),e("code",null,"odd"),n(" \u5947\u6570")])],-1),rt=e("h2",{id:"dai-bian-kuang-biao-ge"},[e("a",{class:"header-anchor",href:"#dai-bian-kuang-biao-ge"}),n(" \u5E26\u8FB9\u6846\u8868\u683C")],-1),it=e("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTable \u7EC4\u4EF6\u662F\u4E0D\u5177\u6709\u7AD6\u76F4\u65B9\u5411\u7684\u8FB9\u6846\u7684\uFF0C \u5982\u679C\u9700\u8981\uFF0C\u53EF\u4EE5\u4F7F\u7528 border \u5C5E\u6027\uFF0C\u628A\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A true \u5373\u53EF\u542F\u7528\u3002",-1),ct=e("h2",{id:"lie-biao-shi-biao-ge"},[e("a",{class:"header-anchor",href:"#lie-biao-shi-biao-ge"}),n(" \u5217\u8868\u5F0F\u8868\u683C")],-1),mt=e("p",null,"\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002",-1),ut=e("div",null,[e("p",null,[n("\u5F53 Table \u7EC4\u4EF6\u4E2D\u6CE8\u5165"),e("code",null,"data"),n("\u5BF9\u8C61\u6570\u7EC4\u540E\uFF0C\u5728 TableColumn \u7EC4\u4EF6\u4E2D\u7528"),e("code",null,"prop"),n("\u5C5E\u6027\u6765\u5BF9\u5E94\u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u5373\u53EF\u586B\u5165\u6570\u636E\uFF0C\u7528"),e("code",null,"label"),n("\u5C5E\u6027\u6765\u5B9A\u4E49\u8868\u683C\u7684\u5217\u540D\u3002\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"width"),n("\u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u5BBD\u3002")])],-1),pt=e("h2",{id:"biao-ge-zhuang-tai"},[e("a",{class:"header-anchor",href:"#biao-ge-zhuang-tai"}),n(" \u8868\u683C\u72B6\u6001")],-1),ht=e("p",null,"\u53EF\u5C06\u8868\u683C\u5185\u5BB9\u9AD8\u4EAE\u663E\u793A\uFF0C\u65B9\u4FBF\u533A\u5206\u300C\u6210\u529F\u3001\u4FE1\u606F\u3001\u8B66\u544A\u3001\u5371\u9669\u300D\u7B49\u5185\u5BB9\u3002",-1),bt=e("div",null,[e("p",null,[n("\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A Table \u7EC4\u4EF6\u7684 "),e("code",null,"row-class-name"),n(" \u5C5E\u6027\u6765\u4E3A Table \u4E2D\u7684\u67D0\u4E00\u884C\u6DFB\u52A0 class\uFF0C\u8868\u660E\u8BE5\u884C\u5904\u4E8E\u67D0\u79CD\u72B6\u6001\u3002")])],-1),_t=e("h2",{id:"gu-ding-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),n(" \u56FA\u5B9A\u8868\u5934")],-1),gt=e("p",null,"\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\u3002",-1),ft=e("div",null,[e("p",null,[n("\u53EA\u8981\u5728 Table \u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u4E86"),e("code",null,"height"),n("\u5C5E\u6027\uFF0C\u5373\u53EF\u5B9E\u73B0\u56FA\u5B9A\u8868\u5934\u7684\u8868\u683C\u3002")])],-1),St=e("h2",{id:"gu-ding-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-lie"}),n(" \u56FA\u5B9A\u5217")],-1),yt=e("p",null,"\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002",-1),At=e("div",null,[e("p",null,[n("\u56FA\u5B9A\u5217\u9700\u8981\u4F7F\u7528 "),e("code",null,"fixed"),n(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 "),e("code",null,"Boolean"),n(" \u503C\u3002 \u5982\u679C\u4E3A "),e("code",null,"true"),n(", \u5217\u5C06\u88AB\u5DE6\u4FA7\u56FA\u5B9A. \u5B83\u8FD8\u63A5\u53D7\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C"),e("code",null,"left"),n(" \u6216 "),e("code",null,"right"),n("\uFF0C\u8868\u793A\u5DE6\u8FB9\u56FA\u5B9A\u8FD8\u662F\u53F3\u8FB9\u56FA\u5B9A\u3002")])],-1),vt=e("h2",{id:"gu-ding-lie-he-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-lie-he-biao-tou"}),n(" \u56FA\u5B9A\u5217\u548C\u8868\u5934")],-1),wt=e("p",null,"\u5F53\u60A8\u6709\u5927\u91CF\u6570\u636E\u5757\u653E\u5165\u8868\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u540C\u65F6\u56FA\u5B9A\u8868\u5934\u548C\u5217\u3002",-1),Ct=e("div",null,[e("p",null,"\u56FA\u5B9A\u5217\u548C\u8868\u5934\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u5C06\u4E0A\u8FF0\u4E24\u4E2A\u5C5E\u6027\u5206\u522B\u8BBE\u7F6E\u597D\u5373\u53EF\u3002")],-1),Tt=e("h2",{id:"liu-ti-gao-du"},[e("a",{class:"header-anchor",href:"#liu-ti-gao-du"}),n(" \u6D41\u4F53\u9AD8\u5EA6")],-1),Nt=e("p",null,"\u5F53\u6570\u636E\u91CF\u52A8\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u4E3A Table \u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u9AD8\u5EA6\u3002",-1),xt=e("div",null,[e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E"),e("code",null,"max-height"),n("\u5C5E\u6027\u4E3A Table \u6307\u5B9A\u6700\u5927\u9AD8\u5EA6\u3002\u6B64\u65F6\u82E5\u8868\u683C\u6240\u9700\u7684\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u6EDA\u52A8\u6761\u3002")])],-1),Lt=e("h2",{id:"duo-ji-biao-tou"},[e("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),n(" \u591A\u7EA7\u8868\u5934")],-1),Gt=e("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),Dt=e("div",null,[e("p",null,"\u53EA\u9700\u8981\u5C06hl-table-column \u653E\u7F6E\u4E8Ehl-table-column \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5B9E\u73B0\u7EC4\u5934\u3002")],-1),zt=e("h2",{id:"gu-ding-biao-tou-2"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou-2"}),n(" \u56FA\u5B9A\u8868\u5934")],-1),Ft=e("p",null,"\u652F\u6301\u56FA\u5B9A\u7FA4\u7EC4\u5934",-1),kt=e("div",null,[e("p",null,[n("\u7EC4\u5934\u7684\u5C5E\u6027 "),e("code",null,"fixed"),n(" \u7531\u6700\u5916\u5C42 "),e("code",null,"hl-table-column"),n(" \u51B3\u5B9A")])],-1),$t=e("h2",{id:"dan-xuan"},[e("a",{class:"header-anchor",href:"#dan-xuan"}),n(" \u5355\u9009")],-1),Et=e("p",null,"\u9009\u62E9\u5355\u884C\u6570\u636E\u65F6\u4F7F\u7528\u8272\u5757\u8868\u793A\u3002",-1),jt=e("div",null,[e("p",null,[n("Table \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5355\u9009\u7684\u652F\u6301\uFF0C \u53EA\u9700\u8981\u914D\u7F6E "),e("code",null,"highlight-current-row"),n(" \u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5355\u9009\u3002 \u4E4B\u540E\u7531 "),e("code",null,"current-change"),n(" \u4E8B\u4EF6\u6765\u7BA1\u7406\u9009\u4E2D\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4F1A\u4F20\u5165 "),e("code",null,"currentRow"),n("\uFF0C"),e("code",null,"oldCurrentRow"),n("\u3002 \u5982\u679C\u9700\u8981\u663E\u793A\u7D22\u5F15\uFF0C\u53EF\u4EE5\u589E\u52A0\u4E00\u5217 "),e("code",null,"hl-table-column"),n("\uFF0C\u8BBE\u7F6E "),e("code",null,"type"),n(" \u5C5E\u6027\u4E3A "),e("code",null,"index"),n(" \u5373\u53EF\u663E\u793A\u4ECE "),e("code",null,"1"),n(" \u5F00\u59CB\u7684\u7D22\u5F15\u53F7\u3002")])],-1),Ot=e("h2",{id:"duo-xuan"},[e("a",{class:"header-anchor",href:"#duo-xuan"}),n(" \u591A\u9009")],-1),It=e("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u591A\u884C\u3002",-1),Ut=e("div",null,[e("p",null,[n("\u5B9E\u73B0\u591A\u9009\u975E\u5E38\u7B80\u5355: \u624B\u52A8\u6DFB\u52A0\u4E00\u4E2A "),e("code",null,"hl-table-column"),n("\uFF0C\u8BBE "),e("code",null,"type"),n(" \u5C5E\u6027\u4E3A "),e("code",null,"selection"),n(" \u5373\u53EF\uFF1B \u9664\u4E86\u591A\u9009\uFF0C\u8FD9\u91CC\u8FD8\u4F7F\u7528\u5230\u4E86 "),e("code",null,"show-overflow-tooltip"),n("\u5C5E\u6027\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5355\u5143\u683C\u5185\u5BB9\u8FC7\u957F\uFF0C\u4F1A\u5360\u7528\u591A\u884C\u663E\u793A\u3002 \u82E5\u9700\u8981\u5355\u884C\u663E\u793A\u53EF\u4EE5\u4F7F\u7528 "),e("code",null,"show-overflow-tooltip"),n(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A "),e("code",null,"Boolean"),n("\uFF0C \u4E3A true \u65F6\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u5728 hover \u65F6\u4EE5 tooltip \u7684\u5F62\u5F0F\u663E\u793A\u51FA\u6765\u3002")])],-1),Mt=e("h2",{id:"pai-xu"},[e("a",{class:"header-anchor",href:"#pai-xu"}),n(" \u6392\u5E8F")],-1),Rt=e("p",null,"\u5BF9\u8868\u683C\u8FDB\u884C\u6392\u5E8F\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u6216\u5BF9\u6BD4\u6570\u636E\u3002",-1),Ht=e("div",null,[e("p",null,[n("\u5728\u5217\u4E2D\u8BBE\u7F6E "),e("code",null,"sortable"),n(" \u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u4EE5\u8BE5\u5217\u4E3A\u57FA\u51C6\u7684\u6392\u5E8F\uFF0C \u63A5\u53D7\u4E00\u4E2A "),e("code",null,"Boolean"),n("\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"false"),n("\u3002 \u53EF\u4EE5\u901A\u8FC7 Table \u7684 "),e("code",null,"default-sort"),n(" \u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u548C\u6392\u5E8F\u987A\u5E8F\u3002 \u53EF\u4EE5\u4F7F\u7528 "),e("code",null,"sort-method"),n(" \u6216\u8005 "),e("code",null,"sort-by"),n(" \u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u6392\u5E8F\u89C4\u5219\u3002 \u5982\u679C\u9700\u8981\u540E\u7AEF\u6392\u5E8F\uFF0C\u9700\u5C06 "),e("code",null,"sortable"),n(" \u8BBE\u7F6E\u4E3A "),e("code",null,"custom"),n("\uFF0C\u540C\u65F6\u5728 "),e("code",null,"Table"),n(" \u4E0A\u76D1\u542C "),e("code",null,"sort-change"),n(" \u4E8B\u4EF6\uFF0C \u5728\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u6392\u5E8F\u7684\u5B57\u6BB5\u540D\u548C\u6392\u5E8F\u987A\u5E8F\uFF0C\u4ECE\u800C\u5411\u63A5\u53E3\u8BF7\u6C42\u6392\u5E8F\u540E\u7684\u8868\u683C\u6570\u636E\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u4F7F\u7528\u4E86 "),e("code",null,"formatter"),n(" \u5C5E\u6027\uFF0C\u5B83\u7528\u4E8E\u683C\u5F0F\u5316\u6307\u5B9A\u5217\u7684\u503C\uFF0C \u63A5\u53D7\u4E00\u4E2A "),e("code",null,"Function"),n("\uFF0C\u4F1A\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A"),e("code",null,"row"),n(" \u548C "),e("code",null,"column"),n("\uFF0C \u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u8FDB\u884C\u5904\u7406\u3002")])],-1),Bt=e("h2",{id:"shai-xuan"},[e("a",{class:"header-anchor",href:"#shai-xuan"}),n(" \u7B5B\u9009")],-1),Vt=e("p",null,"\u5BF9\u8868\u683C\u8FDB\u884C\u7B5B\u9009\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u5230\u81EA\u5DF1\u60F3\u770B\u7684\u6570\u636E\u3002",-1),Jt=e("div",null,[e("p",null,[n("\u5728\u5217\u4E2D\u8BBE\u7F6E "),e("code",null,"filters"),n(" \u548C "),e("code",null,"filter-method"),n(" \u5C5E\u6027\u5373\u53EF\u5F00\u542F\u8BE5\u5217\u7684\u7B5B\u9009\uFF0C "),e("code",null,"filters"),n(" \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C"),e("code",null,"filter-method"),n(" \u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u7528\u4E8E\u51B3\u5B9A\u67D0\u4E9B\u6570\u636E\u662F\u5426\u663E\u793A\uFF0C \u4F1A\u4F20\u5165\u4E09\u4E2A\u53C2\u6570\uFF1A"),e("code",null,"value"),n(", "),e("code",null,"row"),n(" \u548C "),e("code",null,"column"),n("\u3002")])],-1),Pt=e("h2",{id:"zi-ding-yi-lie-mo-ban"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-lie-mo-ban"}),n(" \u81EA\u5B9A\u4E49\u5217\u6A21\u677F")],-1),Zt=e("p",null,"\u81EA\u5B9A\u4E49\u5217\u7684\u663E\u793A\u5185\u5BB9\uFF0C\u53EF\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\u3002",-1),Yt=e("div",null,[e("p",null,[n("\u901A\u8FC7 "),e("code",null,"slot"),n(" \u53EF\u4EE5\u83B7\u53D6\u5230 row, column, $index \u548C store\uFF08table \u5185\u90E8\u7684\u72B6\u6001\u7BA1\u7406\uFF09\u7684\u6570\u636E\uFF0C\u7528\u6CD5\u53C2\u8003 demo\u3002")])],-1),Kt=e("h2",{id:"zi-ding-yi-biao-tou"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-biao-tou"}),n(" \u81EA\u5B9A\u4E49\u8868\u5934")],-1),Wt=e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),e("a",{href:"https://v3.vuejs.org/guide/component-slots.html"},"slot"),n(" \u6765\u81EA\u5B9A\u4E49\u8868\u5934\u3002")],-1),Qt=e("h2",{id:"zhan-kai-xing"},[e("a",{class:"header-anchor",href:"#zhan-kai-xing"}),n(" \u5C55\u5F00\u884C")],-1),Xt=e("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Table \u5C55\u5F00\u884C\u529F\u80FD\u3002",-1),qt=e("div",null,[e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),e("code",null,'type="expand"'),n(" \u548C "),e("code",null,"slot"),n(" \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\uFF0C "),e("code",null,"hl-table-column"),n(" \u7684\u6A21\u677F\u4F1A\u88AB\u6E32\u67D3\u6210\u4E3A\u5C55\u5F00\u884C\u7684\u5185\u5BB9\uFF0C\u5C55\u5F00\u884C\u53EF\u8BBF\u95EE\u7684\u5C5E\u6027\u4E0E\u4F7F\u7528\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u65F6\u7684 "),e("code",null,"slot"),n(" \u76F8\u540C\u3002")])],-1),en=e("h2",{id:"shu-xing-shu-ju-yu-lan-jia-zai"},[e("a",{class:"header-anchor",href:"#shu-xing-shu-ju-yu-lan-jia-zai"}),n(" \u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D")],-1),tn=e("p",null,[n("\u8868\u683C\u7EC4\u4EF6\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u663E\u793A\u3002\u5F53 row \u4E2D\u5305\u542B "),e("code",null,"children"),n(" \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002")],-1),nn=e("div",null,[e("p",null,[n("\u6E32\u67D3\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6307\u5B9A "),e("code",null,"row-key"),n("\u3002\u652F\u6301\u5B50\u8282\u70B9\u6570\u636E\u5F02\u6B65\u52A0\u8F7D\u3002\u8BBE\u7F6E Table \u7684 "),e("code",null,"lazy"),n(" \u5C5E\u6027\u4E3A true \u4E0E\u52A0\u8F7D\u51FD\u6570 "),e("code",null,"load"),n(" \u3002\u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684 "),e("code",null,"hasChildren"),n(" \u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002"),e("code",null,"children"),n(" \u4E0E "),e("code",null,"hasChildren"),n(" \u90FD\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tree-props"),n(" \u914D\u7F6E\u3002")])],-1),an=e("h2",{id:"ke-xuan-ze-shu"},[e("a",{class:"header-anchor",href:"#ke-xuan-ze-shu"}),n(" \u53EF\u9009\u62E9\u6811")],-1),on=e("div",null,[e("p",null,[n("\u5F53 "),e("code",null,"treeProps.checkStrictly"),n(" \u4E3A true \u65F6, \u7236\u5B50\u8282\u70B9\u4E4B\u95F4\u7684\u9009\u62E9\u5173\u7CFB\u4E0D\u5728\u5F3A\u884C\u5173\u8054, \u5373, \u5F53\u7236\u8282\u70B9\u9009\u4E2D\u65F6, \u5B83\u7684\u5B50\u8282\u70B9\u8BA9\u4E0D\u4F1A\u88AB\u9009\u4E2D\u3002")])],-1),ln=e("h2",{id:"biao-wei-he-ji-xing"},[e("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),n(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),dn=e("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),sn=e("div",null,[e("p",null,[n("\u5C06"),e("code",null,"show-summary"),n("\u8BBE\u7F6E\u4E3A"),e("code",null,"true"),n("\u5C31\u4F1A\u5728\u8868\u683C\u5C3E\u90E8\u5C55\u793A\u5408\u8BA1\u884C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u4E8E\u5408\u8BA1\u884C\uFF0C\u7B2C\u4E00\u5217\u4E0D\u8FDB\u884C\u6570\u636E\u6C42\u5408\u64CD\u4F5C\uFF0C\u800C\u662F\u663E\u793A\u300C\u5408\u8BA1\u300D\u4E8C\u5B57\uFF08\u53EF\u901A\u8FC7"),e("code",null,"sum-text"),n("\u914D\u7F6E\uFF09\uFF0C\u5176\u4F59\u5217\u4F1A\u5C06\u672C\u5217\u6240\u6709\u6570\u503C\u8FDB\u884C\u6C42\u5408\u64CD\u4F5C\uFF0C\u5E76\u663E\u793A\u51FA\u6765\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u7684\u5408\u8BA1\u903B\u8F91\u3002\u4F7F\u7528"),e("code",null,"summary-method"),n("\u5E76\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u7684\u5404\u9879\u5C31\u4F1A\u663E\u793A\u5728\u5408\u8BA1\u884C\u7684\u5404\u5217\u4E2D\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\u672C\u4F8B\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u8868\u683C\u3002")])],-1),rn=e("h2",{id:"he-bing-xing-huo-lie"},[e("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),n(" \u5408\u5E76\u884C\u6216\u5217")],-1),cn=e("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),mn=e("div",null,[e("p",null,[n("\u901A\u8FC7\u7ED9"),e("code",null,"table"),n("\u4F20\u5165"),e("code",null,"span-method"),n("\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C"),e("code",null,"row"),n("\u3001\u5F53\u524D\u5217"),e("code",null,"column"),n("\u3001\u5F53\u524D\u884C\u53F7"),e("code",null,"rowIndex"),n("\u3001\u5F53\u524D\u5217\u53F7"),e("code",null,"columnIndex"),n("\u56DB\u4E2A\u5C5E\u6027\u3002\u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868"),e("code",null,"rowspan"),n("\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868"),e("code",null,"colspan"),n("\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A"),e("code",null,"rowspan"),n("\u548C"),e("code",null,"colspan"),n("\u7684\u5BF9\u8C61\u3002")])],-1),un=e("h2",{id:"zi-ding-yi-suo-yin"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-suo-yin"}),n(" \u81EA\u5B9A\u4E49\u7D22\u5F15")],-1),pn=e("p",null,[n("\u81EA\u5B9A\u4E49 "),e("code",null,"type=index"),n(" \u5217\u7684\u884C\u53F7\u3002")],-1),hn=e("div",null,[e("p",null,[n("\u901A\u8FC7\u7ED9 "),e("code",null,"type=index"),n(" \u7684\u5217\u4F20\u5165 "),e("code",null,"index"),n(" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7D22\u5F15\u3002\u8BE5\u5C5E\u6027\u4F20\u5165\u6570\u5B57\u65F6\uFF0C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u7684\u8D77\u59CB\u503C\u3002\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u63D0\u4F9B\u5F53\u524D\u884C\u7684\u884C\u53F7\uFF08\u4ECE "),e("code",null,"0"),n(" \u5F00\u59CB\uFF09\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u5C55\u793A\u3002")])],-1),bn=e("h2",{id:"biao-ge-bu-ju"},[e("a",{class:"header-anchor",href:"#biao-ge-bu-ju"}),n(" \u8868\u683C\u5E03\u5C40")],-1),_n=e("p",null,[n("\u901A\u8FC7\u5C5E\u6027 "),e("code",null,"table-layout"),n(" \u53EF\u4EE5\u6307\u5B9A\u8868\u683C\u4E2D\u5355\u5143\u683C\u3001\u884C\u548C\u5217\u7684\u5E03\u5C40\u65B9\u5F0F")],-1),gn=L('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u663E\u793A\u7684\u6570\u636E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>height</td><td>Table \u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u81EA\u52A8\u9AD8\u5EA6\u3002\u5982\u679C height \u4E3A number \u7C7B\u578B\uFF0C\u5355\u4F4D px\uFF1B\u5982\u679C height \u4E3A string \u7C7B\u578B\uFF0C\u5219\u8FD9\u4E2A\u9AD8\u5EA6\u4F1A\u8BBE\u7F6E\u4E3A Table \u7684 style.height \u7684\u503C\uFF0CTable \u7684\u9AD8\u5EA6\u4F1A\u53D7\u63A7\u4E8E\u5916\u90E8\u6837\u5F0F\u3002</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>Table \u7684\u6700\u5927\u9AD8\u5EA6\u3002\u5408\u6CD5\u7684\u503C\u4E3A\u6570\u5B57\u6216\u8005\u5355\u4F4D\u4E3A px \u7684\u9AD8\u5EA6\u3002</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>border</td><td>\u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fit</td><td>\u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>current-row-key</td><td>\u5F53\u524D\u884C\u7684 key\uFF0C\u53EA\u5199\u5C5E\u6027</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, rowIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({row, rowIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, column, rowIndex, columnIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>Function({row, column, rowIndex, columnIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, rowIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({row, rowIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, column, rowIndex, columnIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({row, column, rowIndex, columnIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 Table \u7684\u6E32\u67D3\uFF1B\u5728\u4F7F\u7528 reserve-selection \u529F\u80FD\u4E0E\u663E\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684\u3002\u7C7B\u578B\u4E3A string \u65F6\uFF0C\u652F\u6301\u591A\u5C42\u8BBF\u95EE\uFF1A<code>user.info.id</code>\uFF0C\u4F46\u4E0D\u652F\u6301 <code>user.info[0].id</code>\uFF0C\u6B64\u79CD\u60C5\u51B5\u8BF7\u4F7F\u7528 <code>function</code>\u3002</td><td>function(row)/string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u7A7A\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>#empty</code> \u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u6682\u65E0\u6570\u636E</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 Table \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>expand-row-keys</td><td>\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u8BBE\u7F6E Table \u76EE\u524D\u7684\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u8BBE\u7F6E row-key \u5C5E\u6027\u624D\u80FD\u4F7F\u7528\uFF0C\u8BE5\u5C5E\u6027\u4E3A\u5C55\u5F00\u884C\u7684 keys \u6570\u7EC4\u3002</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>default-sort</td><td>\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u7684 prop \u548C\u987A\u5E8F\u3002\u5B83\u7684<code>prop</code>\u5C5E\u6027\u6307\u5B9A\u9ED8\u8BA4\u7684\u6392\u5E8F\u7684\u5217\uFF0C<code>order</code>\u6307\u5B9A\u9ED8\u8BA4\u6392\u5E8F\u7684\u987A\u5E8F</td><td>object</td><td><code>order</code>: ascending, descending</td><td>\u5982\u679C\u53EA\u6307\u5B9A\u4E86<code>prop</code>, \u6CA1\u6709\u6307\u5B9A<code>order</code>, \u5219\u9ED8\u8BA4\u987A\u5E8F\u662F ascending</td></tr><tr><td>tooltip-effect</td><td>tooltip <code>effect</code> \u5C5E\u6027</td><td>string</td><td>dark/light</td><td>dark</td></tr><tr><td>tooltip-options</td><td>\u6EA2\u51FA tooltip \u7684\u9009\u9879</td><td>object</td><td>-</td><td>-</td></tr><tr><td>show-summary</td><td>\u662F\u5426\u5728\u8868\u5C3E\u663E\u793A\u5408\u8BA1\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>sum-text</td><td>\u5408\u8BA1\u884C\u7B2C\u4E00\u5217\u7684\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u5408\u8BA1</td></tr><tr><td>summary-method</td><td>\u81EA\u5B9A\u4E49\u7684\u5408\u8BA1\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ columns, data })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>select-on-indeterminate</td><td>\u5728\u591A\u9009\u8868\u683C\u4E2D\uFF0C\u5F53\u4EC5\u6709\u90E8\u5206\u884C\u88AB\u9009\u4E2D\u65F6\uFF0C\u70B9\u51FB\u8868\u5934\u7684\u591A\u9009\u6846\u65F6\u7684\u884C\u4E3A\u3002\u82E5\u4E3A true\uFF0C\u5219\u9009\u4E2D\u6240\u6709\u884C\uFF1B\u82E5\u4E3A false\uFF0C\u5219\u53D6\u6D88\u9009\u62E9\u6240\u6709\u884C</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>indent</td><td>\u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6811\u8282\u70B9\u7684\u7F29\u8FDB</td><td>number</td><td>\u2014</td><td>16</td></tr><tr><td>lazy</td><td>\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0Clazy \u4E3A true \u65F6\u751F\u6548\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>Function(row, treeNode, resolve)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>\u2014</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr><tr><td>table-layout</td><td>\u8BBE\u7F6E\u8868\u683C\u5355\u5143\u3001\u884C\u548C\u5217\u7684\u5E03\u5C40\u65B9\u5F0F</td><td>string</td><td>fixed / auto</td><td>fixed</td></tr><tr><td>scrollbar-always-on</td><td>\u603B\u662F\u663E\u793A\u6EDA\u52A8\u6761</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>flexible</td><td>\u786E\u4FDD\u4E3B\u8F74\u7684\u6700\u5C0F\u5C3A\u5BF8</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scrollbar-tabindex</td><td>\u4E3B\u4F53\u6EDA\u52A8\u6761tabindex</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>append-filter-panel-to</td><td>\u8FC7\u6EE4\u5668\u9762\u677F\u6DFB\u52A0\u4F4D\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u6570\u636E\u884C\u7684 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>selection, row</td></tr><tr><td>select-all</td><td>\u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u5168\u9009 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>selection</td></tr><tr><td>selection-change</td><td>\u5F53\u9009\u62E9\u9879\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>\u5F53\u5355\u5143\u683C hover \u8FDB\u5165\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>\u5F53\u5355\u5143\u683C hover \u9000\u51FA\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u53CC\u51FB\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-contextmenu</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u53CC\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>header-click</td><td>\u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>\u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>column, event</td></tr><tr><td>sort-change</td><td>\u5F53\u8868\u683C\u7684\u6392\u5E8F\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>\u5F53\u8868\u683C\u7684\u7B5B\u9009\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53C2\u6570\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 key \u662F column \u7684 columnKey\uFF0C\u5BF9\u5E94\u7684 value \u4E3A\u7528\u6237\u9009\u62E9\u7684\u7B5B\u9009\u6761\u4EF6\u7684\u6570\u7EC4\u3002</td><td>filters</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>\u5F53\u62D6\u52A8\u8868\u5934\u6539\u53D8\u4E86\u5217\u7684\u5BBD\u5EA6\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>\u5F53\u7528\u6237\u5BF9\u67D0\u4E00\u884C\u5C55\u5F00\u6216\u8005\u5173\u95ED\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF08\u5C55\u5F00\u884C\u65F6\uFF0C\u56DE\u8C03\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A expandedRows\uFF1B\u6811\u5F62\u8868\u683C\u65F6\u7B2C\u4E8C\u53C2\u6570\u4E3A expanded\uFF09</td><td>row, (expandedRows | expanded)</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u6E05\u7A7A\u7528\u6237\u7684\u9009\u62E9</td><td>\u2014</td></tr><tr><td>getSelectionRows</td><td>\u8FD4\u56DE\u5F53\u524D\u9009\u4E2D\u7684\u884C</td><td><code>() =&gt; any[]</code></td></tr><tr><td>toggleRowSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09</td><td>row, selected, ignoreSelectable = true</td></tr><tr><td>toggleAllSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u5168\u9009\u548C\u5168\u4E0D\u9009</td><td>-</td></tr><tr><td>toggleRowExpansion</td><td>\u7528\u4E8E\u53EF\u5C55\u5F00\u8868\u683C\u4E0E\u6811\u5F62\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u5C55\u5F00\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u5C55\u5F00\u4E0E\u5426\uFF08expanded \u4E3A true \u5219\u5C55\u5F00\uFF09</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C\u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002</td><td>row</td></tr><tr><td>clearSort</td><td>\u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u6392\u5E8F\u7684\u72B6\u6001</td><td>\u2014</td></tr><tr><td>clearFilter</td><td>\u4E0D\u4F20\u5165\u53C2\u6570\u65F6\u7528\u4E8E\u6E05\u7A7A\u6240\u6709\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u8FC7\u6EE4\u7684\u72B6\u6001\uFF0C\u4E5F\u53EF\u4F20\u5165\u7531 columnKey \u7EC4\u6210\u7684\u6570\u7EC4\u4EE5\u6E05\u9664\u6307\u5B9A\u5217\u7684\u8FC7\u6EE4\u6761\u4EF6</td><td>columnKey</td></tr><tr><td>doLayout</td><td>\u5BF9 Table \u8FDB\u884C\u91CD\u65B0\u5E03\u5C40\u3002\u5F53 Table \u6216\u5176\u4E0A\u7EA7\u5143\u7D20\u7531\u9690\u85CF\u5207\u6362\u4E3A\u663E\u793A\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u8C03\u7528\u6B64\u65B9\u6CD5</td><td>\u2014</td></tr><tr><td>sort</td><td>\u624B\u52A8\u5BF9 Table \u8FDB\u884C\u6392\u5E8F\u3002\u53C2\u6570<code>prop</code>\u5C5E\u6027\u6307\u5B9A\u6392\u5E8F\u5217\uFF0C<code>order</code>\u6307\u5B9A\u6392\u5E8F\u987A\u5E8F\u3002</td><td>prop: string, order: string</td></tr><tr><td>scrollTo</td><td>\u6EDA\u52A8\u5230\u67D0\u4E00\u4F4D\u7F6E</td><td><code>(options: number \\| ScrollToOptions, yCoord?: number) =&gt; void</code></td></tr><tr><td>setScrollTop</td><td>\u8BBE\u7F6E\u5782\u76F4\u6EDA\u52A8\u6761\u4F4D\u7F6E</td><td><code>(top?: number) =&gt; void</code></td></tr><tr><td>setScrollLeft</td><td>\u8BBE\u7F6E\u6C34\u5E73\u6EDA\u52A8\u6761\u4F4D\u7F6E</td><td><code>(left?: number) =&gt; void</code></td></tr><tr><td>columns</td><td>\u83B7\u53D6\u5217\u4E0A\u4E0B\u6587</td><td><code>TableColumnCtx&lt;T&gt;[]</code></td></tr><tr><td>updateKeyChildren</td><td>\u7528\u5728\u61D2\u52A0\u8F7D\u8868\u683C\u4E2D, \u5FC5\u987B\u8BBE\u7F6E<code>rowKey</code></td><td><code>(key: string, data: T[]) =&gt; void</code></td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>append</td><td>\u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002\u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002</td></tr></tbody></table><h2 id="table-column-attributes"><a class="header-anchor" href="#table-column-attributes"></a> Table Column Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u5BF9\u5E94\u5217\u7684\u7C7B\u578B\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 <code>selection</code> \u5219\u663E\u793A\u591A\u9009\u6846\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 <code>index</code> \u5219\u663E\u793A\u8BE5\u884C\u7684\u7D22\u5F15\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 <code>expand</code> \u5219\u663E\u793A\u4E3A\u4E00\u4E2A\u53EF\u5C55\u5F00\u7684\u6309\u94AE</td><td>string</td><td>selection/index/expand</td><td>\u2014</td></tr><tr><td>index</td><td>\u5982\u679C\u8BBE\u7F6E\u4E86 <code>type=index</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012 <code>index</code> \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u7D22\u5F15</td><td>number, Function(index)</td><td>-</td><td>-</td></tr><tr><td>column-key</td><td>column \u7684 key\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 filter-change \u4E8B\u4EF6\uFF0C\u5219\u9700\u8981\u6B64\u5C5E\u6027\u6807\u8BC6\u662F\u54EA\u4E2A column \u7684\u7B5B\u9009\u6761\u4EF6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u663E\u793A\u7684\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prop</td><td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 property \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>min-width</td><td>\u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u4E0E width \u7684\u533A\u522B\u662F width \u662F\u56FA\u5B9A\u7684\uFF0Cmin-width \u4F1A\u628A\u5269\u4F59\u5BBD\u5EA6\u6309\u6BD4\u4F8B\u5206\u914D\u7ED9\u8BBE\u7F6E\u4E86 min-width \u7684\u5217</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fixed</td><td>\u5217\u662F\u5426\u56FA\u5B9A\u5728\u5DE6\u4FA7\u6216\u8005\u53F3\u4FA7\uFF0Ctrue \u8868\u793A\u56FA\u5B9A\u5728\u5DE6\u4FA7</td><td>string / boolean</td><td>true, left, right</td><td>\u2014</td></tr><tr><td>sortable</td><td>\u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u6392\u5E8F\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A &#39;custom&#39;\uFF0C\u5219\u4EE3\u8868\u7528\u6237\u5E0C\u671B\u8FDC\u7A0B\u6392\u5E8F\uFF0C\u9700\u8981\u76D1\u542C Table \u7684 sort-change \u4E8B\u4EF6</td><td>boolean / string</td><td>true, false, &#39;custom&#39;</td><td>false</td></tr><tr><td>sort-method</td><td>\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u7684\u65F6\u5019\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 sortable \u8BBE\u7F6E\u4E3A true \u7684\u65F6\u5019\u6709\u6548\uFF0C\u9700\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\uFF0C\u548C Array.sort \u8868\u73B0\u4E00\u81F4</td><td>function(a, b)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sort-by</td><td>\u6307\u5B9A\u6570\u636E\u6309\u7167\u54EA\u4E2A\u5C5E\u6027\u8FDB\u884C\u6392\u5E8F\uFF0C\u4EC5\u5F53 sortable \u8BBE\u7F6E\u4E3A true \u4E14\u6CA1\u6709\u8BBE\u7F6E sort-method \u7684\u65F6\u5019\u6709\u6548\u3002\u5982\u679C sort-by \u4E3A\u6570\u7EC4\uFF0C\u5219\u5148\u6309\u7167\u7B2C 1 \u4E2A\u5C5E\u6027\u6392\u5E8F\uFF0C\u5982\u679C\u7B2C 1 \u4E2A\u76F8\u7B49\uFF0C\u518D\u6309\u7167\u7B2C 2 \u4E2A\u6392\u5E8F\uFF0C\u4EE5\u6B64\u7C7B\u63A8</td><td>string / array / function(row, index)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sort-orders</td><td>\u6570\u636E\u5728\u6392\u5E8F\u65F6\u6240\u4F7F\u7528\u6392\u5E8F\u7B56\u7565\u7684\u8F6E\u8F6C\u987A\u5E8F\uFF0C\u4EC5\u5F53 sortable \u4E3A true \u65F6\u6709\u6548\u3002\u9700\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u968F\u7740\u7528\u6237\u70B9\u51FB\u8868\u5934\uFF0C\u8BE5\u5217\u4F9D\u6B21\u6309\u7167\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F</td><td>array</td><td>\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u9700\u4E3A\u4EE5\u4E0B\u4E09\u8005\u4E4B\u4E00\uFF1A<code>ascending</code> \u8868\u793A\u5347\u5E8F\uFF0C<code>descending</code> \u8868\u793A\u964D\u5E8F\uFF0C<code>null</code> \u8868\u793A\u8FD8\u539F\u4E3A\u539F\u59CB\u987A\u5E8F</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>\u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u62D6\u52A8\u6539\u53D8\u5BBD\u5EA6\uFF08\u9700\u8981\u5728 hl-table \u4E0A\u8BBE\u7F6E border \u5C5E\u6027\u4E3A\u771F\uFF09</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, index)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-overflow-tooltip</td><td>\u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>header-align</td><td>\u8868\u5934\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u8BE5\u9879\uFF0C\u5219\u4F7F\u7528\u8868\u683C\u7684\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>\u2014</td></tr><tr><td>class-name</td><td>\u5217\u7684 className</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-class-name</td><td>\u5F53\u524D\u5217\u6807\u9898\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>selectable</td><td>\u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Function\uFF0CFunction \u7684\u8FD4\u56DE\u503C\u7528\u6765\u51B3\u5B9A\u8FD9\u4E00\u884C\u7684 CheckBox \u662F\u5426\u53EF\u4EE5\u52FE\u9009</td><td>Function(row, index)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>reserve-selection</td><td>\u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Boolean\uFF0C\u4E3A true \u5219\u4F1A\u5728\u6570\u636E\u66F4\u65B0\u4E4B\u540E\u4FDD\u7559\u4E4B\u524D\u9009\u4E2D\u7684\u6570\u636E\uFF08\u9700\u6307\u5B9A <code>row-key</code>\uFF09</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filters</td><td>\u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\uFF0C\u6570\u7EC4\u683C\u5F0F\uFF0C\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u9700\u8981\u6709 text \u548C value \u5C5E\u6027\u3002</td><td>array[{ text, value }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-placement</td><td>\u8FC7\u6EE4\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D</td><td>string</td><td>\u4E0E Tooltip \u7684 <code>placement</code> \u5C5E\u6027\u76F8\u540C</td><td>\u2014</td></tr><tr><td>filter-multiple</td><td>\u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>filter-method</td><td>\u6570\u636E\u8FC7\u6EE4\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u5982\u679C\u662F\u591A\u9009\u7684\u7B5B\u9009\u9879\uFF0C\u5BF9\u6BCF\u4E00\u6761\u6570\u636E\u4F1A\u6267\u884C\u591A\u6B21\uFF0C\u4EFB\u610F\u4E00\u6B21\u8FD4\u56DE true \u5C31\u4F1A\u663E\u793A\u3002</td><td>function(value, row, column)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filtered-value</td><td>\u9009\u4E2D\u7684\u6570\u636E\u8FC7\u6EE4\u9879\uFF0C\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5934\u8FC7\u6EE4\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u6B64\u5C5E\u6027\u3002</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-class-name</td><td>\u8FC7\u6EE4\u5F39\u51FA\u6846\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="table-column-slots"><a class="header-anchor" href="#table-column-slots"></a> Table Column Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5217\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { row, column, $index }</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u8868\u5934\u7684\u5185\u5BB9. \u53C2\u6570\u4E3A { column, $index }</td></tr><tr><td>filter-icon</td><td>\u81EA\u5B9A\u4E49\u8FC7\u6EE4Icon</td></tr></tbody></table>',12),vn={setup(g){const o="table",r={"../../../examples/table/basic.vue":j,"../../../examples/table/border.vue":I,"../../../examples/table/check-strictly.vue":M,"../../../examples/table/column-slot.vue":P,"../../../examples/table/custom-header.vue":W,"../../../examples/table/expand.vue":de,"../../../examples/table/filters.vue":ce,"../../../examples/table/fixed-all.vue":ue,"../../../examples/table/fixed-column-and-group-header.vue":he,"../../../examples/table/fixed-column.vue":fe,"../../../examples/table/fixed-header.vue":ye,"../../../examples/table/highlight-current.vue":Te,"../../../examples/table/indexable.vue":xe,"../../../examples/table/list.vue":Ge,"../../../examples/table/max-height.vue":ke,"../../../examples/table/multi-header.vue":Ee,"../../../examples/table/row-class.vue":Oe,"../../../examples/table/selection.vue":He,"../../../examples/table/sortable.vue":Ve,"../../../examples/table/span-method.vue":Pe,"../../../examples/table/stripe.vue":Ye,"../../../examples/table/summary.vue":We,"../../../examples/table/table-layout.vue":Xe,"../../../examples/table/tree.vue":et};return(m,s)=>{const l=i("hl-tag"),a=i("demo-block"),c=i("right-nav");return _(),w(T,null,[e("section",null,[e("h1",null,[tt,t(l,{type:"primary",size:"sm"},{default:d(()=>[nt]),_:1})]),at,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/basic","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column prop="date" label="Date" />
    <hl-table-column prop="name" label="Name" />
    <hl-table-column prop="address" label="Address" width="280" show-overflow-tooltip />
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles.No. 189, Grove St, Los Angeles.No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[ot]),_:1},8,["demos"]),lt,dt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/stripe","source-code":`<template>
  <hl-table :data="tableData" stripe style="width: 100%">
    <hl-table-column prop="date" label="Date" width="180" />
    <hl-table-column prop="name" label="Name" width="180" />
    <hl-table-column prop="address" label="Address" />
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[st]),_:1},8,["demos"]),rt,it,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/border","source-code":`<template>
  <hl-table :data="tableData" border style="width: 100%">
    <hl-table-column prop="date" label="Date" width="180" />
    <hl-table-column prop="name" label="Name" width="180" />
    <hl-table-column prop="address" label="Address" />
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},null,8,["demos"]),ct,mt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/list","source-code":`<template>
  <hl-table :data="tableData" list>
    <hl-table-column prop="date" label="\u65E5\u671F" width="150" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
    <hl-table-column prop="address" show-overflow-tooltip label="\u5730\u5740" />
  </hl-table>
</template>

<script setup lang="ts">

const tableData = [
  {
    date: '2016-05-02',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
  },
  {
    date: '2016-05-04',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
  },
  {
    date: '2016-05-01',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
  },
  {
    date: '2016-05-03',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
  },
]
<\/script>
`},{default:d(()=>[ut]),_:1},8,["demos"]),pt,ht,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/row-class","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
  },
  {
    date: '2016-05-04',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
  },
  {
    date: '2016-05-01',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
  },
  {
    date: '2016-05-03',
    name: '\u738B\u5C0F\u864E',
    address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
  },
])

const tableRowClassName = ({ rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
<\/script>

<style>
  .hl-table .warning-row {
    background: oldlace;
  }

  .hl-table .success-row {
    background: #f0f9eb;
  }
</style>
`},{default:d(()=>[bt]),_:1},8,["demos"]),_t,gt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/fixed-header","source-code":`<template>
  <hl-table :data="tableData" height="250" style="width: 100%">
    <hl-table-column prop="date" label="Date" width="180" />
    <hl-table-column prop="name" label="Name" width="180" />
    <hl-table-column prop="address" label="Address" />
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[ft]),_:1},8,["demos"]),St,yt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/fixed-column","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column fixed prop="date" label="Date" width="150" />
    <hl-table-column prop="name" label="Name" width="120" />
    <hl-table-column prop="state" label="State" width="120" />
    <hl-table-column prop="city" label="City" width="120" />
    <hl-table-column prop="address" label="Address" width="600" />
    <hl-table-column prop="zip" label="Zip" width="120" />
    <hl-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <hl-link
          type="primary"
          size="sm"
          class="m-r-sm"
          @click="handleClick"
        >
          Detail
        </hl-link>
        <hl-link type="primary" size="sm">Edit</hl-link>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
<\/script>
`},{default:d(()=>[At]),_:1},8,["demos"]),vt,wt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/fixed-all","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" height="250">
    <hl-table-column fixed prop="date" label="Date" width="150" />
    <hl-table-column prop="name" label="Name" width="120" />
    <hl-table-column prop="state" label="State" width="120" />
    <hl-table-column prop="city" label="City" width="320" />
    <hl-table-column prop="address" label="Address" width="600" />
    <hl-table-column prop="zip" label="Zip" width="120" />
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
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
]
<\/script>
`},{default:d(()=>[Ct]),_:1},8,["demos"]),Tt,Nt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/max-height","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" max-height="250">
    <hl-table-column fixed prop="date" label="Date" width="150" />
    <hl-table-column prop="name" label="Name" width="120" />
    <hl-table-column prop="state" label="State" width="120" />
    <hl-table-column prop="city" label="City" width="120" />
    <hl-table-column prop="address" label="Address" width="600" />
    <hl-table-column prop="zip" label="Zip" width="120" />
    <hl-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <hl-link
          type="primary"
          size=""
          @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </hl-link>
      </template>
    </hl-table-column>
  </hl-table>
  <hl-button
    class="m-t-sm"
    style="width: 100%"
    @click="onAddItem"
  >
    Add Item
  </hl-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
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
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
<\/script>
`},{default:d(()=>[xt]),_:1},8,["demos"]),Lt,Gt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/multi-header","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column prop="date" label="Date" width="150" />
    <hl-table-column label="Delivery Info">
      <hl-table-column prop="name" label="Name" width="120" />
      <hl-table-column label="Address Info">
        <hl-table-column prop="state" label="State" width="120" />
        <hl-table-column prop="city" label="City" width="120" />
        <hl-table-column prop="address" label="Address" />
        <hl-table-column prop="zip" label="Zip" width="120" />
      </hl-table-column>
    </hl-table-column>
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
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
]
<\/script>
`},{default:d(()=>[Dt]),_:1},8,["demos"]),zt,Ft,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/fixed-column-and-group-header","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" height="250">
    <hl-table-column prop="date" label="Date" width="150" />
    <hl-table-column prop="name" label="Name" width="150" />
    <hl-table-column prop="zip" label="Zip" width="150" />
    <hl-table-column label="Address Info" fixed="right">
      <hl-table-column prop="state" label="State" width="100" />
      <hl-table-column prop="city" label="City" width="120" />
      <hl-table-column prop="address" label="Address" width="250" />
    </hl-table-column>
  </hl-table>
</template>

<script lang="ts" setup>
const tableData = [
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
]
<\/script>
`},{default:d(()=>[kt]),_:1},8,["demos"]),$t,Et,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/highlight-current","source-code":`<template>
  <hl-table
    ref="singleTableRef"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <hl-table-column type="index" width="50" />
    <hl-table-column property="date" label="Date" width="120" />
    <hl-table-column property="name" label="Name" width="120" />
    <hl-table-column property="address" label="Address" />
  </hl-table>
  <div class="m-t-md">
    <hl-button class="m-r-sm" @click="setCurrent(tableData[1])">Select second row</hl-button>
    <hl-button @click="setCurrent()">Clear selection</hl-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { HlTable } from 'hongluan-ui'

interface User {
  date: string
  name: string
  address: string
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof HlTable>>()

const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[jt]),_:1},8,["demos"]),Ot,It,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/selection","source-code":`<template>
  <hl-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <hl-table-column type="selection" width="55" />
    <hl-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </hl-table-column>
    <hl-table-column property="name" label="Name" width="120" />
    <hl-table-column property="address" label="Address" show-overflow-tooltip />
  </hl-table>
  <div class="m-t-md">
    <hl-button class="m-r-sm" @click="toggleSelection([tableData[1], tableData[2]])">
      Toggle selection status of second and third rows
    </hl-button>
    <hl-button @click="toggleSelection()">Clear selection</hl-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { HlTable } from 'hongluan-ui'

interface User {
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<InstanceType<typeof HlTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach(row => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[Ut]),_:1},8,["demos"]),Mt,Rt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/sortable","source-code":`<template>
  <hl-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
  >
    <hl-table-column prop="date" label="Date" sortable width="180" />
    <hl-table-column prop="name" label="Name" width="180" />
    <hl-table-column prop="address" label="Address" :formatter="formatter" />
  </hl-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'hongluan-ui'

interface User {
  date: string
  name: string
  address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[Ht]),_:1},8,["demos"]),Bt,Vt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/filters","source-code":`<template>
  <hl-button class="m-r-sm" @click="resetDateFilter">reset date filter</hl-button>
  <hl-button @click="clearFilter">reset all filters</hl-button>
  <hl-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
    <hl-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
      :filter-method="filterHandler"
    />
    <hl-table-column prop="name" label="Name" width="180" />
    <hl-table-column prop="address" label="Address" :formatter="formatter" />

    <hl-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <hl-tag
          :type="scope.row.tag === 'Home' ? '' : 'success'"
          disable-transitions
        >
          {{ scope.row.tag }}
        </hl-tag>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx, TableInstance } from 'hongluan-ui'

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const tableRef = ref<TableInstance>()

const resetDateFilter = () => {
  tableRef.value!.clearFilter(['date'])
}
// TODO: improvement typing when refactor table
const clearFilter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  tableRef.value!.clearFilter()
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterHandler = (
  value: string,
  row: User,
  column: TableColumnCtx<User>,
) => {
  const property = column['property']
  return row[property] === value
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
]
<\/script>
`},{default:d(()=>[Jt]),_:1},8,["demos"]),Pt,Zt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/column-slot","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <hl-icon><TwoEdit /></hl-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </hl-table-column>
    <hl-table-column label="Name" width="180">
      <template #default="scope">
        <hl-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <hl-tag>{{ scope.row.name }}</hl-tag>
          </template>
        </hl-popover>
      </template>
    </hl-table-column>
    <hl-table-column label="Operations">
      <template #default="scope">
        <hl-button
          size="sm"
          class="m-r-sm"
          @click="handleEdit(scope.$index, scope.row)"
        >
          Edit
        </hl-button>
        <hl-button
          size="sm"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </hl-button>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script lang="ts" setup>
import { TwoEdit } from '@hongluan-ui/icons'

interface User {
  date: string
  name: string
  address: string
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[Yt]),_:1},8,["demos"]),Kt,Wt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/custom-header","source-code":`<template>
  <hl-table :data="filterTableData" style="width: 100%">
    <hl-table-column label="Date" prop="date" />
    <hl-table-column label="Name" prop="name" />
    <hl-table-column align="right">
      <template #header>
        <hl-input v-model="search" size="sm" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <hl-button
          size="sm"
          class="m-r-sm"
          @click="handleEdit(scope.$index, scope.row)"
        >
          Edit
        </hl-button>
        <hl-button
          size="sm"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </hl-button>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    data =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},null,8,["demos"]),Qt,Xt,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/expand","source-code":`<template>
  switch parent border: <hl-switch v-model="parentBorder" /> switch child
  border: <hl-switch v-model="childBorder" />
  <hl-table :data="tableData" :border="parentBorder" style="width: 100%">
    <hl-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">State: {{ props.row.state }}</p>
          <p m="t-0 b-2">City: {{ props.row.city }}</p>
          <p m="t-0 b-2">Address: {{ props.row.address }}</p>
          <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
          <h3>Family</h3>
          <hl-table :data="props.row.family" :border="childBorder">
            <hl-table-column label="Name" prop="name" />
            <hl-table-column label="State" prop="state" />
            <hl-table-column label="City" prop="city" />
            <hl-table-column label="Address" prop="address" />
            <hl-table-column label="Zip" prop="zip" />
          </hl-table>
        </div>
      </template>
    </hl-table-column>
    <hl-table-column label="Date" prop="date" />
    <hl-table-column label="Name" prop="name" />
  </hl-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const parentBorder = ref(false)
const childBorder = ref(false)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
]
<\/script>
`},{default:d(()=>[qt]),_:1},8,["demos"]),en,tn,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/tree","source-code":`<template>
  <div>
    <hl-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <hl-table-column prop="date" label="Date" sortable />
      <hl-table-column prop="name" label="Name" sortable />
      <hl-table-column prop="address" label="Address" sortable />
    </hl-table>

    <hl-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <hl-table-column prop="date" label="Date" />
      <hl-table-column prop="name" label="Name" />
      <hl-table-column prop="address" label="Address" />
    </hl-table>
  </div>
</template>
<script lang="ts" setup>
interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

const load = (
  row: User,
  treeNode: unknown,
  resolve: (data: User[]) => void,
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
  }, 1000)
}

const tableData: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const tableData1: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    hasChildren: true,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[nn]),_:1},8,["demos"]),an,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/check-strictly","source-code":`<template>
  <hl-radio-group v-model="treeProps.checkStrictly">
    <hl-radio-button :value="true" label="true" />
    <hl-radio-button :value="false" label="false" />
  </hl-radio-group>
  <hl-table
    :data="tableData"
    :tree-props="treeProps"
    row-key="id"
    default-expand-all
  >
    <hl-table-column type="selection" width="55" :selectable="selectable" />
    <hl-table-column prop="date" label="Date" />
    <hl-table-column prop="name" label="Name" />
    <hl-table-column prop="address" label="Address" />
  </hl-table>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

const treeProps = reactive({
  checkStrictly: false,
})

const selectable = (row: User) => ![1, 31].includes(row.id)

const tableData: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},{default:d(()=>[on]),_:1},8,["demos"]),ln,dn,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/summary","source-code":`<template>
  <hl-table :data="tableData" border show-summary style="width: 100%">
    <hl-table-column prop="id" label="ID" width="180" />
    <hl-table-column prop="name" label="Name" />
    <hl-table-column prop="amount1" sortable label="Amount 1" />
    <hl-table-column prop="amount2" sortable label="Amount 2" />
    <hl-table-column prop="amount3" sortable label="Amount 3" />
  </hl-table>

  <hl-table
    :data="tableData"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px"
  >
    <hl-table-column prop="id" label="ID" width="180" />
    <hl-table-column prop="name" label="Name" />
    <hl-table-column prop="amount1" label="Cost 1 ($)" />
    <hl-table-column prop="amount2" label="Cost 2 ($)" />
    <hl-table-column prop="amount3" label="Cost 3 ($)" />
  </hl-table>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import type { VNode } from 'vue'
import type { TableColumnCtx } from 'hongluan-ui'

interface Product {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SummaryMethodProps<T = Product> {
  columns: TableColumnCtx<T>[]
  data: T[]
}

const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  const sums: (string | VNode)[] = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = h('div', { style: { textDecoration: 'underline' } }, [
        'Total Cost',
      ])
      return
    }
    const values = data.map((item) => Number(item[column.property]))
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = \`$ \${values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}\`
    } else {
      sums[index] = 'N/A'
    }
  })

  return sums
}

const tableData: Product[] = [
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
]
<\/script>
`},{default:d(()=>[sn]),_:1},8,["demos"]),rn,cn,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/span-method","source-code":`<template>
  <div>
    <hl-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%"
    >
      <hl-table-column prop="id" label="ID" width="180" />
      <hl-table-column prop="name" label="Name" />
      <hl-table-column prop="amount1" sortable label="Amount 1" />
      <hl-table-column prop="amount2" sortable label="Amount 2" />
      <hl-table-column prop="amount3" sortable label="Amount 3" />
    </hl-table>

    <hl-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <hl-table-column prop="id" label="ID" width="180" />
      <hl-table-column prop="name" label="Name" />
      <hl-table-column prop="amount1" label="Amount 1" />
      <hl-table-column prop="amount2" label="Amount 2" />
      <hl-table-column prop="amount3" label="Amount 3" />
    </hl-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'hongluan-ui'

interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SpanMethodProps {
  row: User
  column: TableColumnCtx<User>
  rowIndex: number
  columnIndex: number
}

const arraySpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
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

const tableData: User[] = [
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
]
<\/script>
`},{default:d(()=>[mn]),_:1},8,["demos"]),un,pn,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/indexable","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column type="index" :index="indexMethod" />
    <hl-table-column prop="date" label="Date" width="180" />
    <hl-table-column prop="name" label="Name" width="180" />
    <hl-table-column prop="address" label="Address" />
  </hl-table>
</template>

<script lang="ts" setup>
const indexMethod = (index: number) => {
  return index * 2
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
<\/script>
`},{default:d(()=>[hn]),_:1},8,["demos"]),bn,_n,t(a,{fs:"",demos:h(r),"component-id":o,"path-name":"table/table-layout","source-code":`<template>
  <hl-radio-group v-model="tableLayout" gap="var(--sm)">
    <hl-radio label="fixed" />
    <hl-radio label="auto" />
  </hl-radio-group>
  <hl-table :data="tableData" :table-layout="tableLayout">
    <hl-table-column prop="date" label="Date" />
    <hl-table-column prop="name" label="Name" />
    <hl-table-column prop="address" label="Address" />
  </hl-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
<\/script>
`},null,8,["demos"]),gn]),t(c)],64)}}};export{vn as default};
