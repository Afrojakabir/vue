(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38847268"],{"240d":function(t,e,n){},4429:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("br"),n("br"),n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0"},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Per page"}},[n("b-form-select",{attrs:{options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1),t.category.length?n("b-table",{staticClass:"print-only",attrs:{"show-empty":"",stacked:"md",items:t.category,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"update",fn:function(e){return[n("b-button",{staticClass:"mr-1",attrs:{variant:"info",size:"sm",to:"category-update/"+e.item.id+"/"+e.item.name}},[t._v("\r\n           Update\r\n        ")])]}},{key:"action",fn:function(e){return[n("b-button",{staticClass:"mr-1",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.deleteCategory(e.item)}}},[t._v("\r\n         Delete\r\n        ")])]}}],null,!1,3799206667)}):t._e(),n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[t.category.length?n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.category.length,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1),n("b-button",{staticClass:"mr-1",attrs:{variant:"secondary",size:"md"},on:{click:function(e){return t.myFunction()}}},[t._v("\r\n          print\r\n        ")])],1)],1)},o=[],r=(n("7f7f"),n("f499")),i=n.n(r),s=n("c94a"),c={name:"CategoryList",props:{pageTitle:{type:String,default:"Akaba"}},components:{},data:function(){return{fields:[{key:"name",label:"Category name",sortable:!0,class:"text-center"},{key:"update",label:"Update",class:"text-center"},{key:"action",label:"Action",class:"text-center"}],category:[],currentPage:1,perPage:5,pageOptions:[5,10,15],filter:null,modalInfo:{title:"",content:""}}},computed:{updateTitle:{get:function(){return this.pageTitle},set:function(t){this.$emit("update:pageTitle",t)}},sortOptions:function(){return this.fields.filter(function(t){return t.sortable}).map(function(t){return{text:t.label,value:t.key}})}},methods:{info:function(t,e,n){this.modalInfo.title="Row index: ".concat(e),this.modalInfo.content=i()(t,null,2),this.$root.$emit("bv::show::modal","modalInfo",n)},resetModal:function(){this.modalInfo.title="",this.modalInfo.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},deleteCategory:function(t){var e=this;Object(s["a"])().delete("deleteCategory/".concat(t.id)).then(function(t){console.log(t.data),e.apinew()}),console.log(t)},apinew:function(){var t=this;Object(s["a"])().get("category").then(function(e){console.log(e.data),t.category=e.data.map(function(t){return{id:t.id,name:t.name}}),console.log(t.category)})},myFunction:function(){window.print()}},created:function(){this.updateTitle="Category List",this.apinew()}},l=c,u=(n("7076"),n("2877")),f=Object(u["a"])(l,a,o,!1,null,null,null);e["default"]=f.exports},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},7076:function(t,e,n){"use strict";var a=n("240d"),o=n.n(a);o.a},"7f7f":function(t,e,n){var a=n("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&a(o,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},a21f:function(t,e,n){var a=n("584a"),o=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},f499:function(t,e,n){t.exports=n("a21f")}}]);
//# sourceMappingURL=chunk-38847268.12c5f6b4.js.map