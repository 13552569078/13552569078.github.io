var W=Object.defineProperty;var R=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var U=(e,l,u)=>l in e?W(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,P=(e,l)=>{for(var u in l||(l={}))X.call(l,u)&&U(e,u,l[u]);if(R)for(var u of R(l))q.call(l,u)&&U(e,u,l[u]);return e};import{a0 as V,L as G,W as J,Q as t,a4 as y,a1 as E,ab as K,a5 as r,aX as Y,b0 as F}from"./vue.42779483.js";import{ab as $}from"./hongluan-business.cf55c6a9.js";import{_ as Z,H as T}from"./index.a95a1468.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.58a96039.js";const uu={name:"component-doc",components:{"hb-demo0":function(){const{toDisplayString:e,createTextVNode:l,resolveComponent:u,withCtx:o,createVNode:g,createElementVNode:_,Fragment:A,openBlock:h,createElementBlock:f}=F,v=_("p",null,"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",-1);function C(d,n){const s=u("hl-button"),B=u("hb-modeless-dialog");return h(),f(A,null,[g(s,{onClick:d.show},{default:o(()=>[l(e(d.visible?"Hide":"Show"),1)]),_:1},8,["onClick"]),g(B,{modelValue:d.visible,"onUpdate:modelValue":n[0]||(n[0]=i=>d.visible=i),title:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",resize:"",onResize:d.resizeCB},{default:o(()=>[v]),_:1},8,["modelValue","onResize"])],64)}const{defineComponent:p}=F,{ref:m}=F;return P({render:C},p({setup(d,{expose:n}){n();const s=m(!1),a={visible:s,show:()=>{s.value=!s.value},resizeCB:()=>{console.log("resizing...")},ref:m};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hb-demo1":function(){const{toDisplayString:e,createTextVNode:l,resolveComponent:u,withCtx:o,createVNode:g,createElementVNode:_,Fragment:A,openBlock:h,createElementBlock:f}=F,v=_("div",{class:"m-t-md"},"\u8303\u56F4\uFF1A\u5DE6\u4E0A\u89D2\uFF080,0\uFF09 / \u53F3\u4E0B\u89D2\uFF081000,600\uFF09",-1),C=_("p",null,"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",-1);function p(n,s){const B=u("hl-button"),i=u("hb-modeless-dialog");return h(),f(A,null,[g(B,{onClick:n.show},{default:o(()=>[l(e(n.visible?"Hide":"Show"),1)]),_:1},8,["onClick"]),v,g(i,{modelValue:n.visible,"onUpdate:modelValue":s[0]||(s[0]=a=>n.visible=a),width:"400px",title:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",boundings:[0,0,1e3,600]},{default:o(()=>[C]),_:1},8,["modelValue"])],64)}const{defineComponent:m}=F,{ref:w}=F;return P({render:p},m({setup(n,{expose:s}){s();const B=w(!1),a={visible:B,show:()=>{B.value=!B.value},ref:w};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hb-demo2":function(){const{createTextVNode:e,resolveComponent:l,withCtx:u,createVNode:o,openBlock:g,createBlock:_}=F,A=e("\u521B\u5EFA"),h=e("\u624B\u52A8\u5173\u95ED");function f(d,n){const s=l("hl-button"),B=l("hl-group");return g(),_(B,{gap:"var(--md)"},{default:u(()=>[o(s,{onClick:d.create},{default:u(()=>[A]),_:1},8,["onClick"]),o(s,{onClick:d.close},{default:u(()=>[h]),_:1},8,["onClick"])]),_:1})}const{defineComponent:v}=F,{h:C}=F,{ModelessDialogManager:p,HbEmpty:m}=T;return P({render:f},v({setup(d,{expose:n}){n();const i={close:()=>{p.get("my-modelesss-dialog").close()},create:()=>{p.show({id:"my-modelesss-dialog",title:"\u6D4B\u8BD5Manager",body:C(m,{description:"\u7A7A\u5185\u5BB9"}),resize:!0,onResize:a=>{console.log("resize",a)},onOpen:()=>{console.log("open")},onOpened:()=>{console.log("opened")},onClose:()=>{console.log("close")},onClosed:()=>{console.log("closed")},onDestroy:()=>{console.log("destroy")},onCollapse:a=>{console.log("collapse",a)},onMaximize:a=>{console.log("maximize",a)}})},h:C,ModelessDialogManager:p,HbEmpty:m};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hb-demo3":function(){const{createTextVNode:e,resolveComponent:l,withCtx:u,createVNode:o,toDisplayString:g,createElementVNode:_,Fragment:A,openBlock:h,createElementBlock:f}=F,v=e("\u521B\u5EFA"),C=e("\u6700\u5927\u5316"),p=e("\u6298\u53E0"),m=e("\u663E\u793A/\u9690\u85CF"),w=e("\u624B\u5DE5\u5173\u95ED"),d=_("br",null,null,-1),n=e("\u521B\u5EFA\u591A\u4E2A\u5BF9\u8BDD\u6846"),s=_("br",null,null,-1),B=e("\u6298\u53E0\u6240\u6709"),i=e("\u5173\u95ED\u6240\u6709"),a=e("\u9690\u85CF\u6240\u6709"),k=e("\u663E\u793A\u6240\u6709");function M(b,j){const D=l("hl-button"),x=l("hl-tag"),H=l("hl-group");return h(),f(A,null,[o(H,{gap:"var(--md)"},{default:u(()=>[o(D,{onClick:b.create},{default:u(()=>[v]),_:1},8,["onClick"]),o(x,null,{default:u(()=>[e("\u72B6\u6001\uFF1A"+g(b.visible?"\u663E\u793A":"\u9690\u85CF"),1)]),_:1}),o(D,{onClick:b.max},{default:u(()=>[C]),_:1},8,["onClick"]),o(D,{onClick:b.collapse},{default:u(()=>[p]),_:1},8,["onClick"]),o(D,{onClick:b.show},{default:u(()=>[m]),_:1},8,["onClick"]),o(D,{onClick:b.close},{default:u(()=>[w]),_:1},8,["onClick"])]),_:1}),d,o(H,{gap:"var(--md)",class:"m-t-md"},{default:u(()=>[o(D,{onClick:b.create2},{default:u(()=>[n]),_:1},8,["onClick"])]),_:1}),s,o(H,{gap:"var(--md)",class:"m-t-md"},{default:u(()=>[o(D,{onClick:b.collaseAll},{default:u(()=>[B]),_:1},8,["onClick"]),o(D,{onClick:b.closeAll},{default:u(()=>[i]),_:1},8,["onClick"]),o(D,{onClick:b.hideAll},{default:u(()=>[a]),_:1},8,["onClick"]),o(D,{onClick:b.showAll},{default:u(()=>[k]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:I}=F,{ref:z,h:S}=F,{HlButton:N}=$,{ModelessDialogManager:c}=T;return P({render:M},I({setup(b,{expose:j}){j();const D=z(""),x=z(!1),L={inputVal:D,visible:x,create:()=>{c.show({id:"my-modelesss-dialog2",title:"\u6D4B\u8BD5Manager\uFF0C\u56FA\u5B9AID",body:S("input",{value:D.value,onInput:Q=>{D.value=Q.target.value}}),footer:S("div",null,[S(N,{type:"primary",class:"m-r-md"},{default:()=>"\u786E\u5B9A"}),S(N,null,{default:()=>"\u53D6\u6D88"})])}),x.value=c.get("my-modelesss-dialog2").isShown()},show:()=>{c.get("my-modelesss-dialog2").toggleShow(),x.value=c.get("my-modelesss-dialog2").isShown()},max:()=>{c.get("my-modelesss-dialog2").toggleMaximize()},collapse:()=>{c.get("my-modelesss-dialog2").toggleCollapse()},close:()=>{c.get("my-modelesss-dialog2").close()},create2:()=>{c.show({title:"\u6D4B\u8BD5Manager"})},collaseAll:()=>{c.collapseAll()},closeAll:()=>{c.closeAll()},showAll:()=>{c.showAll()},hideAll:()=>{c.hideAll()},ref:z,h:S,HlButton:N,ModelessDialogManager:c};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}}))}(),"hb-demo4":function(){const{createTextVNode:e,resolveComponent:l,withCtx:u,createVNode:o,openBlock:g,createBlock:_}=F,A=e("\u521B\u5EFA"),h=e("\u4FEE\u6539\u5BF9\u8BDD\u6846\u5C5E\u6027"),f=e("\u4FEE\u6539Slot"),v=e("\u4FEE\u6539Panel\u5C5E\u6027");function C(i,a){const k=l("hl-button"),M=l("hl-group");return g(),_(M,{gap:"var(--md)"},{default:u(()=>[o(k,{onClick:i.create},{default:u(()=>[A]),_:1},8,["onClick"]),o(k,{onClick:i.modifyProp},{default:u(()=>[h]),_:1},8,["onClick"]),o(k,{onClick:i.modifySlot},{default:u(()=>[f]),_:1},8,["onClick"]),o(k,{onClick:i.modifyPanel},{default:u(()=>[v]),_:1},8,["onClick"])]),_:1})}const{defineComponent:p}=F,{ref:m,reactive:w,h:d}=F,{HlButton:n}=$,{ModelessDialogManager:s}=T;return P({render:C},p({setup(i,{expose:a}){a();const k=m(""),M=w({id:"my-modelesss-dialog3",borderless:!0,bodyPadding:"var(--lg)",title:"\u6D4B\u8BD5Manager",body:d("input",{value:k.value,onInput:O=>{k.value=O.target.value}}),footer:d("div",null,[d(n,{type:"primary",class:"m-r-md"},{default:()=>"\u786E\u5B9A"}),d(n,null,{default:()=>"\u53D6\u6D88"})])}),c={inputVal:k,dialogProps:M,create:()=>{s.show(M)},modifyProp:()=>{M.title="\u4FEE\u6539\u5BF9\u8BDD\u6846\u6807\u9898"},modifySlot:()=>{M.footer=d("div",{innerHTML:"\u4FEE\u6539Footer Slot\u5185\u5BB9"})},modifyPanel:()=>{M.borderless=!1,M.bodyPadding="var(--sm)"},ref:m,reactive:w,h:d,HlButton:n,ModelessDialogManager:s};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}()}},tu=t("h1",null,"ModelessDialog \u975E\u6A21\u6001\u5BF9\u8BDD\u6846",-1),eu=t("p",null,"\u57FA\u4E8EPanel\u6784\u5EFA\u7684\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u652F\u6301\u6700\u5927\u5316\uFF0C\u6700\u5C0F\u5316\uFF0C\u6536\u8D77\uFF0C\u5C55\u5F00\uFF0C\u62D6\u62FD\u6539\u53D8\u5927\u5C0F\u7B49\u529F\u80FD",-1),ou=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),r(" \u57FA\u7840\u7528\u6CD5")],-1),lu=t("p",null,"\u53EF\u4EE5\u901A\u8FC7\u58F0\u660E\u7EC4\u4EF6\u7684\u5F62\u5F0F\uFF0C\u5B9E\u4F8B\u5316\u8BE5\u7EC4\u4EF6\u3002\u5728\u70B9\u51FB\u5173\u95ED\u6216\u8005\u8DEF\u7531\u5207\u6362\u4EE5\u540E\uFF0C\u8BE5\u7EC4\u4EF6\u81EA\u52A8\u9500\u6BC1",-1),du=t("div",null,[t("p",null,"\u53EF\u4EE5\u5728style\u4E2D\u8BBE\u7F6Eleft/top\u8986\u76D6\u9ED8\u8BA4\u7684\u5F39\u51FA\u4F4D\u7F6E")],-1),nu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button @click="show">{{ visible ? 'Hide' : 'Show' }}</hl-button>
  <hb-modeless-dialog
    v-model="visible"
    title="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B"
    resize
    @resize="resizeCB"
  >
    <p>\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B</p>
  </hb-modeless-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const show = () => {
  visible.value = !visible.value
}
const resizeCB = () => {
  console.log('resizing...')
}
<\/script>
`)],-1),su=t("h2",{id:"tuo-dong-fan-wei"},[t("a",{class:"header-anchor",href:"#tuo-dong-fan-wei"}),r(" \u62D6\u52A8\u8303\u56F4")],-1),au=t("p",null,[r("\u53EF\u4EE5\u901A\u8FC7 "),t("code",null,"boundings"),r(" \u5C5E\u6027\u9650\u5B9A\u53EF\u62D6\u62FD\u8303\u56F4\uFF0C"),t("code",null,"boundings"),r("\u4E3A\u56DB\u4E2A\u6570\u503C\u7684\u6570\u7EC4\uFF0C\u5206\u522B\u4E3A\u5DE6\u4E0A\u89D2\u5750\u6807\uFF08x,y\uFF09\u4E0E\u53F3\u4E0B\u89D2\u5750\u6807(x,y)")],-1),ru=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button @click="show">{{ visible ? 'Hide' : 'Show' }}</hl-button>
  <div class="m-t-md">\u8303\u56F4\uFF1A\u5DE6\u4E0A\u89D2\uFF080,0\uFF09 / \u53F3\u4E0B\u89D2\uFF081000,600\uFF09</div>
  <hb-modeless-dialog
    v-model="visible"
    width="400px"
    title="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B"
    :boundings="[0,0,1000,600]"
  >
    <p>\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B</p>
  </hb-modeless-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const show = () => {
  visible.value = !visible.value
}

<\/script>
`)],-1),iu=t("h2",{id:"shi-yong-modelessdialogmanager"},[t("a",{class:"header-anchor",href:"#shi-yong-modelessdialogmanager"}),r(" \u4F7F\u7528ModelessDialogManager")],-1),cu=t("p",null,[r("\u901A\u8FC7\u8C03\u7528 "),t("code",null,"ModelessDialogManager"),r(" API\u7684 "),t("code",null,"show"),r(" \u65B9\u6CD5\u521B\u5EFA\u5BF9\u8BDD\u6846\uFF0C\u6B64\u5BF9\u8BDD\u6846\u53EF\u4EE5\u5728\u9875\u9762\u5207\u6362\u4EE5\u540E\u4FDD\u6301\u4E0D\u88AB\u9500\u6BC1\u3002")],-1),hu=t("div",null,[t("p",null,[t("code",null,"id"),r("\u5C5E\u6027\u9700\u8981\u552F\u4E00\u56FA\u5B9A\u503C")])],-1),Fu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-button @click="create">\u521B\u5EFA</hl-button>
    <hl-button @click="close">\u624B\u52A8\u5173\u95ED</hl-button>
  </hl-group>
</template>
<script lang="ts" setup>
import { h } from 'vue'
import { ModelessDialogManager, HbEmpty } from 'hongluan-business-ui'

const close = () => {
  ModelessDialogManager.get('my-modelesss-dialog').close()
}

const create = () => {
  ModelessDialogManager.show({
    id: 'my-modelesss-dialog',
    title: '\u6D4B\u8BD5Manager',
    body: h(HbEmpty, { description: '\u7A7A\u5185\u5BB9' }),
    resize: true,
    onResize: (dlg: HTMLDivElement) => {
      console.log('resize', dlg)
    },
    onOpen: () => {
      console.log('open')
    },
    onOpened: () => {
      console.log('opened')
    },
    onClose: () => {
      console.log('close')
    },
    onClosed: () => {
      console.log('closed')
    },
    onDestroy: () => {
      console.log('destroy')
    },
    onCollapse: (value: boolean) => {
      console.log('collapse', value)
    },
    onMaximize: (value: boolean) => {
      console.log('maximize', value)
    },
  })
}
<\/script>
`)],-1),mu=t("h2",{id:"modelessdialogmanager-apishi-li"},[t("a",{class:"header-anchor",href:"#modelessdialogmanager-apishi-li"}),r(" ModelessDialogManager API\u793A\u4F8B")],-1),Bu=t("div",null,[t("p",null,[t("code",null,"header"),r("\uFF0C"),t("code",null,"body"),r("\uFF0C"),t("code",null,"footer"),r(" \u5FC5\u987B\u4E3AVNode\u5B9E\u4F8B\uFF0C\u5426\u5219\u4E0D\u8FDB\u884C\u5904\u7406")])],-1),Du=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-button @click="create">\u521B\u5EFA</hl-button>
    <hl-tag>\u72B6\u6001\uFF1A{{ visible ? '\u663E\u793A' : '\u9690\u85CF' }}</hl-tag>
    <hl-button @click="max">\u6700\u5927\u5316</hl-button>
    <hl-button @click="collapse">\u6298\u53E0</hl-button>
    <hl-button @click="show">\u663E\u793A/\u9690\u85CF</hl-button>
    <hl-button @click="close">\u624B\u5DE5\u5173\u95ED</hl-button>
  </hl-group>
  <br>
  <hl-group gap="var(--md)" class="m-t-md">
    <hl-button @click="create2">\u521B\u5EFA\u591A\u4E2A\u5BF9\u8BDD\u6846</hl-button>
  </hl-group>
  <br>
  <hl-group gap="var(--md)" class="m-t-md">
    <hl-button @click="collaseAll">\u6298\u53E0\u6240\u6709</hl-button>
    <hl-button @click="closeAll">\u5173\u95ED\u6240\u6709</hl-button>
    <hl-button @click="hideAll">\u9690\u85CF\u6240\u6709</hl-button>
    <hl-button @click="showAll">\u663E\u793A\u6240\u6709</hl-button>
  </hl-group>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import { HlButton } from 'hongluan-ui'
import { ModelessDialogManager } from 'hongluan-business-ui'

const inputVal = ref('')
const visible = ref(false)

const create = () => {
  ModelessDialogManager.show({
    id: 'my-modelesss-dialog2',
    title: '\u6D4B\u8BD5Manager\uFF0C\u56FA\u5B9AID',
    body: h('input', {
      value: inputVal.value,
      onInput:e=> {
        inputVal.value = e.target.value
      },
    }),
    footer: h('div', null, [
      h(HlButton, { type: 'primary', class: 'm-r-md' }, { default: () => '\u786E\u5B9A' }),
      h(HlButton, null, { default: () => '\u53D6\u6D88' }),
    ]),
  })
  visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown()
}

const show = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleShow()
  visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown()
}
const max = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleMaximize()
}
const collapse = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').toggleCollapse()
}
const close = () => {
  ModelessDialogManager.get('my-modelesss-dialog2').close()
}

const create2 = () => {
  ModelessDialogManager.show({
    title: '\u6D4B\u8BD5Manager',
  })
}

const collaseAll = () => {
  ModelessDialogManager.collapseAll()
}
const closeAll = () => {
  ModelessDialogManager.closeAll()
}
const showAll = () => {
  ModelessDialogManager.showAll()
}
const hideAll = () => {
  ModelessDialogManager.hideAll()
}

<\/script>
`)],-1),pu=t("h2",{id:"modelessdialogmanager-apixiang-ying-shi-shi-li"},[t("a",{class:"header-anchor",href:"#modelessdialogmanager-apixiang-ying-shi-shi-li"}),r(" ModelessDialogManager API\u54CD\u5E94\u5F0F\u793A\u4F8B")],-1),Eu=t("p",null,[r("\u5982\u679C\u9700\u8981\u52A8\u6001\u4FEE\u6539\u5BF9\u8BDD\u6846\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"reactive"),r(" \u5305\u88C5\u6240\u6709\u5C5E\u6027\u3002")],-1),gu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-button @click="create">\u521B\u5EFA</hl-button>
    <hl-button @click="modifyProp">\u4FEE\u6539\u5BF9\u8BDD\u6846\u5C5E\u6027</hl-button>
    <hl-button @click="modifySlot">\u4FEE\u6539Slot</hl-button>
    <hl-button @click="modifyPanel">\u4FEE\u6539Panel\u5C5E\u6027</hl-button>
  </hl-group>
</template>
<script lang="ts" setup>
import { ref, reactive, h } from 'vue'
import { HlButton } from 'hongluan-ui'
import { ModelessDialogManager } from 'hongluan-business-ui'


const inputVal = ref('')
const dialogProps = reactive({
  id: 'my-modelesss-dialog3',
  borderless: true,
  bodyPadding: 'var(--lg)',
  title: '\u6D4B\u8BD5Manager',
  body: h('input', {
    value: inputVal.value,
    onInput:e=> {
      inputVal.value = e.target.value
    },
  }),
  footer: h('div', null, [
    h(HlButton, { type: 'primary', class: 'm-r-md' }, { default: () => '\u786E\u5B9A' }),
    h(HlButton, null, { default: () => '\u53D6\u6D88' }),
  ]),
})

const create = () => {
  ModelessDialogManager.show(dialogProps)
}
const modifyProp = () => {
  dialogProps.title = '\u4FEE\u6539\u5BF9\u8BDD\u6846\u6807\u9898'
}
const modifySlot = () => {
  dialogProps.footer = h('div', { innerHTML: '\u4FEE\u6539Footer Slot\u5185\u5BB9' })
}
const modifyPanel = () => {
  dialogProps.borderless = false
  dialogProps.bodyPadding = 'var(--sm)'
}

<\/script>
`)],-1),_u=Y('<h2 id="pei-he-dockcontainershi-yong"><a class="header-anchor" href="#pei-he-dockcontainershi-yong"></a> \u914D\u5408DockContainer\u4F7F\u7528</h2><p>\u8BF7\u53C2\u89C1DockContainer\u7EC4\u4EF6\u6587\u6863\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u662F\u5426\u663E\u793A\u5BF9\u8BDD\u6846</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BF9\u8BDD\u6846\u7684\u5BBD\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>height</td><td>\u5BF9\u8BDD\u6846\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>top</td><td>\u5BF9\u8BDD\u6846 CSS \u4E2D\u7684 top \u503C</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>resize</td><td>\u53F3\u4E0B\u89D2\u662F\u5426\u53EF\u62D6\u62FD\u6539\u53D8\u5927\u5C0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>drag</td><td>\u662F\u5426\u53EF\u62D6\u62FD</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>boundings</td><td>\u53EF\u62D6\u62FD\u8303\u56F4</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>custom-class</td><td>\u5BF9\u8BDD\u6846\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>open-delay</td><td>\u5BF9\u8BDD\u6846\u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-delay</td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-maximize</td><td>\u662F\u5426\u663E\u793A\u6700\u5927\u5316\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-collapse</td><td>\u662F\u5426\u663E\u793A\u6298\u53E0\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u5BF9\u8BDD\u6846\u7684\u5173\u95ED</td><td>function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>animation-name</td><td>\u5BF9\u8BDD\u6846\u52A8\u753B\u7C7B\u578B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>title</td><td>\u5BF9\u8BDD\u6846\u6807\u9898\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Eheader slot</td><td>string</td><td>-</td><td>-</td></tr><tr><td>z-index</td><td>\u81EA\u5B9A\u4E49\u5C42\u7EA7</td><td>number</td><td>-</td><td>-</td></tr><tr><td>id</td><td>\u5BF9\u8BDD\u6846\u6839\u8282\u70B9id</td><td>string</td><td>-</td><td>-</td></tr><tr><td>use-dock</td><td>\u662F\u5426\u914D\u5408DockContainer\u4F7F\u7528\u3002\u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u6298\u53E0\u65F6\u4F1A\u628A\u5BF9\u8BDD\u6846\u6536\u7EB3\u5230DockContainer\u4E2D\u53BB</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>snapshot</td><td>\u914D\u5408DockContainer\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u5C55\u793A\u7684\u5F62\u5F0F</td><td>boolean / string / object { type: string, url: string }</td><td>-</td><td>false</td></tr><tr><td>Panel\u7EC4\u4EF6\u5C5E\u6027</td><td>\u5BF9\u8BDD\u6846\u57FA\u4E8EPanel\u7EC4\u4EF6\u6784\u5EFA\uFF0C\u81EA\u52A8\u652F\u6301\u4F7F\u7528Panel\u7EC4\u4EF6\u6240\u6709\u5C5E\u6027</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u5BF9\u8BDD\u6846\u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>\u5BF9\u8BDD\u6846\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>resize</td><td>\u5BF9\u8BDD\u6846\u62D6\u62FD\u6539\u53D8\u5927\u5C0F\u56DE\u8C03</td><td>\u5BF9\u8BDD\u6846DOM\u6839\u8282\u70B9</td></tr><tr><td>maximize</td><td>\u5BF9\u8BDD\u6846\u6700\u5927\u5316/\u6700\u5C0F\u5316\u56DE\u8C03</td><td>\u662F\u5426\u6700\u5927\u5316</td></tr><tr><td>collapse</td><td>\u5BF9\u8BDD\u6846\u6536\u8D77/\u5C55\u5F00\u56DE\u8C03</td><td>\u662F\u5426\u6536\u8D77</td></tr></tbody></table><h2 id="modelessdialogmanager-methods"><a class="header-anchor" href="#modelessdialogmanager-methods"></a> ModelessDialogManager Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u5BF9\u8BDD\u6846\uFF0C\u4F1A\u81EA\u5B9A\u68C0\u67E5\u6307\u5B9Aid\u7684\u5BF9\u8BDD\u6846\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u5B58\u5728\u5C06\u76F4\u63A5\u8FD4\u56DE\u5DF2\u5B58\u5728\u5BF9\u8BDD\u6846\u5B9E\u4F8B</td><td>\u5BF9\u8BDD\u6846\u6240\u652F\u6301\u5C5E\u6027 &amp; { header: VNode, body: VNode, footer: VNode }</td></tr><tr><td>get</td><td>\u83B7\u53D6\u5BF9\u8BDD\u6846\u5B9E\u4F8B</td><td>\u5BF9\u8BDD\u6846id</td></tr><tr><td>has</td><td>\u68C0\u67E5\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u5B58\u5728</td><td>\u5BF9\u8BDD\u6846id</td></tr><tr><td>closeAll</td><td>\u5173\u95ED\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>showAll</td><td>\u663E\u793A\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>hideAll</td><td>\u9690\u85CF\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>collapseAll</td><td>\u6298\u53E0\u591A\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>expandAll</td><td>\u5C55\u5F00\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr></tbody></table><h2 id="modelessdialog-instance-methods"><a class="header-anchor" href="#modelessdialog-instance-methods"></a> ModelessDialog Instance Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>toggleShow</td><td>\u663E\u793A/\u9690\u85CF\u5BF9\u8BDD\u6846</td><td>shown: boolean\uFF0C\u624B\u52A8\u8BBE\u7F6E\u663E\u793A\u6216\u8005\u9690\u85CF</td></tr><tr><td>toggleCollapse</td><td>\u6298\u53E0/\u5C55\u5F00\u5BF9\u8BDD\u6846</td><td>collapsable: boolean\uFF0C\u624B\u52A8\u8BBE\u7F6E\u6298\u53E0\u6216\u8005\u5C55\u5F00</td></tr><tr><td>toggleMaximize</td><td>\u6700\u5927\u5316/\u8FD8\u539F\u5BF9\u8BDD\u6846</td><td>maximizable: boolean\uFF0C\u624B\u52A8\u8BBE\u7F6E\u6700\u5927\u5316</td></tr><tr><td>isShown</td><td>\u5BF9\u8BDD\u6846\u5DF2\u7ECF\u663E\u793A</td><td>-</td></tr><tr><td>isClosed</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u5173\u95ED</td><td>-</td></tr><tr><td>isCollapsed</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u6298\u53E0</td><td>-</td></tr><tr><td>isMaximized</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u6700\u5927\u5316</td><td>-</td></tr></tbody></table>',12);function Cu(e,l,u,o,g,_){const A=V("hb-demo0"),h=V("demo-block"),f=V("hb-demo1"),v=V("hb-demo2"),C=V("hb-demo3"),p=V("hb-demo4"),m=V("right-nav");return G(),J(K,null,[t("section",null,[tu,eu,ou,lu,y(h,{fs:""},{source:E(()=>[y(A)]),highlight:E(()=>[nu]),default:E(()=>[du]),_:1}),su,au,y(h,{fs:""},{source:E(()=>[y(f)]),highlight:E(()=>[ru]),_:1}),iu,cu,y(h,{fs:""},{source:E(()=>[y(v)]),highlight:E(()=>[Fu]),default:E(()=>[hu]),_:1}),mu,y(h,{fs:""},{source:E(()=>[y(C)]),highlight:E(()=>[Du]),default:E(()=>[Bu]),_:1}),pu,Eu,y(h,{fs:""},{source:E(()=>[y(p)]),highlight:E(()=>[gu]),_:1}),_u]),y(m)],64)}var Tu=Z(uu,[["render",Cu]]);export{Tu as default};
