var z=Object.defineProperty;var g=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var V=(o,e,d)=>e in o?z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[e]=d,N=(o,e)=>{for(var d in e||(e={}))q.call(e,d)&&V(o,d,e[d]);if(g)for(var d of g(e))G.call(e,d)&&V(o,d,e[d]);return o};import{a0 as C,L as J,W as R,Q as s,a4 as A,a1 as f,ab as Y,a5 as Z,aX as ee,b0 as D}from"./vue.42779483.js";import{H as ue}from"./hongluan-icons.58a96039.js";import{_ as te}from"./index.a95a1468.js";import"./hongluan-business.cf55c6a9.js";import"./highlight.aba4bc0a.js";const le={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:o,createVNode:e,withCtx:d,createTextVNode:i,createElementVNode:a,Fragment:v,openBlock:E,createElementBlock:m}=D,b={class:"m-t-md"},k={class:"m-t-md"},w=i(" \u53EF\u9009\u4EFB\u610F\u8282\u70B9\uFF1A"),T={class:"m-t-md"},P=i(" \u591A\u9009\uFF1A"),S={class:"m-t-md"},U=i(" \u7981\u7528\uFF1A"),j={class:"m-t-md"},x=i(" \u53EF\u6E05\u7A7A\uFF1A"),$={class:"m-t-md"},I=i(" \u53EF\u641C\u7D22\uFF1A"),K={class:"m-t-md"},O=i(" \u6298\u53E0\u591A\u9009\u9879\uFF1A");function H(u,t){const n=o("two-point"),h=o("hl-icon"),B=o("hb-tree-selector"),r=o("hl-switch");return E(),m(v,null,[e(B,{modelValue:u.selectedNodes,"onUpdate:modelValue":t[0]||(t[0]=l=>u.selectedNodes=l),clearable:u.clearable,filterable:u.filterable,"collapse-tags":u.collapseTags,disabled:u.disabled,"tree-props":u.treeProps},{prefix:d(()=>[e(h,null,{default:d(()=>[e(n)]),_:1})]),_:1},8,["modelValue","clearable","filterable","collapse-tags","disabled","tree-props"]),a("div",b,[a("div",k,[w,e(r,{modelValue:u.treeProps.checkStrictly,"onUpdate:modelValue":t[1]||(t[1]=l=>u.treeProps.checkStrictly=l),type:"primary"},null,8,["modelValue"])]),a("div",T,[P,e(r,{modelValue:u.treeProps.showCheckbox,"onUpdate:modelValue":t[2]||(t[2]=l=>u.treeProps.showCheckbox=l),type:"primary",onChange:u.changeValues},null,8,["modelValue","onChange"])]),a("div",S,[U,e(r,{modelValue:u.disabled,"onUpdate:modelValue":t[3]||(t[3]=l=>u.disabled=l),type:"primary"},null,8,["modelValue"])]),a("div",j,[x,e(r,{modelValue:u.clearable,"onUpdate:modelValue":t[4]||(t[4]=l=>u.clearable=l),type:"primary"},null,8,["modelValue"])]),a("div",$,[I,e(r,{modelValue:u.filterable,"onUpdate:modelValue":t[5]||(t[5]=l=>u.filterable=l),type:"primary"},null,8,["modelValue"])]),a("div",K,[O,e(r,{modelValue:u.collapseTags,"onUpdate:modelValue":t[6]||(t[6]=l=>u.collapseTags=l),type:"primary"},null,8,["modelValue"])])])],64)}const{defineComponent:L}=D,{ref:c,reactive:_,nextTick:F}=D,{TwoPoint:M}=ue;return N({render:H},L({setup(u,{expose:t}){t();const n=c("2"),h=(p,X)=>p?X.label.indexOf(p)!==-1:!0,B=c(!0),r=c(!1),l=c(!1),Q=c(!1),W=_({nodeKey:"id",checkStrictly:!0,showCheckbox:!1,filterNodeMethod:h,data:[{label:"\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",id:"1",childrens:[{label:"\u4E4C\u9C81\u6728\u9F50\u5E02",id:"2",childrens:[{label:"\u8FBE\u5742\u57CE\u533A",id:"7",childrens:[]},{label:"\u5934\u5C6F\u6CB3\u533A",id:"8",childrens:[]},{label:"\u4E4C\u9C81\u6728\u9F50\u53BF",id:"9",childrens:[{label:"\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547",id:"8-1",childrens:[]},{label:"\u6D4B\u8BD5\u4E61\u95472",id:"8-2",childrens:[]},{label:"\u6D4B\u8BD5\u4E61\u95473",id:"8-3",childrens:[]}]}]},{label:"\u514B\u62C9\u739B\u4F9D\u5E02",id:"3",disabled:!0,childrens:[{label:"\u514B\u62C9\u739B\u4F9D\u533A",id:"10",disabled:!0,childrens:[]},{label:"\u767D\u78B1\u6EE9\u533A",id:"11",disabled:!0,childrens:[]},{label:"\u72EC\u5C71\u5B50\u533A",id:"12",disabled:!0,childrens:[]}]},{label:"\u5410\u9C81\u756A\u5730\u533A",id:"4",childrens:[]},{label:"\u54C8\u5BC6\u5730\u533A",id:"5",childrens:[]},{label:"\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",id:"6",childrens:[]}]}],props:{children:"childrens",label:"label"}}),y={selectedNodes:n,filterNode:h,clearable:B,disabled:r,filterable:l,collapseTags:Q,treeProps:W,changeValues:p=>{p?(n.value="",F(()=>{n.value=["2"]})):(n.value=[],F(()=>{n.value="2"}))},ref:c,reactive:_,nextTick:F,TwoPoint:M};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}))}()}},de=s("h1",null,"TreeSelector \u6811\u5F62\u9009\u62E9\u5668",-1),oe=s("p",null,"\u4E0B\u62C9\u6811\u5F62\u9009\u62E9\u5668\uFF0C\u652F\u6301\u5355\u9009\u591A\u9009\uFF0C\u7531Selector\u4EE5\u53CATree\u7EC4\u5408\u800C\u6210\u3002",-1),se=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),Z(" \u57FA\u7840\u7528\u6CD5")],-1),ae=s("div",null,[s("p",null,"\u8BBE\u7F6E\u7684\u6811\u6240\u6709\u5C5E\u6027\u90FD\u5C06\u76F4\u63A5\u900F\u4F20\u7ED9\u6811\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u8282\u70B9\uFF0C\u662F\u5426\u5168\u90E8\u5C55\u5F00\u7B49\u5C5E\u6027")],-1),re=s("pre",null,[s("code",{class:"html"},` <template>
  <hb-tree-selector
    v-model="selectedNodes"
    :clearable="clearable"
    :filterable="filterable"
    :collapse-tags="collapseTags"
    :disabled="disabled"
    :tree-props="treeProps"
  >
    <template #prefix>
      <hl-icon><two-point /></hl-icon>
    </template>
  </hb-tree-selector>
  <div class="m-t-md">
    <div class="m-t-md">
      \u53EF\u9009\u4EFB\u610F\u8282\u70B9\uFF1A<hl-switch v-model="treeProps.checkStrictly" type="primary" />
    </div>
    <div class="m-t-md">
      \u591A\u9009\uFF1A<hl-switch v-model="treeProps.showCheckbox" type="primary" @change="changeValues" />
    </div>
    <div class="m-t-md">
      \u7981\u7528\uFF1A<hl-switch v-model="disabled" type="primary" />
    </div>
    <div class="m-t-md">
      \u53EF\u6E05\u7A7A\uFF1A<hl-switch v-model="clearable" type="primary" />
    </div>
    <div class="m-t-md">
      \u53EF\u641C\u7D22\uFF1A<hl-switch v-model="filterable" type="primary" />
    </div>
    <div class="m-t-md">
      \u6298\u53E0\u591A\u9009\u9879\uFF1A<hl-switch v-model="collapseTags" type="primary" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { TwoPoint } from '@hongluan-ui/icons'

const selectedNodes = ref('2')
const filterNode = (value, data) => {
  if (!value) return true
  return data.label.indexOf(value) !== -1
}
const clearable = ref(true)
const disabled = ref(false)
const filterable = ref(false)
const collapseTags = ref(false)
const treeProps = reactive({
  nodeKey: 'id',
  checkStrictly: true,
  showCheckbox: false,
  filterNodeMethod: filterNode,
  data: [
    {
      label: '\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A',
      id: '1',
      childrens: [
        {
          label: '\u4E4C\u9C81\u6728\u9F50\u5E02',
          id: '2',
          childrens: [
            { label: '\u8FBE\u5742\u57CE\u533A', id: '7', childrens: [] },
            { label: '\u5934\u5C6F\u6CB3\u533A', id: '8', childrens: [] },
            {
              label: '\u4E4C\u9C81\u6728\u9F50\u53BF',
              id: '9',
              childrens: [
                { label: '\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547', id: '8-1', childrens: [] },
                { label: '\u6D4B\u8BD5\u4E61\u95472', id: '8-2', childrens: [] },
                { label: '\u6D4B\u8BD5\u4E61\u95473', id: '8-3', childrens: [] },
              ],
            },
          ],
        },
        {
          label: '\u514B\u62C9\u739B\u4F9D\u5E02',
          id: '3',
          disabled: true,
          childrens: [
            {
              label: '\u514B\u62C9\u739B\u4F9D\u533A',
              id: '10',
              disabled: true,
              childrens: [],
            },
            { label: '\u767D\u78B1\u6EE9\u533A', id: '11', disabled: true, childrens: [] },
            { label: '\u72EC\u5C71\u5B50\u533A', id: '12', disabled: true, childrens: [] },
          ],
        },
        { label: '\u5410\u9C81\u756A\u5730\u533A', id: '4', childrens: [] },
        { label: '\u54C8\u5BC6\u5730\u533A', id: '5', childrens: [] },
        { label: '\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE', id: '6', childrens: [] },
      ],
    },
  ],
  props: {
    children: 'childrens',
    label: 'label',
  },
})

const changeValues = val => {
  if (val) {
    selectedNodes.value = ''
    nextTick(() => {
      selectedNodes.value = ['2']
    })
  } else {
    selectedNodes.value = []
    nextTick(() => {
      selectedNodes.value = '2'
    })
  }
}

<\/script>
`)],-1),ie=ee('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model / model-value</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / object / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u7A7A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>placeholder</td><td>-</td><td>string</td><td>\u8BF7\u9009\u62E9</td><td>-</td></tr><tr><td>popper-class</td><td>Poppover\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>poppover\u4F4D\u7F6E\uFF0C\u53C2\u89C1Poppover\u7EC4\u4EF6\u5B9A\u4E49</td><td>string</td><td>\u2014</td><td>bottom</td></tr><tr><td>size</td><td>input\u5927\u5C0F\uFF0C\u53C2\u89C1Input\u7EC4\u4EF6\u5B9A\u4E49</td><td>string</td><td>\u2014</td><td>true</td></tr><tr><td>disabled</td><td>\u662F\u5426\u542F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags</td><td>\u662F\u5426\u6298\u53E0\u591A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tree-props</td><td>\u4E0B\u62C9\u6811\u5C5E\u6027\uFF0C\u53C2\u89C1Tree\u7EC4\u4EF6\u5B9A\u4E49\u3002nodeKey\u4E3A\u5FC5\u586B\u9879</td><td>object</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>\u81EA\u5B9A\u4E49\u591A\u9009tag\u663E\u793A\uFF0C\u53C2\u6570\u4E3A{ tag }</td></tr><tr><td>tree-node</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }</td></tr><tr><td>prefix</td><td>\u81EA\u5B9A\u4E49\u524D\u7F00</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table>',6);function ne(o,e,d,i,a,v){const E=C("hb-demo0"),m=C("demo-block"),b=C("right-nav");return J(),R(Y,null,[s("section",null,[de,oe,se,A(m,{fs:""},{source:f(()=>[A(E)]),highlight:f(()=>[re]),default:f(()=>[ae]),_:1}),ie]),A(b)],64)}var Ce=te(le,[["render",ne]]);export{Ce as default};
