import{_ as h,B as o,f as a,h as e,D as r,z as f,x as t,a2 as x,a3 as g,F as y,K as F,y as _,k as i,u as v,N as D}from"./chunks/framework.5deb65a5.js";const E={name:"TiandituLayerDemo",data(){return{layerOptions:[{label:"矢量底图",layerTypes:["vec"]},{label:"矢量底图+注记",layerTypes:["vec","cva"]},{label:"影像底图",layerTypes:["img"]},{label:"影像底图+注记",layerTypes:["img","cia"]},{label:"地形晕渲",layerTypes:["ter"]},{label:"地形晕渲+注记",layerTypes:["ter","cta"]}],layerIndex:1}}},C={style:{height:"400px"},class:"vw-full vh-full"},T={style:{position:"absolute",top:"5px",left:"5px"}},q=["label","value"];function A(d,p,u,c,n,V){const b=o("x-tianditu-layer"),m=o("x-map");return a(),e("div",C,[r(m,null,{default:f(()=>[t("div",T,[x(t("select",{"onUpdate:modelValue":p[0]||(p[0]=s=>n.layerIndex=s),placeholder:"请选择"},[(a(!0),e(y,null,F(n.layerOptions,(s,l)=>(a(),e("option",{key:s.layerTypes[0]+l,label:s.label,value:l},null,8,q))),128))],512),[[g,n.layerIndex]])]),(a(!0),e(y,null,F(n.layerOptions,(s,l)=>(a(),_(b,{key:s.layerTypes[0]+l,types:s.layerTypes,show:n.layerIndex===l},null,8,["types","show"]))),128))]),_:1})])}const B=h(E,[["render",A]]),S=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map>
      <div style="position:absolute;top:5px;left:5px">
        <select v-model="layerIndex" placeholder="请选择">
          <option
            v-for="(item,index) in layerOptions"
            :key="item.layerTypes[0]+index"
            :label="item.label"
            :value="index"
          ></option>
        </select>
      </div>
      <x-tianditu-layer v-for="(item,index) in layerOptions" :key="item.layerTypes[0]+index" :types="item.layerTypes" :show="layerIndex===index" />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'TiandituLayerDemo',
  data(){
    return {
      layerOptions:[
        {
          label:'矢量底图',
          layerTypes:['vec'],
        },{
          label:'矢量底图+注记',
          layerTypes:['vec','cva'],
        },{
          label:'影像底图',
          layerTypes:['img'],
        },{
          label:'影像底图+注记',
          layerTypes:['img','cia'],
        },{
          label:'地形晕渲',
          layerTypes:['ter'],
        },{
          label:'地形晕渲+注记',
          layerTypes:['ter','cta'],
        },
      ],
      layerIndex:1,
    }
  },
}
<\/script>
`,k=D("",3),w={id:"示例",tabindex:"-1"},P=t("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),I=D("",11),R=JSON.parse('{"title":"天地图图层（TiandituLayer）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/tianditu-layer/index.md"}'),O={name:"api/core/tianditu-layer/index.md"},L=Object.assign(O,{setup(d){return(p,u)=>{const c=o("play");return a(),e("div",null,[k,t("h2",w,[i("示例 "),r(c,{"source-code":v(S)},null,8,["source-code"]),i(),P]),r(B),I])}}});export{R as __pageData,L as default};
