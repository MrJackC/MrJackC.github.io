import{p as M,d as _,s as R}from"./styles-e2b9d258-DCPkh2Dl.js";import{l as d,c,h as w,z as B,u as G,p as D,t as E,o as C,j as A}from"./mermaid.core-CfgcTY0O.js";import{G as z}from"./graph-B7jTlmTl.js";import{r as P}from"./index-9620d214-LgvkI5FZ.js";import"./layout-bRYZFigV.js";import"./app-W9QyTiMU.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./clone-NFiFEhfx.js";import"./edges-5962ec63-BvS-hkbr.js";import"./createText-4a4f35c9-CQvNWSmg.js";import"./line-D-7YhG_7.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";const S=s=>A.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,e,y,a){const t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(i){var o,r;const l=s[i],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};e.setNode(l.id,p),$(l.classes,e,y,a,l.id),d.info("setNode",p)})},$=function(s,e,y,a,t){const i=Object.keys(s);d.info("keys:",i),d.info(s),i.filter(o=>s[o].parent==t).forEach(function(o){var r,l;const n=s[o],p=n.cssClasses.join(" "),f=D(n.styles),m=n.label??n.id,u=0,b={labelStyle:f.labelStyle,shape:"class_box",labelText:S(m),classData:n,rx:u,ry:u,class:p,style:f.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,t)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};e.setNode(n.id,b),t&&e.setParent(n.id,t),d.info("setNode",b)})},F=function(s,e,y,a){d.info(s),s.forEach(function(t,i){var o,r;const l=t,n="",p={labelStyle:"",style:""},f=l.text,m=0,h={labelStyle:p.labelStyle,shape:"note",labelText:S(f),noteData:l,rx:m,ry:m,class:n,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(e.setNode(l.id,h),d.info("setNode",h),!l.class||!(l.class in a))return;const b=y+i,x={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:E(k.curve,C)};e.setEdge(l.id,l.class,x,b)})},H=function(s,e){const y=c().flowchart;let a=0;s.forEach(function(t){var i;a++;const o={classes:"relation",pattern:t.relation.lineType==1?"dashed":"solid",id:`id_${t.id1}_${t.id2}_${a}`,arrowhead:t.type==="arrow_open"?"none":"normal",startLabelRight:t.relationTitle1==="none"?"":t.relationTitle1,endLabelLeft:t.relationTitle2==="none"?"":t.relationTitle2,arrowTypeStart:N(t.relation.type1),arrowTypeEnd:N(t.relation.type2),style:"fill:none",labelStyle:"",curve:E(y==null?void 0:y.curve,C)};if(d.info(o,t),t.style!==void 0){const r=D(t.style);o.style=r.style,o.labelStyle=r.labelStyle}t.text=t.title,t.text===void 0?t.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+t.text+"</span>"):(o.labelType="text",o.label=t.text.replace(A.lineBreakRegex,`
`),t.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),e.setEdge(t.id1,t.id2,o,a)})},V=function(s){k={...k,...s}},W=async function(s,e,y,a){d.info("Drawing class - ",e);const t=c().flowchart??c().class,i=c().securityLevel;d.info("config:",t);const o=(t==null?void 0:t.nodeSpacing)??50,r=(t==null?void 0:t.rankSpacing)??50,l=new z({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),p=a.db.getClasses(),f=a.db.getRelations(),m=a.db.getNotes();d.info(f),q(n,l,e,a),$(p,l,e,a),H(f,l),F(m,l,f.length+1,p);let u;i==="sandbox"&&(u=w("#i"+e));const h=i==="sandbox"?w(u.nodes()[0].contentDocument.body):w("body"),b=h.select(`[id="${e}"]`),x=h.select("#"+e+" g");if(await P(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",e),B.insertTitle(b,"classTitleText",(t==null?void 0:t.titleTopMargin)??5,a.db.getDiagramTitle()),G(l,b,t==null?void 0:t.diagramPadding,t==null?void 0:t.useMaxWidth),!(t!=null&&t.htmlLabels)){const T=i==="sandbox"?u.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const g of I){const L=g.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),g.insertBefore(v,g.firstChild)}}};function N(s){let e;switch(s){case 0:e="aggregation";break;case 1:e="extension";break;case 2:e="composition";break;case 3:e="dependency";break;case 4:e="lollipop";break;default:e="none"}return e}const J={setConf:V,draw:W},nt={parser:M,db:_,renderer:J,styles:R,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,_.clear()}};export{nt as diagram};
