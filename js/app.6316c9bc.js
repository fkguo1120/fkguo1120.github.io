(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{c055:"b5d298ea","chunk-372a":"1421a15c","chunk-47d6":"504b05c8","chunk-661d":"cda9cc61","chunk-7afb":"259cd387","chunk-d2d3":"d66df109","chunk-dff7":"eeb6aac7"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-372a":1,"chunk-47d6":1,"chunk-661d":1,"chunk-7afb":1,"chunk-d2d3":1,"chunk-dff7":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{c055:"31d6cfe0","chunk-372a":"83eebee2","chunk-47d6":"e7846e7c","chunk-661d":"ed30b166","chunk-7afb":"5f714a50","chunk-d2d3":"b38a2f1a","chunk-dff7":"d3548077"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var s=o[a],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===i))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],u=s.getAttribute("data-href");if(u===r||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,n(o)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=a);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=n("ce5b"),o=n.n(i);n("bf40");r["default"].use(o.a);var a=n("bc3a"),s=n.n(a),c={},u=s.a.create(c);u.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),u.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},r["default"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},d=[],f=n("64f3"),h={name:"App",components:{VuebaseLayout:f["default"]},computed:{component:function(){return f["default"]}}},p=h,v=n("2877"),m=Object(v["a"])(p,l,d,!1,null,null,null);m.options.__file="App.vue";var b=m.exports,g=n("8c4f");r["default"].use(g["a"]);var k=[{path:"/",name:"/",component:function(){return Promise.resolve().then(n.bind(null,"64f3"))},meta:{requiresAuth:!0},children:[{path:"home",name:"home",component:function(){return n.e("chunk-372a").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"dashboard",name:"dashboard",component:function(){return n.e("chunk-dff7").then(n.bind(null,"9e88"))},meta:{requiresAuth:!0},children:[{path:"indicators",name:"dashboard.indicators",component:function(){return n.e("chunk-661d").then(n.bind(null,"4a6c"))},meta:{requiresAuth:!0}},{path:"backup",name:"dashboard.backup",component:function(){return n.e("chunk-47d6").then(n.bind(null,"cde4"))},meta:{requiresAuth:!0}},{path:"logs",name:"dashboard.logs",component:function(){return n.e("c055").then(n.bind(null,"c055"))},meta:{requiresAuth:!0}}]}]},{path:"/login",name:"login",component:function(){return n.e("chunk-d2d3").then(n.bind(null,"7101"))},meta:{requiresAuth:!1}},{path:"/register",name:"register",component:function(){return n.e("chunk-7afb").then(n.bind(null,"7fdc"))},meta:{requiresAuth:!1}}],_=new g["a"]({routes:k}),y=n("2f62");r["default"].use(y["a"]);var w=new y["a"].Store({state:{},mutations:{},actions:{}});n.d(e,"app",function(){return P}),r["default"].use(s.a),r["default"].config.productionTip=!1,_.beforeEach(function(t,e,n){var r=sessionStorage.getItem("islogin");t.matched.some(function(t){return t.meta.requiresAuth})?r?n():n({path:"/login",query:{redirect:t.fullPath}}):n()});var P=new r["default"]({router:_,store:w,render:function(t){return t(b)}}).$mount("#app")},"5f0b":function(t,e,n){},"64f3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"mt-5 blue-grey darken-4",attrs:{width:"250",dark:"",persistent:"","mini-variant":t.miniVariant,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-tooltip",{attrs:{right:""}},[n("v-toolbar",{staticClass:"transparent",attrs:{slot:"activator",flat:"",dense:""},slot:"activator"},[n("v-list",{staticClass:"pa-0",class:{"list-border-bottom":t.miniVariant}},[n("v-list-tile",{attrs:{to:"/home",exact:""}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("總纜")])],1)],1)],1)],1),n("span",[t._v("總纜")])],1),n("v-divider"),n("v-list",{class:{"list-border-bottom":t.miniVariant},attrs:{subheader:""}},[n("v-subheader",[t._v("語音區")]),t._l(t.analyticsItems,function(e){return[n("v-tooltip",{attrs:{right:""}},[n("v-list-tile",{key:e.icon,attrs:{slot:"activator",to:e.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1),n("span",{domProps:{textContent:t._s(e.title)}})],1)]})],2),n("v-divider"),n("v-list",{attrs:{subheader:""}},[n("v-subheader",[t._v("文字區")]),t._l(t.developItems,function(e){return[n("v-tooltip",{attrs:{right:""}},[n("v-list-tile",{key:e.icon,attrs:{slot:"activator",to:e.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1),n("span",{domProps:{textContent:t._s(e.title)}})],1)]})],2)],1),n("v-toolbar",{attrs:{id:"top_bar",app:"",flat:"",dense:"",dark:""}},[t.miniVariant?t._e():n("v-list-tile-action",[n("v-icon",{attrs:{large:"",color:"orange"}},[t._v("invert_colors")])],1),t.miniVariant?t._e():n("v-list-tile-action",[n("v-list-tile-title",[n("h2",{domProps:{textContent:t._s(t.appName)}})])],1),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1)],1),n("v-toolbar-side-icon",{staticClass:"hidden-lg-and-up",class:t.searching?"hidden-xs-only":"",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-spacer"),n("v-menu",[n("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[n("v-avatar",{staticClass:"white",attrs:{size:"32"}},[n("v-icon",{attrs:{color:"primary"}},[t._v("person")])],1)],1),n("v-list",{staticClass:"pa-0 mt-5",attrs:{light:""}},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-action",[n("v-icon",[t._v("person")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.name))]),n("v-list-tile-sub-title")],1)],1),n("v-divider"),n("v-list-tile",{key:"lock_open",on:{click:function(e){t.logout()}}},[n("v-list-tile-action",[n("v-icon",[t._v("lock_open")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("登出")])],1)],1)],1)],1)],1),n("v-content",[n("router-view")],1)],1)},i=[],o={name:"VuebaseLayout",data:function(){return{name:"",appName:"華語學習吧",drawer:!0,fixed:!1,analyticsItems:[{icon:"comment",title:"語音辨識",link:"/dashboard/indicators"}],developItems:[{icon:"supervisor_account",title:"文字管理",link:""}],miniVariant:!1,right:!0,rightDrawer:!1,tabs:null,tabsItems:[{id:1,title:"Indicators",link:"indicators"},{id:2,title:"Backup",link:"backup"},{id:3,title:"Logs",link:"logs"}],searching:!1,search:""}},mounted:function(){this.name=sessionStorage.getItem("name")},methods:{onBlur:function(){this.searching=!1,this.search=""},searchBegin:function(){this.searching=!0,setTimeout(function(){return document.querySelector("#search").focus()},50)},searchEnd:function(){this.searching=!1,this.search="",document.querySelector("#search").blur()},logout:function(){sessionStorage.clear(),this.$router.push("/login")}}},a=o,s=(n("b1da"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"55c82996",null);c.options.__file="VuebaseLayout.vue";e["default"]=c.exports},b1da:function(t,e,n){"use strict";var r=n("5f0b"),i=n.n(r);i.a}});
//# sourceMappingURL=app.6316c9bc.js.map