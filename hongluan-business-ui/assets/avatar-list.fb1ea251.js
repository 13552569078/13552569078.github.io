var v=Object.defineProperty;var B=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var D=(a,u,e)=>u in a?v(a,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[u]=e,C=(a,u)=>{for(var e in u||(u={}))A.call(u,e)&&D(a,e,u[e]);if(B)for(var e of B(u))k.call(u,e)&&D(a,e,u[e]);return a};import{a0 as b,L as w,W as j,Q as t,a4 as p,a1 as c,ab as x,a5 as F,aX as y,b0 as r}from"./vue.42779483.js";import{_ as S}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.58a96039.js";const z={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:a,openBlock:u,createBlock:e}=r;function l(o,n){const s=a("hb-avatar-list");return u(),e(s,{data:o.list,indent:"-10px"},null,8,["data"])}const{defineComponent:m}=r,{ref:i}=r;return C({render:l},m({setup(o,{expose:n}){n();const d={list:i([{url:"https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg"},{url:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",title:"\u5934\u50CF\u4E8C"},{url:"https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",title:"\u5934\u50CF\u4E09"},{url:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",title:"\u5934\u50CF\u56DB"}]),ref:i};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}(),"hb-demo1":function(){const{toDisplayString:a,createElementVNode:u,resolveComponent:e,withCtx:l,openBlock:m,createBlock:i}=r;function h(d,_){const g=e("hb-avatar-list");return m(),i(g,{data:d.list,max:5,indent:"-10px",props:d.props},{tip:l(({item:E})=>[u("h5",null,"\u59D3\u540D\uFF1A"+a(E.name),1)]),_:1},8,["data","props"])}const{defineComponent:o}=r,{ref:n}=r;return C({render:h},o({setup(d,{expose:_}){_();const g=n({url:"img",title:"name"}),E=n([{img:"https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a",name:"\u5934\u50CF\u4E00"},{img:"https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a",name:"\u5934\u50CF\u4E8C"},{img:"https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4",name:"\u5934\u50CF\u4E09"},{img:"https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1",name:"\u5934\u50CF\u56DB"},{img:"https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a",name:"\u5934\u50CF5"},{img:"https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a",name:"\u5934\u50CF6"},{img:"https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4",name:"\u5934\u50CF7"},{img:"https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1",name:"\u5934\u50CF8"}]),f={props:g,list:E,ref:n};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}()}},L=t("h1",null,"AvatarList \u5934\u50CF\u5217\u8868",-1),N=t("p",null,"\u4E00\u7EC4\u7528\u6237\u5934\u50CF\uFF0C\u5E38\u7528\u5728\u9879\u76EE/\u56E2\u961F\u6210\u5458\u5217\u8868\u3002\u53EF\u4EE5\u8BBE\u7F6E\u5C3A\u5BF8\uFF0C\u4E5F\u53EF\u4EE5\u9650\u5236\u6700\u591A\u663E\u793A\u6570\u91CF\u3002",-1),P=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),F(" \u57FA\u7840\u7528\u6CD5")],-1),$=t("div",null,[t("p",null,[F("data\u53C2\u6570\u4E3A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5BF9\u8C61\u4E2D\u9700\u8981\u6709\u4E24\u4E2A\u5C5E\u6027\uFF0C\u9ED8\u8BA4\u4E3A"),t("code",null,"url / title"),F("\uFF0C\u5176\u4E2Durl\u7528\u6765\u5C55\u793A\u56FE\u7247\uFF0C\u9F20\u6807\u6ED1\u4E0A\u53BB\u65F6\u5019\u5C55\u793Atitle\u63D0\u793A\u4FE1\u606F\u3002\u6CA1\u6709title\u5C5E\u6027\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u5C55\u793A\u63D0\u793A\u4FE1\u606F\u3002")])],-1),V=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-avatar-list :data="list" indent="-10px" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    url: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    title: '\u5934\u50CF\u4E8C',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    title: '\u5934\u50CF\u4E09',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    title: '\u5934\u50CF\u56DB',
  },
])

