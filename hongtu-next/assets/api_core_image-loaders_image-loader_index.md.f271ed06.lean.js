import{_ as b,B as a,f as r,h as F,D as n,z as d,x as l,k as e,u as m,N as h}from"./chunks/framework.5deb65a5.js";const g={name:"ImageLoaderDemo",data(){return{tiandituTypes:["vec","cia"],images:[{name:"pulsing-dot-1",type:"function",functionName:"drawDynamicCircle",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-2",type:"function",functionName:"drawStaticCircle",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-3",type:"function",functionName:"drawDynamicGradientCircle",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-4",type:"function",functionName:"drawDynamicHeart",functionProps:{radius:50,color:"#F34A4A"}},{name:"pulsing-dot-5",type:"custom",functionName:A}],symbolDataSource:[{coordinates:[115.124368,29.216049],properties:{icon:"pulsing-dot-1"}},{coordinates:[115.125368,29.218049],properties:{icon:"pulsing-dot-2"}},{coordinates:[115.126368,29.219049],properties:{icon:"pulsing-dot-3"}},{coordinates:[115.128368,29.216049],properties:{icon:"pulsing-dot-4"}},{coordinates:[115.134368,29.216049],properties:{icon:"pulsing-dot-5"}}]}}};function A(p){return console.log("createRectIcon",p),{width:50,height:50,data:new Uint8Array(50*50*4),onAdd:function(){let s=document.createElement("canvas");s.width=this.width,s.height=this.height,this.context=s.getContext("2d")},render:function(){const s=this.context;return s.clearRect(0,0,this.width,this.height),s.rect(0,0,this.width,this.height),s.fillStyle="#f00",s.strokeStyle="blue",s.lineWidth=5,s.fill(),s.stroke(),this.data=s.getImageData(0,0,this.width,this.height).data,p.triggerRepaint(),!0}}}const C={style:{height:"400px"},class:"vw-full vh-full"};function E(p,t,s,c,o,q){const y=a("x-tianditu-layer"),D=a("x-image-loader"),i=a("x-symbol-layer"),u=a("x-map");return r(),F("div",C,[n(u,{center:[115.128368,29.216049],zoom:15},{default:d(()=>[n(y,{types:o.tiandituTypes},null,8,["types"]),n(D,{images:o.images},null,8,["images"]),n(i,{id:"symbol",data:o.symbolDataSource,"icon-image-field":"icon","icon-rotation-alignment":"map","icon-allow-overlap":"","text-allow-overlap":""},null,8,["data"])]),_:1})])}const f=b(g,[["render",E]]),B=`<template>
  <div style="height:400px" class="vw-full vh-full">
    <x-map :center="[115.128368, 29.216049]" :zoom="15">
      <x-tianditu-layer :types="tiandituTypes" />
      <x-image-loader :images="images" />
      <x-symbol-layer
        id="symbol"
        :data="symbolDataSource"
        icon-image-field="icon"
        icon-rotation-alignment="map"
        icon-allow-overlap
        text-allow-overlap
      />
    </x-map>
  </div>
</template>

<script>
export default {
  name:'ImageLoaderDemo',
  data() {
    return {
      tiandituTypes: ['vec', 'cia'],
      images: [
        {
          name: 'pulsing-dot-1',
          type: 'function',
          functionName:'drawDynamicCircle',
          functionProps: {
            radius: 50,
            color: '#F34A4A',
          },
        },
        {
          name: 'pulsing-dot-2',
          type: 'function',
          functionName:'drawStaticCircle',
          functionProps: {
            radius: 50,
            color: '#F34A4A',
          },
        },
        {
          name: 'pulsing-dot-3',
          type: 'function',
          functionName:'drawDynamicGradientCircle',
          functionProps: {
            radius: 50,
            color: '#F34A4A',
          },
        },
        {
          name: 'pulsing-dot-4',
          type: 'function',
          functionName:'drawDynamicHeart',
          functionProps: {
            radius: 50,
            color: '#F34A4A',
          },
        },
        {
          name: 'pulsing-dot-5',
          type: 'custom',
          functionName: createRectIcon,
        },
      ],
      symbolDataSource: [{
        coordinates: [115.124368, 29.216049],
        properties: {
          icon: 'pulsing-dot-1',
        },
      }, {
        coordinates: [115.125368, 29.218049],
        properties: {
          icon: 'pulsing-dot-2',
        },
      }, {
        coordinates: [115.126368, 29.219049],
        properties: {
          icon: 'pulsing-dot-3',
        },
      }, {
        coordinates: [115.128368, 29.216049],
        properties: {
          icon: 'pulsing-dot-4',
        },
      }, {
        coordinates: [115.134368, 29.216049],
        properties: {
          icon: 'pulsing-dot-5',
        },
      }],
    }
  },
}

function createRectIcon(map) {
  const size = 50
  console.log('createRectIcon', map)
  return {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    onAdd: function () {
      let canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height
      this.context = canvas.getContext('2d')
    },

    render: function () {

      const context = this.context

      context.clearRect(0, 0, this.width, this.height)
      context.rect(0, 0, this.width, this.height)
      context.fillStyle = '#f00'
      context.strokeStyle = 'blue'
      context.lineWidth = 5
      context.fill()
      context.stroke()

      this.data = context.getImageData(0, 0, this.width, this.height).data
      // console.log('this.data.....', this.data)
      map.triggerRepaint()

      return true
    },
  }
}
<\/script>
`,x=l("h1",{id:"图片加载器-imageloader",tabindex:"-1"},[e("图片加载器（ImageLoader） "),l("a",{class:"header-anchor",href:"#图片加载器-imageloader","aria-label":'Permalink to "图片加载器（ImageLoader）"'},"​")],-1),_=l("p",null,"ImageLoader 提供预加载图标(icon)、生成自定义图片",-1),w={id:"示例",tabindex:"-1"},v=l("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例 <play :source-code="DemoSource" />"'},"​",-1),P=h("",13),k=JSON.parse('{"title":"图片加载器（ImageLoader）","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/image-loaders/image-loader/index.md"}'),S={name:"api/core/image-loaders/image-loader/index.md"},z=Object.assign(S,{setup(p){return(t,s)=>{const c=a("play");return r(),F("div",null,[x,_,l("h2",w,[e("示例 "),n(c,{"source-code":m(B)},null,8,["source-code"]),e(),v]),n(f),P])}}});export{k as __pageData,z as default};
