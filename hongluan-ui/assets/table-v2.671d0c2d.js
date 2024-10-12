var an=Object.defineProperty,ln=Object.defineProperties;var sn=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var on=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable;var X=(y,i,u)=>i in y?an(y,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):y[i]=u,f=(y,i)=>{for(var u in i||(i={}))on.call(i,u)&&X(y,u,i[u]);if(W)for(var u of W(i))rn.call(i,u)&&X(y,u,i[u]);return y},x=(y,i)=>ln(y,sn(i));import{p as C,H as b,L as $,W as E,X as d,P as S,V as h,F as k,j as L,S as w,a1 as M,R as I,al as P,ax as B,a0 as q,C as dn,Q as c,a5 as cn,ah as un,B as Y,o as Z}from"./vue.85e091e9.js";import{b as G}from"./hongluan.81067e2c.js";import{F as R,d as U,h as nn,i as Q,j as A,S as F,k as pn,l as en,m as J,o as mn}from"./index.bf23fef6.js";import{A as tn,a2 as hn,a3 as gn}from"./hongluan-icons.6cddbf05.js";import"./highlight.687c59a9.js";const _n={style:{height:"400px"}},yn=C({setup(y){const i=(o=10,a="column-",t)=>Array.from({length:o}).map((e,s)=>x(f({},t),{key:`${a}${s}`,dataKey:`${a}${s}`,title:`Column ${s}`,width:150})),u=(o,a=200,t="row-")=>Array.from({length:a}).map((e,s)=>o.reduce((n,l,r)=>(n[l.dataKey]=`Row ${s} - Col ${r}`,n),{id:`${t}${s}`,parentId:null})),p=i(10),m=u(p,200);return(o,a)=>{const t=b("hl-table-v2"),e=b("hl-auto-resizer");return $(),E("div",_n,[d(e,null,{default:S(({height:s,width:n})=>[d(t,{columns:h(p),data:h(m),width:n,height:s,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}});var fn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yn});const xn=C({setup(y){const i=(o=10,a="column-",t)=>Array.from({length:o}).map((e,s)=>x(f({},t),{key:`${a}${s}`,dataKey:`${a}${s}`,title:`Column ${s}`,width:150})),u=(o,a=200,t="row-")=>Array.from({length:a}).map((e,s)=>o.reduce((n,l,r)=>(n[l.dataKey]=`Row ${s} - Col ${r}`,n),{id:`${t}${s}`,parentId:null})),p=i(10),m=u(p,1e3);return(o,a)=>{const t=b("hl-table-v2");return $(),k(t,{columns:h(p),data:h(m),width:700,height:400,fixed:""},null,8,["columns","data"])}}});var bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xn});function wn(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!L(y)}var vn=C({setup(y){let i=0;const u=()=>({id:`random-id-${++i}`,name:"Tom",date:"2020-10-1"}),p=[{key:"date",title:"Date",dataKey:"date",width:150,fixed:R.LEFT,cellRenderer:({cellData:o})=>d(nn,{content:G(o).format("YYYY/MM/DD")},{default:()=>[d("span",{class:"flex items-center"},[d(U,{class:"m-r-sm"},{default:()=>[d(tn,null,null)]}),G(o).format("YYYY/MM/DD")])]})},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:o})=>d(Q,null,wn(o)?o:{default:()=>[o]})},{key:"operations",title:"Operations",cellRenderer:()=>d(M,null,[d(A,{size:"sm",class:"m-r-sm"},{default:()=>[w("Edit")]}),d(A,{size:"sm",type:"danger"},{default:()=>[w("Delete")]})]),width:150,align:"center"}],m=I(Array.from({length:200}).map(u));return(o,a)=>{const t=b("hl-table-v2");return $(),k(t,{columns:p,data:m.value,width:700,height:400,fixed:""},null,8,["data"])}}}),$n=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vn});const T=1,Cn=C({setup(y){const i=(a=10,t="column-",e)=>Array.from({length:a}).map((s,n)=>x(f({},e),{key:`${t}${n}`,dataKey:`${t}${n}`,title:`Column ${n}`,width:150})),u=(a,t=200,e="row-")=>Array.from({length:t}).map((s,n)=>a.reduce((l,r,g)=>(l[r.dataKey]=`Row ${n} - Col ${g}`,l),{id:`${e}${n}`,parentId:null})),p=i(10),m=u(p,200);p[T].colSpan=({rowIndex:a})=>a%4+1,p[T].align="center";const o=({rowData:a,rowIndex:t,cells:e,columns:s})=>{const n=s[T].colSpan({rowData:a,rowIndex:t});if(n>1){let l=Number.parseInt(e[T].props.style.width);for(let g=1;g<n;g++)l+=Number.parseInt(e[T+g].props.style.width),e[T+g]=null;const r=x(f({},e[T].props.style),{width:`${l}px`,backgroundColor:"var(--primary-light-3)"});e[T]=q(e[T],{style:r})}return e};return(a,t)=>{const e=b("hl-table-v2");return $(),k(e,{fixed:"",columns:h(p),data:h(m),width:700,height:400},{row:S(s=>[d(o,P(B(s)),null,16)]),_:1},8,["columns","data"])}}});var jn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cn});const In=C({setup(y){const i=(t=10,e="column-",s)=>Array.from({length:t}).map((n,l)=>x(f({},s),{key:`${e}${l}`,dataKey:`${e}${l}`,title:`Column ${l}`,width:150})),u=(t,e=200,s="row-")=>Array.from({length:e}).map((n,l)=>t.reduce((r,g,_)=>(r[g.dataKey]=`Row ${l} - Col ${_}`,r),{id:`${s}${l}`,parentId:null})),p=i(10),m=I(u(p,200));p[0].sortable=!0,p[1].sortable=!0;const o=I({"column-0":F.DESC,"column-1":F.ASC}),a=({key:t,order:e})=>{o.value[t]=e,m.value=m.value.reverse()};return(t,e)=>{const s=b("hl-table-v2");return $(),k(s,{"sort-state":o.value,"onUpdate:sort-state":e[0]||(e[0]=n=>o.value=n),columns:h(p),data:m.value,width:700,height:400,fixed:"",onColumnSort:a},null,8,["sort-state","columns","data"])}}});var Sn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:In});const kn={style:{height:"400px"}},Dn=C({setup(y){const i=(t=10,e="column-",s)=>Array.from({length:t}).map((n,l)=>x(f({},s),{key:`${e}${l}`,dataKey:`${e}${l}`,title:`Column ${l}`,width:150})),u=(t,e=200,s="row-")=>Array.from({length:e}).map((n,l)=>t.reduce((r,g,_)=>(r[g.dataKey]=`Row ${l} - Col ${_}`,r),{id:`${s}${l}`,parentId:null})),p=i(10);p.unshift({key:"column-n-1",width:50,title:"Row No.",cellRenderer:({rowIndex:t})=>`${t+1}`,align:"center"});const m=u(p,200),o=({columnIndex:t})=>{const e=`hovering-col-${t}`;return{["data-key"]:e,onMouseenter:()=>{a.value=e},onMouseleave:()=>{a.value=""}}},a=I("");return(t,e)=>{const s=b("hl-table-v2"),n=b("hl-auto-resizer");return $(),E("div",kn,[d(n,null,{default:S(({height:l,width:r})=>[d(s,{columns:h(p),"cell-props":o,class:dn(a.value),data:h(m),width:r,height:l},null,8,["columns","class","data","width","height"])]),_:1})])}}});var Rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dn});const Tn=`Velit sed aspernatur tempora. Natus consequatur officiis dicta vel assumenda.
Itaque est temporibus minus quis. Ipsum commodiab porro vel voluptas illum.
Qui quam nulla et dolore autem itaque est.
Id consequatur ipsum ea fuga et odit eligendi impedit.
Maiores officiis occaecati et magnam et sapiente est velit sunt.
Non et tempore temporibus. Excepturi et quos. Minus distinctio aut.
Voluptatem ea excepturi omnis vel. Non aperiam sit sed laboriosam eaque omnis deleniti.
Est molestiae omnis non et nulla repudiandae fuga sit.`;var Kn=C({setup(y){const i=(a=10,t="column-",e)=>Array.from({length:a}).map((s,n)=>x(f({},e),{key:`${t}${n}`,dataKey:`${t}${n}`,title:`Column ${n}`,width:150})),u=(a,t=200,e="row-")=>Array.from({length:t}).map((s,n)=>a.reduce((l,r,g)=>(l[r.dataKey]=`Row ${n} - Col ${g}`,l),{id:`${e}${n}`,parentId:null})),p=i(10),m=I(u(p,200).map(a=>(a.children=[{id:`${a.id}-detail-content`,detail:Tn}],a))),o=({cells:a,rowData:t})=>t.detail?d("div",{class:"p-6"},[t.detail]):a;return o.inheritAttrs=!1,(a,t)=>{const e=b("hl-table-v2");return $(),k(e,{columns:h(p),data:m.value,"estimated-row-height":50,"expand-column-key":h(p)[0].key,width:700,height:400},{row:S(s=>[d(o,P(B(s)),null,16)]),_:1},8,["columns","data","expand-column-key"])}}});var An=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kn});function Hn(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!L(y)}const zn="Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.",En="Corrupti doloremque a quos vero delectus consequatur.",Vn="Eius optio fugiat.";var Fn=C({setup(y){const i=[Vn,En,zn];let u=0;const p=()=>({id:`random:${++u}`,name:"Tom",date:"2016-05-03",description:i[Math.floor(Math.random()*3)]}),m=[{key:"id",title:"Id",dataKey:"id",width:150,sortable:!0,fixed:R.LEFT},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:e})=>d(Q,null,Hn(e)?e:{default:()=>[e]})},{key:"description",title:"Description",dataKey:"description",width:150,cellRenderer:({cellData:e})=>d("div",{style:"padding: 10px 0;"},[e])},{key:"operations",title:"Operations",cellRenderer:()=>d(M,null,[d(A,{size:"sm",class:"m-r-sm"},{default:()=>[w("Edit")]}),d(A,{size:"sm",type:"danger"},{default:()=>[w("Delete")]})]),width:150,align:"center"}],o=I(Array.from({length:200}).map(p).sort((e,s)=>e.name>s.name?1:-1)),a=I({key:"name",order:F.ASC}),t=e=>{const s=e.order==="asc"?1:-1,n=[...o.value];n.sort((l,r)=>l[e.key]>r[e.key]?s:-s),a.value=e,o.value=n};return(e,s)=>{const n=b("hl-table-v2");return $(),k(n,{columns:m,data:o.value,"sort-by":a.value,"estimated-row-height":40,width:700,height:400,fixed:"",onColumnSort:t},null,8,["data","sort-by"])}}}),Mn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fn});const Pn=c("div",{class:"flex items-center justify-center h-100%"}," \u6682\u65E0\u6570\u636E\u54E6\u54E6\u54E6 ",-1);var Bn=C({setup(y){const u=((p=10,m="column-",o)=>Array.from({length:p}).map((a,t)=>x(f({},o),{key:`${m}${t}`,dataKey:`${m}${t}`,title:`Column ${t}`,width:150})))(10);return(p,m)=>{const o=b("hl-table-v2");return $(),k(o,{columns:h(u),data:[],"row-height":40,width:700,height:400,"footer-height":50},{empty:S(()=>[Pn]),_:1},8,["columns"])}}}),On=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bn}),Nn=C({setup(y){const i=(n=10,l="column-",r)=>Array.from({length:n}).map((g,_)=>x(f({},r),{key:`${l}${_}`,dataKey:`${l}${_}`,title:`Column ${_}`,width:150})),u=(n,l=200,r="row-")=>Array.from({length:l}).map((g,_)=>n.reduce((v,D,j)=>(v[D.dataKey]=`Row ${_} - Col ${j}`,v),{id:`${r}${_}`,parentId:null})),p=i(10),m=I(u(p,200)),o=I(!1),a=I(),t=()=>{a.value.hide(),console.log("shouldFilter.value",o.value),o.value?m.value=u(p,100,"filtered-"):m.value=u(p,200)},e=()=>{o.value=!1,t()};p[0].headerCellRenderer=n=>d("div",{class:"flex items-center justify-center"},[d("span",{class:"m-r-xs font-sm"},[n.column.title]),d(pn,cn({ref:a,trigger:"click"},{width:200}),{default:()=>d("div",{class:"filter-wrapper"},[d("div",{class:"filter-group"},[d(en,{modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},{default:()=>[w("Filter Text")]})]),d("div",{class:"table-v2-demo-filter"},[d(A,{text:!0,onClick:t},{default:()=>[w("Confirm")]}),d(A,{text:!0,onClick:e},{default:()=>[w("Reset")]})])]),reference:()=>d(U,{class:"cursor-pointer",size:"sm"},{default:()=>[d(hn,null,null)]})})]);const s=p.map((n,l)=>{let r;return l<2&&(r=R.LEFT),l>9&&(r=R.RIGHT),x(f({},n),{fixed:r,width:100})});return(n,l)=>{const r=b("hl-table-v2");return $(),k(r,{fixed:"",columns:h(s),data:m.value,width:700,height:400},null,8,["columns","data"])}}});var qn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nn});const Gn=C({setup(y){const i=(t=10,e="column-",s)=>Array.from({length:t}).map((n,l)=>x(f({},s),{key:`${e}${l}`,dataKey:`${e}${l}`,title:`Column ${l}`,width:150})),u=(t,e=200,s="row-")=>Array.from({length:e}).map((n,l)=>t.reduce((r,g,_)=>(r[g.dataKey]=`Row ${l} - Col ${_}`,r),{id:`${s}${l}`,parentId:null})),p=i(10);let m=u(p,200);p[0].fixed=!0,p[1].fixed=R.LEFT,p[9].fixed=R.RIGHT;for(let t=0;t<3;t++)p[t].sortable=!0;const o=I({key:"column-0",order:F.ASC}),a=t=>{m=m.reverse(),o.value=t};return(t,e)=>{const s=b("hl-table-v2");return $(),k(s,{columns:h(p),data:h(m),"sort-by":o.value,width:700,height:400,fixed:"",onColumnSort:a},null,8,["columns","data","sort-by"])}}});var Yn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gn});const Ln=c("div",{class:"flex items-center",style:{"justify-content":"center",height:"100%","background-color":"var(--el-color-primary-light-7)"}}," Display a message in the footer ",-1),Un=C({setup(y){const i=(o=10,a="column-",t)=>Array.from({length:o}).map((e,s)=>x(f({},t),{key:`${a}${s}`,dataKey:`${a}${s}`,title:`Column ${s}`,width:150})),u=(o,a=200,t="row-")=>Array.from({length:a}).map((e,s)=>o.reduce((n,l,r)=>(n[l.dataKey]=`Row ${s} - Col ${r}`,n),{id:`${t}${s}`,parentId:null})),p=i(10),m=u(p,200);return(o,a)=>{const t=b("hl-table-v2");return $(),k(t,{columns:h(p),data:h(m),"row-height":40,width:700,height:400,"footer-height":50,fixed:""},{footer:S(()=>[Ln]),_:1},8,["columns","data"])}}});var Qn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Un}),Wn=C({setup(y){const i=(e=10,s="column-",n)=>Array.from({length:e}).map((l,r)=>x(f({},n),{key:`${s}${r}`,dataKey:`${s}${r}`,title:`Column ${r}`,width:150})),u=(e,s=200,n="row-")=>Array.from({length:s}).map((l,r)=>e.reduce((g,_,v)=>(g[_.dataKey]=`Row ${r} - Col ${v}`,g),{id:`${n}${r}`,parentId:null})),p=i(15),m=u(p,200),o=p.map((e,s)=>{let n;return s<3&&(n=R.LEFT),s>12&&(n=R.RIGHT),x(f({},e),{fixed:n,width:100})}),a=({cells:e,columns:s,headerIndex:n})=>{if(n===2)return e;const l=[];let r=0,g=0;return s.forEach((_,v)=>{if(_.placeholderSign===J)l.push(e[v]);else{r+=e[v].props.column.width,g++;const D=s[v+1];(v===s.length-1||D.placeholderSign===J||g===(n===0?4:2))&&(l.push(d("div",{class:"flex items-center justify-center custom-header-cell",role:"columnheader",style:x(f({},e[v].props.style),{width:`${r}px`})},[w("Group width "),r])),r=0,g=0)}}),l},t=({headerIndex:e})=>e===1?"primary-color":"";return(e,s)=>{const n=b("hl-table-v2");return $(),k(n,{fixed:"",columns:h(o),data:h(m),"header-height":[50,40,50],"header-class":t,width:700,height:400},{header:S(l=>[d(a,P(B(l)),null,16)]),_:1},8,["columns","data"])}}});var Xn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wn});const Jn={style:{height:"400px"}};var Zn=C({setup(y){const i=({value:a,onChange:t,onBlur:e,onKeydownEnter:s,forwardRef:n})=>d(mn,{ref:n,onInput:t,onBlur:e,onKeydown:un(s,["enter"]),modelValue:a},null),u=(a=10,t="column-",e)=>Array.from({length:a}).map((s,n)=>x(f({},e),{key:`${t}${n}`,dataKey:`${t}${n}`,title:`Column ${n}`,width:150})),p=(a,t=200,e="row-")=>Array.from({length:t}).map((s,n)=>a.reduce((l,r,g)=>(l[r.dataKey]=`Row ${n} - Col ${g}`,l),{id:`${e}${n}`,editing:!1,parentId:null})),m=u(10);m[0]=x(f({},m[0]),{title:"Editable Column",cellRenderer:({rowData:a,column:t})=>{const e=g=>{a[t.dataKey]=g},s=()=>{a.editing=!0},n=()=>a.editing=!1,l=I(),r=g=>{var _;l.value=g,g&&((_=g.focus)==null||_.call(g))};return a.editing?d(i,{forwardRef:r,value:a[t.dataKey],onChange:e,onBlur:n,onKeydownEnter:n},null):d("div",{class:"table-v2-inline-editing-trigger",onClick:s},[a[t.dataKey]])}});const o=I(p(m,200));return(a,t)=>{const e=b("hl-table-v2"),s=b("hl-auto-resizer");return $(),E("div",Jn,[d(s,null,{default:S(({height:n,width:l})=>[d(e,{columns:h(m),data:o.value,width:l,height:n,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}});var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zn});const ee={class:"m-b-sm flex items-center"},te={class:"m-b-sm flex items-center"},ae=w(" Scroll by pixels "),le=w(" Scroll by rows "),se={style:{height:"400px"}},oe=C({setup(y){const i=(n=10,l="column-",r)=>Array.from({length:n}).map((g,_)=>x(f({},r),{key:`${l}${_}`,dataKey:`${l}${_}`,title:`Column ${_}`,width:150})),u=(n,l=200,r="row-")=>Array.from({length:l}).map((g,_)=>n.reduce((v,D,j)=>(v[D.dataKey]=`Row ${_} - Col ${j}`,v),{id:`${r}${_}`,parentId:null})),p=i(10),m=u(p,200),o=I(),a=I(200),t=I(10);function e(){var n;(n=o.value)==null||n.scrollToTop(a.value)}function s(){var n;(n=o.value)==null||n.scrollToRow(t.value)}return(n,l)=>{const r=b("hl-input"),g=b("hl-form-item"),_=b("hl-button"),v=b("hl-table-v2"),D=b("hl-auto-resizer");return $(),E(M,null,[c("div",ee,[d(g,{label:"Scroll pixels",class:"mr-4"},{default:S(()=>[d(r,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=j=>a.value=j)},null,8,["modelValue"])]),_:1}),d(g,{label:"Scroll rows"},{default:S(()=>[d(r,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=j=>t.value=j)},null,8,["modelValue"])]),_:1})]),c("div",te,[d(_,{class:"m-r-sm",onClick:e},{default:S(()=>[ae]),_:1}),d(_,{onClick:s},{default:S(()=>[le]),_:1})]),c("div",se,[d(D,null,{default:S(({height:j,width:H})=>[d(v,{ref_key:"tableRef",ref:o,columns:h(p),data:h(m),width:H,height:j,fixed:""},null,8,["columns","data","width","height"])]),_:1})])],64)}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});const de={class:"hl-loading-mask",style:{display:"flex","align-items":"center","justify-content":"center"}},ce=C({setup(y){const i=(o=10,a="column-",t)=>Array.from({length:o}).map((e,s)=>x(f({},t),{key:`${a}${s}`,dataKey:`${a}${s}`,title:`Column ${s}`,width:150})),u=(o,a=200,t="row-")=>Array.from({length:a}).map((e,s)=>o.reduce((n,l,r)=>(n[l.dataKey]=`Row ${s} - Col ${r}`,n),{id:`${t}${s}`,parentId:null})),p=i(10),m=u(p,200);return(o,a)=>{const t=b("hl-icon"),e=b("hl-table-v2");return $(),k(e,{columns:h(p),data:h(m),"row-height":40,width:700,height:400},{overlay:S(()=>[c("div",de,[d(t,{class:"is-loading",color:"var(--primary)",size:"xl"},{default:S(()=>[d(h(gn))]),_:1})])]),_:1},8,["columns","data"])}}});var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce});function ue(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!L(y)}var pe=C({setup(y){let i=0;const u=()=>({id:`random-id-${++i}`,name:"Tom",date:"2020-10-1"}),p=[{key:"date",title:"Date",dataKey:"date",width:150,fixed:R.LEFT,cellRenderer:({cellData:a})=>d(nn,{content:G(a).format("YYYY/MM/DD")},{default:()=>[d("span",{class:"flex items-center"},[d(U,{class:"mr-3"},{default:()=>[d(tn,null,null)]}),G(a).format("YYYY/MM/DD")])]})},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:a})=>d(Q,null,ue(a)?a:{default:()=>[a]})},{key:"operations",title:"Operations",cellRenderer:()=>d(M,null,[d(A,{size:"sm",class:"m-r-sm"},{default:()=>[w("Edit")]}),d(A,{size:"sm",type:"danger"},{default:()=>[w("Delete")]})]),width:150,align:"center",flexGrow:1}],m=I(Array.from({length:200}).map(u)),o=({rowIndex:a})=>a%10===5?"bg-red-100":a%10===0?"bg-blue-200":"";return(a,t)=>{const e=b("hl-table-v2");return $(),k(e,{columns:p,data:m.value,"row-class":o,width:700,height:400},null,8,["data"])}}}),me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});const O=0,he=C({setup(y){const i=(a=10,t="column-",e)=>Array.from({length:a}).map((s,n)=>x(f({},e),{key:`${t}${n}`,dataKey:`${t}${n}`,title:`Column ${n}`,width:150})),u=(a,t=200,e="row-")=>Array.from({length:t}).map((s,n)=>a.reduce((l,r,g)=>(l[r.dataKey]=`Row ${n} - Col ${g}`,l),{id:`${e}${n}`,parentId:null})),p=i(10),m=u(p,200);p[O].rowSpan=({rowIndex:a})=>a%2===0&&a<=m.length-2?2:1;const o=({rowData:a,rowIndex:t,cells:e,columns:s})=>{const n=s[O].rowSpan({rowData:a,rowIndex:t});if(n>1){const l=e[O],r=x(f({},l.props.style),{backgroundColor:"var(--primary-light-3)",height:`${n*50-1}px`,alignSelf:"flex-start",zIndex:1});e[O]=q(l,{style:r})}return e};return(a,t)=>{const e=b("hl-table-v2");return $(),k(e,{fixed:"",columns:h(p),data:h(m),width:700,height:400},{row:S(s=>[d(o,P(B(s)),null,16)]),_:1},8,["columns","data"])}}});var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he});const _e={style:{height:"400px"}};var ye=C({setup(y){const i=({value:a,intermediate:t=!1,onChange:e})=>d(en,{onChange:e,modelValue:a,indeterminate:t},null),u=(a=10,t="column-",e)=>Array.from({length:a}).map((s,n)=>x(f({},e),{key:`${t}${n}`,dataKey:`${t}${n}`,title:`Column ${n}`,width:150})),p=(a,t=200,e="row-")=>Array.from({length:t}).map((s,n)=>a.reduce((l,r,g)=>(l[r.dataKey]=`Row ${n} - Col ${g}`,l),{id:`${e}${n}`,checked:!1,parentId:null})),m=u(10);m.unshift({key:"selection",width:50,cellRenderer:({rowData:a})=>{const t=e=>a.checked=e;return d(i,{value:a.checked,onChange:t},null)},headerCellRenderer:()=>{const a=h(o),t=n=>o.value=a.map(l=>(l.checked=n,l)),e=a.every(n=>n.checked),s=a.some(n=>n.checked);return d(i,{value:e,intermediate:s&&!e,onChange:t},null)}});const o=I(p(m,200));return(a,t)=>{const e=b("hl-table-v2"),s=b("hl-auto-resizer");return $(),E("div",_e,[d(s,null,{default:S(({height:n,width:l})=>[d(e,{columns:h(m),data:o.value,width:l,height:n,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}}),fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const xe=C({setup(y){const i=(t=10,e="column-",s)=>Array.from({length:t}).map((n,l)=>x(f({},s),{key:`${e}${l}`,dataKey:`${e}${l}`,title:`Column ${l}`,width:150})),u=(t,e=200,s="row-")=>Array.from({length:e}).map((n,l)=>t.reduce((r,g,_)=>(r[g.dataKey]=`Row ${l} - Col ${_}`,r),{id:`${s}${l}`,parentId:null})),p=i(10);let m=u(p,200);p[0].sortable=!0;const o=I({key:"column-0",order:F.ASC}),a=t=>{console.log(t),m=m.reverse(),o.value=t};return(t,e)=>{const s=b("hl-table-v2");return $(),k(s,{columns:h(p),data:h(m),"sort-by":o.value,width:700,height:400,fixed:"",onColumnSort:a},null,8,["columns","data","sort-by"])}}});var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const K=1,z=0;var we=C({setup(y){const i=(a=10,t="column-",e)=>Array.from({length:a}).map((s,n)=>x(f({},e),{key:`${t}${n}`,dataKey:`${t}${n}`,title:`Column ${n}`,width:150})),u=(a,t=200,e="row-")=>Array.from({length:t}).map((s,n)=>a.reduce((l,r,g)=>(l[r.dataKey]=`Row ${n} - Col ${g}`,l),{id:`${e}${n}`,parentId:null})),p=i(10),m=u(p,200);p[K].colSpan=({rowIndex:a})=>a%4+1,p[K].align="center",p[z].rowSpan=({rowIndex:a})=>a%2===0&&a<=m.length-2?2:1;const o=({rowData:a,rowIndex:t,cells:e,columns:s})=>{const n=s[K].colSpan({rowData:a,rowIndex:t});if(n>1){let r=Number.parseInt(e[K].props.style.width);for(let _=1;_<n;_++)r+=Number.parseInt(e[K+_].props.style.width),e[K+_]=null;const g=x(f({},e[K].props.style),{width:`${r}px`,backgroundColor:"var(--primary-light-3)"});e[K]=q(e[K],{style:g})}const l=s[z].rowSpan({rowData:a,rowIndex:t});if(l>1){const r=e[z],g=x(f({},r.props.style),{backgroundColor:"var(--danger-light-3)",height:`${l*50}px`,alignSelf:"flex-start",zIndex:1});e[z]=q(r,{style:g})}else{const r=e[z].props.style;e[z]=d("div",{style:x(f({},r),{width:`${r.width}px`})},null)}return e};return(a,t)=>{const e=b("hl-table-v2");return $(),k(e,{fixed:"",columns:h(p),data:h(m),width:700,height:400},{row:S(s=>[d(o,P(B(s)),null,16)]),_:1},8,["columns","data"])}}}),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we});const $e=C({setup(y){const i=(n=10,l="column-",r)=>Array.from({length:n}).map((g,_)=>x(f({},r),{key:`${l}${_}`,dataKey:`${l}${_}`,title:`Column ${_}`,width:150})),u=(n,l=200,r="row-")=>Array.from({length:l}).map((g,_)=>n.reduce((v,D,j)=>(v[D.dataKey]=`Row ${_} - Col ${j}`,v),{id:`${r}${_}`,parentId:null})),p=i(10),m=u(p,200),o=({rowIndex:n})=>{if(n<0||(n+1)%5===0)return"sticky-row"},a=I(0),t=Y(()=>m.slice(a.value,a.value+1)),e=Y(()=>m.slice(1)),s=({scrollTop:n})=>{a.value=Math.floor(n/250)*5};return(n,l)=>{const r=b("hl-table-v2");return $(),k(r,{columns:h(p),data:h(e),"fixed-data":h(t),width:700,height:400,"row-class":o,fixed:"",onScroll:s},null,8,["columns","data","fixed-data"])}}});var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const N="column-0",je=C({setup(y){const i=(n=10,l="column-",r)=>Array.from({length:n}).map((g,_)=>x(f({},r),{key:`${l}${_}`,dataKey:`${l}${_}`,title:`Column ${_}`,width:150})),u=(n,l=200,r="row-")=>Array.from({length:l}).map((g,_)=>n.reduce((v,D,j)=>(v[D.dataKey]=`Row ${_} - Col ${j}`,v),{id:`${r}${_}`,parentId:null})),p=i(10).map((n,l)=>{let r;return l<2&&(r=R.LEFT),l>8&&(r=R.RIGHT),x(f({},n),{fixed:r})}),m=u(p,200);for(let n=0;n<50;n++)m.push(x(f({},m[0]),{id:`${m[0].id}-sub-${n}`,parentId:m[0].id,[N]:`Sub ${n}`}),x(f({},m[2]),{id:`${m[2].id}-sub-${n}`,parentId:m[2].id,[N]:`Sub ${n}`}),x(f({},m[2]),{id:`${m[2].id}-sub-sub-${n}`,parentId:`${m[2].id}-sub-${n}`,[N]:`Sub-Sub ${n}`}));function o(n,l=null,r="id",g="parentId"){const _=[],v={};for(const D of n){const j=f({},D),H=j[r],V=j[g];Array.isArray(j.children)?v[H]=j.children.concat(v[H]||[]):v[H]||(v[H]=[]),j.children=v[H],V!==void 0&&V!==l?(v[V]||(v[V]=[]),v[V].push(j)):_.push(j)}return _}const a=Y(()=>o(m)),t=I([]),e=({expanded:n})=>{console.log("Expanded:",n)},s=n=>{console.log(n)};return(n,l)=>{const r=b("hl-table-v2");return $(),k(r,{"expanded-row-keys":t.value,"onUpdate:expanded-row-keys":l[0]||(l[0]=g=>t.value=g),columns:h(p),data:h(a),width:700,"expand-column-key":N,height:400,fixed:"",onRowExpand:e,onExpandedRowsChange:s},null,8,["expanded-row-keys","columns","data"])}}});var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:je});const Se=Z('<h1>Virtualized Table \u865A\u62DF\u5316\u8868\u683C beta</h1><p>\u5728\u524D\u7AEF\u5F00\u53D1\u9886\u57DF\uFF0C\u8868\u683C\u4E00\u76F4\u90FD\u662F\u4E00\u4E2A\u9AD8\u9891\u51FA\u73B0\u7684\u7EC4\u4EF6\uFF0C\u5C24\u5176\u662F\u5728\u4E2D\u540E\u53F0\u548C\u6570\u636E\u5206\u6790\u573A\u666F\u3002 \u4F46\u662F\uFF0C\u5BF9\u4E8E Table V1\u6765\u8BF4\uFF0C\u5F53\u4E00\u5C4F\u91CC\u8D85\u8FC7 1000 \u6761\u6570\u636E\u8BB0\u5F55\u65F6\uFF0C\u5C31\u4F1A\u51FA\u73B0\u5361\u987F\u7B49\u6027\u80FD\u95EE\u9898\uFF0C\u4F53\u9A8C\u4E0D\u662F\u5F88\u597D\u3002</p><p>\u901A\u8FC7\u865A\u62DF\u5316\u8868\u683C\u7EC4\u4EF6\uFF0C\u8D85\u5927\u6570\u636E\u6E32\u67D3\u5C06\u4E0D\u518D\u662F\u4E00\u4E2A\u5934\u75BC\u7684\u95EE\u9898\u3002</p><div class="doc-tip"><p>\u8BE5\u7EC4\u4EF6\u4ECD\u5728\u6D4B\u8BD5\u4E2D\uFF0C\u751F\u4EA7\u73AF\u5883\u4F7F\u7528\u53EF\u80FD\u6709\u98CE\u9669\u3002 \u82E5\u60A8\u53D1\u73B0\u4E86 bug \u6216\u95EE\u9898\uFF0C\u8BF7\u4E8E GitHub \u62A5\u544A\u7ED9\u6211\u4EEC\u4EE5\u4FBF\u4FEE\u590D\u3002 \u540C\u65F6\uFF0C\u6709\u4E00\u4E9B API \u5E76\u672A\u5728\u6B64\u6587\u6863\u4E2D\u63D0\u53CA\uFF0C\u56E0\u4E3A\u90E8\u5206\u8FD8\u6CA1\u6709\u5F00\u53D1\u5B8C\u5168\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E0D\u5728\u6B64\u63D0\u53CA\u3002</p><p>\u5373\u4F7F\u865A\u62DF\u5316\u7684\u8868\u683C\u662F\u9AD8\u6548\u7684\uFF0C\u4F46\u662F\u5F53\u6570\u636E\u8D1F\u8F7D\u8FC7\u5927\u65F6\uFF0C\u7F51\u7EDC\u548C\u5185\u5B58\u5BB9\u91CF\u4E5F\u4F1A\u6210\u4E3A\u60A8\u5E94\u7528\u7A0B\u5E8F\u7684\u74F6\u9888\u3002 \u56E0\u6B64\u8BF7\u7262\u8BB0\uFF0C\u865A\u62DF\u5316\u8868\u683C\u6C38\u8FDC\u4E0D\u662F\u6700\u5B8C\u7F8E\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u8BF7\u8003\u8651\u6570\u636E\u5206\u9875\u3001\u8FC7\u6EE4\u5668\u7B49\u4F18\u5316\u65B9\u6848\u3002</p></div><div class="doc-tip"><p>\u5728 SSR \u573A\u666F\u4E0B\uFF0C\u60A8\u9700\u8981\u5C06\u7EC4\u4EF6\u5305\u88F9\u5728 <code>&lt;client-only&gt;&lt;/client-only&gt;</code> \u4E4B\u4E2D (\u5982: Nuxt) \u548C SSG (\u4F8B\u5982: VitePress).</p></div><h2 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa"></a> \u57FA\u7840\u7528\u6CD5</h2><p>\u8BA9\u6211\u4EEC\u6F14\u793A\u865A\u62DF\u5316\u8868\u7684\u6027\u80FD\uFF0C\u752810\u5217\u548C1 000\u884C\u6E32\u67D3\u4E00\u4E2A\u57FA\u672C\u793A\u4F8B\u3002</p>',7),ke=c("h2",{id:"zi-dong-diao-zheng-da-xiao"},[c("a",{class:"header-anchor",href:"#zi-dong-diao-zheng-da-xiao"}),w(" \u81EA\u52A8\u8C03\u6574\u5927\u5C0F")],-1),De=c("p",null,"\u5982\u679C\u4E0D\u60F3\u624B\u52A8\u5411\u8868\u683C\u4F20\u9012 width \u548C height \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528 AutoResizer \u5BF9\u8868\u683C\u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5\u3002 \u8FD9\u4F1A\u81EA\u52A8\u4E3A\u4F60\u66F4\u65B0\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002",-1),Re=c("p",null,"\u5C1D\u8BD5\u8C03\u6574\u60A8\u7684\u6D4F\u89C8\u5668\u5927\u5C0F\u6765\u770B\u770B\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002",-1),Te=c("div",{class:"doc-tip"},[c("p",null,"\u7531\u4E8E AutoResizer \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u9AD8\u5EA6\u662F 100%\uFF0C\u6240\u4EE5\u8BF7\u786E\u4FDD\u8BE5\u7EC4\u4EF6\u7684\u7236\u5143\u7D20\u62E5\u6709\u56FA\u5B9A\u7684\u9AD8\u5EA6\u503C\u3002 \u6216\u8005\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u5C06 style \u5C5E\u6027\u4F20\u9012\u5230 AutoResizer \u6765\u5B9A\u4E49\u5B83\u3002")],-1),Ke=c("h2",{id:"zi-ding-yi-dan-yuan-ge-xuan-ran-qi"},[c("a",{class:"header-anchor",href:"#zi-ding-yi-dan-yuan-ge-xuan-ran-qi"}),w(" \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3\u5668")],-1),Ae=c("p",null,"\u5F53\u7136\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u60A8\u7684\u9700\u8981\u5448\u73B0\u8868\u683C\u5355\u5143\u683C\u3002 \u8FD9\u662F\u5982\u4F55\u81EA\u5B9A\u4E49\u60A8\u7684\u5355\u5143\u683C\u7684\u7B80\u5355\u4F8B\u5B50\u3002",-1),He=c("h2",{id:"dai-you-xuan-ze-de-biao-ge"},[c("a",{class:"header-anchor",href:"#dai-you-xuan-ze-de-biao-ge"}),w(" \u5E26\u6709\u9009\u62E9\u7684\u8868\u683C")],-1),ze=c("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5355\u5143\u683C\u6E32\u67D3\u6765\u7ED9\u8868\u683C\u7EC4\u4EF6\u6DFB\u52A0\u9009\u62E9\u7684\u80FD\u529B\u3002",-1),Ee=c("h2",{id:"ke-bian-ji-dan-yuan-ge"},[c("a",{class:"header-anchor",href:"#ke-bian-ji-dan-yuan-ge"}),w(" \u53EF\u7F16\u8F91\u5355\u5143\u683C")],-1),Ve=c("p",null,"\u7C7B\u4F3C\u4E0A\u9762\u6DFB\u52A0\u7B5B\u9009\u6846\u7684\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u540C\u6837\u7684\u65B9\u6CD5\u5B9E\u73B0\u53EF\u7F16\u8F91\u5355\u5143\u683C\u3002",-1),Fe=c("h2",{id:"dai-zhuang-tai-de-biao-ge"},[c("a",{class:"header-anchor",href:"#dai-zhuang-tai-de-biao-ge"}),w(" \u5E26\u72B6\u6001\u7684\u8868\u683C")],-1),Me=c("p",null,"\u53EF\u5C06\u8868\u683C\u5185\u5BB9 highlight \u663E\u793A\uFF0C\u65B9\u4FBF\u533A\u5206\u300C\u6210\u529F\u3001\u4FE1\u606F\u3001\u8B66\u544A\u3001\u5371\u9669\u300D\u7B49\u5185\u5BB9\u3002",-1),Pe=c("p",null,"\u8981\u81EA\u5B9A\u4E49\u884C\u7684\u5916\u89C2\uFF0C\u8BF7\u4F7F\u7528 row-class-name \u5C5E\u6027\u3002 \u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BCF10\u884C\u4F1A\u81EA\u52A8\u6DFB\u52A0 bg-blue-200 \u7C7B\u540D\uFF0C\u6BCF5\u884C\u4F1A\u6DFB\u52A0 bg-red-100 \u7C7B\u540D\u3002",-1),Be=c("h2",{id:"biao-ge-xing-de-nian-xing-bu-ju"},[c("a",{class:"header-anchor",href:"#biao-ge-xing-de-nian-xing-bu-ju"}),w(" \u8868\u683C\u884C\u7684\u7C98\u6027\u5E03\u5C40")],-1),Oe=c("p",null,"\u60A8\u53EF\u4EE5\u7B80\u5355\u5730\u4F7F\u7528 fixed-data \u5C5E\u6027\u6765\u5B9E\u73B0\u5C06\u67D0\u4E9B\u884C\u56FA\u5B9A\u5230\u8868\u683C\u7684\u5934\u90E8\u3002",-1),Ne=c("p",null,"\u60A8\u53EF\u4EE5\u6839\u636E\u6EDA\u52A8\u4E8B\u4EF6\u52A8\u6001\u8BBE\u7F6E\u7C98\u6027\u884C\uFF0C\u5982\u8FD9\u4E2A\u793A\u4F8B\u6240\u793A\u3002",-1),qe=c("h2",{id:"gu-ding-lie-biao-ge"},[c("a",{class:"header-anchor",href:"#gu-ding-lie-biao-ge"}),w(" \u56FA\u5B9A\u5217\u8868\u683C")],-1),Ge=c("p",null,"\u5982\u679C\u60A8\u60F3\u8981\u6709\u5217\u7C98\u8D34\u5DE6\u4FA7\u6216\u53F3\u4FA7\u7684\u67D0\u79CD\u539F\u56E0\u3002 \u60A8\u53EF\u4EE5\u901A\u8FC7\u5411\u8868\u4E2D\u6DFB\u52A0\u7279\u6B8A\u5C5E\u6027\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002",-1),Ye=c("p",null,"\u60A8\u53EF\u4EE5\u8BBE\u7F6E\u8BE5\u884C\u7684 fixed \u5C5E\u6027\u4E3A true \uFF08\u4EE3\u8868FixedDir.LEFT\uFF09\u3001FixedDir.LEFT \u6216 FixedDir.RIGHT",-1),Le=c("h2",{id:"biao-tou-fen-zu"},[c("a",{class:"header-anchor",href:"#biao-tou-fen-zu"}),w(" \u8868\u5934\u5206\u7EC4")],-1),Ue=c("p",null,"\u6B63\u5982\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49\u8868\u5934\u6E32\u67D3\u4EE5\u5C06\u8868\u5934\u5206\u7EC4\u3002",-1),Qe=c("div",{class:"doc-tip"},[c("p",null,"\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 JSX \u529F\u80FD\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5728playground\u4E0A\u4E0D\u88AB\u652F\u6301\u3002 \u60A8\u53EF\u4EE5\u5728\u672C\u5730\u73AF\u5883\u6216\u5728\u7EBF\u96C6\u6210\u5F00\u53D1\u73AF\u5883\uFF08\u5982 codesandbox \uFF09\u4E2D\u8BD5\u7528\u5B83\u4EEC\u3002"),c("p",null,"\u5EFA\u8BAE\u60A8\u4F7F\u7528 JSX \u4F7F\u7528\u60A8\u7684\u8868\u683C\u7EC4\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u5305\u542B VNode \u64CD\u4F5C\u3002")],-1),We=c("h2",{id:"guo-lu-qi"},[c("a",{class:"header-anchor",href:"#guo-lu-qi"}),w(" \u8FC7\u6EE4\u5668")],-1),Xe=c("p",null,"\u865A\u62DF\u8868\u683C\u63D0\u4F9B\u81EA\u5B9A\u4E49\u9875\u7709\u6E32\u67D3\u5668\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u6807\u9898\u3002 \u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E9B\u6765\u6E32\u67D3\u8FC7\u6EE4\u5668\u3002",-1),Je=c("h2",{id:"ke-pai-xu-biao-ge"},[c("a",{class:"header-anchor",href:"#ke-pai-xu-biao-ge"}),w(" \u53EF\u6392\u5E8F\u8868\u683C")],-1),Ze=c("p",null,"\u60A8\u53EF\u4EE5\u4F7F\u7528\u6392\u5E8F\u72B6\u6001\u6765\u5BF9\u8868\u683C\u8FDB\u884C\u6392\u5E8F\u3002",-1),nt=c("h2",{id:"shou-kong-de-pai-xu"},[c("a",{class:"header-anchor",href:"#shou-kong-de-pai-xu"}),w(" \u53D7\u63A7\u7684\u6392\u5E8F")],-1),et=c("p",null,"\u60A8\u53EF\u4EE5\u5728\u9700\u8981\u65F6\u5B9A\u4E49\u591A\u4E2A\u53EF\u6392\u5E8F\u7684\u5217\u3002 \u8BF7\u8BB0\u4F4F\uFF0C\u5F53\u60A8\u5728\u5B9A\u4E49\u4E86\u591A\u4E2A\u53EF\u6392\u5E8F\u7684\u5217\u65F6\uFF0C UI \u53EF\u80FD\u4F1A\u663E\u5F97\u6709\u4E9B\u5947\u602A\uFF0C\u56E0\u4E3A\u7528\u6237\u4E0D\u77E5\u9053\u54EA\u4E00\u5217\u88AB\u6392\u5E8F\u3002",-1),tt=c("h2",{id:"gao-liang-xian-shi-shu-biao-xuan-ting-dan-yuan-ge"},[c("a",{class:"header-anchor",href:"#gao-liang-xian-shi-shu-biao-xuan-ting-dan-yuan-ge"}),w(" \u9AD8\u4EAE\u663E\u793A\u9F20\u6807\u60AC\u505C\u5355\u5143\u683C")],-1),at=c("p",null,"\u5F53\u5904\u7406\u4E00\u4E2A\u5927\u7684\u5217\u8868\u65F6\uFF0C\u5F88\u5BB9\u6613\u4E22\u5931\u5F53\u524D\u884C\u7684\u8F68\u8FF9\u548C\u60A8\u6B63\u5728\u8BBF\u95EE\u7684\u4E00\u5217\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\u53EF\u80FD\u5F88\u6709\u5E2E\u52A9\u3002",-1),lt=c("h2",{id:"heng-kua-lie"},[c("a",{class:"header-anchor",href:"#heng-kua-lie"}),w(" \u6A2A\u8DE8\u5217")],-1),st=c("p",null,"\u865A\u62DF\u5316\u8868\u683C\u6CA1\u6709\u4F7F\u7528\u5185\u7F6E\u7684 table \u5143\u7D20\uFF0C\u6545 colspan \u548C rowspan \u4E0E TableV1 \u6BD4\u8F83\u7565\u6709\u4E0D\u540C\u3002 \u7136\u800C\uFF0C\u901A\u8FC7\u5B9A\u5236\u7684\u884C\u6E32\u67D3\u5668\uFF0C\u8FD9\u4E9B\u529F\u80FD\u4ECD\u7136\u53EF\u4EE5\u5B9E\u73B0\u3002 \u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6F14\u793A\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002",-1),ot=c("h2",{id:"zong-kua-xing"},[c("a",{class:"header-anchor",href:"#zong-kua-xing"}),w(" \u7EB5\u8DE8\u884C")],-1),rt=c("p",null,"\u65E2\u7136\u6211\u4EEC\u5DF2\u7ECF\u8986\u76D6\u4E86 Colspan\uFF0C\u90A3\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8986\u76D6Row\u4E5F\u662F\u6CA1\u95EE\u9898\u7684\u3002 \u5B83\u4E0Ecolspan\u7565\u6709\u4E0D\u540C\uFF0C\u4F46\u662F \u7684\u60F3\u6CD5\u57FA\u672C\u4E0A\u662F\u4E00\u6837\u7684\u3002",-1),dt=c("h2",{id:"tong-shi-kua-xing-he-kua-lie"},[c("a",{class:"header-anchor",href:"#tong-shi-kua-xing-he-kua-lie"}),w(" \u540C\u65F6\u8DE8\u884C\u548C\u8DE8\u5217")],-1),ct=c("p",null,"\u6211\u4EEC\u5F53\u7136\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u6A2A\u8DE8\u5217\u4E0E\u7EB5\u8DE8\u884C\u6765\u6EE1\u8DB3\u60A8\u7684\u4E1A\u52A1\u9700\u6C42\uFF01",-1),it=c("h2",{id:"shu-xing-shu-ju"},[c("a",{class:"header-anchor",href:"#shu-xing-shu-ju"}),w(" \u6811\u5F62\u6570\u636E")],-1),ut=c("p",null,"\u865A\u62DF\u8868\u4E5F\u53EF\u4EE5\u5728\u6811\u72B6\u7ED3\u6784\u4E2D\u5448\u73B0\u6570\u636E\u3002 \u70B9\u51FB\u7BAD\u5934\u56FE\u6807\uFF0C\u4F60\u53EF\u4EE5\u5C55\u5F00\u6216\u6298\u53E0\u6811\u8282\u70B9\u3002",-1),pt=c("h2",{id:"dong-tai-gao-du-xing"},[c("a",{class:"header-anchor",href:"#dong-tai-gao-du-xing"}),w(" \u52A8\u6001\u9AD8\u5EA6\u884C")],-1),mt=c("p",null,"\u865A\u62DF\u8868\u80FD\u591F\u5448\u73B0\u5177\u6709\u52A8\u6001\u9AD8\u5EA6\u7684\u884C\u6570\u3002 \u5982\u679C\u60A8\u6B63\u5728\u5904\u7406\u6570\u636E\u5E76\u4E0D\u786E\u5B9A\u5185\u5BB9\u5927\u5C0F\uFF0C \u6B64\u529F\u80FD\u5BF9\u4E8E\u8C03\u6574\u5230\u5185\u5BB9\u9AD8\u5EA6\u7684\u6E32\u67D3\u884C\u662F\u7406\u60F3\u7684\u3002 \u8981\u542F\u7528\u6B64\u529F\u80FD\uFF0C\u8BF7\u4F20\u9012 estimated-row-height \u5C5E\u6027\u3002 \u4F30\u8BA1\u9AD8\u5EA6\u8D8A\u63A5\u8FD1\u5B9E\u9645\u5185\u5BB9\uFF0C\u6E32\u67D3\u4F53\u9A8C\u5C31\u8D8A\u987A\u3002",-1),ht=c("div",{class:"doc-tip"},[c("p",null,"\u6BCF\u884C\u9AD8\u5EA6\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u52A8\u6001\u6D4B\u91CF\u3002 \u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u8BD5\u56FE\u663E\u793A\u5927\u91CF\u6570\u636E\uFF0C UI \u53EF\u80FD\u4F1A \u6296\u52A8\u3002")],-1),gt=c("h2",{id:"ke-zhan-kai-de-fu-jia-xin-xi"},[c("a",{class:"header-anchor",href:"#ke-zhan-kai-de-fu-jia-xin-xi"}),w(" \u53EF\u5C55\u5F00\u7684\u9644\u52A0\u4FE1\u606F")],-1),_t=c("p",null,"\u4F7F\u7528\u52A8\u6001\u9AD8\u5EA6\u6E32\u67D3\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u5728\u8868\u683C\u4E2D\u663E\u793A\u8BE6\u7EC6\u7684\u89C6\u56FE\u3002",-1),yt=c("h2",{id:"zi-ding-yi-ye-jiao"},[c("a",{class:"header-anchor",href:"#zi-ding-yi-ye-jiao"}),w(" \u81EA\u5B9A\u4E49\u9875\u811A")],-1),ft=c("p",null,"\u81EA\u5B9A\u4E49\u8868\u683C footer\uFF0C \u901A\u5E38\u7528\u6765\u5C55\u793A\u4E00\u4E9B\u6C47\u603B\u6570\u636E\u548C\u4FE1\u606F\u3002",-1),xt=c("h2",{id:"zi-ding-yi-kong-yuan-su-xuan-ran-qi"},[c("a",{class:"header-anchor",href:"#zi-ding-yi-kong-yuan-su-xuan-ran-qi"}),w(" \u81EA\u5B9A\u4E49\u7A7A\u5143\u7D20\u6E32\u67D3\u5668")],-1),bt=c("p",null,"\u6E32\u67D3\u81EA\u5B9A\u4E49\u7684\u7A7A\u5143\u7D20",-1),wt=c("h2",{id:"fu-dong-zhe-zhao-ceng"},[c("a",{class:"header-anchor",href:"#fu-dong-zhe-zhao-ceng"}),w(" \u6D6E\u52A8\u906E\u7F69\u5C42")],-1),vt=c("p",null,"\u5F53\u60A8\u60F3\u8981\u663E\u793A\u52A0\u8F7D\u6307\u793A\u5668\u4E4B\u7C7B\u7684\u6D6E\u52A8\u5143\u7D20\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6E32\u67D3\u4E00\u4E2A\u6D6E\u52A8\u5728\u8868\u683C\u4E4B\u4E0A\u7684\u906E\u7F69\u5C42\u6765\u5B9E\u73B0\u3002",-1),$t=c("h2",{id:"shou-dong-gun-dong"},[c("a",{class:"header-anchor",href:"#shou-dong-gun-dong"}),w(" \u624B\u52A8\u6EDA\u52A8")],-1),Ct=c("p",null,"\u4F7F\u7528 Table V2 \u66B4\u9732\u7684\u65B9\u6CD5\u53EF\u4EE5\u8FDB\u884C\u624B\u52A8\u6216\u7F16\u7A0B\u5F0F\u7684\u6EDA\u52A8\u5230\u6307\u5B9A\u7684\u504F\u79FB\u91CF\u6216\u8005\u884C\u3002",-1),jt=c("div",{class:"doc-tip"},[c("p",null,'scrollToRow \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4EE3\u8868\u6EDA\u52A8\u7B56\u7565\uFF0C\u8BA1\u7B97\u4E86\u8981\u6EDA\u52A8\u7684\u4F4D\u7F6E\uFF0C\u5176\u9ED8\u8BA4\u503C\u662F auto\u3002 \u5982\u679C\u4F60\u60F3\u8981\u6EDA\u52A8\u5230\u67D0\u4E2A\u7279\u5B9A\u4F4D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u6218\u7565\u3002 \u53EF\u7528\u7684\u9009\u9879\u662F "auto" | "center" | "end" | "start" | "smart"'),c("p",null,"smart \u548Cauto \u4E4B\u95F4\u7684\u533A\u522B\u662F\uFF0C auto \u662F smart \u6EDA\u52A8\u7B56\u7565\u7684\u5B50\u96C6\u3002")],-1),It=Z(`<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u9009\u503C</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>cache</td><td>\u4E3A\u4E86\u66F4\u597D\u7684\u6E32\u67D3\u6548\u679C\u9884\u5148\u591A\u52A0\u8F7D\u7684\u884C\u6570</td><td>-</td><td>Number</td><td>-</td></tr><tr><td>estimated-row-height</td><td>\u6E32\u67D3\u52A8\u6001\u7684\u5355\u5143\u683C\u7684\u9884\u4F30\u9AD8\u5EA6</td><td>-</td><td>Number</td><td>-</td></tr><tr><td>header-class</td><td>header \u90E8\u5206\u7684\u81EA\u5B9A\u4E49 class \u540D</td><td>-</td><td>String/Function&lt;<a href="#typings">HeaderClassGetter</a>&gt;</td><td>-</td></tr><tr><td>header-props</td><td>header \u90E8\u5206\u7684\u81EA\u5B9A\u4E49 props \u540D</td><td>-</td><td>Object/Function&lt;<a href="#typings">HeaderPropsGetter</a>&gt;</td><td>-</td></tr><tr><td>header-cell-props</td><td>header cell \u90E8\u5206\u7684\u81EA\u5B9A\u4E49 props \u540D</td><td>-</td><td>Object/Function&lt;<a href="#typings">HeaderCellPropsGetter</a>&gt;</td><td>-</td></tr><tr><td>header-height</td><td>Header \u7684\u9AD8\u5EA6\u7531height\u8BBE\u7F6E\u3002 \u5982\u679C\u4F20\u5165\u6570\u7EC4\uFF0C\u5B83\u4F1A\u4F7F header row \u7B49\u4E8E\u6570\u7EC4\u957F\u5EA6</td><td>-</td><td>Number/Array&lt;Number&gt;</td><td>50</td></tr><tr><td>footer-height</td><td>Footer \u90E8\u5206\u7684\u9AD8\u5EA6\uFF0C\u5F53\u4F20\u5165\u503C\u65F6\uFF0C\u8FD9\u90E8\u5206\u5C06\u88AB\u8BA1\u7B97\u5165 table \u7684\u9AD8\u5EA6\u91CC</td><td>-</td><td>Number</td><td>0</td></tr><tr><td>row-class</td><td>row wrapper \u90E8\u5206\u7684\u81EA\u5B9A\u4E49 class \u540D</td><td>-</td><td>String/Function&lt;<a href="#typings">RowClassGetter</a>&gt;</td><td>-</td></tr><tr><td>row-key</td><td>\u6BCF\u884C\u7684 key \u503C\uFF0C\u5982\u679C\u4E0D\u63D0\u4F9B\uFF0C\u5C06\u4F7F\u7528\u7D22\u5F15 index \u4EE3\u66FF</td><td>-</td><td>String/Symbol/Number</td><td>id</td></tr><tr><td>row-props</td><td>row component \u90E8\u5206\u7684\u81EA\u5B9A\u4E49 class \u540D</td><td>-</td><td>Object/Function&lt;<a href="#typings">RowPropsGetter</a>&gt;</td><td>-</td></tr><tr><td>row-height</td><td>\u6BCF\u884C\u7684\u9AD8\u5EA6, \u7528\u4E8E\u8BA1\u7B97\u8868\u7684\u603B\u9AD8\u5EA6</td><td>-</td><td>Number</td><td>50</td></tr><tr><td>cell-props</td><td>\u6BCF\u4E2A\u5355\u5143\u683C cell \u7684\u81EA\u5B9A\u4E49 props (\u9664\u4E86 header cell \u4EE5\u5916)</td><td>-</td><td>Object/Function&lt;<a href="#typings">CellPropsGetter</a>&gt;</td><td>-</td></tr><tr><td>columns</td><td>\u5217 column \u7684\u914D\u7F6E\u6570\u7EC4</td><td>-</td><td>Array&lt;<a href="#column-attribute">Column</a>&gt;</td><td>-</td></tr><tr><td>data</td><td>\u8981\u5728\u8868\u4E2D\u6E32\u67D3\u7684\u6570\u636E\u6570\u7EC4</td><td>-</td><td>Array&lt;<a href="#typings">Data</a>&gt;</td><td>[]</td></tr><tr><td>data-getter</td><td>\u4E00\u4E2A\u81EA\u5B9A\u4E49\u65B9\u6CD5\u4ECE\u6570\u636E\u6E90\u83B7\u53D6\u6570\u636E</td><td>-</td><td>Function</td><td>-</td></tr><tr><td>fixed-data</td><td>\u6E32\u67D3\u884C\u5728\u8868\u683C\u4E3B\u5185\u5BB9\u4E0A\u65B9\u548C header \u4E0B\u65B9\u533A\u57DF\u7684\u6570\u636E</td><td>-</td><td>Array&lt;<a href="#typings">Data</a>&gt;</td><td>-</td></tr><tr><td>expand-column-key</td><td>\u5217\u7684 key \u6765\u6807\u8BB0\u54EA\u4E2A\u884C\u53EF\u4EE5\u88AB\u5C55\u5F00</td><td>-</td><td>String</td><td>-</td></tr><tr><td>expanded-row-keys</td><td>\u5B58\u653E\u884C\u5C55\u5F00\u72B6\u6001\u7684 key \u7684\u6570\u7EC4\uFF0C\u53EF\u4EE5\u548C <code>v-model</code> \u642D\u914D\u4F7F\u7528</td><td>-</td><td>Array&lt;<a href="#typings">KeyType</a>&gt;</td><td>-</td></tr><tr><td>default-expanded-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u884C\u7684 key \u7684\u6570\u7EC4, <strong>\u8FD9\u4E2A\u6570\u636E\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684</strong></td><td>-</td><td>Array&lt;<a href="#typings">KeyType</a>&gt;</td><td>-</td></tr><tr><td>class</td><td>\u8868\u683C\u7684\u7C7B\u540D\u79F0\uFF0C\u5C06\u5E94\u7528\u4E8E\u8868\u683C\u7684\u5168\u90E8\u7684\u4E09\u4E2A\u90E8\u5206 (\u5DE6\u3001\u53F3\u3001\u4E3B)</td><td>-</td><td>String/Array/Object</td><td>-</td></tr><tr><td>fixed</td><td>\u5355\u5143\u683C\u5BBD\u5EA6\u662F\u81EA\u9002\u5E94\u8FD8\u662F\u56FA\u5B9A</td><td>-</td><td>Boolean</td><td>false</td></tr><tr><td>width ^(required)</td><td>\u8868\u683C\u7684\u5BBD\u5EA6</td><td>-</td><td>Number</td><td>-</td></tr><tr><td>height ^(required)</td><td>\u8868\u683C\u7684\u9AD8\u5EA6</td><td>-</td><td>Number</td><td>-</td></tr><tr><td>max-height</td><td>\u8868\u683C\u7684\u6700\u5927\u9AD8\u5EA6</td><td>-</td><td>Number</td><td>-</td></tr><tr><td>h-scrollbar-size</td><td>\u914D\u7F6E\u8868\u683C\u7684\u6C34\u5E73\u6EDA\u52A8\u6761\u5927\u5C0F\uFF0C\u9632\u6B62\u6C34\u5E73\u548C\u5782\u76F4\u6EDA\u52A8\u6761\u91CD\u53E0\u3002</td><td>-</td><td>Number</td><td>6</td></tr><tr><td>v-scrollbar-size</td><td>\u914D\u7F6E\u8868\u683C\u7684\u5782\u76F4\u6EDA\u52A8\u6761\u5927\u5C0F\uFF0C\u9632\u6B62\u6C34\u5E73\u548C\u5782\u76F4\u6EDA\u52A8\u6761\u91CD\u53E0\u3002</td><td>-</td><td>Number</td><td>6</td></tr><tr><td>scrollbar-always-on</td><td>\u5982\u679C\u5F00\u542F\uFF0C\u6EDA\u52A8\u6761\u5C06\u4E00\u76F4\u663E\u793A\uFF0C\u53CD\u4E4B\u53EA\u4F1A\u5728\u9F20\u6807\u7ECF\u8FC7\u65F6\u663E\u793A\u3002</td><td>-</td><td>Boolean</td><td>false</td></tr><tr><td>sort-by</td><td>\u6392\u5E8F\u65B9\u5F0F</td><td>-</td><td>Object&lt;<a href="#typings">SortBy</a>&gt;</td><td>{}</td></tr><tr><td>sort-state</td><td>\u591A\u4E2A\u6392\u5E8F</td><td>-</td><td>Object&lt;<a href="#typings">SortState</a>&gt;</td><td>undefined</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>column-sort</td><td>\u5217\u6392\u5E8F\u65F6\u8C03\u7528</td><td>Object&lt;ColumnSortParam&gt;</td></tr><tr><td>expanded-rows-change</td><td>\u884C\u5C55\u5F00\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td><td><code>Array&lt;KeyType&gt;</code></td></tr><tr><td>end-reached</td><td>\u5230\u8FBE\u8868\u683C\u672B\u5C3E\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>scroll</td><td>\u8868\u683C\u88AB\u7528\u6237\u6EDA\u52A8\u540E\u89E6\u53D1</td><td>Object&lt;<a href="#typings">ScrollParams</a>&gt;</td></tr><tr><td>rows-rendered</td><td>\u5F53\u884C\u88AB\u6E32\u67D3\u540E\u89E6\u53D1</td><td>Object&lt;<a href="#typings">RowsRenderedParams</a>&gt;</td></tr><tr><td>row-expand</td><td>\u70B9\u51FB\u7BAD\u5934\u56FE\u6807\u5C55\u5F00/\u6298\u53E0\u6811\u8282\u70B9\u65F6\u89E6\u53D1</td><td>Object&lt;<a href="#typings">RowExpandParams</a>&gt;</td></tr><tr><td>row-event-handlers</td><td>\u5F53\u6BCF\u884C\u6DFB\u52A0\u4E86\u4E00\u7CFB\u5217\u4E8B\u4EF6\u5904\u7406\u5668\u65F6\u89E6\u53D1</td><td>Object&lt;<a href="#typings">RowEventHandlers</a>&gt;</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollTo</td><td>\u6EDA\u52A8\u5230\u7ED9\u5B9A\u4F4D\u7F6E</td><td><code>{ scrollLeft?: number, scrollTop?: number}</code></td></tr><tr><td>scrollToLeft</td><td>\u6EDA\u52A8\u5230\u7ED9\u5B9A\u7684\u6C34\u5E73\u4F4D\u7F6E</td><td><code>scrollLeft: number</code></td></tr><tr><td>scrollToTop</td><td>\u6EDA\u52A8\u5230\u7ED9\u5B9A\u7684\u5782\u76F4\u4F4D\u7F6E</td><td><code>scrollTop: number</code></td></tr><tr><td>scrollToRow</td><td>\u4F7F\u7528\u7ED9\u5B9A\u7684\u6EDA\u52A8\u7B56\u7565\u6EDA\u52A8\u81F3\u6307\u5B9A\u884C</td><td><code>row: number, strategy?: &quot;auto&quot; \\|&quot;center&quot; \\| &quot;end&quot; \\| &quot;start&quot; \\| &quot;smart&quot;</code></td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cell</td><td><a href="#typings">CellSlotProps</a></td></tr><tr><td>header</td><td><a href="#typings">HeaderSlotProps</a></td></tr><tr><td>header-cell</td><td><a href="#typings">HeaderCellSlotProps</a></td></tr><tr><td>row</td><td><a href="#typings">RowSlotProps</a></td></tr><tr><td>footer</td><td>-</td></tr><tr><td>empty</td><td>-</td></tr><tr><td>overlay</td><td>-</td></tr></tbody></table><div class="doc-tip"><p>\u8BF7\u6CE8\u610F\uFF1A\u8FD9\u4E9B\u662F JavaScript \u5BF9\u8C61\uFF0C\u6240\u4EE5\u60A8 <strong>\u4E0D\u80FD\u4F7F\u7528</strong> \u77ED\u6A2A\u7EBF\u547D\u540D\u6CD5\uFF08kebab-case\uFF09\u6765\u5904\u7406\u8FD9\u4E9B\u5C5E\u6027</p></div><h2 id="column-attributes"><a class="header-anchor" href="#column-attributes"></a> Column Attributes</h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>align</td><td>\u8868\u683C\u5355\u5143\u683C\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F</td><td><a href="https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L6">Alignment</a></td><td>left</td></tr><tr><td>class</td><td>\u5217\u7684\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>key</td><td>\u552F\u4E00\u6807\u8BC6</td><td>KeyType</td><td>\u2014</td></tr><tr><td>dataKey</td><td>\u6570\u636E\u552F\u4E00\u6807\u8BC6</td><td>KeyType</td><td>\u2014</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217\u4F4D\u7F6E</td><td>Boolean/<a href="https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L11">FixedDir</a></td><td>false</td></tr><tr><td>flexGrow</td><td>CSS \u5C5E\u6027 flex grow, \u4EC5\u5F53\u4E0D\u662F\u56FA\u5B9A\u8868\u65F6\u624D\u751F\u6548</td><td>Number</td><td>0</td></tr><tr><td>flexShrink</td><td>CSS \u5C5E\u6027 flex shrink, \u4EC5\u5F53\u4E0D\u662F\u56FA\u5B9A\u8868\u65F6\u624D\u751F\u6548</td><td>Number</td><td>1</td></tr><tr><td>headerClass</td><td>\u81EA\u5B9A\u4E49 header \u5934\u90E8\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>hidden</td><td>\u6B64\u5217\u662F\u5426\u4E0D\u53EF\u89C1</td><td>Boolean</td><td>-</td></tr><tr><td>style</td><td>\u81EA\u5B9A\u4E49\u5217\u5355\u5143\u683C\u7684\u7C7B\u540D\uFF0C\u5C06\u4F1A\u4E0E gird \u5355\u5143\u683C\u5408\u5E76</td><td>CSSProperties</td><td>-</td></tr><tr><td>sortable</td><td>\u8BBE\u7F6E\u5217\u662F\u5426\u53EF\u6392\u5E8F</td><td>Boolean</td><td>-</td></tr><tr><td>title</td><td>Header \u5934\u90E8\u5355\u5143\u683C\u4E2D\u7684\u9ED8\u8BA4\u6587\u672C</td><td>String</td><td>-</td></tr><tr><td>maxWidth</td><td>\u5217\u7684\u6700\u5927\u5BBD\u5EA6</td><td>Number</td><td>-</td></tr><tr><td>minWidth</td><td>\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6</td><td>Number</td><td>-</td></tr><tr><td>width <strong>(\u5FC5\u586B)</strong></td><td>\u5217\u5BBD\u5EA6</td><td>Number</td><td>-</td></tr><tr><td>cellRenderer</td><td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3\u5668</td><td>VueComponent/(props: <a href="#typings">CellRenderProps</a>) =&gt; VNode</td><td>-</td></tr><tr><td>headerCellRenderer</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8\u6E32\u67D3\u5668</td><td>VueComponent/(props: <a href="#typings">HeaderRenderProps</a>) =&gt; VNode</td><td>-</td></tr></tbody></table><h2 id="typings-typings"><a class="header-anchor" href="#typings-typings"></a> Typings{#typings}</h2><h3 id="show-type-declarations"><a class="header-anchor" href="#show-type-declarations"></a> Show Type Declarations</h3><pre><code class="hljs language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">HeaderClassGetter</span> = <span class="hljs-function">(<span class="hljs-params">param: {
  columns: Column&lt;<span class="hljs-built_in">any</span>&gt;[]
  headerIndex: <span class="hljs-built_in">number</span>
}</span>) =&gt;</span> <span class="hljs-built_in">string</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">HeaderPropsGetter</span> = <span class="hljs-function">(<span class="hljs-params">param: {
  columns: Column&lt;<span class="hljs-built_in">any</span>&gt;[]
  headerIndex: <span class="hljs-built_in">number</span>
}</span>) =&gt;</span> <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">any</span>&gt;

<span class="hljs-keyword">type</span> <span class="hljs-title class_">HeaderCellPropsGetter</span> = <span class="hljs-function">(<span class="hljs-params">param: {
  columns: Column&lt;<span class="hljs-built_in">any</span>&gt;[]
  column: Column&lt;<span class="hljs-built_in">any</span>&gt;
  columnIndex: <span class="hljs-built_in">number</span>
  headerIndex: <span class="hljs-built_in">number</span>
  style: CSSProperties
}</span>) =&gt;</span> <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">any</span>&gt;

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowClassGetter</span> = <span class="hljs-function">(<span class="hljs-params">param: {
  columns: Column&lt;<span class="hljs-built_in">any</span>&gt;[]
  rowData: <span class="hljs-built_in">any</span>
  rowIndex: <span class="hljs-built_in">number</span>
}</span>) =&gt;</span> <span class="hljs-built_in">string</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowPropsGetter</span> = <span class="hljs-function">(<span class="hljs-params">param: {
  columns: Column&lt;<span class="hljs-built_in">any</span>&gt;[]
  rowData: <span class="hljs-built_in">any</span>
  rowIndex: <span class="hljs-built_in">number</span>
}</span>) =&gt;</span> <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">any</span>&gt;

<span class="hljs-keyword">type</span> <span class="hljs-title class_">CellPropsGetter</span> = <span class="hljs-function">(<span class="hljs-params">param: {
  column: Column&lt;<span class="hljs-built_in">any</span>&gt;
  columns: Column&lt;<span class="hljs-built_in">any</span>&gt;[]
  columnIndex: <span class="hljs-built_in">number</span>
  cellData: <span class="hljs-built_in">any</span>
  rowData: <span class="hljs-built_in">any</span>
  rowIndex: <span class="hljs-built_in">number</span>
}</span>) =&gt;</span> <span class="hljs-built_in">void</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">CellRenderProps</span>&lt;T&gt; = {
  <span class="hljs-attr">cellData</span>: T
  <span class="hljs-attr">column</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;
  <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;[]
  <span class="hljs-attr">columnIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">rowData</span>: <span class="hljs-built_in">any</span>
  <span class="hljs-attr">rowIndex</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">HeaderRenderProps</span>&lt;T&gt; = {
  <span class="hljs-attr">column</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;
  <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;[]
  <span class="hljs-attr">columnIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">headerIndex</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">ScrollParams</span> = {
  <span class="hljs-attr">xAxisScrollDir</span>: <span class="hljs-string">&#39;forward&#39;</span> | <span class="hljs-string">&#39;backward&#39;</span>
  <span class="hljs-attr">scrollLeft</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">yAxisScrollDir</span>: <span class="hljs-string">&#39;forward&#39;</span> | <span class="hljs-string">&#39;backward&#39;</span>
  <span class="hljs-attr">scrollTop</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">CellSlotProps</span>&lt;T&gt; = {
  <span class="hljs-attr">column</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;
  <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;[]
  <span class="hljs-attr">columnIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">depth</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">style</span>: <span class="hljs-title class_">CSSProperties</span>
  <span class="hljs-attr">rowData</span>: <span class="hljs-built_in">any</span>
  <span class="hljs-attr">rowIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">isScrolling</span>: <span class="hljs-built_in">boolean</span>
  expandIconProps?:
    | {
        <span class="hljs-attr">rowData</span>: <span class="hljs-built_in">any</span>
        <span class="hljs-attr">rowIndex</span>: <span class="hljs-built_in">number</span>
        <span class="hljs-attr">onExpand</span>: <span class="hljs-function">(<span class="hljs-params">expand: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>
      }
    | <span class="hljs-literal">undefined</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">HeaderSlotProps</span> = {
  <span class="hljs-attr">cells</span>: <span class="hljs-title class_">VNode</span>[]
  <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Column</span>&lt;<span class="hljs-built_in">any</span>&gt;[]
  <span class="hljs-attr">headerIndex</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">HeaderCellSlotProps</span> = {
  <span class="hljs-attr">class</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Column</span>&lt;<span class="hljs-built_in">any</span>&gt;[]
  <span class="hljs-attr">column</span>: <span class="hljs-title class_">Column</span>&lt;<span class="hljs-built_in">any</span>&gt;
  <span class="hljs-attr">columnIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">headerIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">style</span>: <span class="hljs-title class_">CSSProperties</span>
  headerCellProps?: <span class="hljs-built_in">any</span>
  <span class="hljs-attr">sortBy</span>: <span class="hljs-title class_">SortBy</span>
  sortState?: <span class="hljs-title class_">SortState</span> | <span class="hljs-literal">undefined</span>
  <span class="hljs-attr">onColumnSorted</span>: <span class="hljs-function">(<span class="hljs-params">e: MouseEvent</span>) =&gt;</span> <span class="hljs-built_in">void</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowCommonParams</span> = {
  <span class="hljs-attr">rowData</span>: <span class="hljs-built_in">any</span>
  <span class="hljs-attr">rowIndex</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowEventHandlerParams</span> = {
  <span class="hljs-attr">rowKey</span>: <span class="hljs-title class_">KeyType</span>
  <span class="hljs-attr">event</span>: <span class="hljs-title class_">Event</span>
} &amp; <span class="hljs-title class_">RowCommonParams</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowEventHandler</span> = <span class="hljs-function">(<span class="hljs-params">params: RowEventHandlerParams</span>) =&gt;</span> <span class="hljs-built_in">void</span>
<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowEventHandlers</span> = {
  onClick?: <span class="hljs-title class_">RowEventHandler</span>
  onContextmenu?: <span class="hljs-title class_">RowEventHandler</span>
  onDblclick?: <span class="hljs-title class_">RowEventHandler</span>
  onMouseenter?: <span class="hljs-title class_">RowEventHandler</span>
  onMouseleave?: <span class="hljs-title class_">RowEventHandler</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowsRenderedParams</span> = {
  <span class="hljs-attr">rowCacheStart</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">rowCacheEnd</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">rowVisibleStart</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">rowVisibleEnd</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowSlotProps</span> = {
  <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Column</span>&lt;<span class="hljs-built_in">any</span>&gt;[]
  <span class="hljs-attr">rowData</span>: <span class="hljs-built_in">any</span>
  <span class="hljs-attr">columnIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">rowIndex</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">data</span>: <span class="hljs-built_in">any</span>
  <span class="hljs-attr">key</span>: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">string</span>
  isScrolling?: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">style</span>: <span class="hljs-title class_">CSSProperties</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">RowExpandParams</span> = {
  <span class="hljs-attr">expanded</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">rowKey</span>: <span class="hljs-title class_">KeyType</span>
} &amp; <span class="hljs-title class_">RowCommonParams</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">Data</span> = {
  [<span class="hljs-attr">key</span>: <span class="hljs-title class_">KeyType</span>]: <span class="hljs-built_in">any</span>
  children?: <span class="hljs-title class_">Array</span>&lt;<span class="hljs-built_in">any</span>&gt;
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">FixedData</span> = <span class="hljs-title class_">Data</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">KeyType</span> = <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-built_in">symbol</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">ColumnSortParam</span>&lt;T&gt; = { <span class="hljs-attr">column</span>: <span class="hljs-title class_">Column</span>&lt;T&gt;; <span class="hljs-attr">key</span>: <span class="hljs-title class_">KeyType</span>; <span class="hljs-attr">order</span>: <span class="hljs-title class_">SortOrder</span> }

<span class="hljs-keyword">enum</span> <span class="hljs-title class_">SortOrder</span> {
  <span class="hljs-variable constant_">ASC</span> = <span class="hljs-string">&#39;asc&#39;</span>,
  <span class="hljs-variable constant_">DESC</span> = <span class="hljs-string">&#39;desc&#39;</span>,
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">SortBy</span> = { <span class="hljs-attr">key</span>: <span class="hljs-title class_">KeyType</span>; <span class="hljs-title class_">Order</span>: <span class="hljs-title class_">SortOrder</span> }
<span class="hljs-keyword">type</span> <span class="hljs-title class_">SortState</span> = <span class="hljs-title class_">Record</span>&lt;<span class="hljs-title class_">KeyType</span>, <span class="hljs-title class_">SortOrder</span>&gt;
</code></pre><h2 id="chang-jian-wen-ti"><a class="header-anchor" href="#chang-jian-wen-ti"></a> \u5E38\u89C1\u95EE\u9898</h2><h4 id="ru-he-zai-di-yi-lie-zhong-xuan-ran-dai-fu-xuan-kuang-de-lie-biao"><a class="header-anchor" href="#ru-he-zai-di-yi-lie-zhong-xuan-ran-dai-fu-xuan-kuang-de-lie-biao"></a> \u5982\u4F55\u5728\u7B2C\u4E00\u5217\u4E2D\u6E32\u67D3\u5E26\u590D\u9009\u6846\u7684\u5217\u8868\uFF1F</h4><p>\u7531\u4E8E\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3\u5668\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u793A\u4F8B \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3\u5668 \u4EE3\u7801\u6765\u6E32\u67D3 checkbox\uFF0C\u5E76\u81EA\u884C\u7BA1\u7406\u5176\u72B6\u6001\u3002</p><h4 id="wei-shi-me-xu-ni-hua-biao-ti-gong-de-gong-neng-jiao-tablev1shao"><a class="header-anchor" href="#wei-shi-me-xu-ni-hua-biao-ti-gong-de-gong-neng-jiao-tablev1shao"></a> \u4E3A\u4EC0\u4E48\u865A\u62DF\u5316\u8868\u63D0\u4F9B\u7684\u529F\u80FD\u8F83TableV1\u5C11\uFF1F</h4><p>\u5BF9\u4E8E\u865A\u62DF\u5316\u8868\u683C\uFF0C\u6211\u4EEC\u6253\u7B97\u51CF\u5C11\u4E00\u4E9B\u529F\u80FD\uFF0C\u8BA9\u7528\u6237\u6839\u636E\u9700\u6C42\u81EA\u884C\u5B9E\u73B0\u3002 \u6574\u5408\u8FC7\u591A\u7684\u529F\u80FD\u4F1A\u8BA9\u7EC4\u4EF6\u7684\u4EE3\u7801\u53D8\u5F97\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u4E14\u5BF9\u4E8E\u5927\u591A\u6570\u7528\u6237\u6765\u8BF4\uFF0C\u57FA\u7840\u529F\u80FD\u5C31\u5DF2\u8DB3\u591F\u3002 \u4E00\u4E9B\u4E3B\u8981\u7684\u529F\u80FD\u5C1A\u672A\u5F00\u53D1\u3002 \u6211\u4EEC\u5F88\u5E0C\u671B\u542C\u4ECE\u60A8\u7684\u610F\u89C1\u3002</p>`,19),At={setup(y){const i="table-v2",u={"../../../examples/table-v2/auto-resizer.vue":fn,"../../../examples/table-v2/basic.vue":bn,"../../../examples/table-v2/cell-templating.vue":$n,"../../../examples/table-v2/colspan.vue":jn,"../../../examples/table-v2/controlled-sort.vue":Sn,"../../../examples/table-v2/cross-hovering.vue":Rn,"../../../examples/table-v2/detailed-view.vue":An,"../../../examples/table-v2/dynamic-height.vue":Mn,"../../../examples/table-v2/empty.vue":On,"../../../examples/table-v2/filter.vue":qn,"../../../examples/table-v2/fixed-columns.vue":Yn,"../../../examples/table-v2/footer.vue":Qn,"../../../examples/table-v2/grouping-header.vue":Xn,"../../../examples/table-v2/inline-editing.vue":ne,"../../../examples/table-v2/manual-scroll.vue":re,"../../../examples/table-v2/overlay.vue":ie,"../../../examples/table-v2/row-class.vue":me,"../../../examples/table-v2/rowspan.vue":ge,"../../../examples/table-v2/selection.vue":fe,"../../../examples/table-v2/sort.vue":be,"../../../examples/table-v2/spans.vue":ve,"../../../examples/table-v2/sticky-rows.vue":Ce,"../../../examples/table-v2/tree-data.vue":Ie};return(p,m)=>{const o=b("demo-block"),a=b("right-nav");return $(),E(M,null,[c("section",null,[Se,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/basic","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
  />
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 1000)
<\/script>
`},null,8,["demos"]),ke,De,Re,Te,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/auto-resizer","source-code":`<template>
  <div style="height: 400px">
    <hl-auto-resizer>
      <template #default="{ height, width }">
        <hl-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </hl-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
<\/script>
`},null,8,["demos"]),Ke,Ae,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/cell-templating","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  HlButton,
  HlIcon,
  HlTag,
  HlTooltip,
  TableV2FixedDir,
} from 'hongluan-ui'
import { TwoAirplay } from '@hongluan-ui/icons'

import type { Column } from 'hongluan-ui'

let id = 0

const dataGenerator = () => ({
  id: \`random-id-\${++id}\`,
  name: 'Tom',
  date: '2020-10-1',
})

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <HlTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <HlIcon class="m-r-sm">
              <TwoAirplay />
            </HlIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </HlTooltip>
    ),
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <HlTag>{name}</HlTag>,
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <HlButton size="sm" class="m-r-sm">Edit</HlButton>
        <HlButton size="sm" type="danger">
          Delete
        </HlButton>
      </>
    ),
    width: 150,
    align: 'center',
  },
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))
<\/script>
`},null,8,["demos"]),He,ze,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/selection","source-code":`<template>
  <div style="height: 400px">
    <hl-auto-resizer>
      <template #default="{ height, width }">
        <hl-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </hl-auto-resizer>
  </div>
</template>

<script lang="tsx" setup>
import { ref, unref } from 'vue'
import { HlCheckbox } from 'hongluan-ui'

import type { FunctionalComponent } from 'vue'
import type { CheckboxValueType, Column } from 'hongluan-ui'

type SelectionCellProps = {
  value: boolean
  intermediate?: boolean
  onChange: (value: CheckboxValueType) => void
}

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange,
}) => {
  return (
    <HlCheckbox
      onChange={onChange}
      modelValue={value}
      indeterminate={intermediate}
    />
  )
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        checked: false,
        parentId: null,
      },
    )
  })

const columns: Column<any>[] = generateColumns(10)
columns.unshift({
  key: 'selection',
  width: 50,
  cellRenderer: ({ rowData }) => {
    const onChange = (value: CheckboxValueType) => (rowData.checked = value)
    return <SelectionCell value={rowData.checked} onChange={onChange} />
  },

  headerCellRenderer: () => {
    const _data = unref(data)
    const onChange = (value: CheckboxValueType) =>
      (data.value = _data.map(row => {
        row.checked = value
        return row
      }))
    const allSelected = _data.every(row => row.checked)
    const containsChecked = _data.some(row => row.checked)

    return (
      <SelectionCell
        value={allSelected}
        intermediate={containsChecked && !allSelected}
        onChange={onChange}
      />
    )
  },
})

const data = ref(generateData(columns, 200))
<\/script>
`},null,8,["demos"]),Ee,Ve,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/inline-editing","source-code":`<template>
  <div style="height: 400px">
    <hl-auto-resizer>
      <template #default="{ height, width }">
        <hl-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </hl-auto-resizer>
  </div>
</template>

<script lang="tsx" setup>
import { ref, withKeys } from 'vue'
import { HlInput } from 'hongluan-ui'

import type { FunctionalComponent } from 'vue'
import type { Column, InputInstance } from 'hongluan-ui'

type SelectionCellProps = {
  value: string
  intermediate?: boolean
  onChange: (value: string) => void
  onBlur: () => void
  onKeydownEnter: () => void
  forwardRef: (el: InputInstance) => void
}

const InputCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  onChange,
  onBlur,
  onKeydownEnter,
  forwardRef,
}) => {
  return (
    <HlInput
      ref={forwardRef as any}
      onInput={onChange}
      onBlur={onBlur}
      onKeydown={withKeys(onKeydownEnter, ['enter'])}
      modelValue={value}
    />
  )
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        editing: false,
        parentId: null,
      },
    )
  })

