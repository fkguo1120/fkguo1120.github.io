(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0d3"],{2002:function(t,e,a){},2333:function(t,e,a){"use strict";var s=a("2002"),i=a.n(s);i.a},9062:function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,a,s,i,r,n,o){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),s&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=d):i&&(d=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:l}}var n=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},[],!1,null,null,null).exports,o=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,d=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,l=r({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,s],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:n,Dots:o,Bars:d},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)},150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),a("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[a(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])},[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r={programmatic:!0},n=Object.assign({},e,s,r),o=new(t.extend(l))({el:document.createElement("div"),propsData:n}),d=Object.assign({},a,i);return Object.keys(d).map(function(t){o.$slots[t]=d[t]}),o}}};a(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=c(t,e,a);t.$loading=s,t.prototype.$loading=s},e.default=l}]).default})},c604:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("詞性表")]),a("v-spacer")],1),a("v-card-text",[a("table",{staticStyle:{margin:"0 auto"}},[a("colgroup",[a("col",{staticStyle:{width:"50%"}}),a("col",{staticStyle:{width:"50%"}})]),a("thead",[a("tr",{staticClass:"row-odd"},[a("th",{staticClass:"head"},[a("p")]),a("th",{staticClass:"head"},[a("p")])])]),a("tbody",[a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("A")])]),a("td",[a("p",[t._v("非謂形容詞"),a("br"),t._v("(Non-predicate adjective)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Caa")])]),a("td",[a("p",[t._v("對等連接詞"),a("br"),t._v("(Equivalent connective)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Cab")])]),a("td",[a("p",[t._v("連接詞，如：等等"),a("br"),t._v("(Conjunctions, such as: etc.)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Cba")])]),a("td",[a("p",[t._v("連接詞，如：的話"),a("br"),t._v("(Conjunctions, such as: 的話.)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Cbb")])]),a("td",[a("p",[t._v("關聯連接詞"),a("br"),t._v("(Related connective)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("D")])]),a("td",[a("p",[t._v("副詞"),a("br"),t._v("(Adverb)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Da")])]),a("td",[a("p",[t._v("數量副詞"),a("br"),t._v("(Quantitative adverbs)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Dfa")])]),a("td",[a("p",[t._v("動詞前程度副詞"),a("br"),t._v("(Adverb of degree before verb)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Dfb")])]),a("td",[a("p",[t._v("動詞後程度副詞"),a("br"),t._v("(Adverb of degree after verb)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Di")])]),a("td",[a("p",[t._v("時態標記"),a("br"),t._v("(Tense)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Dk")])]),a("td",[a("p",[t._v("句副詞"),a("br"),t._v("(Sentence adverb)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("DM")])]),a("td",[a("p",[t._v("定量式"),a("br"),t._v("(Quantitative)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("I")])]),a("td",[a("p",[t._v("感嘆詞"),a("br"),t._v("(Interjection)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Na")])]),a("td",[a("p",[t._v("普通名詞"),a("br"),t._v("(Common noun)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Nb")])]),a("td",[a("p",[t._v("專有名詞"),a("br"),t._v("(Proper noun)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Nc")])]),a("td",[a("p",[t._v("地方詞"),a("br"),t._v("(Local noun)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Ncd")])]),a("td",[a("p",[t._v("位置詞"),a("br"),t._v("(Position noun)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Nd")])]),a("td",[a("p",[t._v("時間詞"),a("br"),t._v("(Time noun)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Nep")])]),a("td",[a("p",[t._v("指代定詞"),a("br"),t._v("(Pronoun)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Neqa")])]),a("td",[a("p",[t._v("數量定詞"),a("br"),t._v("(Quantitative attributive)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Neqb")])]),a("td",[a("p",[t._v("後置數量定詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Nes")])]),a("td",[a("p",[t._v("特指定詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Neu")])]),a("td",[a("p",[t._v("數詞定詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Nf")])]),a("td",[a("p",[t._v("量詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Ng")])]),a("td",[a("p",[t._v("後置詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("Nh")])]),a("td",[a("p",[t._v("代名詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("Nv")])]),a("td",[a("p",[t._v("名物化動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("P")])]),a("td",[a("p",[t._v("介詞"),a("br"),t._v("(Preposition)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("T")])]),a("td",[a("p",[t._v("語助詞"),a("br"),t._v("(Pragmatic word)")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VA")])]),a("td",[a("p",[t._v("動作不及物動詞"),a("br"),t._v("(Intransitive verb)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VAC")])]),a("td",[a("p",[t._v("動作使動動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VB")])]),a("td",[a("p",[t._v("動作類及物動詞"),a("br"),t._v("(Transitive verb)")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VC")])]),a("td",[a("p",[t._v("動作及物動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VCL")])]),a("td",[a("p",[t._v("動作接地方賓語動詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VD")])]),a("td",[a("p",[t._v("雙賓動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VF")])]),a("td",[a("p",[t._v("動作謂賓動詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VE")])]),a("td",[a("p",[t._v("動作句賓動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VG")])]),a("td",[a("p",[t._v("分類動詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VH")])]),a("td",[a("p",[t._v("狀態不及物動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VHC")])]),a("td",[a("p",[t._v("狀態使動動詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VI")])]),a("td",[a("p",[t._v("狀態類及物動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VJ")])]),a("td",[a("p",[t._v("狀態及物動詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("VK")])]),a("td",[a("p",[t._v("狀態句賓動詞")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("VL")])]),a("td",[a("p",[t._v("狀態謂賓動詞")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("V_2")])]),a("td",[a("p",[t._v("有")])])]),a("tr",{staticClass:"row-odd"},[a("td"),a("td")]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("DE")])]),a("td",[a("p",[t._v("的之得地")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("SHI")])]),a("td",[a("p",[t._v("是")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("FW")])]),a("td",[a("p",[t._v("外文")])])]),a("tr",{staticClass:"row-odd"},[a("td"),a("td")]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("COLONCATEGORY")])]),a("td",[a("p",[t._v("冒號")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("COMMACATEGORY")])]),a("td",[a("p",[t._v("逗號")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("DASHCATEGORY")])]),a("td",[a("p",[t._v("破折號")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("DOTCATEGORY")])]),a("td",[a("p",[t._v("點號")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("ETCCATEGORY")])]),a("td",[a("p",[t._v("刪節號")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("EXCLAMATIONCATEGORY")])]),a("td",[a("p",[t._v("驚嘆號")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("PARENTHESISCATEGORY")])]),a("td",[a("p",[t._v("括號")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("PAUSECATEGORY")])]),a("td",[a("p",[t._v("頓號")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("PERIODCATEGORY")])]),a("td",[a("p",[t._v("句號")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("QUESTIONCATEGORY")])]),a("td",[a("p",[t._v("問號")])])]),a("tr",{staticClass:"row-even"},[a("td",[a("p",[t._v("SEMICOLONCATEGORY")])]),a("td",[a("p",[t._v("分號")])])]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("SPCHANGECATEGORY")])]),a("td",[a("p",[t._v("雙直線")])])]),a("tr",{staticClass:"row-even"},[a("td"),a("td")]),a("tr",{staticClass:"row-odd"},[a("td",[a("p",[t._v("WHITESPACE")])]),a("td",[a("p",[t._v("空白")])])])])])]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("關閉")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogn,callback:function(e){t.dialogn=e},expression:"dialogn"}},[a("v-card",[a("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialogn=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("說明")]),a("v-spacer")],1),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("例如：人名、地名、組織名、時間，在生醫領域中也可能是藥品名、分子式等等。")])]),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("For example: person name, place name, organization name, time, in the field of biomedicine may also be drug name, molecular formula, etc.")])])],1)],1)],1),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close2(e)}}},[t._v("關閉")])],1)],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!1,"is-full-page":!0,width:128,height:128,loader:"Dots",color:"#ff9800"},on:{"update:active":function(e){t.isLoading=e}}},[a("span",{staticClass:"loading-text"},[t._v("分析中")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],staticClass:"query ui-autocomplete-input",attrs:{id:"query",type:"search",autofocus:"",autocomplete:"off",placeholder:"Paste a chinese word"},domProps:{value:t.searchWord},on:{change:function(e){t.searchChinese(t.searchWord)},input:function(e){e.target.composing||(t.searchWord=e.target.value)}}}),a("h1",{directives:[{name:"show",rawName:"v-show",value:t.yes,expression:"yes"}],staticClass:"title result",staticStyle:{visibility:"visible","margin-top":"10px"},attrs:{"data-title":"食物","data-reactid":".0.$0.5"}},[a("span",{attrs:{"data-reactid":".0.$0.5.0"}},[a("hruby",{staticClass:"rightangle",attrs:{rightangle:"rightangle"}},[a("ru",{staticClass:"rightangle",attrs:{span:"1",order:"0",annotation:"shí"}},[a("a",{attrs:{href:"./#食","word-id":"0"}},[a("ru",{attrs:{zhuyin:"",diao:"ˊ",length:"1",form:"SJ"}},[a("div",[t._v(t._s(t.english))]),a("zhuyin",[t._v(t._s(t.b))]),a("rt",{staticStyle:{display:"table","font-size":"17px"},attrs:{rbspan:"1"}},[t._v(t._s(t.p))])],1)],1),a("div",{staticStyle:{"text-align":"left","margin-top":"15px"}},t._l(t.d,function(e,s){return a("span",{staticStyle:{"font-weight":"400"}},[a("b",[t._v(t._s(s+1)+".")]),t._v(t._s(e)+".         ")])}))])],1)],1)]),a("h3",{directives:[{name:"show",rawName:"v-show",value:!t.yes,expression:"!yes"}],staticStyle:{"margin-top":"15px",color:"red"}},[t._v("\n        The chinese word not found!\n      ")]),a("h2",{staticClass:"mt-5 ml-1"},[t._v("斷句，詞性分析: ")]),a("v-btn",{staticClass:"mx-1  mb-2",attrs:{color:"orange",dark:""},on:{click:function(e){t.editItem()}}},[t._v("\n        詞性表\n      ")]),a("v-card",{staticClass:"px-5 py-4  mt-2"},[a("v-list",{attrs:{"two-line":""}},t._l(t.ws,function(e,s){return a("div",{staticClass:"my-2"},[t._l(e,function(e){return a("span",{staticClass:"nlp-word"},[t._v("\n                "+t._s(e.word)+"\n                "),a("sub",[t._v(t._s(e.pos))]),a("span",[t._v("    ")])])}),a("hr",{staticClass:"nlp-hr"})],2)}))],1),a("h2",{staticClass:"mt-5 ml-1"},[t._v("實體辨識分析: ")]),a("v-btn",{staticClass:"mx-1 mb-2",attrs:{color:"orange",dark:""},on:{click:function(e){t.editItem2()}}},[t._v("\n          說明\n        ")]),a("v-card",{staticClass:"px-5 py-4 mt-2 mb-5"},[a("v-list",{attrs:{"two-line":""}},t._l(t.ner,function(e,s){return a("div",{staticClass:"my-2"},[t._v("\n              "+t._s(e.text)+"\n              "),a("sub",[t._v("("+t._s(e.ner)+")")]),a("span"),a("hr",{staticClass:"nlp-hr"})])}))],1)],1)],1)],1)},i=[],r=a("9062"),n=a.n(r),o=(a("e40d"),{data:function(){return{b:"",p:"",d:[],english:"",searchWord:"",yes:!0,dialog:!1,dialogn:!1,t_text:"",isLoading:!1,ws:[],ner:[]}},components:{Loading:n.a},computed:{},watch:{},created:function(){var t=this;this.t_text=localStorage.getItem("t_text"),this.isLoading=!0;var e={text:this.t_text};axios.post("https://912394c9b50a.ngrok.io/pos",e).then(function(a){t.ws=a.data.ws,console.log(a.data.ws),axios.post("https://912394c9b50a.ngrok.io/ner",e).then(function(e){t.ner=e.data.ner,t.isLoading=!1}).catch(function(e){console.log(e),t.isLoading=!1,alert("分析失敗!因伺服器已停止。")})}).catch(function(a){console.log(a),alert("分析失敗!因伺服器忙碌，將重新執行一次。"),axios.post("https://912394c9b50a.ngrok.io/pos",e).then(function(a){t.ws=a.data.ws,console.log(a.data.ws),axios.post("https://912394c9b50a.ngrok.io/ner",e).then(function(e){t.ner=e.data.ner,t.isLoading=!1}).catch(function(e){console.log(e),t.isLoading=!1,alert("分析失敗!因伺服器已停止。")})}).catch(function(e){console.log(e),t.isLoading=!1,alert("分析失敗!因伺服器已停止。")})})},methods:{searchChinese:function(t){var e=this;axios.get("https://www.moedict.tw/a/".concat(t,".json")).then(function(t){e.yes=!0,e.b=t.data.h[0].b,e.p=t.data.h[0].p,e.english=t.data.English,e.d=t.data.translation.English,console.log(t.data.ws)}).catch(function(t){e.yes=!1})},editItem:function(){this.dialog=!0},close:function(){this.dialog=!1},editItem2:function(){this.dialogn=!0},close2:function(){this.dialogn=!1}}}),d=o,l=(a("2333"),a("2877")),c=Object(l["a"])(d,s,i,!1,null,null,null);c.options.__file="NlpTag.vue";e["default"]=c.exports},e40d:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e0d3.7638ccaf.js.map