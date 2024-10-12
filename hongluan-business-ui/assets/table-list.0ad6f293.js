var j=Object.defineProperty;var f=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(e,u,t)=>u in e?j(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,v=(e,u)=>{for(var t in u||(u={}))W.call(u,t)&&_(e,t,u[t]);if(f)for(var t of f(u))R.call(u,t)&&_(e,t,u[t]);return e};import{a0 as b,L as z,W as V,Q as o,a4 as C,a1 as w,ab as $,a5 as Q,aX as X,b0 as m}from"./vue.42779483.js";import{_ as M}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.58a96039.js";const O={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:a,Fragment:B,openBlock:D,createElementBlock:c}=m,p=e(" Slot "),E=e(" \u6CA1\u6709\u6570\u636E\u54E6 "),y=e("\u52A0\u8F7D\u72B6\u6001"),T=e("\u7A7A\u6570\u636E"),k=e("\u6062\u590D\u6570\u636E");function x(d,g){const r=u("hb-table-list"),l=u("hl-button"),i=u("hl-group");return D(),c(B,null,[a(r,{loading:d.loading,searchbar:d.searchbar,toolbar:d.toolbar,cols:d.cols,"table-data":d.tableData,selection:!0,pagination:d.pagination,padding:"var(--lg)",onSelectionChange:d.onSelectedRows},{slotTest:t(()=>[p]),empty:t(()=>[E]),_:1},8,["loading","searchbar","toolbar","cols","table-data","pagination","onSelectionChange"]),a(i,{class:"m-t-lg",gap:"var(--md)"},{default:t(()=>[a(l,{onClick:d.setLoading},{default:t(()=>[y]),_:1},8,["onClick"]),a(l,{onClick:d.setEmptyData},{default:t(()=>[T]),_:1},8,["onClick"]),a(l,{onClick:d.resetData},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:N}=m,{ref:n,reactive:s}=m;return v({render:x},N({setup(d,{expose:g}){g();const r=n(!1),l=s({show:!0,searcher:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6",fill:!0},selector:{colCount:"xl:count-4",items:[{type:"select",placeholder:"\u9009\u62E9\u7C7B\u578B",value:"",name:"prop1",clearable:!0,fill:!0,prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{type:"select",placeholder:"\u8BF7\u9009\u62E9",value:"",name:"prop2",clearable:!0,fill:!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{span:"xl:col-span-2",type:"datetimerange",name:"prop5",fill:!0,value:[],"is-range":!0,"range-separator":"-","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"}]}}),i=s({show:!0,showSelectionText:!0,action:{show:!1,showCount:2,actions:[{label:"\u5220\u9664\u6240\u6709",type:"danger",show:!0},{label:"\u6279\u91CF\u8F6C\u79FB"},{label:"\u6279\u91CF\u5BA1\u5B9A",icon:"Star"},{label:"\u6279\u91CF\u4FEE\u6539"},{label:"\u6279\u91CF\u901A\u8FC7"},{label:"\u5176\u4ED6"}]}}),S=n([{colType:"index",label:"#",prop:"",fixedWidth:"60"},{colType:"slot",label:"\u81EA\u5B9A\u4E49\u5217",slotName:"slotTest"},{label:"\u9ED8\u8BA4\u6570\u636E",prop:"prop1"},{colType:"link",label:"link\u7C7B\u578B",prop:"prop2",eventName:"link"},{colType:"icons",label:"icons\u7C7B\u578B",fixedWidth:"100",iconList:[{iconName:"TwoEdit",eventName:"edit",tooltipText:"\u7F16\u8F91"},{iconName:"TwoDel",eventName:"del",showTooltip:!1,tooltipText:"\u5220\u9664"}]}]),h=[{id:1,prop1:"\u6570\u636E1",prop2:"\u6570\u636E1",prop3:"\u6570\u636E1"},{id:2,prop1:"\u6570\u636E2",prop2:"\u6570\u636E2",prop3:"\u6570\u636E2"},{id:3,prop1:"\u6570\u636E3",prop2:"\u6570\u636E3",prop3:"\u6570\u636E3"},{id:4,prop1:"\u6570\u636E4",prop2:"\u6570\u636E4",prop3:"\u6570\u636E4"},{id:5,prop1:"\u6570\u636E5",prop2:"\u6570\u636E5",prop3:"\u6570\u636E5"}],F=n(h),L=s({show:!0,pageSize:10,total:100,currentPage:1}),A={loading:r,searchbar:l,toolbar:i,cols:S,originalData:h,tableData:F,pagination:L,onSelectedRows:P=>{i.action.show=P.length>0},setLoading:()=>{r.value=!0,window.setTimeout(()=>{r.value=!1},2e3)},setEmptyData:()=>{F.value=[]},resetData:()=>{F.value=h},ref:n,reactive:s};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}}))}()}},q=o("h1",null,"TableList \u8868\u683C",-1),G=o("p",null,"\u96C6\u6210\u5206\u9875\u4EE5\u53CA\u5DE5\u5177\u680F\uFF0C\u641C\u7D22\u680F\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),H=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),Q(" \u57FA\u7840\u7528\u6CD5")],-1),I=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-table-list
    :loading="loading"
    :searchbar="searchbar"
    :toolbar="toolbar"
    :cols="cols"
    :table-data="tableData"
    :selection="true"
    :pagination="pagination"
    padding="var(--lg)"
    @selection-change="onSelectedRows"
  >
    <template #slotTest>
      Slot
    </template>
    <template #empty>
      \u6CA1\u6709\u6570\u636E\u54E6
    </template>
  </hb-table-list>
  <hl-group class="m-t-lg" gap="var(--md)">
    <hl-button @click="setLoading">\u52A0\u8F7D\u72B6\u6001</hl-button>
    <hl-button @click="setEmptyData">\u7A7A\u6570\u636E</hl-button>
    <hl-button @click="resetData">\u6062\u590D\u6570\u636E</hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const loading = ref(false)
const searchbar = reactive({
  show: true,
  searcher: {
    placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6',
    fill: true,
  },
  selector: {
    colCount: 'xl:count-4',
    items: [
      {
        type: 'select',
        placeholder: '\u9009\u62E9\u7C7B\u578B',
        value: '',
        name: 'prop1',
        clearable: true,
        fill: true,
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u9A73\u56DE3', code: '3' },
          { name: '\u5DF2\u5BA1\u5B9A4', code: '4' },
        ],
      },
      {
        type: 'select',
        placeholder: '\u8BF7\u9009\u62E9',
        value: '',
        name: 'prop2',
        clearable: true,
        fill: true,
        options: [
          { label: '\u5DF2\u9A73\u56DE3', value: '3' },
          { label: '\u5DF2\u5BA1\u5B9A4', value: '4' },
        ],
      },
      {
        span: 'xl:col-span-2',
        type: 'datetimerange',
        name: 'prop5',
        fill: true,
        value: [],
        'is-range': true,
        'range-separator': '-',
        'start-placeholder': '\u5F00\u59CB\u65F6\u95F4',
        'end-placeholder': '\u7ED3\u675F\u65F6\u95F4',
        'placeholder': '\u9009\u62E9\u65F6\u95F4\u8303\u56F4',
      },
    ],
  },
})

