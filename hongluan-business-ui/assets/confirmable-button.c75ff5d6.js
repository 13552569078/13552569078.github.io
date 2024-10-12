var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))N.call(e,t)&&y(o,t,e[t]);if(x)for(var t of x(e))V.call(e,t)&&y(o,t,e[t]);return o};import{a0 as C,L as j,W as T,Q as u,a4 as h,a1 as b,ab as S,a5 as A,aX as I,b0 as _}from"./vue.42779483.js";import{H as D}from"./hongluan-icons.58a96039.js";import{_ as P}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";const z={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,openBlock:r,createBlock:p}=_,m=o(" \u5220\u9664 ");function d(c,B){const E=e("hb-confirmable-button");return r(),p(E,{tip:"\u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664",onConfirm:c.del},{default:t(()=>[m]),_:1},8,["onConfirm"])}const{defineComponent:n}=_,{ref:l}=_;return g({render:d},n({setup(c,{expose:B}){B();const s={del:()=>{console.log("\u786E\u8BA4\u5220\u9664")},ref:l};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hb-demo1":function(){const{resolveComponent:o,createVNode:e,withCtx:t,createTextVNode:r,openBlock:p,createBlock:m}=_,d=r(" \u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664 "),n=r(" \u5220\u9664\u5417\uFF1F ");function l(s,i){const F=o("fill-info"),a=o("hl-icon"),v=o("two-close"),w=o("hb-confirmable-button");return p(),m(w,{onConfirm:s.del},{tip:t(()=>[e(a,{type:"danger",class:"m-r-md"},{default:t(()=>[e(F)]),_:1}),d]),default:t(()=>[n,e(a,null,{default:t(()=>[e(v)]),_:1})]),_:1},8,["onConfirm"])}const{defineComponent:f}=_,{FillInfo:c,TwoClose:B}=D;return g({render:l},f({setup(s,{expose:i}){i();const a={del:()=>{console.log("\u786E\u8BA4\u5220\u9664")},FillInfo:c,TwoClose:B};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hb-demo2":function(){const{resolveComponent:o,createVNode:e,withCtx:t,createTextVNode:r,openBlock:p,createBlock:m}=_,d=r(" \u518D\u70B9\u51FB\u4E00\u6B21\u786E\u8BA4\u8F6C\u8D26 "),n=r(" \u8F6C\u8D26 ");function l(E,s){const i=o("fill-info"),F=o("hl-icon"),a=o("hb-confirmable-button");return p(),m(a,{"confirm-state":{type:"warning",outline:!0,effect:"light",dashed:!0},"popover-props":{effect:"dark",showArrow:!0}},{tip:t(()=>[e(F,{type:"warning",class:"m-r-md"},{default:t(()=>[e(i)]),_:1}),d]),default:t(()=>[n]),_:1})}const{defineComponent:f}=_,{FillInfo:c}=D;return g({render:l},f({setup(E,{expose:s}){s();const i={FillInfo:c};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}()}},$=u("h1",null,"ConfirmableButton \u53CC\u91CD\u786E\u8BA4\u6309\u94AE",-1),O=u("p",null,"\u901A\u5E38\u7528\u4E8E\u9700\u8981\u518D\u6B21\u786E\u8BA4\u7684\u64CD\u4F5C\u3002",-1),H=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),A(" \u57FA\u7840\u7528\u6CD5")],-1),L=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-confirmable-button tip="\u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664" @confirm="del">
    \u5220\u9664
  </hb-confirmable-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const del = () => {
  console.log('\u786E\u8BA4\u5220\u9664')
}
<\/script>

`)],-1),Q=u("h2",{id:"zi-ding-yi-ti-shi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-ti-shi-nei-rong"}),A(" \u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9")],-1),W=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-confirmable-button @confirm="del">
    <template #tip>
      <hl-icon type="danger" class="m-r-md">
        <fill-info />
      </hl-icon>
      \u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664
    </template>
    <template #default>
      \u5220\u9664\u5417\uFF1F
      <hl-icon>
        <two-close />
      </hl-icon>
    </template>
  </hb-confirmable-button>
</template>
<script lang="ts" setup>
import { FillInfo, TwoClose } from '@hongluan-ui/icons'

const del = () => {
  console.log('\u786E\u8BA4\u5220\u9664')
}

<\/script>

`)],-1),X=u("h2",{id:"zi-ding-yi-shu-xing"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-shu-xing"}),A(" \u81EA\u5B9A\u4E49\u5C5E\u6027")],-1),U=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-confirmable-button
    :confirm-state="{type: 'warning', outline: true, effect: 'light', dashed: true}"
    :popover-props="{effect: 'dark', showArrow: true}"
  >
    <template #tip>
      <hl-icon type="warning" class="m-r-md">
        <fill-info />
      </hl-icon>
      \u518D\u70B9\u51FB\u4E00\u6B21\u786E\u8BA4\u8F6C\u8D26
    </template>
    \u8F6C\u8D26
  </hb-confirmable-button>
</template>
<script lang="ts" setup>
import { FillInfo } from '@hongluan-ui/icons'

<\/script>


`)],-1),q=I('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>tip</td><td>\u63D0\u793A\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>default-state</td><td>\u9ED8\u8BA4\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u6309\u94AE\u6240\u6709\u5C5E\u6027\uFF0C\u53C2\u8003Button\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>{ type: &#39;link&#39; }</td></tr><tr><td>confirm-state</td><td>\u786E\u8BA4\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u6309\u94AE\u6240\u6709\u5C5E\u6027\uFF0C\u53C2\u8003Button\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>{ type: &#39;danger&#39; }</td></tr><tr><td>popover-props</td><td>\u63D0\u793A\u6846\u5C5E\u6027\uFF0C\u53C2\u8003Popover\u7EC4\u4EF6</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9</td></tr><tr><td>tip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u8BA4\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>',6);function G(o,e,t,r,p,m){const d=C("hb-demo0"),n=C("demo-block"),l=C("hb-demo1"),f=C("hb-demo2"),c=C("right-nav");return j(),T(S,null,[u("section",null,[$,O,H,h(n,{fs:""},{source:b(()=>[h(d)]),highlight:b(()=>[L]),_:1}),Q,h(n,{fs:""},{source:b(()=>[h(l)]),highlight:b(()=>[W]),_:1}),X,h(n,{fs:""},{source:b(()=>[h(f)]),highlight:b(()=>[U]),_:1}),q]),h(c)],64)}var tt=P(z,[["render",G]]);export{tt as default};
