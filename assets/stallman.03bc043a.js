import{S as d,i as u,s as f,H as l,I as p,b as a,c as g,d as r,n as o,f as v}from"./index.de6d1966.js";const _="/twitch-intro/assets/stallman.9dd62bb2.png",h="/twitch-intro/assets/fsf-song.3a3c9032.ogg";function w(c){let t,e,s,i;return{c(){t=l("div"),e=l("div"),s=l("img"),p(s.src,i=_)||a(s,"src",i),a(s,"alt","Stallman"),a(s,"id","stallman"),a(e,"class","rotate"),a(t,"class","container")},m(n,m){g(n,t,m),r(t,e),r(e,s)},p:o,i:o,o,d(n){n&&v(t)}}}function S(c){const t=new Audio(h);return t.loop=!1,t.volume=.3,t.play(),[]}class b extends d{constructor(t){super(),u(this,t,S,w,f,{})}}new b({target:document.getElementById("app")});