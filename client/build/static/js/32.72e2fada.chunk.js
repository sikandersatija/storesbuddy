(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1644:function(e,a,t){"use strict";var r=t(112),n=t(23),l=t(29),s=t(34),i=t(33),o=t(0),m=t.n(o),d=t(77),c=t(1350),u=t(1565),h=t(1353),g=t(1598),b=t(1354),p=t(1348),v=t(1343),f=t(1538),E=t(2517),w=t(1812),C=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).state={username:"",firstName:"",email:"",date:new Date,creditCard:"",mobile:"",password:"",confirmPassword:"",gender:"",agreement:""},e.handleSubmit=function(e){console.log("submitted"),console.log(e)},e.handleChange=function(a){a.persist(),e.setState(Object(r.a)({},a.target.name,a.target.value))},e.handleDateChange=function(a){console.log(a),e.setState({date:a})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.ValidatorForm.addValidationRule("isPasswordMatch",function(a){return a===e.state.password})}},{key:"componentWillUnmount",value:function(){d.ValidatorForm.removeValidationRule("isPasswordMatch")}},{key:"render",value:function(){var e=this.state,a=e.username,t=e.firstName,r=e.creditCard,n=e.mobile,l=e.password,s=e.confirmPassword,i=e.gender,o=e.date,C=e.email;return m.a.createElement("div",null,m.a.createElement(d.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onError:function(e){return null}},m.a.createElement(c.a,{container:!0,spacing:6},m.a.createElement(c.a,{item:!0,lg:6,md:6,sm:12,xs:12},m.a.createElement("input",{className:"mb-16 w-100",label:"Username (Min length 4, Max length 9)",onChange:this.handleChange,type:"text",name:"username",value:a,validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-16 w-100",label:"First Name",onChange:this.handleChange,type:"text",name:"firstName",value:t,validators:["required"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-16 w-100",label:"Email",onChange:this.handleChange,type:"email",name:"email",value:C,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),m.a.createElement(f.a,{utils:w.a},m.a.createElement(E.a,{className:"mb-16 w-100",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:o,onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}})),m.a.createElement(d.TextValidator,{className:"mb-32 w-100",label:"Credit Card",onChange:this.handleChange,type:"number",name:"creditCard",value:r,validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),m.a.createElement(c.a,{item:!0,lg:6,md:6,sm:12,xs:12},m.a.createElement(d.TextValidator,{className:"mb-16 w-100",label:"Mobile Nubmer",onChange:this.handleChange,type:"text",name:"mobile",value:n,validators:["required"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-16 w-100",label:"Password",onChange:this.handleChange,name:"password",type:"password",value:l,validators:["required"],errorMessages:["this field is required"]}),m.a.createElement(d.TextValidator,{className:"mb-16 w-100",label:"Confirm Password",onChange:this.handleChange,name:"confirmPassword",type:"password",value:s,validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),m.a.createElement(u.a,{className:"mb-16",value:i,name:"gender",onChange:this.handleChange,row:!0},m.a.createElement(h.a,{value:"Male",control:m.a.createElement(g.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),m.a.createElement(h.a,{value:"Female",control:m.a.createElement(g.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),m.a.createElement(h.a,{value:"Others",control:m.a.createElement(g.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),m.a.createElement(h.a,{control:m.a.createElement(b.a,null),label:"I have read and agree to the terms of service."}))),m.a.createElement(p.a,{color:"primary",variant:"contained",type:"submit"},m.a.createElement(v.a,null,"send"),m.a.createElement("span",{className:"pl-8 capitalize"},"Send"))))}}]),t}(o.Component);a.a=C},2505:function(e,a,t){"use strict";t.r(a);var r=t(23),n=t(29),l=t(34),s=t(33),i=t(0),o=t.n(i),m=t(14),d=t(1644),c=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(m.a,{routeSegments:[{name:"Forms",path:"/forms"},{name:"Basic"}]})),o.a.createElement(d.a,null))}}]),t}(i.Component);a.default=c}}]);
//# sourceMappingURL=32.72e2fada.chunk.js.map