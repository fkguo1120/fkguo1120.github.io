(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-035f"],{2944:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading,"can-cancel":!1,"is-full-page":!0,width:128,height:128,loader:"Dots",color:"#ff9800"},on:{"update:active":function(e){t.isLoading=e}}}),t.token?t._e():n("v-card",{staticClass:"px-5 py-5",attrs:{color:"white"}},[n("v-flex",{staticClass:"text-xs-center",attrs:{md12:""}},[t.file?n("div",{staticClass:"dropZone-uploaded"},[n("div",{staticClass:"dropZone-uploaded-info"},[n("v-btn",{attrs:{color:"error",size:"120"},on:{click:t.removeFile}},[t._v("重新選擇")])],1)]):n("div",[n("div",{class:["dropZone",t.dragging?"dropZone-over":""],on:{dragestart:function(e){t.dragging=!0},dragenter:function(e){t.dragging=!0},dragleave:function(e){t.dragging=!1}}},[n("div",{staticClass:"dropZone-info",on:{drag:t.onChange}},[n("span",{staticClass:"fa fa-cloud-upload dropZone-title"}),n("span",{staticClass:"dropZone-title"},[t._v("點擊選擇檔案或拖曳檔案進來")]),n("div",{staticClass:"dropZone-upload-limit-info"},[n("div",{staticClass:"mt-3"},[t._v("支援音檔類型: WAV")]),n("div",{staticClass:"mt-1"},[t._v("最大限制: 10 MB")])])]),n("input",{attrs:{type:"file",id:"FIP_PIC"},on:{change:t.onChange}})])]),t.file?n("div",{staticClass:"uploadedFile-info mt-3"},[n("div",[t._v("檔案名稱: "+t._s(t.file.name))]),n("div",[t._v("檔案大小: "+t._s((t.file.size/1024/1024).toFixed(2)+"MB"))]),n("div",[t._v("檔案類型: "+t._s(t.extension))])]):t._e(),t.file?n("v-btn",{staticClass:"mt-5",attrs:{large:"",color:"orange",dark:""},on:{click:t.upload}},[t._v("上傳並製作演說稿")]):t._e()],1)],1),t.token?n("v-card",{staticClass:"px-4",attrs:{color:"white"}},[n("v-list",[t._l(t.translate,function(e,i){return[n("span",{key:i,staticClass:"token-text"},[t._v(t._s(e))])]})],2)],1):t._e(),n("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.token,expression:"token"}],staticClass:"text-xs-center",attrs:{md12:""}},[n("v-btn",{staticClass:"mt-5",attrs:{large:"",color:"orange",dark:""},on:{click:function(e){t.uploadManage()}}},[t._v("紀錄並分析")])],1)],1)},a=[],r=n("9062"),o=n.n(r),s=(n("e40d"),{data:function(){return{translate:[],translateString:"",file:"",dragging:!1,token:!1,isLoading:!1}},components:{Loading:o.a},methods:{onChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length?this.createFile(e[0]):this.dragging=!1},createFile:function(t){return t.type.match("audio/wav")?t.size>1e7?(alert("please check file size no more than 10MB"),void(this.dragging=!1)):(this.file=t,this.dragging=!1,void console.log(t)):(alert("請上傳wav類型的音檔，並不可大於10MB。"),void(this.dragging=!1))},removeFile:function(){this.file=""},upload:function(){var t=this,e=new FormData;e.append("uploadFile",this.file),this.isLoading=!0,axios.post("https://ncu-learn.herokuapp.com/upload",e,{headers:{enctype:"multipart/form-data"}}).then(function(e){alert("上傳成功。即將製作演說稿。"),t.sss(),t.token=!0}).catch(function(e){console.log(e),t.isLoading=!1,alert("上傳失敗!")})},sss:function(){var t=this;axios.post("https://ncu-learn.herokuapp.com/test",{filename:this.file.name},{headers:{"Content-type":"application/json"}}).then(function(e){t.translate=e.data.map(function(t){return t.alternatives[0].transcript}),console.log(t.translate),t.translateString=t.translate.toString(),t.isLoading=!1}).catch(function(e){console.log(e),t.isLoading=!1,alert("解析失敗!")})},uploadManage:function(){var t=localStorage.getItem("user_id"),e=new FormData;e.append("user_id",t),e.append("file",this.file),e.append("translate_text",this.translateString),axios.post("https://ncu-one.herokuapp.com/api/upload_audio_file",e,{headers:{enctype:"multipart/form-data"}}).then(function(t){console.log(t.data)}).catch(function(t){console.log(t)}),localStorage.setItem("t_text",this.translateString),this.$router.push("/nlptag")}},computed:{extension:function(){return this.file?this.file.name.split(".").pop():""}}}),l=s,c=(n("a7ca"),n("2877")),u=Object(c["a"])(l,i,a,!1,null,null,null);u.options.__file="Upload.vue";e["default"]=u.exports},"2a90":function(t,e,n){},9062:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,a={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,n,i,a,r,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var o=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},[],!1,null,null,null).exports,s=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,l=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,c=r({name:"vue-loading",mixins:[a],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)},150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])},[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r={programmatic:!0},o=Object.assign({},e,i,r),s=new(t.extend(c))({el:document.createElement("div"),propsData:o}),l=Object.assign({},n,a);return Object.keys(l).map(function(t){s.$slots[t]=l[t]}),s}}};n(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=u(t,e,n);t.$loading=i,t.prototype.$loading=i},e.default=c}]).default})},a7ca:function(t,e,n){"use strict";var i=n("2a90"),a=n.n(i);a.a},e40d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-035f.426e6c9e.js.map