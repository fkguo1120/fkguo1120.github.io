(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da2"],{"0813":function(t,e,a){"use strict";var i=a("ae22"),s=a.n(i);s.a},ae22:function(t,e,a){},efaa:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-5 py-5"},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",[t._v(t._s(t.editedItem.text))])])],1)],1)],1),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("關閉")])],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),a("td",[t._v(t._s(e.item.created_at))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.audioname))]),a("td",{staticClass:"text-xs-left layout"},[a("v-btn",{staticClass:"mx-1",attrs:{icon:"",color:"orange",dark:""},on:{click:function(a){t.editItem(e.item)}}},[a("v-icon",[t._v("text_format")])],1),a("v-btn",{staticClass:"mx-1",attrs:{icon:"",color:"orange",dark:""},on:{click:function(a){t.deleteItem(e.item)}}},[a("v-icon",[t._v("audiotrack")])],1)],1)]}}])})],1)},s=[],n={data:function(){return{dialog:!1,headers:[{text:"ID",align:"left",sortable:!1,value:"created_at"},{text:"上傳時間",sortable:!1,value:"calories"},{text:"音檔名稱",sortable:!1,value:"fat"},{text:"操作",sortable:!1,value:"name"}],desserts:[],editedIndex:-1,editedItem:{text:""},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.getList()},methods:{getList:function(){var t=this,e=localStorage.getItem("user_id");axios.get("https://ncu-one.herokuapp.com/api/list/".concat(e),{headers:{"Content-type":"application/json"}}).then(function(e){console.log(e.data),t.desserts=e.data.list.map(function(t,e){return t["id"]=e,t["audioname"]=t["audiofile"].replace("http://ncu-one.herokuapp.com/upload_audio_file/",""),t})}).catch(function(t){console.log(t)})},editItem:function(t){console.log("123",t),this.editedItem.text=t.translate_text,this.dialog=!0},deleteItem:function(t){var e=this.desserts.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(e,1)},close:function(){this.dialog=!1}}},o=n,c=(a("0813"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null);l.options.__file="NlpManage.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0da2.0715068b.js.map