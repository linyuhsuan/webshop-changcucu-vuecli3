(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a388e"],{"031f":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container"},[s("div",{staticClass:"shopping-car my-5"},[t._m(0),t.cartData.carts&&t.cartData.carts.length>0?s("table",{staticClass:"table"},[t._m(1),s("tbody",[t._l(t.cartData.carts,function(a,e){return s("tr",{key:e},[s("td",[s("div",{staticClass:"btn icon-btn icon-btn-danger"},[s("i",{staticClass:"fas fa-times",on:{click:function(s){t.removeCart(a.id)}}})])]),s("td",{attrs:{scope:"row"}},[s("img",{staticClass:"img-fluid",attrs:{src:""+a.product.imageUrl,alt:""}})]),s("td",[s("h1",{staticClass:"display-3"},[t._v(t._s(a.product.title))]),s("span",{staticClass:"text-secondary"},[t._v(t._s(a.product.description))])]),s("td",{attrs:{align:"right"}},[t._v("\n                            "+t._s(a.qty)+"/"+t._s(a.product.unit)+"\n                        ")]),s("td",{attrs:{align:"right"}},[s("div",{staticClass:"portfolio-price mb-3"},[s("span",{staticClass:"dark"},[t._v(t._s(t._f("currency")(a.product.price)))])])])])}),s("tr",[s("td"),s("td",[t._v("使用折價券")]),s("td",{attrs:{colspan:"2"}},[s("div",{staticClass:"input-group input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入折價券號碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用")])])])]),s("td",{attrs:{align:"right"}},[s("div",{staticClass:"portfolio-price mb-3"},[t.cartData.final_total!==t.cartData.total?s("span",{staticClass:"text-danger"},[t._v("- "+t._s(t._f("currency")(t.cartData.total-t.cartData.final_total)))]):s("span",{staticClass:"text-danger"},[t._v("- 0")])])])]),s("tr",[s("td"),s("td",{attrs:{colspan:"3"}},[t._v("總計")]),s("td",{attrs:{align:"right"}},[s("div",{staticClass:"portfolio-price mb-3"},[t.cartData.final_total!==t.cartData.total?s("span",{staticClass:"text-danger"},[t._v(t._s(t._f("currency")(t.cartData.final_total)))]):s("span",{staticClass:"text-danger"},[t._v(t._s(t._f("currency")(t.cartData.total)))])])])])],2)]):s("div",{staticClass:"bg-light text-center py-5"},[s("h6",{staticClass:"display-4"},[t._v("購物車是空的!")]),s("img",{staticClass:"mt-3",attrs:{src:t.baseUrl+"/img/icon-shopping-cart.svg",width:"100",alt:""}})])]),t.cartData.carts?s("div",{staticClass:"customer-information"},[t._m(2),s("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"username"}},[t._v("姓名 Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",id:"username",name:"name",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),t.errors.has("name")?s("span",{staticClass:"text-danger"},[t._v("必須輸入姓名")]):t._e()]),s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"usertel"}},[t._v("電話 Phone")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"text",id:"usertel",name:"tel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"useremail"}},[t._v("信箱 Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"useremail",placeholder:"請輸入信箱",name:"email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))])]),t._m(3)]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[t._v("地址 Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",id:"useraddress",placeholder:"請輸入地址",name:"address"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"usermsg"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"msg",id:"usermsg",cols:"30",rows:"2"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),t._m(4),t._m(5)])]):t._e()])],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row heading heading-2"},[s("div",{staticClass:"col-12"},[s("p",{staticClass:"display-4 subheading"},[t._v("購物車")])]),s("div",{staticClass:"col-12"},[s("h2",{staticClass:"h2 EN-font-family"},[t._v("SHOPPING CART")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"col",width:"60"}},[t._v("刪除")]),s("th",{attrs:{scope:"col",width:"120"}},[t._v("圖示")]),s("th",{attrs:{scope:"col"}},[t._v("品名")]),s("th",{staticClass:"text-right",attrs:{scope:"col",width:"100"}},[t._v("數量")]),s("th",{staticClass:"text-right",attrs:{scope:"col",width:"150"}},[t._v("金額")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row heading heading-2"},[s("div",{staticClass:"col-12"},[s("p",{staticClass:"display-4 subheading"},[t._v("客戶資訊")])]),s("div",{staticClass:"col-12"},[s("h2",{staticClass:"h2 EN-font-family"},[t._v("INFORMATION")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"userpassword"}},[t._v("會員密碼 Password")]),s("input",{staticClass:"form-control",attrs:{type:"password",id:"userpassword",placeholder:"請輸入密碼",disabled:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("div",{staticClass:"form-check"},[s("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"}}),s("label",{staticClass:"form-check-label",attrs:{for:"gridCheck"}},[t._v("\n                            收到相關資訊\n                        ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-dark px-5"},[t._v("建立訂單")])])}],o=(s("cadf"),s("551c"),s("097d"),{data:function(){return{baseUrl:"/webshop-changcucu-vuecli3/dist",cartData:{},coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1}},methods:{getCart:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/cart"),a=this;a.isLoading=!0,this.$http.get(t).then(function(t){t.data.success&&(a.isLoading=!1,a.cartData=t.data.data)})},removeCart:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/cart/").concat(t),s=this;s.isLoading=!0,this.$http.delete(a).then(function(t){t.data.success&&s.getCart()})},addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/coupon"),a=this;this.$http.post(t,{data:{code:a.coupon_code}}).then(function(t){console.log("優惠券狀態",t.data),t.data.success&&a.getCart()})},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("yellow","/order"),s=this,e=s.form;s.isLoading=!0,this.$validator.validate().then(function(r){r?t.$http.post(a,{data:e}).then(function(t){t.data.success?(console.log("訂單已成立",t.data),s.$router.push("/comfirm/".concat(t.data.orderId))):console.log("錯誤：",t.data.message),s.isLoading=!1,s.getCart()}):console.log("欄位不完整")})}},created:function(){this.getCart()}}),i=o,c=s("2877"),n=Object(c["a"])(i,e,r,!1,null,null,null);n.options.__file="CheckOut.vue";a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0a388e.f8e7bdf8.js.map