const columns: Column<any>[] = generateColumns(10)
columns[0] = {
  ...columns[0],
  title: 'Editable Column',
  cellRenderer: ({ rowData, column }) => {
    const onChange = (value: string) => {
      rowData[column.dataKey!] = value
    }
    const onEnterEditMode = () => {
      rowData.editing = true
    }

    const onExitEditMode = () => (rowData.editing = false)
    const input = ref()
    const setRef = el => {
      input.value = el
      if (el) {
        el.focus?.()
      }
    }

    return rowData.editing ? (
      <InputCell
        forwardRef={setRef}
        value={rowData[column.dataKey!]}
        onChange={onChange}
        onBlur={onExitEditMode}
        onKeydownEnter={onExitEditMode}
      />
    ) : (
      <div class="table-v2-inline-editing-trigger" onClick={onEnterEditMode}>
        {rowData[column.dataKey!]}
      </div>
    )
  },
}

const data = ref(generateData(columns, 200))
<\/script>

<style>
.table-v2-inline-editing-trigger {
  border: 1px transparent dotted;
  padding: 4px;
}

.table-v2-inline-editing-trigger:hover {
  border-color: var(--el-color-primary);
}
</style>
`},null,8,["demos"]),Fe,Me,Pe,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/row-class","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :row-class="rowClass"
    :width="700"
    :height="400"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  HlButton,
  HlIcon,
  HlTag,
  HlTooltip,
  TableV2FixedDir,
} from 'hongluan-ui'
import { TwoAirplay } from '@hongluan-ui/icons'

import type { Column, RowClassNameGetter } from 'hongluan-ui'

let id = 0

const dataGenerator = () => ({
  id: \`random-id-\${++id}\`,
  name: 'Tom',
  date: '2020-10-1',
})

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <HlTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <HlIcon class="mr-3">
              <TwoAirplay />
            </HlIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </HlTooltip>
    ),
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <HlTag>{name}</HlTag>,
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <HlButton size="sm" class="m-r-sm">Edit</HlButton>
        <HlButton size="sm" type="danger">
          Delete
        </HlButton>
      </>
    ),
    width: 150,
    align: 'center',
    flexGrow: 1,
  },
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))

const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {
  if (rowIndex % 10 === 5) {
    return 'bg-red-100'
  } else if (rowIndex % 10 === 0) {
    return 'bg-blue-200'
  }
  return ''
}
<\/script>
`},null,8,["demos"]),Be,Oe,Ne,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/sticky-rows","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="tableData"
    :fixed-data="fixedData"
    :width="700"
    :height="400"
    :row-class="rowClass"
    fixed
    @scroll="onScroll"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const rowClass = ({ rowIndex }) => {
  if (rowIndex < 0 || (rowIndex + 1) % 5 === 0) return 'sticky-row'
}

