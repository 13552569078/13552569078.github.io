import{p as C,R as p,H as i,L as a,F as v,P as r,W as b,af as g,a1 as _,Z as M,X as c,S as t,Q as e,r as B,T as O,V as k,E as j,C as $,o as T}from"./vue.85e091e9.js";import{_ as N,H as U}from"./index.bf23fef6.js";import{Y as I,Z as H}from"./hongluan-icons.6cddbf05.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";const G=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{divider:!0},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),b(_,null,[l.divider?(a(),v(u,{key:l.value,divider:""})):(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const W=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const J=C({setup(x){const o=p([{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}]),n=p([]);return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const R=t(" \u9009\u62E9\u6240\u6709 "),K=t(" \u6DFB\u52A0\u9009\u9879 "),Y=t(" \u786E\u5B9A "),Z=t("\u53D6\u6D88"),Q=C({setup(x){const o=p(!1),n=p(!1),f=p(!1),d=p([]),u=p(""),s=p([{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}]),l=()=>{o.value=!0},h=()=>{u.value&&(s.value.push({label:u.value,value:u.value}),E())},E=()=>{u.value="",o.value=!1};M(d,V=>{V.length===0?(n.value=!1,f.value=!1):V.length===s.value.length?(n.value=!0,f.value=!1):f.value=!0});const m=V=>{f.value=!1,V?d.value=s.value.map(y=>y.value):d.value=[]};return(V,y)=>{const A=i("hl-checkbox"),w=i("hl-option"),z=i("hl-button"),D=i("hl-input"),F=i("hl-select");return a(),v(F,{modelValue:d.value,"onUpdate:modelValue":y[2]||(y[2]=S=>d.value=S),multiple:"",clearable:"","collapse-tags":"",placeholder:"Select","popper-class":"custom-header","max-collapse-tags":1},{header:r(()=>[c(A,{modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=S=>n.value=S),indeterminate:f.value,onChange:m},{default:r(()=>[R]),_:1},8,["modelValue","indeterminate"])]),footer:r(()=>[o.value?(a(),b(_,{key:1},[c(D,{modelValue:u.value,"onUpdate:modelValue":y[1]||(y[1]=S=>u.value=S),class:"option-input",placeholder:"\u8F93\u5165\u9009\u9879",size:"sm"},null,8,["modelValue"]),c(z,{type:"primary",size:"sm",class:"m-r-xs",onClick:h},{default:r(()=>[Y]),_:1}),c(z,{size:"sm",onClick:E},{default:r(()=>[Z]),_:1})],64)):(a(),v(z,{key:0,text:"",bg:"",size:"small",onClick:l},{default:r(()=>[K]),_:1}))]),default:r(()=>[(a(!0),b(_,null,g(s.value,S=>(a(),v(w,{key:S.value,label:S.label,value:S.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const ee={class:"flex items-center"},le=C({setup(x){const o=p([]),n=[{value:"#E63415",label:"red"},{value:"#FF6600",label:"orange"},{value:"#FFDE0A",label:"yellow"},{value:"#1EC79D",label:"green"},{value:"#14CCCC",label:"cyan"},{value:"#4167F0",label:"blue"},{value:"#6222C9",label:"purple"}];return n.forEach(f=>{o.value.push(f.value)}),(f,d)=>{const u=i("hl-tag"),s=i("hl-option"),l=i("hl-select");return a(),v(l,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=h=>o.value=h),multiple:"",placeholder:"Select",style:{width:"240px"}},{tag:r(()=>[(a(!0),b(_,null,g(o.value,h=>(a(),v(u,{key:h.value,color:h},null,8,["color"]))),128))]),default:r(()=>[(a(),b(_,null,g(n,h=>c(s,{key:h.value,label:h.label,value:h.value},{default:r(()=>[e("div",ee,[c(u,{color:h.value,style:{"margin-right":"8px"},size:"small"},null,8,["color"]),e("span",{style:B({color:h.value})},O(h.label),5)])]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])}}});var te=N(le,[["__scopeId","data-v-760748de"]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const ae=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),disabled:"",placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const ue=C({setup(x){const o=p(""),n=[{value:"",label:"All"},{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],f=()=>{U.info(`The clear value is: ${o.value}`)};return(d,u)=>{const s=i("hl-option"),l=i("hl-select");return a(),v(l,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=h=>o.value=h),"empty-values":[null,void 0],"value-on-clear":null,clearable:"",placeholder:"Select",style:{width:"240px"},onClear:f},{default:r(()=>[(a(),b(_,null,g(n,h=>c(s,{key:h.value,label:h.label,value:h.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const se=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),filterable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});const ie=C({setup(x){const o=p([{label:"\u70ED\u95E8\u57CE\u5E02",options:[{value:"Shanghai",label:"\u4E0A\u6D77"},{value:"Beijing",label:"\u5317\u4EAC"}]},{label:"\u57CE\u5E02\u540D",options:[{value:"Chengdu",label:"\u6210\u90FD"},{value:"Shenzhen",label:"\u6DF1\u5733"},{value:"Guangzhou",label:"\u5E7F\u5DDE"},{value:"Dalian",label:"\u5927\u8FDE"}]}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-option-group"),l=i("hl-select");return a(),v(l,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=h=>n.value=h),placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,h=>(a(),v(s,{key:h.label,label:h.label},{default:r(()=>[(a(!0),b(_,null,g(h.options,E=>(a(),v(u,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}}});var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});const pe=e("br",null,null,-1),ve=e("br",null,null,-1),he=e("br",null,null,-1),me=e("br",null,null,-1),be=e("br",null,null,-1),_e=e("br",null,null,-1),fe=e("br",null,null,-1),ge=e("br",null,null,-1),ye=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"},{value:"\u9009\u98796",label:"\u5317\u4EAC\u70E4\u9E2D2"},{value:"\u9009\u98797",label:"\u5317\u4EAC\u70E4\u9E2D3"}]),n=p([]),f=p([]),d=p([]);return(u,s)=>{const l=i("hl-option"),h=i("hl-icon"),E=i("hl-select");return a(),b(_,null,[c(E,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=m=>n.value=m),multiple:"",placeholder:"\u8BF7\u9009\u62E9",clearable:"",style:{width:"300px"}},{prefix:r(()=>[c(h,null,{default:r(()=>[c(k(I))]),_:1})]),default:r(()=>[(a(!0),b(_,null,g(o.value,m=>(a(),v(l,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),pe,ve,c(E,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=m=>n.value=m),multiple:"",filterable:"",placeholder:"\u53EF\u641C\u7D22",style:{width:"300px"}},{default:r(()=>[(a(!0),b(_,null,g(o.value,m=>(a(),v(l,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),he,me,c(E,{modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=m=>f.value=m),size:"sm",multiple:"",clearable:"","collapse-tags":"",placeholder:"\u8BF7\u9009\u62E9",style:{width:"300px"}},{default:r(()=>[(a(!0),b(_,null,g(o.value,m=>(a(),v(l,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),be,_e,c(E,{modelValue:f.value,"onUpdate:modelValue":s[3]||(s[3]=m=>f.value=m),size:"sm",multiple:"",filterable:"",clearable:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"\u8BF7\u9009\u62E9",style:{width:"300px"}},{default:r(()=>[(a(!0),b(_,null,g(o.value,m=>(a(),v(l,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),fe,ge,c(E,{modelValue:d.value,"onUpdate:modelValue":s[4]||(s[4]=m=>d.value=m),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,placeholder:"\u8BF7\u9009\u62E9",style:{width:"300px"}},{default:r(()=>[(a(!0),b(_,null,g(o.value,m=>(a(),v(l,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])],64)}}});var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const xe=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976",disabled:!0},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value,disabled:l.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])}}});var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const Ce={class:"m-r-md"},Se={class:"text-secondary font-sm"},Ve=C({setup(x){const o=p([{value:"Beijing",label:"\u5317\u4EAC"},{value:"Shanghai",label:"\u4E0A\u6D77"},{value:"Nanjing",label:"\u5357\u4EAC"},{value:"Chengdu",label:"\u6210\u90FD"},{value:"Shenzhen",label:"\u6DF1\u5733"},{value:"Guangzhou",label:"\u5E7F\u5DDE"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),v(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},{default:r(()=>[e("span",Ce,O(l.label),1),e("span",Se,O(l.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve});const ze=C({setup(x){const o=p([]),n=p([]),f=p([]),d=p(!1),u=p(["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]),s=l=>{l?(d.value=!0,setTimeout(()=>{d.value=!1,o.value=f.value.filter(h=>h.label.toLowerCase().indexOf(l.toLowerCase())>-1)},200)):o.value=[]};return j(()=>{f.value=u.value.map(l=>({value:`value:${l}`,label:`label:${l}`}))}),(l,h)=>{const E=i("hl-option"),m=i("hl-select"),V=i("hl-icon");return a(),b(_,null,[c(m,{modelValue:n.value,"onUpdate:modelValue":h[0]||(h[0]=y=>n.value=y),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"\u9690\u85CF\u540E\u7F00Icon","remote-method":s,loading:d.value,clearable:""},{default:r(()=>[(a(!0),b(_,null,g(o.value,y=>(a(),v(E,{key:y.value,label:y.label,value:y.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"]),c(m,{modelValue:n.value,"onUpdate:modelValue":h[1]||(h[1]=y=>n.value=y),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"\u663E\u793A\u540E\u7F00Icon",class:"m-l-md","remote-show-suffix":"","remote-method":s,loading:d.value,clearable:""},{suffix:r(({className:y})=>[c(V,{class:$(y)},{default:r(()=>[c(k(H))]),_:2},1032,["class"])]),default:r(()=>[(a(!0),b(_,null,g(o.value,y=>(a(),v(E,{key:y.value,label:y.label,value:y.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])],64)}}});var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze});const we=e("br",null,null,-1),De=e("br",null,null,-1),Fe=e("br",null,null,-1),Me=e("br",null,null,-1),Be=C({setup(x){const o=p([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),n=p("");return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),b(_,null,[c(s,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),size:"sm",placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),we,De,c(s,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=l=>n.value=l),size:"md",placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Fe,Me,c(s,{modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=l=>n.value=l),size:"lg",placeholder:"\u8BF7\u9009\u62E9"},{default:r(()=>[(a(!0),b(_,null,g(o.value,l=>(a(),v(u,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])],64)}}});var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be});const $e={class:"m-4"},Te=C({setup(x){const o=p(),n=p([{id:1,label:"Option A",desc:"Option A - 230506"},{id:2,label:"Option B",desc:"Option B - 230506"},{id:3,label:"Option C",desc:"Option C - 230506"},{id:4,label:"Option A",desc:"Option A - 230507"}]);return(f,d)=>{const u=i("hl-option"),s=i("hl-select");return a(),b("div",$e,[c(s,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=l=>o.value=l),"value-key":"id",placeholder:"Select"},{default:r(()=>[(a(!0),b(_,null,g(n.value,l=>(a(),v(u,{key:l.id,label:l.label,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e("p",null," selected option's description: "+O(o.value?o.value.desc:"no select"),1)])}}});var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});const Ue=e("h1",null,"Select \u9009\u62E9\u5668",-1),Ie=e("p",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9\u3002",-1),He=e("div",{class:"doc-tip"},[e("p",null,[t("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),e("code",null,"<client-only></client-only>"),t(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),e("a",{href:"https://nuxt.com/v3"},"Nuxt"),t(") \u548C SSG (eg: "),e("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),t(")\u3002")])],-1),Ge=e("div",null,[e("p",null,[e("code",null,"v-model"),t(" \u7684\u503C\u4E3A\u5F53\u524D\u88AB\u9009\u4E2D\u7684 Option \u7EC4\u4EF6\u7684 "),e("code",null,"value"),t(" \u5C5E\u6027\u503C")])],-1),Le=e("h2",{id:"you-jin-yong-xuan-xiang"},[e("a",{class:"header-anchor",href:"#you-jin-yong-xuan-xiang"}),t(" \u6709\u7981\u7528\u9009\u9879")],-1),We=e("p",null,[t("\u5728 Option \u7EC4\u4EF6\u4E2D\uFF0C\u8BBE\u5B9A"),e("code",null,"disabled"),t("\u503C\u4E3A true\uFF0C\u5373\u53EF\u7981\u7528\u8BE5\u9009\u9879")],-1),qe=e("h3",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),t(" \u7981\u7528\u72B6\u6001")],-1),Je=e("p",null,[t("\u4E3A Select \u7EC4\u4EF6\u8BBE\u7F6E"),e("code",null,"disabled"),t("\u5C5E\u6027\uFF0C\u5219\u6574\u4E2A\u9009\u62E9\u5668\u4E0D\u53EF\u7528")],-1),Pe=e("h2",{id:"ke-qing-kong-dan-xuan"},[e("a",{class:"header-anchor",href:"#ke-qing-kong-dan-xuan"}),t(" \u53EF\u6E05\u7A7A\u5355\u9009")],-1),Re=e("p",null,[t("\u4E3A Select \u7EC4\u4EF6\u8BBE\u7F6E"),e("code",null,"clearable"),t("\u5C5E\u6027\uFF0C\u5219\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C"),e("code",null,"clearable"),t("\u5C5E\u6027\u4EC5\u9002\u7528\u4E8E\u5355\u9009\u3002")],-1),Ke=e("h2",{id:"chi-cun"},[e("a",{class:"header-anchor",href:"#chi-cun"}),t(" \u5C3A\u5BF8")],-1),Ye=e("p",null,[e("code",null,"sm"),t(","),e("code",null,"md"),t(","),e("code",null,"lg"),t("\u4E3A\u53EF\u9009\u503C\uFF0C\u9ED8\u8BA4\u4E3A"),e("code",null,"md"),t("\u3002")],-1),Ze=e("h2",{id:"ji-chu-duo-xuan"},[e("a",{class:"header-anchor",href:"#ji-chu-duo-xuan"}),t(" \u57FA\u7840\u591A\u9009")],-1),Qe=e("p",null,[t("\u7528 Tag \u7EC4\u4EF6\u5C55\u793A\u5DF2\u9009\u9879\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E"),e("code",null,"collapse-tags"),t("\u5C5E\u6027\u5C06\u5B83\u4EEC\u5408\u5E76\u4E3A\u4E00\u6BB5\u6587\u5B57\u3002")],-1),Xe=e("div",null,[e("p",null,[t("\u4E3A Select \u7EC4\u4EF6\u8BBE\u7F6E"),e("code",null,"multiple"),t("\u5C5E\u6027\u5373\u53EF\u542F\u7528\u591A\u9009\uFF0C\u6B64\u65F6"),e("code",null,"v-model"),t("\u7684\u503C\u4E3A\u5F53\u524D\u9009\u4E2D\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002")])],-1),el=e("h2",{id:"zi-ding-yi-mo-ban"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-mo-ban"}),t(" \u81EA\u5B9A\u4E49\u6A21\u677F")],-1),ll=e("p",null,"\u5C06\u81EA\u5B9A\u4E49\u7684 HTML \u6A21\u677F\u63D2\u5165 Option \u7EC4\u4EF6\u7684 slot \u4E2D\u5373\u53EF\u3002",-1),tl=e("h2",{id:"zi-ding-yi-xia-la-kuang-tou-bu-wei-bu"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-xia-la-kuang-tou-bu-wei-bu"}),t(" \u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5934\u90E8/\u5C3E\u90E8")],-1),nl=e("h2",{id:"fen-zu"},[e("a",{class:"header-anchor",href:"#fen-zu"}),t(" \u5206\u7EC4")],-1),al=e("p",null,[t("\u4F7F\u7528 OptionGroup \u7EC4\u4EF6\u5BF9\u5907\u9009\u9879\u8FDB\u884C\u5206\u7EC4\uFF0C\u5B83\u7684"),e("code",null,"label"),t("\u5C5E\u6027\u4E3A\u5206\u7EC4\u540D")],-1),ol=e("h2",{id:"ke-sou-suo"},[e("a",{class:"header-anchor",href:"#ke-sou-suo"}),t(" \u53EF\u641C\u7D22")],-1),ul=e("p",null,[t("\u4E3A Select \u7EC4\u4EF6\u6DFB\u52A0"),e("code",null,"filterable"),t("\u5C5E\u6027\u5373\u53EF\u542F\u7528\u641C\u7D22\u529F\u80FD\u3002")],-1),dl=e("div",null,[e("p",null,[t("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSelect \u7EC4\u4EF6\u4F1A\u627E\u51FA\u6240\u6709"),e("code",null,"label"),t("\u5C5E\u6027\u5305\u542B\u8F93\u5165\u503C\u7684\u9009\u9879\u3002\u5982\u679C\u5E0C\u671B\u4F7F\u7528\u5176\u4ED6\u7684\u641C\u7D22\u903B\u8F91\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A"),e("code",null,"filter-method"),t("\u6765\u5B9E\u73B0\u3002"),e("code",null,"filter-method"),t("\u4E3A\u4E00\u4E2A"),e("code",null,"Function"),t("\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002")])],-1),sl=e("h2",{id:"yuan-cheng-sou-suo"},[e("a",{class:"header-anchor",href:"#yuan-cheng-sou-suo"}),t(" \u8FDC\u7A0B\u641C\u7D22")],-1),rl=e("p",null,"\u4ECE\u670D\u52A1\u5668\u641C\u7D22\u6570\u636E\uFF0C\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u67E5\u627E",-1),il=e("div",null,[e("p",null,[t("\u4E3A\u4E86\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u9700\u8981\u5C06"),e("code",null,"filterable"),t("\u548C"),e("code",null,"remote"),t("\u8BBE\u7F6E\u4E3A"),e("code",null,"true"),t("\uFF0C\u540C\u65F6\u4F20\u5165\u4E00\u4E2A"),e("code",null,"remote-method"),t("\u3002"),e("code",null,"remote-method"),t("\u4E3A\u4E00\u4E2A"),e("code",null,"Function"),t("\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679COption \u7EC4\u4EF6\u662F\u901A\u8FC7"),e("code",null,"v-for"),t("\u6307\u4EE4\u6E32\u67D3\u51FA\u6765\u7684\uFF0C\u6B64\u65F6\u9700\u8981\u4E3A Option \u7EC4\u4EF6\u6DFB\u52A0"),e("code",null,"key"),t("\u5C5E\u6027\uFF0C\u4E14\u5176\u503C\u9700\u5177\u6709\u552F\u4E00\u6027\uFF0C\u6BD4\u5982\u6B64\u4F8B\u4E2D\u7684"),e("code",null,"item.value"),t("\u3002")])],-1),cl=e("h2",{id:"chuang-jian-tiao-mu"},[e("a",{class:"header-anchor",href:"#chuang-jian-tiao-mu"}),t(" \u521B\u5EFA\u6761\u76EE")],-1),pl=e("p",null,"\u53EF\u4EE5\u521B\u5EFA\u5E76\u9009\u4E2D\u9009\u9879\u4E2D\u4E0D\u5B58\u5728\u7684\u6761\u76EE",-1),vl=e("div",null,[e("p",null,[t("\u4F7F\u7528"),e("code",null,"allow-create"),t("\u5C5E\u6027\u5373\u53EF\u901A\u8FC7\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6587\u5B57\u6765\u521B\u5EFA\u65B0\u7684\u6761\u76EE\u3002\u6CE8\u610F\u6B64\u65F6"),e("code",null,"filterable"),t("\u5FC5\u987B\u4E3A true\u3002\u672C\u4F8B\u8FD8\u4F7F\u7528\u4E86"),e("code",null,"default-first-option"),t("\u5C5E\u6027\uFF0C\u5728\u8BE5\u5C5E\u6027\u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u6309\u4E0B\u56DE\u8F66\u5C31\u53EF\u4EE5\u9009\u4E2D\u5F53\u524D\u9009\u9879\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u9009\u9879\uFF0C\u65E0\u9700\u4F7F\u7528\u9F20\u6807\u6216\u952E\u76D8\u65B9\u5411\u952E\u8FDB\u884C\u5B9A\u4F4D\u3002")])],-1),hl=e("h2",{id:"zi-ding-yi-biao-qian"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian"}),t(" \u81EA\u5B9A\u4E49\u6807\u7B7E")],-1),ml=e("p",null,"\u60A8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u3002",-1),bl=e("div",null,[e("p",null,"\u5C06\u81EA\u5B9A\u4E49\u7684\u6807\u7B7E\u63D2\u5165 el-select \u7684 slot \u4E2D\u5373\u53EF\u3002 collapse-tags, collapse-tags-tooltip, max-collapse-tags \u5728\u6B64\u6A21\u5F0F\u4E0B\u4E0D\u751F\u6548.")],-1),_l=e("h2",{id:"shi-yong-value-key-shu-xing"},[e("a",{class:"header-anchor",href:"#shi-yong-value-key-shu-xing"}),t(" \u4F7F\u7528 "),e("code",null,"value-key"),t(" \u5C5E\u6027")],-1),fl=e("div",null,[e("p",null,[t("\u5982\u679C Select \u7684\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u8BF7\u52A1\u5FC5\u6307\u5B9A "),e("code",null,"value-key"),t(" \u4F5C\u4E3A\u5B83\u7684\u552F\u4E00\u6027\u6807\u8BC6\u3002")])],-1),gl=e("h2",{id:"kong-zhi-pei-zhi"},[e("a",{class:"header-anchor",href:"#kong-zhi-pei-zhi"}),t(" \u7A7A\u503C\u914D\u7F6E")],-1),yl=e("p",null,[t("\u82E5\u60F3\u914D\u7F6E\u5982\u7A7A\u5B57\u7B26\u4E32\u4E3A\u6709\u6548\u503C\u800C\u4E0D\u662F\u7A7A\u503C\uFF0C\u53EF\u4EE5\u914D\u7F6E"),e("code",null,"empty-values"),t("\u4E3A "),e("code",null,"[null, undefined]"),t("\u3002 \u5982\u679C\u60A8\u60F3\u8981\u5C06\u6E05\u7A7A\u503C\u66F4\u6539\u4E3A "),e("code",null,"null"),t(", \u8BF7\u8BBE\u7F6E "),e("code",null,"value-on-clear"),t(" \u4E3A "),e("code",null,"null")],-1),kl=T('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array / boolean / string / boolean / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>value-key</td><td>\u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>value</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>lg/ md / sm</td><td>md</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags-tooltip</td><td>\u9F20\u6807\u6ED1\u5165\u6298\u53E0Tag\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u6298\u53E0\u7684Tag</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>multiple-limit</td><td>\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>name</td><td>select input \u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>autocomplete</td><td>select input \u7684 autocomplete \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>off</td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>allow-create</td><td>\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C\u9700\u914D\u5408 <code>filterable</code> \u4F7F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>remote</td><td>\u662F\u5426\u4E3A\u8FDC\u7A0B\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>remote-method</td><td>\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>remote-show-suffix</td><td>\u8FDC\u7A0B\u641C\u7D22\u663E\u793A\u540E\u7F00\u56FE\u6807</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>suffix-transition</td><td>\u662F\u5426\u6DFB\u52A0\u81EA\u52A8\u65CB\u8F6C\u540E\u7F00\u56FE\u6807\u52A8\u753B</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>loading</td><td>\u662F\u5426\u6B63\u5728\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6570\u636E</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>loading-text</td><td>\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u663E\u793A\u7684\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u52A0\u8F7D\u4E2D</td></tr><tr><td>no-match-text</td><td>\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>#empty</code>\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u65E0\u5339\u914D\u6570\u636E</td></tr><tr><td>no-data-text</td><td>\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>#empty</code>\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u65E0\u6570\u636E</td></tr><tr><td>popper-class</td><td>Select \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>reserve-keyword</td><td>\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>default-first-option</td><td>\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u3002\u9700\u914D\u5408 <code>filterable</code> \u6216 <code>remote</code> \u4F7F\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false\u3002\u8BF7\u4F7F\u7528teleported\u5C5E\u6027</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-options</td><td>\u81EA\u5B9A\u4E49\u5F39\u51FA\u6846\uFF0C\u66F4\u591A\u4FE1\u606F\u89C1 <a href="https://popper.js.org/docs/v2/">popper.js</a></td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>teleported</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u8F93\u5165\u6846</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>tag-type</td><td>\u591A\u9009\u6807\u7B7E\u7C7B\u578B</td><td>string</td><td>info/success/warning/danger</td><td>-</td></tr><tr><td>effect</td><td>\u4E0B\u62C9\u6846\u4E3B\u9898</td><td>string</td><td><code>dark</code> / <code>light</code></td><td>-</td></tr><tr><td>validate-event</td><td>\u662F\u5426\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>placement</td><td>\u5F39\u7A97\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom-start</td></tr><tr><td>max-collapse-tags</td><td>\u9700\u8981\u663E\u793A\u7684 Tag \u7684\u6700\u5927\u6570\u91CF \u53EA\u6709\u5F53 <code>collapse-tags</code> \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>aria-label</td><td>input <code>aria-label</code> \u5C5E\u6027</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>empty-values</td><td>\u7EC4\u4EF6\u7684\u7A7A\u503C\u914D\u7F6E\uFF0C\u53C2\u8003config-provider</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>value-on-clear</td><td>\u6E05\u7A7A\u9009\u9879\u7684\u503C\uFF0C\u53C2\u8003 config-provider</td><td>string / number / boolean / Function</td><td>\u2014</td><td></td></tr><tr><td>append-to</td><td>\u9009\u9879\u4E0B\u62C9\u6846\u6DFB\u52A0\u4F4D\u7F6E</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u7684\u9009\u4E2D\u503C</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>remove-tag</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664 tag \u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684 tag \u503C</td></tr><tr><td>clear</td><td>\u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: FocusEvent)</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: FocusEvent)</td></tr><tr><td>at-end</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u65F6\u89E6\u53D1\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u6EDA\u52A8\u5230\u5E95\u90E8\u89E6\u53D1</td><td>-</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr><tr><td>blur</td><td>\u4F7F input \u5931\u53BB\u7126\u70B9\uFF0C\u5E76\u9690\u85CF\u4E0B\u62C9\u6846</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Option \u7EC4\u4EF6\u5217\u8868</td></tr><tr><td>prefix</td><td>Select \u7EC4\u4EF6\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>empty</td><td>\u65E0\u9009\u9879\u65F6\u7684\u5217\u8868</td></tr><tr><td>clear</td><td>clear icon \u81EA\u5B9A\u4E49</td></tr><tr><td>suffix</td><td>\u540E\u7F00\u56FE\u6807\u81EA\u5B9A\u4E49\uFF0C\u53C2\u6570\uFF1A{ className: string }\uFF0C\u4F7F\u7528\u65B9\u6CD5\u53C2\u770B\u8FDC\u7A0B\u641C\u7D22\u793A\u4F8B</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5934\u90E8</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5C3E\u90E8</td></tr><tr><td>tag</td><td>select \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9</td></tr></tbody></table><h2 id="option-group-attributes"><a class="header-anchor" href="#option-group-attributes"></a> Option Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u5206\u7EC4\u7684\u7EC4\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u5C06\u8BE5\u5206\u7EC4\u4E0B\u6240\u6709\u9009\u9879\u7F6E\u4E3A\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="option-attributes"><a class="header-anchor" href="#option-attributes"></a> Option Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9009\u9879\u7684\u503C</td><td>string/number/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0E <code>value</code> \u76F8\u540C</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>divider</td><td>\u662F\u5426\u662F\u5206\u9694\u7B26</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',12),Ol={setup(x){const o="select",n={"../../../examples/select/basic.vue":L,"../../../examples/select/clearable.vue":q,"../../../examples/select/create.vue":P,"../../../examples/select/custom-header.vue":X,"../../../examples/select/custom-tag.vue":ne,"../../../examples/select/disabled.vue":oe,"../../../examples/select/empty-values.vue":de,"../../../examples/select/filterable.vue":re,"../../../examples/select/group.vue":ce,"../../../examples/select/multiple.vue":ke,"../../../examples/select/option-disabled.vue":Ee,"../../../examples/select/option-slot.vue":Oe,"../../../examples/select/remote.vue":Ae,"../../../examples/select/size.vue":je,"../../../examples/select/value-key.vue":Ne};return(f,d)=>{const u=i("demo-block"),s=i("right-nav");return a(),b(_,null,[e("section",null,[Ue,Ie,He,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/basic","source-code":`<template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
  },
  {
    divider: true,
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
])
const value = ref('')

<\/script>
`},{default:r(()=>[Ge]),_:1},8,["demos"]),Le,We,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/option-disabled","source-code":`<template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled" />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
    disabled: true,
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
])
const value = ref('')

<\/script>
`},null,8,["demos"]),qe,Je,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/disabled","source-code":`<template>
  <hl-select v-model="value" disabled placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
])
const value = ref('')

<\/script>
`},null,8,["demos"]),Pe,Re,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/clearable","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
])
const value = ref('')

<\/script>
`},null,8,["demos"]),Ke,Ye,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/size","source-code":`<template>
  <hl-select v-model="value" size="sm" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select v-model="value" size="md" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select v-model="value" size="lg" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
])
const value = ref('')

<\/script>
`},null,8,["demos"]),Ze,Qe,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/multiple","source-code":`<template>
  <hl-select v-model="value1" multiple placeholder="\u8BF7\u9009\u62E9" clearable style="width: 300px;">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    <template #prefix>
      <hl-icon><two-computer /></hl-icon>
    </template>
  </hl-select>
  <br><br>
  <hl-select v-model="value1" multiple filterable placeholder="\u53EF\u641C\u7D22" style="width: 300px;">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select
    v-model="value2"
    size="sm"
    multiple
    clearable
    collapse-tags
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 300px;"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select
    v-model="value2"
    size="sm"
    multiple
    filterable
    clearable
    collapse-tags
    collapse-tags-tooltip
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 300px;"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select
    v-model="value4"
    multiple
    collapse-tags
    collapse-tags-tooltip
    :max-collapse-tags="3"
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 300px"
  >
    <hl-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwoComputer } from '@hongluan-ui/icons'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
  {
    value: '\u9009\u98796',
    label: '\u5317\u4EAC\u70E4\u9E2D2',
  },
  {
    value: '\u9009\u98797',
    label: '\u5317\u4EAC\u70E4\u9E2D3',
  },
])
const value1 = ref([])
const value2 = ref([])
const value4 = ref([])

<\/script>
`},{default:r(()=>[Xe]),_:1},8,["demos"]),el,ll,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/option-slot","source-code":`<template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
      <span class="m-r-md">{{ item.label }}</span>
      <span class="text-secondary font-sm">{{ item.value }}</span>
    </hl-option>
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cities = ref([
  {
    value: 'Beijing',
    label: '\u5317\u4EAC',
  },
  {
    value: 'Shanghai',
    label: '\u4E0A\u6D77',
  },
  {
    value: 'Nanjing',
    label: '\u5357\u4EAC',
  },
  {
    value: 'Chengdu',
    label: '\u6210\u90FD',
  },
  {
    value: 'Shenzhen',
    label: '\u6DF1\u5733',
  },
  {
    value: 'Guangzhou',
    label: '\u5E7F\u5DDE',
  },
])
const value = ref('')

<\/script>
`},null,8,["demos"]),tl,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/custom-header","source-code":`<template>
  <hl-select
    v-model="value"
    multiple
    clearable
    collapse-tags
    placeholder="Select"
    popper-class="custom-header"
    :max-collapse-tags="1"
  >
    <template #header>
      <hl-checkbox
        v-model="checkAll"
        :indeterminate="indeterminate"
        @change="handleCheckAll"
      >
        \u9009\u62E9\u6240\u6709
      </hl-checkbox>
    </template>
    <hl-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    <template #footer>
      <hl-button v-if="!isAdding" text bg size="small" @click="onAddOption">
        \u6DFB\u52A0\u9009\u9879
      </hl-button>
      <template v-else>
        <hl-input
          v-model="optionName"
          class="option-input"
          placeholder="\u8F93\u5165\u9009\u9879"
          size="sm"
        />
        <hl-button type="primary" size="sm" class="m-r-xs" @click="onConfirm">
          \u786E\u5B9A
        </hl-button>
        <hl-button size="sm" @click="clear">\u53D6\u6D88</hl-button>
      </template>
    </template>
  </hl-select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import type { CheckboxValueType } from 'hongluan-ui'

const isAdding = ref(false)
const checkAll = ref(false)
const indeterminate = ref(false)
const value = ref<CheckboxValueType[]>([])
const optionName = ref('')
const cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
])

const onAddOption = () => {
  isAdding.value = true
}

const onConfirm = () => {
  if (optionName.value) {
    cities.value.push({
      label: optionName.value,
      value: optionName.value,
    })
    clear()
  }
}

const clear = () => {
  optionName.value = ''
  isAdding.value = false
}

watch(value, val => {
  if (val.length === 0) {
    checkAll.value = false
    indeterminate.value = false
  } else if (val.length === cities.value.length) {
    checkAll.value = true
    indeterminate.value = false
  } else {
    indeterminate.value = true
  }
})

const handleCheckAll = (val: CheckboxValueType) => {
  indeterminate.value = false
  if (val) {
    value.value = cities.value.map(_ => _.value)
  } else {
    value.value = []
  }
}
<\/script>

<style lang="scss">
.custom-header {
  .hl-checkbox {
    display: flex;
    height: unset;
  }
}
.option-input {
  width: 100%;
  margin-bottom: 8px;
}
</style>
`},null,8,["demos"]),nl,al,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/group","source-code":`<template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <hl-option-group v-for="group in options" :key="group.label" :label="group.label">
      <hl-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
    </hl-option-group>
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    label: '\u70ED\u95E8\u57CE\u5E02',
    options: [
      {
        value: 'Shanghai',
        label: '\u4E0A\u6D77',
      },
      {
        value: 'Beijing',
        label: '\u5317\u4EAC',
      },
    ],
  },
  {
    label: '\u57CE\u5E02\u540D',
    options: [
      {
        value: 'Chengdu',
        label: '\u6210\u90FD',
      },
      {
        value: 'Shenzhen',
        label: '\u6DF1\u5733',
      },
      {
        value: 'Guangzhou',
        label: '\u5E7F\u5DDE',
      },
      {
        value: 'Dalian',
        label: '\u5927\u8FDE',
      },
    ],
  },
])
const value = ref('')

<\/script>
`},null,8,["demos"]),ol,ul,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/filterable","source-code":`<template>
  <hl-select v-model="value" filterable placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5',
  },
  {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976',
  },
  {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E',
  },
  {
    value: '\u9009\u98794',
    label: '\u9F99\u987B\u9762',
  },
  {
    value: '\u9009\u98795',
    label: '\u5317\u4EAC\u70E4\u9E2D',
  },
])
const value = ref('')

<\/script>
`},{default:r(()=>[dl]),_:1},8,["demos"]),sl,rl,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/remote","source-code":`<template>
  <hl-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="\u9690\u85CF\u540E\u7F00Icon"
    :remote-method="remoteMethod"
    :loading="loading"
    clearable
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <hl-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="\u663E\u793A\u540E\u7F00Icon"
    class="m-l-md"
    remote-show-suffix
    :remote-method="remoteMethod"
    :loading="loading"
    clearable
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    <template #suffix="{ className }">
      <!--\u8FD9\u91CC\u5FC5\u987B\u6DFB\u52A0class\uFF0C\u7528\u6765\u63A7\u5236\u540E\u7F00Icon\u548C\u6E05\u9664Icon\u7684\u5207\u6362-->
      <hl-icon :class="className">
        <two-navigation />
      </hl-icon>
    </template>
  </hl-select>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TwoNavigation } from '@hongluan-ui/icons'

const options = ref([])
const value = ref([])
const list = ref([])
const loading = ref(false)
const states = ref([
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
])

const remoteMethod = query => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter(item => {
        return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
      })
    }, 200)
  } else {
    options.value = []
  }
}

onMounted(() => {
  list.value = states.value.map(item => {
    return { value: \`value:\${item}\`, label: \`label:\${item}\` }
  })
})

<\/script>
`},{default:r(()=>[il]),_:1},8,["demos"]),cl,pl,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/create","source-code":`<template>
  <hl-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
])
const value = ref([])

<\/script>
`},{default:r(()=>[vl]),_:1},8,["demos"]),hl,ml,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/custom-tag","source-code":`<template>
  <hl-select v-model="value" multiple placeholder="Select" style="width: 240px">
    <hl-option
      v-for="item in colors"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <div class="flex items-center">
        <hl-tag :color="item.value" style="margin-right: 8px" size="small" />
        <span :style="{ color: item.value }">{{ item.label }}</span>
      </div>
    </hl-option>
    <template #tag>
      <hl-tag v-for="color in value" :key="color.value" :color="color" />
    </template>
  </hl-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([])
const colors = [
  {
    value: '#E63415',
    label: 'red',
  },
  {
    value: '#FF6600',
    label: 'orange',
  },
  {
    value: '#FFDE0A',
    label: 'yellow',
  },
  {
    value: '#1EC79D',
    label: 'green',
  },
  {
    value: '#14CCCC',
    label: 'cyan',
  },
  {
    value: '#4167F0',
    label: 'blue',
  },
  {
    value: '#6222C9',
    label: 'purple',
  },
]
colors.forEach(color => {
  value.value.push(color.value)
})
<\/script>

<style scoped>
.hl-tag {
  border: none;
  aspect-ratio: 1;
}
</style>
`},{default:r(()=>[bl]),_:1},8,["demos"]),_l,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/value-key","source-code":`<template>
  <div class="m-4">
    <hl-select v-model="value" value-key="id" placeholder="Select">
      <hl-option
        v-for="item in options"
        :key="item.id"
        :label="item.label"
        :value="item"
      />
    </hl-select>
    <p>
      selected option's description:
      {{ value ? value.desc : 'no select' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Option = {
  id: number
  label: string
  desc: string
}
const value = ref<Option>()
const options = ref([
  { id: 1, label: 'Option A', desc: 'Option A - 230506' },
  { id: 2, label: 'Option B', desc: 'Option B - 230506' },
  { id: 3, label: 'Option C', desc: 'Option C - 230506' },
  { id: 4, label: 'Option A', desc: 'Option A - 230507' },
])
<\/script>
`},{default:r(()=>[fl]),_:1},8,["demos"]),gl,yl,c(u,{fs:"",demos:k(n),"component-id":o,"path-name":"select/empty-values","source-code":`<template>
  <hl-select
    v-model="value"
    :empty-values="[null, undefined]"
    :value-on-clear="null"
    clearable
    placeholder="Select"
    style="width: 240px"
    @clear="handleClear"
  >
    <hl-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </hl-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HlMessage } from 'hongluan-ui'

const value = ref('')

const options = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const handleClear = () => {
  HlMessage.info(\`The clear value is: \${value.value}\`)
}
<\/script>
`},null,8,["demos"]),kl]),c(s)],64)}}};export{Ol as default};
