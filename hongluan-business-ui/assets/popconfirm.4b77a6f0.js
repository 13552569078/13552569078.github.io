var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var D=(u,e,t)=>e in u?y(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,C=(u,e)=>{for(var t in e||(e={}))k.call(e,t)&&D(u,t,e[t]);if(g)for(var t of g(e))N.call(e,t)&&D(u,t,e[t]);return u};import{a0 as B,L as V,W as P,Q as o,a4 as l,a1 as s,ab as w,a5 as A,aX as T,b0 as f}from"./vue.42779483.js";import{H as j}from"./hongluan-icons.58a96039.js";import{_ as S}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";const I={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:u,resolveComponent:e,withCtx:t,createVNode:d,openBlock:i,createBlock:a}=f,c=u("Delete");function n(h,E){const _=e("hl-button"),m=e("hb-popconfirm");return i(),a(m,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F"},{reference:t(()=>[d(_,null,{default:t(()=>[c]),_:1})]),_:1})}return C({render:n},{})}(),"hb-demo1":function(){const{resolveComponent:u,createVNode:e,withCtx:t,createTextVNode:d,openBlock:i,createBlock:a}=f,c=d(" \u786E\u8BA4\u5220\u9664\u5417\uFF1F "),n=d("\u5220\u9664");function p(m,b){const r=u("fill-info"),F=u("hl-icon"),x=u("hl-button"),v=u("hb-popconfirm");return i(),a(v,{"confirm-button-text":"\u786E\u5B9A","cancel-button-text":"\u4E0D\uFF0C\u8C22\u8C22","confirm-button-type":"danger"},{title:t(()=>[e(F,{type:"danger",class:"m-r-md"},{default:t(()=>[e(r)]),_:1}),c]),reference:t(()=>[e(x,null,{default:t(()=>[n]),_:1})]),_:1})}const{defineComponent:h}=f,{FillInfo:E}=j;return C({render:p},h({setup(m,{expose:b}){b();const r={FillInfo:E};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}(),"hb-demo2":function(){const{createTextVNode:u,resolveComponent:e,withCtx:t,createVNode:d,openBlock:i,createBlock:a}=f,c=u("Delete");function n(_,m){const b=e("hl-button"),r=e("hb-popconfirm");return i(),a(r,{"confirm-button-text":"Yes","cancel-button-text":"No",title:"Are you sure to delete this?","on-confirm":_.confirmEvent,"on-cancel":_.cancelEvent},{reference:t(()=>[d(b,null,{default:t(()=>[c]),_:1})]),_:1},8,["on-confirm","on-cancel"])}const{defineComponent:p}=f,{ref:h}=f;return C({render:n},p({setup(_,{expose:m}){m();const F={confirmEvent:()=>{console.log("confirm!")},cancelEvent:()=>{console.log("cancel!")},ref:h};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}()}},$=o("h1",null,"Popconfirm \u6C14\u6CE1\u786E\u8BA4\u6846",-1),H=o("p",null,"\u70B9\u51FB\u67D0\u4E2A\u5143\u7D20\u5F39\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u3002",-1),L=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),A(" \u57FA\u7840\u7528\u6CD5")],-1),O=o("p",null,"Popconfirm \u7684\u5C5E\u6027\u4E0E Popover \u5F88\u7C7B\u4F3C\uFF0C \u56E0\u6B64\u5BF9\u4E8E\u91CD\u590D\u5C5E\u6027\uFF0C\u8BF7\u53C2\u8003 Popover \u7684\u6587\u6863\uFF0C\u5728\u6B64\u6587\u6863\u4E2D\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\u3002",-1),z=o("div",null,[o("p",null,"\u5728 Popconfirm \u4E2D\uFF0C\u53EA\u6709 title \u5C5E\u6027\u53EF\u7528\uFF0Ccontent \u5C5E\u6027\u4E0D\u4F1A\u88AB\u5C55\u793A\u3002")],-1),M=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm title="\u786E\u8BA4\u5220\u9664\u5417\uFF1F">
    <template #reference>
      <hl-button>Delete</hl-button>
    </template>
  </hb-popconfirm>
</template>
`)],-1),Q=o("h2",{id:"zi-ding-yi-dan-chu-kuang-de-nei-rong"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-dan-chu-kuang-de-nei-rong"}),A(" \u81EA\u5B9A\u4E49\u5F39\u51FA\u6846\u7684\u5185\u5BB9")],-1),W=o("p",null,"\u53EF\u4EE5\u5728 Popconfirm \u4E2D\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),X=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm
    confirm-button-text="\u786E\u5B9A"
    cancel-button-text="\u4E0D\uFF0C\u8C22\u8C22"
    confirm-button-type="danger"
  >
    <template #title>
      <hl-icon type="danger" class="m-r-md">
        <fill-info />
      </hl-icon>
      \u786E\u8BA4\u5220\u9664\u5417\uFF1F
    </template>
    <template #reference>
      <hl-button>\u5220\u9664</hl-button>
    </template>
  </hb-popconfirm>
</template>
<script lang="ts" setup>
import { FillInfo } from '@hongluan-ui/icons'

<\/script>
`)],-1),Y=o("h2",{id:"shi-jian"},[o("a",{class:"header-anchor",href:"#shi-jian"}),A(" \u4E8B\u4EF6")],-1),U=o("p",null,"\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6",-1),q=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    title="Are you sure to delete this?"
    :on-confirm="confirmEvent"
    :on-cancel="cancelEvent"
  >
    <template #reference>
      <hl-button>Delete</hl-button>
    </template>
  </hb-popconfirm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const confirmEvent = () => {
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}
<\/script>
`)],-1),G=T('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>primary</td></tr><tr><td>cancel-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>link</td></tr><tr><td>effect</td><td>\u5F39\u7A97\u51FA\u9898</td><td>string</td><td>light / dark</td><td>light</td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>-</td><td>-</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u9690\u85CF\u4E0B\u62C9\u6846\u4E8B\u4EF6(ms)</td><td>number</td><td>-</td><td>200</td></tr><tr><td>teleported</td><td>\u5F39\u7A97\u662F\u5426append\u5230body\u4E0A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>persistent</td><td>\u5173\u95ED\u5F39\u7A97\u540E\uFF0C\u662F\u5426\u9500\u6BC1DOM\u8282\u70B9</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>onConfirm</td><td>\u786E\u8BA4\u56DE\u8C03\u65B9\u6CD5</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u56DE\u8C03\u65B9\u6CD5</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>width</td><td>\u5F39\u7A97\u5BBD\u5EA6</td><td>string/number</td><td>-</td><td>150px</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>reference</td><td>\u89E6\u53D1 Popconfirm \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr></tbody></table>',4);function J(u,e,t,d,i,a){const c=B("hb-demo0"),n=B("demo-block"),p=B("hb-demo1"),h=B("hb-demo2"),E=B("right-nav");return V(),P(w,null,[o("section",null,[$,H,L,O,l(n,{fs:""},{source:s(()=>[l(c)]),highlight:s(()=>[M]),default:s(()=>[z]),_:1}),Q,W,l(n,{fs:""},{source:s(()=>[l(p)]),highlight:s(()=>[X]),_:1}),Y,U,l(n,{fs:""},{source:s(()=>[l(h)]),highlight:s(()=>[q]),_:1}),G]),l(E)],64)}var ut=S(I,[["render",J]]);export{ut as default};
