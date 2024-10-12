var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(e,o,t)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,y=(e,o)=>{for(var t in o||(o={}))M.call(o,t)&&N(e,t,o[t]);if(x)for(var t of x(o))P.call(o,t)&&N(e,t,o[t]);return e};import{a0 as B,L as $,W as O,Q as u,a4 as d,a1 as p,ab as H,a5 as g,aX as I,b0 as F}from"./vue.42779483.js";import{H as V}from"./hongluan-icons.58a96039.js";import{_ as Q}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";const W={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:n,openBlock:a,createBlock:r,createCommentVNode:s}=F,c=e("\u64CD\u4F5C1"),h=e("\u64CD\u4F5C3"),_=e("\u64CD\u4F5C5");function i(w,k){const C=o("hl-button"),f=o("hl-switch"),b=o("hb-overflow-list");return a(),r(b,{"show-count":3},{default:t(()=>[n(C,{type:"link"},{default:t(()=>[c]),_:1}),n(f,{type:"primary"}),(a(),r(C,{key:0,type:"link"},{default:t(()=>[h]),_:1})),s("",!0),n(C,{type:"link"},{default:t(()=>[_]),_:1})]),_:1})}return y({render:i},{})}(),"hb-demo1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:n,openBlock:a,createBlock:r}=F,s=e("\u64CD\u4F5C1"),c=e("\u64CD\u4F5C2"),h=e("\u64CD\u4F5C3"),_=e("\u64CD\u4F5C4"),i=e("\u64CD\u4F5C5");function E(f,b){const l=o("hl-button"),v=o("fill-layer"),m=o("hl-icon"),D=o("hb-overflow-list");return a(),r(D,{"dropdown-props":{trigger:"click"}},{more:t(()=>[n(m,null,{default:t(()=>[n(v)]),_:1})]),default:t(()=>[n(l,{type:"link"},{default:t(()=>[s]),_:1}),n(l,{type:"link"},{default:t(()=>[c]),_:1}),n(l,{type:"link"},{default:t(()=>[h]),_:1}),n(l,{type:"link"},{default:t(()=>[_]),_:1}),n(l,{type:"link"},{default:t(()=>[i]),_:1})]),_:1})}const{defineComponent:w}=F,{FillLayer:k}=V;return y({render:E},w({setup(f,{expose:b}){b();const l={FillLayer:k};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hb-demo2":function(){const{createElementVNode:e,resolveComponent:o,openBlock:t,createBlock:n,createCommentVNode:a,withCtx:r,createVNode:s}=F,c=e("p",null,"\u7B2C\u4E00\u884C\u5185\u5BB9",-1),h=e("p",null,"\u7B2C\u4E8C\u884C\u5185\u5BB9",-1),_=e("p",null,"\u7B2C\u4E09\u884C\u5185\u5BB9",-1),i=e("p",null,"\u7B2C\u56DB\u884C\u5185\u5BB9",-1),E=e("p",null,"\u7B2C\u4E94\u884C\u5185\u5BB9",-1);function w(l,v){const m=o("two-chevrons-bottom"),D=o("two-chevrons-top"),A=o("hl-icon"),T=o("hb-overflow-list");return t(),n(T,{"show-count":3,"show-type":"expand"},{more:r(({hasMore:L,show:j,hide:S})=>[s(A,{class:"cursor-pointer m-l-lg"},{default:r(()=>[L?(t(),n(m,{key:0,onClick:j},null,8,["onClick"])):(t(),n(D,{key:1,onClick:S},null,8,["onClick"]))]),_:2},1024)]),default:r(()=>[c,h,_,i,E]),_:1})}const{defineComponent:k}=F,{TwoChevronsBottom:C,TwoChevronsTop:f}=V;return y({render:w},k({setup(l,{expose:v}){v();const m={TwoChevronsBottom:C,TwoChevronsTop:f};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}))}()}},X=u("h1",null,"OverflowList \u6298\u53E0\u5217\u8868",-1),U=u("p",null,"\u901A\u5E38\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u5217\uFF0C\u5F53\u64CD\u4F5C\u9879\u6BD4\u8F83\u591A\u65F6\uFF0C\u53EF\u5229\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u7684\u663E\u9690\u3002\u76EE\u524D\u4EC5\u652F\u6301\u5B50\u5143\u7D20\u4E0A\u4F7F\u7528v-if\u6307\u4EE4\uFF0C\u4E0D\u652F\u6301v-show\u6307\u4EE4\u3002",-1),q=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),g(" \u57FA\u7840\u7528\u6CD5")],-1),G=u("div",null,[u("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),J=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-switch type="primary" />
    <hl-button v-if="true" type="link">\u64CD\u4F5C3</hl-button>
    <hl-button v-if="false" type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
  </hb-overflow-list>
</template>
`)],-1),K=u("h2",{id:"zi-ding-yi-moretu-biao"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-moretu-biao"}),g(" \u81EA\u5B9A\u4E49More\u56FE\u6807")],-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-overflow-list :dropdown-props="{ trigger: 'click' }">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-button type="link">\u64CD\u4F5C2</hl-button>
    <hl-button type="link">\u64CD\u4F5C3</hl-button>
    <hl-button type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
    <template #more>
      <hl-icon>
        <fill-layer />
      </hl-icon>
    </template>
  </hb-overflow-list>
</template>
<script lang="ts" setup>
import { FillLayer } from '@hongluan-ui/icons'

<\/script>
`)],-1),Y=u("h2",{id:"zhan-kai-fang-shi"},[u("a",{class:"header-anchor",href:"#zhan-kai-fang-shi"}),g(" \u5C55\u5F00\u65B9\u5F0F")],-1),Z=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3" show-type="expand">
    <p>\u7B2C\u4E00\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u4E8C\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u4E09\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u56DB\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u4E94\u884C\u5185\u5BB9</p>
    <template #more="{ hasMore, show, hide }">
      <hl-icon class="cursor-pointer m-l-lg">
        <two-chevrons-bottom v-if="hasMore" @click="show" />
        <two-chevrons-top v-else @click="hide" />
      </hl-icon>
    </template>
  </hb-overflow-list>
</template>
<script lang="ts" setup>
import { TwoChevronsBottom, TwoChevronsTop } from '@hongluan-ui/icons'

<\/script>
`)],-1),tt=I('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show-count</td><td>\u663E\u793A\u7684\u6570\u91CF</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-type</td><td>\u663E\u793A\u7684\u7C7B\u578B</td><td>tooltip / expand</td><td>\u2014</td><td>tooltip</td></tr><tr><td>dropdown-props</td><td>Dropdown\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53C2\u8003Dropdown\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u9ED8\u8BA4\u5185\u5BB9\u63D2\u69FD</td></tr><tr><td>more</td><td>\u81EA\u5B9Amore\u5143\u7D20\u7684\u5C55\u793A\uFF0C\u53C2\u6570\u4E3A<code>{ hasMore, show, hide }</code></td></tr></tbody></table>',4);function ot(e,o,t,n,a,r){const s=B("hb-demo0"),c=B("demo-block"),h=B("hb-demo1"),_=B("hb-demo2"),i=B("right-nav");return $(),O(H,null,[u("section",null,[X,U,q,d(c,{fs:""},{source:p(()=>[d(s)]),highlight:p(()=>[J]),default:p(()=>[G]),_:1}),K,d(c,{fs:""},{source:p(()=>[d(h)]),highlight:p(()=>[R]),_:1}),Y,d(c,{fs:""},{source:p(()=>[d(_)]),highlight:p(()=>[Z]),_:1}),tt]),d(i)],64)}var st=Q(W,[["render",ot]]);export{st as default};
