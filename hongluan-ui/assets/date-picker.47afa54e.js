import{p as b,R as m,H as i,L as w,F as D,P as l,X as t,V as _,Q as e,W as x,C as Y,T as y,aP as M,aQ as V,a1 as F,S as u,o as T}from"./vue.85e091e9.js";import{A as S,H as E,g as L}from"./hongluan-icons.6cddbf05.js";import{_ as j}from"./index.bf23fef6.js";import"./hongluan.81067e2c.js";import"./highlight.687c59a9.js";const B=e("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),A=e("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),z=b({setup(v){const r=n=>n.getTime()>Date.now(),o=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const n=new Date;return n.setTime(n.getTime()-864e5),n})()},{text:"\u4E00\u5468\u4EE5\u524D",value:(()=>{const n=new Date;return n.setTime(n.getTime()-6048e5),n})()}],h=m(""),c=m("");return(n,d)=>{const s=i("hl-icon"),p=i("hl-date-picker"),a=i("hl-col"),C=i("hl-row");return w(),D(C,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(a,{span:"lg:col-10 md:col-12"},{default:l(()=>[B,t(p,{modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=k=>h.value=k),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",disabled:!0,block:""},{icon:l(()=>[t(s,null,{default:l(()=>[t(_(S))]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(a,{span:"lg:col-10 md:col-12"},{default:l(()=>[A,t(p,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=k=>c.value=k),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","disabled-date":r,shortcuts:o,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const q={class:"demo-date-picker display-flex items-between"},Z={class:"date-table-cell-text"},P={class:"date-table-cell-text"},O=b({setup(v){const r=m("2021-10-29"),o=m(""),h=m(""),c=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"];function n({dayjs:d}){return c.includes(d.format("YYYY-MM-DD"))}return(d,s)=>{const p=i("hl-date-picker");return w(),x("div",q,[t(p,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=a=>r.value=a),type:"date",placeholder:"Pick a day",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},{default:l(a=>[e("div",{class:Y(["cell",{current:a.isCurrent}])},[e("span",{class:Y(["text",n(a)&&"text-danger font-bold"])},y(a.text),3)],2)]),_:1},8,["modelValue"]),t(p,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),type:"month",placeholder:"\u9009\u62E9\u6708\u4EFD"},{default:l(a=>[e("div",{class:Y(["date-table-cell",{current:a.isCurrent}])},[e("span",Z,y(a.text+1)+"\u671F",1)],2)]),_:1},8,["modelValue"]),t(p,{modelValue:h.value,"onUpdate:modelValue":s[2]||(s[2]=a=>h.value=a),type:"year",placeholder:"\u9009\u62E9\u5E74\u4EFD"},{default:l(a=>[e("div",{class:Y(["date-table-cell",{current:a.isCurrent}])},[e("span",P,y(a.text+1)+"y",1)],2)]),_:1},8,["modelValue"])])}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const g=v=>(M("data-v-65314d0b"),v=v(),V(),v),H={class:"demo-date-picker-icon"},I={class:"container"},N={class:"block"},Q=g(()=>e("div",{class:"demonstration"},"date",-1)),W=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"})])])],-1)),X=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"})])])],-1)),G=g(()=>e("div",{class:"line"},null,-1)),J={class:"block"},K=g(()=>e("div",{class:"demonstration"},"date range",-1)),ee=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"})])])],-1)),te=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"})])])],-1)),ne={class:"container"},le=g(()=>e("div",{class:"line"},null,-1)),ae={class:"block"},oe=g(()=>e("div",{class:"demonstration"},"month range",-1)),de=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"})])])],-1)),se=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"})])])],-1)),re=g(()=>e("div",{class:"line"},null,-1)),ce={class:"block"},ue=g(()=>e("div",{class:"demonstration"},"year range",-1)),pe=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"})])])],-1)),ie=g(()=>e("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"stroke-width":"1","fill-rule":"evenodd"},[e("g",{fill:"currentColor"},[e("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"})])])],-1)),me=b({setup(v){const r=m(""),o=m(""),h=m(""),c=m("");return(n,d)=>{const s=i("hl-icon"),p=i("hl-date-picker");return w(),x("div",H,[e("div",I,[e("div",N,[Q,t(p,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=a=>r.value=a),type:"date",placeholder:"Pick a day",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},{"prev-month":l(()=>[t(s,null,{default:l(()=>[t(_(E))]),_:1})]),"next-month":l(()=>[t(s,null,{default:l(()=>[t(_(L))]),_:1})]),"prev-year":l(()=>[t(s,null,{default:l(()=>[W]),_:1})]),"next-year":l(()=>[t(s,null,{default:l(()=>[X]),_:1})]),_:1},8,["modelValue"])]),G,e("div",J,[K,t(p,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=a=>o.value=a),type:"daterange","start-placeholder":"Start date","end-placeholder":"End date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD","unlink-panels":""},{"prev-month":l(()=>[t(s,null,{default:l(()=>[t(_(E))]),_:1})]),"next-month":l(()=>[t(s,null,{default:l(()=>[t(_(L))]),_:1})]),"prev-year":l(()=>[t(s,null,{default:l(()=>[ee]),_:1})]),"next-year":l(()=>[t(s,null,{default:l(()=>[te]),_:1})]),_:1},8,["modelValue"])])]),e("div",ne,[le,e("div",ae,[oe,t(p,{modelValue:h.value,"onUpdate:modelValue":d[2]||(d[2]=a=>h.value=a),type:"monthrange","start-placeholder":"Start date","end-placeholder":"End date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD","unlink-panels":""},{"prev-month":l(()=>[t(s,null,{default:l(()=>[t(_(E))]),_:1})]),"next-month":l(()=>[t(s,null,{default:l(()=>[t(_(L))]),_:1})]),"prev-year":l(()=>[t(s,null,{default:l(()=>[de]),_:1})]),"next-year":l(()=>[t(s,null,{default:l(()=>[se]),_:1})]),_:1},8,["modelValue"])]),re,e("div",ce,[ue,t(p,{modelValue:c.value,"onUpdate:modelValue":d[3]||(d[3]=a=>c.value=a),type:"yearrange","range-separator":"To","start-placeholder":"Start Year","end-placeholder":"End Year"},{"prev-year":l(()=>[t(s,null,{default:l(()=>[pe]),_:1})]),"next-year":l(()=>[t(s,null,{default:l(()=>[ie]),_:1})]),_:1},8,["modelValue"])])])])}}});var he=j(me,[["__scopeId","data-v-65314d0b"]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he});const _e=e("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),ge=e("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),fe=b({setup(v){const r=[{text:"\u6700\u8FD1\u4E00\u5468",value:(()=>{const c=new Date,n=new Date;return n.setTime(n.getTime()-6048e5),[n,c]})()},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:(()=>{const c=new Date,n=new Date;return n.setTime(n.getTime()-2592e6),[n,c]})()},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:(()=>{const c=new Date,n=new Date;return n.setTime(n.getTime()-7776e6),[n,c]})()}],o=m(""),h=m("");return(c,n)=>{const d=i("hl-date-picker"),s=i("hl-col"),p=i("hl-row");return w(),D(p,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(s,{span:"lg:col-12"},{default:l(()=>[_e,t(d,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=a=>o.value=a),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1}),t(s,{span:"lg:col-12"},{default:l(()=>[ge,t(d,{modelValue:h.value,"onUpdate:modelValue":n[1]||(n[1]=a=>h.value=a),type:"daterange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",shortcuts:r,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe});const be={class:"m-b-sm"},Ce=b({setup(v){const r=[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],o=m("");return(h,c)=>{const n=i("hl-date-picker");return w(),x(F,null,[e("p",be,"\u7EC4\u4EF6\u503C\uFF1A"+y(o.value),1),t(n,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=d=>o.value=d),type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":r},null,8,["modelValue"])],64)}}});var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});const ye=e("p",{class:"m-b-sm"},"\u65E5\u671F",-1),De=e("p",{class:"m-b-sm"},"\u65E5\u671F\u8303\u56F4",-1),xe=b({setup(v){const r=m(""),o=m("");return(h,c)=>{const n=i("hl-date-picker"),d=i("hl-col"),s=i("hl-row");return w(),D(s,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(d,{span:"lg:col-12"},{default:l(()=>[ye,t(n,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=p=>r.value=p),type:"date",placeholder:"Pick a date","default-value":new Date(2021,8,1)},null,8,["modelValue","default-value"])]),_:1}),t(d,{span:"lg:col-12"},{default:l(()=>[De,t(n,{modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=p=>o.value=p),type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2021,9,1),new Date(2021,10,1)]},null,8,["modelValue","default-value"])]),_:1})]),_:1})}}});var Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const Ee=e("p",{class:"m-b-sm"},"\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61",-1),Le={class:"m-t-lg"},Fe=e("p",{class:"m-b-sm"},"\u4F7F\u7528value-format",-1),Me={class:"m-t-lg"},Ve=e("p",{class:"m-b-sm"},"\u65F6\u95F4\u6233",-1),je={class:"m-t-lg"},$e=b({setup(v){const r=m(""),o=m(""),h=m("");return(c,n)=>{const d=i("hl-date-picker"),s=i("hl-col"),p=i("hl-row");return w(),D(p,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(s,{span:"col"},{default:l(()=>[Ee,t(d,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=a=>r.value=a),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5"},null,8,["modelValue"]),e("p",Le,"\u503C\uFF1A"+y(r.value),1)]),_:1}),t(s,{span:"col"},{default:l(()=>[Fe,t(d,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=a=>o.value=a),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"YYYY/MM/DD"},null,8,["modelValue"]),e("p",Me,"\u503C\uFF1A"+y(o.value),1)]),_:1}),t(s,{span:"col"},{default:l(()=>[Ve,t(d,{modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=a=>h.value=a),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"x"},null,8,["modelValue"]),e("p",je,"\u503C\uFF1A"+y(h.value),1)]),_:1})]),_:1})}}});var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const Se=e("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1),Be=e("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),Ae=b({setup(v){const r=[{text:"\u672C\u6708",value:[new Date,new Date]},{text:"\u4ECA\u5E74\u81F3\u4ECA",value:(()=>{const c=new Date;return[new Date(new Date().getFullYear(),0),c]})()},{text:"\u6700\u8FD1\u516D\u4E2A\u6708",value:(()=>{const c=new Date,n=new Date;return n.setMonth(n.getMonth()-6),[n,c]})()}],o=m(""),h=m("");return(c,n)=>{const d=i("hl-date-picker"),s=i("hl-col"),p=i("hl-row");return w(),D(p,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(s,{span:"lg:col-12"},{default:l(()=>[Se,t(d,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=a=>o.value=a),type:"monthrange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",block:""},null,8,["modelValue"])]),_:1}),t(s,{span:"lg:col-12"},{default:l(()=>[Be,t(d,{modelValue:h.value,"onUpdate:modelValue":n[1]||(n[1]=a=>h.value=a),type:"monthrange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",shortcuts:r,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ae});const Ue=e("p",{class:"m-b-sm"},"\u5468",-1),qe=e("p",{class:"m-b-sm"},"\u6708",-1),Ze=e("p",{class:"m-b-sm"},"\u5E74",-1),Pe=e("p",{class:"m-b-sm"},"\u591A\u4E2A\u65E5\u671F",-1),Oe=e("p",{class:"m-b-sm"},"\u591A\u4E2A\u5E74",-1),Re=e("p",{class:"m-b-sm"},"\u591A\u4E2A\u6708",-1),He=b({setup(v){const r=m(""),o=m(""),h=m(""),c=m(""),n=m([]),d=m([]);return(s,p)=>{const a=i("hl-date-picker"),C=i("hl-col"),k=i("hl-row");return w(),x(F,null,[t(k,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(C,{span:"md:col-12 lg:col-10"},{default:l(()=>[Ue,t(a,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=f=>r.value=f),type:"week",format:"gggg \u7B2C ww \u5468",placeholder:"\u9009\u62E9\u5468",block:""},null,8,["modelValue"])]),_:1}),t(C,{span:"md:col-12 lg:col-10"},{default:l(()=>[qe,t(a,{modelValue:o.value,"onUpdate:modelValue":p[1]||(p[1]=f=>o.value=f),type:"month",placeholder:"\u9009\u62E9\u6708",block:""},null,8,["modelValue"])]),_:1})]),_:1}),t(k,{align:"items-center",gap:"var(--xl)",class:"m-t-lg"},{default:l(()=>[t(C,{span:"md:col-12 lg:col-10"},{default:l(()=>[Ze,t(a,{modelValue:h.value,"onUpdate:modelValue":p[2]||(p[2]=f=>h.value=f),type:"year",placeholder:"\u9009\u62E9\u5E74",block:""},null,8,["modelValue"])]),_:1}),t(C,{span:"md:col-12 lg:col-10"},{default:l(()=>[Pe,t(a,{modelValue:c.value,"onUpdate:modelValue":p[3]||(p[3]=f=>c.value=f),type:"dates",placeholder:"\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1}),t(k,{align:"items-center",gap:"var(--xl)",class:"m-t-lg"},{default:l(()=>[t(C,{span:"md:col-12 lg:col-10"},{default:l(()=>[Oe,t(a,{modelValue:n.value,"onUpdate:modelValue":p[4]||(p[4]=f=>n.value=f),type:"years",placeholder:"\u9009\u62E9\u5E74",block:""},null,8,["modelValue"])]),_:1}),t(C,{span:"md:col-12 lg:col-10"},{default:l(()=>[Re,t(a,{modelValue:d.value,"onUpdate:modelValue":p[5]||(p[5]=f=>d.value=f),type:"months",placeholder:"\u9009\u62E9\u6708",block:""},null,8,["modelValue"])]),_:1})]),_:1})],64)}}});var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:He});const $=v=>(M("data-v-494505cc"),v=v(),V(),v),Ne=$(()=>e("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1)),Qe=$(()=>e("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1)),We=b({setup(v){const r=m(),o=m(),h=[{text:"\u672C\u5E74",value:[new Date,new Date]},{text:"\u8FC7\u53BB\u5341\u5E74",value:()=>{const c=new Date;return[new Date(new Date().setFullYear(new Date().getFullYear()-10)),c]}},{text:"\u672A\u6765\u4E94\u5341\u5E74",value:()=>{const c=new Date,n=new Date(new Date().setFullYear(new Date().getFullYear()+50));return[c,n]}}];return(c,n)=>{const d=i("hl-date-picker"),s=i("hl-col"),p=i("hl-row");return w(),D(p,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[t(s,{span:"lg:col-12"},{default:l(()=>[Ne,t(d,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=a=>r.value=a),type:"yearrange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u5E74\u4EFD","end-placeholder":"\u7ED3\u675F\u5E74\u4EFD"},null,8,["modelValue"])]),_:1}),t(s,{span:"lg:col-12"},{default:l(()=>[Qe,t(d,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=a=>o.value=a),type:"yearrange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u5E74\u4EFD","end-placeholder":"\u7ED3\u675F\u5E74\u4EFD",shortcuts:h},null,8,["modelValue"])]),_:1})]),_:1})}}});var Xe=j(We,[["__scopeId","data-v-494505cc"]]),Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xe});const Je=e("h1",null,"DatePicker \u65E5\u671F\u9009\u62E9\u5668",-1),Ke=e("p",null,"\u4EE5\u300C\u65E5\u300D\u4E3A\u57FA\u672C\u5355\u4F4D\uFF0C\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\u63A7\u4EF6",-1),et=e("div",{class:"doc-tip"},[e("p",null,[u("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),e("code",null,"<client-only></client-only>"),u(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),e("a",{href:"https://nuxt.com/v3"},"Nuxt"),u(") \u548C SSG (eg: "),e("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),u(")\u3002")])],-1),tt=e("div",null,[e("p",null,[u("\u57FA\u672C\u5355\u4F4D\u7531"),e("code",null,"type"),u("\u5C5E\u6027\u6307\u5B9A\u3002\u901A\u8FC7"),e("code",null,"shortcuts"),u("\u914D\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u7981\u7528\u65E5\u671F\u901A\u8FC7 "),e("code",null,"disabled-date"),u(" \u8BBE\u7F6E\uFF0C\u4F20\u5165\u51FD\u6570")])],-1),nt=e("h2",{id:"qi-ta-ri-qi-dan-wei"},[e("a",{class:"header-anchor",href:"#qi-ta-ri-qi-dan-wei"}),u(" \u5176\u4ED6\u65E5\u671F\u5355\u4F4D")],-1),lt=e("p",null,"\u901A\u8FC7\u6269\u5C55\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\uFF0C\u53EF\u4EE5\u9009\u62E9\u5468\u3001\u6708\u3001\u5E74\u6216\u591A\u4E2A\u65E5\u671F",-1),at=e("h2",{id:"xuan-ze-ri-qi-fan-wei"},[e("a",{class:"header-anchor",href:"#xuan-ze-ri-qi-fan-wei"}),u(" \u9009\u62E9\u65E5\u671F\u8303\u56F4")],-1),ot=e("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u8303\u56F4",-1),dt=e("div",null,[e("p",null,[u("\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u6708\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"unlink-panels"),u("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),st=e("h2",{id:"xuan-ze-yue-fen-fan-wei"},[e("a",{class:"header-anchor",href:"#xuan-ze-yue-fen-fan-wei"}),u(" \u9009\u62E9\u6708\u4EFD\u8303\u56F4")],-1),rt=e("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD\u8303\u56F4",-1),ct=e("div",null,[e("p",null,[u("\u5728\u9009\u62E9\u6708\u4EFD\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u5E74\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"unlink-panels"),u("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),ut=e("h2",{id:"xuan-ze-nian-fen-fan-wei"},[e("a",{class:"header-anchor",href:"#xuan-ze-nian-fen-fan-wei"}),u(" \u9009\u62E9\u5E74\u4EFD\u8303\u56F4")],-1),pt=e("div",null,[e("p",null,[u("\u5728\u9009\u62E9\u5E74\u4EFD\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u5E74\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"unlink-panels"),u("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),it=e("h2",{id:"mo-ren-zhi"},[e("a",{class:"header-anchor",href:"#mo-ren-zhi"}),u(" \u9ED8\u8BA4\u503C")],-1),mt=e("p",null,[u("\u5982\u679C\u7528\u6237\u6CA1\u6709\u9009\u62E9\u65E5\u671F\uFF0C\u90A3\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D\u65E5\u7684\u6708\u4EFD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),e("code",null,"default-value"),u(" \u6765\u8BBE\u7F6E\u6210\u5176\u4ED6\u7684\u65E5\u671F\u3002")],-1),ht=e("p",null,[u("\u5982\u679C\u7C7B\u578B\u662F "),e("code",null,"daterange"),u(", "),e("code",null,"default-value"),u(" \u5219\u4F1A\u8BBE\u7F6E\u5DE6\u8FB9\u7A97\u53E3\u7684\u9ED8\u8BA4\u503C\u3002")],-1),vt=e("h2",{id:"ri-qi-ge-shi"},[e("a",{class:"header-anchor",href:"#ri-qi-ge-shi"}),u(" \u65E5\u671F\u683C\u5F0F")],-1),_t=e("p",null,[u("\u4F7F\u7528"),e("code",null,"format"),u("\u6307\u5B9A\u8F93\u5165\u6846\u7684\u683C\u5F0F\u3002\u4F7F\u7528"),e("code",null,"value-format"),u("\u6307\u5B9A\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u63A5\u53D7\u5E76\u8FD4\u56DE"),e("code",null,"Date"),u("\u5BF9\u8C61\u3002")],-1),gt=e("div",{class:"doc-tip warning"},[e("p",null,"\u8BF7\u6CE8\u610F\u5927\u5C0F\u5199")],-1),ft=e("div",null,[e("p",null,[u("\u5728 "),e("a",{href:"https://day.js.org/docs/zh-CN/display/format"},"\u8FD9\u91CC"),u(" \u67E5\u770B Day.js \u652F\u6301\u7684 format \u53C2\u6570\u3002")])],-1),wt=e("h2",{id:"mo-ren-xian-shi-ri-qi"},[e("a",{class:"header-anchor",href:"#mo-ren-xian-shi-ri-qi"}),u(" \u9ED8\u8BA4\u663E\u793A\u65E5\u671F")],-1),bt=e("p",null,"\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u6307\u5B9A\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u9ED8\u8BA4\u65F6\u523B\u3002",-1),Ct=e("div",null,[e("p",null,[u("\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u95F4\u90E8\u5206\u5747\u4E3A\u5F53\u5929\u7684 0 \u70B9 0 \u5206 0 \u79D2\u3002\u901A\u8FC7"),e("code",null,"default-time"),u("\u53EF\u4EE5\u5206\u522B\u6307\u5B9A\u4E8C\u8005\u7684\u5177\u4F53\u65F6\u523B\u3002"),e("code",null,"default-time"),u("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u503C\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002")])],-1),kt=e("h2",{id:"zi-ding-yi-dan-yuan-ge-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-dan-yuan-ge-nei-rong"}),u(" \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9")],-1),yt=e("p",null,"\u6CE8\u610F\uFF1A\u81EA\u5B9A\u4E49DOM\u7ED3\u6784\u5E94\u8BE5\u548C\u539F\u59CBDOM\u7ED3\u6784\u4FDD\u6301\u4E00\u76F4\uFF0C\u5426\u5219\u6837\u5F0F\u4F1A\u51FA\u95EE\u9898\u3002",-1),Dt=e("h2",{id:"zi-ding-yi-tu-biao"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-tu-biao"}),u(" \u81EA\u5B9A\u4E49\u56FE\u6807")],-1),xt=T(`<p><code>slot</code> \u53C2\u6570\u8BE6\u60C5\uFF1A</p><pre><code class="hljs language-ts"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">DateCell</span> {
  <span class="hljs-attr">column</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">customClass</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">disabled</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">end</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">inRange</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">row</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">selected</span>: <span class="hljs-title class_">Dayjs</span>
  <span class="hljs-attr">isCurrent</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">isSelected</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">start</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">text</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">timestamp</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">date</span>: <span class="hljs-title class_">Date</span>
  <span class="hljs-attr">dayjs</span>: <span class="hljs-title class_">Dayjs</span>
  <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;normal&#39;</span> | <span class="hljs-string">&#39;today&#39;</span> | <span class="hljs-string">&#39;week&#39;</span> | <span class="hljs-string">&#39;next-month&#39;</span> | <span class="hljs-string">&#39;prev-month&#39;</span>
}
</code></pre><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u9700\u8981\u957F\u5EA6\u4E3A2</td><td>Date / number / string / Array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/years/months/month/date/dates/week/datetime/datetimerange/daterange/monthrange/yearrange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-options</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5C5E\u6027 <a href="https://popper.js.org/docs/v2/">popper.js</a></td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B</td><td>Date[]</td><td>\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>id</td><td>input\u8F93\u5165\u6846id\u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>empty-values</td><td>\u7EC4\u4EF6\u7684\u7A7A\u503C\u914D\u7F6E\uFF0C\u53C2\u8003config-provider</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>value-on-clear</td><td>\u6E05\u7A7A\u9009\u9879\u7684\u503C\uFF0C\u53C2\u8003 config-provider</td><td>string / number / boolean / Function</td><td>\u2014</td><td></td></tr><tr><td>fallback-placements</td><td>\u6D6E\u7A97\u5019\u9009\u4F4D\u7F6E <a href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">popper.js</a></td><td><code>Placement[]</code></td><td>\u2014</td><td>[&#39;bottom&#39;, &#39;top&#39;, &#39;right&#39;, &#39;left&#39;]</td></tr><tr><td>placement</td><td>\u6D6E\u7A97\u4F4D\u7F6E</td><td><code>Placement</code></td><td>-</td><td>bottom</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u81EA\u5B9A\u4E49\u9694\u79BB\u5668\u5185\u5BB9</td><td></td></tr><tr><td>prev-month</td><td>\u4E0A\u6708\u56FE\u6807</td><td></td></tr><tr><td>next-month</td><td>\u4E0B\u6708\u56FE\u6807</td><td></td></tr><tr><td>prev-year</td><td>\u4E0A\u5E74\u56FE\u6807</td><td></td></tr><tr><td>next-year</td><td>\u4E0B\u5E74\u56FE\u6807</td><td></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>clear</td><td>\u5F53\u6E05\u7A7A\u56FE\u6807\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>() =&gt; void</code></td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>daterange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr><tr><td>panel-change</td><td>\u70B9\u51FB\u5BFC\u822A\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>(date, mode, view)</code></td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>focusStartInput</td></tr><tr><td>handleOpen</td><td>\u6253\u5F00\u65E5\u671F\u9009\u62E9\u5668\u5F39\u7A97</td><td>\u2014</td></tr><tr><td>handleClose</td><td>\u5173\u95ED\u65E5\u671F\u9009\u62E9\u5668\u5F39\u7A97</td><td>\u2014</td></tr></tbody></table>`,10),Vt={setup(v){const r="date-picker",o={"../../../examples/date-picker/basic.vue":U,"../../../examples/date-picker/custom-content.vue":R,"../../../examples/date-picker/custom-icon.vue":ve,"../../../examples/date-picker/daterange.vue":we,"../../../examples/date-picker/default-time.vue":ke,"../../../examples/date-picker/default-value.vue":Ye,"../../../examples/date-picker/format.vue":Te,"../../../examples/date-picker/monthrange.vue":ze,"../../../examples/date-picker/type.vue":Ie,"../../../examples/date-picker/year-range.vue":Ge};return(h,c)=>{const n=i("demo-block"),d=i("right-nav");return w(),x(F,null,[e("section",null,[Je,Ke,et,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/basic","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-10 md:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" :disabled="true" block>
        <template #icon>
          <hl-icon>
            <two-airplay />
          </hl-icon>
        </template>
      </hl-date-picker>
    </hl-col>
    <hl-col span="lg:col-10 md:col-12">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwoAirplay } from '@hongluan-ui/icons'

const disabledDate = time => {
  return time.getTime() > Date.now()
}
const shortcuts = [
  {
    text: '\u4ECA\u5929',
    value: new Date(),
  },
  {
    text: '\u6628\u5929',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })(),
  },
  {
    text: '\u4E00\u5468\u4EE5\u524D',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })(),
  },
]
const value1 = ref('')
const value2 = ref('')
<\/script>
`},{default:l(()=>[tt]),_:1},8,["demos"]),nt,lt,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/type","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5468</p>
      <hl-date-picker v-model="value1" type="week" format="gggg \u7B2C ww \u5468" placeholder="\u9009\u62E9\u5468" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u6708</p>
      <hl-date-picker v-model="value2" type="month" placeholder="\u9009\u62E9\u6708" block />
    </hl-col>
  </hl-row>

  <hl-row align="items-center" gap="var(--xl)" class="m-t-lg">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5E74</p>
      <hl-date-picker v-model="value3" type="year" placeholder="\u9009\u62E9\u5E74" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u4E2A\u65E5\u671F</p>
      <hl-date-picker v-model="value4" type="dates" placeholder="\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F" block />
    </hl-col>
  </hl-row>
  <hl-row align="items-center" gap="var(--xl)" class="m-t-lg">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u4E2A\u5E74</p>
      <hl-date-picker v-model="value5" type="years" placeholder="\u9009\u62E9\u5E74" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u4E2A\u6708</p>
      <hl-date-picker v-model="value6" type="months" placeholder="\u9009\u62E9\u6708" block />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref([])
const value6 = ref([])
<\/script>

`},null,8,["demos"]),at,ot,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/daterange","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="daterange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        block
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u6700\u8FD1\u4E00\u5468',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u4E00\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u4E09\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })(),
  },
]
const value1 = ref('')
const value2 = ref('')
<\/script>
`},{default:l(()=>[dt]),_:1},8,["demos"]),st,rt,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/monthrange","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        block
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u672C\u6708',
    value: [new Date(), new Date()],
  },
  {
    text: '\u4ECA\u5E74\u81F3\u4ECA',
    value: (() => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u516D\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    })(),
  },
]

const value1 = ref('')
const value2 = ref('')

<\/script>
`},{default:l(()=>[ct]),_:1},8,["demos"]),ut,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/year-range","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="yearrange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u5E74\u4EFD"
        end-placeholder="\u7ED3\u675F\u5E74\u4EFD"
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="yearrange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u5E74\u4EFD"
        end-placeholder="\u7ED3\u675F\u5E74\u4EFD"
        :shortcuts="shortcuts"
      />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()

