(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e837923"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.propsPagiation.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){a.preventDefault(),t.getPage(t.propsPagiation.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.propsPagiation.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.propsPagiation.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.propsPagiation.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){a.preventDefault(),t.getPage(t.propsPagiation.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},n=[],s=(e("cadf"),e("551c"),e("097d"),{name:"Pagination",props:["propsPagiation"],methods:{getPage:function(t){console.log(t),this.$emit("getPage",t)}}}),r=s,o=e("2877"),l=Object(o["a"])(r,i,n,!1,null,null,null);l.options.__file="Pagination.vue";a["a"]=l.exports},da25:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.orders,function(a){return e("tr",{key:a.id},[e("td"),e("td",[t._v(t._s(a.create_at))]),e("td",[t._v(t._s(a.user.email))]),e("td",{staticClass:"text-right"},[e("ul",t._l(t.products,function(a){return e("li",{key:a.id},[t._v("\n                            "+t._s(a.product_id)+"\n                        ")])}),0)]),e("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(a.total)+"\n                ")]),e("td",[t._v("\n                    "+t._s(a.is_paid)+"\n                ")])])}),0)]),t.pagination?e("Pagination",{attrs:{"props-pagiation":t.pagination},on:{getPage:t.getOrders}}):t._e()],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("#")]),e("th",{attrs:{width:"120"}},[t._v("購買時間")]),e("th",[t._v("Email")]),e("th",{attrs:{width:"120"}},[t._v("購買款項")]),e("th",{attrs:{width:"120"}},[t._v("應付金額")]),e("th",{attrs:{width:"100"}},[t._v("是否付款")])])])}],s=(e("1157"),e("1799")),r={data:function(){return{orders:[],pagination:{},isLoading:!1}},components:{Pagination:s["a"]},methods:{getProducts:function(){},getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/orders?page=").concat(t),e=this;e.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),t.data.success&&(e.isLoading=!1)})}},created:function(){this.getOrders()}},o=r,l=e("2877"),c=Object(l["a"])(o,i,n,!1,null,null,null);c.options.__file="Order.vue";a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-7e837923.f8602945.js.map