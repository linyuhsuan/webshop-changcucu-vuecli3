(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc6c3048"],{"07e3":function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},"0fc9":function(t,e,a){var o=a("3a38"),n=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?n(t+e,0):r(t,e)}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.propsPagiation.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.getPage(t.propsPagiation.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.propsPagiation.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.propsPagiation.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.getPage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.propsPagiation.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.getPage(t.propsPagiation.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},n=[],r={name:"Pagination",props:["propsPagiation"],methods:{getPage:function(t){console.log(t),this.$emit("getPage",t)}}},i=r,s=a("2877"),c=Object(s["a"])(i,o,n,!1,null,null,null);c.options.__file="Pagination.vue";e["a"]=c.exports},"1bc3":function(t,e,a){var o=a("f772");t.exports=function(t,e){if(!o(t))return t;var a,n;if(e&&"function"==typeof(a=t.toString)&&!o(n=a.call(t)))return n;if("function"==typeof(a=t.valueOf)&&!o(n=a.call(t)))return n;if(!e&&"function"==typeof(a=t.toString)&&!o(n=a.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,a){var o=a("f772"),n=a("e53d").document,r=o(n)&&o(n.createElement);t.exports=function(t){return r?n.createElement(t):{}}},"241e":function(t,e,a){var o=a("25eb");t.exports=function(t){return Object(o(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"335c":function(t,e,a){var o=a("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,a){var o=a("d9f6"),n=a("aebd");t.exports=a("8e60")?function(t,e,a){return o.f(t,e,n(1,a))}:function(t,e,a){return t[e]=a,t}},"36c3":function(t,e,a){var o=a("335c"),n=a("25eb");t.exports=function(t){return o(n(t))}},"3a38":function(t,e){var a=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:a)(t)}},5176:function(t,e,a){t.exports=a("51b6")},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},5559:function(t,e,a){var o=a("dbdb")("keys"),n=a("62a0");t.exports=function(t){return o[t]||(o[t]=n(t))}},"584a":function(t,e){var a=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=a)},"5b4e":function(t,e,a){var o=a("36c3"),n=a("b447"),r=a("0fc9");t.exports=function(t){return function(e,a,i){var s,c=o(e),l=n(c.length),u=r(i,l);if(t&&a!=a){while(l>u)if(s=c[u++],s!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===a)return t||u||0;return!t&&-1}}},"62a0":function(t,e){var a=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++a+o).toString(36))}},"63b6":function(t,e,a){var o=a("e53d"),n=a("584a"),r=a("d864"),i=a("35e8"),s=a("07e3"),c="prototype",l=function(t,e,a){var u,d,p,f=t&l.F,m=t&l.G,v=t&l.S,g=t&l.P,b=t&l.B,h=t&l.W,_=m?n:n[e]||(n[e]={}),P=_[c],y=m?o:v?o[e]:(o[e]||{})[c];for(u in m&&(a=e),a)d=!f&&y&&void 0!==y[u],d&&s(_,u)||(p=d?y[u]:a[u],_[u]=m&&"function"!=typeof y[u]?a[u]:b&&d?r(p,o):h&&y[u]==p?function(t){var e=function(e,a,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,a)}return new t(e,a,o)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):g&&"function"==typeof p?r(Function.call,p):p,g&&((_.virtual||(_.virtual={}))[u]=p,t&l.R&&P&&!P[u]&&i(P,u,p)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"6b4c":function(t,e){var a={}.toString;t.exports=function(t){return a.call(t).slice(8,-1)}},"794b":function(t,e,a){t.exports=!a("8e60")&&!a("294c")(function(){return 7!=Object.defineProperty(a("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"8e60":function(t,e,a){t.exports=!a("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9306:function(t,e,a){"use strict";var o=a("c3a1"),n=a("9aa9"),r=a("355d"),i=a("241e"),s=a("335c"),c=Object.assign;t.exports=!c||a("294c")(function(){var t={},e={},a=Symbol(),o="abcdefghijklmnopqrst";return t[a]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[a]||Object.keys(c({},e)).join("")!=o})?function(t,e){var a=i(t),c=arguments.length,l=1,u=n.f,d=r.f;while(c>l){var p,f=s(arguments[l++]),m=u?o(f).concat(u(f)):o(f),v=m.length,g=0;while(v>g)d.call(f,p=m[g++])&&(a[p]=f[p])}return a}:c},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a3c3:function(t,e,a){var o=a("63b6");o(o.S+o.F,"Object",{assign:a("9306")})},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,a){var o=a("3a38"),n=Math.min;t.exports=function(t){return t>0?n(o(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c3a1:function(t,e,a){var o=a("e6f3"),n=a("1691");t.exports=Object.keys||function(t){return o(t,n)}},d416:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-3"},[a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.openModal("new")}}},[a("i",{staticClass:"fas fa-plus mr-1"}),t._v("建立新產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(o+1))]),a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t._f("currency")(e.origin_price))+"\n                ")]),a("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t._f("currency")(e.price))+"\n                ")]),a("td",{staticClass:"text-center"},[1==e.is_enabled?a("span",{staticClass:"text-success"},[a("i",{staticClass:"fas fa-check"})]):a("span",{staticClass:"text-secondary"},[a("i",{staticClass:"fas fa-ban"})])]),a("td",{staticClass:"text-center"},[a("div",{staticClass:"btn icon-btn icon-btn-dark"},[a("i",{staticClass:"fas fa-pencil-alt",on:{click:function(a){t.openModal("edit",e)}}})]),a("div",{staticClass:"btn icon-btn icon-btn-danger"},[a("i",{staticClass:"fas fa-times",on:{click:function(a){t.openModal("delete",e)}}})])])])}),0)]),t.pagination?a("Pagination",{attrs:{"props-pagiation":t.pagination},on:{getPage:t.getProducts}}):t._e(),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                                    "),t.status.fileUpLoading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,n=o.checked?1:0;if(Array.isArray(a)){var r=null,i=t._i(a,r);o.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([r])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",n)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                                        是否啟用\n                                    ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n                    是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n                ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.updateProduct,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.updateProduct(e):null}}},[t._v("確認刪除")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("原價")]),a("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("售價")]),a("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{staticClass:"text-center",attrs:{width:"80"}},[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=a("5176"),i=a.n(r),s=a("1157"),c=a.n(s),l=a("1799"),u={data:function(){return{type:"",isLoading:!1,status:{fileUpLoading:!1},products:[],tempProduct:{},pagination:{}}},components:{Pagination:l["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/products?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e,a.user).then(function(t){console.log(t.data),t.data.success&&(a.isLoading=!1,a.products=t.data.products,a.pagination=t.data.pagination)})},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/product"),e="post",a=this;"edit"==a.type?(console.log("編輯"),t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/product/").concat(a.tempProduct.id),e="put"):"delete"==a.type&&(console.log("刪除"),t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/product/").concat(a.tempProduct.id),e="delete"),this.$http[e](t,{data:a.tempProduct}).then(function(t){console.log(t.data),t.data.success?(c()("#productModal").modal("hide"),c()("#delProductModal").modal("hide"),a.getProducts()):console.log("操作失敗")})},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,o=new FormData;o.append("file-to-upload",e),a.status.fileUpLoading=!0;var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/upload");this.$http.post(n,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){e.data.success?(a.status.fileUpLoading=!1,a.$set(a.tempProduct,"imageUrl",e.data.imageUrl)):(console.log(e.data),t.$bus.$emit("messsage:push",e.data.message,"danger"))})},openModal:function(t,e){var a=this;switch(t){case"new":a.tempProduct={},a.type="new",c()("#productModal").modal("show");break;case"edit":a.tempProduct=i()({},e),a.type="edit",c()("#productModal").modal("show");break;case"delete":a.tempProduct=i()({},e),a.type="delete",c()("#delProductModal").modal("show");break;default:break}}},created:function(){this.getProducts()}},d=u,p=a("2877"),f=Object(p["a"])(d,o,n,!1,null,null,null);f.options.__file="Products.vue";e["default"]=f.exports},d864:function(t,e,a){var o=a("79aa");t.exports=function(t,e,a){if(o(t),void 0===e)return t;switch(a){case 1:return function(a){return t.call(e,a)};case 2:return function(a,o){return t.call(e,a,o)};case 3:return function(a,o,n){return t.call(e,a,o,n)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,a){var o=a("e4ae"),n=a("794b"),r=a("1bc3"),i=Object.defineProperty;e.f=a("8e60")?Object.defineProperty:function(t,e,a){if(o(t),e=r(e,!0),o(a),n)try{return i(t,e,a)}catch(s){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},dbdb:function(t,e,a){var o=a("584a"),n=a("e53d"),r="__core-js_shared__",i=n[r]||(n[r]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:a("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,a){var o=a("f772");t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},e6f3:function(t,e,a){var o=a("07e3"),n=a("36c3"),r=a("5b4e")(!1),i=a("5559")("IE_PROTO");t.exports=function(t,e){var a,s=n(t),c=0,l=[];for(a in s)a!=i&&o(s,a)&&l.push(a);while(e.length>c)o(s,a=e[c++])&&(~r(l,a)||l.push(a));return l}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-dc6c3048.e92fe958.js.map