const shortcuts = [
  {
    text: '\u672C\u5E74',
    value: [new Date(), new Date()],
  },
  {
    text: '\u8FC7\u53BB\u5341\u5E74',
    value: () => {
      const end = new Date()
      const start = new Date(
        new Date().setFullYear(new Date().getFullYear() - 10)
      )
      return [start, end]
    },
  },
  {
    text: '\u672A\u6765\u4E94\u5341\u5E74',
    value: () => {
      const start = new Date()
      const end = new Date(
        new Date().setFullYear(new Date().getFullYear() + 50)
      )
      return [start, end]
    },
  },
]
<\/script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
`},{default:l(()=>[pt]),_:1},8,["demos"]),it,mt,ht,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/default-value","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u65E5\u671F</p>
      <hl-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2021, 8, 1)"
      />
    </hl-col>

    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u65E5\u671F\u8303\u56F4</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2021, 9, 1), new Date(2021, 10, 1)]"
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
<\/script>
`},null,8,["demos"]),vt,_t,gt,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/format","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="col">
      <p class="m-b-sm">\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" format="YYYY \u5E74 MM \u6708 DD \u65E5" />
      <p class="m-t-lg">\u503C\uFF1A{{ value1 }}</p>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-sm">\u4F7F\u7528value-format</p>
      <hl-date-picker
        v-model="value2"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        format="YYYY \u5E74 MM \u6708 DD \u65E5"
        value-format="YYYY/MM/DD"
      />
      <p class="m-t-lg">\u503C\uFF1A{{ value2 }}</p>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-sm">\u65F6\u95F4\u6233</p>
      <hl-date-picker
        v-model="value3"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        format="YYYY \u5E74 MM \u6708 DD \u65E5"
        value-format="x"
      />
      <p class="m-t-lg">\u503C\uFF1A{{ value3 }}</p>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
