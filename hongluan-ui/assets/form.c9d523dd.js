import{p as E,a0 as $,I as o,L as k,H as B,P as l,X as e,V as _,Q as r,T as n,R as F,W as C,ag as N,a9 as O,a3 as I,o as M}from"./vue.8a077a47.js";import{c as T}from"./hongluan-icons.286a55ba.js";import{H as L}from"./index.3e39e2d9.js";import"./hongluan.a075e642.js";import"./highlight.171c852c.js";const W=r("p",null,'"Full Name" label is automatically attached to the input:',-1),H=r("p",null,[n(' "Your Information" serves as a label for the group of inputs. '),r("br"),n(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')],-1),Y=E({setup(A){const t=$({fullName:"",firstName:"",lastName:""});return(c,m)=>{const d=o("hl-alert"),u=o("hl-input"),i=o("hl-form-item"),f=o("hl-group"),s=o("hl-form");return k(),B(s,{"labhl-position":"left","label-width":"150px",style:{"max-width":"460px"}},{default:l(()=>[e(f,{gap:"var(--md)"},{default:l(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:l(()=>[W]),_:1}),e(i,{label:"Full Name"},{default:l(()=>[e(u,{modelValue:_(t).fullName,"onUpdate:modelValue":m[0]||(m[0]=a=>_(t).fullName=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{gap:"var(--md)"},{default:l(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:l(()=>[H]),_:1}),e(i,{label:"Your Information"},{default:l(()=>[e(u,{modelValue:_(t).firstName,"onUpdate:modelValue":m[1]||(m[1]=a=>_(t).firstName=a),label:"First Name",placeholder:"First Name"},null,8,["modelValue"]),e(u,{modelValue:_(t).lastName,"onUpdate:modelValue":m[2]||(m[2]=a=>_(t).lastName=a),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const X=n("\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"),G=n("\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"),Q=n("\u7ACB\u5373\u521B\u5EFA"),K=n("\u53D6\u6D88"),Z=E({setup(A){const t=$({name:"",region:"shanghai",date1:"",type:[],resource:"1",desc:""}),c=()=>{console.log("submit!")};return(m,d)=>{const u=o("hl-input"),i=o("hl-form-item"),f=o("hl-option"),s=o("hl-select"),a=o("hl-date-picker"),p=o("hl-radio"),h=o("hl-radio-group"),b=o("hl-button"),y=o("hl-form");return k(),B(y,{model:_(t),width:["col-6","col-15"],"label-position":["items-right","items-middle"],"item-gap":"var(--md)"},{default:l(()=>[e(i,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(u,{modelValue:_(t).name,"onUpdate:modelValue":d[0]||(d[0]=g=>_(t).name=g),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(s,{modelValue:_(t).region,"onUpdate:modelValue":d[1]||(d[1]=g=>_(t).region=g),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(a,{modelValue:_(t).date1,"onUpdate:modelValue":d[2]||(d[2]=g=>_(t).date1=g),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",class:"m-r-sm"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(h,{modelValue:_(t).resource,"onUpdate:modelValue":d[3]||(d[3]=g=>_(t).resource=g),type:"primary"},{default:l(()=>[e(p,{label:"1"},{default:l(()=>[X]),_:1}),e(p,{label:"2"},{default:l(()=>[G]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:l(()=>[e(u,{modelValue:_(t).desc,"onUpdate:modelValue":d[4]||(d[4]=g=>_(t).desc=g),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1}),e(i,{offset:"offset-6"},{default:l(()=>[e(b,{type:"primary",class:"m-r-md",onClick:c},{default:l(()=>[Q]),_:1}),e(b,null,{default:l(()=>[K]),_:1})]),_:1})]),_:1},8,["model"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));const le=n("\u63D0\u4EA4"),te=n("\u65B0\u589E\u57DF\u540D"),re=E({setup(A){const t=F({domains:[{value:"",key:-1}],email:""}),c=F(null),m=()=>{c.value.validate(i=>{if(i)alert("submit!");else return console.log("error submit!!"),!1})},d=i=>{var f=t.value.domains.indexOf(i);f!==-1&&t.value.domains.splice(f,1)},u=()=>{t.value.domains.push({value:"",key:Date.now()})};return(i,f)=>{const s=o("hl-input"),a=o("hl-form-item"),p=o("hl-icon"),h=o("hl-button"),b=o("hl-form");return k(),B(b,{ref_key:"dynamicValidateFormRef",ref:c,model:t.value,width:["md:col-4","col"]},{default:l(()=>[e(a,{prop:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",trigger:"blur"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}]},{default:l(()=>[e(s,{modelValue:t.value.email,"onUpdate:modelValue":f[0]||(f[0]=y=>t.value.email=y)},null,8,["modelValue"])]),_:1}),(k(!0),C(I,null,N(t.value.domains,(y,g)=>(k(),B(a,{key:y.key,label:"\u57DF\u540D"+g,prop:"domains."+g+".value",rules:{required:!0,message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:l(()=>[e(s,{modelValue:y.value,"onUpdate:modelValue":V=>y.value=V},null,8,["modelValue","onUpdate:modelValue"]),e(h,{type:"primary",effect:"light",class:"m-l-sm",equal:"",onClick:O(V=>d(y),["prevent"])},{icon:l(()=>[e(p,null,{default:l(()=>[e(_(T))]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),e(a,{label:" "},{default:l(()=>[e(h,{type:"primary",class:"m-r-sm",onClick:f[1]||(f[1]=y=>m())},{default:l(()=>[le]),_:1}),e(h,{class:"m-r-sm",onClick:u},{default:l(()=>[te]),_:1})]),_:1})]),_:1},8,["model"])}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));const ne=E({setup(A){const t=F({user:"",region:""});return(c,m)=>{const d=o("hl-input"),u=o("hl-form-item"),i=o("hl-option"),f=o("hl-select"),s=o("hl-form");return k(),C(I,null,[e(s,{model:t.value,width:["col-24","col-24"],class:"hl-row grid grid-direction-vertical xl:count-3 lg:count-2",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:l(()=>[e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[0]||(m[0]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(f,{modelValue:t.value.region,"onUpdate:modelValue":m[1]||(m[1]=a=>t.value.region=a),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(i,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(i,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[2]||(m[2]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[3]||(m[3]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[4]||(m[4]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[5]||(m[5]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),e(s,{model:t.value,width:["col-5","col-19"],gap:"var(--md)",class:"hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:l(()=>[e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[6]||(m[6]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{modelValue:t.value.region,"onUpdate:modelValue":m[7]||(m[7]=a=>t.value.region=a),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(i,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(i,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[8]||(m[8]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[9]||(m[9]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[10]||(m[10]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[11]||(m[11]=a=>t.value.user=a),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));const ue=n("\u67E5\u8BE2"),de=E({setup(A){const t=F({user:"",region:""}),c=()=>{console.log("submit!")};return(m,d)=>{const u=o("hl-input"),i=o("hl-form-item"),f=o("hl-option"),s=o("hl-select"),a=o("hl-button"),p=o("hl-form");return k(),B(p,{inline:"",model:t.value,gap:"var(--md)","item-gap":"var(--md)"},{default:l(()=>[e(i,{label:"\u5BA1\u6279\u4EBA",required:""},{default:l(()=>[e(u,{modelValue:t.value.user,"onUpdate:modelValue":d[0]||(d[0]=h=>t.value.user=h),placeholder:"\u5BA1\u6279\u4EBA"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(s,{modelValue:t.value.region,"onUpdate:modelValue":d[1]||(d[1]=h=>t.value.region=h),placeholder:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(a,{type:"primary",onClick:c},{default:l(()=>[ue]),_:1})]),_:1})]),_:1},8,["model"])}}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const ie=n("\u63D0\u4EA4"),se=n("\u91CD\u7F6E"),ce=E({setup(A){const t=F({age:""}),c=F(null),m=()=>{c.value.validate(u=>{u&&L("submit")})},d=()=>{c.value.resetFields()};return(u,i)=>{const f=o("hl-input"),s=o("hl-form-item"),a=o("hl-button"),p=o("hl-form");return k(),B(p,{ref_key:"numberValidateFormRef",ref:c,model:t.value,inline:"",style:{"--form-padding-y":"6px"}},{default:l(()=>[e(s,{label:"\u5E74\u9F84",prop:"age",s:"",rules:[{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"},{type:"number",message:"\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C"}]},{default:l(()=>[e(f,{modelValue:t.value.age,"onUpdate:modelValue":i[0]||(i[0]=h=>t.value.age=h),modelModifiers:{number:!0},"native-type":"age",autocomplete:"off",block:""},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(a,{type:"primary",class:"m-r-sm",onClick:i[1]||(i[1]=h=>m())},{default:l(()=>[ie]),_:1}),e(a,{onClick:i[2]||(i[2]=h=>d())},{default:l(()=>[se]),_:1})]),_:1})]),_:1},8,["model"])}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const he=E({setup(A){const t=F("items-left"),c=F("items-middle"),m=F({name:"",region:"",type:""});return(d,u)=>{const i=o("hl-option"),f=o("hl-select"),s=o("hl-group"),a=o("hl-form-item"),p=o("hl-input"),h=o("hl-form");return k(),B(h,{"label-position":[t.value,c.value],width:["md:col-6","md:col-14"],model:m.value},{default:l(()=>[e(a,{label:"Label\u5BF9\u9F50\uFF1A"},{default:l(()=>[e(s,{gap:"var(--sm)"},{default:l(()=>[e(f,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=b=>t.value=b),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:l(()=>[e(i,{label:"items-left",value:"items-left"}),e(i,{label:"items-center",value:"items-center"}),e(i,{label:"items-right",value:"items-right"})]),_:1},8,["modelValue"]),e(f,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=b=>c.value=b),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:l(()=>[e(i,{label:"items-top",value:"items-top"}),e(i,{label:"items-middle",value:"items-middle"}),e(i,{label:"items-bottom",value:"items-bottom"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(a,{label:"\u6D3B\u52A8\u533A\u57DF\uFF1A"},{default:l(()=>[e(p,{modelValue:m.value.region,"onUpdate:modelValue":u[2]||(u[2]=b=>m.value.region=b),block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:l(()=>[e(p,{modelValue:m.value.type,"onUpdate:modelValue":u[3]||(u[3]=b=>m.value.type=b),block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:l(()=>[e(p,{modelValue:m.value.type,"onUpdate:modelValue":u[4]||(u[4]=b=>m.value.type=b),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["label-position","model"])}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));const be=n("\u63D0\u4EA4"),_e=n("\u91CD\u7F6E"),ge=E({setup(A){const t=F({pass:"",checkPass:"",age:""}),c=F(null),i=F({pass:[{validator:(a,p,h)=>{p===""?h(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):(t.value.checkPass!==""&&c.value.validateField("checkPass"),h())},trigger:"blur"}],checkPass:[{validator:(a,p,h)=>{p===""?h(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):p!==t.value.pass?h(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):h()},trigger:"blur"}],age:[{validator:(a,p,h)=>{if(!p)return h(new Error("\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"));setTimeout(()=>{Number.isInteger(p)?p<18?h(new Error("\u5FC5\u987B\u5E74\u6EE118\u5C81")):h():h(new Error("\u8BF7\u8F93\u5165\u6570\u5B57\u503C"))},1e3)},trigger:"blur"}]}),f=()=>{c.value.validate(a=>{if(a)alert("submit!");else return console.log("error submit!!"),!1})},s=()=>{c.value.resetFields()};return(a,p)=>{const h=o("hl-input"),b=o("hl-form-item"),y=o("hl-button"),g=o("hl-form");return k(),B(g,{ref_key:"ruleFormRef",ref:c,model:t.value,rules:i.value,width:["md:col-4","col"]},{default:l(()=>[e(b,{label:"\u5BC6\u7801",prop:"pass"},{default:l(()=>[e(h,{modelValue:t.value.pass,"onUpdate:modelValue":p[0]||(p[0]=V=>t.value.pass=V),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass"},{default:l(()=>[e(h,{modelValue:t.value.checkPass,"onUpdate:modelValue":p[1]||(p[1]=V=>t.value.checkPass=V),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u5E74\u9F84",prop:"age"},{default:l(()=>[e(h,{modelValue:t.value.age,"onUpdate:modelValue":p[2]||(p[2]=V=>t.value.age=V),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),e(b,{label:" "},{default:l(()=>[e(y,{type:"primary",class:"m-r-sm",onClick:p[3]||(p[3]=V=>f())},{default:l(()=>[be]),_:1}),e(y,{onClick:p[4]||(p[4]=V=>s())},{default:l(()=>[_e]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var ve=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));const Fe=n(" \u5C3A\u5BF8\uFF1A"),ye=n("\u5C0F"),Ve=n("\u9ED8\u8BA4"),De=n("\u5927"),ke=r("br",null,null,-1),Ae=r("br",null,null,-1),Ee=n("\u7ACB\u5373\u521B\u5EFA"),Be=n("\u53D6\u6D88"),xe=E({setup(A){const t=F("md"),c=F({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),m=()=>{console.log("submit!")};return(d,u)=>{const i=o("hl-radio"),f=o("hl-radio-group"),s=o("hl-input"),a=o("hl-form-item"),p=o("hl-option"),h=o("hl-select"),b=o("hl-date-picker"),y=o("hl-time-picker"),g=o("hl-group"),V=o("hl-checkbox"),x=o("hl-checkbox-group"),w=o("hl-button"),z=o("hl-form");return k(),C(I,null,[Fe,e(f,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=D=>t.value=D)},{default:l(()=>[e(i,{label:"sm"},{default:l(()=>[ye]),_:1}),e(i,{label:"md"},{default:l(()=>[Ve]),_:1}),e(i,{label:"lg"},{default:l(()=>[De]),_:1})]),_:1},8,["modelValue"]),ke,Ae,e(z,{ref:"form",model:c.value,width:["md:col-4","col"],size:t.value},{default:l(()=>[e(a,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:c.value.name,"onUpdate:modelValue":u[1]||(u[1]=D=>c.value.name=D)},null,8,["modelValue"])]),_:1}),e(a,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(h,{modelValue:c.value.region,"onUpdate:modelValue":u[2]||(u[2]=D=>c.value.region=D),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(a,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(g,{merge:"",indent:""},{default:l(()=>[e(b,{modelValue:c.value.date1,"onUpdate:modelValue":u[3]||(u[3]=D=>c.value.date1=D),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"]),e(y,{modelValue:c.value.date2,"onUpdate:modelValue":u[4]||(u[4]=D=>c.value.date2=D),placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:l(()=>[e(x,{modelValue:c.value.type,"onUpdate:modelValue":u[5]||(u[5]=D=>c.value.type=D)},{default:l(()=>[e(V,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(V,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(V,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(a,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(f,{modelValue:c.value.resource,"onUpdate:modelValue":u[6]||(u[6]=D=>c.value.resource=D)},{default:l(()=>[e(i,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(i,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(a,{offset:"md:offset-4"},{default:l(()=>[e(w,{type:"primary",class:"m-r-sm",onClick:m},{default:l(()=>[Ee]),_:1}),e(w,null,{default:l(()=>[Be]),_:1})]),_:1})]),_:1},8,["model","size"])],64)}}});var we=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));const Ce=n("\u7ACB\u5373\u521B\u5EFA"),Ie=n("\u91CD\u7F6E"),ze=E({setup(A){const t=F({location:[],name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),c=F({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],location:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9",trigger:"change"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"}],date1:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}],date2:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],type:[{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"}],resource:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90",trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}]}),m=F([{value:"BJ",label:"\u5317\u4EAC",children:[{value:"HD",label:"\u6D77\u6DC0\u533A"},{value:"XW",label:"\u5BA3\u6B66\u533A"},{value:"CW",label:"\u5D07\u6587\u533A",children:[{value:"WFJ",label:"\u738B\u5E9C\u4E95"},{value:"DD",label:"\u4E1C\u5355"}]}]}]),d=F(null),u=()=>{d.value.validate(f=>{if(f)alert("submit!");else return console.log("error submit!!"),!1})},i=()=>{d.value.resetFields()};return(f,s)=>{const a=o("hl-input"),p=o("hl-select"),h=o("hl-group"),b=o("hl-form-item"),y=o("hl-cascader"),g=o("hl-option"),V=o("hl-date-picker"),x=o("hl-col"),w=o("hl-time-picker"),z=o("hl-row"),D=o("hl-switch"),P=o("hl-checkbox"),S=o("hl-checkbox-group"),U=o("hl-radio"),R=o("hl-radio-group"),j=o("hl-button"),q=o("hl-form");return k(),B(q,{ref_key:"ruleFormRef",ref:d,model:t.value,rules:c.value,"label-position":["items-right","items-left"],gap:"var(--lg)","item-gap":"var(--md)",width:["md:col-6","md:col-18"]},{default:l(()=>[e(b,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:l(()=>[e(h,{"deep-merge":"",indent:""},{default:l(()=>[e(a,{modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=v=>t.value.name=v)},null,8,["modelValue"]),e(p,{placeholder:"\u56E2\u961F",class:"static w-sm"})]),_:1})]),_:1}),e(b,{label:"\u6D3B\u52A8\u5730\u70B9",prop:"location"},{default:l(()=>[e(y,{modelValue:t.value.location,"onUpdate:modelValue":s[1]||(s[1]=v=>t.value.location=v),options:m.value},null,8,["modelValue","options"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:l(()=>[e(p,{modelValue:t.value.region,"onUpdate:modelValue":s[2]||(s[2]=v=>t.value.region=v),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(g,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(g,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u65F6\u95F4",required:""},{default:l(()=>[e(z,null,{default:l(()=>[e(x,{span:12},{default:l(()=>[e(b,{prop:"date1"},{default:l(()=>[e(V,{modelValue:t.value.date1,"onUpdate:modelValue":s[3]||(s[3]=v=>t.value.date1=v),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{span:12},{default:l(()=>[e(b,{prop:"date2"},{default:l(()=>[e(w,{modelValue:t.value.date2,"onUpdate:modelValue":s[4]||(s[4]=v=>t.value.date2=v),placeholder:"\u9009\u62E9\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:l(()=>[e(D,{modelValue:t.value.delivery,"onUpdate:modelValue":s[5]||(s[5]=v=>t.value.delivery=v),type:"primary"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:l(()=>[e(S,{modelValue:t.value.type,"onUpdate:modelValue":s[6]||(s[6]=v=>t.value.type=v)},{default:l(()=>[e(P,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(P,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:l(()=>[e(R,{modelValue:t.value.resource,"onUpdate:modelValue":s[7]||(s[7]=v=>t.value.resource=v)},{default:l(()=>[e(U,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(U,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u5F62\u5F0F",prop:"desc"},{default:l(()=>[e(a,{modelValue:t.value.desc,"onUpdate:modelValue":s[8]||(s[8]=v=>t.value.desc=v),"native-type":"textarea",block:""},null,8,["modelValue"])]),_:1}),e(b,{offset:"md:offset-6"},{default:l(()=>[e(j,{type:"primary",class:"m-r-sm",onClick:s[9]||(s[9]=v=>u())},{default:l(()=>[Ce]),_:1}),e(j,{class:"m-r-sm",onClick:s[10]||(s[10]=v=>i())},{default:l(()=>[Ie]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));const Ue=n("\u67E5\u8BE2"),je=E({setup(A){const t=F({user:"",region:""}),c=()=>{console.log("submit!")};return(m,d)=>{const u=o("hl-input"),i=o("hl-form-item"),f=o("hl-option"),s=o("hl-select"),a=o("hl-button"),p=o("hl-form");return k(),B(p,{model:t.value,fill:""},{default:l(()=>[e(i,{label:"\u5BA1\u6279\u4EBA"},{default:l(()=>[e(u,{modelValue:t.value.user,"onUpdate:modelValue":d[0]||(d[0]=h=>t.value.user=h),placeholder:"\u5BA1\u6279\u4EBA",block:""},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(s,{modelValue:t.value.region,"onUpdate:modelValue":d[1]||(d[1]=h=>t.value.region=h),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(a,{type:"primary",block:"",onClick:c},{default:l(()=>[Ue]),_:1})]),_:1})]),_:1},8,["model"])}}});var $e=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));const Se=r("h1",null,"Form \u8868\u5355",-1),Re=r("p",null,"\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E",-1),qe=r("div",null,[r("p",null,"\u5728 Form \u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u57DF\u7531\u4E00\u4E2A FormItem \u7EC4\u4EF6\u6784\u6210\uFF0C\u8868\u5355\u57DF\u4E2D\u53EF\u4EE5\u653E\u7F6E\u5404\u79CD\u7C7B\u578B\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u5305\u62EC Input\u3001Select\u3001Checkbox\u3001Radio\u3001Switch\u3001DatePicker\u3001TimePicker")],-1),Ne=r("div",{class:"doc-tip"},[r("p",null,[n("W3C \u6807\u51C6\u4E2D\u6709\u5982\u4E0B"),r("a",{href:"https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"},"\u89C4\u5B9A"),n("\uFF1A")]),r("p",null,[n("\u5373\uFF1A\u5F53\u4E00\u4E2A form \u5143\u7D20\u4E2D\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u5728\u8BE5\u8F93\u5165\u6846\u4E2D\u6309\u4E0B\u56DE\u8F66\u5E94\u63D0\u4EA4\u8BE5\u8868\u5355\u3002\u5982\u679C\u5E0C\u671B\u963B\u6B62\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5728 From \u7EC4\u4EF6\u4E0A\u6DFB\u52A0 "),r("code",null,"@submit.native.prevent"),n("\u3002")])],-1),Oe=r("h2",{id:"chui-zhi-biao-dan"},[r("a",{class:"header-anchor",href:"#chui-zhi-biao-dan"}),n(" \u5782\u76F4\u8868\u5355")],-1),Me=r("p",null,[n("\u5F53\u4F60\u6CA1\u6709\u8BBE\u7F6E"),r("code",null,"width"),n(" \u5C5E\u6027\u65F6\uFF0Cform\u7EC4\u4EF6\u9ED8\u8BA4\u628A\u6807\u9898\u548C\u8868\u5355\u5143\u7D20\u5206\u884C\u653E\u7F6E\u3002")],-1),Te=r("div",null,[r("p",null,[n("\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),r("code",null,"width"),n(" \u5C5E\u6027\u4E3A"),r("code",null,"100%"),n(),r("code",null,"block"),n(" \u6216\u8005 "),r("code",null,"col-24"),n("\u6765\u5B9E\u73B0\u6574\u884C\u7684\u6548\u679C\u3002")])],-1),Le=r("h2",{id:"xing-nei-biao-dan"},[r("a",{class:"header-anchor",href:"#xing-nei-biao-dan"}),n(" \u884C\u5185\u8868\u5355")],-1),We=r("p",null,"\u5F53\u5782\u76F4\u65B9\u5411\u7A7A\u95F4\u53D7\u9650\u4E14\u8868\u5355\u8F83\u7B80\u5355\u65F6\uFF0C\u53EF\u4EE5\u5728\u4E00\u884C\u5185\u653E\u7F6E\u8868\u5355\u3002",-1),He=r("div",null,[r("p",null,[n("\u8BBE\u7F6E "),r("code",null,"inline"),n(" \u5C5E\u6027\u53EF\u4EE5\u8BA9\u8868\u5355\u57DF\u53D8\u4E3A\u884C\u5185\u7684\u8868\u5355\u57DF")])],-1),Ye=r("h2",{id:"dui-qi-fang-shi"},[r("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),n(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Je=r("p",null,"\u6839\u636E\u5177\u4F53\u76EE\u6807\u548C\u5236\u7EA6\u56E0\u7D20\uFF0C\u9009\u62E9\u6700\u4F73\u7684\u6807\u7B7E\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),Xe=r("div",null,[r("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),r("code",null,"label-position"),n(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u5BF9\u9F50\u65B9\u5F0F\u4E5F\u652F\u6301\u54CD\u5E94\u5F0F\u6807\u7B7E\u4F8B\u5982\uFF1A"),r("code",null,"xl:items-right")])],-1),Ge=r("h2",{id:"biao-dan-yan-zheng"},[r("a",{class:"header-anchor",href:"#biao-dan-yan-zheng"}),n(" \u8868\u5355\u9A8C\u8BC1")],-1),Qe=r("p",null,"\u5728\u8868\u5355\u9A8C\u8BC1\u5C3D\u53EF\u80FD\u8BA9\u7528\u6237\u66F4\u65E9\u5730\u53D1\u73B0\u5E76\u7EA0\u6B63\u9519\u8BEF\u7684\u8F93\u5165\u3002",-1),Ke=r("div",null,[r("p",null,[n("Form \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8868\u5355\u9A8C\u8BC1\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 "),r("code",null,"rules"),n(" \u5C5E\u6027\u4F20\u5165\u7EA6\u5B9A\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5E76\u5C06 Form-Item \u7684 "),r("code",null,"prop"),n(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u9700\u6821\u9A8C\u7684\u5B57\u6BB5\u540D\u5373\u53EF\u3002\u6821\u9A8C\u89C4\u5219\u53C2\u89C1 "),r("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator")])],-1),Ze=r("h2",{id:"zi-ding-yi-xiao-yan-gui-ze"},[r("a",{class:"header-anchor",href:"#zi-ding-yi-xiao-yan-gui-ze"}),n(" \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219")],-1),el=r("p",null,"\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u6765\u5B8C\u6210\u5BC6\u7801\u7684\u4E8C\u6B21\u9A8C\u8BC1\u3002",-1),ll=r("div",{class:"doc-tip"},[r("p",null,[n("\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 "),r("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator"),n("\u3002 "),r("em",null,[r("strong",null,[n("\u5982\u679CWebpack5\u62A5async_validator\u4E0D\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u7C7B\u4F3C\u7684\u9519\u8BEF\uFF0C\u8BF7\u5728alias\u914D\u7F6E\u4E2D\u589E\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A"),r("code",null,'"async-validator": "async-validator/dist-web/index.js",')])])])],-1),tl=r("h2",{id:"dong-tai-zeng-jian-biao-dan-xiang"},[r("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-dan-xiang"}),n(" \u52A8\u6001\u589E\u51CF\u8868\u5355\u9879")],-1),rl=r("div",null,[r("p",null,"\u9664\u4E86\u5728 Form \u7EC4\u4EF6\u4E0A\u4E00\u6B21\u6027\u4F20\u9012\u6240\u6709\u7684\u9A8C\u8BC1\u89C4\u5219\u5916\u8FD8\u53EF\u4EE5\u5728\u5355\u4E2A\u7684\u8868\u5355\u57DF\u4E0A\u4F20\u9012\u5C5E\u6027\u7684\u9A8C\u8BC1\u89C4\u5219")],-1),ol=r("h2",{id:"shu-zi-lei-xing-yan-zheng"},[r("a",{class:"header-anchor",href:"#shu-zi-lei-xing-yan-zheng"}),n(" \u6570\u5B57\u7C7B\u578B\u9A8C\u8BC1")],-1),nl=r("div",null,[r("p",null,[n("\u6570\u5B57\u7C7B\u578B\u7684\u9A8C\u8BC1\u9700\u8981\u5728 "),r("code",null,"v-model"),n(" \u5904\u52A0\u4E0A "),r("code",null,".number"),n(" \u7684\u4FEE\u9970\u7B26\uFF0C\u8FD9\u662F "),r("code",null,"Vue"),n(" \u81EA\u8EAB\u63D0\u4F9B\u7684\u7528\u4E8E\u5C06\u7ED1\u5B9A\u503C\u8F6C\u5316\u4E3A "),r("code",null,"number"),n(" \u7C7B\u578B\u7684\u4FEE\u9970\u7B26\u3002")])],-1),al=r("h2",{id:"biao-dan-nei-zu-jian-chi-cun-kong-zhi"},[r("a",{class:"header-anchor",href:"#biao-dan-nei-zu-jian-chi-cun-kong-zhi"}),n(" \u8868\u5355\u5185\u7EC4\u4EF6\u5C3A\u5BF8\u63A7\u5236")],-1),ul=r("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E Form \u4E0A\u7684 "),r("code",null,"size"),n(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8BE5\u8868\u5355\u5185\u6240\u6709\u53EF\u8C03\u8282\u5927\u5C0F\u7684\u7EC4\u4EF6\u7EE7\u627F\u8BE5\u5C3A\u5BF8\u3002FormItem \u4E5F\u5177\u6709\u8BE5\u5C5E\u6027\u3002")],-1),dl=r("div",null,[r("p",null,[n("\u5982\u679C\u5E0C\u671B\u67D0\u4E2A\u8868\u5355\u9879\u6216\u67D0\u4E2A\u8868\u5355\u7EC4\u4EF6\u7684\u5C3A\u5BF8\u4E0D\u540C\u4E8E Form \u4E0A\u7684"),r("code",null,"size"),n("\u5C5E\u6027\uFF0C\u76F4\u63A5\u4E3A\u8FD9\u4E2A\u8868\u5355\u9879\u6216\u8868\u5355\u7EC4\u4EF6\u8BBE\u7F6E\u81EA\u5DF1\u7684"),r("code",null,"size"),n("\u5373\u53EF\u3002")])],-1),ml=r("h2",{id:"ke-fang-wen-xing"},[r("a",{class:"header-anchor",href:"#ke-fang-wen-xing"}),n(" \u53EF\u8BBF\u95EE\u6027")],-1),il=r("p",null,[n("\u5F53\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\uFF08\u6216\u8005Select\uFF0CCheckbox\u7B49\u76F8\u5173\u63A7\u4EF6\uFF09\u5728 "),r("code",null,"FormItem"),n(" \u91CC\u65F6\uFF0C\u8868\u5355\u9879\u7684\u6807\u7B7E\u5C06\u4F1A\u81EA\u52A8\u9644\u52A0\u5230Input\u4E0A\u3002\u5F53\u6709\u591A\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u8868\u5355\u9879\u5C06\u4F1A\u6839\u636E"),r("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/"},"WAI-ARIA"),n("\u89C4\u8303\uFF0C\u8D4B\u4E88 "),r("code",null,"role"),n(" \u5C5E\u6027\u4E3A"),r("a",{href:"https://www.w3.org/TR/wai-aria/#group"},"group"),n(" \u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u9644\u52A0\u6807\u7B7E\u5230\u76F8\u5E94\u7684\u8F93\u5165\u6846\u3002")],-1),sl=r("h2",{id:"li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"},[r("a",{class:"header-anchor",href:"#li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"}),n(" \u5229\u7528Grid\u7EC4\u4EF6\u521B\u5EFA\u591A\u5217\u8868\u5355")],-1),cl=r("p",null,"\u4F7F\u7528\u9E3F\u9E3E\u5F3A\u5927\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u53EF\u521B\u9020\u51FA\u66F4\u591A\u4E30\u5BCC\u4E14\u54CD\u5E94\u5F0F\u7684\u8868\u5355\u5E03\u5C40",-1),pl=r("div",null,[r("p",null,"\u672C\u793A\u4F8B\u4F7F\u7528class\u7C7B\u540D\u5C06 Form \u7EC4\u4EF6\u6784\u5EFA\u6210\u4E00\u4E2A Row\uFF0C \u5E76\u5C06\u5176\u8F85\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u7279\u6027\u3002")],-1),hl=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>Record&lt;string, any&gt;</td><td>\u2014</td><td>\u2014</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td>FormRules</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inline</td><td>\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>left/center/right/top/middle/bottom</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Grid \u4E2D\u63D0\u4F9B\u7684\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-suffix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-prefix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u524D\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hide-required-asterisk</td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>require-asterisk-position</td><td>\u7EA2\u8272\u661F\u53F7\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>left</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>validate-on-rule-change</td><td>\u662F\u5426\u5728 <code>rules</code> \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E\u6BCF\u4E2A FormItem \u7684\u5782\u76F4\u95F4\u8DDD\u3002\u7531\u4E8EForm\u91C7\u7528Flex\u5E03\u5C40\uFF0C\u6240\u4EE5\u53EA\u6709Form\u4E0B\u7684\u76F4\u63A5\u5B50FormItem\u624D\u8D77\u4F5C\u7528</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E FormItem \u4E0B\u7684 label \u548C content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E<code>item-gap-x</code>\u6216<code>item-gap-y</code></td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002\u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u5355\u5185\u7EC4\u4EF6\u4E0A\u7684 disabled \u5C5E\u6027\u4E0D\u518D\u751F\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scroll-to-error</td><td>\u5F53\u9A8C\u8BC1\u5931\u8D25\u65F6\uFF0C\u662F\u5426\u6EDA\u52A8\u5230\u9519\u8BEF\u8868\u5355\u9879</td><td>boolean</td><td>false</td><td></td></tr></tbody></table><h2 id="rules"><a class="header-anchor" href="#rules"></a> Rules</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>string</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td><code>(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u5B57\u6BB5</td><td><code>(prop: FormItemProp) =&gt; void</code></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1</td><td>(prop: FormItemProp, isValid: boolean, message: string) =&gt; void</td></tr></tbody></table><h2 id="form-item-attributes"><a class="header-anchor" href="#form-item-attributes"></a> Form Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td>string</td><td>\u4F20\u5165 Form \u7EC4\u4EF6\u7684 <code>model</code> \u4E2D\u7684\u5B57\u6BB5</td><td>\u2014</td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>right/left/top</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Layout \u4E2D\u63D0\u4F9B\u4E86\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09\u3002</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219, \u5177\u4F53\u914D\u7F6E\u89C1\u4E0B\u8868, \u66F4\u591A\u5185\u5BB9\u53C2\u8003<a href="https://github.com/yiminghe/async-validator">async-validator</a></td><td>FormItemRule | FormItemRule[]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>error</td><td>\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3A<code>error</code>\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>-</td></tr><tr><td>offset</td><td>\u5F53\u4F60\u672A\u8BBE\u7F6Elabel\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528offset\u63A7\u5236form-content\u7684\u504F\u79FB\uFF0C\u5177\u4F53\u53C2\u8003Grid\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F</td><td>string</td><td></td><td>-</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E form-item \u4E0B\u7684 form-label \u548C form-content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eitem-gap</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E \u2248/ \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr></tbody></table><h4 id="formitemrule"><a class="header-anchor" href="#formitemrule"></a> FormItemRule</h4><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="form-item-slots"><a class="header-anchor" href="#form-item-slots"></a> Form Item Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Form Item \u7684\u5185\u5BB9</td></tr><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u663E\u793A. \u53C2\u6570\u4E3A { label }</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u53C2\u6570\u4E3A { error }</td></tr></tbody></table><h2 id="form-item-methods"><a class="header-anchor" href="#form-item-methods"></a> Form Item Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>resetField</td><td>\u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr></tbody></table>',16),Fl={setup(A){const t={"../../../examples/form/accessibility.vue":J,"../../../examples/form/basic.vue":ee,"../../../examples/form/dynamic.vue":oe,"../../../examples/form/grid.vue":ae,"../../../examples/form/inline.vue":me,"../../../examples/form/number.vue":pe,"../../../examples/form/position.vue":fe,"../../../examples/form/rule.vue":ve,"../../../examples/form/size.vue":we,"../../../examples/form/validate.vue":Pe,"../../../examples/form/vertical.vue":$e};return(c,m)=>{const d=o("demo-block"),u=o("right-nav");return k(),C(I,null,[r("section",null,[Se,Re,e(d,{fs:"",demos:_(t),"path-name":"form/basic","source-code":`<template>\r
  <hl-form :model="form" :width="['col-6','col-15']" :label-position="['items-right', 'items-middle']" item-gap="var(--md)">\r
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0">\r
      <hl-input v-model="form.name" placeholder="\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0" />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">\r
      <hl-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4">\r
      <hl-date-picker v-model="form.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" class="m-r-sm" />\r
    </hl-form-item>\r
\r
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90">\r
      <hl-radio-group v-model="form.resource" type="primary">\r
        <hl-radio label="1">\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9</hl-radio>\r
        <hl-radio label="2">\u7EBF\u4E0B\u573A\u5730\u514D\u8D39</hl-radio>\r
      </hl-radio-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F">\r
      <hl-input v-model="form.desc" native-type="textarea" :rows="3" block />\r
    </hl-form-item>\r
    <hl-form-item offset="offset-6">\r
      <hl-button type="primary" class="m-r-md" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</hl-button>\r
      <hl-button>\u53D6\u6D88</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
const form = reactive({\r
  name: '',\r
  region: 'shanghai',\r
  date1: '',\r
  type: [],\r
  resource: '1',\r
  desc: '',\r
})\r
const onSubmit = () => {\r
  console.log('submit!')\r
}\r
\r
<\/script>\r
`},{default:l(()=>[qe]),_:1},8,["demos"]),Ne,Oe,Me,e(d,{fs:"",demos:_(t),"path-name":"form/vertical","source-code":`<template>\r
  <hl-form :model="formInline" fill>\r
    <hl-form-item label="\u5BA1\u6279\u4EBA">\r
      <hl-input v-model="formInline.user" placeholder="\u5BA1\u6279\u4EBA" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">\r
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item>\r
      <hl-button type="primary" block @click="onSubmit">\u67E5\u8BE2</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const formInline = ref({\r
  user: '',\r
  region: '',\r
})\r
const onSubmit = () => {\r
  console.log('submit!')\r
}\r
<\/script>\r
`},{default:l(()=>[Te]),_:1},8,["demos"]),Le,We,e(d,{fs:"",demos:_(t),"path-name":"form/inline","source-code":`<template>\r
  <hl-form inline :model="formInline" gap="var(--md)" item-gap="var(--md)">\r
    <hl-form-item label="\u5BA1\u6279\u4EBA" required>\r
      <hl-input v-model="formInline.user" placeholder="\u5BA1\u6279\u4EBA" />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">\r
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF">\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item>\r
      <hl-button type="primary" @click="onSubmit">\u67E5\u8BE2</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const formInline = ref({\r
  user: '',\r
  region: '',\r
})\r
const onSubmit = () => {\r
  console.log('submit!')\r
}\r
\r
<\/script>\r
`},{default:l(()=>[He]),_:1},8,["demos"]),Ye,Je,e(d,{fs:"",demos:_(t),"path-name":"form/position","source-code":`<template>\r
  <hl-form :label-position="[labelPosition, labelPosition2]" :width="['md:col-6','md:col-14']" :model="formLabelAlign">\r
    <hl-form-item label="Label\u5BF9\u9F50\uFF1A">\r
      <hl-group gap="var(--sm)">\r
        <hl-select v-model="labelPosition" placeholder="\u6C34\u5E73\u5BF9\u9F50">\r
          <hl-option label="items-left" value="items-left" />\r
          <hl-option label="items-center" value="items-center" />\r
          <hl-option label="items-right" value="items-right" />\r
        </hl-select>\r
        <hl-select v-model="labelPosition2" placeholder="\u6C34\u5E73\u5BF9\u9F50">\r
          <hl-option label="items-top" value="items-top" />\r
          <hl-option label="items-middle" value="items-middle" />\r
          <hl-option label="items-bottom" value="items-bottom" />\r
        </hl-select>\r
      </hl-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF\uFF1A">\r
      <hl-input v-model="formLabelAlign.region" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F\uFF1A">\r
      <hl-input v-model="formLabelAlign.type" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F\uFF1A">\r
      <hl-input v-model="formLabelAlign.type" native-type="textarea" :rows="3" block />\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const labelPosition = ref('items-left')\r
const labelPosition2 = ref('items-middle')\r
const formLabelAlign = ref({\r
  name: '',\r
  region: '',\r
  type: '',\r
})\r
<\/script>\r
`},{default:l(()=>[Xe]),_:1},8,["demos"]),Ge,Qe,e(d,{fs:"",demos:_(t),"path-name":"form/validate","source-code":`<template>\r
  <hl-form\r
    ref="ruleFormRef"\r
    :model="ruleForm"\r
    :rules="rules"\r
    :label-position="['items-right', 'items-left']"\r
    gap="var(--lg)"\r
    item-gap="var(--md)"\r
    :width="['md:col-6','md:col-18']"\r
  >\r
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0" prop="name">\r
      <hl-group deep-merge indent>\r
        <hl-input v-model="ruleForm.name" />\r
        <hl-select placeholder="\u56E2\u961F" class="static w-sm" />\r
      </hl-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u5730\u70B9" prop="location">\r
      <hl-cascader v-model="ruleForm.location" :options="locations" />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF" prop="region">\r
      <hl-select v-model="ruleForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4" required>\r
      <hl-row>\r
        <hl-col :span="12">\r
          <hl-form-item prop="date1">\r
            <hl-date-picker v-model="ruleForm.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" block />\r
          </hl-form-item>\r
        </hl-col>\r
        <hl-col :span="12">\r
          <hl-form-item prop="date2">\r
            <hl-time-picker v-model="ruleForm.date2" placeholder="\u9009\u62E9\u65F6\u95F4" block />\r
          </hl-form-item>\r
        </hl-col>\r
      </hl-row>\r
    </hl-form-item>\r
    <hl-form-item label="\u5373\u65F6\u914D\u9001" prop="delivery">\r
      <hl-switch v-model="ruleForm.delivery" type="primary" />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u6027\u8D28" prop="type">\r
      <hl-checkbox-group v-model="ruleForm.type">\r
        <hl-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type" />\r
        <hl-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type" />\r
      </hl-checkbox-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90" prop="resource">\r
      <hl-radio-group v-model="ruleForm.resource">\r
        <hl-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9" />\r
        <hl-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39" />\r
      </hl-radio-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F" prop="desc">\r
      <hl-input v-model="ruleForm.desc" native-type="textarea" block />\r
    </hl-form-item>\r
    <hl-form-item offset="md:offset-6">\r
      <hl-button type="primary" class="m-r-sm" @click="submitForm('ruleForm')">\u7ACB\u5373\u521B\u5EFA</hl-button>\r
      <hl-button class="m-r-sm" @click="resetForm('ruleForm')">\u91CD\u7F6E</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const ruleForm = ref({\r
  location: [],\r
  name: '',\r
  region: '',\r
  date1: '',\r
  date2: '',\r
  delivery: false,\r
  type: [],\r
  resource: '',\r
  desc: '',\r
})\r
const rules = ref({\r
  name: [\r
    { required: true, message: '\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0', trigger: 'blur' },\r
    {\r
      min: 3,\r
      max: 5,\r
      message: '\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26',\r
      trigger: 'blur',\r
    },\r
  ],\r
  location: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9', trigger: 'change' }],\r
  region: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF', trigger: 'change' }],\r
  date1: [\r
    {\r
      type: 'date',\r
      required: true,\r
      message: '\u8BF7\u9009\u62E9\u65E5\u671F',\r
      trigger: 'change',\r
    },\r
  ],\r
  date2: [\r
    {\r
      type: 'date',\r
      required: true,\r
      message: '\u8BF7\u9009\u62E9\u65F6\u95F4',\r
      trigger: 'change',\r
    },\r
  ],\r
  type: [\r
    {\r
      type: 'array',\r
      required: true,\r
      message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28',\r
      trigger: 'change',\r
    },\r
  ],\r
  resource: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90', trigger: 'change' }],\r
  desc: [{ required: true, message: '\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F', trigger: 'blur' }],\r
})\r
const locations = ref([\r
  {\r
    value: 'BJ',\r
    label: '\u5317\u4EAC',\r
    children: [\r
      { value: 'HD', label: '\u6D77\u6DC0\u533A' },\r
      { value: 'XW', label: '\u5BA3\u6B66\u533A' },\r
      {\r
        value: 'CW',\r
        label: '\u5D07\u6587\u533A',\r
        children: [\r
          { value: 'WFJ', label: '\u738B\u5E9C\u4E95' },\r
          { value: 'DD', label: '\u4E1C\u5355' },\r
        ],\r
      },\r
    ],\r
  },\r
])\r
const ruleFormRef = ref(null)\r
\r
const submitForm = () => {\r
  ruleFormRef.value.validate(valid => {\r
    if (valid) {\r
      alert('submit!')\r
    } else {\r
      console.log('error submit!!')\r
      return false\r
    }\r
  })\r
}\r
const resetForm = () => {\r
  ruleFormRef.value.resetFields()\r
}\r
\r
<\/script>\r
`},{default:l(()=>[Ke]),_:1},8,["demos"]),Ze,el,e(d,{fs:"",demos:_(t),"path-name":"form/rule","source-code":`<template>\r
  <hl-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :width="['md:col-4','col']">\r
    <hl-form-item label="\u5BC6\u7801" prop="pass">\r
      <hl-input v-model="ruleForm.pass" native-type="password" autocomplete="off" />\r
    </hl-form-item>\r
    <hl-form-item label="\u786E\u8BA4\u5BC6\u7801" prop="checkPass">\r
      <hl-input v-model="ruleForm.checkPass" native-type="password" autocomplete="off" />\r
    </hl-form-item>\r
    <hl-form-item label="\u5E74\u9F84" prop="age">\r
      <hl-input v-model.number="ruleForm.age" />\r
    </hl-form-item>\r
    <hl-form-item label=" ">\r
      <hl-button type="primary" class="m-r-sm" @click="submitForm('ruleForm')">\u63D0\u4EA4</hl-button>\r
      <hl-button @click="resetForm('ruleForm')">\u91CD\u7F6E</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const ruleForm = ref({\r
  pass: '',\r
  checkPass: '',\r
  age: '',\r
})\r
const ruleFormRef = ref(null)\r
\r
const checkAge = (rule, value, callback) => {\r
  if (!value) {\r
    return callback(new Error('\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'))\r
  }\r
  setTimeout(() => {\r
    if (!Number.isInteger(value)) {\r
      callback(new Error('\u8BF7\u8F93\u5165\u6570\u5B57\u503C'))\r
    } else {\r
      if (value < 18) {\r
        callback(new Error('\u5FC5\u987B\u5E74\u6EE118\u5C81'))\r
      } else {\r
        callback()\r
      }\r
    }\r
  }, 1000)\r
}\r
const validatePass = (rule, value, callback) => {\r
  if (value === '') {\r
    callback(new Error('\u8BF7\u8F93\u5165\u5BC6\u7801'))\r
  } else {\r
    if (ruleForm.value.checkPass !== '') {\r
      ruleFormRef.value.validateField('checkPass')\r
    }\r
    callback()\r
  }\r
}\r
const validatePass2 = (rule, value, callback) => {\r
  if (value === '') {\r
    callback(new Error('\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801'))\r
  } else if (value !== ruleForm.value.pass) {\r
    callback(new Error('\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'))\r
  } else {\r
    callback()\r
  }\r
}\r
\r
const rules = ref({\r
  pass: [{ validator: validatePass, trigger: 'blur' }],\r
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],\r
  age: [{ validator: checkAge, trigger: 'blur' }],\r
})\r
\r
const submitForm = () => {\r
  ruleFormRef.value.validate(valid => {\r
    if (valid) {\r
      alert('submit!')\r
    } else {\r
      console.log('error submit!!')\r
      return false\r
    }\r
  })\r
}\r
const resetForm = () => {\r
  ruleFormRef.value.resetFields()\r
}\r
\r
<\/script>\r
`},null,8,["demos"]),ll,tl,e(d,{fs:"",demos:_(t),"path-name":"form/dynamic","source-code":`<template>\r
  <hl-form ref="dynamicValidateFormRef" :model="dynamicValidateForm" :width="['md:col-4','col']">\r
    <hl-form-item\r
      prop="email"\r
      label="\u90AE\u7BB1"\r
      :rules="[\r
        { required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740', trigger: 'blur' },\r
        { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740', trigger: ['blur', 'change'] }\r
      ]"\r
    >\r
      <hl-input v-model="dynamicValidateForm.email" />\r
    </hl-form-item>\r
    <hl-form-item\r
      v-for="(domain, index) in dynamicValidateForm.domains"\r
      :key="domain.key"\r
      :label="'\u57DF\u540D' + index"\r
      :prop="'domains.' + index + '.value'"\r
      :rules="{\r
        required: true, message: '\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A', trigger: 'blur'\r
      }"\r
    >\r
      <hl-input v-model="domain.value" />\r
      <hl-button type="primary" effect="light" class="m-l-sm" equal @click.prevent="removeDomain(domain)">\r
        <template #icon>\r
          <hl-icon><two-delete /></hl-icon>\r
        </template>\r
      </hl-button>\r
    </hl-form-item>\r
    <hl-form-item label=" ">\r
      <hl-button type="primary" class="m-r-sm" @click="submitForm('dynamicValidateForm')">\u63D0\u4EA4</hl-button>\r
      <hl-button class="m-r-sm" @click="addDomain">\u65B0\u589E\u57DF\u540D</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { TwoDelete } from '@hongluan-ui/icons'\r
\r
const dynamicValidateForm = ref({\r
  domains: [\r
    {\r
      value: '',\r
      key: -1,\r
    },\r
  ],\r
  email: '',\r
})\r
const dynamicValidateFormRef = ref(null)\r
\r
const submitForm = () => {\r
  dynamicValidateFormRef.value.validate(valid => {\r
    if (valid) {\r
      alert('submit!')\r
    } else {\r
      console.log('error submit!!')\r
      return false\r
    }\r
  })\r
}\r
const resetForm = () => {\r
  dynamicValidateFormRef.value.resetFields()\r
}\r
const removeDomain = item => {\r
  var index = dynamicValidateForm.value.domains.indexOf(item)\r
  if (index !== -1) {\r
    dynamicValidateForm.value.domains.splice(index, 1)\r
  }\r
}\r
const addDomain = () => {\r
  dynamicValidateForm.value.domains.push({\r
    value: '',\r
    key: Date.now(),\r
  })\r
}\r
\r
<\/script>\r
`},{default:l(()=>[rl]),_:1},8,["demos"]),ol,e(d,{fs:"",demos:_(t),"path-name":"form/number","source-code":`<template>\r
  <hl-form ref="numberValidateFormRef" :model="numberValidateForm" inline style="--form-padding-y: 6px">\r
    <hl-form-item\r
      label="\u5E74\u9F84"\r
      prop="age"\r
      s\r
      :rules="[\r
        { required: true, message: '\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'},\r
        { type: 'number', message: '\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C'}\r
      ]"\r
    >\r
      <hl-input v-model.number="numberValidateForm.age" native-type="age" autocomplete="off" block />\r
    </hl-form-item>\r
    <hl-form-item>\r
      <hl-button type="primary" class="m-r-sm" @click="submitForm('numberValidateForm')">\u63D0\u4EA4</hl-button>\r
      <hl-button @click="resetForm('numberValidateForm')">\u91CD\u7F6E</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { HlMessage } from 'hongluan-ui'\r
import { ref } from 'vue'\r
\r
const numberValidateForm = ref({\r
  age: '',\r
})\r
const numberValidateFormRef = ref(null)\r
\r
const submitForm = () => {\r
  numberValidateFormRef.value.validate(valid => {\r
    if (valid) {\r
      HlMessage('submit')\r
    }\r
  })\r
}\r
const resetForm = () => {\r
  numberValidateFormRef.value.resetFields()\r
}\r
\r
<\/script>\r
`},{default:l(()=>[nl]),_:1},8,["demos"]),al,ul,e(d,{fs:"",demos:_(t),"path-name":"form/size","source-code":`<template>\r
  \u5C3A\u5BF8\uFF1A<hl-radio-group v-model="size">\r
    <hl-radio label="sm">\u5C0F</hl-radio>\r
    <hl-radio label="md">\u9ED8\u8BA4</hl-radio>\r
    <hl-radio label="lg">\u5927</hl-radio>\r
  </hl-radio-group>\r
  <br><br>\r
\r
  <hl-form ref="form" :model="sizeForm" :width="['md:col-4','col']" :size="size">\r
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0">\r
      <hl-input v-model="sizeForm.name" />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">\r
      <hl-select v-model="sizeForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4">\r
      <hl-group merge indent>\r
        <hl-date-picker v-model="sizeForm.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" />\r
        <hl-time-picker v-model="sizeForm.date2" placeholder="\u9009\u62E9\u65F6\u95F4" />\r
      </hl-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u6027\u8D28">\r
      <hl-checkbox-group v-model="sizeForm.type">\r
        <hl-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type" />\r
        <hl-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type" />\r
        <hl-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type" />\r
      </hl-checkbox-group>\r
    </hl-form-item>\r
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90">\r
      <hl-radio-group v-model="sizeForm.resource">\r
        <hl-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9" />\r
        <hl-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39" />\r
      </hl-radio-group>\r
    </hl-form-item>\r
    <hl-form-item offset="md:offset-4">\r
      <hl-button type="primary" class="m-r-sm" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</hl-button>\r
      <hl-button>\u53D6\u6D88</hl-button>\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const size = ref('md')\r
const sizeForm = ref({\r
  name: '',\r
  region: '',\r
  date1: '',\r
  date2: '',\r
  delivery: false,\r
  type: [],\r
  resource: '',\r
  desc: '',\r
})\r
const onSubmit = () => {\r
  console.log('submit!')\r
}\r
<\/script>\r
`},{default:l(()=>[dl]),_:1},8,["demos"]),ml,il,e(d,{fs:"",demos:_(t),"path-name":"form/accessibility","source-code":`<template>\r
  <hl-form labhl-position="left" label-width="150px" style="max-width: 460px">\r
    <hl-group gap="var(--md)">\r
      <hl-alert type="info" show-icon :closable="false">\r
        <p>"Full Name" label is automatically attached to the input:</p>\r
      </hl-alert>\r
      <hl-form-item label="Full Name">\r
        <hl-input v-model="formAccessibility.fullName" />\r
      </hl-form-item>\r
    </hl-group>\r
    <hl-group gap="var(--md)">\r
      <hl-alert type="info" show-icon :closable="false">\r
        <p>\r
          "Your Information" serves as a label for the group of inputs. <br>\r
          You must specify labels on the individal inputs. Placeholders are not\r
          replacements for using the "label" attribute.\r
        </p>\r
      </hl-alert>\r
      <hl-form-item label="Your Information">\r
        <hl-input\r
          v-model="formAccessibility.firstName"\r
          label="First Name"\r
          placeholder="First Name"\r
        />\r
\r
        <hl-input\r
          v-model="formAccessibility.lastName"\r
          label="Last Name"\r
          placeholder="Last Name"\r
        />\r
      </hl-form-item>\r
    </hl-group>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
const formAccessibility = reactive({\r
  fullName: '',\r
  firstName: '',\r
  lastName: '',\r
})\r
\r
<\/script>\r
\r
`},null,8,["demos"]),sl,cl,e(d,{fs:"",demos:_(t),"path-name":"form/grid","source-code":`<template>\r
  <hl-form\r
    :model="formInline"\r
    :width="['col-24','col-24']"\r
    class="hl-row grid grid-direction-vertical xl:count-3 lg:count-2"\r
    style="--row-gap-y: var(--md); --row-gap-x:var(--md)"\r
  >\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
  </hl-form>\r
\r
  <hl-form\r
    :model="formInline"\r
    :width="['col-5','col-19']"\r
    gap="var(--md)"\r
    class="hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl"\r
    style="--row-gap-y: var(--md); --row-gap-x:var(--md)"\r
  >\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">\r
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>\r
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />\r
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />\r
      </hl-select>\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
    <hl-form-item label="\u8868\u5355\u540D\u79F0">\r
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />\r
    </hl-form-item>\r
  </hl-form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const formInline = ref({\r
  user: '',\r
  region: '',\r
})\r
<\/script>\r
`},{default:l(()=>[pl]),_:1},8,["demos"]),hl]),e(u)],64)}}};export{Fl as default};