<\/script>
`)],-1),W=t("h2",{id:"zui-da-zhi-she-zhi"},[t("a",{class:"header-anchor",href:"#zui-da-zhi-she-zhi"}),F(" \u6700\u5927\u503C\u8BBE\u7F6E")],-1),O=t("div",null,[t("p",null,"\u53EF\u4EE5\u901A\u8FC7props\u5C5E\u6027\u914D\u7F6Eurl\u548Ctitle\u5BF9\u5E94\u7684\u5C5E\u6027\u3002")],-1),Q=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-avatar-list :data="list" :max="5" indent="-10px" :props="props">
    <template #tip="{item}">
      <h5>\u59D3\u540D\uFF1A{{ item.name }}</h5>
    </template>
  </hb-avatar-list>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const props = ref({
  url: 'img',
  title: 'name',
})
const list = ref([
  {
    img: 'https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a',
    name: '\u5934\u50CF\u4E00',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a',
    name: '\u5934\u50CF\u4E8C',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4',
    name: '\u5934\u50CF\u4E09',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1',
    name: '\u5934\u50CF\u56DB',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a',
    name: '\u5934\u50CF5',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a',
    name: '\u5934\u50CF6',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4',
    name: '\u5934\u50CF7',
  },
  {
    img: 'https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1',
    name: '\u5934\u50CF8',
  },
])

<\/script>
`)],-1),X=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u6570\u636E\u5217\u8868</td><td>object[]</td><td>\u2014</td><td>[]</td></tr><tr><td>indent</td><td>\u56FE\u7247\u4E4B\u95F4\u7684\u91CD\u53E0\u8DDD\u79BB\uFF0C\u53EF\u4EE5\u662F\u5404\u79CDcss\u5355\u4F4D</td><td>string</td><td>-</td><td>\u56FE\u7247\u5BBD\u5EA6\u4E00\u534A\u7684\u8D1F\u503C</td></tr><tr><td>popper-class</td><td>\u5F39\u6846\u7C7B\u540D</td><td>string</td><td>-</td><td>-</td></tr><tr><td>size</td><td>\u56FE\u7247\u5927\u5C0F</td><td>string</td><td>\u53C2\u8003\u57FA\u7840\u7EC4\u4EF6\u4E2D\u7684Thumb\u7EC4\u4EF6\u53C2\u6570</td><td>sm</td></tr><tr><td>fit</td><td>\u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a></td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr><tr><td>max</td><td>\u663E\u793A\u7684\u6700\u5927\u6570\u91CF\uFF0C\u8D85\u8FC7\u6B64\u503C\u5C06\u4F1A\u5728\u6700\u540E\u663E\u793A\u4E00\u4E2A\u5269\u4F59\u503C</td><td>number</td><td>\u2014</td><td>-</td></tr><tr><td>max-bg-color</td><td>\u5269\u4F59\u503C\u7684\u80CC\u666F\u989C\u8272</td><td>string</td><td>\u2014</td><td>black</td></tr><tr><td>props</td><td>data\u5BF9\u8C61\u914D\u7F6E\u9879</td><td>object</td><td>\u2014</td><td>{url: &#39;url&#39;, title: &#39;title&#39;}</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>tip</td><td>\u6ED1\u52A8\u63D0\u793A\u4FE1\u606F\uFF0C\u53C2\u6570\u4E3Adata\u4E2D\u5BF9\u5E94\u7684\u5BF9\u8C61: item</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u56FE\u7247\u5355\u51FB\u4E8B\u4EF6</td><td>data\u4E2D\u5BF9\u5E94\u7684\u5BF9\u8C61</td></tr></tbody></table>',6);function T(a,u,e,l,m,i){const h=b("hb-demo0"),o=b("demo-block"),n=b("hb-demo1"),s=b("right-nav");return w(),j(x,null,[t("section",null,[L,N,P,p(o,{fs:""},{source:c(()=>[p(h)]),highlight:c(()=>[V]),default:c(()=>[$]),_:1}),W,p(o,{fs:""},{source:c(()=>[p(n)]),highlight:c(()=>[Q]),default:c(()=>[O]),_:1}),X]),p(s)],64)}var K=S(z,[["render",T]]);export{K as default};