<\/script>
`},{default:l(()=>[ft]),_:1},8,["demos"]),wt,bt,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/default-time","source-code":`<template>
  <p class="m-b-sm">\u7EC4\u4EF6\u503C\uFF1A{{ value }}</p>
  <hl-date-picker v-model="value" type="daterange" start-placeholder="\u5F00\u59CB\u65E5\u671F" end-placeholder="\u7ED3\u675F\u65E5\u671F" :default-time="defaultTime" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)] // '00:00:00', '23:59:59'
const value = ref('')
<\/script>
`},{default:l(()=>[Ct]),_:1},8,["demos"]),kt,yt,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/custom-content","source-code":`<template>
  <div class="demo-date-picker display-flex items-between">
    <hl-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span :class="['text', isHoliday(cell) && 'text-danger font-bold'] ">{{ cell.text }}</span>
        </div>
      </template>
    </hl-date-picker>
    <hl-date-picker v-model="month" type="month" placeholder="\u9009\u62E9\u6708\u4EFD">
      <template #default="cell">
        <div class="date-table-cell" :class="{ current: cell.isCurrent }">
          <span class="date-table-cell-text">{{ cell.text + 1 }}\u671F</span>
        </div>
      </template>
    </hl-date-picker>
    <hl-date-picker v-model="year" type="year" placeholder="\u9009\u62E9\u5E74\u4EFD">
      <template #default="cell">
        <div class="date-table-cell" :class="{ current: cell.isCurrent }">
          <span class="date-table-cell-text">{{ cell.text + 1 }}y</span>
        </div>
      </template>
    </hl-date-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('2021-10-29')