const stickyIndex = ref(0)

const fixedData = computed(() =>
  data.slice(stickyIndex.value, stickyIndex.value + 1),
)

const tableData = computed(() => {
  return data.slice(1)
})

const onScroll = ({ scrollTop }) => {
  stickyIndex.value = Math.floor(scrollTop / 250) * 5
}
<\/script>

<style>
.table-v2-fixed-header-row {
  background-color: var(--primary-light-5);
  font-weight: bold;
}
</style>
`},null,8,["demos"]),qe,Ge,Ye,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/fixed-columns","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sortBy"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2FixedDir, TableV2SortOrder } from 'hongluan-ui'

import type { SortBy } from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
let data = generateData(columns, 200)

columns[0].fixed = true
columns[1].fixed = TableV2FixedDir.LEFT
columns[9].fixed = TableV2FixedDir.RIGHT

for (let i = 0; i < 3; i++) columns[i].sortable = true

const sortBy = ref<SortBy>({
  key: 'column-0',
  order: TableV2SortOrder.ASC,
})

const onSort = (_sortBy: SortBy) => {
  data = data.reverse()
  sortBy.value = _sortBy
}
<\/script>
`},null,8,["demos"]),Le,Ue,Qe,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/grouping-header","source-code":`<template>
  <hl-table-v2
    fixed
    :columns="fixedColumns"
    :data="data"
    :header-height="[50, 40, 50]"
    :header-class="headerClass"
    :width="700"
    :height="400"
  >
    <template #header="props">
      <customized-header v-bind="props" />
    </template>
  </hl-table-v2>
