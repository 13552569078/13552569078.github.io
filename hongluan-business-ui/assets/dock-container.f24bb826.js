var U=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var L=(o,n,u)=>n in o?U(o,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[n]=u,$=(o,n)=>{for(var u in n||(n={}))P.call(n,u)&&L(o,u,n[u]);if(j)for(var u of j(n))O.call(n,u)&&L(o,u,n[u]);return o};import{a0 as T,L as Q,W,Q as t,a4 as _,a1 as g,ab as X,a5 as s,aX as q,b0 as D}from"./vue.42779483.js";import{ab as G}from"./hongluan-business.cf55c6a9.js";import{_ as J,H as x}from"./index.a95a1468.js";import{H as K}from"./hongluan-icons.58a96039.js";import"./highlight.aba4bc0a.js";const R={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:o,resolveComponent:n,withCtx:u,createVNode:e,Fragment:k,openBlock:w,createElementBlock:m}=D,E=o("\u65E0snapshot"),b=o("\u81EA\u52A8\u622A\u5C4F"),A=o("\u6587\u672C"),N=o("\u56FE\u7247"),f=o("\u89C6\u9891"),c=o("\u97F3\u9891"),v=o("\u663E\u793A/\u9690\u85CFDock"),y=o("\u5E95\u90E8"),M=o("\u53F3\u4FA7"),z=o("\u9876\u90E8"),F=o("\u5DE6\u4FA7");function p(d,a){const l=n("hl-button"),V=n("hl-group"),I=n("hb-dock-container");return w(),m(k,null,[e(V,{gap:"var(--md)",block:""},{default:u(()=>[e(l,{onClick:d.show1},{default:u(()=>[E]),_:1},8,["onClick"]),e(l,{onClick:d.show2},{default:u(()=>[b]),_:1},8,["onClick"]),e(l,{onClick:d.show3},{default:u(()=>[A]),_:1},8,["onClick"]),e(l,{onClick:d.show4},{default:u(()=>[N]),_:1},8,["onClick"]),e(l,{onClick:d.show5},{default:u(()=>[f]),_:1},8,["onClick"]),e(l,{onClick:d.show6},{default:u(()=>[c]),_:1},8,["onClick"])]),_:1}),e(V,{gap:"var(--md)",class:"m-t-md"},{default:u(()=>[e(l,{onClick:d.showDock},{default:u(()=>[v]),_:1},8,["onClick"]),e(l,{onClick:a[0]||(a[0]=C=>d.placement="bottom")},{default:u(()=>[y]),_:1}),e(l,{onClick:a[1]||(a[1]=C=>d.placement="right")},{default:u(()=>[M]),_:1}),e(l,{onClick:a[2]||(a[2]=C=>d.placement="top")},{default:u(()=>[z]),_:1}),e(l,{onClick:a[3]||(a[3]=C=>d.placement="left")},{default:u(()=>[F]),_:1})]),_:1}),e(I,{modelValue:d.visible,"onUpdate:modelValue":a[4]||(a[4]=C=>d.visible=C),placement:d.placement},null,8,["modelValue","placement"])],64)}const{defineComponent:h}=D,{ref:B,h:i}=D,{ModelessDialogManager:r,HbEmpty:H}=x;return $({render:p},h({setup(d,{expose:a}){a();const l=B(!1),V=B("bottom"),S={visible:l,placement:V,showDock:()=>{l.value=!l.value},show1:()=>{r.show({title:"\u65E0Snapshot",useDock:!0})},show2:()=>{r.show({title:"\u81EA\u52A8\u622A\u5C4F",snapshot:!0,useDock:!0,body:i(H,{description:"\u81EA\u5B9A\u622A\u5C4F\u6D4B\u8BD5"})})},show3:()=>{r.show({title:"\u6587\u672C",useDock:!0,snapshot:"\u201C\u5386\u53F2\u5C06\u7EE7\u7EED\u88AB\u4E66\u5199\uFF0C\u52A0\u6CB9\uFF0C\u6CD5\u56FD\u961F\uFF01\u201D\u5E2E\u52A9\u6CD5\u56FD\u961F\u62FF\u5230\u6B27\u56FD\u8054\u51A0\u519B\u4E4B\u540E\uFF0C\u59C6\u5DF4\u4F69\u5728\u81EA\u5DF1\u7684\u793E\u4EA4\u5E73\u53F0\u4E0A\u6652\u51FA\u4E86\u4EB2\u543B\u51A0\u519B\u5956\u676F\u7684\u7167\u7247\u3002\u4ECA\u5E74\u590F\u5929\u90A3\u4E2A\u5931\u610F\u7684\u59C6\u5DF4\u4F69\uFF0C\u7EC8\u4E8E\u5728\u56FD\u5BB6\u961F\u91CD\u83B7\u5E78\u798F\u3002",body:i("span",["\u6587\u5B57\u6D4B\u8BD5"])})},show4:()=>{r.show({title:"\u56FE\u7247\u7C7B\u578B",useDock:!0,snapshot:{type:"image",url:"https://pimg.39.net/yaopin/zycimg/11hxcu4pth3wu2019.jpg"},body:i("span",["\u56FE\u7247\u7C7B\u578B\u6D4B\u8BD5"])})},show5:()=>{r.show({title:"\u89C6\u9891\u7C7B\u578B",useDock:!0,snapshot:{type:"video",url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"},body:i("span",["\u89C6\u9891\u7C7B\u578B\u6D4B\u8BD5"])})},show6:()=>{r.show({title:"\u97F3\u9891\u7C7B\u578B",useDock:!0,snapshot:{type:"audio",url:"https://www.w3school.com.cn/i/horse.ogg"},body:i("span",["\u97F3\u9891\u7C7B\u578B\u6D4B\u8BD5"])})},ref:B,h:i,ModelessDialogManager:r,HbEmpty:H};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}))}(),"hb-demo1":function(){const{createTextVNode:o,resolveComponent:n,withCtx:u,createVNode:e,Fragment:k,openBlock:w,createElementBlock:m}=D,E=o("\u81EA\u5B9A\u4E49header"),b=o("\u663E\u793A/\u9690\u85CFDock");function A(F,p){const h=n("hl-button"),B=n("hl-group"),i=n("hb-dock-container");return w(),m(k,null,[e(B,{gap:"var(--md)",block:""},{default:u(()=>[e(h,{onClick:F.show1},{default:u(()=>[E]),_:1},8,["onClick"]),e(h,{onClick:F.showDock},{default:u(()=>[b]),_:1},8,["onClick"])]),_:1}),e(i,{modelValue:F.visible,"onUpdate:modelValue":p[0]||(p[0]=r=>F.visible=r)},null,8,["modelValue"])],64)}const{defineComponent:N}=D,{ref:f,h:c}=D,{HlIcon:v}=G,{TwoAirplay:y}=K,{ModelessDialogManager:M}=x;return $({render:A},N({setup(F,{expose:p}){p();const h=f(!1),r={visible:h,showDock:()=>{h.value=!h.value},show1:()=>{const H=M.show({useDock:!0,header:c("div",null,[c("h6",{innerHTML:"\u81EA\u5B9A\u4E49"}),c("h5",{innerHTML:"Header"}),c(v,{size:"sm",type:"primary",title:"\u70B9\u6211\u6298\u53E0",style:"cursor: pointer",onClick:()=>H.toggleCollapse()},[c(y)])])})},ref:f,h:c,HlIcon:v,TwoAirplay:y,ModelessDialogManager:M};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}()}},Y=t("h1",null,"DockContainer \u505C\u9760\u5BB9\u5668",-1),Z=t("p",null,[s("\u4E3B\u8981\u7528\u6765\u914D\u5408ModelessDialog\u4F7F\u7528\u3002\u5728ModelessDialog\u6298\u53E0\u540E\uFF0C\u6536\u7EB3\u5728\u6B64\u5BB9\u5668\u4E2D\u3002\u5982\u679C\u9700\u8981\u5168\u5C40\u4FDD\u6301\uFF0C\u8BF7\u628A\u6B64\u7EC4\u4EF6\u653E\u5728\u548C\u6839 "),t("code",null,"router-view"),s(" \u540C\u7EA7\u3002")],-1),uu=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),s(" \u57FA\u7840\u7528\u6CD5")],-1),tu=t("p",null,[s("\u53EA\u6709\u901A\u8FC7 "),t("code",null,"ModelessDialogManager"),s(" \u521B\u5EFA\u7684\u7684\u5BF9\u8BDD\u6846\u624D\u80FD\u6536\u7EB3\u5728\u6B64\u5BB9\u5668\u4E2D\u3002")],-1),ou=t("div",null,[t("p",null,[t("code",null,"snapshot"),s(" \u4E3A "),t("code",null,"true"),s(" \u65F6\uFF0C\u4F1A\u81EA\u52A8\u4F7F\u7528html2canvas\u8FDB\u884C\u622A\u56FE\uFF0C\u53EF\u80FD\u9020\u6210\u5361\u987F\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528 "),t("code",null,"true"),s(" \u503C\u3002\u5F53snapshot\u4E3A\u5BF9\u8C61\u65F6\uFF0Ctype\u53EF\u9009\u503C\u4E3A"),t("code",null,"image"),s("\uFF0C"),t("code",null,"video"),s("\uFF0C"),t("code",null,"audio"),s("\u3002\u5F53 "),t("code",null,"snapshot"),s(" \u4E3A "),t("code",null,"string"),s(" \u65F6\uFF0C\u8FC7\u957F\u7684\u6587\u672C\u4F1A\u88AB\u81EA\u52A8\u622A\u6389\u3002")])],-1),eu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)" block>
    <hl-button @click="show1">\u65E0snapshot</hl-button>
    <hl-button @click="show2">\u81EA\u52A8\u622A\u5C4F</hl-button>
    <hl-button @click="show3">\u6587\u672C</hl-button>
    <hl-button @click="show4">\u56FE\u7247</hl-button>
    <hl-button @click="show5">\u89C6\u9891</hl-button>
    <hl-button @click="show6">\u97F3\u9891</hl-button>
  </hl-group>
  <hl-group gap="var(--md)" class="m-t-md">
    <hl-button @click="showDock">\u663E\u793A/\u9690\u85CFDock</hl-button>
    <hl-button @click="placement = 'bottom'">\u5E95\u90E8</hl-button>
    <hl-button @click="placement = 'right'">\u53F3\u4FA7</hl-button>
    <hl-button @click="placement = 'top'">\u9876\u90E8</hl-button>
    <hl-button @click="placement = 'left'">\u5DE6\u4FA7</hl-button>
  </hl-group>
  <hb-dock-container v-model="visible" :placement="placement" />
</template>
<script setup lang="ts">
import { ref, h } from 'vue'
import { ModelessDialogManager, HbEmpty } from 'hongluan-business-ui'

const visible = ref(false)
const placement = ref('bottom')

const showDock = () => {
  visible.value = !visible.value
}

const show1 = () => {
  ModelessDialogManager.show({
    title: '\u65E0Snapshot',
    useDock: true,
  })
}
const show2 = () => {
  ModelessDialogManager.show({
    title: '\u81EA\u52A8\u622A\u5C4F',
    snapshot: true,
    useDock: true,
    body: h(HbEmpty, { description: '\u81EA\u5B9A\u622A\u5C4F\u6D4B\u8BD5' }),
  })
}
const show3 = () => {
  ModelessDialogManager.show({
    title: '\u6587\u672C',
    useDock: true,
    snapshot: '\u201C\u5386\u53F2\u5C06\u7EE7\u7EED\u88AB\u4E66\u5199\uFF0C\u52A0\u6CB9\uFF0C\u6CD5\u56FD\u961F\uFF01\u201D\u5E2E\u52A9\u6CD5\u56FD\u961F\u62FF\u5230\u6B27\u56FD\u8054\u51A0\u519B\u4E4B\u540E\uFF0C\u59C6\u5DF4\u4F69\u5728\u81EA\u5DF1\u7684\u793E\u4EA4\u5E73\u53F0\u4E0A\u6652\u51FA\u4E86\u4EB2\u543B\u51A0\u519B\u5956\u676F\u7684\u7167\u7247\u3002\u4ECA\u5E74\u590F\u5929\u90A3\u4E2A\u5931\u610F\u7684\u59C6\u5DF4\u4F69\uFF0C\u7EC8\u4E8E\u5728\u56FD\u5BB6\u961F\u91CD\u83B7\u5E78\u798F\u3002',
    body: h('span', ['\u6587\u5B57\u6D4B\u8BD5']),
  })
}
const show4 = () => {
  ModelessDialogManager.show({
    title: '\u56FE\u7247\u7C7B\u578B',
    useDock: true,
    snapshot: { type: 'image', url: 'https://pimg.39.net/yaopin/zycimg/11hxcu4pth3wu2019.jpg' },
    body: h('span', ['\u56FE\u7247\u7C7B\u578B\u6D4B\u8BD5']),
  })
}
const show5 = () => {
  ModelessDialogManager.show({
    title: '\u89C6\u9891\u7C7B\u578B',
    useDock: true,
    snapshot: { type: 'video', url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
    body: h('span', ['\u89C6\u9891\u7C7B\u578B\u6D4B\u8BD5']),
  })
}
const show6 = () => {
  ModelessDialogManager.show({
    title: '\u97F3\u9891\u7C7B\u578B',
    useDock: true,
    snapshot: { type: 'audio', url: 'https://www.w3school.com.cn/i/horse.ogg' },
    body: h('span', ['\u97F3\u9891\u7C7B\u578B\u6D4B\u8BD5']),
  })
}
<\/script>
`)],-1),nu=t("h2",{id:"zi-ding-yi-modelessdialog-header"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-modelessdialog-header"}),s(" \u81EA\u5B9A\u4E49ModelessDialog header")],-1),su=t("p",null,[s("\u4F7F\u7528 "),t("code",null,"header slot"),s(" \u65F6\uFF0CDockContainer\u5BB9\u5668\u4E2D\u663E\u793A\u7684title\u4E3A "),t("code",null,"panel-header"),s(" DOM\u5143\u7D20\u7684innerText\u503C\u3002")],-1),du=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)" block>
    <hl-button @click="show1">\u81EA\u5B9A\u4E49header</hl-button>
    <hl-button @click="showDock">\u663E\u793A/\u9690\u85CFDock</hl-button>
  </hl-group>
  <hb-dock-container v-model="visible" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { HlIcon } from 'hongluan-ui'
import { TwoAirplay } from '@hongluan-ui/icons'
import { ModelessDialogManager } from 'hongluan-business-ui'


const visible = ref(false)

const showDock = () => {
  visible.value = !visible.value
}

const show1 = () => {
  const dialog = ModelessDialogManager.show({
    useDock: true,
    header: h('div', null, [
      h('h6', { innerHTML: '\u81EA\u5B9A\u4E49' }),
      h('h5', { innerHTML: 'Header' }),
      h(HlIcon, {
        size: 'sm',
        type:'primary',
        title: '\u70B9\u6211\u6298\u53E0',
        style: 'cursor: pointer',
        onClick: () => dialog.toggleCollapse(),
      }, [h(TwoAirplay)]),
    ]),
  })
}

<\/script>
`)],-1),lu=q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u662F\u5426\u663E\u793A\u5BF9\u8BDD\u6846</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BB9\u5668\u7684\u5BBD\u5EA6\uFF0C\u5728\u5DE6\u53F3\u4FA7\u65F6\u8D77\u4F5C\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>height</td><td>\u5BB9\u5668\u7684\u9AD8\u5EA6\uFF0C\u5728\u9876\u5E95\u90E8\u65F6\u8D77\u4F5C\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>item-width</td><td>\u5BB9\u5668\u4E2D\u6BCF\u4E00\u9879\u7684\u5BBD\u5EA6</td><td>string</td><td>\u2014</td><td>150px</td></tr><tr><td>item-height</td><td>\u5BB9\u5668\u4E2D\u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>150px</td></tr><tr><td>custom-class</td><td>\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>open-delay</td><td>\u5BB9\u5668\u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-delay</td><td>\u5BB9\u5668\u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u5BF9\u8BDD\u6846\u7684\u5173\u95ED</td><td>function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>animation-name</td><td>\u5BB9\u5668\u52A8\u753B\u7C7B\u578B</td><td>string</td><td>-</td><td>\u6839\u636E\u4E0D\u540C\u7684\u4F4D\u7F6E\uFF0C\u4F1A\u6709\u4E0D\u540C\u7684\u9ED8\u8BA4\u503C</td></tr><tr><td>z-index</td><td>\u81EA\u5B9A\u4E49\u5C42\u7EA7</td><td>number</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>\u4F4D\u7F6E</td><td>string</td><td>bottom / top / left / right</td><td>bottom</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3Adata: array&lt;{id, title, snapshot }&gt;</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u5BB9\u5668\u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>\u5BB9\u5668\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>\u5BB9\u5668\u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>\u5BB9\u5668\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>item-closed</td><td>\u5BB9\u5668\u4E2D\u9879\u76EE\u5173\u95ED\u7684\u56DE\u8C03</td><td>(item, items)\uFF1A\u5173\u95ED\u7684\u9879\u76EE\uFF0C\u663E\u793A\u7684\u9879\u76EE</td></tr><tr><td>item-added</td><td>\u5BB9\u5668\u4E2D\u9879\u76EE\u6DFB\u52A0\u7684\u56DE\u8C03</td><td>(item, items)\uFF1A\u6DFB\u52A0\u7684\u9879\u76EE\uFF0C\u663E\u793A\u7684\u9879\u76EE</td></tr><tr><td>item-restored</td><td>\u5BB9\u5668\u4E2D\u9879\u76EE\u8FD8\u539F\u7684\u56DE\u8C03</td><td>(item, items)\uFF1A\u8FD8\u539F\u7684\u9879\u76EE\uFF0C\u663E\u793A\u7684\u9879\u76EE</td></tr></tbody></table>',6);function ru(o,n,u,e,k,w){const m=T("hb-demo0"),E=T("demo-block"),b=T("hb-demo1"),A=T("right-nav");return Q(),W(X,null,[t("section",null,[Y,Z,uu,tu,_(E,{fs:""},{source:g(()=>[_(m)]),highlight:g(()=>[eu]),default:g(()=>[ou]),_:1}),nu,su,_(E,{fs:""},{source:g(()=>[_(b)]),highlight:g(()=>[du]),_:1}),lu]),_(A)],64)}var Au=J(R,[["render",ru]]);export{Au as default};
