(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{c055:"b5d298ea","chunk-035f":"8b4c6c81","chunk-0da2":"f7421a47","chunk-1cb0":"1d65618c","chunk-1e35":"39345a0c","chunk-49c3":"f5656196","chunk-5e9b":"3f72e118","chunk-619a":"5d21febb","chunk-e0d3":"267f480d"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-035f":1,"chunk-0da2":1,"chunk-1cb0":1,"chunk-1e35":1,"chunk-49c3":1,"chunk-5e9b":1,"chunk-619a":1,"chunk-e0d3":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{c055:"31d6cfe0","chunk-035f":"f72be058","chunk-0da2":"c78e97aa","chunk-1cb0":"d8ebfd03","chunk-1e35":"5e0805f4","chunk-49c3":"7dde232e","chunk-5e9b":"850cf01c","chunk-619a":"116346c0","chunk-e0d3":"ffa88dc8"}[t]+".css",i=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===i))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],u=s.getAttribute("data-href");if(u===r||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){i[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=o);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),u=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=n("ce5b"),a=n.n(i);n("bf40");r["default"].use(a.a);var o=n("bc3a"),s=n.n(o),c={},u=s.a.create(c);u.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),u.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},r["default"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},d=[],h=n("64f3"),p={name:"App",components:{VuebaseLayout:h["default"]},computed:{component:function(){return h["default"]}}},f=p,v=n("2877"),m=Object(v["a"])(f,l,d,!1,null,null,null);m.options.__file="App.vue";var b=m.exports,g=n("8c4f");r["default"].use(g["a"]);var k=[{path:"/",name:"/",component:function(){return Promise.resolve().then(n.bind(null,"64f3"))},meta:{requiresAuth:!0},children:[{path:"home",name:"home",component:function(){return n.e("chunk-49c3").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"dashboard",name:"dashboard",component:function(){return n.e("chunk-5e9b").then(n.bind(null,"9e88"))},meta:{requiresAuth:!0},children:[{path:"record",name:"dashboard.record",component:function(){return n.e("chunk-1cb0").then(n.bind(null,"90de"))},meta:{requiresAuth:!0}},{path:"upload",name:"dashboard.upload",component:function(){return n.e("chunk-035f").then(n.bind(null,"2944"))},meta:{requiresAuth:!0}},{path:"logs",name:"dashboard.logs",component:function(){return n.e("c055").then(n.bind(null,"c055"))},meta:{requiresAuth:!0}}]},{path:"nlpmanage",name:"dashboard.nlpmanage",component:function(){return n.e("chunk-0da2").then(n.bind(null,"efaa"))},meta:{requiresAuth:!0}},{path:"nlptag",name:"dashboard.nlptag",component:function(){return n.e("chunk-e0d3").then(n.bind(null,"c604"))},meta:{requiresAuth:!0}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-619a").then(n.bind(null,"7101"))},meta:{requiresAuth:!1}},{path:"/register",name:"register",component:function(){return n.e("chunk-1e35").then(n.bind(null,"7fdc"))},meta:{requiresAuth:!1}}],_=new g["a"]({routes:k}),y=n("2f62");r["default"].use(y["a"]);var w=new y["a"].Store({state:{},mutations:{},actions:{}});n.d(e,"app",function(){return P}),r["default"].use(s.a),r["default"].config.productionTip=!1,_.beforeEach(function(t,e,n){var r=sessionStorage.getItem("islogin");t.matched.some(function(t){return t.meta.requiresAuth})?r?n():n({path:"/login",query:{redirect:t.fullPath}}):n()});var P=new r["default"]({router:_,store:w,render:function(t){return t(b)}}).$mount("#app")},"64f3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"mt-5 blue-grey darken-4",attrs:{width:"250",dark:"",persistent:"","mini-variant":t.miniVariant,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-tooltip",{attrs:{right:""}},[n("v-toolbar",{staticClass:"transparent",attrs:{slot:"activator",flat:"",dense:""},slot:"activator"},[n("v-list",{staticClass:"pa-0",class:{"list-border-bottom":t.miniVariant}},[n("v-list-tile",{attrs:{to:"/home",exact:""}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("總纜")])],1)],1)],1)],1),n("span",[t._v("總纜")])],1),n("v-divider"),n("v-list",{class:{"list-border-bottom":t.miniVariant},attrs:{subheader:""}},[n("v-subheader",[t._v("短演說")]),t._l(t.analyticsItems,function(e){return[n("v-tooltip",{attrs:{right:""}},[n("v-list-tile",{key:e.icon,attrs:{slot:"activator",to:e.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1),n("span",{domProps:{textContent:t._s(e.title)}})],1)]})],2),n("v-divider"),n("v-list",{attrs:{subheader:""}},[n("v-subheader",[t._v("紀錄")]),t._l(t.developItems,function(e){return[n("v-tooltip",{attrs:{right:""}},[n("v-list-tile",{key:e.icon,attrs:{slot:"activator",to:e.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1),n("span",{domProps:{textContent:t._s(e.title)}})],1)]})],2)],1),n("v-toolbar",{attrs:{id:"top_bar",app:"",flat:"",dense:"",dark:""}},[t.miniVariant?t._e():n("v-list-tile-action",[n("v-icon",{attrs:{large:"",color:"orange"}},[t._v("invert_colors")])],1),t.miniVariant?t._e():n("v-list-tile-action",[n("v-list-tile-title",[n("h2",{domProps:{textContent:t._s(t.appName)}})])],1),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1)],1),n("v-toolbar-side-icon",{staticClass:"hidden-lg-and-up",class:t.searching?"hidden-xs-only":"",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-spacer"),n("v-menu",[n("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[n("v-avatar",{staticClass:"white",attrs:{size:"32"}},[n("v-icon",{attrs:{color:"primary"}},[t._v("person")])],1)],1),n("v-list",{staticClass:"pa-0 mt-5",attrs:{light:""}},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-action",[n("v-icon",[t._v("person")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.name))]),n("v-list-tile-sub-title")],1)],1),n("v-divider"),n("v-list-tile",{key:"lock_open",on:{click:function(e){t.logout()}}},[n("v-list-tile-action",[n("v-icon",[t._v("lock_open")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("登出")])],1)],1)],1)],1)],1),n("v-content",[n("router-view")],1)],1)},i=[],a={name:"VuebaseLayout",data:function(){return{name:"",appName:"華語學習吧",drawer:!0,fixed:!1,analyticsItems:[{icon:"comment",title:"即席短演說",link:"/dashboard/record"}],developItems:[{icon:"supervisor_account",title:"管理紀錄",link:"/nlpmanage"}],nlpItems:[{icon:"supervisor_account",title:"NLP分析",link:"/nlptag"}],miniVariant:!1,right:!0,rightDrawer:!1,tabs:null,tabsItems:[{id:1,title:"Indicators",link:"indicators"},{id:2,title:"Backup",link:"backup"},{id:3,title:"Logs",link:"logs"}],searching:!1,search:""}},mounted:function(){this.name=sessionStorage.getItem("name")},methods:{onBlur:function(){this.searching=!1,this.search=""},searchBegin:function(){this.searching=!0,setTimeout(function(){return document.querySelector("#search").focus()},50)},searchEnd:function(){this.searching=!1,this.search="",document.querySelector("#search").blur()},logout:function(){sessionStorage.clear(),this.$router.push("/login")}}},o=a,s=(n("f027"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"901c53bc",null);c.options.__file="VuebaseLayout.vue";e["default"]=c.exports},8922:function(t,e,n){},f027:function(t,e,n){"use strict";var r=n("8922"),i=n.n(r);i.a}});
//# sourceMappingURL=app.9c1bcfd3.js.map