</template>
<script lang="tsx" setup>
import { TableV2FixedDir, TableV2Placeholder } from 'hongluan-ui'

import type { FunctionalComponent } from 'vue'
import type {
  HeaderClassNameGetter,
  TableV2CustomizedHeaderSlotParam,
} from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })
const columns = generateColumns(15)
const data = generateData(columns, 200)

const fixedColumns = columns.map((column, columnIndex) => {
  let fixed: TableV2FixedDir | undefined = undefined
  if (columnIndex < 3) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 12) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed, width: 100 }
})

const CustomizedHeader: FunctionalComponent<
TableV2CustomizedHeaderSlotParam
> = ({ cells, columns, headerIndex }) => {
  if (headerIndex === 2) return cells

  const groupCells = [] as typeof cells
  let width = 0
  let idx = 0

  columns.forEach((column, columnIndex) => {
    if (column.placeholderSign === TableV2Placeholder)
      groupCells.push(cells[columnIndex])
    else {
      width += cells[columnIndex].props!.column.width
      idx++

      const nextColumn = columns[columnIndex + 1]
      if (
        columnIndex === columns.length - 1 ||
        nextColumn.placeholderSign === TableV2Placeholder ||
        idx === (headerIndex === 0 ? 4 : 2)
      ) {
        groupCells.push(
          <div
            class="flex items-center justify-center custom-header-cell"
            role="columnheader"
            style={{
              ...cells[columnIndex].props!.style,
              width: \`\${width}px\`,
            }}
          >
            Group width {width}
          </div>,
        )
        width = 0
        idx = 0
      }
    }
  })
  return groupCells
}

const headerClass = ({
  headerIndex,
}: Parameters<HeaderClassNameGetter<any>>[0]) => {
  if (headerIndex === 1) return 'primary-color'
  return ''
}
<\/script>

<style>
.table-v2-header-row .custom-header-cell {
  border-right: 1px solid var(--border-color);
}

.table-v2-header-row .custom-header-cell:last-child {
  border-right: none;
}

.primary-color {
  background-color: var(--primary);
  color: var(--bg-content);
  font-size: 14px;
  font-weight: bold;
}

.primary-color .custom-header-cell {
  padding: 0 4px;
}
</style>
`},null,8,["demos"]),We,Xe,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/filter","source-code":`<template>
  <hl-table-v2
    fixed
    :columns="fixedColumns"
    :data="data"
    :width="700"
    :height="400"
  />
</template>
<script lang="tsx" setup>
import { ref } from 'vue'
import {
  HlButton,
  HlIcon,
  HlCheckbox,
  HlPopover,
  TableV2FixedDir,
} from 'hongluan-ui'
import { TwoFilter } from '@hongluan-ui/icons'

import type { HeaderCellSlotProps } from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })
const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

const shouldFilter = ref(false)
const popoverRef = ref()

const onFilter = () => {
  popoverRef.value.hide()
  console.log('shouldFilter.value', shouldFilter.value)
  if (shouldFilter.value) {
    data.value = generateData(columns, 100, 'filtered-')
  } else {
    data.value = generateData(columns, 200)
  }
}

const onReset = () => {
  shouldFilter.value = false
  onFilter()
}

columns[0].headerCellRenderer = (props: HeaderCellSlotProps) => {
  return (
    <div class="flex items-center justify-center">
      <span class="m-r-xs font-sm">{props.column.title}</span>
      <HlPopover ref={popoverRef} trigger="click" {...{ width: 200 }}>
        {{
          default: () => (
            <div class="filter-wrapper">
              <div class="filter-group">
                <HlCheckbox v-model={shouldFilter.value}>
                  Filter Text
                </HlCheckbox>
              </div>
              <div class="table-v2-demo-filter">
                <HlButton text onClick={onFilter}>
                  Confirm
                </HlButton>
                <HlButton text onClick={onReset}>
                  Reset
                </HlButton>
              </div>
            </div>
          ),
          reference: () => (
            <HlIcon class="cursor-pointer" size="sm">
              <TwoFilter />
            </HlIcon>
          ),
        }}
      </HlPopover>
    </div>
  )
}

const fixedColumns = columns.map((column, columnIndex) => {
  let fixed: TableV2FixedDir | undefined = undefined
  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 9) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed, width: 100 }
})
<\/script>

<style>
.table-v2-demo-filter {
  border-top: var(--border-top);
  margin: 12px -12px -12px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
}
</style>
`},null,8,["demos"]),Je,Ze,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/sort","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sortState"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2SortOrder } from 'hongluan-ui'
import type { SortBy } from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
let data = generateData(columns, 200)

columns[0].sortable = true

const sortState = ref<SortBy>({
  key: 'column-0',
  order: TableV2SortOrder.ASC,
})

const onSort = (sortBy: SortBy) => {
  console.log(sortBy)
  data = data.reverse()
  sortState.value = sortBy
}
<\/script>
`},null,8,["demos"]),nt,et,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/controlled-sort","source-code":`<template>
  <hl-table-v2
    v-model:sort-state="sortState"
    :columns="columns"
    :data="data"
    :width="700"
    :height="400"
    fixed
    @column-sort="onSort"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableV2SortOrder } from 'hongluan-ui'