const toolbar = reactive({
  show: true,
  showSelectionText: true,
  action: {
    show: false,
    showCount: 2,
    actions: [
      { label: '\u5220\u9664\u6240\u6709', type: 'danger', show: true },
      { label: '\u6279\u91CF\u8F6C\u79FB' },
      { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'Star' },
      { label: '\u6279\u91CF\u4FEE\u6539' },
      { label: '\u6279\u91CF\u901A\u8FC7' },
      { label: '\u5176\u4ED6' },
    ],
  },
})
const cols = ref([
  {
    colType: 'index',
    label: '#',
    prop: '',
    fixedWidth: '60',
  },
  {
    colType: 'slot',
    label: '\u81EA\u5B9A\u4E49\u5217',
    slotName: 'slotTest',
  },
  {
    label: '\u9ED8\u8BA4\u6570\u636E',
    prop: 'prop1',
  },
  {
    colType: 'link',
    label: 'link\u7C7B\u578B',
    prop: 'prop2',
    eventName: 'link',
  },
  {
    colType: 'icons',
    label: 'icons\u7C7B\u578B',
    fixedWidth: '100',
    iconList: [
      {
        iconName: 'TwoEdit',
        eventName: 'edit',
        tooltipText: '\u7F16\u8F91',
      },
      {
        iconName: 'TwoDel',
        eventName: 'del',
        showTooltip: false,
        tooltipText: '\u5220\u9664',
      },
    ],
  },
])
const originalData = [
  {
    id: 1,
    prop1: '\u6570\u636E1',
    prop2: '\u6570\u636E1',
    prop3: '\u6570\u636E1',
  },
  {
    id: 2,
    prop1: '\u6570\u636E2',
    prop2: '\u6570\u636E2',
    prop3: '\u6570\u636E2',
  },
  {
    id: 3,
    prop1: '\u6570\u636E3',
    prop2: '\u6570\u636E3',
    prop3: '\u6570\u636E3',
  },
  {
    id: 4,
    prop1: '\u6570\u636E4',
    prop2: '\u6570\u636E4',
    prop3: '\u6570\u636E4',
  },
  {
    id: 5,
    prop1: '\u6570\u636E5',
    prop2: '\u6570\u636E5',
    prop3: '\u6570\u636E5',
  },
]
const tableData = ref(originalData)
const pagination = reactive({
  show: true,
  pageSize: 10,
  total: 100,
  currentPage: 1,
})

