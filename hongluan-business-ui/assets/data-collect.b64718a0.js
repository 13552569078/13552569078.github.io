var O=Object.defineProperty;var X=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var H=(t,l,e)=>l in t?O(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,S=(t,l)=>{for(var e in l||(l={}))U.call(l,e)&&H(t,e,l[e]);if(X)for(var e of X(l))I.call(l,e)&&H(t,e,l[e]);return t};import{a0 as w,L as Q,W,Q as a,a4 as v,a1 as f,ab as q,a5 as k,aX as G,b0 as g}from"./vue.42779483.js";import{H as J}from"./hongluan-icons.58a96039.js";import{_ as K}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";const Z={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:t,openBlock:l,createBlock:e}=g;function n(i,C){const s=t("hb-data-collect");return l(),e(s,{title:`${Math.floor(Math.random()*1e4)}`,"sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},null,8,["title"])}return S({render:n},{})}(),"hb-demo1":function(){const{resolveComponent:t,createVNode:l,withCtx:e,openBlock:n,createBlock:r}=g;function i(d,b){const _=t("fill-firm"),E=t("hl-icon"),A=t("hb-data-collect");return n(),r(A,{gap:"var(--sm)",title:"3867.25","sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},{icon:e(()=>[l(E,{type:"primary",effect:"light",size:"xl",fill:"",radius:"",class:"static"},{default:e(()=>[l(_)]),_:1})]),_:1})}const{defineComponent:C}=g,{FillFirm:s}=J;return S({render:i},C({setup(d,{expose:b}){b();const _={FillFirm:s};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}))}(),"hb-demo2":function(){const{renderList:t,Fragment:l,openBlock:e,createElementBlock:n,resolveComponent:r,createBlock:i,createCommentVNode:C,withCtx:s,createVNode:u,createElementVNode:d}=g,b={class:"m-t-md"},_=d("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),E=d("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function A(c,p){const h=r("hl-option"),x=r("hl-select"),B=r("hl-group"),V=r("fill-PhoneBook"),y=r("hl-icon"),F=r("hb-data-collect");return e(),n(l,null,[u(B,{gap:"var(--sm)"},{default:s(()=>[u(x,{modelValue:c.valueX,"onUpdate:modelValue":p[0]||(p[0]=o=>c.valueX=o),clearable:"",placeholder:"gap-x \u5C5E\u6027"},{default:s(()=>[(e(!0),n(l,null,t(c.options,o=>(e(),n(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(x,{modelValue:c.valueY,"onUpdate:modelValue":p[1]||(p[1]=o=>c.valueY=o),clearable:"",placeholder:"gap-y \u5C5E\u6027"},{default:s(()=>[(e(!0),n(l,null,t(c.options,o=>(e(),n(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),d("div",b,[u(F,{gap:"var(--md)","padding-x":c.valueX,"padding-y":c.valueY,class:"bg-stripes"},{default:s(()=>[u(y,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:s(()=>[u(V)]),_:1}),u(B,{dir:"vertical",full:"full-x",class:"content"},{default:s(()=>[_,E]),_:1})]),_:1},8,["padding-x","padding-y"])])],64)}const{defineComponent:N}=g,{ref:m}=g,{FillPhoneBook:z}=J;return S({render:A},N({setup(c,{expose:p}){p();const h=m([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),x=m("var(--md)"),B=m("var(--md)"),V=m("var(--md)"),y={options:h,value:x,valueX:B,valueY:V,ref:m,FillPhoneBook:z};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}))}(),"hb-demo3":function(){const{renderList:t,Fragment:l,openBlock:e,createElementBlock:n,resolveComponent:r,createBlock:i,createCommentVNode:C,withCtx:s,createVNode:u,createElementVNode:d}=g,b={class:"m-t-md"},_=d("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),E=d("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function A(c,p){const h=r("hl-option"),x=r("hl-select"),B=r("fill-application"),V=r("hl-icon"),y=r("hl-group"),F=r("hb-data-collect");return e(),n(l,null,[u(x,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=o=>c.value=o),clearable:"",placeholder:"gap \u5C5E\u6027"},{default:s(()=>[(e(!0),n(l,null,t(c.options,o=>(e(),n(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),d("div",b,[u(F,{gap:"var(--md)",radius:c.value,class:"border border-primary bg-stripes"},{default:s(()=>[u(V,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:s(()=>[u(B)]),_:1}),u(y,{dir:"vertical",full:"full-x",class:"content"},{default:s(()=>[_,E]),_:1})]),_:1},8,["radius"])])],64)}const{defineComponent:N}=g,{ref:m}=g,{FillApplication:z}=J;return S({render:A},N({setup(c,{expose:p}){p();const h=m([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),x=m("var(--xxs)"),B={options:h,value:x,ref:m,FillApplication:z};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}}))}(),"hb-demo4":function(){const{resolveComponent:t,createVNode:l,withCtx:e,createElementVNode:n,toDisplayString:r,openBlock:i,createBlock:C}=g,s=n("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),u=n("span",{class:"sub-title"},"HTML, JS, ReactJS",-1),d=n("h6",{class:"title"},"13,647",-1),b=n("span",{class:"sub-title"},"\u62A5\u8B66\u6B21\u6570\u7EDF\u8BA1",-1),_={class:"progress-content"},E=n("span",{class:"sub-title"},"\u9500\u552E\u603B\u989D",-1),A=n("h2",{class:"title"},"$13,647",-1),N=n("div",{class:"static text-danger p-t-lg"},"+75%",-1),m=n("h2",{class:"title"},"13,647",-1),z=n("span",null,"\u6BCF\u5468\u8425\u4E1A\u989D",-1);function L(V,y){const F=t("fill-print"),o=t("hl-icon"),P=t("hl-group"),M=t("hb-data-collect"),D=t("hl-col"),$=t("fill-pie"),R=t("hl-progress"),Y=t("fill-chart-bar"),j=t("hl-row");return i(),C(j,{layout:"grid",count:"count-lg-3 count-sm-2"},{default:e(()=>[l(D,{span:"col"},{default:e(()=>[l(M,{full:"",gap:"var(--md)"},{default:e(()=>[l(o,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(F)]),_:1}),l(P,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[s,u]),_:1})]),_:1})]),_:1}),l(D,{span:"col"},{default:e(()=>[l(M,{full:"",gap:"var(--md)"},{default:e(()=>[l(o,{type:"primary",size:"lg",effect:"light",fill:"",radius:"",class:"symbol"},{default:e(()=>[l($)]),_:1}),l(P,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[d,b]),_:1}),l(R,{"show-as":"circle","stroke-width":"6px",percentage:Math.floor(Math.random()*(1-100)+100),class:"static",style:{width:"56px",height:"56px"}},{default:e(({percentage:T})=>[n("div",_,r(T)+"%",1)]),_:1},8,["percentage"])]),_:1})]),_:1}),l(D,{span:"col"},{default:e(()=>[l(M,{full:"",gap:"var(--md)"},{default:e(()=>[l(P,{dir:"vertical"},{default:e(()=>[E,A]),_:1}),N]),_:1})]),_:1}),l(D,{span:"col"},{default:e(()=>[l(M,{dir:"vertical",align:"left",padding:"var(--lg)",gap:"var(--md)",class:"bg-warning light-5 border border-warning"},{default:e(()=>[l(P,{dir:"horizontal",gap:"var(--sm)"},{default:e(()=>[l(o,{name:"alert",type:"warning",size:"xxl",class:"static"},{default:e(()=>[l(Y)]),_:1}),m]),_:1}),z]),_:1})]),_:1})]),_:1})}const{defineComponent:c}=g,{FillPrint:p,FillPie:h,FillChartBar:x}=J;return S({render:L},c({setup(V,{expose:y}){y();const F={FillPrint:p,FillPie:h,FillChartBar:x};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}()}},ee=a("h1",null,"DataCollect \u6570\u636E\u96C6\u5361\u7247",-1),le=a("p",null,"\u6570\u636E\u96C6\u5361\u7247\u7528\u4E8E\u8868\u8FBE\u4E00\u4E9B\u6570\u636E\u7684\u96C6\u5408\u3002",-1),te=a("h2",{id:"ji-chu-yong-fa"},[a("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),k(" \u57FA\u7840\u7528\u6CD5")],-1),oe=a("pre",null,[a("code",{class:"html"},` <template>
  <hb-data-collect :title="\`\${Math.floor(Math.random() * 10000)}\`" sub-title="\u4ECA\u65E5\u4EFB\u52A1\u6570" />
</template>

`)],-1),ae=a("h2",{id:"tu-biao"},[a("a",{class:"header-anchor",href:"#tu-biao"}),k(" \u56FE\u6807")],-1),ne=a("pre",null,[a("code",{class:"html"},` <template>
  <hb-data-collect gap="var(--sm)" title="3867.25" sub-title="\u4ECA\u65E5\u4EFB\u52A1\u6570">
    <template #icon>
      <hl-icon
        type="primary"
        effect="light"
        size="xl"
        fill
        radius
        class="static"
      >
        <fill-firm />
      </hl-icon>
    </template>
  </hb-data-collect>
</template>
<script lang="ts" setup>
import { FillFirm } from '@hongluan-ui/icons'

<\/script>
`)],-1),se=a("h2",{id:"padding-shu-xing"},[a("a",{class:"header-anchor",href:"#padding-shu-xing"}),k(" Padding \u5C5E\u6027")],-1),re=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-select v-model="valueX" clearable placeholder="gap-x \u5C5E\u6027">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
    <hl-select v-model="valueY" clearable placeholder="gap-y \u5C5E\u6027">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
  </hl-group>
  <div class="m-t-md">
    <hb-data-collect
      gap="var(--md)"
      :padding-x="valueX"
      :padding-y="valueY"
      class="bg-stripes"
    >
      <hl-icon type="primary" size="lg" fill radius class="symbol">
        <fill-PhoneBook />
      </hl-icon>
      <hl-group dir="vertical" full="full-x" class="content">
        <h6 class="title">\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF</h6>
        <span class="sub-title">HTML, JS, ReactJS</span>
      </hl-group>
    </hb-data-collect>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FillPhoneBook } from '@hongluan-ui/icons'


const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--sm)',
    label: 'sm',
  },
  {
    value: 'var(--md)',
    label: 'md',
  },
  {
    value: 'var(--lg)',
    label: 'lg',
  },
  {
    value: 'var(--xl)',
    label: 'xl',
  },
  {
    value: 'var(--xxl)',
    label: 'xxl',
  },
])
const value = ref('var(--md)')
const valueX = ref('var(--md)')
const valueY = ref('var(--md)')

<\/script>
`)],-1),ue=a("h2",{id:"radius-shu-xing"},[a("a",{class:"header-anchor",href:"#radius-shu-xing"}),k(" Radius \u5C5E\u6027")],-1),ce=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="gap \u5C5E\u6027">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
  <div class="m-t-md">
    <hb-data-collect gap="var(--md)" :radius="value" class="border border-primary bg-stripes">
      <hl-icon type="primary" size="lg" fill radius class="symbol">
        <fill-application />
      </hl-icon>
      <hl-group dir="vertical" full="full-x" class="content">
        <h6 class="title">\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF</h6>
        <span class="sub-title">HTML, JS, ReactJS</span>
      </hl-group>
    </hb-data-collect>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FillApplication } from '@hongluan-ui/icons'