import type { SortBy, SortState } from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

columns[0].sortable = true
columns[1].sortable = true

const sortState = ref<SortState>({
  'column-0': TableV2SortOrder.DESC,
  'column-1': TableV2SortOrder.ASC,
})

const onSort = ({ key, order }: SortBy) => {
  sortState.value[key] = order
  data.value = data.value.reverse()
}
<\/script>
`},null,8,["demos"]),tt,at,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/cross-hovering","source-code":`<template>
  <div style="height: 400px">
    <hl-auto-resizer>
      <template #default="{ height, width }">
        <hl-table-v2
          :columns="columns"
          :cell-props="cellProps"
          :class="kls"
          :data="data"
          :width="width"
          :height="height"
        />
      </template>
    </hl-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
columns.unshift({
  key: 'column-n-1',
  width: 50,
  title: 'Row No.',
  cellRenderer: ({ rowIndex }) => \`\${rowIndex + 1}\`,
  align: 'center',
})
const data = generateData(columns, 200)

const cellProps = ({ columnIndex }) => {
  const key = \`hovering-col-\${columnIndex}\`
  return {
    ['data-key']: key,
    onMouseenter: () => {
      kls.value = key
    },
    onMouseleave: () => {
      kls.value = ''
    },
  }
}

const kls = ref<string>('')
<\/script>

<style>
.hovering-col-0 [data-key='hovering-col-0'],
.hovering-col-1 [data-key='hovering-col-1'],
.hovering-col-2 [data-key='hovering-col-2'],
.hovering-col-3 [data-key='hovering-col-3'],
.hovering-col-4 [data-key='hovering-col-4'],
.hovering-col-5 [data-key='hovering-col-5'],
.hovering-col-6 [data-key='hovering-col-6'],
.hovering-col-7 [data-key='hovering-col-7'],
.hovering-col-8 [data-key='hovering-col-8'],
.hovering-col-9 [data-key='hovering-col-9'],
.hovering-col-10 [data-key='hovering-col-10'] {
  background: var(--table-row-hover-bg-color);
}

[data-key='hovering-col-0'] {
  font-weight: bold;
  user-select: none;
  pointer-events: none;
}
</style>
`},null,8,["demos"]),lt,st,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/colspan","source-code":`<template>
  <hl-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </hl-table-v2>
