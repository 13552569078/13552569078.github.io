import{_ as b,B as p,f as D,h as y,D as l,z as o,x as n,k as e,u as h,N as m}from"./chunks/framework.5deb65a5.js";const f={name:"PopupDemo",data(){return{showCustomPopup:!0,showDefaultPopup:!0}}},x={style:{height:"400px"},class:"vw-full vh-full"},g=n("div",{style:{width:"100px",height:"100px",background:"#81adb0d9"}},[n("p",null,"自定义Popup")],-1);function E(i,s,F,r,a,v){const u=p("x-tianditu-layer"),c=p("x-map-popup"),d=p("x-map");return D(),y("div",x,[l(d,{zoom:14,pitch:40},{default:o(()=>[n("button",{style:{position:"absolute",top:"5px",left:"5px"},onClick:s[0]||(s[0]=t=>{a.showCustomPopup=!0,a.showDefaultPopup=!0})}," 显示弹窗 "),l(u,{types:["img"]}),l(c,{show:a.showCustomPopup,"onUpdate:show":s[1]||(s[1]=t=>a.showCustomPopup=t),coordinates:[116.388,39.91266],anchor:"bottom"},{default:o(()=>[g]),_:1},8,["show"]),l(c,{show:a.showDefaultPopup,"onUpdate:show":s[2]||(s[2]=t=>a.showDefaultPopup=t),coordinates:[116.4,39.91266],"hide-on-click":!1},{content:o(()=>[e(" 默认Popup ")]),_:1},8,["show"])]),_:1})])}const B=b(f,[["render",E]]),C=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :zoom="14" :pitch="40">
      <button
        style="position:absolute;top:5px;left:5px"
        @click="
          showCustomPopup = true;
          showDefaultPopup = true;
        "
      >
        显示弹窗
      </button>
      <x-tianditu-layer :types="['img']" />
      <x-map-popup
        v-model:show="showCustomPopup"
        :coordinates="[116.388, 39.91266]"
        anchor="bottom"
      >
        <div style="width:100px;height:100px;background:#81adb0d9;">
          <p>自定义Popup</p>
        </div>
      </x-map-popup>

      <x-map-popup
        v-model:show="showDefaultPopup"
        :coordinates="[116.40, 39.91266]"
        :hide-on-click="false"
      >
        <template #content>
          默认Popup
        </template>
      </x-map-popup>
    </x-map>
  </div>
</template>

<script>
export default {
  name: 'PopupDemo',
  data() {
    return { showCustomPopup: true, showDefaultPopup: true }
  },
}
<\/script>
`,_=n("h1",{id:"气泡弹窗-mappopup",tabindex:"-1"},[e("气泡弹窗（MapPopup） "),n("a",{class:"header-anchor",href:"#气泡弹窗-mappopup","aria-label":'Permalink to "气泡弹窗（MapPopup）"'},"​")],-1),P={id:"示例",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),w=m("",11),S=JSON.parse('{"title":"气泡弹窗（MapPopup）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/map-popup/index.md"}'),q={name:"api/core/map-popup/index.md"},T=Object.assign(q,{setup(i){return(s,F)=>{const r=p("play");return D(),y("div",null,[_,n("h2",P,[e("示例 "),l(r,{"source-code":h(C)},null,8,["source-code"]),e(),A]),l(B),w])}}});export{S as __pageData,T as default};