const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--xxs)',
    label: 'xxs',
  },
  {
    value: 'var(--xs)',
    label: 'xs',
  },
  {
    value: 'var(--sm)',
    label: 'sm',
  },
  {
    value: 'var(--md)',
    label: 'md',
  },
  {
    value: 'var(--lg)',
    label: 'lg',
  },
  {
    value: 'var(--xl)',
    label: 'xl',
  },
  {
    value: 'var(--xxl)',
    label: 'xxl',
  },
])
const value = ref('var(--xxs)')


<\/script>
`)],-1),ie=a("h2",{id:"zi-ding-yi-nei-rong"},[a("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),k(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),de=a("div",null,[a("p",null,[k("data-collect\u7531"),a("code",null,"group"),k("\u7EC4\u4EF6\u6784\u9020\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528"),a("code",null,"group"),k("\u7684\u5168\u90E8\u5C5E\u6027\u3002")])],-1),pe=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-row layout="grid" count="count-lg-3 count-sm-2">
    <hl-col span="col">
      <hb-data-collect full gap="var(--md)">
        <hl-icon type="primary" size="lg" fill radius class="symbol">
          <fill-print />
        </hl-icon>
        <hl-group dir="vertical" full="full-x" class="content">
          <h6 class="title">\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF</h6>
          <span class="sub-title">HTML, JS, ReactJS</span>
        </hl-group>
      </hb-data-collect>
    </hl-col>
    <hl-col span="col">
      <hb-data-collect full gap="var(--md)">
        <hl-icon
          type="primary"
          size="lg"
          effect="light"
          fill
          radius
          class="symbol"
        >
          <fill-pie />
        </hl-icon>
        <hl-group dir="vertical" full="full-x" class="content">
          <h6 class="title">13,647</h6>
          <span class="sub-title">\u62A5\u8B66\u6B21\u6570\u7EDF\u8BA1</span>
        </hl-group>
        <hl-progress
          show-as="circle"
          stroke-width="6px"
          :percentage="Math.floor(Math.random() * (1 - 100) + 100)"
          class="static"
          style="width: 56px; height: 56px"
        >
          <template #default="{ percentage }">
            <div class="progress-content">{{ percentage }}%</div>
          </template>
        </hl-progress>
      </hb-data-collect>
    </hl-col>

    <hl-col span="col">
      <hb-data-collect full gap="var(--md)">
        <hl-group dir="vertical">
          <span class="sub-title">\u9500\u552E\u603B\u989D</span>
          <h2 class="title">$13,647</h2>
        </hl-group>
        <div class="static text-danger p-t-lg">+75%</div>
      </hb-data-collect>
    </hl-col>

    <hl-col span="col">
      <hb-data-collect dir="vertical" align="left" padding="var(--lg)" gap="var(--md)" class="bg-warning light-5 border border-warning">
        <hl-group dir="horizontal" gap="var(--sm)">
          <hl-icon name="alert" type="warning" size="xxl" class="static">
            <fill-chart-bar />
          </hl-icon>
          <h2 class="title">13,647</h2>
        </hl-group>
        <span>\u6BCF\u5468\u8425\u4E1A\u989D</span>
      </hb-data-collect>
    </hl-col>
  </hl-row>
</template>
<script lang="ts" setup>
import { FillPrint, FillPie, FillChartBar } from '@hongluan-ui/icons'

<\/script>
`)],-1),he=G('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sub-title</td><td>\u526F\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>padding</td><td>\u586B\u5145\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>radius</td><td>\u5706\u89D2\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>\u56FE\u6807</td></tr><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table>',4);function _e(t,l,e,n,r,i){const C=w("hb-demo0"),s=w("demo-block"),u=w("hb-demo1"),d=w("hb-demo2"),b=w("hb-demo3"),_=w("hb-demo4"),E=w("right-nav");return Q(),W(q,null,[a("section",null,[ee,le,te,v(s,{fs:""},{source:f(()=>[v(C)]),highlight:f(()=>[oe]),_:1}),ae,v(s,{fs:""},{source:f(()=>[v(u)]),highlight:f(()=>[ne]),_:1}),se,v(s,{fs:""},{source:f(()=>[v(d)]),highlight:f(()=>[re]),_:1}),ue,v(s,{fs:""},{source:f(()=>[v(b)]),highlight:f(()=>[ce]),_:1}),ie,v(s,{fs:""},{source:f(()=>[v(_)]),highlight:f(()=>[pe]),default:f(()=>[de]),_:1}),he]),v(E)],64)}var Be=K(Z,[["render",_e]]);export{Be as default};