const month = ref('')
const year = ref('')

const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07',
]

function isHoliday({ dayjs }) {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
<\/script>
`},null,8,["demos"]),Dt,t(n,{fs:"",demos:_(o),"component-id":r,"path-name":"date-picker/custom-icon","source-code":`<template>
  <div class="demo-date-picker-icon">
    <div class="container">
      <div class="block">
        <div class="demonstration">date</div>
        <hl-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        >
          <template #prev-month>
            <hl-icon><FillHeart /></hl-icon>
          </template>
          <template #next-month>
            <hl-icon><TwoChevronsRight /></hl-icon>
          </template>
          <template #prev-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
          <template #next-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
        </hl-date-picker>
      </div>
      <div class="line"></div>
      <div class="block">
        <div class="demonstration">date range</div>
        <hl-date-picker
          v-model="value2"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          unlink-panels
        >
          <template #prev-month>
            <hl-icon><FillHeart /></hl-icon>
          </template>
          <template #next-month>
            <hl-icon><TwoChevronsRight /></hl-icon>
          </template>
          <template #prev-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
          <template #next-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
        </hl-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="line"></div>
      <div class="block">
        <div class="demonstration">month range</div>
        <hl-date-picker
          v-model="value3"
          type="monthrange"
          start-placeholder="Start date"
          end-placeholder="End date"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          unlink-panels
        >
          <template #prev-month>
            <hl-icon><FillHeart /></hl-icon>
          </template>
          <template #next-month>
            <hl-icon><TwoChevronsRight /></hl-icon>
          </template>
          <template #prev-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
          <template #next-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
        </hl-date-picker>
      </div>
      <div class="line"></div>
      <div class="block">
        <div class="demonstration">year range</div>
        <hl-date-picker
          v-model="value4"
          type="yearrange"
          range-separator="To"
          start-placeholder="Start Year"
          end-placeholder="End Year"
        >
          <template #prev-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
          <template #next-year>
            <hl-icon>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke-width="1" fill-rule="evenodd">
                  <g fill="currentColor">
                    <path
                      d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
                    />
                  </g>
                </g>
              </svg>
            </hl-icon>
          </template>
        </hl-date-picker>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FillHeart, TwoChevronsRight } from '@hongluan-ui/icons'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
<\/script>

<style scoped>
.demo-date-picker-icon {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker-icon .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--border-color);
  flex: 1;
}

.demo-date-picker-icon .block:last-child {
  border-right: none;
}

.demo-date-picker-icon .container {
  flex: 1;
  border-right: solid 1px var(--border-color);
}

.demo-date-picker-icon .container .block {
  border-right: none;
}

.demo-date-picker-icon .container .block:last-child {
  border-top: solid 1px var(--border-color);
}

.demo-date-picker-icon .container:last-child {
  border-right: none;
}

.demo-date-picker-icon .demonstration {
  display: block;
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
`},null,8,["demos"]),xt]),t(d)],64)}}};export{Vt as default};