</template>

<script lang="ts" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
  if (colSpan > 1) {
    let width = Number.parseInt(cells[colSpanIndex].props.style.width)
    for (let i = 1; i < colSpan; i++) {
      width += Number.parseInt(cells[colSpanIndex + i].props.style.width)
      cells[colSpanIndex + i] = null
    }
    const style = {
      ...cells[colSpanIndex].props.style,
      width: \`\${width}px\`,
      backgroundColor: 'var(--primary-light-3)',
    }
    cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })
  }

  return cells
}
<\/script>
`},null,8,["demos"]),ot,rt,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/rowspan","source-code":`<template>
  <hl-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </hl-table-v2>
</template>

<script lang="ts" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>
  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
  if (rowSpan > 1) {
    const cell = cells[rowSpanIndex]
    const style = {
      ...cell.props.style,
      backgroundColor: 'var(--primary-light-3)',
      height: \`\${rowSpan * 50 - 1}px\`,
      alignSelf: 'flex-start',
      zIndex: 1,
    }
    cells[rowSpanIndex] = cloneVNode(cell, { style })
  }
  return cells
}
<\/script>
`},null,8,["demos"]),dt,ct,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/spans","source-code":`<template>
  <hl-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </hl-table-v2>
</template>

<script lang="tsx" setup>
import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)

