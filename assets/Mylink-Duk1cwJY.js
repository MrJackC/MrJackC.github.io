import{g as d,_ as k,o as n,c as o,F as m,h as u,f,n as h,b as c,t as _}from"./app-4x2aIoqi.js";const v=d({__name:"Mylink",props:{type:String,links:Object},setup(l,{expose:i}){i();const t=l;let s;console.log(t.links),s=t.links;const a={props:t,get linkDatas(){return s},set linkDatas(e){s=e},GetColorClassName:e=>`project${e%9}`};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),g={class:"vp-project-panel"},C=["href"],j=["src"],y={class:"vp-project-name"},b={class:"vp-project-desc"};function D(l,i,t,s,p,a){return n(),o("div",g,[s.linkDatas.length>0?(n(!0),o(m,{key:0},u(s.linkDatas,(e,r)=>(n(),o("a",{key:r,class:h(["item vp-project-card",s.GetColorClassName(r)]),href:e.link,target:"_blank"},[c("img",{class:"vp-project-image",src:e.icon,alt:"",onerror:'this.onerror=null,this.src=this.srcset="/assets/avatar.webp"'},null,8,j),c("div",y,_(e.name),1),c("div",b,_(e.desc),1)],10,C))),128)):f("v-if",!0)])}const N=k(v,[["render",D],["__scopeId","data-v-83f21a4e"],["__file","Mylink.vue"]]);export{N as M};