const onSelectedRows = rows => {
  toolbar.action.show = rows.length > 0
}
const setLoading = () => {
  loading.value = true
  window.setTimeout(() => {
    loading.value = false
  }, 2000)
}
const setEmptyData = () => {
  tableData.value = []
}
const resetData = () => {
  tableData.value = originalData
}

<\/script>
`)],-1),J=X('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max-height</td><td>\u6700\u5927\u9AD8</td><td>string / number</td><td>--</td><td>auto</td></tr><tr><td>default-sort</td><td>\u53C2\u8003hongluan ui</td><td>object</td><td>--</td><td>{}</td></tr><tr><td>clickable-row</td><td>\u6574\u884C\u662F\u5426\u53EF\u70B9\u51FB</td><td>boolean</td><td>--</td><td>true</td></tr><tr><td>object-span-method</td><td>\u53C2\u8003hongluan ui</td><td>function</td><td>--</td><td>--</td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u63D0\u793A</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>selection</td><td>\u662F\u5426\u663E\u793A\u591A\u9009\u5217</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>selection-header</td><td>\u591A\u9009\u5217\u8868\u5934</td><td>string / boolean</td><td>--</td><td>false</td></tr><tr><td>selectable</td><td>\u884C\u662F\u5426\u53EF\u9009\u62E9\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A\uFF1A(row, index)</td><td>function</td><td>--</td><td>--</td></tr><tr><td>cols</td><td>\u5217\u5B9A\u4E49,\u53C2\u89C1\u4E0B\u65B9\u8BE6\u7EC6\u8BF4\u660E</td><td>array</td><td>--</td><td>--</td></tr><tr><td>table-data</td><td>\u8868\u683C\u6570\u636E</td><td>array</td><td>--</td><td>[]</td></tr><tr><td>pagination</td><td>\u5206\u9875\u6570\u636E</td><td>object</td><td>--</td><td>{total: 0, pageSize: 10, currentPage: 1}</td></tr><tr><td>searchbar</td><td>\u641C\u7D22\u680F\u53C2\u6570\uFF0C\u53C2\u89C1\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6</td><td>object</td><td>--</td><td>{ searcher: { placeholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6&#39; } }</td></tr><tr><td>toolbar</td><td>\u5DE5\u5177\u680F\u53C2\u6570\uFF0Caction\u5C5E\u6027\u53C2\u89C1\u8868\u683C\u5DE5\u5177\u680F\u7EC4\u4EF6</td><td>object { showSelectionText: boolean, action: object, showColConfig: boolean }</td><td>--</td><td>{}</td></tr></tbody></table><h2 id="col-attributes"><a class="header-anchor" href="#col-attributes"></a> Col Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>colType</td><td>\u5217\u7C7B\u578B</td><td>string</td><td>index,field,link,slot,icons,links</td><td>field</td></tr><tr><td>label</td><td>\u8868\u5934</td><td>string</td><td>--</td><td>--</td></tr><tr><td>prop</td><td>\u5C5E\u6027</td><td>string</td><td>--</td><td>--</td></tr><tr><td>minWidth</td><td>\u6700\u5C0F\u5BBD</td><td>string</td><td>--</td><td>--</td></tr><tr><td>fixedWidth/width</td><td>\u5BBD\u5EA6</td><td>string</td><td>--</td><td>--</td></tr><tr><td>className</td><td>\u7C7B\u540D\u79F0</td><td>string</td><td>--</td><td>--</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>--</td><td>left</td></tr><tr><td>tooltip</td><td>\u662F\u5426\u663E\u793A\u63D0\u793A\u6846</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>sortable</td><td>\u662F\u5426\u53EF\u6392\u5E8F</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>formatter</td><td>\u683C\u5F0F\u5316\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>--</td><td>--</td></tr><tr><td>slotName</td><td>colType\u4E3Aslot\u65F6\u5019\u5B9A\u4E49\u7684slot\u540D\u79F0</td><td>string</td><td>--</td><td>--</td></tr><tr><td>iconList</td><td>colType\u4E3Aicons\u65F6\u5019\u5B9A\u4E49\u7684icon\u6570\u636E</td><td>array { show:\u662F\u5426\u663E\u793A(Boolean/Function)\uFF0CtooltipText:\u63D0\u793A\u6587\u5B57\uFF0CeventName:\u70B9\u51FBemit\u7684\u4E8B\u4EF6\u540D\u79F0\uFF0CiconName: icon\u7684\u540D\u79F0\uFF0C\u53C2\u89C1hongluan ui icon\u6587\u6863 }</td><td>--</td><td>--</td></tr><tr><td>linkList</td><td>colType\u4E3Alinks\u65F6\u5019\u5B9A\u4E49\u7684link\u6570\u636E</td><td>array{ show:\u662F\u5426\u663E\u793A(Boolean/Function)\uFF0Clabel:\u94FE\u63A5\u540D\u79F0\uFF0CeventName:\u70B9\u51FBemit\u7684\u4E8B\u4EF6\u540D\u79F0 }</td><td>--</td><td>--</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleAllSelection</td><td>\u5168\u9009\u5207\u6362</td><td>--</td></tr><tr><td>clearSelection</td><td>\u6E05\u7A7A\u9009\u62E9</td><td>--</td></tr><tr><td>toggleRowSelection</td><td>\u884C\u9009\u62E9\u5207\u6362</td><td>row\u6570\u636E</td></tr><tr><td>proxy</td><td>\u8C03\u7528\u8868\u683C\u5176\u4ED6\u65B9\u6CD5</td><td>funcName\uFF1A\u65B9\u6CD5\u540D\u79F0\uFF0Carg1,arg2,...argN: \u65B9\u6CD5\u53C2\u6570</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u63CF\u8FF0</td></tr><tr><td>searchbar</td><td>\u81EA\u5B9A\u4E49 searchbar</td></tr><tr><td>searchbar-prefix</td><td>\u81EA\u5B9A\u4E49 searchbar \u524D\u7F6E\u63D2\u69FD</td></tr><tr><td>searchbar-suffix</td><td>\u81EA\u5B9A\u4E49 searchbar \u540E\u7F6E\u63D2\u69FD</td></tr><tr><td>toolbar</td><td>\u81EA\u5B9A\u4E49toolbar</td></tr><tr><td>toolbar-extra-after</td><td>\u81EA\u5B9A\u4E49toolbar\u989D\u5916\u64CD\u4F5C\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar</td></tr><tr><td>toolbar-extra-before</td><td>\u81EA\u5B9A\u4E49toolbar\u989D\u5916\u64CD\u4F5C\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar</td></tr><tr><td>pagination</td><td>\u81EA\u5B9A\u4E49pagination</td></tr><tr><td>empty</td><td>\u81EA\u5B9A\u4E49\u7A7A\u6570\u636E\u663E\u793A</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>selection-change</td><td>\u9009\u4E2D\u4E8B\u4EF6</td><td>\u8868\u683C\u9009\u4E2D\u884C</td></tr><tr><td>cell-mouse-enter</td><td>\u9F20\u6807\u79FB\u8FDB\u4E8B\u4EF6</td><td>--</td></tr><tr><td>cell-mouse-leave</td><td>\u9F20\u6807\u79FB\u51FA\u4E8B\u4EF6</td><td>--</td></tr><tr><td>cell-click</td><td>\u81EA\u5B9A\u4E49cell-click</td><td>\u53C2\u6570row\uFF0C\u53EF\u4EE5\u901A\u8FC7row.eventName\u8FDB\u884C\u533A\u5206\u54EA\u4E2A\u70B9\u51FB\u53D1\u751F\uFF0C\u6574\u884C\u70B9\u51FB\u65F6\uFF0CeventName\u4E3Adetail</td></tr><tr><td>searchbar-change</td><td>\u641C\u7D22\u6761\u4EF6\u6539\u53D8\u4E8B\u4EF6</td><td>urlParams, mapParams, originalParams\uFF0C\u53C2\u89C1\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6</td></tr><tr><td>current-change</td><td>\u9875\u6570\u6539\u53D8\u4E8B\u4EF6</td><td>currentPage</td></tr><tr><td>size-change</td><td>\u9875\u6570\u53D1\u751F\u53D8\u66F4\u4E8B\u4EF6</td><td>size</td></tr></tbody></table>',10);function K(e,u,t,a,B,D){const c=b("hb-demo0"),p=b("demo-block"),E=b("right-nav");return z(),V($,null,[o("section",null,[q,G,H,C(p,{fs:""},{source:w(()=>[C(c)]),highlight:w(()=>[I]),_:1}),J]),C(E)],64)}var nt=M(O,[["render",K]]);export{nt as default};