const colSpanIndex = 1
columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1
columns[colSpanIndex].align = 'center'

const rowSpanIndex = 0
columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>
  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {
  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })
  if (colSpan > 1) {
    let width = Number.parseInt(cells[colSpanIndex].props.style.width)
    for (let i = 1; i < colSpan; i++) {
      width += Number.parseInt(cells[colSpanIndex + i].props.style.width)
      cells[colSpanIndex + i] = null
    }
    const style = {
      ...cells[colSpanIndex].props.style,
      width: \`\${width}px\`,
      backgroundColor: 'var(--primary-light-3)',
    }
    cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })
  }

  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })
  if (rowSpan > 1) {
    const cell = cells[rowSpanIndex]
    const style = {
      ...cell.props.style,
      backgroundColor: 'var(--danger-light-3)',
      height: \`\${rowSpan * 50}px\`,
      alignSelf: 'flex-start',
      zIndex: 1,
    }
    cells[rowSpanIndex] = cloneVNode(cell, { style })
  } else {
    const style = cells[rowSpanIndex].props.style
    // override the cell here for creating a pure node without pollute the style
    cells[rowSpanIndex] = (
      <div style={{ ...style, width: \`\${style.width}px\` }} />
    )
  }
  return cells
}
<\/script>
`},null,8,["demos"]),it,ut,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/tree-data","source-code":`<template>
  <hl-table-v2
    v-model:expanded-row-keys="expandedRowKeys"
    :columns="columns"
    :data="treeData"
    :width="700"
    :expand-column-key="expandColumnKey"
    :height="400"
    fixed
    @row-expand="onRowExpanded"
    @expanded-rows-change="onExpandedRowsChange"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TableV2FixedDir } from 'hongluan-ui'

