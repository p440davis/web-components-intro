/*!
 * pdStencilTutorial: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){return"sc-"+e.t+(t&&t!==r?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function n(e,t){let n,o,i=null,r=!1,l=!1,s=arguments.length;for(;s-- >2;)$.push(arguments[s]);for(;$.length>0;){let t=$.pop();if(t&&void 0!==t.pop)for(s=t.length;s--;)$.push(t[s]);else"boolean"==typeof t&&(t=null),(l="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(l=!1)),l&&r?i[i.length-1].vtext+=t:null===i?i=[l?{vtext:t}:t]:i.push(l?{vtext:t}:t),r=l}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(s in t.class)t.class[s]&&$.push(s);t.class=$.join(" "),$.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],g):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}function o(e,t,n={}){let o=Array.isArray(t)?t:[t];const r=e.document,l=n.hydratedCssClass||"hydrated",s=n.exclude;s&&(o=o.filter(e=>-1===s.indexOf(e[0])));const c=o.map(e=>e[0]);if(c.length>0){const e=r.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+l+"{visibility:inherit}",e.setAttribute("data-styles",""),r.head.insertBefore(e,r.head.firstChild)}const a=n.namespace||"pdStencilTutorial";return D||(D=!0,function f(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,r=0;r<n.length;r++)if(e[n[r]].componentOnReady){if(e[n[r]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,a,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!T[a]){const t={},s=n.resourcesUrl||"./";i(a,t,e,r,s,l),T[a]=R(a,t,e,r,s,l,o)}(function t(){o.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),T[a].l(function i(e){const t=k(e),n=t.s,o=u(e[0]);return t.s=(({mode:e,scoped:t})=>{return function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])}("string"==typeof n?n:n[e],t,o)}),t}(t),n)})})()})}var i=function(){};function applyPolyfills(){return Promise.resolve()}const r="$",l={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},c=(t,n,o,i)=>{let l=o.t+r,s=o[l];if((2===o.u||1===o.u&&!t.v.p)&&(i["s-sc"]=s?e(o,i.mode):e(o)),s){let e=n.m.head;if(n.p)if(1===o.u)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let r=t.M.get(e);if(r||t.M.set(e,r={}),!r[l]){let t;{t=s.content.cloneNode(!0),r[l]=!0;const o=e.querySelectorAll("[data-styles]");n.g(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u=e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),p=(e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(d,f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(d,f(t),n):e.setAttribute(t,n))},d="http://www.w3.org/1999/xlink",b=(e,t,n,o,i,r,l)=>{if("class"!==n||r)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.k(t);o&&o.C&&o.C[n]?(y(t,n,i),l&&o.C[n].j&&p(t,o.C[n].A,i,4===o.C[n].O)):"ref"!==n&&(y(t,n,null==i?"":i),null!=i&&!1!==i||e.v._(t,n))}else null!=i&&"key"!==n?p(t,n,i):(r||e.v.S(t,n)&&(null==i||!1===i))&&e.v._(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),i?i!==o&&e.v.W(t,n,i):e.v.N(t,n);else if(o!==i){const e=v(o),n=v(i),r=e.filter(e=>!n.includes(e)),l=v(t.className).filter(e=>!r.includes(e)),s=n.filter(t=>!e.includes(t)&&!l.includes(t));l.push(...s),t.className=l.join(" ")}},v=e=>null==e||""===e?[]:e.trim().split(/\s+/),y=(e,t,n)=>{try{e[t]=n}catch(e){}},m=(e,t,n,o,i)=>{const r=11===n.o.nodeType&&n.o.host?n.o.host:n.o,s=t&&t.vattrs||l,c=n.vattrs||l;for(i in s)c&&null!=c[i]||null==s[i]||b(e,r,i,s[i],void 0,o,n.i);for(i in c)i in s&&c[i]===("value"===i||"checked"===i?r[i]:s[i])||b(e,r,i,s[i],c[i],o,n.i)};let h=!1;const w=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{w(e,t)}))},M=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),r=!1!==e.asyncQueue,l=Promise.resolve(),s=[],c=[],a=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(c);const t=r?i()+7*Math.ceil(n*(1/22)):Infinity;d(a,t),d(f,t),a.length>0&&(f.push(...a),a.length=0),(o=c.length+a.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){s.push(e),1===s.length&&l.then(()=>p(s))},read:u(c),write:u(a)}}},$=[],g={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},k=(e,t,n)=>{const[o,i,,r,l,s]=e,c={color:{A:"color"}};if(r)for(t=0;t<r.length;t++)c[(n=r[t])[0]]={P:n[1],j:!!n[2],A:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,O:n[4]};return{t:o,s:i,C:Object.assign({},c),u:l,L:s?s.map(C):void 0}},C=e=>({R:e[0],T:e[1],D:!!e[2],H:!!e[3],q:!!e[4]}),j=(e,t)=>{return a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t},E=(e,t,n)=>{e.B.add(t),e.F.has(t)||(e.F.set(t,!0),e.I?e.queue.write(()=>A(e,t,n)):e.queue.tick(()=>A(e,t,n)))},A=async(e,o,i,r,l,s)=>{if(e.F.delete(o),!e.U.has(o)){if(!(l=e.Y.get(o))){if((s=e.Z.get(o))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{A(e,o,i)});if(l=N(e,o,e.G.get(o),i))try{l.componentWillLoad&&await l.componentWillLoad()}catch(t){e.J(t,3,o)}}((e,o,i,r)=>{try{const l=o.K.host,s=o.K.encapsulation,c="shadow"===s&&e.v.p;let a,f=i;if(a=((e,t,n)=>{return e&&Object.keys(e).forEach(o=>{e[o].reflectToAttr&&((n=n||{})[o]=t[o])}),n})(o.K.properties,r),c&&(f=i.shadowRoot),!i["s-rn"]){e.V(e,e.v,o,i);const n=i["s-sc"];n&&(e.v.X(i,t(n,!0)),"scoped"===s&&e.v.X(i,t(n)))}if(r.render||r.hostData||l||a){e.ee=!0;const t=r.render&&r.render();let o;o=r.hostData&&r.hostData(),a&&(o=o?Object.assign(o,a):a),e.ee=!1;const l=n(null,o,t),u=e.te.get(i)||{};u.o=f,l.i=!0,e.te.set(i,e.render(i,u,l,c,s))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e.ee=!1,e.J(t,8,i,!0)}})(e,e.k(o),o,l),o["s-init"]()}},O=(e,t,n,o,i,r,l,s,c)=>{if(t.type||t.state){const f=e.ne.get(n);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(s=r&&r.oe)&&a(c=s[t.attr])&&(f[i]=j(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=j(t.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[W+i]=t.watchCallbacks.slice()),S(o,i,function f(t){return(t=e.ne.get(e.ie.get(this)))&&t[i]},function u(n,o){(o=e.ie.get(this))&&(t.state||t.mutable)&&_(e,o,i,n,l)})}},_=(e,t,n,o,i,r,l)=>{(l=e.ne.get(t))||e.ne.set(t,l={});const s=l[n];if(o!==s&&(l[n]=o,r=e.Y.get(t))){{const e=l[W+n];if(e)for(let t=0;t<e.length;t++)try{r[e[t]].call(r,o,s,n)}catch(e){console.error(e)}}!e.ee&&t["s-rn"]&&E(e,t,i)}},S=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},W="wc-",N=(e,t,n,o,i,r,l,s)=>{try{i=new(r=e.k(t).K),((e,t,n,o,i,r)=>{e.ie.set(o,n),e.ne.has(n)||e.ne.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,l])=>{O(e,l,n,o,t,i,r)})})(e,r,t,i,n,o),function c(e,t,n){if(t){const o=e.ie.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.re(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,r.events,i);try{if(l=e.le.get(t)){for(s=0;s<l.length;s+=2)i[l[s]](l[s+1]);e.le.delete(t)}}catch(n){e.J(n,2,t)}}catch(n){i={},e.J(n,7,t,!0)}return e.Y.set(t,i),i},x=(e,t,n,o,i,r)=>{if(e.B.delete(t),(i=e.Z.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.Z.delete(t)),e.se.length&&!e.B.size)for(;r=e.se.shift();)r()},P=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.P&&S(n,t,function n(){return(e.ne.get(this)||{})[t]},function n(r){_(e,this,t,j(i.O,r),o)})})},L=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.ce.has(n)||(e.ce.set(n,!0),function o(e,t){const n=e.k(t);n.L&&n.L.forEach(n=>{n.D||e.v.W(t,n.R,function o(e,t,n,i){return o=>{(i=e.Y.get(t))?i[n](o):((i=e.le.get(t)||[]).push(n,o),e.le.set(t,i))}}(e,t,n.T),n.q,n.H)})}(e,n)),e.U.delete(n),e.ae.has(n)||(e.fe=!0,e.B.add(n),e.ae.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.ue(n);)if(e.pe(n)){e.de.has(t)||(e.Z.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.G.set(n,((e,t,n,o,i)=>{return n.mode||(n.mode=e.be(n)),n["s-cr"]||e.ve(n,"ssrv")||e.p&&1===t.u||(n["s-cr"]=e.ye(""),n["s-cr"]["s-cn"]=!0,e.g(n,n["s-cr"],e.me(n)[0])),1===t.u&&e.p&&!n.shadowRoot&&e.he(n,{mode:"open"}),o={oe:{}},t.C&&Object.keys(t.C).forEach(r=>{(i=t.C[r].A)&&(o.oe[i]=e.ve(n,i))}),o})(e.v,t,n)),e.we(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.Me&&((e,t)=>{for(;t;){if(!e.$e(t))return 9!==e.ge(t);t=e.$e(t)}})(e.v,t)&&(e.U.set(t,!0),x(e,t),w(e.te.get(t),!0),e.v.N(t),e.ce.delete(t),[e.Z,e.ke,e.G].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,r,l)=>{if((i=e.Y.get(t))&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.de.set(t,!0),(l=e.Ce.has(t))||(e.Ce.set(t,!0),t["s-ld"]=void 0,e.v.X(t,n));try{w(e.te.get(t)),(r=e.ke.get(t))&&(r.forEach(e=>e(t)),e.ke.delete(t)),!l&&i.componentDidLoad&&i.componentDidLoad()}catch(n){e.J(n,4,t)}x(e,t)}})(e,this,o)},n.forceUpdate=function(){E(e,this,i)},t.C){const o=Object.entries(t.C);{let e={};o.forEach(([t,{A:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[f(n)];i&&(t[i]=o)})(e,this,t,o)}}P(e,o,n,i)}},R=(e,t,o,i,l,u)=>{const p=o.performance,d={html:{}},b=o[e]=o[e]||{},v=((e,t,n)=>{const o=new WeakMap,i={m:n,p:!!n.documentElement.attachShadow,je:!1,ge:e=>e.nodeType,Ee:e=>n.createElement(e),Ae:(e,t)=>n.createElementNS(e,t),ye:e=>n.createTextNode(e),Oe:e=>n.createComment(e),g:(e,t,n)=>e.insertBefore(t,n),_e:e=>e.remove(),Se:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},me:e=>e.childNodes,$e:e=>e.parentNode,We:e=>e.nextSibling,Ne:e=>e.previousSibling,xe:e=>f(e.nodeName),Pe:e=>e.textContent,Le:(e,t)=>e.textContent=t,ve:(e,t)=>e.getAttribute(t),Re:(e,t,n)=>e.setAttribute(t,n),_:(e,t)=>e.removeAttribute(t),S:(e,t)=>e.hasAttribute(t),be:t=>t.getAttribute("mode")||(e.Context||{}).mode,Te:(e,o)=>{return"child"===o?e.firstElementChild:"parent"===o?i.ue(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e},W:(t,n,r,l,c,a,f,u,p)=>{let d=t,b=r,v=o.get(t);p=n,v&&v[p]&&v[p](),"string"==typeof a?d=i.Te(t,a):"object"==typeof a?d=a:(u=n.split(":")).length>1&&(d=i.Te(t,u[0]),n=u[1]),d&&((u=n.split(".")).length>1&&(n=u[0],b=(e=>{e.keyCode===s[u[1]]&&r(e)})),f=i.je?{capture:!!l,passive:!!c}:!!l,e.ael(d,n,b,f),v||o.set(t,v={}),v[p]=(()=>{d&&e.rel(d,n,b,f),v[p]=null}))},N:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},De:(e,n,o,i)=>{return i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i},ue:(e,t)=>(t=i.$e(e))&&11===i.ge(t)?t.host:t,He:(e,t,n,o)=>e.setAttributeNS(t,n,o),he:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.je=!0}))}catch(e){}return i})(b,o,i),y=v.m.documentElement,w=o["s-defined"]=o["s-defined"]||{},$={v:v,l:(e,t)=>{o.customElements.get(e.t)||(L($,d[e.t]=e,t.prototype,u,p),t.observedAttributes=Object.values(e.C).map(e=>e.A).filter(e=>!!e),o.customElements.define(e.t,t))},k:e=>d[v.xe(e)],qe:e=>t[e],isClient:!0,pe:e=>!(!w[v.xe(e)]&&!$.k(e)),J:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=M(b,o),we:(e,t)=>{{const n=!v.p,o={mode:t.mode,scoped:n};e.s(o).then(n=>{try{e.K=n,function o(e,t,n,i,l){if(i){const n=t.t+(l||r);if(!t[n]){const o=e.Ee("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.Se(e.m.head,o)}}}(v,e,e.u,n.style,n.styleMode)}catch(t){console.error(t),e.K=class{}}E($,t,p)})}},ee:!1,I:!1,Me:!1,V:c,Z:new WeakMap,M:new WeakMap,ae:new WeakMap,ce:new WeakMap,Ce:new WeakMap,de:new WeakMap,ie:new WeakMap,G:new WeakMap,Y:new WeakMap,U:new WeakMap,F:new WeakMap,ke:new WeakMap,le:new WeakMap,te:new WeakMap,ne:new WeakMap,B:new Set,se:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.resourcesUrl=t.publicPath=l,t.enableListener=((e,t,n,o,i)=>(function r(e,t,n,o,i,l){if(t){const r=e.ie.get(t),s=e.k(r);if(s&&s.L)if(o){const o=s.L.find(e=>e.R===n);o&&e.v.W(r,n,e=>t[o.T](e),o.q,void 0===l?o.H:!!l,i)}else e.v.N(r,n)}})($,e,t,n,o,i)),$.re=t.emit=((e,n,o)=>v.De(e,t.eventNameFn?t.eventNameFn(n):n,o)),b.h=n,b.Context=t,b.onReady=(()=>new Promise(e=>$.queue.write(()=>$.B.size?$.se.push(e):e()))),$.render=((e,t)=>{let n,o,i,r,l,s,c;const f=(i,p,d,b,v,y,w,M,$)=>{if(M=p.vchildren[d],n||(r=!0,"slot"===M.vtag&&(o&&t.X(b,o+"-s"),M.vchildren?M.Be=!0:M.Fe=!0)),a(M.vtext))M.o=t.ye(M.vtext);else if(M.Fe)M.o=t.ye("");else{if(y=M.o=h||"svg"===M.vtag?t.Ae("http://www.w3.org/2000/svg",M.vtag):t.Ee(M.Be?"slot-fb":M.vtag),e.pe(y)&&e.de.delete(c),h="svg"===M.vtag||"foreignObject"!==M.vtag&&h,m(e,null,M,h),a(o)&&y["s-si"]!==o&&t.X(y,y["s-si"]=o),M.vchildren)for(v=0;v<M.vchildren.length;++v)(w=f(i,M,v,y))&&t.Se(y,w);"svg"===M.vtag&&(h=!1)}return M.o["s-hn"]=s,(M.Be||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=l,M.o["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[d])&&$.vtag===M.vtag&&i.o&&u(i.o)),M.o},u=(n,o,i,l)=>{e.Me=!0;const c=t.me(n);for(i=c.length-1;i>=0;i--)(l=c[i])["s-hn"]!==s&&l["s-ol"]&&(t._e(l),t.g(y(l),l,v(l)),t._e(l["s-ol"]),l["s-ol"]=null,r=!0),o&&u(l,o);e.Me=!1},p=(e,n,o,i,r,l,c,u)=>{const p=e["s-cr"];for((c=p&&t.$e(p)||e).shadowRoot&&t.xe(c)===s&&(c=c.shadowRoot);r<=l;++r)i[r]&&(u=a(i[r].vtext)?t.ye(i[r].vtext):f(null,o,r,e))&&(i[r].o=u,t.g(c,u,v(n)))},d=(e,n,o,r)=>{for(;n<=o;++n)a(e[n])&&(r=e[n].o,i=!0,r["s-ol"]?t._e(r["s-ol"]):u(r,!0),t._e(r))},b=(e,t)=>{return e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname)},v=e=>{return e&&e["s-ol"]?e["s-ol"]:e},y=e=>{return t.$e(e["s-ol"]?e["s-ol"]:e)},w=(n,o,i)=>{const r=o.o=n.o,l=n.vchildren,s=o.vchildren;h=o.o&&a(t.ue(o.o))&&void 0!==o.o.ownerSVGElement,h="svg"===o.vtag||"foreignObject"!==o.vtag&&h,a(o.vtext)?(i=r["s-cr"])?t.Le(t.$e(i),o.vtext):n.vtext!==o.vtext&&t.Le(r,o.vtext):("slot"!==o.vtag&&m(e,n,o,h),a(l)&&a(s)?((e,n,o,i,r,l,s,c)=>{let m=0,h=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,C=i[0],j=i[k];for(;m<=M&&h<=k;)if(null==$)$=n[++m];else if(null==g)g=n[--M];else if(null==C)C=i[++h];else if(null==j)j=i[--k];else if(b($,C))w($,C),$=n[++m],C=i[++h];else if(b(g,j))w(g,j),g=n[--M],j=i[--k];else if(b($,j))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.$e($.o)),w($,j),t.g(e,$.o,t.We(g.o)),$=n[++m],j=i[--k];else if(b(g,C))"slot"!==$.vtag&&"slot"!==j.vtag||u(t.$e(g.o)),w(g,C),t.g(e,g.o,$.o),g=n[--M],C=i[++h];else{for(r=null,l=m;l<=M;++l)if(n[l]&&a(n[l].vkey)&&n[l].vkey===C.vkey){r=l;break}a(r)?((c=n[r]).vtag!==C.vtag?s=f(n&&n[h],o,r,e):(w(c,C),n[r]=void 0,s=c.o),C=i[++h]):(s=f(n&&n[h],o,h,e),C=i[++h]),s&&t.g(y($.o),s,v($.o))}m>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,h,k):h>k&&d(n,m,M)})(r,l,o,s):a(s)?(a(n.vtext)&&t.Le(r,""),p(r,null,o,s,0,s.length-1)):a(l)&&d(l,0,l.length-1)),h&&"svg"===o.vtag&&(h=!1)},M=(e,n,o,i,r,l,s,c)=>{for(i=0,r=(o=t.me(e)).length;i<r;i++)if(n=o[i],1===t.ge(n)){if(n["s-sr"])for(s=n["s-sn"],n.hidden=!1,l=0;l<r;l++)if(o[l]["s-hn"]!==n["s-hn"])if(c=t.ge(o[l]),""!==s){if(1===c&&s===t.ve(o[l],"slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t.Pe(o[l]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,r,l,s,c,a,f,u)=>{for(l=0,s=(n=t.me(e)).length;l<s;l++){if((o=n[l])["s-sr"]&&(r=o["s-cr"]))for(a=t.me(t.$e(r)),f=o["s-sn"],c=a.length-1;c>=0;c--)(r=a[c])["s-cn"]||r["s-nr"]||r["s-hn"]===o["s-hn"]||((3===(u=t.ge(r))||8===u)&&""===f||1===u&&null===t.ve(r,"slot")&&""===f||1===u&&t.ve(r,"slot")===f)&&($.some(e=>e.Ie===r)||(i=!0,r["s-sn"]=f,$.push({Qe:o,Ie:r})));1===t.ge(o)&&g(o)}};return(a,f,u,p,d,b,v,y,m,h,k,C)=>{if(c=a,s=t.xe(c),l=c["s-cr"],n=p,o=c["s-sc"],r=i=!1,w(f,u),r){for(g(u.o),v=0;v<$.length;v++)(y=$[v]).Ie["s-ol"]||((m=t.ye(""))["s-nr"]=y.Ie,t.g(t.$e(y.Ie),y.Ie["s-ol"]=m,y.Ie));for(e.Me=!0,v=0;v<$.length;v++){for(y=$[v],k=t.$e(y.Qe),C=t.We(y.Qe),m=y.Ie["s-ol"];m=t.Ne(m);)if((h=m["s-nr"])&&h&&h["s-sn"]===y.Ie["s-sn"]&&k===t.$e(h)&&(h=t.We(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.$e(y.Ie)||t.We(y.Ie)!==C)&&y.Ie!==C&&(t._e(y.Ie),t.g(k,y.Ie,C))}e.Me=!1}return i&&M(u.o),$.length=0,u}})($,v),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{$.de.set(y,b.loaded=$.I=!0),v.De(o,"appload",{detail:{namespace:e}})}),((e,t,n,o,i,r)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.k(t);if(o)if(e.de.has(t))n(t);else{const o=e.ke.get(t)||[];o.push(n),e.ke.set(t,o)}return!!o}),i){for(r=i.length-1;r>=0;r--)t.componentOnReady(i[r][0],i[r][1])&&i.splice(r,1);for(r=0;r<o.length;r++)if(!n[o[r]].componentOnReady)return;for(r=0;r<i.length;r++)i[r][1](null);i.length=0}})($,b,o,o["s-apps"],o["s-cr"]),b.initialized=!0,$},T={};let D=!1;export{o as defineCustomElement,n as h};