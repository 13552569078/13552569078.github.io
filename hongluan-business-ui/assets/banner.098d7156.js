var S=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var N=(o,t,u)=>t in o?S(o,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[t]=u,V=(o,t)=>{for(var u in t||(t={}))T.call(t,u)&&N(o,u,t[u]);if(x)for(var u of x(t))j.call(t,u)&&N(o,u,t[u]);return o};import{a0 as g,L as O,W as z,Q as e,a4 as f,a1 as F,ab as P,a5 as D,aX as M,b0 as i}from"./vue.42779483.js";import{H as U}from"./hongluan-icons.58a96039.js";import{_ as $}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";const I={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:o,createVNode:t,createTextVNode:u,withCtx:_,Fragment:C,openBlock:A,createElementBlock:E}=i,l=u("\u663E\u793A/\u9690\u85CF");function p(a,h){const m=o("hb-banner"),n=o("hl-button");return A(),E(C,null,[t(m,{modelValue:a.visible,"onUpdate:modelValue":h[0]||(h[0]=r=>a.visible=r),title:"\u8FD9\u662F\u4E2ABanner"},null,8,["modelValue"]),t(n,{onClick:a.show},{default:_(()=>[l]),_:1},8,["onClick"])],64)}const{defineComponent:b}=i,{ref:c}=i;return V({render:p},b({setup(a,{expose:h}){h();const m=c(!1),r={visible:m,show:()=>{m.value=!m.value},ref:c};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}(),"hb-demo1":function(){const{createElementVNode:o,resolveComponent:t,withCtx:u,openBlock:_,createBlock:C,createCommentVNode:A,createTextVNode:E,createVNode:l,Fragment:p,createElementBlock:b}=i,c=o("b",null,"\u7279\u5B9A\u5BB9\u5668",-1),w=o("div",{id:"bannerContainer",style:{height:"200px",position:"relative"},class:"w-full bg-success m-b-md"},null,-1),a=E("\u663E\u793A/\u9690\u85CF(\u4F1A\u6709\u5EF6\u8FDF)");function h(d,B){const s=t("hb-banner"),v=t("hl-button");return _(),b(p,null,[d.mounted?(_(),C(s,{key:0,modelValue:d.visible,"onUpdate:modelValue":B[0]||(B[0]=y=>d.visible=y),to:"#bannerContainer"},{default:u(()=>[c]),_:1},8,["modelValue"])):A("",!0),w,l(v,{onClick:d.show},{default:u(()=>[a]),_:1},8,["onClick"])],64)}const{defineComponent:m}=i,{ref:n}=i;return V({render:h},m({setup(d,{expose:B}){B();const s=n(!1),v=n(!1),k={visible:s,mounted:v,show:()=>{v.value=!0,window.setTimeout(()=>{s.value=!s.value},1e3)},ref:n};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}))}(),"hb-demo2":function(){const{resolveComponent:o,createVNode:t,withCtx:u,createElementVNode:_,createTextVNode:C,Fragment:A,openBlock:E,createElementBlock:l}=i,p=_("div",{class:"text-regular"}," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1),b=C("\u663E\u793A/\u9690\u85CF");function c(n,r){const d=o("two-airplay"),B=o("hl-icon"),s=o("hl-group"),v=o("hb-banner"),y=o("hl-button");return E(),l(A,null,[t(v,{modelValue:n.visible,"onUpdate:modelValue":r[0]||(r[0]=k=>n.visible=k),type:"primary",effect:"light",dashed:"",closable:!1,timeout:5e3,title:"\u81EA\u5B9A\u4E49\u5185\u5BB9Banner"},{default:u(()=>[t(s,{align:"items-middle",gap:"var(--md)"},{default:u(()=>[t(B,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:u(()=>[t(d)]),_:1},8,["border"]),p]),_:1})]),_:1},8,["modelValue"]),t(y,{onClick:n.show},{default:u(()=>[b]),_:1},8,["onClick"])],64)}const{defineComponent:w}=i,{ref:a}=i,{TwoAirplay:h}=U;return V({render:c},w({setup(n,{expose:r}){r();const d=a(!1),s={visible:d,show:()=>{d.value=!d.value},ref:a,TwoAirplay:h};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}()}},H=e("h1",null,"Banner \u901A\u77E5\u6A2A\u5E45",-1),L=e("p",null,"\u6A2A\u5E45\u901A\u5E38\u7528\u4E8E\u6807\u8BC6\u5168\u9875\u7684\u72B6\u6001\u6216\u901A\u77E5\u7B49\u3002\u5B83\u901A\u5E38\u662F\u5E38\u9A7B\u7684\uFF0C\u9700\u8981\u7528\u6237\u4E3B\u52A8\u5C06\u5176\u5173\u95ED\u3002",-1),Q=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),D(" \u57FA\u7840\u7528\u6CD5")],-1),W=e("div",null,[e("p",null,[D("\u9ED8\u8BA4 Banner \u5C06\u4F1A\u5168\u5C4F\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),e("code",null,"to"),D(" \u5C5E\u6027\u5B9A\u5411\u5230\u7279\u5B9ADOM\u8282\u70B9")])],-1),X=e("pre",null,[e("code",{class:"html"},` <template>
  <hb-banner v-model="visible" title="\u8FD9\u662F\u4E2ABanner" />
  <hl-button @click="show">\u663E\u793A/\u9690\u85CF</hl-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const show = () => {
  visible.value = !visible.value
}
<\/script>
`)],-1),q=e("h2",{id:"te-ding-domjie-dian"},[e("a",{class:"header-anchor",href:"#te-ding-domjie-dian"}),D(" \u7279\u5B9ADOM\u8282\u70B9")],-1),G=e("p",null,"\u8981\u4FDD\u8BC1DOM\u8282\u70B9\u5148\u4E8E Banner \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6210",-1),J=e("div",null,[e("p",null,"\u793A\u4F8B\u4E2D\u7531\u4E8E\u8981\u4FDD\u8BC1DOM\u5BB9\u5668\u5148\u52A0\u8F7D\uFF0C\u6240\u4EE5Banner\u7EC4\u4EF6\u8BBE\u7F6E\u4E86\u5EF6\u8FDF\u52A0\u8F7D")],-1),K=e("pre",null,[e("code",{class:"html"},` <template>
  <hb-banner v-if="mounted" v-model="visible" to="#bannerContainer">
    <b>\u7279\u5B9A\u5BB9\u5668</b>
  </hb-banner>
  <div id="bannerContainer" style="height: 200px; position: relative" class="w-full bg-success m-b-md">
  </div>
  <hl-button @click="show">\u663E\u793A/\u9690\u85CF(\u4F1A\u6709\u5EF6\u8FDF)</hl-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const mounted = ref(false)

const show = () => {
  mounted.value = true
  window.setTimeout(() => {
    visible.value = !visible.value
  }, 1000)
}

<\/script>
`)],-1),R=e("h2",{id:"zi-ding-yi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi"}),D(" \u81EA\u5B9A\u4E49")],-1),Y=e("pre",null,[e("code",{class:"html"},` <template>
  <hb-banner
    v-model="visible"
    type="primary"
    effect="light"
    dashed
    :closable="false"
    :timeout="5000"
    title="\u81EA\u5B9A\u4E49\u5185\u5BB9Banner"
  >
    <hl-group align="items-middle" gap="var(--md)">
      <hl-icon type="info" size="xl" :border="1.2" class="no-shrink">
        <two-airplay />
      </hl-icon>
      <div class="text-regular">
        \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002
      </div>
    </hl-group>
  </hb-banner>
  <hl-button @click="show">\u663E\u793A/\u9690\u85CF</hl-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { TwoAirplay } from '@hongluan-ui/icons'


const visible = ref(false)

const show = () => {
  visible.value = !visible.value
}

<\/script>
`)],-1),Z=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>effect</td><td>\u6837\u5F0F\u4E3B\u9898</td><td>string</td><td>light</td><td>-</td></tr><tr><td>description</td><td>\u8F85\u52A9\u6027\u6587\u5B57\u3002\u4E5F\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u4F20\u5165</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>closable</td><td>\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-text</td><td>\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-icon</td><td>\u662F\u5426\u663E\u793A\u56FE\u6807</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>dashed</td><td>dashed\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>placement</td><td>\u4F4D\u7F6E</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>animation-name</td><td>\u52A8\u753B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>to</td><td>\u5448\u73B0\u5BB9\u5668</td><td>string</td><td>-</td><td>body</td></tr><tr><td>z-index</td><td>zIndex\u503C</td><td>number</td><td>-</td><td>-</td></tr><tr><td>height</td><td>Banner\u9AD8\u5EA6</td><td>string</td><td>-</td><td>-</td></tr><tr><td>position</td><td>Banner\u7684CSS position\u5C5E\u6027\u8BBE\u7F6E</td><td>string</td><td>fixed / absolute\u7B49CSS\u6709\u6548\u503C</td><td><em><strong>to\u4E3Abody\u65F6\uFF1Afixed\uFF0C\u5176\u4ED6\u503C\uFF1Aabsolute</strong></em></td></tr><tr><td>timeout</td><td>Banner\u81EA\u52A8\u5173\u95ED\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u63CF\u8FF0</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td></tr><tr><td>title</td><td>\u6807\u9898\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED Banner \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr></tbody></table>',6);function tt(o,t,u,_,C,A){const E=g("hb-demo0"),l=g("demo-block"),p=g("hb-demo1"),b=g("hb-demo2"),c=g("right-nav");return O(),z(P,null,[e("section",null,[H,L,Q,f(l,{fs:""},{source:F(()=>[f(E)]),highlight:F(()=>[X]),default:F(()=>[W]),_:1}),q,G,f(l,{fs:""},{source:F(()=>[f(p)]),highlight:F(()=>[K]),default:F(()=>[J]),_:1}),R,f(l,{fs:""},{source:F(()=>[f(b)]),highlight:F(()=>[Y]),_:1}),Z]),f(c)],64)}var st=$(I,[["render",tt]]);export{st as default};
