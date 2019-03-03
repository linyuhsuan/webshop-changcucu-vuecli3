(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e81ed79"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.propsPagiation.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){a.preventDefault(),t.getPage(t.propsPagiation.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.propsPagiation.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.propsPagiation.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.propsPagiation.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){a.preventDefault(),t.getPage(t.propsPagiation.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},o=[],i=(e("cadf"),e("551c"),e("097d"),{name:"Pagination",props:["propsPagiation"],methods:{getPage:function(t){console.log(t),this.$emit("getPage",t)}}}),n=i,l=e("2877"),c=Object(l["a"])(n,s,o,!1,null,null,null);c.options.__file="Pagination.vue";a["a"]=c.exports},b4bf:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right mt-3"},[e("button",{staticClass:"btn btn-dark",on:{click:function(a){t.openModal(!0)}}},[e("i",{staticClass:"fas fa-plus mr-1"}),t._v("建立優惠券")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.coupons,function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s+1))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.code))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.percent))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.due_date))]),e("td",{staticClass:"text-center"},[1==a.is_enabled?e("span",{staticClass:"text-success"},[e("i",{staticClass:"fas fa-check"})]):e("span",{staticClass:"text-secondary"},[e("i",{staticClass:"fas fa-ban"})])]),e("td",{staticClass:"text-center"},[e("div",{staticClass:"btn icon-btn icon-btn-dark"},[e("i",{staticClass:"fas fa-pencil-alt",on:{click:function(e){t.openModal(!1,a)}}})]),e("div",{staticClass:"btn icon-btn icon-btn-danger"},[e("i",{staticClass:"fas fa-times",on:{click:function(e){t.deleteCoupon(a.id)}}})])])])}),0)]),t.pagination?e("Pagination",{attrs:{"props-pagiation":t.pagination},on:{getPage:t.getCoupons}}):t._e(),e("div",{staticClass:"modal fade",attrs:{id:"couponModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"title"}},[t._v("名稱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入名稱"},domProps:{value:t.tempCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"title",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"code"}},[t._v("折扣碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"unit",id:"code",placeholder:"請輸入折扣碼"},domProps:{value:t.tempCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"code",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"percent",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"due_date"}},[t._v("到期日")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"text",id:"due_date",placeholder:"請輸入到期日",value:""},domProps:{value:t.tempCoupon.due_date},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"due_date",a.target.value)}}})])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(a){var e=t.tempCoupon.is_enabled,s=a.target,o=s.checked?1:0;if(Array.isArray(e)){var i=null,n=t._i(e,i);s.checked?n<0&&t.$set(t.tempCoupon,"is_enabled",e.concat([i])):n>-1&&t.$set(t.tempCoupon,"is_enabled",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.tempCoupon,"is_enabled",o)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                                是否啟用\n                            ")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.updateCoupon(t.tempCoupon.id)}}},[t._v("確認")])])])])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("#")]),e("th",{attrs:{width:"120"}},[t._v("名稱")]),e("th",{staticClass:"text-right"},[t._v("折扣碼")]),e("th",{staticClass:"text-right"},[t._v("折扣%")]),e("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("到期日")]),e("th",{staticClass:"text-center"},[t._v("是否啟用")]),e("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("操作")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增優惠券")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=e("1157"),n=e.n(i),l=e("1799"),c={data:function(){return{coupons:[],tempCoupon:{},pagination:{},isLoading:!1,isNew:!1}},components:{Pagination:l["a"]},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/coupons?page=").concat(t),e=this;e.isLoading=!0,this.$http.get(a).then(function(t){t.data.success&&(e.isLoading=!1,e.coupons=t.data.coupons)})},openModal:function(t,a){var e=this;t?(e.tempCoupon={},e.isNew=!0):(e.tempCoupon=a,e.isNew=!1),n()("#couponModel").modal("show")},updateCoupon:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/coupon"),e="post",s=this;s.isLoading=!0,s.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/coupon/").concat(t),e="put"),this.$http[e](a,{data:s.tempCoupon}).then(function(t){console.log(t.data),t.data.success&&(n()("#couponModel").modal("hide"),s.isLoading=!1,s.getCoupons())})},deleteCoupon:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/admin/coupon/").concat(t),e=this;e.isLoading=!0,this.$http.delete(a).then(function(t){t.data.success&&(e.isLoading=!1,e.getCoupons())})}},created:function(){this.getCoupons()}},r=c,p=e("2877"),d=Object(p["a"])(r,s,o,!1,null,null,null);d.options.__file="Coupon.vue";a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7e81ed79.9b4824b7.js.map