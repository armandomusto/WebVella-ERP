var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{s(t.next(e))}catch(r){i(r)}}function o(e){try{s(t["throw"](e))}catch(r){i(r)}}function s(e){e.done?n(e.value):a(e.value).then(l,o)}s((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(r){return s([e,r])}}function s(l){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;a=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1];i=l;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(l);break}if(i[2])n.ops.pop();n.trys.pop();continue}l=r.call(e,n)}catch(o){l=[6,o];a=0}finally{t=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="wv-timelog-list";var a=0;var i=false;var l=false;var o=window;var s=document;var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var f={};var c=new WeakMap;var $=function(e){return c.get(e)};var v=e("r",(function(e,r){return c.set(r.$lazyInstance$=e,r)}));var h=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return c.set(e,r)};var m=function(e,r){return r in e};var p=function(e){return console.error(e)};var d=new Map;var g=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var l=d.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{d.set(i,e)}return e[a]}),p)};var y=[];var b=[];var w=[];var _=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&u.$flags$&4){x(R)}else{u.raf(R)}}}};var S=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){p(n)}}e.length=0};var j=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){p(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var R=function(){a++;S(y);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(b,e);j(w,e);if(b.length>0){w.push.apply(w,b);b.length=0}if(i=y.length+b.length+w.length>0){u.raf(R)}else{a=0}};var x=function(e){return Promise.resolve().then(e)};var k=_(y,false);var E=_(b,true);var P={};var O=function(e){e=typeof e;return e==="object"||e==="function"};var L=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var C=e("a",(function(){if(!(o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)"))){return r.import("./p-9b741424.system.js").then((function(){u.$cssShim$=o.__stencil_cssshim;if(u.$cssShim$){return u.$cssShim$.initShim()}}))}return Promise.resolve()}));var U=e("p",(function(){return __awaiter(n,void 0,void 0,(function(){var e,n,a,i,l;return __generator(this,(function(f){switch(f.label){case 0:{u.$cssShim$=o.__stencil_cssshim}e=r.meta.url;n=new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(s.querySelectorAll("script")).find((function(e){return n.test(e.src)||e.getAttribute("data-stencil-namespace")===t}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:l=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,o.location.href));A(l.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:l.href})]}}))}))}));var A=function(e){var r=L(t);try{o[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var n=new Map;o[r]=function(t){var a=new URL(t,e).href;var i=n.get(a);if(!i){var l=s.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){l.onload=function(){e(o[r].m);l.remove()}}));n.set(a,i);s.head.appendChild(l)}return i}}};var M=function(e,r){if(e!=null&&!O(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var T="hydrated";var B=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var l=false;var o=false;var s=[];var u=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!O(a)){a=String(a)}if(l&&o){s[s.length-1].$text$+=a}else{s.push(l?I(null,a):a)}o=l}}};u(n);if(r){if(r.key){i=r.key}{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var c=I(e,null);c.$attrs$=r;if(s.length>0){c.$children$=s}{c.$key$=i}return c}));var I=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}return n};var N={};var z=function(e){return e&&e.$tag$===N};var q=function(e,r,n,t,a,i){if(n===t){return}var l=m(e,r);var s=r.toLowerCase();if(r==="class"){var f=e.classList;var c=V(n);var $=V(t);f.remove.apply(f,c.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!c.includes(e)})))}else if(r==="key");else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(m(o,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(n){u.rel(e,r,n,false)}if(t){u.ael(e,r,t,false)}}else{var v=O(t);if((l||v&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var h=t==null?"":t;if(n==null||e[r]!=h){e[r]=h}}else{e[r]=t}}catch(p){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!l||i&4||a)&&!v){t=t===true?"":t;{e.setAttribute(r,t)}}}};var H=/\s/;var V=function(e){return!e?[]:e.split(H)};var D=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var l=r.$attrs$||P;{for(t in i){if(!(t in l)){q(a,t,i[t],undefined,n,r.$flags$)}}}for(t in l){q(a,t,i[t],l[t],n,r.$flags$)}};var F=function(e,r,n,t){var a=r.$children$[n];var i=0;var o;var u;if(a.$text$!==null){o=a.$elm$=s.createTextNode(a.$text$)}else{o=a.$elm$=s.createElement(a.$tag$);{D(null,a,l)}if(a.$children$){for(i=0;i<a.$children$.length;++i){u=F(e,a,i);if(u){o.appendChild(u)}}}}return o};var W=function(e,r,n,t,a,i){var l=e;var o;for(;a<=i;++a){if(t[a]){o=F(null,n,a);if(o){t[a].$elm$=o;l.insertBefore(o,r)}}}};var G=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var Q=function(e,r,n,t){var a=0;var i=0;var l=0;var o=0;var s=r.length-1;var u=r[0];var f=r[s];var c=t.length-1;var $=t[0];var v=t[c];var h;var m;while(a<=s&&i<=c){if(u==null){u=r[++a]}else if(f==null){f=r[--s]}else if($==null){$=t[++i]}else if(v==null){v=t[--c]}else if(J(u,$)){K(u,$);u=r[++a];$=t[++i]}else if(J(f,v)){K(f,v);f=r[--s];v=t[--c]}else if(J(u,v)){K(u,v);e.insertBefore(u.$elm$,f.$elm$.nextSibling);u=r[++a];v=t[--c]}else if(J(f,$)){K(f,$);e.insertBefore(f.$elm$,u.$elm$);f=r[--s];$=t[++i]}else{l=-1;{for(o=a;o<=s;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===$.$key$){l=o;break}}}if(l>=0){m=r[l];if(m.$tag$!==$.$tag$){h=F(r&&r[i],n,l)}else{K(m,$);r[l]=undefined;h=m.$elm$}$=t[++i]}else{h=F(r&&r[i],n,i);$=t[++i]}if(h){{u.$elm$.parentNode.insertBefore(h,u.$elm$)}}}}if(a>s){W(e,t[c+1]==null?null:t[c+1].$elm$,n,t,i,c)}else if(i>c){G(r,a,s)}};var J=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}return true}return false};var K=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;if(r.$text$===null){{{D(e,r,l)}}if(t!==null&&a!==null){Q(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}W(n,null,r,a,0,a.length-1)}else if(t!==null){G(t,0,t.length-1)}}else if(e.$text$!==r.$text$){n.data=r.$text$}};var X=function(e,r,n,t){var a=r.$vnode$||I(null,null);var i=z(t)?t:B(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;K(a,i)};var Y=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Z=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=r.$ancestorComponent$;var i=r.$lazyInstance$;var l=function(){return ee(e,r,n,i)};var o=e["s-rc"];Y(r,a);var s;if(t){{s=ae(i,"componentWillLoad")}}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}return ie(s,(function(){return E(l)}))};var ee=function(e,r,n,t,a){{{try{X(e,r,n,t.render())}catch(o){p(o)}}}if(u.$cssShim$){u.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}{var i=e["s-p"];var l=function(){return re(e,r,n)};if(i.length===0){l()}else{Promise.all(i).then(l);r.$flags$|=4;i.length=0}}};var re=function(e,r,n){var t=r.$lazyInstance$;var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(T)}{ae(t,"componentDidLoad")}{r.$onReadyResolve$(e);if(!a){te()}}}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){x((function(){return Z(e,r,n,false)}))}r.$flags$&=~(4|512)}};var ne=function(e,r){{var n=$(e);if((n.$flags$&(2|16))===2){Z(e,n,r,false)}}};var te=function(){{s.documentElement.classList.add(T)}{u.$flags$|=2}};var ae=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){p(t)}}return undefined};var ie=function(e,r){return e&&e.then?e.then(r):r()};var le=function(e,r){return $(e).$instanceValues$.get(r)};var oe=function(e,r,n,t){var a=$(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(r);var o=a.$flags$;var s=a.$lazyInstance$;n=M(n,t.$members$[r][0]);if(n!==l&&(!(o&8)||l===undefined)){a.$instanceValues$.set(r,n);if(s){if((o&(2|16))===2){Z(i,a,t,false)}}}};var se=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return le(this,t)},set:function(e){oe(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;u.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var ue=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a;return __generator(this,(function(l){switch(l.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=g(t);if(!i.then)return[3,2];return[4,i];case 1:i=l.sent();l.label=2;case 2:if(!i.isProxied){se(i,t,2);i.isProxied=true}{r.$flags$|=8}try{new i(r)}catch(o){p(o)}{r.$flags$&=~8}l.label=3;case 3:n=r.$ancestorComponent$;a=function(){return Z(e,r,t,true)};if(n&&n["s-rc"]){n["s-rc"].push(a)}else{a()}return[2]}}))}))};var fe=function(e,r){if((u.$flags$&1)===0){var n=$(e);if(!(n.$flags$&1)){n.$flags$|=1;{var t=e;while(t=t.parentNode||t.host){if(t["s-p"]){Y(n,n.$ancestorComponent$=t);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{x((function(){return ue(e,n,r)}))}}}};var ce=function(e){if((u.$flags$&1)===0){var r=$(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var $e=e("b",(function(e,r){if(r===void 0){r={}}var n=[];var t=r.exclude||[];var a=s.head;var i=o.customElements;var l=a.querySelector("meta[charset]");var f=s.createElement("style");var c;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",s.baseURI).href;if(r.syncQueue){u.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var a={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{a.$members$=r[2]}var l=a.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;h(r);return n}r.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}u.jmp((function(){return fe(e,a)}))};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return ce(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){ne(this,a)};r.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return r}(HTMLElement);a.$lazyBundleIds$=e[0];if(!t.includes(l)&&!i.get(l)){n.push(l);i.define(l,se(o,a,1))}}))}));f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");a.insertBefore(f,l?l.nextSibling:a.firstChild);u.jmp((function(){return c=setTimeout(te,30)}))}));var ve=function(e){var r=new URL(e,u.$resourcesUrl$);return r.origin!==o.location.origin?r.href:r.pathname};var he=e("g",(function(e,r){if(r in f){return f[r]}else if(r==="window"){return o}else if(r==="document"){return s}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return ve(".")}else if(r==="queue"){return{write:E,read:k,tick:{then:function(e){return x(e)}}}}return undefined}));f.store=function(){var e;var r=function(r){e=r};var n=function(){return e&&e.getState()};var t=function(){return e};var a=function(r,n){Object.keys(n).forEach((function(t){var a=n[t];Object.defineProperty(r,t,{get:function(){return function(){var r=[];for(var n=0;n<arguments.length;n++){r[n]=arguments[n]}return e.dispatch(a.apply(void 0,r))}},configurable:true,enumerable:true})}))};var i=function(r,n){var t=function(t,a){var i=n(e.getState());Object.keys(i).forEach((function(e){var n=i[e];r[e]=n}))};var a=e.subscribe((function(){return t()}));t();return a};return{getStore:t,setStore:r,getState:n,mapDispatchToProps:a,mapStateToProps:i}}()}}}));