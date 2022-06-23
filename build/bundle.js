var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,i){if(t){const o=s(t,e,n,i);return t[0](o)}}function s(t,e,n,i){return t[1]&&i?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](i(e))):n.ctx}function l(t,e,n,i){if(t[2]&&i){const o=t[2](i(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let i=0;i<n;i+=1)t[i]=e.dirty[i]|o[i];return t}return e.dirty|o}return e.dirty}function c(t,e,n,i,o,r){if(o){const a=s(e,n,i,r);t.p(a,o)}}function d(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function u(t){return null==t?"":t}function h(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function x(){return g("")}function w(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n,i){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function v(t,e,n){t.classList[n?"add":"remove"](e)}let z;function E(t){z=t}function j(){const t=function(){if(!z)throw new Error("Function called outside component initialization");return z}();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const o=function(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}(e,n);i.slice().forEach((e=>{e.call(t,o)}))}}}function B(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const _=[],A=[],M=[],N=[],T=Promise.resolve();let S=!1;function C(t){M.push(t)}const P=new Set;let q=0;function D(){const t=z;do{for(;q<_.length;){const t=_[q];q++,E(t),I(t.$$)}for(E(null),_.length=0,q=0;A.length;)A.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];P.has(e)||(P.add(e),e())}M.length=0}while(_.length);for(;N.length;)N.pop()();S=!1,P.clear(),E(t)}function I(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const R=new Set;let L;function O(){L={r:0,c:[],p:L}}function Y(){L.r||i(L.c),L=L.p}function H(t,e){t&&t.i&&(R.delete(t),t.i(e))}function U(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),L.c.push((()=>{R.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function X(t){t&&t.c()}function F(t,n,r,a){const{fragment:s,on_mount:l,on_destroy:c,after_update:d}=t.$$;s&&s.m(n,r),a||C((()=>{const n=l.map(e).filter(o);c?c.push(...n):i(n),t.$$.on_mount=[]})),d.forEach(C)}function J(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(_.push(t),S||(S=!0,T.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,o,r,a,s,l,c,d=[-1]){const u=z;E(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(u?u.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||u.$$.root};c&&c(h.root);let m=!1;if(h.ctx=r?r(e,o.props||{},((t,n,...i)=>{const o=i.length?i[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&K(e,t)),n})):[],h.update(),m=!0,i(h.before_update),h.fragment=!!a&&a(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();o.intro&&H(e.$$.fragment),F(e,o.target,o.anchor,o.customElement),D()}E(u)}class G{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(e){let n,i,o,r,a,s,l,c,d,u,p;return{c(){n=$("svg"),i=$("rect"),o=$("text"),r=g("twitch.tv/danirod_\n  "),a=$("text"),s=g(e[0]),l=$("g"),c=$("g"),d=$("image"),u=$("image"),p=$("image"),y(i,"width","100%"),y(i,"height","100%"),y(i,"fill","black"),y(o,"font-weight","bold"),y(o,"x","10"),y(o,"y","15"),y(o,"fill","white"),y(o,"dominant-baseline","central"),y(o,"text-anchor","left"),y(a,"class","clock svelte-g2qel1"),y(a,"font-weight","bold"),y(a,"x","50%"),y(a,"y","15"),y(a,"fill","white"),y(a,"dominant-baseline","central"),y(a,"text-anchor","middle"),y(d,"href","adwaita/network-wireless-symbolic.svg"),y(d,"fill","white"),y(d,"x","0"),y(d,"width","15"),y(d,"height","15"),y(u,"href","adwaita/audio-volume-high-symbolic.svg"),y(u,"fill","white"),y(u,"x","25"),y(u,"width","15"),y(u,"height","15"),y(p,"href","adwaita/system-shutdown-symbolic.svg"),y(p,"fill","white"),y(p,"x","50"),y(p,"width","15"),y(p,"height","15"),y(c,"class","symbolicsInner"),y(c,"transform","translate(-75,0)"),y(l,"class","symbolics svelte-g2qel1"),y(n,"width","100%"),y(n,"height","30"),y(n,"x","0"),y(n,"y","0")},m(t,e){m(t,n,e),h(n,i),h(n,o),h(o,r),h(n,a),h(a,s),h(n,l),h(l,c),h(c,d),h(c,u),h(c,p)},p(t,[e]){1&e&&b(s,t[0])},i:t,o:t,d(t){t&&f(n)}}}function W(){return(new Date).toLocaleString("es-ES")}function Z(t,e,n){let i,o=W();return t.$$.update=()=>{2&t.$$.dirty&&(clearInterval(i),n(1,i=setInterval((()=>{n(0,o=W())}),1e3)))},[o,i]}class tt extends G{constructor(t){super(),V(this,t,Z,Q,r,{})}}function et(t){let e,n,i,o,r,s;const u=t[4].default,p=a(u,t,t[3],null);return r=new tt({}),{c(){e=$("svg"),n=$("text"),i=g("Bad Script"),o=$("rect"),p&&p.c(),X(r.$$.fragment),y(n,"font-family","Bad Script"),y(n,"x","-200%"),y(n,"y","-200%"),y(n,"font-size","1"),y(o,"fill",t[2]),y(o,"x","0"),y(o,"y","0"),y(o,"height","100%"),y(o,"width","100%"),y(e,"class","desktop"),y(e,"x","0"),y(e,"y","0"),y(e,"width",t[0]),y(e,"height",t[1])},m(t,a){m(t,e,a),h(e,n),h(n,i),h(e,o),p&&p.m(e,null),F(r,e,null),s=!0},p(t,[n]){(!s||4&n)&&y(o,"fill",t[2]),p&&p.p&&(!s||8&n)&&c(p,u,t,t[3],s?l(u,t[3],n,null):d(t[3]),null),(!s||1&n)&&y(e,"width",t[0]),(!s||2&n)&&y(e,"height",t[1])},i(t){s||(H(p,t),H(r.$$.fragment,t),s=!0)},o(t){U(p,t),U(r.$$.fragment,t),s=!1},d(t){t&&f(e),p&&p.d(t),J(r)}}}function nt(t,e,n){let{$$slots:i={},$$scope:o}=e,{width:r,height:a}=e,{background:s}=e;return t.$$set=t=>{"width"in t&&n(0,r=t.width),"height"in t&&n(1,a=t.height),"background"in t&&n(2,s=t.background),"$$scope"in t&&n(3,o=t.$$scope)},[r,a,s,o,i]}class it extends G{constructor(t){super(),V(this,t,nt,et,r,{width:0,height:1,background:2})}}function ot(t){let e;const n=t[9].default,i=a(n,t,t[8],null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,o){i&&i.p&&(!e||256&o)&&c(i,n,t,t[8],e?l(n,t[8],o,null):d(t[8]),null)},i(t){e||(H(i,t),e=!0)},o(t){U(i,t),e=!1},d(t){i&&i.d(t)}}}function rt(t){let e,n,i,o,r,a,s,l,c,d,p,x,k,v,z,E,j,B,_=t[6]&&ot(t);return{c(){e=$("svg"),n=$("mask"),i=$("rect"),o=$("rect"),r=$("g"),a=$("rect"),s=$("svg"),_&&_.c(),l=$("g"),c=$("rect"),d=$("text"),p=g(t[5]),x=$("g"),k=$("image"),v=$("line"),y(i,"x","0"),y(i,"y","0"),y(i,"width","100%"),y(i,"height","100%"),y(i,"fill","black"),y(o,"x","0"),y(o,"y","0"),y(o,"width","100%"),y(o,"height","100%"),y(o,"rx","8"),y(o,"ry","8"),y(o,"fill","white"),y(n,"id",`${t[7]}_mask`),y(a,"height","100%"),y(a,"width","100%"),y(a,"fill","white"),y(s,"class","mainHost"),y(s,"width","100%"),y(s,"height","100%"),y(s,"x","0"),y(s,"y","0"),y(c,"class","titleBarBackground svelte-104z6lu"),y(c,"x","0"),y(c,"y","0"),y(c,"width","100%"),y(c,"height","40"),y(d,"x","50%"),y(d,"y","20"),y(d,"class","titleText svelte-104z6lu"),y(k,"width","20"),y(k,"height","20"),y(k,"x","-30"),y(k,"y","10"),y(k,"href","adwaita/cross-symbolic.svg"),y(x,"class","closeButtonContainer svelte-104z6lu"),y(v,"x1","0"),y(v,"y1","40"),y(v,"x2","100%"),y(v,"y2","40"),y(v,"stroke","#00000030"),y(v,"stroke-width","0.5"),y(l,"class","titleBar"),y(r,"mask",`url(#${t[7]}_mask)`),y(e,"class",z=u("window "+(t[0]?" hide":""))+" svelte-104z6lu"),y(e,"width",t[3]),y(e,"height",t[4]),y(e,"x",t[1]),y(e,"y",t[2])},m(u,f){m(u,e,f),h(e,n),h(n,i),h(n,o),h(e,r),h(r,a),h(r,s),_&&_.m(s,null),h(r,l),h(l,c),h(l,d),h(d,p),h(l,x),h(x,k),h(l,v),E=!0,j||(B=w(e,"animationend",t[10]),j=!0)},p(t,[n]){t[6]?_?(_.p(t,n),64&n&&H(_,1)):(_=ot(t),_.c(),H(_,1),_.m(s,null)):_&&(O(),U(_,1,1,(()=>{_=null})),Y()),(!E||32&n)&&b(p,t[5]),(!E||1&n&&z!==(z=u("window "+(t[0]?" hide":""))+" svelte-104z6lu"))&&y(e,"class",z),(!E||8&n)&&y(e,"width",t[3]),(!E||16&n)&&y(e,"height",t[4]),(!E||2&n)&&y(e,"x",t[1]),(!E||4&n)&&y(e,"y",t[2])},i(t){E||(H(_),E=!0)},o(t){U(_),E=!1},d(t){t&&f(e),_&&_.d(),j=!1,B()}}}function at(t,e,n){let{$$slots:i={},$$scope:o}=e,{hide:r,x:a,y:s,width:l,height:c}=e,{title:d}=e,u=!1,h=Date.now()+""+Math.random();return t.$$set=t=>{"hide"in t&&n(0,r=t.hide),"x"in t&&n(1,a=t.x),"y"in t&&n(2,s=t.y),"width"in t&&n(3,l=t.width),"height"in t&&n(4,c=t.height),"title"in t&&n(5,d=t.title),"$$scope"in t&&n(8,o=t.$$scope)},[r,a,s,l,c,d,u,h,o,i,()=>n(6,u=!0)]}class st extends G{constructor(t){super(),V(this,t,at,rt,r,{hide:0,x:1,y:2,width:3,height:4,title:5})}}function lt(e){let n,i,o,r,a,s;return{c(){n=$("svg"),i=$("image"),y(i,"style",o=`--fly-from: ${e[2]}; --fly-to: ${e[3]}`),y(i,"class",r=u(e[4])+" svelte-jkdww3"),y(i,"href","adwaita/left_ptr.png"),y(i,"x","0"),y(i,"y","0"),y(i,"width","48"),y(i,"height","48"),y(n,"class","svg svelte-jkdww3"),y(n,"x",e[0]),y(n,"y",e[1]),y(n,"width","48"),y(n,"height","48")},m(t,o){m(t,n,o),h(n,i),a||(s=w(i,"animationend",e[5]),a=!0)},p(t,[e]){12&e&&o!==(o=`--fly-from: ${t[2]}; --fly-to: ${t[3]}`)&&y(i,"style",o),16&e&&r!==(r=u(t[4])+" svelte-jkdww3")&&y(i,"class",r),1&e&&y(n,"x",t[0]),2&e&&y(n,"y",t[1])},i:t,o:t,d(t){t&&f(n),a=!1,s()}}}function ct(t,e,n){let{x:i,y:o}=e,{from:r,to:a}=e,s="animate2";const l={animation1:"animate2",animation2:"animate3",animation3:"animate4",animation4:"animate5",animation5:"animate6"},c=j();return t.$$set=t=>{"x"in t&&n(0,i=t.x),"y"in t&&n(1,o=t.y),"from"in t&&n(2,r=t.from),"to"in t&&n(3,a=t.to)},[i,o,r,a,s,t=>{const e=t.animationName.split("-"),i=e[e.length-1];n(4,s=l[i]),c("animationstep",i)}]}class dt extends G{constructor(t){super(),V(this,t,ct,lt,r,{x:0,y:1,from:2,to:3})}}function ut(t){let e,n;const i=t[9].default,o=a(i,t,t[10],null);return{c(){o&&o.c(),e=p()},m(t,i){o&&o.m(t,i),m(t,e,i),n=!0},p(t,e){o&&o.p&&(!n||1024&e)&&c(o,i,t,t[10],n?l(i,t[10],e,null):d(t[10]),null)},i(t){n||(H(o,t),n=!0)},o(t){U(o,t),n=!1},d(t){o&&o.d(t),t&&f(e)}}}function ht(e){let n,i;return n=new dt({props:{from:"translateX(500%) translateY(100%)",to:"translateX(-100%) translateY(400%)",x:"820",y:"260"}}),n.$on("animationstep",e[7]),{c(){X(n.$$.fragment)},m(t,e){F(n,t,e),i=!0},p:t,i(t){i||(H(n.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),i=!1},d(t){J(n,t)}}}function mt(t){let e,n,i;n=new st({props:{hide:t[6],x:t[1],y:t[2],width:t[3],height:t[4],title:t[0],$$slots:{default:[ut]},$$scope:{ctx:t}}});let o=t[5]&&ht(t);return{c(){e=$("g"),X(n.$$.fragment),o&&o.c()},m(t,r){m(t,e,r),F(n,e,null),o&&o.m(e,null),i=!0},p(t,[i]){const r={};64&i&&(r.hide=t[6]),2&i&&(r.x=t[1]),4&i&&(r.y=t[2]),8&i&&(r.width=t[3]),16&i&&(r.height=t[4]),1&i&&(r.title=t[0]),1024&i&&(r.$$scope={dirty:i,ctx:t}),n.$set(r),t[5]?o?(o.p(t,i),32&i&&H(o,1)):(o=ht(t),o.c(),H(o,1),o.m(e,null)):o&&(O(),U(o,1,1,(()=>{o=null})),Y())},i(t){i||(H(n.$$.fragment,t),H(o),i=!0)},o(t){U(n.$$.fragment,t),U(o),i=!1},d(t){t&&f(e),J(n),o&&o.d()}}}function ft(t,e,n){let{$$slots:i={},$$scope:o}=e;const r=j();let{title:a,x:s,y:l,width:c,height:d}=e,u=!1,h=!1;let m;return t.$$set=t=>{"title"in t&&n(0,a=t.title),"x"in t&&n(1,s=t.x),"y"in t&&n(2,l=t.y),"width"in t&&n(3,c=t.width),"height"in t&&n(4,d=t.height),"$$scope"in t&&n(10,o=t.$$scope)},t.$$.update=()=>{256&t.$$.dirty&&(clearInterval(m),n(8,m=setTimeout((()=>n(5,u=!0)),8e3)))},[a,s,l,c,d,u,h,t=>{"animation3"===t.detail?n(6,h=!0):"animation5"===t.detail&&r("done")},m,i,o]}class $t extends G{constructor(t){super(),V(this,t,ft,mt,r,{title:0,x:1,y:2,width:3,height:4})}}function gt(t){let e,n,i,o,r,s,u,x,w,v,z,E,j;const B=t[1].default,_=a(B,t,t[3],null);return{c(){e=$("g"),n=$("rect"),i=$("image"),o=p(),r=$("text"),s=g("Las noticias del día:"),u=p(),x=$("foreignObject"),w=document.createElementNS("http://www.w3.org/1999/xhtml","div"),_&&_.c(),v=document.createElementNS("http://www.w3.org/1999/xhtml","p"),z=g("Informa: "),E=g(t[0]),y(n,"x","30"),y(n,"y","80"),y(n,"width","100"),y(n,"height","100"),y(n,"fill","#ff7800"),y(n,"rx","5"),y(n,"ry","5"),y(i,"href","adwaita/application-rss+xml-symbolic.svg"),y(i,"x","40"),y(i,"y","90"),y(i,"width","80"),y(i,"height","80"),y(e,"class","icon"),y(r,"x","150"),y(r,"y","100"),y(r,"font-weight","bold"),y(r,"font-size","1.2em"),y(r,"dominant-baseline","middle"),y(r,"text-anchor","left"),k(v,"font-weight","300"),k(w,"color","black"),k(w,"font-size","1.1em"),y(w,"xmlns","http://www.w3.org/1999/xhtml"),y(x,"fill","black"),y(x,"x","150"),y(x,"y","125"),y(x,"width","600"),y(x,"height","100")},m(t,a){m(t,e,a),h(e,n),h(e,i),m(t,o,a),m(t,r,a),h(r,s),m(t,u,a),m(t,x,a),h(x,w),_&&_.m(w,null),h(w,v),h(v,z),h(v,E),j=!0},p(t,e){_&&_.p&&(!j||8&e)&&c(_,B,t,t[3],j?l(B,t[3],e,null):d(t[3]),null),(!j||1&e)&&b(E,t[0])},i(t){j||(H(_,t),j=!0)},o(t){U(_,t),j=!1},d(t){t&&f(e),t&&f(o),t&&f(r),t&&f(u),t&&f(x),_&&_.d(t)}}}function pt(t){let e,n;return e=new $t({props:{x:"50",y:"250",width:"800",height:"240",title:"Últimas noticias",$$slots:{default:[gt]},$$scope:{ctx:t}}}),e.$on("done",t[2]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};9&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function xt(t,e,n){let{$$slots:i={},$$scope:o}=e,{author:r}=e;return t.$$set=t=>{"author"in t&&n(0,r=t.author),"$$scope"in t&&n(3,o=t.$$scope)},[r,i,function(e){B.call(this,t,e)},o]}class wt extends G{constructor(t){super(),V(this,t,xt,pt,r,{author:0})}}function yt(t){let e,n,i,o,r,s,u,x,w,v,z;const E=t[1].default,j=a(E,t,t[3],null);return{c(){e=$("g"),n=$("rect"),i=$("image"),o=p(),r=$("text"),s=g(t[0]),u=g(" dice:"),x=p(),w=$("foreignObject"),v=document.createElementNS("http://www.w3.org/1999/xhtml","div"),j&&j.c(),y(n,"x","30"),y(n,"y","80"),y(n,"width","100"),y(n,"height","100"),y(n,"fill","#26a269"),y(n,"rx","5"),y(n,"ry","5"),y(i,"href","adwaita/chat-symbolic.svg"),y(i,"x","40"),y(i,"y","90"),y(i,"width","80"),y(i,"height","80"),y(e,"class","icon"),y(r,"x","150"),y(r,"y","100"),y(r,"font-weight","bold"),y(r,"font-size","1.2em"),y(r,"dominant-baseline","middle"),y(r,"text-anchor","left"),k(v,"color","black"),k(v,"font-size","1.2em"),y(v,"xmlns","http://www.w3.org/1999/xhtml"),y(w,"fill","black"),y(w,"x","150"),y(w,"y","125"),y(w,"width","600"),y(w,"height","100")},m(t,a){m(t,e,a),h(e,n),h(e,i),m(t,o,a),m(t,r,a),h(r,s),h(r,u),m(t,x,a),m(t,w,a),h(w,v),j&&j.m(v,null),z=!0},p(t,e){(!z||1&e)&&b(s,t[0]),j&&j.p&&(!z||8&e)&&c(j,E,t,t[3],z?l(E,t[3],e,null):d(t[3]),null)},i(t){z||(H(j,t),z=!0)},o(t){U(j,t),z=!1},d(t){t&&f(e),t&&f(o),t&&f(r),t&&f(x),t&&f(w),j&&j.d(t)}}}function bt(t){let e,n;return e=new $t({props:{x:"50",y:"250",width:"800",height:"240",title:"Mensaje recibido",$$slots:{default:[yt]},$$scope:{ctx:t}}}),e.$on("done",t[2]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};9&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function kt(t,e,n){let{$$slots:i={},$$scope:o}=e,{author:r}=e;return t.$$set=t=>{"author"in t&&n(0,r=t.author),"$$scope"in t&&n(3,o=t.$$scope)},[r,i,function(e){B.call(this,t,e)},o]}class vt extends G{constructor(t){super(),V(this,t,kt,bt,r,{author:0})}}function zt(e){let n,i,o,r,a,s,l,c,d,u,x,w,b,k,v,z,E,j,B,_;return{c(){n=$("rect"),i=p(),o=$("g"),r=$("image"),a=$("image"),s=$("image"),l=$("image"),c=$("image"),d=$("image"),u=$("image"),x=$("image"),w=p(),b=$("g"),k=$("text"),v=g("TARJETAS MADRE CERCA DE USTED"),z=$("text"),E=g("Haga clic aquí para saber más"),j=p(),B=$("text"),_=g("Un mensaje del sponsor @ckmu32"),y(n,"x","0"),y(n,"y","0"),y(n,"width","100%"),y(n,"height","100%"),y(n,"fill","#903030"),y(r,"x","75%"),y(r,"y","50%"),y(r,"href","motherboards/sample1.jpg"),y(r,"class","svelte-hk7kx2"),y(a,"x","33%"),y(a,"y","15%"),y(a,"href","motherboards/sample2.jpg"),y(a,"class","svelte-hk7kx2"),y(s,"x","65%"),y(s,"y","22%"),y(s,"href","motherboards/sample3.jpg"),y(s,"class","svelte-hk7kx2"),y(l,"x","15%"),y(l,"y","76%"),y(l,"href","motherboards/sample4.jpg"),y(l,"class","svelte-hk7kx2"),y(c,"x","44%"),y(c,"y","50%"),y(c,"href","motherboards/sample5.jpg"),y(c,"class","svelte-hk7kx2"),y(d,"x","12%"),y(d,"y","23%"),y(d,"href","motherboards/sample6.jpg"),y(d,"class","svelte-hk7kx2"),y(u,"x","27%"),y(u,"y","93%"),y(u,"href","motherboards/sample7.jpg"),y(u,"class","svelte-hk7kx2"),y(x,"x","51%"),y(x,"y","15%"),y(x,"href","motherboards/sample8.jpg"),y(x,"class","svelte-hk7kx2"),y(o,"class","flying svelte-hk7kx2"),y(k,"x","50%"),y(k,"y","60%"),y(k,"fill","white"),y(k,"font-size","2.5rem"),y(k,"font-weight","900"),y(k,"text-anchor","middle"),y(z,"x","50%"),y(z,"y","80%"),y(z,"fill","white"),y(z,"font-size","1.5rem"),y(z,"font-weight","900"),y(z,"text-anchor","middle"),y(b,"class","text svelte-hk7kx2"),y(B,"x","10"),y(B,"y","95%"),y(B,"fill","white"),y(B,"font-size","0.8rem"),y(B,"font-weight","normal"),y(B,"text-anchor","left"),y(B,"alignment-baseline","bottom")},m(t,e){m(t,n,e),m(t,i,e),m(t,o,e),h(o,r),h(o,a),h(o,s),h(o,l),h(o,c),h(o,d),h(o,u),h(o,x),m(t,w,e),m(t,b,e),h(b,k),h(k,v),h(b,z),h(z,E),m(t,j,e),m(t,B,e),h(B,_)},p:t,d(t){t&&f(n),t&&f(i),t&&f(o),t&&f(w),t&&f(b),t&&f(j),t&&f(B)}}}function Et(t){let e,n;return e=new $t({props:{x:"50",y:"250",width:"800",height:"160",title:"¿Necesitas una tarjeta?",$$slots:{default:[zt]},$$scope:{ctx:t}}}),e.$on("done",t[0]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function jt(t){return[function(e){B.call(this,t,e)}]}class Bt extends G{constructor(t){super(),V(this,t,jt,Et,r,{})}}function _t(e){let n,i,o,r,a,s,l,c,d,u,x,w,b,k,v,z,E,j,B,_,A,M;return{c(){n=$("rect"),i=p(),o=$("g"),r=$("g"),a=$("circle"),s=$("circle"),l=$("circle"),c=$("circle"),d=$("circle"),u=p(),x=$("text"),w=g("MERCERIA PATITA"),b=p(),k=$("text"),v=g("Botones al 50% de descuento"),z=p(),E=$("g"),j=$("text"),B=g("🦆"),_=p(),A=$("text"),M=g("Un mensaje del sponsor @ikanian"),y(n,"x","0"),y(n,"y","0"),y(n,"width","100%"),y(n,"height","100%"),y(n,"fill","#c080c0"),y(a,"x","50%"),y(a,"y","50%"),y(a,"r","30"),y(a,"class","bg svelte-rw3c0p"),y(s,"x","50%"),y(s,"y","50%"),y(s,"r","4"),y(s,"transform","translate(-8, -8)"),y(s,"class","dot"),y(l,"x","50%"),y(l,"y","50%"),y(l,"r","4"),y(l,"transform","translate(-8, +8)"),y(l,"class","dot"),y(c,"x","50%"),y(c,"y","50%"),y(c,"r","4"),y(c,"transform","translate(+8, -8)"),y(c,"class","dot"),y(d,"x","50%"),y(d,"y","50%"),y(d,"r","4"),y(d,"transform","translate(+8, +8)"),y(d,"class","dot"),y(r,"class","rotate svelte-rw3c0p"),y(o,"class","button svelte-rw3c0p"),y(x,"x","50%"),y(x,"y","50%"),y(x,"class","merceria svelte-rw3c0p"),y(x,"fill","white"),y(x,"font-weight","800"),y(x,"text-anchor","middle"),y(x,"dominant-baseline","central"),y(x,"font-size","40"),y(k,"x","50%"),y(k,"fill","white"),y(k,"font-weight","800"),y(k,"text-anchor","middle"),y(k,"dominant-baseline","central"),y(k,"y","80%"),y(k,"font-size","25"),y(k,"class","botones svelte-rw3c0p"),y(j,"fill","white"),y(j,"font-weight","800"),y(j,"class","pato svelte-rw3c0p"),y(j,"font-size","50"),y(j,"dominant-baseline","bottom"),y(j,"y","100%"),y(j,"x","100%"),y(j,"text-anchor","left"),y(E,"class","move svelte-rw3c0p"),y(A,"x","10"),y(A,"y","95%"),y(A,"fill","white"),y(A,"font-size","0.8rem"),y(A,"font-weight","normal"),y(A,"text-anchor","left"),y(A,"alignment-baseline","bottom")},m(t,e){m(t,n,e),m(t,i,e),m(t,o,e),h(o,r),h(r,a),h(r,s),h(r,l),h(r,c),h(r,d),m(t,u,e),m(t,x,e),h(x,w),m(t,b,e),m(t,k,e),h(k,v),m(t,z,e),m(t,E,e),h(E,j),h(j,B),m(t,_,e),m(t,A,e),h(A,M)},p:t,d(t){t&&f(n),t&&f(i),t&&f(o),t&&f(u),t&&f(x),t&&f(b),t&&f(k),t&&f(z),t&&f(E),t&&f(_),t&&f(A)}}}function At(t){let e,n;return e=new $t({props:{x:"50",y:"250",width:"800",height:"160",title:"Merceria Patita",$$slots:{default:[_t]},$$scope:{ctx:t}}}),e.$on("done",t[0]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function Mt(t){return[function(e){B.call(this,t,e)}]}class Nt extends G{constructor(t){super(),V(this,t,Mt,At,r,{})}}function Tt(e){let n,i,o,r,a,s,l,c,d,u,x;return{c(){n=$("rect"),i=p(),o=$("g"),r=$("image"),a=p(),s=$("g"),l=$("text"),c=g("MANDARINA"),d=p(),u=$("text"),x=g("Un mensaje del sponsor @dannywolfmx2"),y(n,"x","0"),y(n,"y","0"),y(n,"width","100%"),y(n,"height","100%"),y(n,"fill","#903030"),y(r,"x","0%"),y(r,"width","100%"),y(r,"class","pan svelte-1sn4zup"),y(r,"href","images/commons_mandarina.jpg"),y(o,"class","mandarina"),y(l,"x","50%"),y(l,"y","70%"),y(l,"fill","white"),y(l,"font-size","2.5rem"),y(l,"font-weight","900"),y(l,"font-family","Bad Script"),y(l,"text-anchor","middle"),y(s,"class","text svelte-1sn4zup"),y(u,"x","300"),y(u,"y","95%"),y(u,"fill","white"),y(u,"font-size","0.8rem"),y(u,"font-weight","normal"),y(u,"text-anchor","left"),y(u,"alignment-baseline","bottom")},m(t,e){m(t,n,e),m(t,i,e),m(t,o,e),h(o,r),m(t,a,e),m(t,s,e),h(s,l),h(l,c),m(t,d,e),m(t,u,e),h(u,x)},p:t,d(t){t&&f(n),t&&f(i),t&&f(o),t&&f(a),t&&f(s),t&&f(d),t&&f(u)}}}function St(t){let e,n;return e=new $t({props:{x:"50",y:"250",width:"800",height:"160",title:"MANDARINA",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),e.$on("done",t[0]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function Ct(t){return[function(e){B.call(this,t,e)}]}class Pt extends G{constructor(t){super(),V(this,t,Ct,St,r,{})}}function qt(e){let n,i,o,r,a,s,l,c,d,u,p,x,w,b,k,z,E;return{c(){n=$("svg"),i=$("rect"),o=$("g"),r=$("rect"),a=$("rect"),s=$("text"),l=g("kiwi32.exe"),c=$("text"),d=g("Se ha detectado un virus en su PC (kiwi32.exe)"),u=$("text"),p=g("¿Desea consumir el kiwi para solucionar el problema?"),x=$("text"),w=g("Presione Alt+F4 para consumir el kiwi"),b=$("text"),k=g("¿Desea consumir el kiwi para solucionar el problema?"),z=$("text"),E=g("Presione Ctrl+Alt+Supr para reportar a @ckmu32"),y(i,"x","0"),y(i,"y","0"),y(i,"width","100%"),y(i,"height","100%"),y(i,"fill","black"),y(r,"x","0"),y(r,"y","0"),y(r,"width","100%"),y(r,"height","100%"),y(r,"fill","darkblue"),y(a,"fill","white"),y(a,"y","180"),y(a,"height","40"),y(a,"x","41%"),y(a,"width","18%"),y(s,"x","50%"),y(s,"y","200"),y(s,"font-family","monospace"),y(s,"font-size","24"),y(s,"dominant-baseline","central"),y(s,"text-anchor","middle"),y(s,"fill","darkblue"),y(c,"x","50%"),y(c,"font-family","monospace"),y(c,"font-size","24"),y(c,"dominant-baseline","central"),y(c,"text-anchor","middle"),y(c,"y","300"),y(c,"fill","white"),y(u,"x","50%"),y(u,"font-family","monospace"),y(u,"font-size","24"),y(u,"dominant-baseline","central"),y(u,"text-anchor","middle"),y(u,"fill","white"),y(u,"y","350"),y(x,"x","50%"),y(x,"font-family","monospace"),y(x,"font-size","24"),y(x,"dominant-baseline","central"),y(x,"text-anchor","middle"),y(x,"fill","white"),y(x,"y","400"),y(b,"x","50%"),y(b,"font-family","monospace"),y(b,"font-size","24"),y(b,"dominant-baseline","central"),y(b,"text-anchor","middle"),y(b,"fill","white"),y(b,"y","350"),y(z,"x","50%"),y(z,"font-family","monospace"),y(z,"font-size","24"),y(z,"dominant-baseline","central"),y(z,"text-anchor","middle"),y(z,"fill","white"),y(z,"y","450"),y(o,"class","scroll svelte-dlyc0g"),y(n,"class","svelte-dlyc0g"),v(n,"hide",e[0])},m(t,e){m(t,n,e),h(n,i),h(n,o),h(o,r),h(o,a),h(o,s),h(s,l),h(o,c),h(c,d),h(o,u),h(u,p),h(o,x),h(x,w),h(o,b),h(b,k),h(o,z),h(z,E)},p(t,[e]){1&e&&v(n,"hide",t[0])},i:t,o:t,d(t){t&&f(n)}}}function Dt(t,e,n){let i=!1;return setTimeout((()=>n(0,i=!0)),5e3),[i]}class It extends G{constructor(t){super(),V(this,t,Dt,qt,r,{})}}const Rt=["Montando el disco duro de los memes...","Sacando brillo a los teclados...","Desfragmentando un kiwi...","Actualizando el entorno gráfico...","Acariciando patos...","BAD SECTOR -- @dannywolfmx2","Sacando a pasear al lobete... -- @dannywolfmx2","Recargándole las pilas a Pinchito... -- @dannywolfmx2","Almacenando patos de emergencia... -- @ikanian","Preparando el nuevo año de Java en YouTube... -- @ckmu32","Preparando el curso de Scala... es coña, antes sale HL3 -- @messer199","Reparando el condensador de fluzo... -- @frostqui","Liberando a clank del mundo de las tinieblas... -- @frostqui","Preparando la música de m****a sin copyright... -- @frostqui","Buscando frameworks raros para enseñarlos en directo... -- @frostqui","Yendo al río a llenar garrafas para las recompensas del canal... -- @frostqui","Canjeando subs por kiwis y sandías... -- @jemmaengz1202","Huyendo de LatAm... -- @ivan_the_raging_python"],Lt=[{text:"Expertos en ciberseguridad recomiendan usar Emacs y Nano hasta nuevo aviso por vulnerabilidad encontrada en Vim",author:"@messer199",kind:"BreakingNews",id:"use-emacs"},{text:"lerna.js ha muerto",author:"@frostqui",kind:"BreakingNews",id:"lerna-ded"},{text:"Escribe eeeeeeeeeeeeeeeee en el chat cuando leas este mensaje",author:"@frostqui",kind:"ChatBubble",id:"eeeeeeeeeee"},{text:"El tiempo es como el dinero, mientras menos se tiene más se valora",author:"@dannywolfmx2",kind:"ChatBubble",id:"tiempotiempo"},{text:"11",author:"@dannywolfmx2",kind:"ChatBubble",id:"once"},{text:"Buenas gracias y muchas tardes. Espero esteis estupendos y estupendas, y si no, no pasa nada, es mejor eso que morirse.",author:"@MrTioTizo",kind:"ChatBubble",id:"buenasgracias"},{text:"Atención: Todo aquel que no canjee la recompensa de fichar será fulminado",author:"@frostqui",kind:"ChatBubble",id:"ficharplz"},{kind:"BoardPopup",id:"motherboards"},{kind:"PatitaPopup",id:"patita"},{kind:"KiwiBsod",id:"kiwibsod"},{kind:"Mandarina",id:"mandarina"}];function Ot(t){let e,n,i,o;const r=[Jt,Ft,Xt,Ut,Ht,Yt],a=[];function s(t,e){return"Mandarina"===t[0].kind?0:"BreakingNews"===t[0].kind?1:"KiwiBsod"===t[0].kind?2:"ChatBubble"===t[0].kind?3:"BoardPopup"===t[0].kind?4:"PatitaPopup"===t[0].kind?5:-1}return~(e=s(t))&&(n=a[e]=r[e](t)),{c(){n&&n.c(),i=x()},m(t,n){~e&&a[e].m(t,n),m(t,i,n),o=!0},p(t,o){let l=e;e=s(t),e===l?~e&&a[e].p(t,o):(n&&(O(),U(a[l],1,1,(()=>{a[l]=null})),Y()),~e?(n=a[e],n?n.p(t,o):(n=a[e]=r[e](t),n.c()),H(n,1),n.m(i.parentNode,i)):n=null)},i(t){o||(H(n),o=!0)},o(t){U(n),o=!1},d(t){~e&&a[e].d(t),t&&f(i)}}}function Yt(e){let n,i;return n=new Nt({}),n.$on("done",e[1]),{c(){X(n.$$.fragment)},m(t,e){F(n,t,e),i=!0},p:t,i(t){i||(H(n.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),i=!1},d(t){J(n,t)}}}function Ht(e){let n,i;return n=new Bt({}),n.$on("done",e[1]),{c(){X(n.$$.fragment)},m(t,e){F(n,t,e),i=!0},p:t,i(t){i||(H(n.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),i=!1},d(t){J(n,t)}}}function Ut(t){let e,n;return e=new vt({props:{author:t[0].author,$$slots:{default:[Kt]},$$scope:{ctx:t}}}),e.$on("done",t[1]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,n){const i={};1&n&&(i.author=t[0].author),17&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function Xt(e){let n,i;return n=new It({}),n.$on("done",e[1]),{c(){X(n.$$.fragment)},m(t,e){F(n,t,e),i=!0},p:t,i(t){i||(H(n.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),i=!1},d(t){J(n,t)}}}function Ft(t){let e,n;return e=new wt({props:{author:t[0].author,$$slots:{default:[Vt]},$$scope:{ctx:t}}}),e.$on("done",t[1]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,n){const i={};1&n&&(i.author=t[0].author),17&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function Jt(e){let n,i;return n=new Pt({}),n.$on("done",e[1]),{c(){X(n.$$.fragment)},m(t,e){F(n,t,e),i=!0},p:t,i(t){i||(H(n.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),i=!1},d(t){J(n,t)}}}function Kt(t){let e,n=t[0].text+"";return{c(){e=g(n)},m(t,n){m(t,e,n)},p(t,i){1&i&&n!==(n=t[0].text+"")&&b(e,n)},d(t){t&&f(e)}}}function Vt(t){let e,n=t[0].text+"";return{c(){e=g(n)},m(t,n){m(t,e,n)},p(t,i){1&i&&n!==(n=t[0].text+"")&&b(e,n)},d(t){t&&f(e)}}}function Gt(t){let e,n,i=null!=t[0]&&Ot(t);return{c(){e=$("g"),i&&i.c()},m(t,o){m(t,e,o),i&&i.m(e,null),n=!0},p(t,[n]){null!=t[0]?i?(i.p(t,n),1&n&&H(i,1)):(i=Ot(t),i.c(),H(i,1),i.m(e,null)):i&&(O(),U(i,1,1,(()=>{i=null})),Y())},i(t){n||(H(i),n=!0)},o(t){U(i),n=!1},d(t){t&&f(e),i&&i.d()}}}function Qt(t,e,n){let i=[...Lt],o=null;const r=()=>{if(0===Lt.length)return;const t=i[Math.floor(Math.random()*i.length)];n(0,o=t),i=i.filter((e=>e.id!==t.id))},a=()=>{n(0,o=null),setTimeout(r,45e3)};return a(),[o,a]}class Wt extends G{constructor(t){super(),V(this,t,Qt,Gt,r,{})}}function Zt(e){let n,i;return{c(){n=$("text"),i=g(e[2]),y(n,"x",e[0]),y(n,"y",e[1]),y(n,"class","countdown svelte-vu2gqj"),y(n,"dominant-baseline","central"),y(n,"text-anchor","middle"),y(n,"font-weight","300"),y(n,"font-size","3em")},m(t,e){m(t,n,e),h(n,i)},p(t,[e]){4&e&&b(i,t[2]),1&e&&y(n,"x",t[0]),2&e&&y(n,"y",t[1])},i:t,o:t,d(t){t&&f(n)}}}function te(t){if(t<0)return"0:00";const e=t%60;return`${Math.floor(t/60)}:${e<10?`0${e}`:e}`}function ee(t,e,n){let i,{duration:o,x:r,y:a}=e,s=Date.now()+1e3*o,l=(s-Date.now())/1e3,c=te(l);return t.$$set=t=>{"duration"in t&&n(3,o=t.duration),"x"in t&&n(0,r=t.x),"y"in t&&n(1,a=t.y)},t.$$.update=()=>{48&t.$$.dirty&&(clearInterval(i),n(5,i=setInterval((()=>{n(4,l=Math.round((s-Date.now())/1e3)),n(2,c=te(l))}),1e3)))},[r,a,c,o,l,i]}class ne extends G{constructor(t){super(),V(this,t,ee,Zt,r,{duration:3,x:0,y:1})}}function ie(e){let n,i,o,r,a,s,l,c,d,u;return{c(){n=$("svg"),i=$("mask"),o=$("rect"),r=$("rect"),a=$("g"),s=$("rect"),l=$("rect"),y(o,"x","0"),y(o,"y","0"),y(o,"width","100%"),y(o,"height","100%"),y(o,"fill","black"),y(r,"x","0"),y(r,"y","0"),y(r,"width","100%"),y(r,"height","100%"),y(r,"fill","white"),y(r,"rx","5"),y(r,"ry","5"),y(i,"id","progressMask"),y(s,"fill","#e0e0e0"),y(s,"x","0"),y(s,"y","0"),y(s,"width","100%"),y(s,"height","100%"),y(l,"fill","#3584e4"),y(l,"class","foreground svelte-1nufc8d"),y(l,"x","0"),y(l,"y","0"),y(l,"width","100%"),y(l,"height","100%"),y(a,"mask","url(#progressMask)"),y(a,"width","100%"),y(a,"height","100%"),y(n,"class","progress"),y(n,"style",c=`--transition-duration: ${e[0]}s`),y(n,"width",e[3]),y(n,"height",e[4]),y(n,"x",e[1]),y(n,"y",e[2])},m(t,c){m(t,n,c),h(n,i),h(i,o),h(i,r),h(n,a),h(a,s),h(a,l),d||(u=w(n,"animationend",e[5]),d=!0)},p(t,[e]){1&e&&c!==(c=`--transition-duration: ${t[0]}s`)&&y(n,"style",c),8&e&&y(n,"width",t[3]),16&e&&y(n,"height",t[4]),2&e&&y(n,"x",t[1]),4&e&&y(n,"y",t[2])},i:t,o:t,d(t){t&&f(n),d=!1,u()}}}function oe(t,e,n){let{duration:i}=e,{x:o,y:r,width:a,height:s}=e;return t.$$set=t=>{"duration"in t&&n(0,i=t.duration),"x"in t&&n(1,o=t.x),"y"in t&&n(2,r=t.y),"width"in t&&n(3,a=t.width),"height"in t&&n(4,s=t.height)},[i,o,r,a,s,function(e){B.call(this,t,e)}]}class re extends G{constructor(t){super(),V(this,t,oe,ie,r,{duration:0,x:1,y:2,width:3,height:4})}}function ae(t){let e,n,i,o,r;const s=t[2].default,h=a(s,t,t[1],null);return{c(){e=$("text"),h&&h.c(),y(e,"class",n=u(t[0])+" svelte-jr356m"),y(e,"x","50%"),y(e,"y","50%"),y(e,"font-size","0.8em"),y(e,"dominant-baseline","central"),y(e,"text-anchor","middle")},m(n,a){m(n,e,a),h&&h.m(e,null),i=!0,o||(r=w(e,"animationend",t[3]),o=!0)},p(t,[o]){h&&h.p&&(!i||2&o)&&c(h,s,t,t[1],i?l(s,t[1],o,null):d(t[1]),null),(!i||1&o&&n!==(n=u(t[0])+" svelte-jr356m"))&&y(e,"class",n)},i(t){i||(H(h,t),i=!0)},o(t){U(h,t),i=!1},d(t){t&&f(e),h&&h.d(t),o=!1,r()}}}function se(t,e,n){let{$$slots:i={},$$scope:o}=e,{state:r="normal"}=e;return t.$$set=t=>{"state"in t&&n(0,r=t.state),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,i,function(e){B.call(this,t,e)}]}class le extends G{constructor(t){super(),V(this,t,se,ae,r,{state:0})}}function ce(t){let e;return{c(){e=g(t[0])},m(t,n){m(t,e,n)},p(t,n){1&n&&b(e,t[0])},d(t){t&&f(e)}}}function de(t){let e,n;return e=new le({props:{state:t[1],$$slots:{default:[ce]},$$scope:{ctx:t}}}),e.$on("animationend",t[2]),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};2&n&&(i.state=t[1]),33&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function ue(t,e,n){const i={enter:"normal",normal:"gone",gone:"enter"};let o="",r="gone";const a=()=>{const t=Math.floor(Math.random()*Rt.length);n(0,o=Rt[t]),n(1,r="enter")};return setTimeout((()=>a()),5e3),[o,r,()=>{n(1,r=i[r]),"gone"==r&&setTimeout(a,1e3)}]}class he extends G{constructor(t){super(),V(this,t,ue,de,r,{})}}function me(e){let n,i,o,r,a;return n=new ne({props:{duration:e[1],x:"50%",y:"35%"}}),{c(){X(n.$$.fragment),i=p(),o=$("text"),r=g("Desplegando stream..."),y(o,"x","50%"),y(o,"y","55%"),y(o,"dominant-baseline","central"),y(o,"text-anchor","middle"),y(o,"font-weight","bold"),y(o,"font-size","1.2em")},m(t,e){F(n,t,e),m(t,i,e),m(t,o,e),h(o,r),a=!0},p:t,i(t){a||(H(n.$$.fragment,t),a=!0)},o(t){U(n.$$.fragment,t),a=!1},d(t){J(n,t),t&&f(i),t&&f(o)}}}function fe(e){let n,i;return{c(){n=$("text"),i=g("Empezamos ya"),y(n,"x","50%"),y(n,"y","45%"),y(n,"class","countdown"),y(n,"dominant-baseline","central"),y(n,"text-anchor","middle"),y(n,"font-weight","300"),y(n,"fill","black"),y(n,"font-size","2em")},m(t,e){m(t,n,e),h(n,i)},p:t,i:t,o:t,d(t){t&&f(n)}}}function $e(t){let e,n,i,o,r,a,s,l;const c=[fe,me],d=[];function u(t,e){return t[0]?0:1}return e=u(t),n=d[e]=c[e](t),o=new re({props:{x:"25%",y:"65%",width:"50%",height:"10",r:"10",duration:t[1]}}),o.$on("animationend",t[2]),s=new he({}),{c(){n.c(),i=p(),X(o.$$.fragment),r=p(),a=$("svg"),X(s.$$.fragment),y(a,"width","100%"),y(a,"height","1em"),y(a,"x","0"),y(a,"y","85%")},m(t,n){d[e].m(t,n),m(t,i,n),F(o,t,n),m(t,r,n),m(t,a,n),F(s,a,null),l=!0},p(t,o){let r=e;e=u(t),e===r?d[e].p(t,o):(O(),U(d[r],1,1,(()=>{d[r]=null})),Y(),n=d[e],n?n.p(t,o):(n=d[e]=c[e](t),n.c()),H(n,1),n.m(i.parentNode,i))},i(t){l||(H(n),H(o.$$.fragment,t),H(s.$$.fragment,t),l=!0)},o(t){U(n),U(o.$$.fragment,t),U(s.$$.fragment,t),l=!1},d(t){d[e].d(t),t&&f(i),J(o,t),t&&f(r),t&&f(a),J(s)}}}function ge(t){let e,n;return e=new st({props:{x:"20%",y:"60",width:"60%",height:"240",title:"El stream está iniciando",$$slots:{default:[$e]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(t,i){F(e,t,i),n=!0},p(t,[n]){const i={};9&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function pe(t,e,n){let i=!1;return[i,480,()=>n(0,i=!0)]}class xe extends G{constructor(t){super(),V(this,t,pe,ge,r,{})}}function we(e){let n,i,o,r;return{c(){n=$("svg"),i=$("image"),o=$("text"),r=g(e[1]),y(i,"href",e[0]),y(i,"x","56"),y(i,"y","6"),y(i,"width","48"),y(i,"height","48"),y(o,"x","50%"),y(o,"y","80"),y(o,"text-anchor","middle"),y(o,"fill","white"),y(o,"font-size","0.9em"),y(n,"x",e[2]),y(n,"y",e[3]),y(n,"width","150"),y(n,"height","100")},m(t,e){m(t,n,e),h(n,i),h(n,o),h(o,r)},p(t,[e]){1&e&&y(i,"href",t[0]),2&e&&b(r,t[1]),4&e&&y(n,"x",t[2]),8&e&&y(n,"y",t[3])},i:t,o:t,d(t){t&&f(n)}}}function ye(t,e,n){let{icon:i,text:o}=e,{x:r,y:a}=e;return t.$$set=t=>{"icon"in t&&n(0,i=t.icon),"text"in t&&n(1,o=t.text),"x"in t&&n(2,r=t.x),"y"in t&&n(3,a=t.y)},[i,o,r,a]}class be extends G{constructor(t){super(),V(this,t,ye,we,r,{icon:0,text:1,x:2,y:3})}}function ke(t){let e,n,i,o;return e=new xe({}),i=new Wt({}),{c(){X(e.$$.fragment),n=p(),X(i.$$.fragment)},m(t,r){F(e,t,r),m(t,n,r),F(i,t,r),o=!0},i(t){o||(H(e.$$.fragment,t),H(i.$$.fragment,t),o=!0)},o(t){U(e.$$.fragment,t),U(i.$$.fragment,t),o=!1},d(t){J(e,t),t&&f(n),J(i,t)}}}function ve(e){let n,i;return n=new dt({props:{from:"translateX(200%) translateY(1000%)",to:"translateX(-300%) translateY(-400%)",x:"530",y:"180"}}),n.$on("animationstep",e[2]),{c(){X(n.$$.fragment)},m(t,e){F(n,t,e),i=!0},p:t,i(t){i||(H(n.$$.fragment,t),i=!0)},o(t){U(n.$$.fragment,t),i=!1},d(t){J(n,t)}}}function ze(t){let e,n,i,o,r,a,s,l,c,d,u;e=new be({props:{symbolic:!0,x:"10",y:"50",icon:"icons/youtube.svg",text:"/makigas"}}),i=new be({props:{symbolic:!0,x:"10",y:"150",icon:"icons/discord.svg",text:"/Mq7TBAB"}}),r=new be({props:{symbolic:!0,x:"10",y:"250",icon:"icons/twitter.svg",text:"@makigas"}}),s=new be({props:{x:"450",y:"150",icon:"adwaita/hourglass-symbolic.svg",text:"Iniciar stream"}});let h=t[0]&&ke(),$=t[1]&&ve(t);return{c(){X(e.$$.fragment),n=p(),X(i.$$.fragment),o=p(),X(r.$$.fragment),a=p(),X(s.$$.fragment),l=p(),h&&h.c(),c=p(),$&&$.c(),d=x()},m(t,f){F(e,t,f),m(t,n,f),F(i,t,f),m(t,o,f),F(r,t,f),m(t,a,f),F(s,t,f),m(t,l,f),h&&h.m(t,f),m(t,c,f),$&&$.m(t,f),m(t,d,f),u=!0},p(t,e){t[0]?h?1&e&&H(h,1):(h=ke(),h.c(),H(h,1),h.m(c.parentNode,c)):h&&(O(),U(h,1,1,(()=>{h=null})),Y()),t[1]?$?($.p(t,e),2&e&&H($,1)):($=ve(t),$.c(),H($,1),$.m(d.parentNode,d)):$&&(O(),U($,1,1,(()=>{$=null})),Y())},i(t){u||(H(e.$$.fragment,t),H(i.$$.fragment,t),H(r.$$.fragment,t),H(s.$$.fragment,t),H(h),H($),u=!0)},o(t){U(e.$$.fragment,t),U(i.$$.fragment,t),U(r.$$.fragment,t),U(s.$$.fragment,t),U(h),U($),u=!1},d(t){J(e,t),t&&f(n),J(i,t),t&&f(o),J(r,t),t&&f(a),J(s,t),t&&f(l),h&&h.d(t),t&&f(c),$&&$.d(t),t&&f(d)}}}function Ee(t){let e,n,i,o;return i=new it({props:{width:"100%",height:"100%",background:"#264073",$$slots:{default:[ze]},$$scope:{ctx:t}}}),{c(){var t;t="main",e=document.createElement(t),n=$("svg"),X(i.$$.fragment),y(n,"width","100%"),y(n,"height","100%"),y(n,"viewBox","0 0 960 540"),y(e,"class","svelte-18enbn8")},m(t,r){m(t,e,r),h(e,n),F(i,n,null),o=!0},p(t,[e]){const n={};11&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n)},i(t){o||(H(i.$$.fragment,t),o=!0)},o(t){U(i.$$.fragment,t),o=!1},d(t){t&&f(e),J(i)}}}function je(t,e,n){let i=!1,o=!1;return setTimeout((()=>n(1,o=!0)),4e3),[i,o,t=>{"animation3"===t.detail&&setTimeout((()=>n(0,i=!0)),1e3)}]}return new class extends G{constructor(t){super(),V(this,t,je,Ee,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map