(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-156348f8"],{"584a":function(e,t){var r=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)},"7f7f":function(e,t,r){var o=r("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,s="name";s in a||r("9e1e")&&o(a,s,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},a21f:function(e,t,r){var o=r("584a"),a=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},a65e:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("layout-cart",{attrs:{cardTitle:"Become an Akaba User"}},[e.show?r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Your Name:","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"address",label:"Your address:","label-for":"address"}},[r("b-form-input",{attrs:{id:"address",type:"text",required:"",placeholder:"Enter full address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("b-form-group",{attrs:{id:"phone",label:"Your Phone No:","label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",type:"text",required:"",placeholder:"Enter full address"},model:{value:e.form.phone_no,callback:function(t){e.$set(e.form,"phone_no",t)},expression:"form.phone_no"}})],1),r("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Email address:","label-for":"exampleInput1"}},[r("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"abc@gmail.com"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"exampleInputGroup3",label:"Password:","label-for":"exampleInput3"}},[r("b-form-input",{attrs:{id:"exampleInput3",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-form-group",{attrs:{id:"exampleInputGroup4",label:"Confim Password:","label-for":"exampleInput4"}},[r("b-form-input",{attrs:{id:"exampleInput4",type:"password",required:""},model:{value:e.form.cpassword,callback:function(t){e.$set(e.form,"cpassword",t)},expression:"form.cpassword"}})],1),r("b-button",{attrs:{block:"",type:"submit",variant:"outline-success"}},[e._v("Submit")]),r("b-button",{attrs:{block:"",type:"reset",variant:"outline-danger"}},[e._v("Reset")]),r("br"),r("div",{staticClass:"text-center"},[r("b-link",{attrs:{to:"/login"}},[e._v("Already have an account")])],1)],1):e._e()],1)],1)},a=[],n=(r("7f7f"),r("f499")),s=r.n(n),l=r("b3b1"),i=r("c94a"),u=r("fbd9"),p={name:"LayoutLogin",components:{LayoutCart:l["a"]},data:function(){return{form:{email:"",name:"",address:"",phone_no:"",password:"",cpassword:""},show:!0}},methods:{onSubmit:function(e){var t=this;e.preventDefault();var r=s()(this.form);Object(i["a"])().post("users",r).then(function(e){t.$router.push("/"),console.log(e.data),localStorage.setItem(u["b"],e.data.api_token),console.log(localStorage.getItem(u["b"])),t.form.name="",t.form.address="",t.form.phone_no="",t.form.email="",t.form.password="",t.form.cpassword=""})},onReset:function(e){var t=this;e.preventDefault(),this.form.name="",this.form.address="",this.form.phone_no="",this.form.email="",this.form.password="",this.form.cpassword="",this.show=!1,this.$nextTick(function(){t.show=!0})}}},f=p,m=r("2877"),d=Object(m["a"])(f,o,a,!1,null,"25712d51",null);t["default"]=d.exports},b3b1:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("br"),r("br"),r("br"),r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{lg:"3"}}),r("b-col",{attrs:{col:"",lg:"6"}},[r("br"),r("b-card",{attrs:{deck:"",header:e.cardTitle,"header-tag":"header"}},[e._t("default")],2)],1)],1)],1)],1)},a=[],n={name:"LayoutCart",props:{msg:String,cardTitle:{type:String,default:"Akaba"}}},s=n,l=r("2877"),i=Object(l["a"])(s,o,a,!1,null,null,null);t["a"]=i.exports},f499:function(e,t,r){e.exports=r("a21f")}}]);
//# sourceMappingURL=chunk-156348f8.fb41c7fa.js.map