(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325ce395"],{"5c92":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Alert"),s("ClientNavbar"),s("main",{staticClass:"has-client-navbar-fixed-top"},[s("router-view")],1),s("ClientFooter")],1)},i=[],l=(s("cadf"),s("551c"),s("097d"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("header",{staticClass:"wrapper"},[s("nav",{staticClass:"client-navbar client-navbar-fixed-top",class:{show:t.openNav}},[s("div",{staticClass:"client-navbar-header"},[s("a",{staticClass:"client-navbar-mobil-btn",class:{open:t.openNav},attrs:{href:"#"},on:{click:function(a){t.openNav=!t.openNav}}},[s("span"),s("span"),s("span")]),s("div",{staticClass:"client-navbar-icon"},[s("a",{staticClass:"client-navbar-icon-link",attrs:{href:"#"}},[s("img",{attrs:{src:t.baseUrl+"/img/icon-ig.svg",width:"26",alt:""}})]),s("a",{staticClass:"client-navbar-icon-link",attrs:{href:"#"}},[s("img",{attrs:{src:t.baseUrl+"/img/icon-fb.svg",width:"26",alt:""}})])]),s("router-link",{staticClass:"client-navbar-logo",attrs:{to:"home"}},[s("img",{attrs:{src:t.baseUrl+"/img/logo.svg",alt:""}})]),s("div",{staticClass:"client-navbar-car"},[s("button",{staticClass:"btn",attrs:{"data-toggle":"modal","data-target":"#cartModal"}},[s("img",{attrs:{src:t.baseUrl+"/img/icon-shopping-cart.svg",width:"26",alt:""}})])])],1),s("div",{staticClass:"client-navbar-footer"},[s("div",{staticClass:"client-navbar-search"},[s("img",{attrs:{src:t.baseUrl+"/img/icon-search.svg",width:"15",alt:""}})]),s("div",{staticClass:"client-navbar-nav"},[s("router-link",{staticClass:"client-navbar-nav-link",attrs:{to:"/client/works"}},[t._v("商品列表")]),s("a",{staticClass:"client-navbar-nav-link",attrs:{href:"#"}},[t._v("訂製服務")]),s("a",{staticClass:"client-navbar-nav-link",attrs:{href:"#","data-toggle":"modal","data-target":"#memberModal"}},[t._v("會員登入")])],1),s("div",{staticClass:"client-navbar-text"},[s("a",{staticClass:"btn btn-block btn-outline-dark d-lg-none mb-3",attrs:{href:"#","data-toggle":"modal","data-target":"#memberModal"}},[t._v("會員登入")]),s("router-link",{staticClass:"client-navbar-text-link d-none d-lg-block mr-0",attrs:{to:"/login"}},[t._v("後台登入")]),s("router-link",{staticClass:"btn btn-block btn-outline-dark d-lg-none mb-3",attrs:{to:"/login"}},[t._v("後台登入")])],1)])])]),t._m(0),s("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"cartModalTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content p-3"},[t._m(1),s("div",{staticClass:"modal-body"},[t.cartData.carts&&t.cartData.carts.length>0?s("div",[s("table",{staticClass:"table table-sm"},[t._m(2),s("tbody",t._l(t.cartData.carts,function(a,e){return s("tr",{key:e},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),s("td",[t._v(t._s(a.product.title))]),s("td",{staticClass:"text-right"},[t._v(t._s(a.qty))]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.final_total)))]),s("td",[s("div",{staticClass:"btn icon-btn icon-btn-danger"},[s("i",{staticClass:"fas fa-times",on:{click:function(s){t.removeCart(a.id)}}})])])])}),0)]),s("div",{staticClass:"mt-3"},[s("button",{staticClass:"btn btn-block btn-dark",attrs:{type:"button"},on:{click:t.goCkeck}},[t._v("結帳去")])])]):s("div",{staticClass:"bg-light text-center py-4"},[s("h6",{staticClass:"display-4"},[t._v("購物車是空的!")]),s("img",{staticClass:"mt-3",attrs:{src:t.baseUrl+"/img/icon-shopping-cart.svg",width:"100",alt:""}})])])])])])])}),n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"memberModal",tabindex:"-1",role:"dialog","aria-labelledby":"memberModalTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content p-3"},[s("div",{staticClass:"p-3"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("h5",{staticClass:"modal-title display-3 text-center"},[t._v("會員登入")])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-sm-3"},[s("label",{staticClass:"col-form-label",attrs:{for:"inputEmail1"}},[t._v("信箱 Email")])]),s("div",{staticClass:"form-group col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail1","aria-describedby":"emailHelp",placeholder:"請輸入會員信箱",disabled:""}})])]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-sm-3"},[s("label",{staticClass:"col-form-label",attrs:{for:"inputPassword"}},[t._v("密碼 Password")])]),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"請輸入會員密碼",disabled:""}})])]),s("div",{staticClass:"mt-3"},[s("button",{staticClass:"btn btn-block btn-dark",attrs:{type:"buttom"}},[t._v("登入")]),s("button",{staticClass:"btn btn-block btn-outline-dark",attrs:{type:"buttom"}},[t._v("註冊")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p-3"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("h5",{staticClass:"modal-title display-3 text-center"},[t._v("購物車")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),s("th",{attrs:{scope:"col"}},[t._v("品名")]),s("th",{staticClass:"text-right",attrs:{scope:"col",width:"60"}},[t._v("數量")]),s("th",{staticClass:"text-right",attrs:{scope:"col",width:"100"}},[t._v("金額")]),s("th",{staticClass:"text-center",attrs:{scope:"col",width:"60"}},[t._v("刪除")])])])}],r=s("1157"),o=s.n(r),c={data:function(){return{baseUrl:"/webshop-changcucu-vuecli3/dist",openNav:!1,scrollTop:null,isScrollTop:!1,cartData:{}}},mounted:function(){},methods:{handleScroll:function(t){var a=document.documentElement.scrollTop;console.log(a)},getCart:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/cart"),a=this;this.$http.get(t).then(function(t){t.data.success&&(console.log("getCart"),a.cartData=t.data.data)})},removeCart:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/cart/").concat(t),s=this;this.$http.delete(a).then(function(t){t.data.success&&s.getCart()})},goCkeck:function(){this.$router.push("/client/check_out"),o()("#cartModal").modal("hide")}},created:function(){this.getCart()},watch:{}},d=c,v=s("2877"),u=Object(v["a"])(d,l,n,!1,null,null,null);u.options.__file="ClientNavbar.vue";var b=u.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"wrapper wrapper-top"},[s("div",{staticClass:"footer"},[s("img",{staticClass:"footer-logo",attrs:{src:t.baseUrl+"/img/sub-logo.svg",width:"",alt:""}}),t._m(0)])])])},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer-body"},[s("div",{staticClass:"footer-nav"},[s("a",{staticClass:"footer-nav-link",attrs:{href:"#"}},[t._v("商品列表")]),s("a",{staticClass:"footer-nav-link",attrs:{href:"#"}},[t._v("訂製服務")]),s("a",{staticClass:"footer-nav-link",attrs:{href:"#"}},[t._v("最新商品")])]),s("div",{staticClass:"footer-nav"},[s("a",{staticClass:"btn btn-outline-dark footer-nav-btn",attrs:{href:"#"}},[t._v("Facebook")]),s("a",{staticClass:"btn btn-outline-dark footer-nav-btn",attrs:{href:"#"}},[t._v("Instagram")]),s("a",{staticClass:"btn btn-outline-dark footer-nav-btn",attrs:{href:"#"}},[t._v("Shopee")])]),s("div",{staticClass:"footer-nav"},[s("small",[t._v("Copyright © 2019, .")])])])}],h={data:function(){return{baseUrl:"/webshop-changcucu-vuecli3/dist"}}},p=h,C=Object(v["a"])(p,m,f,!1,null,null,null);C.options.__file="ClientFooter.vue";var g=C.exports,_=s("a0f9"),k={name:"client",components:{ClientNavbar:b,ClientFooter:g,Alert:_["a"]}},w=k,y=Object(v["a"])(w,e,i,!1,null,null,null);y.options.__file="Client.vue";a["default"]=y.exports},"98fb":function(t,a,s){"use strict";var e=s("e5dc"),i=s.n(e);i.a},a0f9:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n        "+t._s(a.message)+"\n        "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},i=[],l=(s("ac6a"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s})},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout(function(){a.messages.forEach(function(s,e){s.timestamp===t&&a.messages.splice(e,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("messsage:push",function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)})}}),n=l,r=(s("98fb"),s("2877")),o=Object(r["a"])(n,e,i,!1,null,null,null);o.options.__file="AlertMsg.vue";a["a"]=o.exports},ac6a:function(t,a,s){for(var e=s("cadf"),i=s("0d58"),l=s("2aba"),n=s("7726"),r=s("32e9"),o=s("84f2"),c=s("2b4c"),d=c("iterator"),v=c("toStringTag"),u=o.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(b),f=0;f<m.length;f++){var h,p=m[f],C=b[p],g=n[p],_=g&&g.prototype;if(_&&(_[d]||r(_,d,u),_[v]||r(_,v,p),o[p]=u,C))for(h in e)_[h]||l(_,h,e[h],!0)}},e5dc:function(t,a,s){}}]);
//# sourceMappingURL=chunk-325ce395.d0ed19cf.js.map