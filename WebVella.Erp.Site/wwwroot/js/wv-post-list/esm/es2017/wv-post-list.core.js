/*!
 * WvPostList: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){let n,o,i=null,r=!1,l=!1,s=arguments.length;for(;s-- >2;)d.push(arguments[s]);for(;d.length>0;){let t=d.pop();if(t&&void 0!==t.pop)for(s=t.length;s--;)d.push(t[s]);else"boolean"==typeof t&&(t=null),(l="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(l=!1)),l&&r?i[i.length-1].vtext+=t:null===i?i=[l?{vtext:t}:t]:i.push(l?{vtext:t}:t),r=l}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(s in t.class)t.class[s]&&d.push(s);t.class=d.join(" "),d.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],v):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,e:void 0,t:!1}}function t(e,t,o={}){let i=Array.isArray(t)?t:[t];const r=e.document,s=o.hydratedCssClass||"hydrated",a=o.exclude;a&&(i=i.filter(e=>-1===a.indexOf(e[0])));const c=i.map(e=>e[0]);if(c.length>0){const e=r.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),r.head.insertBefore(e,r.head.firstChild)}const f=o.namespace||"WvPostList";return S||(S=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,r=0;r<n.length;r++)if(e[n[r]].componentOnReady){if(e[n[r]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,f,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!O[f]){const t={},l=o.resourcesUrl||"./";n(f,t,e,r,l,s),O[f]=_(f,t,e,r,l,s,i)}(function t(){i.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),O[f].n(function i(e){const t=b(e),n=t.o,o=l(e[0]);return t.o=(({mode:e,scoped:t})=>{return function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])}("string"==typeof n?n:n[e],t,o)}),t}(t),n)})})()})}import n from"./wv-post-list.global.js";function applyPolyfills(){return Promise.resolve()}const o={},i=e=>null!=e,r=e=>e.toLowerCase(),l=e=>r(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),s=(e,t,n,o,i,l)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.i(t);o&&o.r&&o.r[n]?c(t,n,i):"ref"!==n&&(c(t,n,null==i?"":i),null!=i&&!1!==i||e.s.l(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",r(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",r(t),n):e.setAttribute(t,n))})(t,n,i):(l||e.s.a(t,n)&&(null==i||!1===i))&&e.s.l(t,n);else n=r(n)in t?r(n.substring(2)):r(n[2])+n.substring(3),i?i!==o&&e.s.c(t,n,i):e.s.f(t,n);else if(o!==i){const e=a(o),n=a(i),r=e.filter(e=>!n.includes(e)),l=a(t.className).filter(e=>!r.includes(e)),s=n.filter(t=>!e.includes(t)&&!l.includes(t));l.push(...s),t.className=l.join(" ")}},a=e=>null==e||""===e?[]:e.trim().split(/\s+/),c=(e,t,n)=>{try{e[t]=n}catch(e){}},f=(e,t,n,i,r)=>{const l=11===n.e.nodeType&&n.e.host?n.e.host:n.e,a=t&&t.vattrs||o,c=n.vattrs||o;for(r in a)c&&null!=c[r]||null==a[r]||s(e,l,r,a[r],void 0,i,n.t);for(r in c)r in a&&c[r]===("value"===r||"checked"===r?l[r]:a[r])||s(e,l,r,a[r],c[r],i,n.t)};let u=!1;const p=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.e),e.vchildren&&e.vchildren.forEach(e=>{p(e,t)}))},d=[],v={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},b=(e,t,n)=>{const[o,i,,r,l,s]=e,a={color:{u:"color"}};if(r)for(t=0;t<r.length;t++)a[(n=r[t])[0]]={p:n[1],d:!!n[2],u:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,v:n[4]};return{b:o,o:i,r:Object.assign({},a),m:l,y:s?s.map(m):void 0}},m=e=>({w:e[0],M:e[1],g:!!e[2],k:!!e[3],C:!!e[4]}),y=(e,t)=>{return i(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t},h=(e,t,n)=>{e.j.add(t),e.A.has(t)||(e.A.set(t,!0),e._?e.queue.write(()=>w(e,t,n)):e.queue.tick(()=>w(e,t,n)))},w=async(t,n,o,i,r,l)=>{if(t.A.delete(n),!t.O.has(n)){if(!(r=t.S.get(n))){if((l=t.W.get(n))&&!l["s-rn"])return void(l["s-rc"]=l["s-rc"]||[]).push(()=>{w(t,n,o)});if(r=C(t,n,t.N.get(n),o))try{r.componentWillLoad&&await r.componentWillLoad()}catch(e){t.x(e,3,n)}}((t,n,o,i)=>{try{const r=n.P.host,l=n.P.encapsulation,s=!1;let a,c=o;if(i.render||i.hostData||r||a){t.L=!0;const n=i.render&&i.render();let r;t.L=!1;const a=e(null,r,n),f=t.R.get(o)||{};f.e=c,t.R.set(o,t.render(o,f,a,s,l))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.L=!1,t.x(e,8,o,!0)}})(t,t.i(n),n,r),n["s-init"]()}},M=(e,t,n,o,r,l,s,a,c)=>{if(t.type||t.state){const f=e.T.get(n);t.state||(!t.attr||void 0!==f[r]&&""!==f[r]||(a=l&&l.D)&&i(c=a[t.attr])&&(f[r]=y(t.type,c)),n.hasOwnProperty(r)&&(void 0===f[r]&&(f[r]=y(t.type,n[r])),"mode"!==r&&delete n[r])),o.hasOwnProperty(r)&&void 0===f[r]&&(f[r]=o[r]),k(o,r,function f(t){return(t=e.T.get(e.H.get(this)))&&t[r]},function u(n,o){(o=e.H.get(this))&&(t.state||t.mutable)&&g(e,o,r,n,s)})}else if(t.context){const i=e.q(t.context);void 0!==i&&$(o,r,i.B&&i.B(n)||i)}},g=(e,t,n,o,i,r,l)=>{(l=e.T.get(t))||e.T.set(t,l={}),o!==l[n]&&(l[n]=o,e.S.get(t)&&!e.L&&t["s-rn"]&&h(e,t,i))},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},k=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},C=(e,t,n,o,i,r)=>{try{i=new(r=e.i(t).P),((e,t,n,o,i,r)=>{e.H.set(o,n),e.T.has(n)||e.T.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,l])=>{M(e,l,n,o,t,i,r)})})(e,r,t,i,n,o)}catch(n){i={},e.x(n,7,t,!0)}return e.S.set(t,i),i},E=(e,t,n,o,i,r)=>{if(e.j.delete(t),(i=e.W.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.W.delete(t)),e.F.length&&!e.j.size)for(;r=e.F.shift();)r()},j=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.p&&k(n,t,function n(){return(e.T.get(this)||{})[t]},function n(r){g(e,this,t,y(i.v,r),o)})})},A=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.O.delete(n),e.I.has(n)||(e.Q=!0,e.j.add(n),e.I.set(n,!0),((e,t,n)=>{for(n=t;n=e.s.U(n);)if(e.Y(n)){e.Z.has(t)||(e.W.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.N.set(n,((e,t,n,o,i)=>{return n.mode||(n.mode=e.z(n)),n["s-cr"]||e.G(n,"ssrv")||e.J&&1===t.m||(n["s-cr"]=e.K(""),n["s-cr"]["s-cn"]=!0,e.V(n,n["s-cr"],e.X(n)[0])),o={D:{}},t.r&&Object.keys(t.r).forEach(r=>{(i=t.r[r].u)&&(o.D[i]=e.G(n,i))}),o})(e.s,t,n)),e.ee(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.te&&((e,t)=>{for(;t;){if(!e.ne(t))return 9!==e.oe(t);t=e.ne(t)}})(e.s,t)&&(e.O.set(t,!0),E(e,t),p(e.R.get(t),!0),e.s.f(t),e.ie.delete(t),[e.W,e.re,e.N].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,r,l)=>{if((i=e.S.get(t))&&!e.O.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.Z.set(t,!0),(l=e.le.has(t))||(e.le.set(t,!0),t["s-ld"]=void 0,e.s.se(t,n));try{p(e.R.get(t)),(r=e.re.get(t))&&(r.forEach(e=>e(t)),e.re.delete(t)),!l&&i.componentDidLoad&&i.componentDidLoad()}catch(n){e.x(n,4,t)}E(e,t)}})(e,this,o)},n.forceUpdate=function(){h(e,this,i)},t.r){const o=Object.entries(t.r);{let e={};o.forEach(([t,{u:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[r(n)];i&&(t[i]=o)})(e,this,t,o)}}j(e,o,n,i)}},_=(t,n,o,l,s,a)=>{const c=o.performance,p={html:{}},d=o[t]=o[t]||{},v=((e,t,n)=>{const o=new WeakMap,i={ae:n,J:!!n.documentElement.attachShadow,ce:!1,oe:e=>e.nodeType,fe:e=>n.createElement(e),ue:(e,t)=>n.createElementNS(e,t),K:e=>n.createTextNode(e),pe:e=>n.createComment(e),V:(e,t,n)=>e.insertBefore(t,n),de:e=>e.remove(),ve:(e,t)=>e.appendChild(t),se:(e,t)=>{e.classList.add(t)},X:e=>e.childNodes,ne:e=>e.parentNode,be:e=>e.nextSibling,me:e=>e.previousSibling,ye:e=>r(e.nodeName),he:e=>e.textContent,we:(e,t)=>e.textContent=t,G:(e,t)=>e.getAttribute(t),Me:(e,t,n)=>e.setAttribute(t,n),l:(e,t)=>e.removeAttribute(t),a:(e,t)=>e.hasAttribute(t),z:t=>t.getAttribute("mode")||(e.Context||{}).mode,ge:(e,o)=>{return"child"===o?e.firstElementChild:"parent"===o?i.U(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e},c:(t,n,r,l,s,a,c,f,u)=>{let p=t,d=r,v=o.get(t);u=n,v&&v[u]&&v[u](),"object"==typeof a&&(p=a),p&&(c=i.ce?{capture:!!l,passive:!!s}:!!l,e.ael(p,n,d,c),v||o.set(t,v={}),v[u]=(()=>{p&&e.rel(p,n,d,c),v[u]=null}))},f:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},$e:(e,n,o,i)=>{return i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i},U:(e,t)=>(t=i.ne(e))&&11===i.oe(t)?t.host:t,ke:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(d,o,l),b=v.ae.documentElement,m=o["s-defined"]=o["s-defined"]||{},y={s:v,n:(e,t)=>{o.customElements.get(e.b)||(A(y,p[e.b]=e,t.prototype,a,c),t.observedAttributes=Object.values(e.r).map(e=>e.u).filter(e=>!!e),o.customElements.define(e.b,t))},i:e=>p[v.ye(e)],q:e=>n[e],isClient:!0,Y:e=>!(!m[v.ye(e)]&&!y.i(e)),x:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=((e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),r=!1!==e.asyncQueue,l=Promise.resolve(),s=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=r?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){s.push(e),1===s.length&&l.then(()=>p(s))},read:u(a),write:u(c)}}})(d,o),ee:(e,t)=>{{const n=!1,o={mode:t.mode,scoped:n};e.o(o).then(n=>{try{e.P=n}catch(t){console.error(t),e.P=class{}}h(y,t,c)})}},L:!1,_:!1,te:!1,Ce:void 0,W:new WeakMap,Ee:new WeakMap,I:new WeakMap,ie:new WeakMap,le:new WeakMap,Z:new WeakMap,H:new WeakMap,N:new WeakMap,S:new WeakMap,O:new WeakMap,A:new WeakMap,re:new WeakMap,je:new WeakMap,R:new WeakMap,T:new WeakMap,j:new Set,F:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=o,n.location=o.location,n.document=l,n.resourcesUrl=n.publicPath=s,d.h=e,d.Context=n,d.onReady=(()=>new Promise(e=>y.queue.write(()=>y.j.size?y.F.push(e):e()))),y.render=((e,t)=>{let n,o,r,l,s,a,c;const p=(r,v,b,m,y,h,w,M,g)=>{if(M=v.vchildren[b],n||(l=!0,"slot"===M.vtag&&(o&&t.se(m,o+"-s"),M.vchildren?M.Ae=!0:M._e=!0)),i(M.vtext))M.e=t.K(M.vtext);else if(M._e)M.e=t.K("");else{if(h=M.e=u||"svg"===M.vtag?t.ue("http://www.w3.org/2000/svg",M.vtag):t.fe(M.Ae?"slot-fb":M.vtag),e.Y(h)&&e.Z.delete(c),u="svg"===M.vtag||"foreignObject"!==M.vtag&&u,f(e,null,M,u),i(o)&&h["s-si"]!==o&&t.se(h,h["s-si"]=o),M.vchildren)for(y=0;y<M.vchildren.length;++y)(w=p(r,M,y,h))&&t.ve(h,w);"svg"===M.vtag&&(u=!1)}return M.e["s-hn"]=a,(M.Ae||M._e)&&(M.e["s-sr"]=!0,M.e["s-cr"]=s,M.e["s-sn"]=M.vname||"",(g=r&&r.vchildren&&r.vchildren[b])&&g.vtag===M.vtag&&r.e&&d(r.e)),M.e},d=(n,o,i,r)=>{e.te=!0;const s=t.X(n);for(i=s.length-1;i>=0;i--)(r=s[i])["s-hn"]!==a&&r["s-ol"]&&(t.de(r),t.V(h(r),r,y(r)),t.de(r["s-ol"]),r["s-ol"]=null,l=!0),o&&d(r,o);e.te=!1},v=(e,n,o,r,l,s,c,f)=>{const u=e["s-cr"];for((c=u&&t.ne(u)||e).shadowRoot&&t.ye(c)===a&&(c=c.shadowRoot);l<=s;++l)r[l]&&(f=i(r[l].vtext)?t.K(r[l].vtext):p(null,o,l,e))&&(r[l].e=f,t.V(c,f,y(n)))},b=(e,n,o,l)=>{for(;n<=o;++n)i(e[n])&&(l=e[n].e,r=!0,l["s-ol"]?t.de(l["s-ol"]):d(l,!0),t.de(l))},m=(e,t)=>{return e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname)},y=e=>{return e&&e["s-ol"]?e["s-ol"]:e},h=e=>{return t.ne(e["s-ol"]?e["s-ol"]:e)},w=(n,o,r)=>{const l=o.e=n.e,s=n.vchildren,a=o.vchildren;u=o.e&&i(t.U(o.e))&&void 0!==o.e.ownerSVGElement,u="svg"===o.vtag||"foreignObject"!==o.vtag&&u,i(o.vtext)?(r=l["s-cr"])?t.we(t.ne(r),o.vtext):n.vtext!==o.vtext&&t.we(l,o.vtext):("slot"!==o.vtag&&f(e,n,o,u),i(s)&&i(a)?((e,n,o,r,l,s,a,c)=>{let f=0,u=0,M=n.length-1,g=n[0],$=n[M],k=r.length-1,C=r[0],E=r[k];for(;f<=M&&u<=k;)if(null==g)g=n[++f];else if(null==$)$=n[--M];else if(null==C)C=r[++u];else if(null==E)E=r[--k];else if(m(g,C))w(g,C),g=n[++f],C=r[++u];else if(m($,E))w($,E),$=n[--M],E=r[--k];else if(m(g,E))"slot"!==g.vtag&&"slot"!==E.vtag||d(t.ne(g.e)),w(g,E),t.V(e,g.e,t.be($.e)),g=n[++f],E=r[--k];else if(m($,C))"slot"!==g.vtag&&"slot"!==E.vtag||d(t.ne($.e)),w($,C),t.V(e,$.e,g.e),$=n[--M],C=r[++u];else{for(l=null,s=f;s<=M;++s)if(n[s]&&i(n[s].vkey)&&n[s].vkey===C.vkey){l=s;break}i(l)?((c=n[l]).vtag!==C.vtag?a=p(n&&n[u],o,l,e):(w(c,C),n[l]=void 0,a=c.e),C=r[++u]):(a=p(n&&n[u],o,u,e),C=r[++u]),a&&t.V(h(g.e),a,y(g.e))}f>M?v(e,null==r[k+1]?null:r[k+1].e,o,r,u,k):u>k&&b(n,f,M)})(l,s,o,a):i(a)?(i(n.vtext)&&t.we(l,""),v(l,null,o,a,0,a.length-1)):i(s)&&b(s,0,s.length-1)),u&&"svg"===o.vtag&&(u=!1)},M=(e,n,o,i,r,l,s,a)=>{for(i=0,r=(o=t.X(e)).length;i<r;i++)if(n=o[i],1===t.oe(n)){if(n["s-sr"])for(s=n["s-sn"],n.hidden=!1,l=0;l<r;l++)if(o[l]["s-hn"]!==n["s-hn"])if(a=t.oe(o[l]),""!==s){if(1===a&&s===t.G(o[l],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.he(o[l]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,i,l,s,a,c,f,u)=>{for(l=0,s=(n=t.X(e)).length;l<s;l++){if((o=n[l])["s-sr"]&&(i=o["s-cr"]))for(c=t.X(t.ne(i)),f=o["s-sn"],a=c.length-1;a>=0;a--)(i=c[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.oe(i))||8===u)&&""===f||1===u&&null===t.G(i,"slot")&&""===f||1===u&&t.G(i,"slot")===f)&&(g.some(e=>e.Oe===i)||(r=!0,i["s-sn"]=f,g.push({Se:o,Oe:i})));1===t.oe(o)&&$(o)}};return(i,f,u,p,d,v,b,m,y,h,k,C)=>{if(c=i,a=t.ye(c),s=c["s-cr"],n=p,o=c["s-sc"],l=r=!1,w(f,u),l){for($(u.e),b=0;b<g.length;b++)(m=g[b]).Oe["s-ol"]||((y=t.K(""))["s-nr"]=m.Oe,t.V(t.ne(m.Oe),m.Oe["s-ol"]=y,m.Oe));for(e.te=!0,b=0;b<g.length;b++){for(m=g[b],k=t.ne(m.Se),C=t.be(m.Se),y=m.Oe["s-ol"];y=t.me(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===m.Oe["s-sn"]&&k===t.ne(h)&&(h=t.be(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.ne(m.Oe)||t.be(m.Oe)!==C)&&m.Oe!==C&&(t.de(m.Oe),t.V(k,m.Oe,C))}e.te=!1}return r&&M(u.e),g.length=0,u}})(y,v),b["s-ld"]=[],b["s-rn"]=!0,b["s-init"]=(()=>{y.Z.set(b,d.loaded=y._=!0),v.$e(o,"appload",{detail:{namespace:t}})}),((e,t,n,o,i,r)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.i(t);if(o)if(e.Z.has(t))n(t);else{const o=e.re.get(t)||[];o.push(n),e.re.set(t,o)}return!!o}),i){for(r=i.length-1;r>=0;r--)t.componentOnReady(i[r][0],i[r][1])&&i.splice(r,1);for(r=0;r<o.length;r++)if(!n[o[r]].componentOnReady)return;for(r=0;r<i.length;r++)i[r][1](null);i.length=0}})(y,d,o,o["s-apps"],o["s-cr"]),d.initialized=!0,y},O={};let S=!1;export{t as defineCustomElement,e as h};