import type { ExpandedRowsChangeHandler, RowExpandHandler } from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10).map((column, columnIndex) => {
  let fixed!: TableV2FixedDir
  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 8) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed }
})

const data = generateData(columns, 200)

const expandColumnKey = 'column-0'

// add some sub items
for (let i = 0; i < 50; i++) {
  data.push(
    {
      ...data[0],
      id: \`\${data[0].id}-sub-\${i}\`,
      parentId: data[0].id,
      [expandColumnKey]: \`Sub \${i}\`,
    },
    {
      ...data[2],
      id: \`\${data[2].id}-sub-\${i}\`,
      parentId: data[2].id,
      [expandColumnKey]: \`Sub \${i}\`,
    },
    {
      ...data[2],
      id: \`\${data[2].id}-sub-sub-\${i}\`,
      parentId: \`\${data[2].id}-sub-\${i}\`,
      [expandColumnKey]: \`Sub-Sub \${i}\`,
    },
  )
}

function unflatten(
  data: ReturnType<typeof generateData>,
  rootId = null,
  dataKey = 'id',
  parentKey = 'parentId',
) {
  const tree: any[] = []
  const childrenMap = {}

  for (const datum of data) {
    const item = { ...datum }
    const id = item[dataKey]
    const parentId = item[parentKey]

    if (Array.isArray(item.children)) {
      childrenMap[id] = item.children.concat(childrenMap[id] || [])
    } else if (!childrenMap[id]) {
      childrenMap[id] = []
    }
    item.children = childrenMap[id]

    if (parentId !== undefined && parentId !== rootId) {
      if (!childrenMap[parentId]) childrenMap[parentId] = []
      childrenMap[parentId].push(item)
    } else {
      tree.push(item)
    }
  }

  return tree
}

const treeData = computed(() => unflatten(data))

const expandedRowKeys = ref<string[]>([])

const onRowExpanded = ({ expanded }: Parameters<RowExpandHandler<any>>[0]) => {
  console.log('Expanded:', expanded)
}

const onExpandedRowsChange = (
  expandedKeys: Parameters<ExpandedRowsChangeHandler>[0],
) => {
  console.log(expandedKeys)
}
<\/script>
`},null,8,["demos"]),pt,mt,ht,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/dynamic-height","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sort"
    :estimated-row-height="40"
    :width="700"
    :height="400"
    fixed
    @column-sort="onColumnSort"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import {
  HlButton,
  HlTag,
  TableV2FixedDir,
  TableV2SortOrder,
} from 'hongluan-ui'

import type { Column, SortBy } from '@hongluan-ui/components/table-v2'

const longText =
  'Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.'
const midText = 'Corrupti doloremque a quos vero delectus consequatur.'
const shortText = 'Eius optio fugiat.'

const textList = [shortText, midText, longText]

// generate random number in range 0 to 2

let id = 0

const dataGenerator = () => ({
  id: \`random:\${++id}\`,
  name: 'Tom',
  date: '2016-05-03',
  description: textList[Math.floor(Math.random() * 3)],
})

const columns: Column<any>[] = [
  {
    key: 'id',
    title: 'Id',
    dataKey: 'id',
    width: 150,
    sortable: true,
    fixed: TableV2FixedDir.LEFT,
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <HlTag>{name}</HlTag>,
  },
  {
    key: 'description',
    title: 'Description',
    dataKey: 'description',
    width: 150,
    cellRenderer: ({ cellData: description }) => (
      <div style="padding: 10px 0;">{description}</div>
    ),
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <HlButton size="sm" class="m-r-sm">Edit</HlButton>
        <HlButton size="sm" type="danger">
          Delete
        </HlButton>
      </>
    ),
    width: 150,
    align: 'center',
  },
]
const data = ref(
  Array.from({ length: 200 })
    .map(dataGenerator)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
)

const sort = ref<SortBy>({ key: 'name', order: TableV2SortOrder.ASC })

const onColumnSort = (sortBy: SortBy) => {
  const order = sortBy.order === 'asc' ? 1 : -1
  const dataClone = [...data.value]
  dataClone.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
  sort.value = sortBy
  data.value = dataClone
}
<\/script>
`},null,8,["demos"]),gt,_t,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/detailed-view","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :estimated-row-height="50"
    :expand-column-key="columns[0].key"
    :width="700"
    :height="400"
  >
    <template #row="props">
      <Row v-bind="props" />
    </template>
  </hl-table-v2>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const detailedText = \`Velit sed aspernatur tempora. Natus consequatur officiis dicta vel assumenda.
Itaque est temporibus minus quis. Ipsum commodiab porro vel voluptas illum.
Qui quam nulla et dolore autem itaque est.
Id consequatur ipsum ea fuga et odit eligendi impedit.
Maiores officiis occaecati et magnam et sapiente est velit sunt.
Non et tempore temporibus. Excepturi et quos. Minus distinctio aut.
Voluptatem ea excepturi omnis vel. Non aperiam sit sed laboriosam eaque omnis deleniti.
Est molestiae omnis non et nulla repudiandae fuga sit.\`

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = ref(
  generateData(columns, 200).map(data => {
    data.children = [
      {
        id: \`\${data.id}-detail-content\`,
        detail: detailedText,
      },
    ]
    return data
  }),
)

const Row = ({ cells, rowData }) => {
  if (rowData.detail) return <div class="p-6">{rowData.detail}</div>
  return cells
}

Row.inheritAttrs = false
<\/script>

<style>
.table-v2-row-depth-0 {
  height: 50px;
}

.table-v2-cell-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
`},null,8,["demos"]),yt,ft,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/footer","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :row-height="40"
    :width="700"
    :height="400"
    :footer-height="50"
    fixed
  >
    <template #footer>
      <div
        class="flex items-center"
        style="
          justify-content: center;
          height: 100%;
          background-color: var(--el-color-primary-light-7);
        "
      >
        Display a message in the footer
      </div>
    </template>
  </hl-table-v2>
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
<\/script>
`},null,8,["demos"]),xt,bt,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/empty","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="[]"
    :row-height="40"
    :width="700"
    :height="400"
    :footer-height="50"
  >
    <template #empty>
      <div class="flex items-center justify-center h-100%">
        \u6682\u65E0\u6570\u636E\u54E6\u54E6\u54E6
      </div>
    </template>
  </hl-table-v2>
</template>

<script lang="tsx" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const columns = generateColumns(10)
<\/script>
`},null,8,["demos"]),wt,vt,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/overlay","source-code":`<template>
  <hl-table-v2
    :columns="columns"
    :data="data"
    :row-height="40"
    :width="700"
    :height="400"
  >
    <template #overlay>
      <div
        class="hl-loading-mask"
        style="display: flex; align-items: center; justify-content: center"
      >
        <hl-icon class="is-loading" color="var(--primary)" size="xl">
          <TwoChartRadar />
        </hl-icon>
      </div>
    </template>
  </hl-table-v2>
</template>

<script lang="ts" setup>
import { TwoChartRadar } from '@hongluan-ui/icons'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
<\/script>
<style>
.example-showcase .table-v2-overlay {
  z-index: 9;
}
</style>
`},null,8,["demos"]),$t,Ct,jt,d(o,{fs:"",demos:h(u),"component-id":i,"path-name":"table-v2/manual-scroll","source-code":`<template>
  <div class="m-b-sm flex items-center">
    <hl-form-item label="Scroll pixels" class="mr-4">
      <hl-input v-model="scrollDelta" />
    </hl-form-item>
    <hl-form-item label="Scroll rows">
      <hl-input v-model="scrollRows" />
    </hl-form-item>
  </div>
  <div class="m-b-sm flex items-center">
    <hl-button class="m-r-sm" @click="scrollByPixels"> Scroll by pixels </hl-button>
    <hl-button @click="scrollByRows"> Scroll by rows </hl-button>
  </div>
  <div style="height: 400px">
    <hl-auto-resizer>
      <template #default="{ height, width }">
        <hl-table-v2
          ref="tableRef"
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </hl-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TableV2Instance } from 'hongluan-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: \`\${prefix}\${columnIndex}\`,
    dataKey: \`\${prefix}\${columnIndex}\`,
    title: \`Column \${columnIndex}\`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = \`Row \${rowIndex} - Col \${columnIndex}\`
        return rowData
      },
      {
        id: \`\${prefix}\${rowIndex}\`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
const tableRef = ref<TableV2Instance>()
const scrollDelta = ref(200)
const scrollRows = ref(10)

function scrollByPixels() {
  tableRef.value?.scrollToTop(scrollDelta.value)
}

function scrollByRows() {
  tableRef.value?.scrollToRow(scrollRows.value)
}
<\/script>
`},null,8,["demos"]),It]),d(a)],64)}}};export{At as default};
