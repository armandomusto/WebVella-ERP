var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{l(t.next(e))}catch(r){i(r)}}function u(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(o,u)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(r){return l([e,r])}}function l(o){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=r.call(e,n)}catch(u){o=[6,u];a=0}finally{t=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="wv-feed-list";var a=0;var i=false;var o=false;var u=window;var l=document;var s={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var f={};var c=new WeakMap;var $=function(e){return c.get(e)};var v=e("r",(function(e,r){return c.set(r.$lazyInstance$=e,r)}));var h=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return c.set(e,r)};var p=function(e,r){return r in e};var m=function(e){return console.error(e)};var d=new Map;var g=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=d.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{d.set(i,e)}return e[a]}),m)};var y=[];var b=[];var w=[];var _=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&s.$flags$&4){x(R)}else{s.raf(R)}}}};var S=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){m(n)}}e.length=0};var j=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){m(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var R=function(){a++;S(y);var e=(s.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(b,e);j(w,e);if(b.length>0){w.push.apply(w,b);b.length=0}if(i=y.length+b.length+w.length>0){s.raf(R)}else{a=0}};var x=function(e){return Promise.resolve().then(e)};var k=_(y,false);var E=_(b,true);var P={};var O=function(e){e=typeof e;return e==="object"||e==="function"};var C=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var L=e("a",(function(){if(!(u.CSS&&u.CSS.supports&&u.CSS.supports("color","var(--c)"))){return r.import("./p-9b741424.system.js").then((function(){s.$cssShim$=u.__stencil_cssshim;if(s.$cssShim$){return s.$cssShim$.initShim()}}))}return Promise.resolve()}));var U=e("p",(function(){return __awaiter(n,void 0,void 0,(function(){var e,n,a,i,o;return __generator(this,(function(f){switch(f.label){case 0:{s.$cssShim$=u.__stencil_cssshim}e=r.meta.url;n=new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(l.querySelectorAll("script")).find((function(e){return n.test(e.src)||e.getAttribute("data-stencil-namespace")===t}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,u.location.href));A(o.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:o.href})]}}))}))}));var A=function(e){var r=C(t);try{u[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var n=new Map;u[r]=function(t){var a=new URL(t,e).href;var i=n.get(a);if(!i){var o=l.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){o.onload=function(){e(u[r].m);o.remove()}}));n.set(a,i);l.head.appendChild(o)}return i}}};var M=function(e,r){if(e!=null&&!O(e)){if(r&1){return String(e)}return e}return e};var T="hydrated";var B=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var o=false;var u=false;var l=[];var s=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!O(a)){a=String(a)}if(o&&u){l[l.length-1].$text$+=a}else{l.push(o?N(null,a):a)}u=o}}};s(n);if(r){if(r.key){i=r.key}{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var c=N(e,null);c.$attrs$=r;if(l.length>0){c.$children$=l}{c.$key$=i}return c}));var N=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}return n};var I={};var z=function(e){return e&&e.$tag$===I};var q=function(e,r,n,t,a,i){if(n===t){return}var o=p(e,r);var u=r.toLowerCase();if(r==="class"){var l=e.classList;var s=V(n);var f=V(t);l.remove.apply(l,s.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!s.includes(e)})))}else if(r==="key");else{var c=O(t);if((o||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var $=t==null?"":t;if(n==null||e[r]!=$){e[r]=$}}else{e[r]=t}}catch(v){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!o||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}};var H=/\s/;var V=function(e){return!e?[]:e.split(H)};var F=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var o=r.$attrs$||P;{for(t in i){if(!(t in o)){q(a,t,i[t],undefined,n,r.$flags$)}}}for(t in o){q(a,t,i[t],o[t],n,r.$flags$)}};var W=function(e,r,n,t){var a=r.$children$[n];var i=0;var u;var s;if(a.$text$!==null){u=a.$elm$=l.createTextNode(a.$text$)}else{u=a.$elm$=l.createElement(a.$tag$);{F(null,a,o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){s=W(e,a,i);if(s){u.appendChild(s)}}}}return u};var D=function(e,r,n,t,a,i){var o=e;var u;for(;a<=i;++a){if(t[a]){u=W(null,n,a);if(u){t[a].$elm$=u;o.insertBefore(u,r)}}}};var G=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var Q=function(e,r,n,t){var a=0;var i=0;var o=0;var u=0;var l=r.length-1;var s=r[0];var f=r[l];var c=t.length-1;var $=t[0];var v=t[c];var h;var p;while(a<=l&&i<=c){if(s==null){s=r[++a]}else if(f==null){f=r[--l]}else if($==null){$=t[++i]}else if(v==null){v=t[--c]}else if(J(s,$)){K(s,$);s=r[++a];$=t[++i]}else if(J(f,v)){K(f,v);f=r[--l];v=t[--c]}else if(J(s,v)){K(s,v);e.insertBefore(s.$elm$,f.$elm$.nextSibling);s=r[++a];v=t[--c]}else if(J(f,$)){K(f,$);e.insertBefore(f.$elm$,s.$elm$);f=r[--l];$=t[++i]}else{o=-1;{for(u=a;u<=l;++u){if(r[u]&&r[u].$key$!==null&&r[u].$key$===$.$key$){o=u;break}}}if(o>=0){p=r[o];if(p.$tag$!==$.$tag$){h=W(r&&r[i],n,o)}else{K(p,$);r[o]=undefined;h=p.$elm$}$=t[++i]}else{h=W(r&&r[i],n,i);$=t[++i]}if(h){{s.$elm$.parentNode.insertBefore(h,s.$elm$)}}}}if(a>l){D(e,t[c+1]==null?null:t[c+1].$elm$,n,t,i,c)}else if(i>c){G(r,a,l)}};var J=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}return true}return false};var K=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;if(r.$text$===null){{{F(e,r,o)}}if(t!==null&&a!==null){Q(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}D(n,null,r,a,0,a.length-1)}else if(t!==null){G(t,0,t.length-1)}}else if(e.$text$!==r.$text$){n.data=r.$text$}};var X=function(e,r,n,t){var a=r.$vnode$||N(null,null);var i=z(t)?t:B(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;K(a,i)};var Y=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Z=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=r.$ancestorComponent$;var i=r.$lazyInstance$;var o=function(){return ee(e,r,n,i)};var u=e["s-rc"];Y(r,a);var l;if(t){{l=ae(i,"componentWillLoad")}}if(u){u.forEach((function(e){return e()}));e["s-rc"]=undefined}return ie(l,(function(){return E(o)}))};var ee=function(e,r,n,t,a){{{try{X(e,r,n,t.render())}catch(u){m(u)}}}if(s.$cssShim$){s.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}{var i=e["s-p"];var o=function(){return re(e,r,n)};if(i.length===0){o()}else{Promise.all(i).then(o);r.$flags$|=4;i.length=0}}};var re=function(e,r,n){var t=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(T)}{r.$onReadyResolve$(e);if(!t){te()}}}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){x((function(){return Z(e,r,n,false)}))}r.$flags$&=~(4|512)}};var ne=function(e,r){{var n=$(e);if((n.$flags$&(2|16))===2){Z(e,n,r,false)}}};var te=function(){{l.documentElement.classList.add(T)}{s.$flags$|=2}};var ae=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){m(t)}}return undefined};var ie=function(e,r){return e&&e.then?e.then(r):r()};var oe=function(e,r){return $(e).$instanceValues$.get(r)};var ue=function(e,r,n,t){var a=$(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(r);var u=a.$flags$;var l=a.$lazyInstance$;n=M(n,t.$members$[r][0]);if(n!==o&&(!(u&8)||o===undefined)){a.$instanceValues$.set(r,n);if(l){if((u&(2|16))===2){Z(i,a,t,false)}}}};var le=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return oe(this,t)},set:function(e){ue(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;s.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var se=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a;return __generator(this,(function(o){switch(o.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=g(t);if(!i.then)return[3,2];return[4,i];case 1:i=o.sent();o.label=2;case 2:if(!i.isProxied){le(i,t,2);i.isProxied=true}{r.$flags$|=8}try{new i(r)}catch(u){m(u)}{r.$flags$&=~8}o.label=3;case 3:n=r.$ancestorComponent$;a=function(){return Z(e,r,t,true)};if(n&&n["s-rc"]){n["s-rc"].push(a)}else{a()}return[2]}}))}))};var fe=function(e,r){if((s.$flags$&1)===0){var n=$(e);if(!(n.$flags$&1)){n.$flags$|=1;{var t=e;while(t=t.parentNode||t.host){if(t["s-p"]){Y(n,n.$ancestorComponent$=t);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{x((function(){return se(e,n,r)}))}}}};var ce=function(e){if((s.$flags$&1)===0){var r=$(e);if(s.$cssShim$){s.$cssShim$.removeHost(e)}}};var $e=e("b",(function(e,r){if(r===void 0){r={}}var n=[];var t=r.exclude||[];var a=l.head;var i=u.customElements;var o=a.querySelector("meta[charset]");var f=l.createElement("style");var c;Object.assign(s,r);s.$resourcesUrl$=new URL(r.resourcesUrl||"./",l.baseURI).href;if(r.syncQueue){s.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var a={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{a.$members$=r[2]}var o=a.$tagName$;var u=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;h(r);return n}r.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}s.jmp((function(){return fe(e,a)}))};r.prototype.disconnectedCallback=function(){var e=this;s.jmp((function(){return ce(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){ne(this,a)};r.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return r}(HTMLElement);a.$lazyBundleIds$=e[0];if(!t.includes(o)&&!i.get(o)){n.push(o);i.define(o,le(u,a,1))}}))}));f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");a.insertBefore(f,o?o.nextSibling:a.firstChild);s.jmp((function(){return c=setTimeout(te,30)}))}));var ve=function(e){var r=new URL(e,s.$resourcesUrl$);return r.origin!==u.location.origin?r.href:r.pathname};var he=e("g",(function(e,r){if(r in f){return f[r]}else if(r==="window"){return u}else if(r==="document"){return l}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return ve(".")}else if(r==="queue"){return{write:E,read:k,tick:{then:function(e){return x(e)}}}}return undefined}));f.store=function(){var e;var r=function(r){e=r};var n=function(){return e&&e.getState()};var t=function(){return e};var a=function(r,n){Object.keys(n).forEach((function(t){var a=n[t];Object.defineProperty(r,t,{get:function(){return function(){var r=[];for(var n=0;n<arguments.length;n++){r[n]=arguments[n]}return e.dispatch(a.apply(void 0,r))}},configurable:true,enumerable:true})}))};var i=function(r,n){var t=function(t,a){var i=n(e.getState());Object.keys(i).forEach((function(e){var n=i[e];r[e]=n}))};var a=e.subscribe((function(){return t()}));t();return a};return{getStore:t,setStore:r,getState:n,mapDispatchToProps:a,mapStateToProps:i}}()}}}));