var O=Object.defineProperty;var j=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var B=(n,o,e)=>o in n?O(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,C=(n,o)=>{for(var e in o||(o={}))N.call(o,e)&&B(n,e,o[e]);if(j)for(var e of j(o))P.call(o,e)&&B(n,e,o[e]);return n};import{a0 as l,L as V,W as L,Q as t,a4 as i,a1 as _,ab as S,a5 as $,b0 as m}from"./vue.42779483.js";import{_ as w}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.58a96039.js";const I={name:"component-doc",components:{"hb-demo0":function(){const{renderList:n,Fragment:o,openBlock:e,createElementBlock:d,createElementVNode:r,toDisplayString:p,createTextVNode:s,resolveComponent:a,withCtx:c,createBlock:g}=m,x=r("h5",null,"Inner Prop",-1),D=s(" / "),k=r("br",null,null,-1);function A(b,f){const F=a("hb-alias");return e(!0),d(o,null,n(b.list,(u,y)=>(e(),g(F,{key:y,obj2:u.obj1.innerObj2},{default:c(({obj2:E})=>[x,r("span",null,"prop1: "+p(E.prop1),1),D,r("span",null,"prop2: "+p(E.prop2),1),k]),_:2},1032,["obj2"]))),128)}const{defineComponent:v}=m,{ref:h}=m;return C({render:A},v({setup(b,{expose:f}){f();const u={list:h([{obj1:{innerObj2:{prop1:"1",prop2:"2"}}},{obj1:{innerObj2:{prop1:"3",prop2:"4"}}}]),ref:h};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}))}()}},Q=t("h1",null,"Alias \u522B\u540D",-1),T=t("p",null,"\u901A\u5E38\u7528\u4E8E\u591A\u91CD\u5FAA\u73AF\uFF0C\u5B9A\u4E49\u4E34\u65F6\u53D8\u91CF\uFF0C\u65B9\u4FBF\u6A21\u677F\u4E2D\u4EE5\u7B80\u6D01\u7684\u65B9\u5F0F\u8BBF\u95EE\u4E34\u65F6\u53D8\u91CF\u3002",-1),W=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),$(" \u57FA\u7840\u7528\u6CD5")],-1),X=t("div",null,[t("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),q=t("pre",null,[t("code",{class:"html"},` <template>
  <template v-for="(item, idx) in list" :key="idx">
    <hb-alias :obj2="item.obj1.innerObj2" #="{ obj2 }">
      <h5>Inner Prop</h5>
      <span>prop1: {{ obj2.prop1 }}</span> / <span>prop2: {{ obj2.prop2 }}</span>
      <br>
    </hb-alias>
  </template>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    obj1: {
      innerObj2: {
        prop1: '1',
        prop2: '2',
      },
    },
  },
  {
    obj1: {
      innerObj2: {
        prop1: '3',
        prop2: '4',
      },
    },
  },
])

<\/script>
`)],-1);function z(n,o,e,d,r,p){const s=l("hb-demo0"),a=l("demo-block"),c=l("right-nav");return V(),L(S,null,[t("section",null,[Q,T,W,i(a,{fs:""},{source:_(()=>[i(s)]),highlight:_(()=>[q]),default:_(()=>[X]),_:1})]),i(c)],64)}var Y=w(I,[["render",z]]);export{Y as default};
