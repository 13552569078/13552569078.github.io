import{F as g,G as x}from"./hongluan.a075e642.js";import{_ as $,a as B,n as y}from"./index.3e39e2d9.js";import{I as o,L as i,H as h,P as s,a as T,X as n}from"./vue.8a077a47.js";import"./highlight.171c852c.js";import"./hongluan-icons.286a55ba.js";const t=g();t.$off=t.off;t.$on=t.on;t.$emit=t.emit;const w={data(){return{lang:this.$route.meta.lang,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)},navsData(){return this.$route.path.match(/guide|changelog/)?B:y}},watch:{"$route.path"(){}},created(){t.$on("nav-fade",e=>{this.navFaded=e})},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".scrollbar-wrap"),this.throttledScrollHandler=x(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),document.body.classList.add("is-component"),this.addContentObserver()},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler),this.observer.disconnect()},methods:{addContentObserver(){this.observer=new MutationObserver((e,r)=>{for(const l of e)l.type==="childList"&&(this.renderAnchorHref(),this.goAnchor())}),this.observer.observe(document.querySelector(".doc-content"),{childList:!0})},renderAnchorHref(){if(/changelog/g.test(location.href))return;const e=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),r=location.href.split("#").splice(0,2).join("#");[].slice.call(e).forEach(l=>{const a=l.getAttribute("href");a.indexOf("#")===0&&(l.href=r+a)})},goAnchor(){if(location.href.match(/#/g).length>1){const e=location.href.match(/#[^#]+$/g);if(!e)return;const r=document.querySelector(e[0]);if(!r)return;setTimeout(()=>{this.componentScrollBox.scrollTop=r.offsetTop},50)}},handleScroll(){const e=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>e&&(this.showHeader=this.scrollTop>e),e===0&&(this.showHeader=!0),this.navFaded||t.$emit("fade-nav"),this.scrollTop=e}}};function H(e,r,l,a,c,d){const m=o("main-header"),u=o("side-nav"),f=o("hl-scrollbar"),p=o("hl-aside"),_=o("router-view"),v=o("hl-main"),b=o("hl-container"),S=o("hl-layout");return i(),h(S,{boxed:!0,"fixed-aside":!0,"fixed-header":!0,"fixed-sub-header":!1,"full-header":!0,"full-sub-header":!1},{default:s(()=>[c.lang!=="play"?(i(),h(m,{key:0})):T("",!0),n(b,null,{default:s(()=>[n(p,null,{default:s(()=>[n(f,{ref:"componentScrollBar"},{default:s(()=>[n(u,{data:d.navsData[c.lang],base:`/${c.lang}`},null,8,["data","base"])]),_:1},512)]),_:1}),n(v,{class:"doc-content"},{default:s(()=>[n(_)]),_:1})]),_:1})]),_:1})}var O=$(w,[["render",H]]);export{O as default};
