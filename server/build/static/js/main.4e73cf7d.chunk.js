(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),c=(t(88),t(89),t(74)),s=t(12),i=t(46),m=t(19),u=t(23),d=t(167),E=t(165),h=t(163),g=t(170),p=t(154),b=(t(90),t(61));function f(e){var a=Object(n.useState)({email_r:"",password_r:"",username_r:"",role_r:"user",email_l:"",password_l:""}),t=Object(u.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)({open:!1,message:""}),s=Object(u.a)(c,2),f=s[0],v=s[1],j=function(e){o(Object(m.a)(Object(m.a)({},l),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){localStorage.removeItem("token")}),[]),r.a.createElement("div",{className:"component-container"},r.a.createElement(d.a,{open:f.open,onClose:function(){v(Object(m.a)(Object(m.a)({},f),{},{open:!1,message:""}))},message:f.message}),r.a.createElement("div",{className:"register-container"},r.a.createElement("h1",{style:{textAlign:"center"}},"Register"),r.a.createElement(E.a,{name:"email_r",label:"Email",variant:"outlined",onChange:j}),r.a.createElement(E.a,{name:"password_r",label:"Password",type:"password",variant:"outlined",onChange:j}),r.a.createElement(E.a,{name:"username_r",label:"Username",variant:"outlined",onChange:j}),r.a.createElement(h.a,{value:l.role_r,variant:"outlined",onChange:function(e){o(Object(m.a)(Object(m.a)({},l),{},{role_r:e.target.value}))}},r.a.createElement(g.a,{value:"admin"},"admin"),r.a.createElement(g.a,{value:"user"},"user")),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){var e={email:l.email_r,username:l.username_r,password:l.password_r,role:l.role_r};""===e.email||""===e.username||""===e.password||""===e.role?v(Object(m.a)(Object(m.a)({},f),{},{open:!0,message:"Empty Fields !"})):b.post("/account/create",e).then((function(e){e.data.affectedRows>0&&v(Object(m.a)(Object(m.a)({},f),{},{open:!0,message:"Success, Please Login"}))})).catch((function(e){console.log(e)}))}},"Register")),r.a.createElement("div",{className:"login-container"},r.a.createElement("h1",{style:{textAlign:"center"}},"Login"),r.a.createElement(E.a,{name:"email_l",label:"Email",variant:"outlined",onChange:j}),r.a.createElement(E.a,{name:"password_l",label:"Password",type:"password",variant:"outlined",onChange:j}),r.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:function(){var a={email:l.email_l,password:l.password_l};""===a.email||""===a.password?v(Object(m.a)(Object(m.a)({},f),{},{open:!0,message:"Empty Fields !"})):b.post("/account/login",a).then((function(a){a.data&&(localStorage.setItem("token",a.data.token),"user"===a.data.role?e.history.push({pathname:"/user",state:{userdata:a.data}}):"admin"===a.data.role&&e.history.push({pathname:"/admin",state:{userdata:a.data}}))})).catch((function(e){console.log(e)}))}},"Login")))}t(111);var v=t(70);function j(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(null),i=Object(u.a)(c,2),m=i[0],d=i[1],E=Object(s.f)();return Object(n.useEffect)((function(){var a=localStorage.getItem("token"),t=a?v(a):null;a&&"user"===t.role?(o(a),d(E.state.userdata)):e.history.push("/")}),[e.history,E.state.userdata]),l?r.a.createElement("div",null,r.a.createElement("div",{className:"logout-container"},r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){e.history.push("/")}},"Logout")),r.a.createElement("div",{className:"button-container"},r.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"green",color:"white"},size:"large"},"Access Green"),m.isPermitted?r.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"red",color:"white"},size:"large"},"Access Red"):"")):r.a.createElement("div",null,"Loading ...")}var O=t(155),w=t(164),y=t(156),k=t(157),_=t(158),C=t(159),S=t(160),N=t(161),I=t(162),P=t(168),x=(t(116),t(61)),L=t(70);function z(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(null),i=Object(u.a)(c,2),m=i[0],d=i[1],E=Object(n.useState)(0),h=Object(u.a)(E,2),g=h[0],b=h[1],f=Object(n.useState)([]),v=Object(u.a)(f,2),j=v[0],z=v[1],A=Object(s.f)(),R=function(e){x.get("/users",{headers:{authorization:e}}).then((function(e){console.log(e.data),z(e.data)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)((function(){var a=localStorage.getItem("token"),t=a?L(a):null;a&&"admin"===t.role?(o(a),d(A.state.userdata),R(a)):e.history.push("/")}),[e.history,A.state.userdata]),l?r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{position:"static"},r.a.createElement(w.a,{value:g,onChange:function(e,a){b(a)},"aria-label":"simple tabs example"},r.a.createElement(y.a,{label:"Home"}),r.a.createElement(y.a,{label:"Pemissions"})))),r.a.createElement("div",{className:"logout-container"},r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){e.history.push("/")}},"Logout")),r.a.createElement("div",{className:"body-container"},0===g&&r.a.createElement("div",{className:"button-container"},r.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"green",color:"white"},size:"large"},"Access Green"),m.isPermitted?r.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"red",color:"white"},size:"large"},"Access Red"):""),1===g&&r.a.createElement("div",{className:"permission-table"},r.a.createElement(k.a,null,r.a.createElement(_.a,null,r.a.createElement(C.a,null,r.a.createElement(S.a,null,r.a.createElement(N.a,null,r.a.createElement("h2",null,"S.No")),r.a.createElement(N.a,null,r.a.createElement("h2",null,"Username")),r.a.createElement(N.a,null,r.a.createElement("h2",null,"Email")),r.a.createElement(N.a,null,r.a.createElement("h2",null,"Permission")))),r.a.createElement(I.a,null,j.filter((function(e){return e.accountId!==m.accountId})).map((function(e,a){return r.a.createElement(S.a,{key:a},r.a.createElement(N.a,{component:"th",scope:"row"},a+1),r.a.createElement(N.a,null,e.emailId),r.a.createElement(N.a,null,e.username),r.a.createElement(N.a,null,r.a.createElement(P.a,{checked:1===e.isPermitted,onChange:function(){!function(e,a){x.put("/permission/changePermission",{userId:e.accountId,newValue:a},{headers:{authorization:l}}).then((function(e){R(l)})).catch((function(e){console.log(e)}))}(e,1===e.isPermitted?0:1)}})))})))))))):r.a.createElement("div",null,"Loading ...")}var A=function(){return r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:f}),r.a.createElement(s.a,{exact:!0,path:"/user",component:j}),r.a.createElement(s.a,{exact:!0,path:"/admin",component:z}),r.a.createElement(s.a,{path:"*",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t(117)},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.4e73cf7d.chunk.js.map